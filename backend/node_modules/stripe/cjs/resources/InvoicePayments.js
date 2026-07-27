"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePaymentResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class InvoicePaymentResource extends StripeResource_js_1.StripeResource {
    /**
     * When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/invoice_payments', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the invoice payment with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/invoice_payments/${encodeURIComponent(id)}`, params, options);
    }
}
exports.InvoicePaymentResource = InvoicePaymentResource;
//# sourceMappingURL=InvoicePayments.js.map