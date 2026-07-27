// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class FinancialAccountResource extends StripeResource {
    /**
     * Returns a list of FinancialAccounts.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/financial_accounts', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/financial_accounts', params, options);
    }
    /**
     * Retrieves the details of a FinancialAccount.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/financial_accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the details of a FinancialAccount.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/treasury/financial_accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.
     */
    close(id, params, options) {
        return this._makeRequest('POST', `/v1/treasury/financial_accounts/${encodeURIComponent(id)}/close`, params, options);
    }
    /**
     * Updates the Features associated with a FinancialAccount.
     */
    updateFeatures(id, params, options) {
        return this._makeRequest('POST', `/v1/treasury/financial_accounts/${encodeURIComponent(id)}/features`, params, options);
    }
    /**
     * Retrieves Features information associated with the FinancialAccount.
     */
    retrieveFeatures(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/financial_accounts/${encodeURIComponent(id)}/features`, params, options);
    }
}
//# sourceMappingURL=FinancialAccounts.js.map