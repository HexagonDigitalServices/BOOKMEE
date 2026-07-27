"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class AccountResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Financial Connections Account objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/financial_connections/accounts', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an Financial Connections Account.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/financial_connections/accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Disables your access to a Financial Connections Account. You will no longer be able to access data associated with the account (e.g. balances, transactions).
     */
    disconnect(id, params, options) {
        return this._makeRequest('POST', `/v1/financial_connections/accounts/${encodeURIComponent(id)}/disconnect`, params, options);
    }
    /**
     * Refreshes the data associated with a Financial Connections Account.
     */
    refresh(id, params, options) {
        return this._makeRequest('POST', `/v1/financial_connections/accounts/${encodeURIComponent(id)}/refresh`, params, options);
    }
    /**
     * Subscribes to periodic refreshes of data associated with a Financial Connections Account. When the account status is active, data is typically refreshed once a day.
     */
    subscribe(id, params, options) {
        return this._makeRequest('POST', `/v1/financial_connections/accounts/${encodeURIComponent(id)}/subscribe`, params, options);
    }
    /**
     * Unsubscribes from periodic refreshes of data associated with a Financial Connections Account.
     */
    unsubscribe(id, params, options) {
        return this._makeRequest('POST', `/v1/financial_connections/accounts/${encodeURIComponent(id)}/unsubscribe`, params, options);
    }
    /**
     * Lists all owners for a given Account
     */
    listOwners(id, params, options) {
        return this._makeRequest('GET', `/v1/financial_connections/accounts/${encodeURIComponent(id)}/owners`, params, options, {
            methodType: 'list',
        });
    }
}
exports.AccountResource = AccountResource;
//# sourceMappingURL=Accounts.js.map