// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PaymentLinkResource extends StripeResource {
    /**
     * Returns a list of your payment links.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payment_links', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
        });
    }
    /**
     * Creates a payment link.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/payment_links', params, options, {
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
     * Retrieve a payment link.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_links/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
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
        });
    }
    /**
     * Updates a payment link.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_links/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
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
        });
    }
    /**
     * When retrieving a payment link, there is an includable line_items property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_links/${encodeURIComponent(id)}/line_items`, params, options, {
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
//# sourceMappingURL=PaymentLinks.js.map