"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentEvaluationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class PaymentEvaluationResource extends StripeResource_js_1.StripeResource {
    /**
     * Request a Radar API fraud risk score from Stripe for a payment before sending it for external processor authorization.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/radar/payment_evaluations', params, options);
    }
}
exports.PaymentEvaluationResource = PaymentEvaluationResource;
//# sourceMappingURL=PaymentEvaluations.js.map