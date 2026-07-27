"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupIntentResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class SetupIntentResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of SetupIntents.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/setup_intents', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a SetupIntent object.
     *
     * After you create the SetupIntent, attach a payment method and [confirm](https://docs.stripe.com/docs/api/setup_intents/confirm)
     * it to collect any required permissions to charge the payment method later.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/setup_intents', params, options);
    }
    /**
     * Retrieves the details of a SetupIntent that has previously been created.
     *
     * Client-side retrieval using a publishable key is allowed when the client_secret is provided in the query string.
     *
     * When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the [SetupIntent](https://docs.stripe.com/api#setup_intent_object) object reference for more details.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/setup_intents/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a SetupIntent object.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/setup_intents/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * You can cancel a SetupIntent object when it's in one of these statuses: requires_payment_method, requires_confirmation, or requires_action.
     *
     * After you cancel it, setup is abandoned and any operations on the SetupIntent fail with an error. You can't cancel the SetupIntent for a Checkout Session. [Expire the Checkout Session](https://docs.stripe.com/docs/api/checkout/sessions/expire) instead.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/setup_intents/${encodeURIComponent(id)}/cancel`, params, options);
    }
    /**
     * Confirm that your customer intends to set up the current or
     * provided payment method. For example, you would confirm a SetupIntent
     * when a customer hits the “Save” button on a payment method management
     * page on your website.
     *
     * If the selected payment method does not require any additional
     * steps from the customer, the SetupIntent will transition to the
     * succeeded status.
     *
     * Otherwise, it will transition to the requires_action status and
     * suggest additional actions via next_action. If setup fails,
     * the SetupIntent will transition to the
     * requires_payment_method status or the canceled status if the
     * confirmation limit is reached.
     */
    confirm(id, params, options) {
        return this._makeRequest('POST', `/v1/setup_intents/${encodeURIComponent(id)}/confirm`, params, options);
    }
    /**
     * Verifies microdeposits on a SetupIntent object.
     */
    verifyMicrodeposits(id, params, options) {
        return this._makeRequest('POST', `/v1/setup_intents/${encodeURIComponent(id)}/verify_microdeposits`, params, options);
    }
}
exports.SetupIntentResource = SetupIntentResource;
//# sourceMappingURL=SetupIntents.js.map