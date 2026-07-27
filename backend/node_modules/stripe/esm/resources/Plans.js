// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PlanResource extends StripeResource {
    /**
     * Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/plans/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the plan with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/plans/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    amount_decimal: { kind: 'nullable', inner: { kind: 'decimal_string' } },
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
        });
    }
    /**
     * Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/plans/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    amount_decimal: { kind: 'nullable', inner: { kind: 'decimal_string' } },
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
        });
    }
    /**
     * Returns a list of your plans.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/plans', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
                    },
                },
            },
        });
    }
    /**
     * You can now model subscriptions more flexibly using the [Prices API](https://docs.stripe.com/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/plans', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    amount_decimal: { kind: 'decimal_string' },
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
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    amount_decimal: { kind: 'nullable', inner: { kind: 'decimal_string' } },
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
        });
    }
}
//# sourceMappingURL=Plans.js.map