"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboundTransferResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class InboundTransferResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of InboundTransfers sent from the specified FinancialAccount.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/inbound_transfers', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates an InboundTransfer.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/inbound_transfers', params, options);
    }
    /**
     * Retrieves the details of an existing InboundTransfer.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/inbound_transfers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Cancels an InboundTransfer.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/treasury/inbound_transfers/${encodeURIComponent(id)}/cancel`, params, options);
    }
}
exports.InboundTransferResource = InboundTransferResource;
//# sourceMappingURL=InboundTransfers.js.map