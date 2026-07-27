"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class TransactionResource extends StripeResource_js_1.StripeResource {
    /**
     * Refund a test-mode Transaction.
     */
    refund(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/transactions/${encodeURIComponent(id)}/refund`, params, options, {
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
     * Allows the user to capture an arbitrary amount, also known as a forced capture.
     */
    createForceCapture(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/issuing/transactions/create_force_capture', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    purchase_details: {
                        kind: 'object',
                        fields: {
                            fleet: {
                                kind: 'object',
                                fields: {
                                    reported_breakdown: {
                                        kind: 'object',
                                        fields: {
                                            fuel: {
                                                kind: 'object',
                                                fields: {
                                                    gross_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                            non_fuel: {
                                                kind: 'object',
                                                fields: {
                                                    gross_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                            tax: {
                                                kind: 'object',
                                                fields: {
                                                    local_amount_decimal: { kind: 'decimal_string' },
                                                    national_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            fuel: {
                                kind: 'object',
                                fields: {
                                    quantity_decimal: { kind: 'decimal_string' },
                                    unit_cost_decimal: { kind: 'decimal_string' },
                                },
                            },
                            receipt: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: { quantity: { kind: 'decimal_string' } },
                                },
                            },
                        },
                    },
                },
            },
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
     * Allows the user to refund an arbitrary amount, also known as a unlinked refund.
     */
    createUnlinkedRefund(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/issuing/transactions/create_unlinked_refund', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    purchase_details: {
                        kind: 'object',
                        fields: {
                            fleet: {
                                kind: 'object',
                                fields: {
                                    reported_breakdown: {
                                        kind: 'object',
                                        fields: {
                                            fuel: {
                                                kind: 'object',
                                                fields: {
                                                    gross_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                            non_fuel: {
                                                kind: 'object',
                                                fields: {
                                                    gross_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                            tax: {
                                                kind: 'object',
                                                fields: {
                                                    local_amount_decimal: { kind: 'decimal_string' },
                                                    national_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            fuel: {
                                kind: 'object',
                                fields: {
                                    quantity_decimal: { kind: 'decimal_string' },
                                    unit_cost_decimal: { kind: 'decimal_string' },
                                },
                            },
                            receipt: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: { quantity: { kind: 'decimal_string' } },
                                },
                            },
                        },
                    },
                },
            },
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
exports.TransactionResource = TransactionResource;
//# sourceMappingURL=Transactions.js.map