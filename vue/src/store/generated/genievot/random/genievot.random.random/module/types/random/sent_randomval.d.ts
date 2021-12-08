import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
export interface SentRandomval {
    id: number;
    userid: string;
    vrv: string;
    creator: string;
}
export declare const SentRandomval: {
    encode(message: SentRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SentRandomval;
    fromJSON(object: any): SentRandomval;
    toJSON(message: SentRandomval): unknown;
    fromPartial(object: DeepPartial<SentRandomval>): SentRandomval;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
