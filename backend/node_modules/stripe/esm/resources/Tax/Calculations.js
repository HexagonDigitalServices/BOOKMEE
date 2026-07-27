// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class CalculationResource extends StripeResource {
    /**
     * Retrieves a Tax Calculation object, if the calculation hasn't expired.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax/calculations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Calculates tax based on the input and returns a Tax Calculation object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/tax/calculations', params, options);
    }
    /**
     * Retrieves the line items of a tax calculation as a collection, if the calculation hasn't expired.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/tax/calculations/${encodeURIComponent(id)}/line_items`, params, options, {
            methodType: 'list',
        });
    }
}
//# sourceMappingURL=Calculations.js.map