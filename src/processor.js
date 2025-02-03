const { chunkToUtf8String } = require("./utils.js");
const { StreamRegex } = require("stream-regex");
const { Readable } = require("stream");

class StreamProcessor {
  constructor(response, options) {
    this.response = response;
    this.options = options;
    this.buffer = "";
    this.hasStarted = !options.start?.length;
  }

  async *processStream() {
    const { start, stop, outputRegex } = this.options;

    const streamRegexes = outputRegex.map((rule) => ({
      streamRegex: new StreamRegex(new RegExp(rule.pattern, rule.flags || "g")),
      replacement: rule.replacement,
    }));

    // 创建一个异步迭代器来处理响应数据
    const decodedIterator = async function* () {
      for await (const chunk of this.response.body) {
        yield await chunkToUtf8String(chunk);
      }
    }.bind(this)();

    // 创建一个可读流
    const decodedStream = Readable.from(decodedIterator);

    // 应用所有正则表达式规则
    let processedStream = decodedStream;
    for (const { streamRegex, replacement } of streamRegexes) {
      processedStream = streamRegex.replace(processedStream, replacement);
    }

    // 处理流数据
    for await (const text of processedStream) {
      if (text.length > 0) {
        this.buffer += text;

        if (!this.hasStarted) {
          const startsIndex = start.reduce((index, startStr) => {
            const foundIndex = this.buffer.indexOf(startStr);
            return foundIndex !== -1 && (index === -1 || foundIndex < index)
              ? foundIndex
              : index;
          }, -1);

          if (startsIndex !== -1) {
            this.hasStarted = true;
            const matchedStart = start.find(
              (startStr) => this.buffer.indexOf(startStr) === startsIndex
            );
            this.buffer = this.buffer.substring(
              startsIndex + matchedStart.length
            );
          } else {
            continue;
          }
        }

        if (stop?.length) {
          const stopsIndex = stop.reduce((index, stopStr) => {
            const foundIndex = this.buffer.indexOf(stopStr);
            return foundIndex !== -1 && (index === -1 || foundIndex < index)
              ? foundIndex
              : index;
          }, -1);

          if (stopsIndex !== -1) {
            yield this.buffer.substring(0, stopsIndex);
            return;
          }
        }

        if (this.hasStarted) {
          if (stop?.length) {
            const maxStopLength = Math.max(...stop.map((str) => str.length));
            const safeLength = Math.max(0, this.buffer.length - maxStopLength);

            if (safeLength > 0) {
              const sendText = this.buffer.substring(0, safeLength);
              this.buffer = this.buffer.substring(safeLength);
              yield sendText;
            }
          } else {
            yield this.buffer;
            this.buffer = "";
          }
        }
      }
    }

    if (this.buffer.length > 0 && this.hasStarted) {
      yield this.buffer;
    }
  }
}

module.exports = StreamProcessor;
