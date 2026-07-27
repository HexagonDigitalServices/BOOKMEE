"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionEntryResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class TransactionEntryResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves a list of TransactionEntry objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/transaction_entries', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                flow_details: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            issuing_authorization: {
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
                                                                unit_cost_decimal: {
                                                                    kind: 'nullable',
                                                                    inner: { kind: 'decimal_string' },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    transactions: {
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
                                                                                                                    inner: {
                                                                                                                        kind: 'decimal_string',
                                                                                                                    },
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
                                                                                                                    inner: {
                                                                                                                        kind: 'decimal_string',
                                                                                                                    },
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
                                                                                                                    inner: {
                                                                                                                        kind: 'decimal_string',
                                                                                                                    },
                                                                                                                },
                                                                                                                national_amount_decimal: {
                                                                                                                    kind: 'nullable',
                                                                                                                    inner: {
                                                                                                                        kind: 'decimal_string',
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
                                                                            fuel: {
                                                                                kind: 'nullable',
                                                                                inner: {
                                                                                    kind: 'object',
                                                                                    fields: {
                                                                                        quantity_decimal: {
                                                                                            kind: 'nullable',
                                                                                            inner: { kind: 'decimal_string' },
                                                                                        },
                                                                                        unit_cost_decimal: {
                                                                                            kind: 'decimal_string',
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
                },
            },
        });
    }
    /**
     * Retrieves a TransactionEntry object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/transaction_entries/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    flow_details: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: {
                                issuing_authorization: {
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
                                                    unit_cost_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        transactions: {
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
                                                                                                        inner: {
                                                                                                            kind: 'decimal_string',
                                                                                                        },
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
                                                                                                        inner: {
                                                                                                            kind: 'decimal_string',
                                                                                                        },
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
                                                                                                        inner: {
                                                                                                            kind: 'decimal_string',
                                                                                                        },
                                                                                                    },
                                                                                                    national_amount_decimal: {
                                                                                                        kind: 'nullable',
                                                                                                        inner: {
                                                                                                            kind: 'decimal_string',
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
                                                                fuel: {
                                                                    kind: 'nullable',
                                                                    inner: {
                                                                        kind: 'object',
                                                                        fields: {
                                                                            quantity_decimal: {
                                                                                kind: 'nullable',
                                                                                inner: { kind: 'decimal_string' },
                                                                            },
                                                                            unit_cost_decimal: {
                                                                                kind: 'decimal_string',
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
}
exports.TransactionEntryResource = TransactionEntryResource;
//# sourceMappingURL=TransactionEntries.js.map