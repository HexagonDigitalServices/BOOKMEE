// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class InvoicePaymentResource extends StripeResource {
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
//# sourceMappingURL=InvoicePayments.js.map