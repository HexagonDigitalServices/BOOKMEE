"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class PayoutResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payouts', params, options, {
            methodType: 'list',
        });
    }
    /**
     * To send funds to your own bank account, create a new payout object. Your [Stripe balance](https://docs.stripe.com/api#balance) must cover the payout amount. If it doesn't, you receive an “Insufficient Funds” error.
     *
     * If your API key is in test mode, money won't actually be sent, though every other action occurs as if you're in live mode.
     *
     * If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The [balance object](https://docs.stripe.com/api/balances/object) details available and pending amounts by source type.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/payouts', params, options);
    }
    /**
     * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payouts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified payout by setting the values of the parameters you pass. We don't change parameters that you don't provide. This request only accepts the metadata as arguments.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/payouts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * You can cancel a previously created payout if its status is pending. Stripe refunds the funds to your available balance. You can't cancel automatic Stripe payouts.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/payouts/${encodeURIComponent(id)}/cancel`, params, options);
    }
    /**
     * Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US and Canadian bank accounts. If the payout is manual and in the pending status, use /v1/payouts/:id/cancel instead.
     *
     * By requesting a reversal through /v1/payouts/:id/reverse, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.
     */
    reverse(id, params, options) {
        return this._makeRequest('POST', `/v1/payouts/${encodeURIComponent(id)}/reverse`, params, options);
    }
}
exports.PayoutResource = PayoutResource;
//# sourceMappingURL=Payouts.js.map