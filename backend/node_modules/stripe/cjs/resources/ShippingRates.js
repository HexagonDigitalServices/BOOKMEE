"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingRateResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class ShippingRateResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of your shipping rates.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/shipping_rates', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new shipping rate object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/shipping_rates', params, options);
    }
    /**
     * Returns the shipping rate object with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/shipping_rates/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing shipping rate object.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/shipping_rates/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ShippingRateResource = ShippingRateResource;
//# sourceMappingURL=ShippingRates.js.map