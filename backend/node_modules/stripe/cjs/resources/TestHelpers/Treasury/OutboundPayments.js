"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundPaymentResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class OutboundPaymentResource extends StripeResource_js_1.StripeResource {
    /**
     * Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the canceled or failed states.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Transitions a test mode created OutboundPayment to the failed status. The OutboundPayment must already be in the processing state.
     */
    fail(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}/fail`, params, options);
    }
    /**
     * Transitions a test mode created OutboundPayment to the posted status. The OutboundPayment must already be in the processing state.
     */
    post(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}/post`, params, options);
    }
    /**
     * Transitions a test mode created OutboundPayment to the returned status. The OutboundPayment must already be in the processing state.
     */
    returnOutboundPayment(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}/return`, params, options);
    }
}
exports.OutboundPaymentResource = OutboundPaymentResource;
//# sourceMappingURL=OutboundPayments.js.map