import { Reader, Writer } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Userval } from "../random/userval";
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
export interface QueryGetUservalRequest {
    index: string;
}
export interface QueryGetUservalResponse {
    userval: Userval | undefined;
}
export interface QueryAllUservalRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllUservalResponse {
    userval: Userval[];
    pagination: PageResponse | undefined;
}
export interface QueryVerifyValuesRequest {
    pubkey: string;
    message: string;
    vrv: string;
    proof: string;
}
export interface QueryVerifyValuesResponse {
    verified: string;
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
export declare const QueryGetUservalRequest: {
    encode(message: QueryGetUservalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUservalRequest;
    fromJSON(object: any): QueryGetUservalRequest;
    toJSON(message: QueryGetUservalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUservalRequest>): QueryGetUservalRequest;
};
export declare const QueryGetUservalResponse: {
    encode(message: QueryGetUservalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUservalResponse;
    fromJSON(object: any): QueryGetUservalResponse;
    toJSON(message: QueryGetUservalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUservalResponse>): QueryGetUservalResponse;
};
export declare const QueryAllUservalRequest: {
    encode(message: QueryAllUservalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUservalRequest;
    fromJSON(object: any): QueryAllUservalRequest;
    toJSON(message: QueryAllUservalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUservalRequest>): QueryAllUservalRequest;
};
export declare const QueryAllUservalResponse: {
    encode(message: QueryAllUservalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUservalResponse;
    fromJSON(object: any): QueryAllUservalResponse;
    toJSON(message: QueryAllUservalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUservalResponse>): QueryAllUservalResponse;
};
export declare const QueryVerifyValuesRequest: {
    encode(message: QueryVerifyValuesRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryVerifyValuesRequest;
    fromJSON(object: any): QueryVerifyValuesRequest;
    toJSON(message: QueryVerifyValuesRequest): unknown;
    fromPartial(object: DeepPartial<QueryVerifyValuesRequest>): QueryVerifyValuesRequest;
};
export declare const QueryVerifyValuesResponse: {
    encode(message: QueryVerifyValuesResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryVerifyValuesResponse;
    fromJSON(object: any): QueryVerifyValuesResponse;
    toJSON(message: QueryVerifyValuesResponse): unknown;
    fromPartial(object: DeepPartial<QueryVerifyValuesResponse>): QueryVerifyValuesResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a randomval by index. */
    Randomval(request: QueryGetRandomvalRequest): Promise<QueryGetRandomvalResponse>;
    /** Queries a list of randomval items. */
    RandomvalAll(request: QueryAllRandomvalRequest): Promise<QueryAllRandomvalResponse>;
    /** Queries a userval by index. */
    Userval(request: QueryGetUservalRequest): Promise<QueryGetUservalResponse>;
    /** Queries a list of userval items. */
    UservalAll(request: QueryAllUservalRequest): Promise<QueryAllUservalResponse>;
    /** Queries a list of verifyValues items. */
    VerifyValues(request: QueryVerifyValuesRequest): Promise<QueryVerifyValuesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Randomval(request: QueryGetRandomvalRequest): Promise<QueryGetRandomvalResponse>;
    RandomvalAll(request: QueryAllRandomvalRequest): Promise<QueryAllRandomvalResponse>;
    Userval(request: QueryGetUservalRequest): Promise<QueryGetUservalResponse>;
    UservalAll(request: QueryAllUservalRequest): Promise<QueryAllUservalResponse>;
    VerifyValues(request: QueryVerifyValuesRequest): Promise<QueryVerifyValuesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
