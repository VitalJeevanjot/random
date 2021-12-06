/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "genievot.random.random";

export interface MsgCreateRandom {
  creator: string;
  outputCap: string;
}

export interface MsgCreateRandomResponse {}

const baseMsgCreateRandom: object = { creator: "", outputCap: "" };

export const MsgCreateRandom = {
  encode(message: MsgCreateRandom, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.outputCap !== "") {
      writer.uint32(18).string(message.outputCap);
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
          message.outputCap = reader.string();
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
    if (object.outputCap !== undefined && object.outputCap !== null) {
      message.outputCap = String(object.outputCap);
    } else {
      message.outputCap = "";
    }
    return message;
  },

  toJSON(message: MsgCreateRandom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.outputCap !== undefined && (obj.outputCap = message.outputCap);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRandom>): MsgCreateRandom {
    const message = { ...baseMsgCreateRandom } as MsgCreateRandom;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.outputCap !== undefined && object.outputCap !== null) {
      message.outputCap = object.outputCap;
    } else {
      message.outputCap = "";
    }
    return message;
  },
};

const baseMsgCreateRandomResponse: object = {};

export const MsgCreateRandomResponse = {
  encode(_: MsgCreateRandomResponse, writer: Writer = Writer.create()): Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRandomResponse {
    const message = {
      ...baseMsgCreateRandomResponse,
    } as MsgCreateRandomResponse;
    return message;
  },

  toJSON(_: MsgCreateRandomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateRandomResponse>
  ): MsgCreateRandomResponse {
    const message = {
      ...baseMsgCreateRandomResponse,
    } as MsgCreateRandomResponse;
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
