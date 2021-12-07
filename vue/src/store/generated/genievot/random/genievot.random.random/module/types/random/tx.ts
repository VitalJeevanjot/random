/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "genievot.random.random";

export interface MsgCreateRandom {
  creator: string;
  /** int32 count = 3; // -1 will be last (recently created) and 0 is first */
  multiplier: number;
}

export interface MsgCreateRandomResponse {
  id: number;
}

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

const baseMsgCreateRandomResponse: object = { id: 0 };

export const MsgCreateRandomResponse = {
  encode(
    message: MsgCreateRandomResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
          message.id = longToNumber(reader.uint64() as Long);
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
      message.id = Number(object.id);
    } else {
      message.id = 0;
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
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
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
