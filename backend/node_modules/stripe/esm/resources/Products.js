// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class ProductResource extends StripeResource {
    /**
     * Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with type=good is only possible if it has no SKUs associated with it.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/products/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/products/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/products/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/products', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new product object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/products', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    default_price_data: {
                        kind: 'object',
                        fields: {
                            currency_options: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
                                        tiers: {
                                            kind: 'array',
                                            element: {
                                                kind: 'object',
                                                fields: {
                                                    flat_amount_decimal: { kind: 'decimal_string' },
                                                    unit_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                        },
                                        unit_amount_decimal: { kind: 'decimal_string' },
                                    },
                                },
                            },
                            unit_amount_decimal: { kind: 'decimal_string' },
                        },
                    },
                },
            },
        });
    }
    /**
     * Search for products you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params, options) {
        return this._makeRequest('GET', '/v1/products/search', params, options, {
            methodType: 'search',
        });
    }
    /**
     * Deletes the feature attachment to a product
     */
    deleteFeature(productId, id, params, options) {
        return this._makeRequest('DELETE', `/v1/products/${encodeURIComponent(productId)}/features/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a product_feature, which represents a feature attachment to a product
     */
    retrieveFeature(productId, id, params, options) {
        return this._makeRequest('GET', `/v1/products/${encodeURIComponent(productId)}/features/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieve a list of features for a product
     */
    listFeatures(id, params, options) {
        return this._makeRequest('GET', `/v1/products/${encodeURIComponent(id)}/features`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a product_feature, which represents a feature attachment to a product
     */
    createFeature(id, params, options) {
        return this._makeRequest('POST', `/v1/products/${encodeURIComponent(id)}/features`, params, options);
    }
}
//# sourceMappingURL=Products.js.map