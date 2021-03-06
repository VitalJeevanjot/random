export interface ProtobufAny {
    "@type"?: string;
}
export interface RandomMsgCreateRandomResponse {
    id?: string;
}
export interface RandomMsgCreateSentRandomvalResponse {
    /** @format uint64 */
    id?: string;
}
export interface RandomMsgCreateTimedoutRandomvalResponse {
    /** @format uint64 */
    id?: string;
}
export declare type RandomMsgDeleteSentRandomvalResponse = object;
export declare type RandomMsgDeleteTimedoutRandomvalResponse = object;
export declare type RandomMsgSendReqRandomvalResponse = object;
export declare type RandomMsgUpdateSentRandomvalResponse = object;
export declare type RandomMsgUpdateTimedoutRandomvalResponse = object;
export interface RandomQueryAllRandomvalResponse {
    randomval?: RandomRandomval[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RandomQueryAllSentRandomvalResponse {
    SentRandomval?: RandomSentRandomval[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RandomQueryAllTimedoutRandomvalResponse {
    TimedoutRandomval?: RandomTimedoutRandomval[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RandomQueryAllUservalResponse {
    userval?: RandomUserval[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface RandomQueryGetRandomvalResponse {
    randomval?: RandomRandomval;
}
export interface RandomQueryGetSentRandomvalResponse {
    SentRandomval?: RandomSentRandomval;
}
export interface RandomQueryGetTimedoutRandomvalResponse {
    TimedoutRandomval?: RandomTimedoutRandomval;
}
export interface RandomQueryGetUservalResponse {
    userval?: RandomUserval;
}
export interface RandomQueryVerifyValuesResponse {
    verified?: string;
}
export interface RandomRandomval {
    index?: string;
    creator?: string;
    vrv?: string;
    /** @format uint64 */
    multiplier?: string;
    proof?: string;
    pubk?: string;
    message?: string;
    /** @format uint64 */
    parsedvrv?: string;
    /** @format double */
    floatvrv?: number;
    /** @format uint64 */
    finalvrv?: string;
    /** @format double */
    finalvrvfl?: number;
}
export interface RandomSentRandomval {
    /** @format uint64 */
    id?: string;
    userid?: string;
    vrv?: string;
    creator?: string;
}
export interface RandomTimedoutRandomval {
    /** @format uint64 */
    id?: string;
    creator?: string;
}
export interface RandomUserval {
    index?: string;
    useraddr?: string;
    /** @format int64 */
    count?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title random/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryRandomvalAll
     * @summary Queries a list of randomval items.
     * @request GET:/genievot/random/random/randomval
     */
    queryRandomvalAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RandomQueryAllRandomvalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRandomval
     * @summary Queries a randomval by index.
     * @request GET:/genievot/random/random/randomval/{index}
     */
    queryRandomval: (index: string, params?: RequestParams) => Promise<HttpResponse<RandomQueryGetRandomvalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySentRandomvalAll
     * @summary Queries a list of sentRandomval items.
     * @request GET:/genievot/random/random/sentRandomval
     */
    querySentRandomvalAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RandomQueryAllSentRandomvalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySentRandomval
     * @summary Queries a sentRandomval by id.
     * @request GET:/genievot/random/random/sentRandomval/{id}
     */
    querySentRandomval: (id: string, params?: RequestParams) => Promise<HttpResponse<RandomQueryGetSentRandomvalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTimedoutRandomvalAll
     * @summary Queries a list of timedoutRandomval items.
     * @request GET:/genievot/random/random/timedoutRandomval
     */
    queryTimedoutRandomvalAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RandomQueryAllTimedoutRandomvalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTimedoutRandomval
     * @summary Queries a timedoutRandomval by id.
     * @request GET:/genievot/random/random/timedoutRandomval/{id}
     */
    queryTimedoutRandomval: (id: string, params?: RequestParams) => Promise<HttpResponse<RandomQueryGetTimedoutRandomvalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUservalAll
     * @summary Queries a list of userval items.
     * @request GET:/genievot/random/random/userval
     */
    queryUservalAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<RandomQueryAllUservalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUserval
     * @summary Queries a userval by index.
     * @request GET:/genievot/random/random/userval/{index}
     */
    queryUserval: (index: string, params?: RequestParams) => Promise<HttpResponse<RandomQueryGetUservalResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryVerifyValues
     * @summary Queries a list of verifyValues items.
     * @request GET:/genievot/random/random/verifyValues
     */
    queryVerifyValues: (query?: {
        pubkey?: string;
        message?: string;
        vrv?: string;
        proof?: string;
    }, params?: RequestParams) => Promise<HttpResponse<RandomQueryVerifyValuesResponse, RpcStatus>>;
}
export {};
