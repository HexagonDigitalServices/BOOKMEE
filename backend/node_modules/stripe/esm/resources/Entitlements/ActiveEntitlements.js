// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ActiveEntitlementResource extends StripeResource {
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
//# sourceMappingURL=ActiveEntitlements.js.map