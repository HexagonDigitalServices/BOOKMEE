"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class SessionResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Checkout Sessions.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/checkout/sessions', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                currency_conversion: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: { fx_rate: { kind: 'decimal_string' } },
                                    },
                                },
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
        });
    }
    /**
     * Creates a Checkout Session object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/checkout/sessions', params, options, {
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
                    currency_conversion: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: { fx_rate: { kind: 'decimal_string' } },
                        },
                    },
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
        });
    }
    /**
     * Retrieves a Checkout Session object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/checkout/sessions/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    currency_conversion: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: { fx_rate: { kind: 'decimal_string' } },
                        },
                    },
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
        });
    }
    /**
     * Updates a Checkout Session object.
     *
     * Related guide: [Dynamically update a Checkout Session](https://docs.stripe.com/payments/advanced/dynamic-updates)
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/checkout/sessions/${encodeURIComponent(id)}`, params, options, {
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
                    currency_conversion: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: { fx_rate: { kind: 'decimal_string' } },
                        },
                    },
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
        });
    }
    /**
     * A Checkout Session can be expired when it is in one of these statuses: open
     *
     * After it expires, a customer can't complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.
     */
    expire(id, params, options) {
        return this._makeRequest('POST', `/v1/checkout/sessions/${encodeURIComponent(id)}/expire`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    currency_conversion: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: { fx_rate: { kind: 'decimal_string' } },
                        },
                    },
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
        });
    }
    /**
     * When retrieving a Checkout Session, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/checkout/sessions/${encodeURIComponent(id)}/line_items`, params, options, {
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
exports.SessionResource = SessionResource;
//# sourceMappingURL=Sessions.js.map