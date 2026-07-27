"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxIdResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class TaxIdResource extends StripeResource_js_1.StripeResource {
    /**
     * Deletes an existing account or customer tax_id object.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/tax_ids/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves an account or customer tax_id object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax_ids/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of tax IDs.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/tax_ids', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new account or customer tax_id object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/tax_ids', params, options);
    }
}
exports.TaxIdResource = TaxIdResource;
//# sourceMappingURL=TaxIds.js.map