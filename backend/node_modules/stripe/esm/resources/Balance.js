// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class BalanceResource extends StripeResource {
    /**
     * Retrieves the current account balance, based on the authentication that was used to make the request.
     *  For a sample request, see [Accounting for negative balances](https://docs.stripe.com/docs/connect/account-balances#accounting-for-negative-balances).
     */
    retrieve(params, options) {
        return this._makeRequest('GET', '/v1/balance', params, options);
    }
}
//# sourceMappingURL=Balance.js.map