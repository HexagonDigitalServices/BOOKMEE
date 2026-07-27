"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class RefundResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of all refunds you created. We return the refunds in sorted order, with the most recent refunds appearing first. The 10 most recent refunds are always available by default on the Charge object.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/refunds', params, options, {
            methodType: 'list',
        });
    }
    /**
     * When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.
     *
     * Creating a new refund will refund a charge that has previously been created but not yet refunded.
     * Funds will be refunded to the credit or debit card that was originally charged.
     *
     * You can optionally refund only part of a charge.
     * You can do so multiple times, until the entire charge has been refunded.
     *
     * Once entirely refunded, a charge can't be refunded again.
     * This method will raise an error when called on an already-refunded charge,
     * or when trying to refund more money than is left on a charge.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/refunds', params, options);
    }
    /**
     * Retrieves the details of an existing refund.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/refunds/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the refund that you specify by setting the values of the passed parameters. Any parameters that you don't provide remain unchanged.
     *
     * This request only accepts metadata as an argument.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/refunds/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Cancels a refund with a status of requires_action.
     *
     * You can't cancel refunds in other states. Only refunds for payment methods that require customer action can enter the requires_action state.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/refunds/${encodeURIComponent(id)}/cancel`, params, options);
    }
}
exports.RefundResource = RefundResource;
//# sourceMappingURL=Refunds.js.map