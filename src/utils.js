const { v4: uuidv4 } = require('uuid');
const zlib = require('zlib');
const $root = require('./message.js');
const crypto = require('crypto');

const regex = /<\|BEGIN_SYSTEM\|>.*?<\|END_SYSTEM\|>.*?<\|BEGIN_USER\|>.*?<\|END_USER\|>/s;

function generateCursorBody(messages, modelName, customInstructions) {

  const formattedMessages = messages.map((msg) => ({
    ...msg,
    role: msg.role === 'user' ? 1 : 2,
    messageId: uuidv4(),
  }));

  const chatBody = {
    userMessages: formattedMessages,
    instructions: {
      instruction: customInstructions || 'Respond in the same language as the user by default.',
    },
    model: {
      name: modelName,
      empty: '',
    },
    unknown13: 1,
    conversationId: uuidv4(),
    unknown16: 1,
    unknown29: 1,
    unknown31: 0,
  };

  const errMsg = $root.ChatMessage.verify(chatBody);
  if (errMsg) throw Error(errMsg);
  const chatMessageInstance = $root.ChatMessage.create(chatBody);
  let buffer = $root.ChatMessage.encode(chatMessageInstance).finish();
  let magicNumber = 0x00
  if (formattedMessages.length >= 5){
    buffer = zlib.gzipSync(buffer)
    magicNumber = 0x01
  }

  const finalBody = Buffer.concat([
    Buffer.from([magicNumber]),
    Buffer.from(buffer.length.toString(16).padStart(8, '0'), 'hex'),
    buffer
  ])

  return finalBody
}

function chunkToUtf8String(chunk) {

  const results = []
  const buffer = Buffer.from(chunk, 'hex');

  try {
    for(let i = 0; i < buffer.length; i++){
      const magicNumber = parseInt(buffer.subarray(i, i + 1).toString('hex'), 16)
      const dataLength = parseInt(buffer.subarray(i + 1, i + 5).toString('hex'), 16)
      const data = buffer.subarray(i + 5, i + 5 + dataLength)
      if(magicNumber == 0) {
        const resMessage = $root.ResMessage.decode(data);
        const content = resMessage.content
        if(content !== undefined)
          results.push(content)
      }
      if(magicNumber == 1) {
        const gunzipData = zlib.gunzipSync(data)
        const resMessage = $root.ResMessage.decode(gunzipData);
        const content = resMessage.content
        // The prompt is not empty, but skip to handle this here.
        const prompt = resMessage.prompt
        if(content !== undefined)
          results.push(content)
      }
      else { 
        // Maybe error message
        const message = data.toString('utf-8')
        //console.log(message)
      }

      i += 5 + dataLength - 1
    }
  } catch (err) {
    try {
      if (results.length == 0) {
        const message = zlib.gunzipSync(chunk.subarray(5)).toString('utf-8')
        results.push(message)
      }  
    } catch(err){
      //
    }
  }

  return results.join('')
}

function getRandomIDPro({ size, dictType, customDict }) {
  let random = '';
  if (!customDict) {
    switch (dictType) {
      case 'alphabet':
        customDict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        break;
      case 'max':
        customDict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
        break;
      default:
        customDict = '0123456789';
    }
  }
  for (; size--; ) random += customDict[(Math.random() * customDict.length) | 0];
  return random;
}

function generateHashed64Hex(input, salt = '') {
  const hash = crypto.createHash('sha256');
  hash.update(input + salt);
  return hash.digest('hex');
}

function obfuscateBytes(byteArray) {
  let t = 165;
  for (let r = 0; r < byteArray.length; r++) {
    byteArray[r] = (byteArray[r] ^ t) + (r % 256);
    t = byteArray[r];
  }
  return byteArray;
}

function generateCursorChecksum(token) {
  // 生成machineId和macMachineId
  const machineId = generateHashed64Hex(token, 'machineId');
  const macMachineId = generateHashed64Hex(token, 'macMachineId');

  // 获取时间戳并转换为字节数组
  const timestamp = Math.floor(Date.now() / 1e6);
  const byteArray = new Uint8Array([
    (timestamp >> 40) & 255,
    (timestamp >> 32) & 255,
    (timestamp >> 24) & 255,
    (timestamp >> 16) & 255,
    (timestamp >> 8) & 255,
    255 & timestamp,
  ]);

  // 混淆字节数组并进行base64编码
  const obfuscatedBytes = obfuscateBytes(byteArray);
  const encodedChecksum = Buffer.from(obfuscatedBytes).toString('base64');

  // 组合最终的checksum
  return `${encodedChecksum}${machineId}/${macMachineId}`;
}

const preprocessMessages = (messages, regexRules = []) => {
  return messages.map((message, index) => {
    let content = Array.isArray(message.content)
      ? message.content.map((c) => c.text).join("\n")
      : message.content;

    for (const rule of regexRules) {
      const range = rule.range || "0:";
      const [start, end] = range.split("-").map((n) => {
        if (n === "") return null;
        const num = parseInt(n);
        return num < 0 ? messages.length + num : num;
      });

      const isInRange = (index) => {
        const normalizedStart = Math.min(start ?? 0, end ?? messages.length);
        const normalizedEnd = Math.max(end ?? messages.length, start ?? 0);
        return index >= normalizedStart && index <= normalizedEnd;
      };

      if (isInRange(index)) {
        content = content.replace(
          new RegExp(rule.pattern, rule.flags || "g"),
          rule.replacement
        );
      }
    }

    return {
      ...message,
      content: content,
    };
  });
};

function decodeBase64(base64) {
  return base64 ? Buffer.from(base64, "base64").toString("utf-8") : ""; 
}

module.exports = {
  generateCursorBody,
  chunkToUtf8String,
  getRandomIDPro,
  generateCursorChecksum,
  preprocessMessages,
  decodeBase64,
};
