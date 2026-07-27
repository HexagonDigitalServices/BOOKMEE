"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayDomainResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class ApplePayDomainResource extends StripeResource_js_1.StripeResource {
    /**
     * Delete an apple pay domain.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/apple_pay/domains/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieve an apple pay domain.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/apple_pay/domains/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * List apple pay domains.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/apple_pay/domains', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Create an apple pay domain.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/apple_pay/domains', params, options);
    }
}
exports.ApplePayDomainResource = ApplePayDomainResource;
//# sourceMappingURL=ApplePayDomains.js.map