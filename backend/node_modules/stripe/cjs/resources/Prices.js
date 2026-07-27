"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class PriceResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of your active prices, excluding [inline prices](https://docs.stripe.com/docs/products-prices/pricing-models#inline-pricing). For the list of inactive prices, set active to false.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/prices', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
                                                        flat_amount_decimal: {
                                                            kind: 'nullable',
                                                            inner: { kind: 'decimal_string' },
                                                        },
                                                        unit_amount_decimal: {
                                                            kind: 'nullable',
                                                            inner: { kind: 'decimal_string' },
                                                        },
                                                    },
                                                },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                tiers: {
                                    kind: 'array',
                                    element: {
                                        kind: 'object',
                                        fields: {
                                            flat_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Creates a new [Price for an existing <a href="https://docs.stripe.com/api/products">Product](https://docs.stripe.com/api/prices). The Price can be recurring or one-time.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/prices', params, options, {
            requestSchema: {
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
            responseSchema: {
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
                                            flat_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    tiers: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                flat_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    unit_amount_decimal: {
                        kind: 'nullable',
                        inner: { kind: 'decimal_string' },
                    },
                },
            },
        });
    }
    /**
     * Retrieves the price with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/prices/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
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
                                            flat_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    tiers: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                flat_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    unit_amount_decimal: {
                        kind: 'nullable',
                        inner: { kind: 'decimal_string' },
                    },
                },
            },
        });
    }
    /**
     * Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/prices/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
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
                                            flat_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    tiers: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                flat_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    unit_amount_decimal: {
                        kind: 'nullable',
                        inner: { kind: 'decimal_string' },
                    },
                },
            },
        });
    }
    /**
     * Search for prices you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params, options) {
        return this._makeRequest('GET', '/v1/prices/search', params, options, {
            methodType: 'search',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
                                                        flat_amount_decimal: {
                                                            kind: 'nullable',
                                                            inner: { kind: 'decimal_string' },
                                                        },
                                                        unit_amount_decimal: {
                                                            kind: 'nullable',
                                                            inner: { kind: 'decimal_string' },
                                                        },
                                                    },
                                                },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                tiers: {
                                    kind: 'array',
                                    element: {
                                        kind: 'object',
                                        fields: {
                                            flat_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
}
exports.PriceResource = PriceResource;
//# sourceMappingURL=Prices.js.map