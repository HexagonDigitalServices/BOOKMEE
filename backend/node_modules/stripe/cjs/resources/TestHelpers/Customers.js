"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CustomerResource extends StripeResource_js_1.StripeResource {
    /**
     * Create an incoming testmode bank transfer
     */
    fundCashBalance(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/customers/${encodeURIComponent(id)}/fund_cash_balance`, params, options);
    }
}
exports.CustomerResource = CustomerResource;
//# sourceMappingURL=Customers.js.map