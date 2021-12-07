import { Reader, Writer } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "genievot.random.random";
export interface QueryGetRandomvalRequest {
    index: string;
}
export interface QueryGetRandomvalResponse {
    randomval: Randomval | undefined;
}
export interface QueryAllRandomvalRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllRandomvalResponse {
    randomval: Randomval[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetRandomvalRequest: {
    encode(message: QueryGetRandomvalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRandomvalRequest;
    fromJSON(object: any): QueryGetRandomvalRequest;
    toJSON(message: QueryGetRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetRandomvalRequest>): QueryGetRandomvalRequest;
};
export declare const QueryGetRandomvalResponse: {
    encode(message: QueryGetRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetRandomvalResponse;
    fromJSON(object: any): QueryGetRandomvalResponse;
    toJSON(message: QueryGetRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetRandomvalResponse>): QueryGetRandomvalResponse;
};
export declare const QueryAllRandomvalRequest: {
    encode(message: QueryAllRandomvalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRandomvalRequest;
    fromJSON(object: any): QueryAllRandomvalRequest;
    toJSON(message: QueryAllRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllRandomvalRequest>): QueryAllRandomvalRequest;
};
export declare const QueryAllRandomvalResponse: {
    encode(message: QueryAllRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllRandomvalResponse;
    fromJSON(object: any): QueryAllRandomvalResponse;
    toJSON(message: QueryAllRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllRandomvalResponse>): QueryAllRandomvalResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a randomval by index. */
    Randomval(request: QueryGetRandomvalRequest): Promise<QueryGetRandomvalResponse>;
    /** Queries a list of randomval items. */
    RandomvalAll(request: QueryAllRandomvalRequest): Promise<QueryAllRandomvalResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Randomval(request: QueryGetRandomvalRequest): Promise<QueryGetRandomvalResponse>;
    RandomvalAll(request: QueryAllRandomvalRequest): Promise<QueryAllRandomvalResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
