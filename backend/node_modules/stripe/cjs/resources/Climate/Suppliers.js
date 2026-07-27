"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class SupplierResource extends StripeResource_js_1.StripeResource {
    /**
     * Lists all available Climate supplier objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/climate/suppliers', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a Climate supplier object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/climate/suppliers/${encodeURIComponent(id)}`, params, options);
    }
}
exports.SupplierResource = SupplierResource;
//# sourceMappingURL=Suppliers.js.map