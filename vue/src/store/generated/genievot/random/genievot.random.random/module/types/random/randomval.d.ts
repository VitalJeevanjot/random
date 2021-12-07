import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
export interface Randomval {
    index: string;
    vrv: string;
    outcap: string;
    proof: string;
    ubk: string;
    message: string;
}
export declare const Randomval: {
    encode(message: Randomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Randomval;
    fromJSON(object: any): Randomval;
    toJSON(message: Randomval): unknown;
    fromPartial(object: DeepPartial<Randomval>): Randomval;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
