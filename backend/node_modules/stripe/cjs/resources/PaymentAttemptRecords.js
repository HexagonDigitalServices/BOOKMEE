"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAttemptRecordResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class PaymentAttemptRecordResource extends StripeResource_js_1.StripeResource {
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
exports.PaymentAttemptRecordResource = PaymentAttemptRecordResource;
//# sourceMappingURL=PaymentAttemptRecords.js.map