/* eslint-disable */
import { Randomval } from "../random/randomval";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "genievot.random.random";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.randomvalList) {
            Randomval.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.randomvalList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.randomvalList.push(Randomval.decode(reader, reader.uint32()));
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
        if (object.randomvalList !== undefined && object.randomvalList !== null) {
            for (const e of object.randomvalList) {
                message.randomvalList.push(Randomval.fromJSON(e));
            }
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.randomvalList = [];
        if (object.randomvalList !== undefined && object.randomvalList !== null) {
            for (const e of object.randomvalList) {
                message.randomvalList.push(Randomval.fromPartial(e));
            }
        }
        return message;
    },
};
