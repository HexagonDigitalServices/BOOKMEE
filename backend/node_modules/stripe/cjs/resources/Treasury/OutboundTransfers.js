"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundTransferResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class OutboundTransferResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of OutboundTransfers sent from the specified FinancialAccount.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/outbound_transfers', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates an OutboundTransfer.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/outbound_transfers', params, options);
    }
    /**
     * Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/outbound_transfers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * An OutboundTransfer can be canceled if the funds have not yet been paid out.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/treasury/outbound_transfers/${encodeURIComponent(id)}/cancel`, params, options);
    }
}
exports.OutboundTransferResource = OutboundTransferResource;
//# sourceMappingURL=OutboundTransfers.js.map