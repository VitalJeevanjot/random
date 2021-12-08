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

export interface MsgCreateSentRandomval {
  creator: string;
  userid: string;
  vrv: string;
}

export interface MsgCreateSentRandomvalResponse {
  id: number;
}

export interface MsgUpdateSentRandomval {
  creator: string;
  id: number;
  userid: string;
  vrv: string;
}

export interface MsgUpdateSentRandomvalResponse {}

export interface MsgDeleteSentRandomval {
  creator: string;
  id: number;
}

export interface MsgDeleteSentRandomvalResponse {}

export interface MsgCreateTimedoutRandomval {
  creator: string;
  userid: string;
  vrv: string;
}

export interface MsgCreateTimedoutRandomvalResponse {
  id: number;
}

export interface MsgUpdateTimedoutRandomval {
  creator: string;
  id: number;
  userid: string;
  vrv: string;
}

export interface MsgUpdateTimedoutRandomvalResponse {}

export interface MsgDeleteTimedoutRandomval {
  creator: string;
  id: number;
}

export interface MsgDeleteTimedoutRandomvalResponse {}

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

const baseMsgCreateSentRandomval: object = { creator: "", userid: "", vrv: "" };

export const MsgCreateSentRandomval = {
  encode(
    message: MsgCreateSentRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userid !== "") {
      writer.uint32(18).string(message.userid);
    }
    if (message.vrv !== "") {
      writer.uint32(26).string(message.vrv);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSentRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSentRandomval } as MsgCreateSentRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.userid = reader.string();
          break;
        case 3:
          message.vrv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSentRandomval {
    const message = { ...baseMsgCreateSentRandomval } as MsgCreateSentRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = String(object.userid);
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = String(object.vrv);
    } else {
      message.vrv = "";
    }
    return message;
  },

  toJSON(message: MsgCreateSentRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userid !== undefined && (obj.userid = message.userid);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSentRandomval>
  ): MsgCreateSentRandomval {
    const message = { ...baseMsgCreateSentRandomval } as MsgCreateSentRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = object.userid;
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = object.vrv;
    } else {
      message.vrv = "";
    }
    return message;
  },
};

const baseMsgCreateSentRandomvalResponse: object = { id: 0 };

