"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditReversalResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CreditReversalResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of CreditReversals.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/credit_reversals', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Reverses a ReceivedCredit and creates a CreditReversal object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/credit_reversals', params, options);
    }
    /**
     * Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/credit_reversals/${encodeURIComponent(id)}`, params, options);
    }
}
exports.CreditReversalResource = CreditReversalResource;
//# sourceMappingURL=CreditReversals.js.map