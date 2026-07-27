"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveEntitlementResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ActiveEntitlementResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieve a list of active entitlements for a customer
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/entitlements/active_entitlements', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieve an active entitlement
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/entitlements/active_entitlements/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ActiveEntitlementResource = ActiveEntitlementResource;
//# sourceMappingURL=ActiveEntitlements.js.map