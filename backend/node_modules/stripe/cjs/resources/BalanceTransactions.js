"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceTransactionResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class BalanceTransactionResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of transactions that have contributed to the Stripe account balance (for example, charges, transfers, and so on). The transactions return in sorted order, with the most recent transactions appearing first.
     *
     * The previous name of this endpoint was “Balance history,” and it used the path /v1/balance/history.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/balance_transactions', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the balance transaction with the given ID.
     *
     * Note that this endpoint previously used the path /v1/balance/history/:id.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/balance_transactions/${encodeURIComponent(id)}`, params, options);
    }
}
exports.BalanceTransactionResource = BalanceTransactionResource;
//# sourceMappingURL=BalanceTransactions.js.map