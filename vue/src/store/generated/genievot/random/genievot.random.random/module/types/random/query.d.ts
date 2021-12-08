import { Reader, Writer } from "protobufjs/minimal";
import { Randomval } from "../random/randomval";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Userval } from "../random/userval";
import { SentRandomval } from "../random/sent_randomval";
import { TimedoutRandomval } from "../random/timedout_randomval";
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
export interface QueryGetSentRandomvalRequest {
    id: number;
}
export interface QueryGetSentRandomvalResponse {
    SentRandomval: SentRandomval | undefined;
}
export interface QueryAllSentRandomvalRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSentRandomvalResponse {
    SentRandomval: SentRandomval[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTimedoutRandomvalRequest {
    id: number;
}
export interface QueryGetTimedoutRandomvalResponse {
    TimedoutRandomval: TimedoutRandomval | undefined;
}
export interface QueryAllTimedoutRandomvalRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimedoutRandomvalResponse {
    TimedoutRandomval: TimedoutRandomval[];
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
export declare const QueryGetSentRandomvalRequest: {
    encode(message: QueryGetSentRandomvalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentRandomvalRequest;
    fromJSON(object: any): QueryGetSentRandomvalRequest;
    toJSON(message: QueryGetSentRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSentRandomvalRequest>): QueryGetSentRandomvalRequest;
};
export declare const QueryGetSentRandomvalResponse: {
    encode(message: QueryGetSentRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentRandomvalResponse;
    fromJSON(object: any): QueryGetSentRandomvalResponse;
    toJSON(message: QueryGetSentRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSentRandomvalResponse>): QueryGetSentRandomvalResponse;
};
export declare const QueryAllSentRandomvalRequest: {
    encode(message: QueryAllSentRandomvalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentRandomvalRequest;
    fromJSON(object: any): QueryAllSentRandomvalRequest;
    toJSON(message: QueryAllSentRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSentRandomvalRequest>): QueryAllSentRandomvalRequest;
};
export declare const QueryAllSentRandomvalResponse: {
    encode(message: QueryAllSentRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentRandomvalResponse;
    fromJSON(object: any): QueryAllSentRandomvalResponse;
    toJSON(message: QueryAllSentRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSentRandomvalResponse>): QueryAllSentRandomvalResponse;
};
export declare const QueryGetTimedoutRandomvalRequest: {
    encode(message: QueryGetTimedoutRandomvalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedoutRandomvalRequest;
    fromJSON(object: any): QueryGetTimedoutRandomvalRequest;
    toJSON(message: QueryGetTimedoutRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedoutRandomvalRequest>): QueryGetTimedoutRandomvalRequest;
};
export declare const QueryGetTimedoutRandomvalResponse: {
    encode(message: QueryGetTimedoutRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedoutRandomvalResponse;
    fromJSON(object: any): QueryGetTimedoutRandomvalResponse;
    toJSON(message: QueryGetTimedoutRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedoutRandomvalResponse>): QueryGetTimedoutRandomvalResponse;
};
export declare const QueryAllTimedoutRandomvalRequest: {
    encode(message: QueryAllTimedoutRandomvalRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedoutRandomvalRequest;
    fromJSON(object: any): QueryAllTimedoutRandomvalRequest;
    toJSON(message: QueryAllTimedoutRandomvalRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedoutRandomvalRequest>): QueryAllTimedoutRandomvalRequest;
};
export declare const QueryAllTimedoutRandomvalResponse: {
    encode(message: QueryAllTimedoutRandomvalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedoutRandomvalResponse;
    fromJSON(object: any): QueryAllTimedoutRandomvalResponse;
    toJSON(message: QueryAllTimedoutRandomvalResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedoutRandomvalResponse>): QueryAllTimedoutRandomvalResponse;
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
    /** Queries a sentRandomval by id. */
    SentRandomval(request: QueryGetSentRandomvalRequest): Promise<QueryGetSentRandomvalResponse>;
    /** Queries a list of sentRandomval items. */
    SentRandomvalAll(request: QueryAllSentRandomvalRequest): Promise<QueryAllSentRandomvalResponse>;
    /** Queries a timedoutRandomval by id. */
    TimedoutRandomval(request: QueryGetTimedoutRandomvalRequest): Promise<QueryGetTimedoutRandomvalResponse>;
    /** Queries a list of timedoutRandomval items. */
    TimedoutRandomvalAll(request: QueryAllTimedoutRandomvalRequest): Promise<QueryAllTimedoutRandomvalResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Randomval(request: QueryGetRandomvalRequest): Promise<QueryGetRandomvalResponse>;
    RandomvalAll(request: QueryAllRandomvalRequest): Promise<QueryAllRandomvalResponse>;
    Userval(request: QueryGetUservalRequest): Promise<QueryGetUservalResponse>;
    UservalAll(request: QueryAllUservalRequest): Promise<QueryAllUservalResponse>;
    VerifyValues(request: QueryVerifyValuesRequest): Promise<QueryVerifyValuesResponse>;
    SentRandomval(request: QueryGetSentRandomvalRequest): Promise<QueryGetSentRandomvalResponse>;
    SentRandomvalAll(request: QueryAllSentRandomvalRequest): Promise<QueryAllSentRandomvalResponse>;
    TimedoutRandomval(request: QueryGetTimedoutRandomvalRequest): Promise<QueryGetTimedoutRandomvalResponse>;
    TimedoutRandomvalAll(request: QueryAllTimedoutRandomvalRequest): Promise<QueryAllTimedoutRandomvalResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
