"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class DisputeResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of your disputes.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/disputes', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the dispute with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/disputes/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your [dashboard](https://dashboard.stripe.com/disputes), but if you prefer, you can use the API to submit evidence programmatically.
     *
     * Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our [guide to dispute types](https://docs.stripe.com/docs/disputes/categories).
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/disputes/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.
     *
     * The status of the dispute will change from needs_response to lost. Closing a dispute is irreversible.
     */
    close(id, params, options) {
        return this._makeRequest('POST', `/v1/disputes/${encodeURIComponent(id)}/close`, params, options);
    }
}
exports.DisputeResource = DisputeResource;
//# sourceMappingURL=Disputes.js.map