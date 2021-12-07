/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "genievot.random.random";
const baseUserval = { index: "", useraddr: "", count: 0 };
export const Userval = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.useraddr !== "") {
            writer.uint32(18).string(message.useraddr);
        }
        if (message.count !== 0) {
            writer.uint32(24).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUserval };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.useraddr = reader.string();
                    break;
                case 3:
                    message.count = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUserval };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.useraddr !== undefined && object.useraddr !== null) {
            message.useraddr = String(object.useraddr);
        }
        else {
            message.useraddr = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = Number(object.count);
        }
        else {
            message.count = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.useraddr !== undefined && (obj.useraddr = message.useraddr);
        message.count !== undefined && (obj.count = message.count);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseUserval };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.useraddr !== undefined && object.useraddr !== null) {
            message.useraddr = object.useraddr;
        }
        else {
            message.useraddr = "";
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = 0;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
