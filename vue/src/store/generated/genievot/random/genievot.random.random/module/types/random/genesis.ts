/* eslint-disable */
import { Randomval } from "../random/randomval";
import { Userval } from "../random/userval";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "genievot.random.random";

/** GenesisState defines the random module's genesis state. */
export interface GenesisState {
  randomvalList: Randomval[];
  uservalList: Userval[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  portId: string;
}

const baseGenesisState: object = { portId: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.randomvalList) {
      Randomval.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.uservalList) {
      Userval.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(26).string(message.portId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.randomvalList = [];
    message.uservalList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.randomvalList.push(Randomval.decode(reader, reader.uint32()));
          break;
        case 2:
          message.uservalList.push(Userval.decode(reader, reader.uint32()));
          break;
        case 3:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.randomvalList = [];
    message.uservalList = [];
    if (object.randomvalList !== undefined && object.randomvalList !== null) {
      for (const e of object.randomvalList) {
        message.randomvalList.push(Randomval.fromJSON(e));
      }
    }
    if (object.uservalList !== undefined && object.uservalList !== null) {
      for (const e of object.uservalList) {
        message.uservalList.push(Userval.fromJSON(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.randomvalList) {
      obj.randomvalList = message.randomvalList.map((e) =>
        e ? Randomval.toJSON(e) : undefined
      );
    } else {
      obj.randomvalList = [];
    }
    if (message.uservalList) {
      obj.uservalList = message.uservalList.map((e) =>
        e ? Userval.toJSON(e) : undefined
      );
    } else {
      obj.uservalList = [];
    }
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.randomvalList = [];
    message.uservalList = [];
    if (object.randomvalList !== undefined && object.randomvalList !== null) {
      for (const e of object.randomvalList) {
        message.randomvalList.push(Randomval.fromPartial(e));
      }
    }
    if (object.uservalList !== undefined && object.uservalList !== null) {
      for (const e of object.uservalList) {
        message.uservalList.push(Userval.fromPartial(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
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
