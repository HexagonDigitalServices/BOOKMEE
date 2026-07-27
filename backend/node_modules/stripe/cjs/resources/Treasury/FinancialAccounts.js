"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialAccountResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class FinancialAccountResource extends StripeResource_js_1.StripeResource {
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
exports.FinancialAccountResource = FinancialAccountResource;
//# sourceMappingURL=FinancialAccounts.js.map