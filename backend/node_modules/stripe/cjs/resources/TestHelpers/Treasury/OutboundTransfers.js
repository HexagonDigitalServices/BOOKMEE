"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundTransferResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class OutboundTransferResource extends StripeResource_js_1.StripeResource {
    /**
     * Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the canceled or failed states.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_transfers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Transitions a test mode created OutboundTransfer to the failed status. The OutboundTransfer must already be in the processing state.
     */
    fail(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_transfers/${encodeURIComponent(id)}/fail`, params, options);
    }
    /**
     * Transitions a test mode created OutboundTransfer to the posted status. The OutboundTransfer must already be in the processing state.
     */
    post(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_transfers/${encodeURIComponent(id)}/post`, params, options);
    }
    /**
     * Transitions a test mode created OutboundTransfer to the returned status. The OutboundTransfer must already be in the processing state.
     */
    returnOutboundTransfer(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/outbound_transfers/${encodeURIComponent(id)}/return`, params, options);
    }
}
exports.OutboundTransferResource = OutboundTransferResource;
//# sourceMappingURL=OutboundTransfers.js.map