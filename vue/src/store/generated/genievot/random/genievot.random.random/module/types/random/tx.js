/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "genievot.random.random";
const baseMsgCreateRandom = { creator: "", outputCap: "" };
export const MsgCreateRandom = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.outputCap !== "") {
            writer.uint32(18).string(message.outputCap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRandom };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.outputCap = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateRandom };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.outputCap !== undefined && object.outputCap !== null) {
            message.outputCap = String(object.outputCap);
        }
        else {
            message.outputCap = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.outputCap !== undefined && (obj.outputCap = message.outputCap);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateRandom };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.outputCap !== undefined && object.outputCap !== null) {
            message.outputCap = object.outputCap;
        }
        else {
            message.outputCap = "";
        }
        return message;
    },
};
const baseMsgCreateRandomResponse = {};
export const MsgCreateRandomResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateRandomResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgCreateRandomResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateRandomResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateRandom(request) {
        const data = MsgCreateRandom.encode(request).finish();
        const promise = this.rpc.request("genievot.random.random.Msg", "CreateRandom", data);
        return promise.then((data) => MsgCreateRandomResponse.decode(new Reader(data)));
    }
}
