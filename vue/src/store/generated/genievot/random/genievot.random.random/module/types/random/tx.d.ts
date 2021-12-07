import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
export interface MsgCreateRandom {
    creator: string;
    /** int32 count = 3; // -1 will be last (recently created) and 0 is first */
    multiplier: number;
}
export interface MsgCreateRandomResponse {
    id: number;
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
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateRandom(request: MsgCreateRandom): Promise<MsgCreateRandomResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
