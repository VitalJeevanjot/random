/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "genievot.random.random";

export interface RandomPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  reqRandomvalPacket: ReqRandomvalPacketData | undefined;
}

export interface NoData {}

/** ReqRandomvalPacketData defines a struct for the packet payload */
export interface ReqRandomvalPacketData {
  multiplier: string;
  creator: string;
}

/** ReqRandomvalPacketAck defines a struct for the packet acknowledgment */
export interface ReqRandomvalPacketAck {
  creator: string;
  finalvrvfl: string;
  uniqIndex: string;
}

const baseRandomPacketData: object = {};

export const RandomPacketData = {
  encode(message: RandomPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.reqRandomvalPacket !== undefined) {
      ReqRandomvalPacketData.encode(
        message.reqRandomvalPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RandomPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRandomPacketData } as RandomPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.reqRandomvalPacket = ReqRandomvalPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RandomPacketData {
    const message = { ...baseRandomPacketData } as RandomPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.reqRandomvalPacket !== undefined &&
      object.reqRandomvalPacket !== null
    ) {
      message.reqRandomvalPacket = ReqRandomvalPacketData.fromJSON(
        object.reqRandomvalPacket
      );
    } else {
      message.reqRandomvalPacket = undefined;
    }
    return message;
  },

  toJSON(message: RandomPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.reqRandomvalPacket !== undefined &&
      (obj.reqRandomvalPacket = message.reqRandomvalPacket
        ? ReqRandomvalPacketData.toJSON(message.reqRandomvalPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RandomPacketData>): RandomPacketData {
    const message = { ...baseRandomPacketData } as RandomPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.reqRandomvalPacket !== undefined &&
      object.reqRandomvalPacket !== null
    ) {
      message.reqRandomvalPacket = ReqRandomvalPacketData.fromPartial(
        object.reqRandomvalPacket
      );
    } else {
      message.reqRandomvalPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseReqRandomvalPacketData: object = { multiplier: "", creator: "" };

export const ReqRandomvalPacketData = {
  encode(
    message: ReqRandomvalPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.multiplier !== "") {
      writer.uint32(10).string(message.multiplier);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReqRandomvalPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReqRandomvalPacketData } as ReqRandomvalPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.multiplier = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReqRandomvalPacketData {
    const message = { ...baseReqRandomvalPacketData } as ReqRandomvalPacketData;
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = String(object.multiplier);
    } else {
      message.multiplier = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: ReqRandomvalPacketData): unknown {
    const obj: any = {};
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReqRandomvalPacketData>
  ): ReqRandomvalPacketData {
    const message = { ...baseReqRandomvalPacketData } as ReqRandomvalPacketData;
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    } else {
      message.multiplier = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseReqRandomvalPacketAck: object = {
  creator: "",
  finalvrvfl: "",
  uniqIndex: "",
};

export const ReqRandomvalPacketAck = {
  encode(
    message: ReqRandomvalPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.finalvrvfl !== "") {
      writer.uint32(18).string(message.finalvrvfl);
    }
    if (message.uniqIndex !== "") {
      writer.uint32(26).string(message.uniqIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ReqRandomvalPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReqRandomvalPacketAck } as ReqRandomvalPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.finalvrvfl = reader.string();
          break;
        case 3:
          message.uniqIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReqRandomvalPacketAck {
    const message = { ...baseReqRandomvalPacketAck } as ReqRandomvalPacketAck;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.finalvrvfl !== undefined && object.finalvrvfl !== null) {
      message.finalvrvfl = String(object.finalvrvfl);
    } else {
      message.finalvrvfl = "";
    }
    if (object.uniqIndex !== undefined && object.uniqIndex !== null) {
      message.uniqIndex = String(object.uniqIndex);
    } else {
      message.uniqIndex = "";
    }
    return message;
  },

  toJSON(message: ReqRandomvalPacketAck): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.finalvrvfl !== undefined && (obj.finalvrvfl = message.finalvrvfl);
    message.uniqIndex !== undefined && (obj.uniqIndex = message.uniqIndex);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ReqRandomvalPacketAck>
  ): ReqRandomvalPacketAck {
    const message = { ...baseReqRandomvalPacketAck } as ReqRandomvalPacketAck;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.finalvrvfl !== undefined && object.finalvrvfl !== null) {
      message.finalvrvfl = object.finalvrvfl;
    } else {
      message.finalvrvfl = "";
    }
    if (object.uniqIndex !== undefined && object.uniqIndex !== null) {
      message.uniqIndex = object.uniqIndex;
    } else {
      message.uniqIndex = "";
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
