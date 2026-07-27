"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopupResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class TopupResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of top-ups.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/topups', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Top up the balance of an account
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/topups', params, options);
    }
    /**
     * Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/topups/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the metadata of a top-up. Other top-up details are not editable by design.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/topups/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Cancels a top-up. Only pending top-ups can be canceled.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/topups/${encodeURIComponent(id)}/cancel`, params, options);
    }
}
exports.TopupResource = TopupResource;
//# sourceMappingURL=Topups.js.map