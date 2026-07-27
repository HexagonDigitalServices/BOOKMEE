"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class SourceResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/sources/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request accepts the metadata and owner as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our [payment method guides](https://docs.stripe.com/docs/sources) for more detail.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/sources/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Creates a new source object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/sources', params, options);
    }
    /**
     * Verify a given source.
     */
    verify(id, params, options) {
        return this._makeRequest('POST', `/v1/sources/${encodeURIComponent(id)}/verify`, params, options);
    }
    /**
     * List source transactions for a given source.
     */
    listSourceTransactions(id, params, options) {
        return this._makeRequest('GET', `/v1/sources/${encodeURIComponent(id)}/source_transactions`, params, options, {
            methodType: 'list',
        });
    }
}
exports.SourceResource = SourceResource;
//# sourceMappingURL=Sources.js.map