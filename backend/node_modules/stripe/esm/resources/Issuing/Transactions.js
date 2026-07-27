// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class TransactionResource extends StripeResource {
    /**
     * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/transactions', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                purchase_details: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            fleet: {
                                                kind: 'nullable',
                                                inner: {
                                                    kind: 'object',
                                                    fields: {
                                                        reported_breakdown: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    fuel: {
                                                                        kind: 'nullable',
                                                                        inner: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                gross_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    non_fuel: {
                                                                        kind: 'nullable',
                                                                        inner: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                gross_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    tax: {
                                                                        kind: 'nullable',
                                                                        inner: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                local_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                national_amount_decimal: {
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
                                            fuel: {
                                                kind: 'nullable',
                                                inner: {
                                                    kind: 'object',
                                                    fields: {
                                                        quantity_decimal: {
                                                            kind: 'nullable',
                                                            inner: { kind: 'decimal_string' },
                                                        },
                                                        unit_cost_decimal: { kind: 'decimal_string' },
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
     * Retrieves an Issuing Transaction object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/transactions/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    purchase_details: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: {
                                fleet: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            reported_breakdown: {
                                                kind: 'nullable',
                                                inner: {
                                                    kind: 'object',
                                                    fields: {
                                                        fuel: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    gross_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        non_fuel: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    gross_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        tax: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    local_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                    national_amount_decimal: {
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
                                fuel: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            quantity_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_cost_decimal: { kind: 'decimal_string' },
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
     * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/transactions/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    purchase_details: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: {
                                fleet: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            reported_breakdown: {
                                                kind: 'nullable',
                                                inner: {
                                                    kind: 'object',
                                                    fields: {
                                                        fuel: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    gross_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        non_fuel: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    gross_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        tax: {
                                                            kind: 'nullable',
                                                            inner: {
                                                                kind: 'object',
                                                                fields: {
                                                                    local_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                    national_amount_decimal: {
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
                                fuel: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            quantity_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                            unit_cost_decimal: { kind: 'decimal_string' },
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
//# sourceMappingURL=Transactions.js.map