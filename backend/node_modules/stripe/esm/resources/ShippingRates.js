// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class ShippingRateResource extends StripeResource {
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
//# sourceMappingURL=ShippingRates.js.map