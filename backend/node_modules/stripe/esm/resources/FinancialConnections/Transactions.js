// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class TransactionResource extends StripeResource {
    /**
     * Returns a list of Financial Connections Transaction objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/financial_connections/transactions', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of a Financial Connections Transaction
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/financial_connections/transactions/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Transactions.js.map