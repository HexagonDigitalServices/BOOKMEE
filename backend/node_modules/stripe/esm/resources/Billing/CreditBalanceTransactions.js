// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class CreditBalanceTransactionResource extends StripeResource {
    /**
     * Retrieve a list of credit balance transactions.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/billing/credit_balance_transactions', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a credit balance transaction.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/billing/credit_balance_transactions/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=CreditBalanceTransactions.js.map