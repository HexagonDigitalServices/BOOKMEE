"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundTransferResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class InboundTransferResource extends StripeResource_js_1.StripeResource {
    /**
     * Transitions a test mode created InboundTransfer to the failed status. The InboundTransfer must already be in the processing state.
     */
    fail(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/inbound_transfers/${encodeURIComponent(id)}/fail`, params, options);
    }
    /**
     * Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the succeeded state.
     */
    returnInboundTransfer(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/inbound_transfers/${encodeURIComponent(id)}/return`, params, options);
    }
    /**
     * Transitions a test mode created InboundTransfer to the succeeded status. The InboundTransfer must already be in the processing state.
     */
    succeed(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/treasury/inbound_transfers/${encodeURIComponent(id)}/succeed`, params, options);
    }
}
exports.InboundTransferResource = InboundTransferResource;
//# sourceMappingURL=InboundTransfers.js.map