import { Writer, Reader } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { Userval } from "../random/userval";
import { SentRandomval } from "../random/sent_randomval";
import { TimedoutRandomval } from "../random/timedout_randomval";
export declare const protobufPackage = "genievot.random.random";
/** GenesisState defines the random module's genesis state. */
export interface GenesisState {
    randomvalList: Randomval[];
    uservalList: Userval[];
    portId: string;
    sentRandomvalList: SentRandomval[];
    sentRandomvalCount: number;
    timedoutRandomvalList: TimedoutRandomval[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    timedoutRandomvalCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
