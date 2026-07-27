import { HttpClientResponseError } from './RequestSender.js';
import { RawErrorType, StripeRawError } from './Types.js';
import { PaymentIntent } from './resources/PaymentIntents.js';
import { PaymentMethod } from './resources/PaymentMethods.js';
import { SetupIntent } from './resources/SetupIntents.js';
import { CustomerSource } from './resources/CustomerSources.js';
export declare const generateV1Error: (rawStripeError: StripeRawError) => StripeError;
export declare const generateOAuthError: (rawStripeError: StripeRawError) => StripeError;
export declare const generateV2Error: (rawStripeError: StripeRawError) => StripeError;
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
export declare class StripeError extends Error {
    readonly message: string;
    readonly userMessage?: string;
    readonly type: string;
    readonly raw: unknown;
    readonly rawType?: RawErrorType;
    readonly headers?: {
        [header: string]: string;
    };
    readonly requestId?: string;
    readonly detail?: string | Error | HttpClientResponseError;
    readonly statusCode?: number;
    /**
     * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://docs.stripe.com/declines#retrying-issuer-declines) if they provide one.
     */
    readonly advice_code?: string;
    /**
     * For card errors, the ID of the failed charge.
     */
    readonly charge?: string;
    /**
     * For some errors that could be handled programmatically, a short string indicating the [error code](https://docs.stripe.com/error-codes) reported.
     */
    readonly code?: string;
    /**
     * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://docs.stripe.com/declines#issuer-declines) if they provide one.
     */
    readonly decline_code?: string;
    /**
     * A URL to more information about the [error code](https://docs.stripe.com/error-codes) reported.
     */
    readonly doc_url?: string;
    /**
     * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
     */
    readonly network_advice_code?: string;
    /**
     * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
     */
    readonly network_decline_code?: string;
    /**
     * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
     */
    readonly param?: string;
    /**
     * The PaymentIntent object for errors returned on a request involving a PaymentIntent.
     */
    readonly payment_intent?: PaymentIntent;
    /**
     * The PaymentMethod object for errors returned on a request involving a PaymentMethod.
     */
    readonly payment_method?: PaymentMethod;
    /**
     * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
     */
    readonly payment_method_type?: string;
    /**
     * A URL to the request log entry in your dashboard.
     */
    readonly request_log_url?: string;
    /**
     * The SetupIntent object for errors returned on a request involving a SetupIntent.
     */
    readonly setup_intent?: SetupIntent;
    /**
     * The CustomerSource object for errors returned on a request involving a CustomerSource.
     */
    readonly source?: CustomerSource;
    /**
     * The user message associated with the error.
     */
    readonly user_message?: string;
    constructor(raw?: StripeRawError, type?: string | null);
    /**
     * Helper factory which takes raw stripe errors and outputs wrapping instances
     */
    static generate: (rawStripeError: StripeRawError) => StripeError;
}
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export declare class StripeCardError extends StripeError {
    readonly decline_code: string;
    constructor(raw?: StripeRawError);
}
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export declare class StripeInvalidRequestError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export declare class StripeAPIError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
export declare class StripeAuthenticationError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export declare class StripePermissionError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export declare class StripeRateLimitError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export declare class StripeConnectionError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export declare class StripeSignatureVerificationError extends StripeError {
    header: string | Uint8Array;
    payload: string | Uint8Array;
    constructor(header: string | Uint8Array, payload: string | Uint8Array, raw?: StripeRawError);
}
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export declare class StripeIdempotencyError extends StripeError {
    constructor(raw?: StripeRawError);
}
/**
 * StripeOAuthError is the base error for OAuth-specific errors.
 */
export declare class StripeOAuthError extends StripeError {
    constructor(raw?: StripeRawError, type?: string);
}
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export declare class StripeInvalidGrantError extends StripeOAuthError {
    constructor(raw?: StripeRawError);
}
/**
 * InvalidClientError is raised when the client_id does not belong to you,
 * or an API key is required but not provided.
 */
export declare class StripeInvalidClientError extends StripeOAuthError {
    constructor(raw?: StripeRawError);
}
/**
 * OAuthInvalidRequestError is raised when a required parameter is missing,
 * or an unsupported parameter or value is provided in the OAuth request.
 */
export declare class StripeOAuthInvalidRequestError extends StripeOAuthError {
    constructor(raw?: StripeRawError);
}
/**
 * InvalidScopeError is raised when an invalid scope is provided in the
 * OAuth request.
 */
export declare class StripeInvalidScopeError extends StripeOAuthError {
    constructor(raw?: StripeRawError);
}
/**
 * UnsupportedGrantTypeError is raised when an unsupported grant_type is
 * provided in the OAuth request.
 */
export declare class StripeUnsupportedGrantTypeError extends StripeOAuthError {
    constructor(raw?: StripeRawError);
}
/**
 * UnsupportedResponseTypeError is raised when an unsupported response_type
 * is provided in the OAuth request.
 */
export declare class StripeUnsupportedResponseTypeError extends StripeOAuthError {
    constructor(raw?: StripeRawError);
}
export declare class RateLimitError extends StripeError {
    constructor(rawStripeError?: StripeRawError);
}
export declare class TemporarySessionExpiredError extends StripeError {
    constructor(rawStripeError?: StripeRawError);
}
