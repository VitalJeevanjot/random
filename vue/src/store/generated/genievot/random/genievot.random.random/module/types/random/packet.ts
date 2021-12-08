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
  publicKey: string;
  message: string;
  vrv: string;
  proof: string;
  finalvrvfl: string;
  multiplier: string;
  parsedvrv: string;
  finalvrv: string;
  floatvrv: string;
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
  publicKey: "",
  message: "",
  vrv: "",
  proof: "",
  finalvrvfl: "",
  multiplier: "",
  parsedvrv: "",
  finalvrv: "",
  floatvrv: "",
};

export const ReqRandomvalPacketAck = {
  encode(
    message: ReqRandomvalPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.publicKey !== "") {
      writer.uint32(18).string(message.publicKey);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.vrv !== "") {
      writer.uint32(34).string(message.vrv);
    }
    if (message.proof !== "") {
      writer.uint32(42).string(message.proof);
    }
    if (message.finalvrvfl !== "") {
      writer.uint32(50).string(message.finalvrvfl);
    }
    if (message.multiplier !== "") {
      writer.uint32(58).string(message.multiplier);
    }
    if (message.parsedvrv !== "") {
      writer.uint32(66).string(message.parsedvrv);
    }
    if (message.finalvrv !== "") {
      writer.uint32(74).string(message.finalvrv);
    }
    if (message.floatvrv !== "") {
      writer.uint32(82).string(message.floatvrv);
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
          message.publicKey = reader.string();
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.vrv = reader.string();
          break;
        case 5:
          message.proof = reader.string();
          break;
        case 6:
          message.finalvrvfl = reader.string();
          break;
        case 7:
          message.multiplier = reader.string();
          break;
        case 8:
          message.parsedvrv = reader.string();
          break;
        case 9:
          message.finalvrv = reader.string();
          break;
        case 10:
          message.floatvrv = reader.string();
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
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
    if (object.finalvrvfl !== undefined && object.finalvrvfl !== null) {
      message.finalvrvfl = String(object.finalvrvfl);
    } else {
      message.finalvrvfl = "";
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = String(object.multiplier);
    } else {
      message.multiplier = "";
    }
    if (object.parsedvrv !== undefined && object.parsedvrv !== null) {
      message.parsedvrv = String(object.parsedvrv);
    } else {
      message.parsedvrv = "";
    }
    if (object.finalvrv !== undefined && object.finalvrv !== null) {
      message.finalvrv = String(object.finalvrv);
    } else {
      message.finalvrv = "";
    }
    if (object.floatvrv !== undefined && object.floatvrv !== null) {
      message.floatvrv = String(object.floatvrv);
    } else {
      message.floatvrv = "";
    }
    return message;
  },

  toJSON(message: ReqRandomvalPacketAck): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    message.message !== undefined && (obj.message = message.message);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    message.proof !== undefined && (obj.proof = message.proof);
    message.finalvrvfl !== undefined && (obj.finalvrvfl = message.finalvrvfl);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    message.parsedvrv !== undefined && (obj.parsedvrv = message.parsedvrv);
    message.finalvrv !== undefined && (obj.finalvrv = message.finalvrv);
    message.floatvrv !== undefined && (obj.floatvrv = message.floatvrv);
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
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
    if (object.finalvrvfl !== undefined && object.finalvrvfl !== null) {
      message.finalvrvfl = object.finalvrvfl;
    } else {
      message.finalvrvfl = "";
    }
    if (object.multiplier !== undefined && object.multiplier !== null) {
      message.multiplier = object.multiplier;
    } else {
      message.multiplier = "";
    }
    if (object.parsedvrv !== undefined && object.parsedvrv !== null) {
      message.parsedvrv = object.parsedvrv;
    } else {
      message.parsedvrv = "";
    }
    if (object.finalvrv !== undefined && object.finalvrv !== null) {
      message.finalvrv = object.finalvrv;
    } else {
      message.finalvrv = "";
    }
    if (object.floatvrv !== undefined && object.floatvrv !== null) {
      message.floatvrv = object.floatvrv;
    } else {
      message.floatvrv = "";
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
