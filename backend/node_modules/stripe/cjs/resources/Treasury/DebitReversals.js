"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebitReversalResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class DebitReversalResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of DebitReversals.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/debit_reversals', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Reverses a ReceivedDebit and creates a DebitReversal object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/debit_reversals', params, options);
    }
    /**
     * Retrieves a DebitReversal object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/debit_reversals/${encodeURIComponent(id)}`, params, options);
    }
}
exports.DebitReversalResource = DebitReversalResource;
//# sourceMappingURL=DebitReversals.js.map