"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CalculationResource extends StripeResource_js_1.StripeResource {
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
exports.CalculationResource = CalculationResource;
//# sourceMappingURL=Calculations.js.map