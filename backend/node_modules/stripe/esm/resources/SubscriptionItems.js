// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class SubscriptionItemResource extends StripeResource {
    /**
     * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/subscription_items/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the subscription item with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/subscription_items/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    plan: {
                        kind: 'object',
                        fields: {
                            amount_decimal: {
                                kind: 'nullable',
                                inner: { kind: 'decimal_string' },
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
                        },
                    },
                    price: {
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
        });
    }
    /**
     * Updates the plan or quantity of an item on a current subscription.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/subscription_items/${encodeURIComponent(id)}`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    price_data: {
                        kind: 'object',
                        fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    plan: {
                        kind: 'object',
                        fields: {
                            amount_decimal: {
                                kind: 'nullable',
                                inner: { kind: 'decimal_string' },
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
                        },
                    },
                    price: {
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
        });
    }
    /**
     * Returns a list of your subscription items for a given subscription.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/subscription_items', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                plan: {
                                    kind: 'object',
                                    fields: {
                                        amount_decimal: {
                                            kind: 'nullable',
                                            inner: { kind: 'decimal_string' },
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
                                    },
                                },
                                price: {
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
        });
    }
    /**
     * Adds a new item to an existing subscription. No existing items will be changed or replaced.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/subscription_items', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    price_data: {
                        kind: 'object',
                        fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    plan: {
                        kind: 'object',
                        fields: {
                            amount_decimal: {
                                kind: 'nullable',
                                inner: { kind: 'decimal_string' },
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
                        },
                    },
                    price: {
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
        });
    }
}
//# sourceMappingURL=SubscriptionItems.js.map