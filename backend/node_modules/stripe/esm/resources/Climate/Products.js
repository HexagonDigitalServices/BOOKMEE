// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ProductResource extends StripeResource {
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
//# sourceMappingURL=Products.js.map