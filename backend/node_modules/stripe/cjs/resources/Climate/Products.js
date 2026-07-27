"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ProductResource extends StripeResource_js_1.StripeResource {
    /**
     * Lists all available Climate product objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/climate/products', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: { metric_tons_available: { kind: 'decimal_string' } },
                        },
                    },
                },
            },
        });
    }
    /**
     * Retrieves the details of a Climate product with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/climate/products/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: { metric_tons_available: { kind: 'decimal_string' } },
            },
        });
    }
}
exports.ProductResource = ProductResource;
//# sourceMappingURL=Products.js.map