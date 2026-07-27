// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PaymentRecordResource extends StripeResource {
    /**
     * Retrieves a Payment Record with the given ID
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_records/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Report a new payment attempt on the specified Payment Record. A new payment
     *  attempt can only be specified if all other payment attempts are canceled or failed.
     */
    reportPaymentAttempt(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_records/${encodeURIComponent(id)}/report_payment_attempt`, params, options);
    }
    /**
     * Report that the most recent payment attempt on the specified Payment Record
     *  was canceled.
     */
    reportPaymentAttemptCanceled(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_records/${encodeURIComponent(id)}/report_payment_attempt_canceled`, params, options);
    }
    /**
     * Report that the most recent payment attempt on the specified Payment Record
     *  failed or errored.
     */
    reportPaymentAttemptFailed(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_records/${encodeURIComponent(id)}/report_payment_attempt_failed`, params, options);
    }
    /**
     * Report that the most recent payment attempt on the specified Payment Record
     *  was guaranteed.
     */
    reportPaymentAttemptGuaranteed(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_records/${encodeURIComponent(id)}/report_payment_attempt_guaranteed`, params, options);
    }
    /**
     * Report informational updates on the specified Payment Record.
     */
    reportPaymentAttemptInformational(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_records/${encodeURIComponent(id)}/report_payment_attempt_informational`, params, options);
    }
    /**
     * Report that the most recent payment attempt on the specified Payment Record
     *  was refunded.
     */
    reportRefund(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_records/${encodeURIComponent(id)}/report_refund`, params, options);
    }
    /**
     * Report a new Payment Record. You may report a Payment Record as it is
     *  initialized and later report updates through the other report_* methods, or report Payment
     *  Records in a terminal state directly, through this method.
     */
    reportPayment(params, options) {
        return this._makeRequest('POST', '/v1/payment_records/report_payment', params, options);
    }
}
//# sourceMappingURL=PaymentRecords.js.map