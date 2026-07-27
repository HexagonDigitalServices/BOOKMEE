"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class TransactionResource extends StripeResource_js_1.StripeResource {
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
exports.TransactionResource = TransactionResource;
//# sourceMappingURL=Transactions.js.map