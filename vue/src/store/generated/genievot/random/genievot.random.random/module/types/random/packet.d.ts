import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
export interface RandomPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    reqRandomvalPacket: ReqRandomvalPacketData | undefined;
}
export interface NoData {
}
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
export declare const RandomPacketData: {
    encode(message: RandomPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RandomPacketData;
    fromJSON(object: any): RandomPacketData;
    toJSON(message: RandomPacketData): unknown;
    fromPartial(object: DeepPartial<RandomPacketData>): RandomPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const ReqRandomvalPacketData: {
    encode(message: ReqRandomvalPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ReqRandomvalPacketData;
    fromJSON(object: any): ReqRandomvalPacketData;
    toJSON(message: ReqRandomvalPacketData): unknown;
    fromPartial(object: DeepPartial<ReqRandomvalPacketData>): ReqRandomvalPacketData;
};
export declare const ReqRandomvalPacketAck: {
    encode(message: ReqRandomvalPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ReqRandomvalPacketAck;
    fromJSON(object: any): ReqRandomvalPacketAck;
    toJSON(message: ReqRandomvalPacketAck): unknown;
    fromPartial(object: DeepPartial<ReqRandomvalPacketAck>): ReqRandomvalPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
