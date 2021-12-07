/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
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
}
