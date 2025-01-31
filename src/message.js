/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ChatMessage = (function() {

    /**
     * Properties of a ChatMessage.
     * @exports IChatMessage
     * @interface IChatMessage
     * @property {Array.<ChatMessage.IUserMessage>|null} [userMessages] ChatMessage userMessages
     * @property {ChatMessage.IInstructions|null} [instructions] ChatMessage instructions
     * @property {ChatMessage.IModel|null} [model] ChatMessage model
     * @property {number|null} [unknown13] ChatMessage unknown13
     * @property {string|null} [conversationId] ChatMessage conversationId
     * @property {number|null} [unknown16] ChatMessage unknown16
     * @property {number|null} [unknown29] ChatMessage unknown29
     * @property {number|null} [unknown31] ChatMessage unknown31
     */

    /**
     * Constructs a new ChatMessage.
     * @exports ChatMessage
     * @classdesc Represents a ChatMessage.
     * @implements IChatMessage
     * @constructor
     * @param {IChatMessage=} [properties] Properties to set
     */
    function ChatMessage(properties) {
        this.userMessages = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ChatMessage userMessages.
     * @member {Array.<ChatMessage.IUserMessage>} userMessages
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.userMessages = $util.emptyArray;

    /**
     * ChatMessage instructions.
     * @member {ChatMessage.IInstructions|null|undefined} instructions
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.instructions = null;

    /**
     * ChatMessage model.
     * @member {ChatMessage.IModel|null|undefined} model
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.model = null;

    /**
     * ChatMessage unknown13.
     * @member {number} unknown13
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown13 = 0;

    /**
     * ChatMessage conversationId.
     * @member {string} conversationId
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.conversationId = "";

    /**
     * ChatMessage unknown16.
     * @member {number} unknown16
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown16 = 0;

    /**
     * ChatMessage unknown29.
     * @member {number} unknown29
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown29 = 0;

    /**
     * ChatMessage unknown31.
     * @member {number} unknown31
     * @memberof ChatMessage
     * @instance
     */
    ChatMessage.prototype.unknown31 = 0;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @function create
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage=} [properties] Properties to set
     * @returns {ChatMessage} ChatMessage instance
     */
    ChatMessage.create = function create(properties) {
        return new ChatMessage(properties);
    };

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encode
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userMessages != null && message.userMessages.length)
            for (var i = 0; i < message.userMessages.length; ++i)
                $root.ChatMessage.UserMessage.encode(message.userMessages[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.instructions != null && Object.hasOwnProperty.call(message, "instructions"))
            $root.ChatMessage.Instructions.encode(message.instructions, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.model != null && Object.hasOwnProperty.call(message, "model"))
            $root.ChatMessage.Model.encode(message.model, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.unknown13 != null && Object.hasOwnProperty.call(message, "unknown13"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.unknown13);
        if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.conversationId);
        if (message.unknown16 != null && Object.hasOwnProperty.call(message, "unknown16"))
            writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.unknown16);
        if (message.unknown29 != null && Object.hasOwnProperty.call(message, "unknown29"))
            writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.unknown29);
        if (message.unknown31 != null && Object.hasOwnProperty.call(message, "unknown31"))
            writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.unknown31);
        return writer;
    };

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {IChatMessage} message ChatMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    if (!(message.userMessages && message.userMessages.length))
                        message.userMessages = [];
                    message.userMessages.push($root.ChatMessage.UserMessage.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    message.instructions = $root.ChatMessage.Instructions.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.model = $root.ChatMessage.Model.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.unknown13 = reader.uint32();
                    break;
                }
            case 15: {
                    message.conversationId = reader.string();
                    break;
                }
            case 16: {
                    message.unknown16 = reader.uint32();
                    break;
                }
            case 29: {
                    message.unknown29 = reader.uint32();
                    break;
                }
            case 31: {
                    message.unknown31 = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ChatMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ChatMessage} ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ChatMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ChatMessage message.
     * @function verify
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ChatMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userMessages != null && message.hasOwnProperty("userMessages")) {
            if (!Array.isArray(message.userMessages))
                return "userMessages: array expected";
            for (var i = 0; i < message.userMessages.length; ++i) {
                var error = $root.ChatMessage.UserMessage.verify(message.userMessages[i]);
                if (error)
                    return "userMessages." + error;
            }
        }
        if (message.instructions != null && message.hasOwnProperty("instructions")) {
            var error = $root.ChatMessage.Instructions.verify(message.instructions);
            if (error)
                return "instructions." + error;
        }
        if (message.model != null && message.hasOwnProperty("model")) {
            var error = $root.ChatMessage.Model.verify(message.model);
            if (error)
                return "model." + error;
        }
        if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
            if (!$util.isInteger(message.unknown13))
                return "unknown13: integer expected";
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            if (!$util.isString(message.conversationId))
                return "conversationId: string expected";
        if (message.unknown16 != null && message.hasOwnProperty("unknown16"))
            if (!$util.isInteger(message.unknown16))
                return "unknown16: integer expected";
        if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
            if (!$util.isInteger(message.unknown29))
                return "unknown29: integer expected";
        if (message.unknown31 != null && message.hasOwnProperty("unknown31"))
            if (!$util.isInteger(message.unknown31))
                return "unknown31: integer expected";
        return null;
    };

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ChatMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ChatMessage} ChatMessage
     */
    ChatMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ChatMessage)
            return object;
        var message = new $root.ChatMessage();
        if (object.userMessages) {
            if (!Array.isArray(object.userMessages))
                throw TypeError(".ChatMessage.userMessages: array expected");
            message.userMessages = [];
            for (var i = 0; i < object.userMessages.length; ++i) {
                if (typeof object.userMessages[i] !== "object")
                    throw TypeError(".ChatMessage.userMessages: object expected");
                message.userMessages[i] = $root.ChatMessage.UserMessage.fromObject(object.userMessages[i]);
            }
        }
        if (object.instructions != null) {
            if (typeof object.instructions !== "object")
                throw TypeError(".ChatMessage.instructions: object expected");
            message.instructions = $root.ChatMessage.Instructions.fromObject(object.instructions);
        }
        if (object.model != null) {
            if (typeof object.model !== "object")
                throw TypeError(".ChatMessage.model: object expected");
            message.model = $root.ChatMessage.Model.fromObject(object.model);
        }
        if (object.unknown13 != null)
            message.unknown13 = object.unknown13 >>> 0;
        if (object.conversationId != null)
            message.conversationId = String(object.conversationId);
        if (object.unknown16 != null)
            message.unknown16 = object.unknown16 >>> 0;
        if (object.unknown29 != null)
            message.unknown29 = object.unknown29 >>> 0;
        if (object.unknown31 != null)
            message.unknown31 = object.unknown31 >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ChatMessage
     * @static
     * @param {ChatMessage} message ChatMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ChatMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.userMessages = [];
        if (options.defaults) {
            object.instructions = null;
            object.model = null;
            object.unknown13 = 0;
            object.conversationId = "";
            object.unknown16 = 0;
            object.unknown29 = 0;
            object.unknown31 = 0;
        }
        if (message.userMessages && message.userMessages.length) {
            object.userMessages = [];
            for (var j = 0; j < message.userMessages.length; ++j)
                object.userMessages[j] = $root.ChatMessage.UserMessage.toObject(message.userMessages[j], options);
        }
        if (message.instructions != null && message.hasOwnProperty("instructions"))
            object.instructions = $root.ChatMessage.Instructions.toObject(message.instructions, options);
        if (message.model != null && message.hasOwnProperty("model"))
            object.model = $root.ChatMessage.Model.toObject(message.model, options);
        if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
            object.unknown13 = message.unknown13;
        if (message.conversationId != null && message.hasOwnProperty("conversationId"))
            object.conversationId = message.conversationId;
        if (message.unknown16 != null && message.hasOwnProperty("unknown16"))
            object.unknown16 = message.unknown16;
        if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
            object.unknown29 = message.unknown29;
        if (message.unknown31 != null && message.hasOwnProperty("unknown31"))
            object.unknown31 = message.unknown31;
        return object;
    };

    /**
     * Converts this ChatMessage to JSON.
     * @function toJSON
     * @memberof ChatMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ChatMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ChatMessage
     * @function getTypeUrl
     * @memberof ChatMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ChatMessage";
    };

    ChatMessage.FileContent = (function() {

        /**
         * Properties of a FileContent.
         * @memberof ChatMessage
         * @interface IFileContent
         * @property {string|null} [filename] FileContent filename
         * @property {string|null} [content] FileContent content
         * @property {ChatMessage.FileContent.IPosition|null} [position] FileContent position
         * @property {string|null} [language] FileContent language
         * @property {ChatMessage.FileContent.IRange|null} [range] FileContent range
         * @property {number|null} [length] FileContent length
         * @property {number|null} [type] FileContent type
         * @property {number|null} [errorCode] FileContent errorCode
         */

        /**
         * Constructs a new FileContent.
         * @memberof ChatMessage
         * @classdesc Represents a FileContent.
         * @implements IFileContent
         * @constructor
         * @param {ChatMessage.IFileContent=} [properties] Properties to set
         */
        function FileContent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileContent filename.
         * @member {string} filename
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.filename = "";

        /**
         * FileContent content.
         * @member {string} content
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.content = "";

        /**
         * FileContent position.
         * @member {ChatMessage.FileContent.IPosition|null|undefined} position
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.position = null;

        /**
         * FileContent language.
         * @member {string} language
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.language = "";

        /**
         * FileContent range.
         * @member {ChatMessage.FileContent.IRange|null|undefined} range
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.range = null;

        /**
         * FileContent length.
         * @member {number} length
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.length = 0;

        /**
         * FileContent type.
         * @member {number} type
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.type = 0;

        /**
         * FileContent errorCode.
         * @member {number} errorCode
         * @memberof ChatMessage.FileContent
         * @instance
         */
        FileContent.prototype.errorCode = 0;

        /**
         * Creates a new FileContent instance using the specified properties.
         * @function create
         * @memberof ChatMessage.FileContent
         * @static
         * @param {ChatMessage.IFileContent=} [properties] Properties to set
         * @returns {ChatMessage.FileContent} FileContent instance
         */
        FileContent.create = function create(properties) {
            return new FileContent(properties);
        };

        /**
         * Encodes the specified FileContent message. Does not implicitly {@link ChatMessage.FileContent.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.FileContent
         * @static
         * @param {ChatMessage.IFileContent} message FileContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                $root.ChatMessage.FileContent.Position.encode(message.position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.language);
            if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                $root.ChatMessage.FileContent.Range.encode(message.range, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.length);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.type);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified FileContent message, length delimited. Does not implicitly {@link ChatMessage.FileContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.FileContent
         * @static
         * @param {ChatMessage.IFileContent} message FileContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileContent message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.FileContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.FileContent} FileContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.FileContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.filename = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.position = $root.ChatMessage.FileContent.Position.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.language = reader.string();
                        break;
                    }
                case 6: {
                        message.range = $root.ChatMessage.FileContent.Range.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.length = reader.int32();
                        break;
                    }
                case 9: {
                        message.type = reader.int32();
                        break;
                    }
                case 11: {
                        message.errorCode = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.FileContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.FileContent} FileContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileContent message.
         * @function verify
         * @memberof ChatMessage.FileContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                var error = $root.ChatMessage.FileContent.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.range != null && message.hasOwnProperty("range")) {
                var error = $root.ChatMessage.FileContent.Range.verify(message.range);
                if (error)
                    return "range." + error;
            }
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isInteger(message.errorCode))
                    return "errorCode: integer expected";
            return null;
        };

        /**
         * Creates a FileContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.FileContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.FileContent} FileContent
         */
        FileContent.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.FileContent)
                return object;
            var message = new $root.ChatMessage.FileContent();
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.content != null)
                message.content = String(object.content);
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".ChatMessage.FileContent.position: object expected");
                message.position = $root.ChatMessage.FileContent.Position.fromObject(object.position);
            }
            if (object.language != null)
                message.language = String(object.language);
            if (object.range != null) {
                if (typeof object.range !== "object")
                    throw TypeError(".ChatMessage.FileContent.range: object expected");
                message.range = $root.ChatMessage.FileContent.Range.fromObject(object.range);
            }
            if (object.length != null)
                message.length = object.length | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.errorCode != null)
                message.errorCode = object.errorCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a FileContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.FileContent
         * @static
         * @param {ChatMessage.FileContent} message FileContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.filename = "";
                object.content = "";
                object.position = null;
                object.language = "";
                object.range = null;
                object.length = 0;
                object.type = 0;
                object.errorCode = 0;
            }
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.ChatMessage.FileContent.Position.toObject(message.position, options);
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.range != null && message.hasOwnProperty("range"))
                object.range = $root.ChatMessage.FileContent.Range.toObject(message.range, options);
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            return object;
        };

        /**
         * Converts this FileContent to JSON.
         * @function toJSON
         * @memberof ChatMessage.FileContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileContent
         * @function getTypeUrl
         * @memberof ChatMessage.FileContent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.FileContent";
        };

        FileContent.Position = (function() {

            /**
             * Properties of a Position.
             * @memberof ChatMessage.FileContent
             * @interface IPosition
             * @property {number|null} [line] Position line
             * @property {number|null} [column] Position column
             */

            /**
             * Constructs a new Position.
             * @memberof ChatMessage.FileContent
             * @classdesc Represents a Position.
             * @implements IPosition
             * @constructor
             * @param {ChatMessage.FileContent.IPosition=} [properties] Properties to set
             */
            function Position(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Position line.
             * @member {number} line
             * @memberof ChatMessage.FileContent.Position
             * @instance
             */
            Position.prototype.line = 0;

            /**
             * Position column.
             * @member {number} column
             * @memberof ChatMessage.FileContent.Position
             * @instance
             */
            Position.prototype.column = 0;

            /**
             * Creates a new Position instance using the specified properties.
             * @function create
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {ChatMessage.FileContent.IPosition=} [properties] Properties to set
             * @returns {ChatMessage.FileContent.Position} Position instance
             */
            Position.create = function create(properties) {
                return new Position(properties);
            };

            /**
             * Encodes the specified Position message. Does not implicitly {@link ChatMessage.FileContent.Position.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {ChatMessage.FileContent.IPosition} message Position message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Position.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.line);
                if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.column);
                return writer;
            };

            /**
             * Encodes the specified Position message, length delimited. Does not implicitly {@link ChatMessage.FileContent.Position.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {ChatMessage.FileContent.IPosition} message Position message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Position.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Position message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.FileContent.Position} Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Position.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.FileContent.Position();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.line = reader.int32();
                            break;
                        }
                    case 2: {
                            message.column = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Position message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.FileContent.Position} Position
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Position.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Position message.
             * @function verify
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Position.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.line != null && message.hasOwnProperty("line"))
                    if (!$util.isInteger(message.line))
                        return "line: integer expected";
                if (message.column != null && message.hasOwnProperty("column"))
                    if (!$util.isInteger(message.column))
                        return "column: integer expected";
                return null;
            };

            /**
             * Creates a Position message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.FileContent.Position} Position
             */
            Position.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.FileContent.Position)
                    return object;
                var message = new $root.ChatMessage.FileContent.Position();
                if (object.line != null)
                    message.line = object.line | 0;
                if (object.column != null)
                    message.column = object.column | 0;
                return message;
            };

            /**
             * Creates a plain object from a Position message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {ChatMessage.FileContent.Position} message Position
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Position.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.line = 0;
                    object.column = 0;
                }
                if (message.line != null && message.hasOwnProperty("line"))
                    object.line = message.line;
                if (message.column != null && message.hasOwnProperty("column"))
                    object.column = message.column;
                return object;
            };

            /**
             * Converts this Position to JSON.
             * @function toJSON
             * @memberof ChatMessage.FileContent.Position
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Position.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Position
             * @function getTypeUrl
             * @memberof ChatMessage.FileContent.Position
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Position.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ChatMessage.FileContent.Position";
            };

            return Position;
        })();

        FileContent.Range = (function() {

            /**
             * Properties of a Range.
             * @memberof ChatMessage.FileContent
             * @interface IRange
             * @property {ChatMessage.FileContent.IPosition|null} [start] Range start
             * @property {ChatMessage.FileContent.IPosition|null} [end] Range end
             */

            /**
             * Constructs a new Range.
             * @memberof ChatMessage.FileContent
             * @classdesc Represents a Range.
             * @implements IRange
             * @constructor
             * @param {ChatMessage.FileContent.IRange=} [properties] Properties to set
             */
            function Range(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Range start.
             * @member {ChatMessage.FileContent.IPosition|null|undefined} start
             * @memberof ChatMessage.FileContent.Range
             * @instance
             */
            Range.prototype.start = null;

            /**
             * Range end.
             * @member {ChatMessage.FileContent.IPosition|null|undefined} end
             * @memberof ChatMessage.FileContent.Range
             * @instance
             */
            Range.prototype.end = null;

            /**
             * Creates a new Range instance using the specified properties.
             * @function create
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {ChatMessage.FileContent.IRange=} [properties] Properties to set
             * @returns {ChatMessage.FileContent.Range} Range instance
             */
            Range.create = function create(properties) {
                return new Range(properties);
            };

            /**
             * Encodes the specified Range message. Does not implicitly {@link ChatMessage.FileContent.Range.verify|verify} messages.
             * @function encode
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {ChatMessage.FileContent.IRange} message Range message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Range.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    $root.ChatMessage.FileContent.Position.encode(message.start, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    $root.ChatMessage.FileContent.Position.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Range message, length delimited. Does not implicitly {@link ChatMessage.FileContent.Range.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {ChatMessage.FileContent.IRange} message Range message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Range.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Range message from the specified reader or buffer.
             * @function decode
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ChatMessage.FileContent.Range} Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Range.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.FileContent.Range();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.start = $root.ChatMessage.FileContent.Position.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.end = $root.ChatMessage.FileContent.Position.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Range message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ChatMessage.FileContent.Range} Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Range.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Range message.
             * @function verify
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Range.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start != null && message.hasOwnProperty("start")) {
                    var error = $root.ChatMessage.FileContent.Position.verify(message.start);
                    if (error)
                        return "start." + error;
                }
                if (message.end != null && message.hasOwnProperty("end")) {
                    var error = $root.ChatMessage.FileContent.Position.verify(message.end);
                    if (error)
                        return "end." + error;
                }
                return null;
            };

            /**
             * Creates a Range message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ChatMessage.FileContent.Range} Range
             */
            Range.fromObject = function fromObject(object) {
                if (object instanceof $root.ChatMessage.FileContent.Range)
                    return object;
                var message = new $root.ChatMessage.FileContent.Range();
                if (object.start != null) {
                    if (typeof object.start !== "object")
                        throw TypeError(".ChatMessage.FileContent.Range.start: object expected");
                    message.start = $root.ChatMessage.FileContent.Position.fromObject(object.start);
                }
                if (object.end != null) {
                    if (typeof object.end !== "object")
                        throw TypeError(".ChatMessage.FileContent.Range.end: object expected");
                    message.end = $root.ChatMessage.FileContent.Position.fromObject(object.end);
                }
                return message;
            };

            /**
             * Creates a plain object from a Range message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {ChatMessage.FileContent.Range} message Range
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Range.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.start = null;
                    object.end = null;
                }
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = $root.ChatMessage.FileContent.Position.toObject(message.start, options);
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = $root.ChatMessage.FileContent.Position.toObject(message.end, options);
                return object;
            };

            /**
             * Converts this Range to JSON.
             * @function toJSON
             * @memberof ChatMessage.FileContent.Range
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Range.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Range
             * @function getTypeUrl
             * @memberof ChatMessage.FileContent.Range
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Range.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/ChatMessage.FileContent.Range";
            };

            return Range;
        })();

        return FileContent;
    })();

    ChatMessage.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof ChatMessage
         * @interface IUserMessage
         * @property {string|null} [content] UserMessage content
         * @property {number|null} [role] UserMessage role
         * @property {string|null} [messageId] UserMessage messageId
         */

        /**
         * Constructs a new UserMessage.
         * @memberof ChatMessage
         * @classdesc Represents a UserMessage.
         * @implements IUserMessage
         * @constructor
         * @param {ChatMessage.IUserMessage=} [properties] Properties to set
         */
        function UserMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessage content.
         * @member {string} content
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.content = "";

        /**
         * UserMessage role.
         * @member {number} role
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.role = 0;

        /**
         * UserMessage messageId.
         * @member {string} messageId
         * @memberof ChatMessage.UserMessage
         * @instance
         */
        UserMessage.prototype.messageId = "";

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @function create
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage=} [properties] Properties to set
         * @returns {ChatMessage.UserMessage} UserMessage instance
         */
        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link ChatMessage.UserMessage.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.role);
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.messageId);
            return writer;
        };

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link ChatMessage.UserMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.UserMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                case 2: {
                        message.role = reader.uint32();
                        break;
                    }
                case 13: {
                        message.messageId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessage message.
         * @function verify
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isInteger(message.role))
                    return "role: integer expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            return null;
        };

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.UserMessage} UserMessage
         */
        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.UserMessage)
                return object;
            var message = new $root.ChatMessage.UserMessage();
            if (object.content != null)
                message.content = String(object.content);
            if (object.role != null)
                message.role = object.role >>> 0;
            if (object.messageId != null)
                message.messageId = String(object.messageId);
            return message;
        };

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {ChatMessage.UserMessage} message UserMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.role = 0;
                object.messageId = "";
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            return object;
        };

        /**
         * Converts this UserMessage to JSON.
         * @function toJSON
         * @memberof ChatMessage.UserMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserMessage
         * @function getTypeUrl
         * @memberof ChatMessage.UserMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.UserMessage";
        };

        return UserMessage;
    })();

    ChatMessage.Instructions = (function() {

        /**
         * Properties of an Instructions.
         * @memberof ChatMessage
         * @interface IInstructions
         * @property {string|null} [instruction] Instructions instruction
         */

        /**
         * Constructs a new Instructions.
         * @memberof ChatMessage
         * @classdesc Represents an Instructions.
         * @implements IInstructions
         * @constructor
         * @param {ChatMessage.IInstructions=} [properties] Properties to set
         */
        function Instructions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Instructions instruction.
         * @member {string} instruction
         * @memberof ChatMessage.Instructions
         * @instance
         */
        Instructions.prototype.instruction = "";

        /**
         * Creates a new Instructions instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.IInstructions=} [properties] Properties to set
         * @returns {ChatMessage.Instructions} Instructions instance
         */
        Instructions.create = function create(properties) {
            return new Instructions(properties);
        };

        /**
         * Encodes the specified Instructions message. Does not implicitly {@link ChatMessage.Instructions.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.IInstructions} message Instructions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instructions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instruction != null && Object.hasOwnProperty.call(message, "instruction"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.instruction);
            return writer;
        };

        /**
         * Encodes the specified Instructions message, length delimited. Does not implicitly {@link ChatMessage.Instructions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.IInstructions} message Instructions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instructions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Instructions message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Instructions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Instructions} Instructions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instructions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Instructions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.instruction = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Instructions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Instructions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Instructions} Instructions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instructions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Instructions message.
         * @function verify
         * @memberof ChatMessage.Instructions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Instructions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                if (!$util.isString(message.instruction))
                    return "instruction: string expected";
            return null;
        };

        /**
         * Creates an Instructions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Instructions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Instructions} Instructions
         */
        Instructions.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Instructions)
                return object;
            var message = new $root.ChatMessage.Instructions();
            if (object.instruction != null)
                message.instruction = String(object.instruction);
            return message;
        };

        /**
         * Creates a plain object from an Instructions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Instructions
         * @static
         * @param {ChatMessage.Instructions} message Instructions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Instructions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.instruction = "";
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = message.instruction;
            return object;
        };

        /**
         * Converts this Instructions to JSON.
         * @function toJSON
         * @memberof ChatMessage.Instructions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Instructions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Instructions
         * @function getTypeUrl
         * @memberof ChatMessage.Instructions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Instructions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Instructions";
        };

        return Instructions;
    })();

    ChatMessage.Model = (function() {

        /**
         * Properties of a Model.
         * @memberof ChatMessage
         * @interface IModel
         * @property {string|null} [name] Model name
         * @property {string|null} [empty] Model empty
         */

        /**
         * Constructs a new Model.
         * @memberof ChatMessage
         * @classdesc Represents a Model.
         * @implements IModel
         * @constructor
         * @param {ChatMessage.IModel=} [properties] Properties to set
         */
        function Model(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Model name.
         * @member {string} name
         * @memberof ChatMessage.Model
         * @instance
         */
        Model.prototype.name = "";

        /**
         * Model empty.
         * @member {string} empty
         * @memberof ChatMessage.Model
         * @instance
         */
        Model.prototype.empty = "";

        /**
         * Creates a new Model instance using the specified properties.
         * @function create
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.IModel=} [properties] Properties to set
         * @returns {ChatMessage.Model} Model instance
         */
        Model.create = function create(properties) {
            return new Model(properties);
        };

        /**
         * Encodes the specified Model message. Does not implicitly {@link ChatMessage.Model.verify|verify} messages.
         * @function encode
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.empty);
            return writer;
        };

        /**
         * Encodes the specified Model message, length delimited. Does not implicitly {@link ChatMessage.Model.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Model message from the specified reader or buffer.
         * @function decode
         * @memberof ChatMessage.Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ChatMessage.Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ChatMessage.Model();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.empty = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Model message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ChatMessage.Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ChatMessage.Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Model message.
         * @function verify
         * @memberof ChatMessage.Model
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Model.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.empty != null && message.hasOwnProperty("empty"))
                if (!$util.isString(message.empty))
                    return "empty: string expected";
            return null;
        };

        /**
         * Creates a Model message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ChatMessage.Model
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ChatMessage.Model} Model
         */
        Model.fromObject = function fromObject(object) {
            if (object instanceof $root.ChatMessage.Model)
                return object;
            var message = new $root.ChatMessage.Model();
            if (object.name != null)
                message.name = String(object.name);
            if (object.empty != null)
                message.empty = String(object.empty);
            return message;
        };

        /**
         * Creates a plain object from a Model message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ChatMessage.Model
         * @static
         * @param {ChatMessage.Model} message Model
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Model.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.empty = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.empty != null && message.hasOwnProperty("empty"))
                object.empty = message.empty;
            return object;
        };

        /**
         * Converts this Model to JSON.
         * @function toJSON
         * @memberof ChatMessage.Model
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Model.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Model
         * @function getTypeUrl
         * @memberof ChatMessage.Model
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Model.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ChatMessage.Model";
        };

        return Model;
    })();

    return ChatMessage;
})();

$root.ResMessage = (function() {

    /**
     * Properties of a ResMessage.
     * @exports IResMessage
     * @interface IResMessage
     * @property {string|null} [content] ResMessage content
     * @property {string|null} [empty] ResMessage empty
     * @property {string|null} [prompt] ResMessage prompt
     */

    /**
     * Constructs a new ResMessage.
     * @exports ResMessage
     * @classdesc Represents a ResMessage.
     * @implements IResMessage
     * @constructor
     * @param {IResMessage=} [properties] Properties to set
     */
    function ResMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResMessage content.
     * @member {string} content
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.content = "";

    /**
     * ResMessage empty.
     * @member {string} empty
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.empty = "";

    /**
     * ResMessage prompt.
     * @member {string} prompt
     * @memberof ResMessage
     * @instance
     */
    ResMessage.prototype.prompt = "";

    /**
     * Creates a new ResMessage instance using the specified properties.
     * @function create
     * @memberof ResMessage
     * @static
     * @param {IResMessage=} [properties] Properties to set
     * @returns {ResMessage} ResMessage instance
     */
    ResMessage.create = function create(properties) {
        return new ResMessage(properties);
    };

    /**
     * Encodes the specified ResMessage message. Does not implicitly {@link ResMessage.verify|verify} messages.
     * @function encode
     * @memberof ResMessage
     * @static
     * @param {IResMessage} message ResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.empty);
        if (message.prompt != null && Object.hasOwnProperty.call(message, "prompt"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.prompt);
        return writer;
    };

    /**
     * Encodes the specified ResMessage message, length delimited. Does not implicitly {@link ResMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResMessage
     * @static
     * @param {IResMessage} message ResMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResMessage} ResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 4: {
                    message.empty = reader.string();
                    break;
                }
            case 5: {
                    message.prompt = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResMessage} ResMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResMessage message.
     * @function verify
     * @memberof ResMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.empty != null && message.hasOwnProperty("empty"))
            if (!$util.isString(message.empty))
                return "empty: string expected";
        if (message.prompt != null && message.hasOwnProperty("prompt"))
            if (!$util.isString(message.prompt))
                return "prompt: string expected";
        return null;
    };

    /**
     * Creates a ResMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResMessage} ResMessage
     */
    ResMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ResMessage)
            return object;
        var message = new $root.ResMessage();
        if (object.content != null)
            message.content = String(object.content);
        if (object.empty != null)
            message.empty = String(object.empty);
        if (object.prompt != null)
            message.prompt = String(object.prompt);
        return message;
    };

    /**
     * Creates a plain object from a ResMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResMessage
     * @static
     * @param {ResMessage} message ResMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.empty = "";
            object.prompt = "";
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.empty != null && message.hasOwnProperty("empty"))
            object.empty = message.empty;
        if (message.prompt != null && message.hasOwnProperty("prompt"))
            object.prompt = message.prompt;
        return object;
    };

    /**
     * Converts this ResMessage to JSON.
     * @function toJSON
     * @memberof ResMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResMessage
     * @function getTypeUrl
     * @memberof ResMessage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResMessage";
    };

    return ResMessage;
})();

module.exports = $root;
