"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditBalanceSummaryResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CreditBalanceSummaryResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves the credit balance summary for a customer.
     */
    retrieve(params, options) {
        return this._makeRequest('GET', '/v1/billing/credit_balance_summary', params, options);
    }
}
exports.CreditBalanceSummaryResource = CreditBalanceSummaryResource;
//# sourceMappingURL=CreditBalanceSummary.js.map