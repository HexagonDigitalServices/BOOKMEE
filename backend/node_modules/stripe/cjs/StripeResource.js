"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeResource = void 0;
const utils_js_1 = require("./utils.js");
const V2Coercion_js_1 = require("./V2Coercion.js");
const autoPagination_js_1 = require("./autoPagination.js");
/**
 * Encapsulates request logic for a Stripe Resource
 */
class StripeResource {
    constructor(stripe, deprecatedUrlData) {
        this.resourcePath = '';
        // Function to override the default data processor. This allows full control
        // over how a StripeResource's request data will get converted into an HTTP
        // body. This is useful for non-standard HTTP requests. The function should
        // take method name, data, and headers as arguments.
        this.requestDataProcessor = null;
        this._stripe = stripe;
        if (deprecatedUrlData) {
            throw new Error('Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.');
        }
        this.basePath = (0, utils_js_1.makeURLInterpolator)(
        // @ts-expect-error changing type of basePath
        this.basePath || stripe.getApiField('basePath'));
        // @ts-ignore changing type of path - path comes from prototype as string, convert to interpolator
        const rawPath = this.path || '';
        this.resourcePath = rawPath;
        this.path = (0, utils_js_1.makeURLInterpolator)(rawPath);
        this.initialize(stripe, deprecatedUrlData);
    }
    initialize(_stripe, _deprecatedUrlData) { }
    _makeRequest(method, path, params, options, spec) {
        const requestMethod = method.toUpperCase();
        const encode = spec?.encode || ((data) => data);
        const data = encode(params ? { ...params } : {});
        const processed = (0, utils_js_1.processOptions)(options);
        const apiBase = processed.apiBase || spec?.apiBase || null;
        const host = apiBase ? this._stripe.resolveBaseAddress(apiBase) : null;
        const streaming = processed.streaming || !!spec?.streaming;
        const headers = Object.assign(processed.headers, spec?.headers);
        const usage = spec?.usage || [];
        const dataInQuery = requestMethod === 'GET' || requestMethod === 'DELETE';
        let bodyData = dataInQuery ? null : data;
        const queryData = dataInQuery ? data : {};
        try {
            if (spec?.validator) {
                spec.validator(data, { headers });
            }
            // Coerce int64_string/decimal_string fields in request body
            if (spec?.requestSchema && bodyData) {
                bodyData = (0, V2Coercion_js_1.coerceV2RequestData)(bodyData, spec.requestSchema);
            }
        }
        catch (err) {
            return Promise.reject(err);
        }
        // Capture the caller's stack trace before the async boundary so errors can
        // include the user's call site, not just SDK internals.
        const callSiteStack = new Error().stack;
        const innerPromise = new Promise((resolve, reject) => {
            function requestCallback(err, response) {
                if (err) {
                    (0, utils_js_1.attachCallSiteToError)(err, callSiteStack);
                    reject(err);
                }
                else {
                    try {
                        if (spec?.responseSchema) {
                            (0, V2Coercion_js_1.coerceV2ResponseData)(response, spec.responseSchema);
                        }
                        resolve(spec?.transformResponseData
                            ? spec.transformResponseData(response)
                            : response);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
            }
            const emptyQuery = Object.keys(queryData).length === 0;
            const fullPath = [
                path,
                emptyQuery ? '' : '?',
                (0, utils_js_1.queryStringifyRequestData)(queryData),
            ].join('');
            this._stripe._requestSender._request(requestMethod, host, fullPath, bodyData, processed.authenticator, {
                headers,
                settings: processed.settings,
                streaming,
            }, usage, requestCallback, this.requestDataProcessor?.bind(this));
        });
        // Attach auto-pagination methods for list/search endpoints
        if (spec?.methodType) {
            Object.assign(innerPromise, (0, autoPagination_js_1.makeAutoPaginationMethods)(this, params ? { ...params } : {}, options, requestMethod, path, spec, innerPromise));
        }
        return innerPromise;
    }
}
exports.StripeResource = StripeResource;
StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
//# sourceMappingURL=StripeResource.js.map