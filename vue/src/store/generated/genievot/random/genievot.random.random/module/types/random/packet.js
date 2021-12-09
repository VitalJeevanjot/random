/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "genievot.random.random";
const baseRandomPacketData = {};
export const RandomPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.reqRandomvalPacket !== undefined) {
            ReqRandomvalPacketData.encode(message.reqRandomvalPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRandomPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reqRandomvalPacket = ReqRandomvalPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRandomPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.reqRandomvalPacket !== undefined &&
            object.reqRandomvalPacket !== null) {
            message.reqRandomvalPacket = ReqRandomvalPacketData.fromJSON(object.reqRandomvalPacket);
        }
        else {
            message.reqRandomvalPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.reqRandomvalPacket !== undefined &&
            (obj.reqRandomvalPacket = message.reqRandomvalPacket
                ? ReqRandomvalPacketData.toJSON(message.reqRandomvalPacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRandomPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.reqRandomvalPacket !== undefined &&
            object.reqRandomvalPacket !== null) {
            message.reqRandomvalPacket = ReqRandomvalPacketData.fromPartial(object.reqRandomvalPacket);
        }
        else {
            message.reqRandomvalPacket = undefined;
        }
        return message;
    },
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    },
};
const baseReqRandomvalPacketData = { multiplier: "", creator: "" };
export const ReqRandomvalPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.multiplier !== "") {
            writer.uint32(10).string(message.multiplier);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReqRandomvalPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.multiplier = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReqRandomvalPacketData };
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = String(object.multiplier);
        }
        else {
            message.multiplier = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReqRandomvalPacketData };
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = object.multiplier;
        }
        else {
            message.multiplier = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseReqRandomvalPacketAck = {
    creator: "",
    finalvrvfl: "",
    uniqIndex: "",
};
export const ReqRandomvalPacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.finalvrvfl !== "") {
            writer.uint32(18).string(message.finalvrvfl);
        }
        if (message.uniqIndex !== "") {
            writer.uint32(26).string(message.uniqIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseReqRandomvalPacketAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.finalvrvfl = reader.string();
                    break;
                case 3:
                    message.uniqIndex = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseReqRandomvalPacketAck };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.finalvrvfl !== undefined && object.finalvrvfl !== null) {
            message.finalvrvfl = String(object.finalvrvfl);
        }
        else {
            message.finalvrvfl = "";
        }
        if (object.uniqIndex !== undefined && object.uniqIndex !== null) {
            message.uniqIndex = String(object.uniqIndex);
        }
        else {
            message.uniqIndex = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.finalvrvfl !== undefined && (obj.finalvrvfl = message.finalvrvfl);
        message.uniqIndex !== undefined && (obj.uniqIndex = message.uniqIndex);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseReqRandomvalPacketAck };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.finalvrvfl !== undefined && object.finalvrvfl !== null) {
            message.finalvrvfl = object.finalvrvfl;
        }
        else {
            message.finalvrvfl = "";
        }
        if (object.uniqIndex !== undefined && object.uniqIndex !== null) {
            message.uniqIndex = object.uniqIndex;
        }
        else {
            message.uniqIndex = "";
        }
        return message;
    },
};
