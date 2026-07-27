"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditBalanceTransactionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CreditBalanceTransactionResource extends StripeResource_js_1.StripeResource {
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
exports.CreditBalanceTransactionResource = CreditBalanceTransactionResource;
//# sourceMappingURL=CreditBalanceTransactions.js.map