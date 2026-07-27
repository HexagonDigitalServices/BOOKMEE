// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class OutboundTransferResource extends StripeResource {
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
//# sourceMappingURL=OutboundTransfers.js.map