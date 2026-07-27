"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class FeatureResource extends StripeResource_js_1.StripeResource {
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
exports.FeatureResource = FeatureResource;
//# sourceMappingURL=Features.js.map