"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class InvoiceItemResource extends StripeResource_js_1.StripeResource {
    /**
     * Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they're not attached to invoices, or if it's attached to a draft invoice.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/invoiceitems/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the invoice item with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/invoiceitems/${encodeURIComponent(id)}`, params, options, {
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
                    quantity_decimal: { kind: 'decimal_string' },
                },
            },
        });
    }
    /**
     * Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it's attached to is closed.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/invoiceitems/${encodeURIComponent(id)}`, params, options, {
            requestSchema: {
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
                    quantity_decimal: { kind: 'decimal_string' },
                },
            },
        });
    }
    /**
     * Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/invoiceitems', params, options, {
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
                                quantity_decimal: { kind: 'decimal_string' },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/invoiceitems', params, options, {
            requestSchema: {
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
                    quantity_decimal: { kind: 'decimal_string' },
                },
            },
        });
    }
}
exports.InvoiceItemResource = InvoiceItemResource;
//# sourceMappingURL=InvoiceItems.js.map