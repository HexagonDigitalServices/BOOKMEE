// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class InboundTransferResource extends StripeResource {
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
//# sourceMappingURL=InboundTransfers.js.map