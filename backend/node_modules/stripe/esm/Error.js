/* eslint-disable camelcase */
/* eslint-disable no-warning-comments */
// errorImports: The end of the section generated from our OpenAPI spec
export const generateV1Error = (rawStripeError) => {
    const statusCode = rawStripeError.statusCode;
    if (statusCode === 429 ||
        (statusCode === 400 && rawStripeError.code === 'rate_limit')) {
        return new StripeRateLimitError(rawStripeError);
    }
    if (statusCode === 400 || statusCode === 404) {
        if (rawStripeError.type === 'idempotency_error') {
            return new StripeIdempotencyError(rawStripeError);
        }
        return new StripeInvalidRequestError(rawStripeError);
    }
    if (statusCode === 401) {
        return new StripeAuthenticationError(rawStripeError);
    }
    if (statusCode === 402) {
        return new StripeCardError(rawStripeError);
    }
    if (statusCode === 403) {
        return new StripePermissionError(rawStripeError);
    }
    return new StripeAPIError(rawStripeError);
};
export const generateOAuthError = (rawStripeError) => {
    const oauthType = rawStripeError.type;
    switch (oauthType) {
        case 'invalid_grant':
            return new StripeInvalidGrantError(rawStripeError);
        case 'invalid_client':
            return new StripeInvalidClientError(rawStripeError);
        case 'invalid_request':
            return new StripeOAuthInvalidRequestError(rawStripeError);
        case 'invalid_scope':
            return new StripeInvalidScopeError(rawStripeError);
        case 'unsupported_grant_type':
            return new StripeUnsupportedGrantTypeError(rawStripeError);
        case 'unsupported_response_type':
            return new StripeUnsupportedResponseTypeError(rawStripeError);
        default:
            return new StripeOAuthError(rawStripeError);
    }
};
export const generateV2Error = (rawStripeError) => {
    switch (rawStripeError.type) {
        case 'idempotency_error':
            return new StripeIdempotencyError(rawStripeError);
        // switchCases: The beginning of the section generated from our OpenAPI spec
        case 'rate_limit':
            return new RateLimitError(rawStripeError);
        case 'temporary_session_expired':
            return new TemporarySessionExpiredError(rawStripeError);
        // switchCases: The end of the section generated from our OpenAPI spec
    }
    // Special handling for requests with missing required fields in V2 APIs.
    // invalid_field response in V2 APIs returns the field 'code' instead of 'type'.
    switch (rawStripeError.code) {
        case 'invalid_fields':
            return new StripeInvalidRequestError(rawStripeError);
    }
    return generateV1Error(rawStripeError);
};
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */
export class StripeError extends Error {
    // errorProperties: The end of the section generated from our OpenAPI spec
    constructor(raw = {}, type = null) {
        super(raw.message);
        this.type = type || this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        this.message = raw.message ?? '';
        this.userMessage = raw.user_message;
        // errorAssignments: The beginning of the section generated from our OpenAPI spec
        this.advice_code = raw.advice_code;
        this.charge = raw.charge;
        this.code = raw.code;
        this.decline_code = raw.decline_code;
        this.doc_url = raw.doc_url;
        this.network_advice_code = raw.network_advice_code;
        this.network_decline_code = raw.network_decline_code;
        this.param = raw.param;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.request_log_url = raw.request_log_url;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
        this.user_message = raw.user_message;
        // errorAssignments: The end of the section generated from our OpenAPI spec
    }
}
/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
StripeError.generate = generateV1Error;
// Specific Stripe Error types:
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */
export class StripeCardError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeCardError');
        this.decline_code = raw.decline_code ?? '';
    }
}
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */
export class StripeInvalidRequestError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidRequestError');
    }
}
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */
export class StripeAPIError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeAPIError');
    }
}
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */
export class StripeAuthenticationError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeAuthenticationError');
    }
}
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */
export class StripePermissionError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripePermissionError');
    }
}
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */
export class StripeRateLimitError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeRateLimitError');
    }
}
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */
export class StripeConnectionError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeConnectionError');
    }
}
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */
export class StripeSignatureVerificationError extends StripeError {
    constructor(header, payload, raw = {}) {
        super(raw, 'StripeSignatureVerificationError');
        this.header = header;
        this.payload = payload;
    }
}
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */
export class StripeIdempotencyError extends StripeError {
    constructor(raw = {}) {
        super(raw, 'StripeIdempotencyError');
    }
}
/**
 * StripeOAuthError is the base error for OAuth-specific errors.
 */
export class StripeOAuthError extends StripeError {
    constructor(raw = {}, type = 'StripeOAuthError') {
        super(raw, type);
    }
}
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
export class StripeInvalidGrantError extends StripeOAuthError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidGrantError');
    }
}
/**
 * InvalidClientError is raised when the client_id does not belong to you,
 * or an API key is required but not provided.
 */
export class StripeInvalidClientError extends StripeOAuthError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidClientError');
    }
}
/**
 * OAuthInvalidRequestError is raised when a required parameter is missing,
 * or an unsupported parameter or value is provided in the OAuth request.
 */
export class StripeOAuthInvalidRequestError extends StripeOAuthError {
    constructor(raw = {}) {
        super(raw, 'StripeOAuthInvalidRequestError');
    }
}
/**
 * InvalidScopeError is raised when an invalid scope is provided in the
 * OAuth request.
 */
export class StripeInvalidScopeError extends StripeOAuthError {
    constructor(raw = {}) {
        super(raw, 'StripeInvalidScopeError');
    }
}
/**
 * UnsupportedGrantTypeError is raised when an unsupported grant_type is
 * provided in the OAuth request.
 */
export class StripeUnsupportedGrantTypeError extends StripeOAuthError {
    constructor(raw = {}) {
        super(raw, 'StripeUnsupportedGrantTypeError');
    }
}
/**
 * UnsupportedResponseTypeError is raised when an unsupported response_type
 * is provided in the OAuth request.
 */
export class StripeUnsupportedResponseTypeError extends StripeOAuthError {
    constructor(raw = {}) {
        super(raw, 'StripeUnsupportedResponseTypeError');
    }
}
// classDefinitions: The beginning of the section generated from our OpenAPI spec
export class RateLimitError extends StripeError {
    constructor(rawStripeError = {}) {
        super(rawStripeError, 'RateLimitError');
    }
}
export class TemporarySessionExpiredError extends StripeError {
    constructor(rawStripeError = {}) {
        super(rawStripeError, 'TemporarySessionExpiredError');
    }
}
// classDefinitions: The end of the section generated from our OpenAPI spec
//# sourceMappingURL=Error.js.map