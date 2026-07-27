"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedDebitResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ReceivedDebitResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of ReceivedDebits.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/received_debits', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/received_debits/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ReceivedDebitResource = ReceivedDebitResource;
//# sourceMappingURL=ReceivedDebits.js.map