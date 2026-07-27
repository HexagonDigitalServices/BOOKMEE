// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class TaxRateResource extends StripeResource {
    /**
     * Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/tax_rates', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new tax rate.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/tax_rates', params, options);
    }
    /**
     * Retrieves a tax rate with the given ID
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax_rates/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing tax rate.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/tax_rates/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=TaxRates.js.map