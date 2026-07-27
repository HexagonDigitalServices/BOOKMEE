"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceivedCreditResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ReceivedCreditResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of ReceivedCredits.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/received_credits', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/received_credits/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ReceivedCreditResource = ReceivedCreditResource;
//# sourceMappingURL=ReceivedCredits.js.map