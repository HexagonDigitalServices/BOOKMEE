"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class InvoiceResource extends StripeResource_js_1.StripeResource {
    /**
     * Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be [voided](https://docs.stripe.com/api/invoices/void).
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/invoices/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the invoice with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/invoices/${encodeURIComponent(id)}`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Draft invoices are fully editable. Once an invoice is [finalized](https://docs.stripe.com/docs/billing/invoices/workflow#finalized),
     * monetary values, as well as collection_method, become uneditable.
     *
     * If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
     * sending reminders for, or [automatically reconciling](https://docs.stripe.com/docs/billing/invoices/reconciliation) invoices, pass
     * auto_advance=false.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/invoices', params, options, {
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
                                                    pricing: {
                                                        kind: 'nullable',
                                                        inner: {
                                                            kind: 'object',
                                                            fields: {
                                                                unit_amount_decimal: {
                                                                    kind: 'nullable',
                                                                    inner: { kind: 'decimal_string' },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    quantity_decimal: {
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
     * This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you [finalize the invoice, which allows you to [pay](/api/invoices/pay) or <a href="/api/invoices/send">send](https://docs.stripe.com/api/invoices/finalize) the invoice to your customers.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/invoices', params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Search for invoices you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params, options) {
        return this._makeRequest('GET', '/v1/invoices/search', params, options, {
            methodType: 'search',
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
                                                    pricing: {
                                                        kind: 'nullable',
                                                        inner: {
                                                            kind: 'object',
                                                            fields: {
                                                                unit_amount_decimal: {
                                                                    kind: 'nullable',
                                                                    inner: { kind: 'decimal_string' },
                                                                },
                                                            },
                                                        },
                                                    },
                                                    quantity_decimal: {
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
     * Adds multiple line items to an invoice. This is only possible when an invoice is still a draft.
     */
    addLines(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/add_lines`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price_data: {
                                    kind: 'object',
                                    fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                                },
                                quantity_decimal: { kind: 'decimal_string' },
                            },
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Attaches a PaymentIntent or an Out of Band Payment to the invoice, adding it to the list of payments.
     *
     * For the PaymentIntent, when the PaymentIntent's status changes to succeeded, the payment is credited
     * to the invoice, increasing its amount_paid. When the invoice is fully paid, the
     * invoice's status becomes paid.
     *
     * If the PaymentIntent's status is already succeeded when it's attached, it's
     * credited to the invoice immediately.
     *
     * See: [Partial payments](https://docs.stripe.com/docs/invoicing/partial-payments) to learn more.
     */
    attachPayment(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/attach_payment`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you'd like to finalize a draft invoice manually, you can do so using this method.
     */
    finalizeInvoice(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/finalize`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.
     */
    markUncollectible(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/mark_uncollectible`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). However, if you'd like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.
     */
    pay(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/pay`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Removes multiple line items from an invoice. This is only possible when an invoice is still a draft.
     */
    removeLines(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/remove_lines`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Stripe will automatically send invoices to customers according to your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). However, if you'd like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.
     *
     * Requests made in test-mode result in no emails being sent, despite sending an invoice.sent event.
     */
    sendInvoice(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/send`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Updates multiple line items on an invoice. This is only possible when an invoice is still a draft.
     */
    updateLines(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/update_lines`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    lines: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price_data: {
                                    kind: 'object',
                                    fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                                },
                                quantity_decimal: { kind: 'decimal_string' },
                            },
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to [deletion](https://docs.stripe.com/api/invoices/delete), however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.
     *
     * Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you're doing business in. You might need to [issue another invoice or <a href="/api/credit_notes/create">credit note](https://docs.stripe.com/api/invoices/create) instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.
     */
    voidInvoice(id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(id)}/void`, params, options, {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * At any time, you can preview the upcoming invoice for a subscription or subscription schedule. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.
     *
     * You can also preview the effects of creating or updating a subscription or subscription schedule, including a preview of any prorations that will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the subscription_details.proration_date parameter when doing the actual subscription update.
     *
     * The recommended way to get only the prorations being previewed on the invoice is to consider line items where parent.subscription_item_details.proration is true.
     *
     * Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer's discount.
     *
     * Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. [Learn more](https://docs.stripe.com/currencies/conversions)
     */
    createPreview(params, options) {
        return this._makeRequest('POST', '/v1/invoices/create_preview', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    invoice_items: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                price_data: {
                                    kind: 'object',
                                    fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                                },
                                quantity_decimal: { kind: 'decimal_string' },
                                unit_amount_decimal: { kind: 'decimal_string' },
                            },
                        },
                    },
                    schedule_details: {
                        kind: 'object',
                        fields: {
                            phases: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
                                        add_invoice_items: {
                                            kind: 'array',
                                            element: {
                                                kind: 'object',
                                                fields: {
                                                    price_data: {
                                                        kind: 'object',
                                                        fields: {
                                                            unit_amount_decimal: { kind: 'decimal_string' },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                        items: {
                                            kind: 'array',
                                            element: {
                                                kind: 'object',
                                                fields: {
                                                    price_data: {
                                                        kind: 'object',
                                                        fields: {
                                                            unit_amount_decimal: { kind: 'decimal_string' },
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
                    subscription_details: {
                        kind: 'object',
                        fields: {
                            items: {
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
                                        pricing: {
                                            kind: 'nullable',
                                            inner: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: {
                                                        kind: 'nullable',
                                                        inner: { kind: 'decimal_string' },
                                                    },
                                                },
                                            },
                                        },
                                        quantity_decimal: {
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
     * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/invoices/${encodeURIComponent(id)}/lines`, params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                pricing: {
                                    kind: 'nullable',
                                    inner: {
                                        kind: 'object',
                                        fields: {
                                            unit_amount_decimal: {
                                                kind: 'nullable',
                                                inner: { kind: 'decimal_string' },
                                            },
                                        },
                                    },
                                },
                                quantity_decimal: {
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
     * Updates an invoice's line item. Some fields, such as tax_amounts, only live on the invoice line item,
     * so they can only be updated through this endpoint. Other fields, such as amount, live on both the invoice
     * item and the invoice line item, so updates on this endpoint will propagate to the invoice item as well.
     * Updating an invoice's line item is only possible before the invoice is finalized.
     */
    updateLineItem(invoiceId, id, params, options) {
        return this._makeRequest('POST', `/v1/invoices/${encodeURIComponent(invoiceId)}/lines/${encodeURIComponent(id)}`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    price_data: {
                        kind: 'object',
                        fields: { unit_amount_decimal: { kind: 'decimal_string' } },
                    },
                    quantity_decimal: { kind: 'decimal_string' },
                },
            },
            responseSchema: {
                kind: 'object',
                fields: {
                    pricing: {
                        kind: 'nullable',
                        inner: {
                            kind: 'object',
                            fields: {
                                unit_amount_decimal: {
                                    kind: 'nullable',
                                    inner: { kind: 'decimal_string' },
                                },
                            },
                        },
                    },
                    quantity_decimal: {
                        kind: 'nullable',
                        inner: { kind: 'decimal_string' },
                    },
                },
            },
        });
    }
}
exports.InvoiceResource = InvoiceResource;
//# sourceMappingURL=Invoices.js.map