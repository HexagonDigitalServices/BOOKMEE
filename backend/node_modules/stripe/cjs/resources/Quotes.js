"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class QuoteResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of your quotes.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/quotes', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                computed: {
                                    kind: 'object',
                                    fields: {
                                        upfront: {
                                            kind: 'object',
                                            fields: {
                                                line_items: {
                                                    kind: 'object',
                                                    fields: {
                                                        data: {
                                                            kind: 'array',
                                                            element: {
                                                                kind: 'object',
                                                                fields: {
                                                                    price: {
                                                                        kind: 'nullable',
                                                                        inner: {
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
                                                                                                            inner: {
                                                                                                                kind: 'decimal_string',
                                                                                                            },
                                                                                                        },
                                                                                                        unit_amount_decimal: {
                                                                                                            kind: 'nullable',
                                                                                                            inner: {
                                                                                                                kind: 'decimal_string',
                                                                                                            },
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
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * A quote models prices and services for a customer. Default options for header, description, footer, and expires_at can be set in the dashboard via the [quote template](https://dashboard.stripe.com/settings/billing/quote).
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/quotes', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    line_items: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price_data: {
                                    kind: 'object',
                                    fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                                },
                            },
                        },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    computed: {
                        kind: 'object',
                        fields: {
                            upfront: {
                                kind: 'object',
                                fields: {
                                    line_items: {
                                        kind: 'object',
                                        fields: {
                                            data: {
                                                kind: 'array',
                                                element: {
                                                    kind: 'object',
                                                    fields: {
                                                        price: {
                                                            kind: 'nullable',
                                                            inner: {
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Retrieves the quote with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/quotes/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    computed: {
                        kind: 'object',
                        fields: {
                            upfront: {
                                kind: 'object',
                                fields: {
                                    line_items: {
                                        kind: 'object',
                                        fields: {
                                            data: {
                                                kind: 'array',
                                                element: {
                                                    kind: 'object',
                                                    fields: {
                                                        price: {
                                                            kind: 'nullable',
                                                            inner: {
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
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * A quote models prices and services for a customer.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/quotes/${encodeURIComponent(id)}`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    line_items: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price_data: {
                                    kind: 'object',
                                    fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                                },
                            },
                        },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    computed: {
                        kind: 'object',
                        fields: {
                            upfront: {
                                kind: 'object',
                                fields: {
                                    line_items: {
                                        kind: 'object',
                                        fields: {
                                            data: {
                                                kind: 'array',
                                                element: {
                                                    kind: 'object',
                                                    fields: {
                                                        price: {
                                                            kind: 'nullable',
                                                            inner: {
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
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Accepts the specified quote.
     */
    accept(id, params, options) {
        return this._makeRequest('POST', `/v1/quotes/${encodeURIComponent(id)}/accept`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    computed: {
                        kind: 'object',
                        fields: {
                            upfront: {
                                kind: 'object',
                                fields: {
                                    line_items: {
                                        kind: 'object',
                                        fields: {
                                            data: {
                                                kind: 'array',
                                                element: {
                                                    kind: 'object',
                                                    fields: {
                                                        price: {
                                                            kind: 'nullable',
                                                            inner: {
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
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Cancels the quote.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/quotes/${encodeURIComponent(id)}/cancel`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    computed: {
                        kind: 'object',
                        fields: {
                            upfront: {
                                kind: 'object',
                                fields: {
                                    line_items: {
                                        kind: 'object',
                                        fields: {
                                            data: {
                                                kind: 'array',
                                                element: {
                                                    kind: 'object',
                                                    fields: {
                                                        price: {
                                                            kind: 'nullable',
                                                            inner: {
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
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Finalizes the quote.
     */
    finalizeQuote(id, params, options) {
        return this._makeRequest('POST', `/v1/quotes/${encodeURIComponent(id)}/finalize`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    computed: {
                        kind: 'object',
                        fields: {
                            upfront: {
                                kind: 'object',
                                fields: {
                                    line_items: {
                                        kind: 'object',
                                        fields: {
                                            data: {
                                                kind: 'array',
                                                element: {
                                                    kind: 'object',
                                                    fields: {
                                                        price: {
                                                            kind: 'nullable',
                                                            inner: {
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
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
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
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Download the PDF for a finalized quote. Explanation for special handling can be found [here](https://docs.stripe.com/quotes/overview#quote_pdf)
     */
    pdf(id, params, options) {
        return this._makeRequest('GET', `/v1/quotes/${encodeURIComponent(id)}/pdf`, params, options, {
            apiBase: 'files',
            streaming: true,
        });
    }
    /**
     * When retrieving a quote, there is an includable [computed.upfront.line_items](https://stripe.com/docs/api/quotes/object#quote_object-computed-upfront-line_items) property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of upfront line items.
     */
    listComputedUpfrontLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/quotes/${encodeURIComponent(id)}/computed_upfront_line_items`, params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price: {
                                    kind: 'nullable',
                                    inner: {
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
                    },
                },
            },
        });
    }
    /**
     * When retrieving a quote, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/quotes/${encodeURIComponent(id)}/line_items`, params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price: {
                                    kind: 'nullable',
                                    inner: {
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
                    },
                },
            },
        });
    }
}
exports.QuoteResource = QuoteResource;
//# sourceMappingURL=Quotes.js.map