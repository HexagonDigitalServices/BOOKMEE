// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class CustomerResource extends StripeResource {
    /**
     * Create an incoming testmode bank transfer
     */
    fundCashBalance(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/customers/${encodeURIComponent(id)}/fund_cash_balance`, params, options);
    }
}
//# sourceMappingURL=Customers.js.map