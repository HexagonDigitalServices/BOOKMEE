"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedDebitResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class ReceivedDebitResource extends StripeResource_js_1.StripeResource {
    /**
     * Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can't directly create ReceivedDebits initiated by third parties.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/treasury/received_debits', params, options);
    }
}
exports.ReceivedDebitResource = ReceivedDebitResource;
//# sourceMappingURL=ReceivedDebits.js.map