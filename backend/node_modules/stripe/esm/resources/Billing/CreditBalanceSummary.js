// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class CreditBalanceSummaryResource extends StripeResource {
    /**
     * Retrieves the credit balance summary for a customer.
     */
    retrieve(params, options) {
        return this._makeRequest('GET', '/v1/billing/credit_balance_summary', params, options);
    }
}
//# sourceMappingURL=CreditBalanceSummary.js.map