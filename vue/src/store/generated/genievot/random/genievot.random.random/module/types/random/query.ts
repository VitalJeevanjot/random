/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Userval } from "../random/userval";

export const protobufPackage = "genievot.random.random";

export interface QueryGetRandomvalRequest {
  index: string;
}

export interface QueryGetRandomvalResponse {
  randomval: Randomval | undefined;
}

export interface QueryAllRandomvalRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRandomvalResponse {
  randomval: Randomval[];
  pagination: PageResponse | undefined;
}

export interface QueryGetUservalRequest {
  index: string;
}

export interface QueryGetUservalResponse {
  userval: Userval | undefined;
}

export interface QueryAllUservalRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllUservalResponse {
  userval: Userval[];
  pagination: PageResponse | undefined;
}

export interface QueryVerifyValuesRequest {
  pubkey: string;
  message: string;
  vrv: string;
  proof: string;
}

export interface QueryVerifyValuesResponse {
  verified: string;
}

const baseQueryGetRandomvalRequest: object = { index: "" };

export const QueryGetRandomvalRequest = {
  encode(
    message: QueryGetRandomvalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRandomvalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRandomvalRequest,
    } as QueryGetRandomvalRequest;
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

  fromJSON(object: any): QueryGetRandomvalRequest {
    const message = {
      ...baseQueryGetRandomvalRequest,
    } as QueryGetRandomvalRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetRandomvalRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRandomvalRequest>
  ): QueryGetRandomvalRequest {
    const message = {
      ...baseQueryGetRandomvalRequest,
    } as QueryGetRandomvalRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetRandomvalResponse: object = {};

export const QueryGetRandomvalResponse = {
  encode(
    message: QueryGetRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.randomval !== undefined) {
      Randomval.encode(message.randomval, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRandomvalResponse,
    } as QueryGetRandomvalResponse;
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

  fromJSON(object: any): QueryGetRandomvalResponse {
    const message = {
      ...baseQueryGetRandomvalResponse,
    } as QueryGetRandomvalResponse;
    if (object.randomval !== undefined && object.randomval !== null) {
      message.randomval = Randomval.fromJSON(object.randomval);
    } else {
      message.randomval = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRandomvalResponse): unknown {
    const obj: any = {};
    message.randomval !== undefined &&
      (obj.randomval = message.randomval
        ? Randomval.toJSON(message.randomval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRandomvalResponse>
  ): QueryGetRandomvalResponse {
    const message = {
      ...baseQueryGetRandomvalResponse,
    } as QueryGetRandomvalResponse;
    if (object.randomval !== undefined && object.randomval !== null) {
      message.randomval = Randomval.fromPartial(object.randomval);
    } else {
      message.randomval = undefined;
    }
    return message;
  },
};

const baseQueryAllRandomvalRequest: object = {};

export const QueryAllRandomvalRequest = {
  encode(
    message: QueryAllRandomvalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllRandomvalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRandomvalRequest,
    } as QueryAllRandomvalRequest;
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

  fromJSON(object: any): QueryAllRandomvalRequest {
    const message = {
      ...baseQueryAllRandomvalRequest,
    } as QueryAllRandomvalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRandomvalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRandomvalRequest>
  ): QueryAllRandomvalRequest {
    const message = {
      ...baseQueryAllRandomvalRequest,
    } as QueryAllRandomvalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRandomvalResponse: object = {};

export const QueryAllRandomvalResponse = {
  encode(
    message: QueryAllRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.randomval) {
      Randomval.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRandomvalResponse,
    } as QueryAllRandomvalResponse;
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

  fromJSON(object: any): QueryAllRandomvalResponse {
    const message = {
      ...baseQueryAllRandomvalResponse,
    } as QueryAllRandomvalResponse;
    message.randomval = [];
    if (object.randomval !== undefined && object.randomval !== null) {
      for (const e of object.randomval) {
        message.randomval.push(Randomval.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRandomvalResponse): unknown {
    const obj: any = {};
    if (message.randomval) {
      obj.randomval = message.randomval.map((e) =>
        e ? Randomval.toJSON(e) : undefined
      );
    } else {
      obj.randomval = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRandomvalResponse>
  ): QueryAllRandomvalResponse {
    const message = {
      ...baseQueryAllRandomvalResponse,
    } as QueryAllRandomvalResponse;
    message.randomval = [];
    if (object.randomval !== undefined && object.randomval !== null) {
      for (const e of object.randomval) {
        message.randomval.push(Randomval.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetUservalRequest: object = { index: "" };

export const QueryGetUservalRequest = {
  encode(
    message: QueryGetUservalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUservalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetUservalRequest } as QueryGetUservalRequest;
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

  fromJSON(object: any): QueryGetUservalRequest {
    const message = { ...baseQueryGetUservalRequest } as QueryGetUservalRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetUservalRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUservalRequest>
  ): QueryGetUservalRequest {
    const message = { ...baseQueryGetUservalRequest } as QueryGetUservalRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetUservalResponse: object = {};

export const QueryGetUservalResponse = {
  encode(
    message: QueryGetUservalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.userval !== undefined) {
      Userval.encode(message.userval, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUservalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUservalResponse,
    } as QueryGetUservalResponse;
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

  fromJSON(object: any): QueryGetUservalResponse {
    const message = {
      ...baseQueryGetUservalResponse,
    } as QueryGetUservalResponse;
    if (object.userval !== undefined && object.userval !== null) {
      message.userval = Userval.fromJSON(object.userval);
    } else {
      message.userval = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUservalResponse): unknown {
    const obj: any = {};
    message.userval !== undefined &&
      (obj.userval = message.userval
        ? Userval.toJSON(message.userval)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUservalResponse>
  ): QueryGetUservalResponse {
    const message = {
      ...baseQueryGetUservalResponse,
    } as QueryGetUservalResponse;
    if (object.userval !== undefined && object.userval !== null) {
      message.userval = Userval.fromPartial(object.userval);
    } else {
      message.userval = undefined;
    }
    return message;
  },
};

const baseQueryAllUservalRequest: object = {};

export const QueryAllUservalRequest = {
  encode(
    message: QueryAllUservalRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUservalRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllUservalRequest } as QueryAllUservalRequest;
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

  fromJSON(object: any): QueryAllUservalRequest {
    const message = { ...baseQueryAllUservalRequest } as QueryAllUservalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUservalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUservalRequest>
  ): QueryAllUservalRequest {
    const message = { ...baseQueryAllUservalRequest } as QueryAllUservalRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUservalResponse: object = {};

export const QueryAllUservalResponse = {
  encode(
    message: QueryAllUservalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.userval) {
      Userval.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUservalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUservalResponse,
    } as QueryAllUservalResponse;
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

  fromJSON(object: any): QueryAllUservalResponse {
    const message = {
      ...baseQueryAllUservalResponse,
    } as QueryAllUservalResponse;
    message.userval = [];
    if (object.userval !== undefined && object.userval !== null) {
      for (const e of object.userval) {
        message.userval.push(Userval.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUservalResponse): unknown {
    const obj: any = {};
    if (message.userval) {
      obj.userval = message.userval.map((e) =>
        e ? Userval.toJSON(e) : undefined
      );
    } else {
      obj.userval = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUservalResponse>
  ): QueryAllUservalResponse {
    const message = {
      ...baseQueryAllUservalResponse,
    } as QueryAllUservalResponse;
    message.userval = [];
    if (object.userval !== undefined && object.userval !== null) {
      for (const e of object.userval) {
        message.userval.push(Userval.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryVerifyValuesRequest: object = {
  pubkey: "",
  message: "",
  vrv: "",
  proof: "",
};

export const QueryVerifyValuesRequest = {
  encode(
    message: QueryVerifyValuesRequest,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVerifyValuesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVerifyValuesRequest,
    } as QueryVerifyValuesRequest;
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

  fromJSON(object: any): QueryVerifyValuesRequest {
    const message = {
      ...baseQueryVerifyValuesRequest,
    } as QueryVerifyValuesRequest;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = String(object.vrv);
    } else {
      message.vrv = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof);
    } else {
      message.proof = "";
    }
    return message;
  },

  toJSON(message: QueryVerifyValuesRequest): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.message !== undefined && (obj.message = message.message);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVerifyValuesRequest>
  ): QueryVerifyValuesRequest {
    const message = {
      ...baseQueryVerifyValuesRequest,
    } as QueryVerifyValuesRequest;
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = object.vrv;
    } else {
      message.vrv = "";
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    } else {
      message.proof = "";
    }
    return message;
  },
};

const baseQueryVerifyValuesResponse: object = { verified: "" };

export const QueryVerifyValuesResponse = {
  encode(
    message: QueryVerifyValuesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.verified !== "") {
      writer.uint32(10).string(message.verified);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVerifyValuesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVerifyValuesResponse,
    } as QueryVerifyValuesResponse;
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

  fromJSON(object: any): QueryVerifyValuesResponse {
    const message = {
      ...baseQueryVerifyValuesResponse,
    } as QueryVerifyValuesResponse;
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = String(object.verified);
    } else {
      message.verified = "";
    }
    return message;
  },

  toJSON(message: QueryVerifyValuesResponse): unknown {
    const obj: any = {};
    message.verified !== undefined && (obj.verified = message.verified);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVerifyValuesResponse>
  ): QueryVerifyValuesResponse {
    const message = {
      ...baseQueryVerifyValuesResponse,
    } as QueryVerifyValuesResponse;
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    } else {
      message.verified = "";
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a randomval by index. */
  Randomval(
    request: QueryGetRandomvalRequest
  ): Promise<QueryGetRandomvalResponse>;
  /** Queries a list of randomval items. */
  RandomvalAll(
    request: QueryAllRandomvalRequest
  ): Promise<QueryAllRandomvalResponse>;
  /** Queries a userval by index. */
  Userval(request: QueryGetUservalRequest): Promise<QueryGetUservalResponse>;
  /** Queries a list of userval items. */
  UservalAll(request: QueryAllUservalRequest): Promise<QueryAllUservalResponse>;
  /** Queries a list of verifyValues items. */
  VerifyValues(
    request: QueryVerifyValuesRequest
  ): Promise<QueryVerifyValuesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Randomval(
    request: QueryGetRandomvalRequest
  ): Promise<QueryGetRandomvalResponse> {
    const data = QueryGetRandomvalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Query",
      "Randomval",
      data
    );
    return promise.then((data) =>
      QueryGetRandomvalResponse.decode(new Reader(data))
    );
  }

  RandomvalAll(
    request: QueryAllRandomvalRequest
  ): Promise<QueryAllRandomvalResponse> {
    const data = QueryAllRandomvalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Query",
      "RandomvalAll",
      data
    );
    return promise.then((data) =>
      QueryAllRandomvalResponse.decode(new Reader(data))
    );
  }

  Userval(request: QueryGetUservalRequest): Promise<QueryGetUservalResponse> {
    const data = QueryGetUservalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Query",
      "Userval",
      data
    );
    return promise.then((data) =>
      QueryGetUservalResponse.decode(new Reader(data))
    );
  }

  UservalAll(
    request: QueryAllUservalRequest
  ): Promise<QueryAllUservalResponse> {
    const data = QueryAllUservalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Query",
      "UservalAll",
      data
    );
    return promise.then((data) =>
      QueryAllUservalResponse.decode(new Reader(data))
    );
  }

  VerifyValues(
    request: QueryVerifyValuesRequest
  ): Promise<QueryVerifyValuesResponse> {
    const data = QueryVerifyValuesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Query",
      "VerifyValues",
      data
    );
    return promise.then((data) =>
      QueryVerifyValuesResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
