"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedCreditResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class ReceivedCreditResource extends StripeResource_js_1.StripeResource {
    /**
     * Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can't directly create ReceivedCredits initiated by third parties.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/treasury/received_credits', params, options);
    }
}
exports.ReceivedCreditResource = ReceivedCreditResource;
//# sourceMappingURL=ReceivedCredits.js.map