// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class PaymentEvaluationResource extends StripeResource {
    /**
     * Request a Radar API fraud risk score from Stripe for a payment before sending it for external processor authorization.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/radar/payment_evaluations', params, options);
    }
}
//# sourceMappingURL=PaymentEvaluations.js.map