export const MsgCreateSentRandomvalResponse = {
  encode(
    message: MsgCreateSentRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSentRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSentRandomvalResponse,
    } as MsgCreateSentRandomvalResponse;
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

  fromJSON(object: any): MsgCreateSentRandomvalResponse {
    const message = {
      ...baseMsgCreateSentRandomvalResponse,
    } as MsgCreateSentRandomvalResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSentRandomvalResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSentRandomvalResponse>
  ): MsgCreateSentRandomvalResponse {
    const message = {
      ...baseMsgCreateSentRandomvalResponse,
    } as MsgCreateSentRandomvalResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateSentRandomval: object = {
  creator: "",
  id: 0,
  userid: "",
  vrv: "",
};

export const MsgUpdateSentRandomval = {
  encode(
    message: MsgUpdateSentRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.userid !== "") {
      writer.uint32(26).string(message.userid);
    }
    if (message.vrv !== "") {
      writer.uint32(34).string(message.vrv);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSentRandomval } as MsgUpdateSentRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.userid = reader.string();
          break;
        case 4:
          message.vrv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSentRandomval {
    const message = { ...baseMsgUpdateSentRandomval } as MsgUpdateSentRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = String(object.userid);
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = String(object.vrv);
    } else {
      message.vrv = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateSentRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.userid !== undefined && (obj.userid = message.userid);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateSentRandomval>
  ): MsgUpdateSentRandomval {
    const message = { ...baseMsgUpdateSentRandomval } as MsgUpdateSentRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = object.userid;
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = object.vrv;
    } else {
      message.vrv = "";
    }
    return message;
  },
};

const baseMsgUpdateSentRandomvalResponse: object = {};

export const MsgUpdateSentRandomvalResponse = {
  encode(
    _: MsgUpdateSentRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSentRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSentRandomvalResponse,
    } as MsgUpdateSentRandomvalResponse;
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

  fromJSON(_: any): MsgUpdateSentRandomvalResponse {
    const message = {
      ...baseMsgUpdateSentRandomvalResponse,
    } as MsgUpdateSentRandomvalResponse;
    return message;
  },

  toJSON(_: MsgUpdateSentRandomvalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSentRandomvalResponse>
  ): MsgUpdateSentRandomvalResponse {
    const message = {
      ...baseMsgUpdateSentRandomvalResponse,
    } as MsgUpdateSentRandomvalResponse;
    return message;
  },
};

const baseMsgDeleteSentRandomval: object = { creator: "", id: 0 };

export const MsgDeleteSentRandomval = {
  encode(
    message: MsgDeleteSentRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSentRandomval } as MsgDeleteSentRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSentRandomval {
    const message = { ...baseMsgDeleteSentRandomval } as MsgDeleteSentRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteSentRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteSentRandomval>
  ): MsgDeleteSentRandomval {
    const message = { ...baseMsgDeleteSentRandomval } as MsgDeleteSentRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteSentRandomvalResponse: object = {};

export const MsgDeleteSentRandomvalResponse = {
  encode(
    _: MsgDeleteSentRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSentRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSentRandomvalResponse,
    } as MsgDeleteSentRandomvalResponse;
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

  fromJSON(_: any): MsgDeleteSentRandomvalResponse {
    const message = {
      ...baseMsgDeleteSentRandomvalResponse,
    } as MsgDeleteSentRandomvalResponse;
    return message;
  },

  toJSON(_: MsgDeleteSentRandomvalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSentRandomvalResponse>
  ): MsgDeleteSentRandomvalResponse {
    const message = {
      ...baseMsgDeleteSentRandomvalResponse,
    } as MsgDeleteSentRandomvalResponse;
    return message;
  },
};

const baseMsgCreateTimedoutRandomval: object = {
  creator: "",
  userid: "",
  vrv: "",
};

export const MsgCreateTimedoutRandomval = {
  encode(
    message: MsgCreateTimedoutRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.userid !== "") {
      writer.uint32(18).string(message.userid);
    }
    if (message.vrv !== "") {
      writer.uint32(26).string(message.vrv);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateTimedoutRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTimedoutRandomval,
    } as MsgCreateTimedoutRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.userid = reader.string();
          break;
        case 3:
          message.vrv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTimedoutRandomval {
    const message = {
      ...baseMsgCreateTimedoutRandomval,
    } as MsgCreateTimedoutRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = String(object.userid);
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = String(object.vrv);
    } else {
      message.vrv = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTimedoutRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.userid !== undefined && (obj.userid = message.userid);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTimedoutRandomval>
  ): MsgCreateTimedoutRandomval {
    const message = {
      ...baseMsgCreateTimedoutRandomval,
    } as MsgCreateTimedoutRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = object.userid;
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = object.vrv;
    } else {
      message.vrv = "";
    }
    return message;
  },
};

const baseMsgCreateTimedoutRandomvalResponse: object = { id: 0 };

export const MsgCreateTimedoutRandomvalResponse = {
  encode(
    message: MsgCreateTimedoutRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateTimedoutRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTimedoutRandomvalResponse,
    } as MsgCreateTimedoutRandomvalResponse;
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

  fromJSON(object: any): MsgCreateTimedoutRandomvalResponse {
    const message = {
      ...baseMsgCreateTimedoutRandomvalResponse,
    } as MsgCreateTimedoutRandomvalResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTimedoutRandomvalResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTimedoutRandomvalResponse>
  ): MsgCreateTimedoutRandomvalResponse {
    const message = {
      ...baseMsgCreateTimedoutRandomvalResponse,
    } as MsgCreateTimedoutRandomvalResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTimedoutRandomval: object = {
  creator: "",
  id: 0,
  userid: "",
  vrv: "",
};

export const MsgUpdateTimedoutRandomval = {
  encode(
    message: MsgUpdateTimedoutRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.userid !== "") {
      writer.uint32(26).string(message.userid);
    }
    if (message.vrv !== "") {
      writer.uint32(34).string(message.vrv);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTimedoutRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTimedoutRandomval,
    } as MsgUpdateTimedoutRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.userid = reader.string();
          break;
        case 4:
          message.vrv = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTimedoutRandomval {
    const message = {
      ...baseMsgUpdateTimedoutRandomval,
    } as MsgUpdateTimedoutRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = String(object.userid);
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = String(object.vrv);
    } else {
      message.vrv = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTimedoutRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.userid !== undefined && (obj.userid = message.userid);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTimedoutRandomval>
  ): MsgUpdateTimedoutRandomval {
    const message = {
      ...baseMsgUpdateTimedoutRandomval,
    } as MsgUpdateTimedoutRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.userid !== undefined && object.userid !== null) {
      message.userid = object.userid;
    } else {
      message.userid = "";
    }
    if (object.vrv !== undefined && object.vrv !== null) {
      message.vrv = object.vrv;
    } else {
      message.vrv = "";
    }
    return message;
  },
};

const baseMsgUpdateTimedoutRandomvalResponse: object = {};

export const MsgUpdateTimedoutRandomvalResponse = {
  encode(
    _: MsgUpdateTimedoutRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTimedoutRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTimedoutRandomvalResponse,
    } as MsgUpdateTimedoutRandomvalResponse;
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

  fromJSON(_: any): MsgUpdateTimedoutRandomvalResponse {
    const message = {
      ...baseMsgUpdateTimedoutRandomvalResponse,
    } as MsgUpdateTimedoutRandomvalResponse;
    return message;
  },

  toJSON(_: MsgUpdateTimedoutRandomvalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTimedoutRandomvalResponse>
  ): MsgUpdateTimedoutRandomvalResponse {
    const message = {
      ...baseMsgUpdateTimedoutRandomvalResponse,
    } as MsgUpdateTimedoutRandomvalResponse;
    return message;
  },
};

const baseMsgDeleteTimedoutRandomval: object = { creator: "", id: 0 };

export const MsgDeleteTimedoutRandomval = {
  encode(
    message: MsgDeleteTimedoutRandomval,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteTimedoutRandomval {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTimedoutRandomval,
    } as MsgDeleteTimedoutRandomval;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTimedoutRandomval {
    const message = {
      ...baseMsgDeleteTimedoutRandomval,
    } as MsgDeleteTimedoutRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteTimedoutRandomval): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteTimedoutRandomval>
  ): MsgDeleteTimedoutRandomval {
    const message = {
      ...baseMsgDeleteTimedoutRandomval,
    } as MsgDeleteTimedoutRandomval;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteTimedoutRandomvalResponse: object = {};

export const MsgDeleteTimedoutRandomvalResponse = {
  encode(
    _: MsgDeleteTimedoutRandomvalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteTimedoutRandomvalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTimedoutRandomvalResponse,
    } as MsgDeleteTimedoutRandomvalResponse;
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

  fromJSON(_: any): MsgDeleteTimedoutRandomvalResponse {
    const message = {
      ...baseMsgDeleteTimedoutRandomvalResponse,
    } as MsgDeleteTimedoutRandomvalResponse;
    return message;
  },

  toJSON(_: MsgDeleteTimedoutRandomvalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteTimedoutRandomvalResponse>
  ): MsgDeleteTimedoutRandomvalResponse {
    const message = {
      ...baseMsgDeleteTimedoutRandomvalResponse,
    } as MsgDeleteTimedoutRandomvalResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
  SendReqRandomval(
    request: MsgSendReqRandomval
  ): Promise<MsgSendReqRandomvalResponse>;
  CreateSentRandomval(
    request: MsgCreateSentRandomval
  ): Promise<MsgCreateSentRandomvalResponse>;
  UpdateSentRandomval(
    request: MsgUpdateSentRandomval
  ): Promise<MsgUpdateSentRandomvalResponse>;
  DeleteSentRandomval(
    request: MsgDeleteSentRandomval
  ): Promise<MsgDeleteSentRandomvalResponse>;
  CreateTimedoutRandomval(
    request: MsgCreateTimedoutRandomval
  ): Promise<MsgCreateTimedoutRandomvalResponse>;
  UpdateTimedoutRandomval(
    request: MsgUpdateTimedoutRandomval
  ): Promise<MsgUpdateTimedoutRandomvalResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteTimedoutRandomval(
    request: MsgDeleteTimedoutRandomval
  ): Promise<MsgDeleteTimedoutRandomvalResponse>;
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

  CreateSentRandomval(
    request: MsgCreateSentRandomval
  ): Promise<MsgCreateSentRandomvalResponse> {
    const data = MsgCreateSentRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "CreateSentRandomval",
      data
    );
    return promise.then((data) =>
      MsgCreateSentRandomvalResponse.decode(new Reader(data))
    );
  }

  UpdateSentRandomval(
    request: MsgUpdateSentRandomval
  ): Promise<MsgUpdateSentRandomvalResponse> {
    const data = MsgUpdateSentRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "UpdateSentRandomval",
      data
    );
    return promise.then((data) =>
      MsgUpdateSentRandomvalResponse.decode(new Reader(data))
    );
  }

  DeleteSentRandomval(
    request: MsgDeleteSentRandomval
  ): Promise<MsgDeleteSentRandomvalResponse> {
    const data = MsgDeleteSentRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "DeleteSentRandomval",
      data
    );
    return promise.then((data) =>
      MsgDeleteSentRandomvalResponse.decode(new Reader(data))
    );
  }

  CreateTimedoutRandomval(
    request: MsgCreateTimedoutRandomval
  ): Promise<MsgCreateTimedoutRandomvalResponse> {
    const data = MsgCreateTimedoutRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "CreateTimedoutRandomval",
      data
    );
    return promise.then((data) =>
      MsgCreateTimedoutRandomvalResponse.decode(new Reader(data))
    );
  }

  UpdateTimedoutRandomval(
    request: MsgUpdateTimedoutRandomval
  ): Promise<MsgUpdateTimedoutRandomvalResponse> {
    const data = MsgUpdateTimedoutRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "UpdateTimedoutRandomval",
      data
    );
    return promise.then((data) =>
      MsgUpdateTimedoutRandomvalResponse.decode(new Reader(data))
    );
  }

  DeleteTimedoutRandomval(
    request: MsgDeleteTimedoutRandomval
  ): Promise<MsgDeleteTimedoutRandomvalResponse> {
    const data = MsgDeleteTimedoutRandomval.encode(request).finish();
    const promise = this.rpc.request(
      "genievot.random.random.Msg",
      "DeleteTimedoutRandomval",
      data
    );
    return promise.then((data) =>
      MsgDeleteTimedoutRandomvalResponse.decode(new Reader(data))
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
