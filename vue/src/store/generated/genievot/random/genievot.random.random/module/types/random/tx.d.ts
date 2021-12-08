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
export interface MsgUpdateSentRandomvalResponse {
}
export interface MsgDeleteSentRandomval {
    creator: string;
    id: number;
}
export interface MsgDeleteSentRandomvalResponse {
}
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
export interface MsgUpdateTimedoutRandomvalResponse {
}
export interface MsgDeleteTimedoutRandomval {
    creator: string;
    id: number;
}
export interface MsgDeleteTimedoutRandomvalResponse {
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
export declare const MsgCreateSentRandomval: {
    encode(message: MsgCreateSentRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentRandomval;
    fromJSON(object: any): MsgCreateSentRandomval;
    toJSON(message: MsgCreateSentRandomval): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentRandomval>): MsgCreateSentRandomval;
};
export declare const MsgCreateSentRandomvalResponse: {
    encode(message: MsgCreateSentRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentRandomvalResponse;
    fromJSON(object: any): MsgCreateSentRandomvalResponse;
    toJSON(message: MsgCreateSentRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentRandomvalResponse>): MsgCreateSentRandomvalResponse;
};
export declare const MsgUpdateSentRandomval: {
    encode(message: MsgUpdateSentRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentRandomval;
    fromJSON(object: any): MsgUpdateSentRandomval;
    toJSON(message: MsgUpdateSentRandomval): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSentRandomval>): MsgUpdateSentRandomval;
};
export declare const MsgUpdateSentRandomvalResponse: {
    encode(_: MsgUpdateSentRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentRandomvalResponse;
    fromJSON(_: any): MsgUpdateSentRandomvalResponse;
    toJSON(_: MsgUpdateSentRandomvalResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSentRandomvalResponse>): MsgUpdateSentRandomvalResponse;
};
export declare const MsgDeleteSentRandomval: {
    encode(message: MsgDeleteSentRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentRandomval;
    fromJSON(object: any): MsgDeleteSentRandomval;
    toJSON(message: MsgDeleteSentRandomval): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSentRandomval>): MsgDeleteSentRandomval;
};
export declare const MsgDeleteSentRandomvalResponse: {
    encode(_: MsgDeleteSentRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentRandomvalResponse;
    fromJSON(_: any): MsgDeleteSentRandomvalResponse;
    toJSON(_: MsgDeleteSentRandomvalResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSentRandomvalResponse>): MsgDeleteSentRandomvalResponse;
};
export declare const MsgCreateTimedoutRandomval: {
    encode(message: MsgCreateTimedoutRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedoutRandomval;
    fromJSON(object: any): MsgCreateTimedoutRandomval;
    toJSON(message: MsgCreateTimedoutRandomval): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimedoutRandomval>): MsgCreateTimedoutRandomval;
};
export declare const MsgCreateTimedoutRandomvalResponse: {
    encode(message: MsgCreateTimedoutRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedoutRandomvalResponse;
    fromJSON(object: any): MsgCreateTimedoutRandomvalResponse;
    toJSON(message: MsgCreateTimedoutRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimedoutRandomvalResponse>): MsgCreateTimedoutRandomvalResponse;
};
export declare const MsgUpdateTimedoutRandomval: {
    encode(message: MsgUpdateTimedoutRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedoutRandomval;
    fromJSON(object: any): MsgUpdateTimedoutRandomval;
    toJSON(message: MsgUpdateTimedoutRandomval): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTimedoutRandomval>): MsgUpdateTimedoutRandomval;
};
export declare const MsgUpdateTimedoutRandomvalResponse: {
    encode(_: MsgUpdateTimedoutRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedoutRandomvalResponse;
    fromJSON(_: any): MsgUpdateTimedoutRandomvalResponse;
    toJSON(_: MsgUpdateTimedoutRandomvalResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTimedoutRandomvalResponse>): MsgUpdateTimedoutRandomvalResponse;
};
export declare const MsgDeleteTimedoutRandomval: {
    encode(message: MsgDeleteTimedoutRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedoutRandomval;
    fromJSON(object: any): MsgDeleteTimedoutRandomval;
    toJSON(message: MsgDeleteTimedoutRandomval): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTimedoutRandomval>): MsgDeleteTimedoutRandomval;
};
export declare const MsgDeleteTimedoutRandomvalResponse: {
    encode(_: MsgDeleteTimedoutRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedoutRandomvalResponse;
    fromJSON(_: any): MsgDeleteTimedoutRandomvalResponse;
    toJSON(_: MsgDeleteTimedoutRandomvalResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTimedoutRandomvalResponse>): MsgDeleteTimedoutRandomvalResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
    SendReqRandomval(request: MsgSendReqRandomval): Promise<MsgSendReqRandomvalResponse>;
    CreateSentRandomval(request: MsgCreateSentRandomval): Promise<MsgCreateSentRandomvalResponse>;
    UpdateSentRandomval(request: MsgUpdateSentRandomval): Promise<MsgUpdateSentRandomvalResponse>;
    DeleteSentRandomval(request: MsgDeleteSentRandomval): Promise<MsgDeleteSentRandomvalResponse>;
    CreateTimedoutRandomval(request: MsgCreateTimedoutRandomval): Promise<MsgCreateTimedoutRandomvalResponse>;
    UpdateTimedoutRandomval(request: MsgUpdateTimedoutRandomval): Promise<MsgUpdateTimedoutRandomvalResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteTimedoutRandomval(request: MsgDeleteTimedoutRandomval): Promise<MsgDeleteTimedoutRandomvalResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
    SendReqRandomval(request: MsgSendReqRandomval): Promise<MsgSendReqRandomvalResponse>;
    CreateSentRandomval(request: MsgCreateSentRandomval): Promise<MsgCreateSentRandomvalResponse>;
    UpdateSentRandomval(request: MsgUpdateSentRandomval): Promise<MsgUpdateSentRandomvalResponse>;
    DeleteSentRandomval(request: MsgDeleteSentRandomval): Promise<MsgDeleteSentRandomvalResponse>;
    CreateTimedoutRandomval(request: MsgCreateTimedoutRandomval): Promise<MsgCreateTimedoutRandomvalResponse>;
    UpdateTimedoutRandomval(request: MsgUpdateTimedoutRandomval): Promise<MsgUpdateTimedoutRandomvalResponse>;
    DeleteTimedoutRandomval(request: MsgDeleteTimedoutRandomval): Promise<MsgDeleteTimedoutRandomvalResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
