"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalBundleResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class PhysicalBundleResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/physical_bundles', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a physical bundle object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/physical_bundles/${encodeURIComponent(id)}`, params, options);
    }
}
exports.PhysicalBundleResource = PhysicalBundleResource;
//# sourceMappingURL=PhysicalBundles.js.map