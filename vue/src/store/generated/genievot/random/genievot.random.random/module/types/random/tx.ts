/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "genievot.random.random";

export interface MsgCreateRandom {
  creator: string;
  multiplier: number;
}

export interface MsgCreateRandomResponse {
  id: string;
}

export interface MsgSendReqRandomval {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  multiplier: string;
}

export interface MsgSendReqRandomvalResponse {}

const baseMsgCreateRandom: object = { creator: "", multiplier: 0 };

export const MsgCreateRandom = {
  encode(message: MsgCreateRandom, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.multiplier !== 0) {
      writer.uint32(16).uint64(message.multiplier);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRandom {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRandom } as MsgCreateRandom;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.multiplier = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRandom {
    const message = { ...baseMsgCreateRandom } as MsgCreateRandom;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = Number(object.multiplier);
    } else {
      message.multiplier = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateRandom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRandom>): MsgCreateRandom {
    const message = { ...baseMsgCreateRandom } as MsgCreateRandom;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    } else {
      message.multiplier = 0;
    }
    return message;
  },
};

const baseMsgCreateRandomResponse: object = { id: "" };

export const MsgCreateRandomResponse = {
  encode(
    message: MsgCreateRandomResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRandomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRandomResponse,
    } as MsgCreateRandomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRandomResponse {
    const message = {
      ...baseMsgCreateRandomResponse,
    } as MsgCreateRandomResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: MsgCreateRandomResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRandomResponse>
  ): MsgCreateRandomResponse {
    const message = {
      ...baseMsgCreateRandomResponse,
    } as MsgCreateRandomResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseMsgSendReqRandomval: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  multiplier: "",
};

export const MsgSendReqRandomval = {
  encode(
    message: MsgSendReqRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.multiplier !== "") {
      writer.uint32(42).string(message.multiplier);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendReqRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendReqRandomval } as MsgSendReqRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.multiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendReqRandomval {
    const message = { ...baseMsgSendReqRandomval } as MsgSendReqRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = String(object.multiplier);
    } else {
      message.multiplier = "";
    }
    return message;
  },

  toJSON(message: MsgSendReqRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendReqRandomval>): MsgSendReqRandomval {
    const message = { ...baseMsgSendReqRandomval } as MsgSendReqRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    } else {
      message.multiplier = "";
    }
    return message;
  },
};

const baseMsgSendReqRandomvalResponse: object = {};

export const MsgSendReqRandomvalResponse = {
  encode(
    _: MsgSendReqRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendReqRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendReqRandomvalResponse,
    } as MsgSendReqRandomvalResponse;
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

  fromJSON(_: any): MsgSendReqRandomvalResponse {
    const message = {
      ...baseMsgSendReqRandomvalResponse,
    } as MsgSendReqRandomvalResponse;
    return message;
  },

  toJSON(_: MsgSendReqRandomvalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendReqRandomvalResponse>
  ): MsgSendReqRandomvalResponse {
    const message = {
      ...baseMsgSendReqRandomvalResponse,
    } as MsgSendReqRandomvalResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendReqRandomval(
    request: MsgSendReqRandomval
  ): Promise<MsgSendReqRandomvalResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse> {
    const data = MsgCreateRandom.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "CreateRandom",
      data
    );
    return promise.then((data) =>
      MsgCreateRandomResponse.decode(new Reader(data))
    );
  }

  SendReqRandomval(
    request: MsgSendReqRandomval
  ): Promise<MsgSendReqRandomvalResponse> {
    const data = MsgSendReqRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "SendReqRandomval",
      data
    );
    return promise.then((data) =>
      MsgSendReqRandomvalResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
