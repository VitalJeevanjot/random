/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "genievot.random.random";
const baseRandomval = {
    index: "",
    creator: "",
    vrv: "",
    multiplier: 0,
    proof: "",
    pubk: "",
    message: "",
    parsedvrv: 0,
    floatvrv: 0,
    finalvrv: 0,
};
export const Randomval = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.vrv !== "") {
            writer.uint32(26).string(message.vrv);
        }
        if (message.multiplier !== 0) {
            writer.uint32(32).uint64(message.multiplier);
        }
        if (message.proof !== "") {
            writer.uint32(42).string(message.proof);
        }
        if (message.pubk !== "") {
            writer.uint32(50).string(message.pubk);
        }
        if (message.message !== "") {
            writer.uint32(58).string(message.message);
        }
        if (message.parsedvrv !== 0) {
            writer.uint32(64).uint64(message.parsedvrv);
        }
        if (message.floatvrv !== 0) {
            writer.uint32(73).double(message.floatvrv);
        }
        if (message.finalvrv !== 0) {
            writer.uint32(80).uint64(message.finalvrv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRandomval };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.vrv = reader.string();
                    break;
                case 4:
                    message.multiplier = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.proof = reader.string();
                    break;
                case 6:
                    message.pubk = reader.string();
                    break;
                case 7:
                    message.message = reader.string();
                    break;
                case 8:
                    message.parsedvrv = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.floatvrv = reader.double();
                    break;
                case 10:
                    message.finalvrv = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRandomval };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.vrv !== undefined && object.vrv !== null) {
            message.vrv = String(object.vrv);
        }
        else {
            message.vrv = "";
        }
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = Number(object.multiplier);
        }
        else {
            message.multiplier = 0;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = String(object.proof);
        }
        else {
            message.proof = "";
        }
        if (object.pubk !== undefined && object.pubk !== null) {
            message.pubk = String(object.pubk);
        }
        else {
            message.pubk = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = "";
        }
        if (object.parsedvrv !== undefined && object.parsedvrv !== null) {
            message.parsedvrv = Number(object.parsedvrv);
        }
        else {
            message.parsedvrv = 0;
        }
        if (object.floatvrv !== undefined && object.floatvrv !== null) {
            message.floatvrv = Number(object.floatvrv);
        }
        else {
            message.floatvrv = 0;
        }
        if (object.finalvrv !== undefined && object.finalvrv !== null) {
            message.finalvrv = Number(object.finalvrv);
        }
        else {
            message.finalvrv = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.creator !== undefined && (obj.creator = message.creator);
        message.vrv !== undefined && (obj.vrv = message.vrv);
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        message.proof !== undefined && (obj.proof = message.proof);
        message.pubk !== undefined && (obj.pubk = message.pubk);
        message.message !== undefined && (obj.message = message.message);
        message.parsedvrv !== undefined && (obj.parsedvrv = message.parsedvrv);
        message.floatvrv !== undefined && (obj.floatvrv = message.floatvrv);
        message.finalvrv !== undefined && (obj.finalvrv = message.finalvrv);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRandomval };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.vrv !== undefined && object.vrv !== null) {
            message.vrv = object.vrv;
        }
        else {
            message.vrv = "";
        }
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = object.multiplier;
        }
        else {
            message.multiplier = 0;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = "";
        }
        if (object.pubk !== undefined && object.pubk !== null) {
            message.pubk = object.pubk;
        }
        else {
            message.pubk = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = "";
        }
        if (object.parsedvrv !== undefined && object.parsedvrv !== null) {
            message.parsedvrv = object.parsedvrv;
        }
        else {
            message.parsedvrv = 0;
        }
        if (object.floatvrv !== undefined && object.floatvrv !== null) {
            message.floatvrv = object.floatvrv;
        }
        else {
            message.floatvrv = 0;
        }
        if (object.finalvrv !== undefined && object.finalvrv !== null) {
            message.finalvrv = object.finalvrv;
        }
        else {
            message.finalvrv = 0;
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
