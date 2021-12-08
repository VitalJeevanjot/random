import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "genievot.random.random";
export interface TimedoutRandomval {
    id: number;
    creator: string;
}
export declare const TimedoutRandomval: {
    encode(message: TimedoutRandomval, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TimedoutRandomval;
    fromJSON(object: any): TimedoutRandomval;
    toJSON(message: TimedoutRandomval): unknown;
    fromPartial(object: DeepPartial<TimedoutRandomval>): TimedoutRandomval;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
