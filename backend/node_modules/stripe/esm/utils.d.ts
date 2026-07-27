import { RequestOptions } from './lib.js';
import { BaseAddress, RequestData, UrlInterpolator, RequestHeaders, MultipartRequestData, RequestAuthenticator, ApiMode } from './Types.js';
export declare function isOptionsHash(o: unknown): boolean | unknown;
/**
 * Stringifies an Object, accommodating nested objects
 * (forming the conventional key 'parent[child]=value')
 */
export declare function queryStringifyRequestData(data: RequestData | string): string;
/**
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */
export declare const makeURLInterpolator: (s: string) => UrlInterpolator;
export declare function extractUrlParams(path: string): Array<string>;
/**
 * enforces that only supplied API bases are allowed.
 */
export declare const validateApiBase: (apiBase: unknown) => apiBase is BaseAddress;
export type ProcessedOptions = {
    authenticator: RequestAuthenticator | null;
    headers: RequestHeaders;
    settings: {
        timeout?: number;
        maxNetworkRetries?: number;
    };
    streaming: boolean;
    apiBase: BaseAddress | null;
};
export declare function processOptions(options: RequestOptions | undefined): ProcessedOptions;
/**
 * Remove empty values from an object
 */
export declare function removeNullish<T extends Record<string, unknown>>(obj: T): T;
/**
 * Normalize standard HTTP Headers:
 * {'foo-bar': 'hi'}
 * becomes
 * {'Foo-Bar': 'hi'}
 */
export declare function normalizeHeaders(obj: RequestHeaders | null): RequestHeaders | null;
/**
 * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
 * without the exceptions which are irrelevant to us.
 */
export declare function normalizeHeader(header: string): string;
/**
 * Allow for special capitalization cases (such as OAuth)
 */
export declare function pascalToCamelCase(name: string): string;
export declare function isObject(obj: unknown): boolean;
export declare function flattenAndStringify(data: MultipartRequestData): Record<string, string | Uint8Array>;
export declare function validateInteger(name: string, n: unknown, defaultVal?: number): number;
export declare const AI_AGENTS: [string, string][];
export declare function detectAIAgent(env: Record<string, string | undefined>): string;
export declare function createApiKeyAuthenticator(apiKey: string): RequestAuthenticator;
/**
 * Joins an array of Uint8Arrays into a single Uint8Array
 */
export declare function concat(arrays: Array<Uint8Array>): Uint8Array;
/**
 * JSON stringifies an Object, replacing Date objects with Unix timestamps
 */
export declare function jsonStringifyRequestData(data: RequestData | string): string;
/**
 * Inspects the given path to determine if the endpoint is for v1 or v2 API
 */
export declare function getAPIMode(path?: string): ApiMode;
export declare function parseHttpHeaderAsString<K extends keyof RequestHeaders>(header: RequestHeaders[K]): string;
export declare function parseHeadersForFetch(headers: RequestHeaders): [string, string][];
/**
 * We do some async indirection in our HTTP calling code that means stack traces aren't correct traced back to their actual origin in userland
 * So, we call this with a manually sourced error right before we do async HTTP operations, capturing the stack trace
 * NOTE: Modifies the `err` arg.
 */
export declare function attachCallSiteToError(err: Error, callSiteStack: string | undefined): void;
