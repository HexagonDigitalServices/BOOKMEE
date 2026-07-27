// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class TransferResource extends StripeResource {
    /**
     * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/transfers', params, options, {
            methodType: 'list',
        });
    }
    /**
     * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://docs.stripe.com/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/transfers', params, options);
    }
    /**
     * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/transfers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request accepts only metadata as an argument.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/transfers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
     */
    listReversals(id, params, options) {
        return this._makeRequest('GET', `/v1/transfers/${encodeURIComponent(id)}/reversals`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * When you create a new reversal, you must specify a transfer to create it on.
     *
     * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
     *
     * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
     */
    createReversal(id, params, options) {
        return this._makeRequest('POST', `/v1/transfers/${encodeURIComponent(id)}/reversals`, params, options);
    }
    /**
     * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
     */
    retrieveReversal(transferId, id, params, options) {
        return this._makeRequest('GET', `/v1/transfers/${encodeURIComponent(transferId)}/reversals/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request only accepts metadata and description as arguments.
     */
    updateReversal(transferId, id, params, options) {
        return this._makeRequest('POST', `/v1/transfers/${encodeURIComponent(transferId)}/reversals/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Transfers.js.map