"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class AuthorizationResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Issuing Authorization objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/authorizations', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
                    },
                },
            },
        });
    }
    /**
     * Retrieves an Issuing Authorization object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/authorizations/${encodeURIComponent(id)}`, params, options, {
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
     * Updates the specified Issuing Authorization object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/authorizations/${encodeURIComponent(id)}`, params, options, {
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
     * [Deprecated] Approves a pending Issuing Authorization object. This request should be made within the timeout window of the [real-time authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations) flow.
     * This method is deprecated. Instead, [respond directly to the webhook request to approve an authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations#authorization-handling).
     * @deprecated
     */
    approve(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/authorizations/${encodeURIComponent(id)}/approve`, params, options, {
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
     * [Deprecated] Declines a pending Issuing Authorization object. This request should be made within the timeout window of the [real time authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations) flow.
     * This method is deprecated. Instead, [respond directly to the webhook request to decline an authorization](https://docs.stripe.com/docs/issuing/controls/real-time-authorizations#authorization-handling).
     * @deprecated
     */
    decline(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/authorizations/${encodeURIComponent(id)}/decline`, params, options, {
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