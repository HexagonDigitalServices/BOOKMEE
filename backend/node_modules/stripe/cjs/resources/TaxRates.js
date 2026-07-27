"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRateResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class TaxRateResource extends StripeResource_js_1.StripeResource {
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
exports.TaxRateResource = TaxRateResource;
//# sourceMappingURL=TaxRates.js.map