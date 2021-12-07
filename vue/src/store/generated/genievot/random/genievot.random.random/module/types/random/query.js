/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Userval } from "../random/userval";
export const protobufPackage = "genievot.random.random";
const baseQueryGetRandomvalRequest = { index: "" };
export const QueryGetRandomvalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetRandomvalRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetRandomvalRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetRandomvalRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetRandomvalResponse = {};
export const QueryGetRandomvalResponse = {
    encode(message, writer = Writer.create()) {
        if (message.randomval !== undefined) {
            Randomval.encode(message.randomval, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetRandomvalResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.randomval = Randomval.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetRandomvalResponse,
        };
        if (object.randomval !== undefined && object.randomval !== null) {
            message.randomval = Randomval.fromJSON(object.randomval);
        }
        else {
            message.randomval = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.randomval !== undefined &&
            (obj.randomval = message.randomval
                ? Randomval.toJSON(message.randomval)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetRandomvalResponse,
        };
        if (object.randomval !== undefined && object.randomval !== null) {
            message.randomval = Randomval.fromPartial(object.randomval);
        }
        else {
            message.randomval = undefined;
        }
        return message;
    },
};
const baseQueryAllRandomvalRequest = {};
export const QueryAllRandomvalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllRandomvalRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllRandomvalRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllRandomvalRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllRandomvalResponse = {};
export const QueryAllRandomvalResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.randomval) {
            Randomval.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllRandomvalResponse,
        };
        message.randomval = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.randomval.push(Randomval.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllRandomvalResponse,
        };
        message.randomval = [];
        if (object.randomval !== undefined && object.randomval !== null) {
            for (const e of object.randomval) {
                message.randomval.push(Randomval.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.randomval) {
            obj.randomval = message.randomval.map((e) => e ? Randomval.toJSON(e) : undefined);
        }
        else {
            obj.randomval = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllRandomvalResponse,
        };
        message.randomval = [];
        if (object.randomval !== undefined && object.randomval !== null) {
            for (const e of object.randomval) {
                message.randomval.push(Randomval.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetUservalRequest = { index: "" };
export const QueryGetUservalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetUservalRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetUservalRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetUservalRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetUservalResponse = {};
export const QueryGetUservalResponse = {
    encode(message, writer = Writer.create()) {
        if (message.userval !== undefined) {
            Userval.encode(message.userval, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetUservalResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userval = Userval.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetUservalResponse,
        };
        if (object.userval !== undefined && object.userval !== null) {
            message.userval = Userval.fromJSON(object.userval);
        }
        else {
            message.userval = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.userval !== undefined &&
            (obj.userval = message.userval
                ? Userval.toJSON(message.userval)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetUservalResponse,
        };
        if (object.userval !== undefined && object.userval !== null) {
            message.userval = Userval.fromPartial(object.userval);
        }
        else {
            message.userval = undefined;
        }
        return message;
    },
};
const baseQueryAllUservalRequest = {};
export const QueryAllUservalRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllUservalRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllUservalRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllUservalRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllUservalResponse = {};
export const QueryAllUservalResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.userval) {
            Userval.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllUservalResponse,
        };
        message.userval = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userval.push(Userval.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllUservalResponse,
        };
        message.userval = [];
        if (object.userval !== undefined && object.userval !== null) {
            for (const e of object.userval) {
                message.userval.push(Userval.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.userval) {
            obj.userval = message.userval.map((e) => e ? Userval.toJSON(e) : undefined);
        }
        else {
            obj.userval = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllUservalResponse,
        };
        message.userval = [];
        if (object.userval !== undefined && object.userval !== null) {
            for (const e of object.userval) {
                message.userval.push(Userval.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryVerifyValuesRequest = {
    pubkey: "",
    message: "",
    vrv: "",
    proof: "",
};
export const QueryVerifyValuesRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pubkey !== "") {
            writer.uint32(10).string(message.pubkey);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.vrv !== "") {
            writer.uint32(26).string(message.vrv);
        }
        if (message.proof !== "") {
            writer.uint32(34).string(message.proof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryVerifyValuesRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pubkey = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.vrv = reader.string();
                    break;
                case 4:
                    message.proof = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryVerifyValuesRequest,
        };
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = String(object.pubkey);
        }
        else {
            message.pubkey = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        }
        else {
            message.message = "";
        }
        if (object.vrv !== undefined && object.vrv !== null) {
            message.vrv = String(object.vrv);
        }
        else {
            message.vrv = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = String(object.proof);
        }
        else {
            message.proof = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pubkey !== undefined && (obj.pubkey = message.pubkey);
        message.message !== undefined && (obj.message = message.message);
        message.vrv !== undefined && (obj.vrv = message.vrv);
        message.proof !== undefined && (obj.proof = message.proof);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryVerifyValuesRequest,
        };
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = object.pubkey;
        }
        else {
            message.pubkey = "";
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        }
        else {
            message.message = "";
        }
        if (object.vrv !== undefined && object.vrv !== null) {
            message.vrv = object.vrv;
        }
        else {
            message.vrv = "";
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = object.proof;
        }
        else {
            message.proof = "";
        }
        return message;
    },
};
const baseQueryVerifyValuesResponse = { verified: "" };
export const QueryVerifyValuesResponse = {
    encode(message, writer = Writer.create()) {
        if (message.verified !== "") {
            writer.uint32(10).string(message.verified);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryVerifyValuesResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.verified = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryVerifyValuesResponse,
        };
        if (object.verified !== undefined && object.verified !== null) {
            message.verified = String(object.verified);
        }
        else {
            message.verified = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.verified !== undefined && (obj.verified = message.verified);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryVerifyValuesResponse,
        };
        if (object.verified !== undefined && object.verified !== null) {
            message.verified = object.verified;
        }
        else {
            message.verified = "";
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Randomval(request) {
        const data = QueryGetRandomvalRequest.encode(request).finish();
        const promise = this.rpc.request("genievot.random.random.Query", "Randomval", data);
        return promise.then((data) => QueryGetRandomvalResponse.decode(new Reader(data)));
    }
    RandomvalAll(request) {
        const data = QueryAllRandomvalRequest.encode(request).finish();
        const promise = this.rpc.request("genievot.random.random.Query", "RandomvalAll", data);
        return promise.then((data) => QueryAllRandomvalResponse.decode(new Reader(data)));
    }
    Userval(request) {
        const data = QueryGetUservalRequest.encode(request).finish();
        const promise = this.rpc.request("genievot.random.random.Query", "Userval", data);
        return promise.then((data) => QueryGetUservalResponse.decode(new Reader(data)));
    }
    UservalAll(request) {
        const data = QueryAllUservalRequest.encode(request).finish();
        const promise = this.rpc.request("genievot.random.random.Query", "UservalAll", data);
        return promise.then((data) => QueryAllUservalResponse.decode(new Reader(data)));
    }
    VerifyValues(request) {
        const data = QueryVerifyValuesRequest.encode(request).finish();
        const promise = this.rpc.request("genievot.random.random.Query", "VerifyValues", data);
        return promise.then((data) => QueryVerifyValuesResponse.decode(new Reader(data)));
    }
}
