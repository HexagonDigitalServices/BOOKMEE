// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class TaxCodeResource extends StripeResource {
    /**
     * A list of [all tax codes available](https://stripe.com/docs/tax/tax-categories) to add to Products in order to allow specific tax calculations.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/tax_codes', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax_codes/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=TaxCodes.js.map