// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class FeatureResource extends StripeResource {
    /**
     * Retrieve a list of features
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/entitlements/features', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a feature
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/entitlements/features', params, options);
    }
    /**
     * Retrieves a feature
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/entitlements/features/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Update a feature's metadata or permanently deactivate it.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/entitlements/features/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Features.js.map