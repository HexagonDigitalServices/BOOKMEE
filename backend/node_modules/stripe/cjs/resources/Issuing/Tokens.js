"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class TokenResource extends StripeResource_js_1.StripeResource {
    /**
     * Lists all Issuing Token objects for a given card.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/tokens', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves an Issuing Token object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/tokens/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Attempts to update the specified Issuing Token object to the status specified.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/tokens/${encodeURIComponent(id)}`, params, options);
    }
}
exports.TokenResource = TokenResource;
//# sourceMappingURL=Tokens.js.map