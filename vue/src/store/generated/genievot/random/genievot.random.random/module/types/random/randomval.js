/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "genievot.random.random";
const baseRandomval = {
    index: "",
    vrv: "",
    outcap: "",
    proof: "",
    ubk: "",
    message: "",
};
export const Randomval = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.vrv !== "") {
            writer.uint32(18).string(message.vrv);
        }
        if (message.outcap !== "") {
            writer.uint32(26).string(message.outcap);
        }
        if (message.proof !== "") {
            writer.uint32(34).string(message.proof);
        }
        if (message.ubk !== "") {
            writer.uint32(42).string(message.ubk);
        }
        if (message.message !== "") {
            writer.uint32(50).string(message.message);
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
                    message.vrv = reader.string();
                    break;
                case 3:
                    message.outcap = reader.string();
                    break;
                case 4:
                    message.proof = reader.string();
                    break;
                case 5:
                    message.ubk = reader.string();
                    break;
                case 6:
                    message.message = reader.string();
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
        if (object.vrv !== undefined && object.vrv !== null) {
            message.vrv = String(object.vrv);
        }
        else {
            message.vrv = "";
        }
        if (object.outcap !== undefined && object.outcap !== null) {
            message.outcap = String(object.outcap);
        }
        else {
            message.outcap = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = String(object.proof);
        }
        else {
            message.proof = "";
        }
        if (object.ubk !== undefined && object.ubk !== null) {
            message.ubk = String(object.ubk);
        }
        else {
            message.ubk = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.vrv !== undefined && (obj.vrv = message.vrv);
        message.outcap !== undefined && (obj.outcap = message.outcap);
        message.proof !== undefined && (obj.proof = message.proof);
        message.ubk !== undefined && (obj.ubk = message.ubk);
        message.message !== undefined && (obj.message = message.message);
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
        if (object.vrv !== undefined && object.vrv !== null) {
            message.vrv = object.vrv;
        }
        else {
            message.vrv = "";
        }
        if (object.outcap !== undefined && object.outcap !== null) {
            message.outcap = object.outcap;
        }
        else {
            message.outcap = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = "";
        }
        if (object.ubk !== undefined && object.ubk !== null) {
            message.ubk = object.ubk;
        }
        else {
            message.ubk = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = "";
        }
        return message;
    },
};
