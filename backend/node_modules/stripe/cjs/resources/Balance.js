"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class BalanceResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves the current account balance, based on the authentication that was used to make the request.
     *  For a sample request, see [Accounting for negative balances](https://docs.stripe.com/docs/connect/account-balances#accounting-for-negative-balances).
     */
    retrieve(params, options) {
        return this._makeRequest('GET', '/v1/balance', params, options);
    }
}
exports.BalanceResource = BalanceResource;
//# sourceMappingURL=Balance.js.map