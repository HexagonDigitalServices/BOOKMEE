"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditGrantResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CreditGrantResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieve a list of credit grants.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/billing/credit_grants', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a credit grant.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing/credit_grants', params, options);
    }
    /**
     * Retrieves a credit grant.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/billing/credit_grants/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a credit grant.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/credit_grants/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Expires a credit grant.
     */
    expire(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/credit_grants/${encodeURIComponent(id)}/expire`, params, options);
    }
    /**
     * Voids a credit grant.
     */
    voidGrant(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/credit_grants/${encodeURIComponent(id)}/void`, params, options);
    }
}
exports.CreditGrantResource = CreditGrantResource;
//# sourceMappingURL=CreditGrants.js.map