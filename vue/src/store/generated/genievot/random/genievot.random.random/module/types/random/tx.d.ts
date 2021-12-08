import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
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
export interface MsgSendReqRandomvalResponse {
}
export declare const MsgCreateRandom: {
    encode(message: MsgCreateRandom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRandom;
    fromJSON(object: any): MsgCreateRandom;
    toJSON(message: MsgCreateRandom): unknown;
    fromPartial(object: DeepPartial<MsgCreateRandom>): MsgCreateRandom;
};
export declare const MsgCreateRandomResponse: {
    encode(message: MsgCreateRandomResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRandomResponse;
    fromJSON(object: any): MsgCreateRandomResponse;
    toJSON(message: MsgCreateRandomResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateRandomResponse>): MsgCreateRandomResponse;
};
export declare const MsgSendReqRandomval: {
    encode(message: MsgSendReqRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendReqRandomval;
    fromJSON(object: any): MsgSendReqRandomval;
    toJSON(message: MsgSendReqRandomval): unknown;
    fromPartial(object: DeepPartial<MsgSendReqRandomval>): MsgSendReqRandomval;
};
export declare const MsgSendReqRandomvalResponse: {
    encode(_: MsgSendReqRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendReqRandomvalResponse;
    fromJSON(_: any): MsgSendReqRandomvalResponse;
    toJSON(_: MsgSendReqRandomvalResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendReqRandomvalResponse>): MsgSendReqRandomvalResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendReqRandomval(request: MsgSendReqRandomval): Promise<MsgSendReqRandomvalResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
    SendReqRandomval(request: MsgSendReqRandomval): Promise<MsgSendReqRandomvalResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
