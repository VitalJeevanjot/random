/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "genievot.random.random";

export interface Userval {
  index: string;
  useraddr: string;
  count: string;
}

const baseUserval: object = { index: "", useraddr: "", count: "" };

export const Userval = {
  encode(message: Userval, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.useraddr !== "") {
      writer.uint32(18).string(message.useraddr);
    }
    if (message.count !== "") {
      writer.uint32(26).string(message.count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Userval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUserval } as Userval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.useraddr = reader.string();
          break;
        case 3:
          message.count = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Userval {
    const message = { ...baseUserval } as Userval;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.useraddr !== undefined && object.useraddr !== null) {
      message.useraddr = String(object.useraddr);
    } else {
      message.useraddr = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = String(object.count);
    } else {
      message.count = "";
    }
    return message;
  },

  toJSON(message: Userval): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.useraddr !== undefined && (obj.useraddr = message.useraddr);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(object: DeepPartial<Userval>): Userval {
    const message = { ...baseUserval } as Userval;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.useraddr !== undefined && object.useraddr !== null) {
      message.useraddr = object.useraddr;
    } else {
      message.useraddr = "";
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = "";
    }
    return message;
  },
};

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
