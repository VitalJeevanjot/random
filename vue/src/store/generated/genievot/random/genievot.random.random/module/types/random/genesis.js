/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { Userval } from "../random/userval";
import { SentRandomval } from "../random/sent_randomval";
import { TimedoutRandomval } from "../random/timedout_randomval";
export const protobufPackage = "genievot.random.random";
const baseGenesisState = {
    portId: "",
    sentRandomvalCount: 0,
    timedoutRandomvalCount: 0,
};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.randomvalList) {
            Randomval.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.uservalList) {
            Userval.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(26).string(message.portId);
        }
        for (const v of message.sentRandomvalList) {
            SentRandomval.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.sentRandomvalCount !== 0) {
            writer.uint32(40).uint64(message.sentRandomvalCount);
        }
        for (const v of message.timedoutRandomvalList) {
            TimedoutRandomval.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.timedoutRandomvalCount !== 0) {
            writer.uint32(56).uint64(message.timedoutRandomvalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.randomvalList = [];
        message.uservalList = [];
        message.sentRandomvalList = [];
        message.timedoutRandomvalList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.randomvalList.push(Randomval.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.uservalList.push(Userval.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.portId = reader.string();
                    break;
                case 4:
                    message.sentRandomvalList.push(SentRandomval.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sentRandomvalCount = longToNumber(reader.uint64());
                    break;
                case 6:
                    message.timedoutRandomvalList.push(TimedoutRandomval.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.timedoutRandomvalCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.randomvalList = [];
        message.uservalList = [];
        message.sentRandomvalList = [];
        message.timedoutRandomvalList = [];
        if (object.randomvalList !== undefined && object.randomvalList !== null) {
            for (const e of object.randomvalList) {
                message.randomvalList.push(Randomval.fromJSON(e));
            }
        }
        if (object.uservalList !== undefined && object.uservalList !== null) {
            for (const e of object.uservalList) {
                message.uservalList.push(Userval.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        if (object.sentRandomvalList !== undefined &&
            object.sentRandomvalList !== null) {
            for (const e of object.sentRandomvalList) {
                message.sentRandomvalList.push(SentRandomval.fromJSON(e));
            }
        }
        if (object.sentRandomvalCount !== undefined &&
            object.sentRandomvalCount !== null) {
            message.sentRandomvalCount = Number(object.sentRandomvalCount);
        }
        else {
            message.sentRandomvalCount = 0;
        }
        if (object.timedoutRandomvalList !== undefined &&
            object.timedoutRandomvalList !== null) {
            for (const e of object.timedoutRandomvalList) {
                message.timedoutRandomvalList.push(TimedoutRandomval.fromJSON(e));
            }
        }
        if (object.timedoutRandomvalCount !== undefined &&
            object.timedoutRandomvalCount !== null) {
            message.timedoutRandomvalCount = Number(object.timedoutRandomvalCount);
        }
        else {
            message.timedoutRandomvalCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.randomvalList) {
            obj.randomvalList = message.randomvalList.map((e) => e ? Randomval.toJSON(e) : undefined);
        }
        else {
            obj.randomvalList = [];
        }
        if (message.uservalList) {
            obj.uservalList = message.uservalList.map((e) => e ? Userval.toJSON(e) : undefined);
        }
        else {
            obj.uservalList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        if (message.sentRandomvalList) {
            obj.sentRandomvalList = message.sentRandomvalList.map((e) => e ? SentRandomval.toJSON(e) : undefined);
        }
        else {
            obj.sentRandomvalList = [];
        }
        message.sentRandomvalCount !== undefined &&
            (obj.sentRandomvalCount = message.sentRandomvalCount);
        if (message.timedoutRandomvalList) {
            obj.timedoutRandomvalList = message.timedoutRandomvalList.map((e) => e ? TimedoutRandomval.toJSON(e) : undefined);
        }
        else {
            obj.timedoutRandomvalList = [];
        }
        message.timedoutRandomvalCount !== undefined &&
            (obj.timedoutRandomvalCount = message.timedoutRandomvalCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.randomvalList = [];
        message.uservalList = [];
        message.sentRandomvalList = [];
        message.timedoutRandomvalList = [];
        if (object.randomvalList !== undefined && object.randomvalList !== null) {
            for (const e of object.randomvalList) {
                message.randomvalList.push(Randomval.fromPartial(e));
            }
        }
        if (object.uservalList !== undefined && object.uservalList !== null) {
            for (const e of object.uservalList) {
                message.uservalList.push(Userval.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        if (object.sentRandomvalList !== undefined &&
            object.sentRandomvalList !== null) {
            for (const e of object.sentRandomvalList) {
                message.sentRandomvalList.push(SentRandomval.fromPartial(e));
            }
        }
        if (object.sentRandomvalCount !== undefined &&
            object.sentRandomvalCount !== null) {
            message.sentRandomvalCount = object.sentRandomvalCount;
        }
        else {
            message.sentRandomvalCount = 0;
        }
        if (object.timedoutRandomvalList !== undefined &&
            object.timedoutRandomvalList !== null) {
            for (const e of object.timedoutRandomvalList) {
                message.timedoutRandomvalList.push(TimedoutRandomval.fromPartial(e));
            }
        }
        if (object.timedoutRandomvalCount !== undefined &&
            object.timedoutRandomvalCount !== null) {
            message.timedoutRandomvalCount = object.timedoutRandomvalCount;
        }
        else {
            message.timedoutRandomvalCount = 0;
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
