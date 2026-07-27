import { V2RuntimeSchema } from './Types.js';
/**
 * Coerces outbound V2 request data by converting bigint (or number)
 * int64_string fields to strings, matching the wire format expected by the API.
 *
 * Walks the schema tree and only touches fields that are marked as
 * int64_string. All other values are left unchanged.
 */
export declare const coerceV2RequestData: (data: unknown, schema: V2RuntimeSchema) => unknown;
/**
 * Coerces inbound V2 response data by converting string int64_string fields
 * to bigints, matching the SDK's public type contract.
 *
 * Walks the schema tree and only touches fields that are marked as
 * int64_string. All other values are left unchanged.
 */
export declare const coerceV2ResponseData: (data: unknown, schema: V2RuntimeSchema) => unknown;
