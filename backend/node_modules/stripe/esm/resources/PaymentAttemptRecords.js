// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PaymentAttemptRecordResource extends StripeResource {
    /**
     * List all the Payment Attempt Records attached to the specified Payment Record.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payment_attempt_records', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a Payment Attempt Record with the given ID
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_attempt_records/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=PaymentAttemptRecords.js.map