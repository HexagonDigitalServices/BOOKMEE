"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class AuthorizationResource extends StripeResource_js_1.StripeResource {
    /**
     * Create a test-mode authorization.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/issuing/authorizations', params, options, {
            requestSchema: {
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
                                        fields: { gross_amount_decimal: { kind: 'decimal_string' } },
                                    },
                                    non_fuel: {
                                        kind: 'object',
                                        fields: { gross_amount_decimal: { kind: 'decimal_string' } },
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
                },
            },
            responseSchema: {
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
     * Capture a test-mode authorization.
     */
    capture(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/authorizations/${encodeURIComponent(id)}/capture`, params, options, {
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
     * Expire a test-mode Authorization.
     */
    expire(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/authorizations/${encodeURIComponent(id)}/expire`, params, options, {
            responseSchema: {
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
     * Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.
     */
    finalizeAmount(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/authorizations/${encodeURIComponent(id)}/finalize_amount`, params, options, {
            requestSchema: {
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
                                        fields: { gross_amount_decimal: { kind: 'decimal_string' } },
                                    },
                                    non_fuel: {
                                        kind: 'object',
                                        fields: { gross_amount_decimal: { kind: 'decimal_string' } },
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
                },
            },
            responseSchema: {
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
     * Respond to a fraud challenge on a testmode Issuing authorization, simulating either a confirmation of fraud or a correction of legitimacy.
     */
    respond(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/authorizations/${encodeURIComponent(id)}/fraud_challenges/respond`, params, options, {
            responseSchema: {
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
     * Increment a test-mode Authorization.
     */
    increment(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/authorizations/${encodeURIComponent(id)}/increment`, params, options, {
            responseSchema: {
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
     * Reverse a test-mode Authorization.
     */
    reverse(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/authorizations/${encodeURIComponent(id)}/reverse`, params, options, {
            responseSchema: {
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
}
exports.AuthorizationResource = AuthorizationResource;
//# sourceMappingURL=Authorizations.js.map