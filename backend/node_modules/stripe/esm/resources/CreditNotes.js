// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class CreditNoteResource extends StripeResource {
    /**
     * Returns a list of credit notes.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/credit_notes', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                lines: {
                                    kind: 'object',
                                    fields: {
                                        data: {
                                            kind: 'array',
                                            element: {
                                                kind: 'object',
                                                fields: {
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
     * Issue a credit note to adjust the amount of a finalized invoice. A credit note will first reduce the invoice's amount_remaining (and amount_due), but not below zero.
     * This amount is indicated by the credit note's pre_payment_amount. The excess amount is indicated by post_payment_amount, and it can result in any combination of the following:
     *
     *
     * Refunds: create a new refund (using refund_amount) or link existing refunds (using refunds).
     * Customer balance credit: credit the customer's balance (using credit_amount) which will be automatically applied to their next invoice when it's finalized.
     * Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using out_of_band_amount).
     *
     *
     * The sum of refunds, customer balance credits, and outside of Stripe credits must equal the post_payment_amount.
     *
     * You may issue multiple credit notes for an invoice. Each credit note may increment the invoice's pre_payment_credit_notes_amount,
     * post_payment_credit_notes_amount, or both, depending on the invoice's amount_remaining at the time of credit note creation.
     *
     * For invoices that also have refunds created through the [Refund API](https://docs.stripe.com/docs/api/refunds), the credit note API subtracts those refund amounts from the maximum creditable amount. This prevents the combined credit notes and refunds from exceeding the invoice amount. If you use both, ensure the combined total does not exceed the invoice's paid amount.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/credit_notes', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                        },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
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
     * Retrieves the credit note object with the given identifier.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/credit_notes/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
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
     * Updates an existing credit note.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/credit_notes/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
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
     * Get a preview of a credit note without creating it.
     */
    preview(params, options) {
        return this._makeRequest('GET', '/v1/credit_notes/preview', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                        },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
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
     * Marks a credit note as void. Learn more about [voiding credit notes](https://docs.stripe.com/docs/billing/invoices/credit-notes#voiding).
     */
    voidCreditNote(id, params, options) {
        return this._makeRequest('POST', `/v1/credit_notes/${encodeURIComponent(id)}/void`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
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
     * When retrieving a credit note preview, you'll get a lines property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.
     */
    listPreviewLineItems(params, options) {
        return this._makeRequest('GET', '/v1/credit_notes/preview/lines', params, options, {
            methodType: 'list',
            requestSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                        },
                    },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
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
     * When retrieving a credit note, you'll get a lines property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/credit_notes/${encodeURIComponent(id)}/lines`, params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
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
//# sourceMappingURL=CreditNotes.js.map