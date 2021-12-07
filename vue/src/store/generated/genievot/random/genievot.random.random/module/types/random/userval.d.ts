import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
export interface Userval {
    index: string;
    useraddr: string;
    count: string;
}
export declare const Userval: {
    encode(message: Userval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Userval;
    fromJSON(object: any): Userval;
    toJSON(message: Userval): unknown;
    fromPartial(object: DeepPartial<Userval>): Userval;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
