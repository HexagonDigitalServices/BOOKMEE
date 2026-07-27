"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class PaymentIntentResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of PaymentIntents.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payment_intents', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a PaymentIntent object.
     *
     * After the PaymentIntent is created, attach a payment method and [confirm](https://docs.stripe.com/docs/api/payment_intents/confirm)
     * to continue the payment. Learn more about <a href="/docs/payments/payment-intents">the available payment flows
     * with the Payment Intents API.
     *
     * When you use confirm=true during creation, it's equivalent to creating
     * and confirming the PaymentIntent in the same call. You can use any parameters
     * available in the [confirm API](https://docs.stripe.com/docs/api/payment_intents/confirm) when you supply
     * confirm=true.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/payment_intents', params, options);
    }
    /**
     * Retrieves the details of a PaymentIntent that has previously been created.
     *
     * You can retrieve a PaymentIntent client-side using a publishable key when the client_secret is in the query string.
     *
     * If you retrieve a PaymentIntent with a publishable key, it only returns a subset of properties. Refer to the [payment intent](https://docs.stripe.com/api#payment_intent_object) object reference for more details.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_intents/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates properties on a PaymentIntent object without confirming.
     *
     * Depending on which properties you update, you might need to confirm the
     * PaymentIntent again. For example, updating the payment_method
     * always requires you to confirm the PaymentIntent again. If you prefer to
     * update and confirm at the same time, we recommend updating properties through
     * the [confirm API](https://docs.stripe.com/docs/api/payment_intents/confirm) instead.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Search for PaymentIntents you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params, options) {
        return this._makeRequest('GET', '/v1/payment_intents/search', params, options, {
            methodType: 'search',
        });
    }
    /**
     * Manually reconcile the remaining amount for a customer_balance PaymentIntent.
     */
    applyCustomerBalance(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}/apply_customer_balance`, params, options);
    }
    /**
     * You can cancel a PaymentIntent object when it's in one of these statuses: requires_payment_method, requires_capture, requires_confirmation, requires_action or, [in rare cases](https://docs.stripe.com/docs/payments/intents), processing.
     *
     * After it's canceled, no additional charges are made by the PaymentIntent and any operations on the PaymentIntent fail with an error. For PaymentIntents with a status of requires_capture, the remaining amount_capturable is automatically refunded.
     *
     * You can directly cancel the PaymentIntent for a Checkout Session only when the PaymentIntent has a status of requires_capture. Otherwise, you must [expire the Checkout Session](https://docs.stripe.com/docs/api/checkout/sessions/expire).
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}/cancel`, params, options);
    }
    /**
     * Capture the funds of an existing uncaptured PaymentIntent when its status is requires_capture.
     *
     * Uncaptured PaymentIntents are cancelled a set number of days (7 by default) after their creation.
     *
     * Learn more about [separate authorization and capture](https://docs.stripe.com/docs/payments/capture-later).
     */
    capture(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}/capture`, params, options);
    }
    /**
     * Confirm that your customer intends to pay with current or provided
     * payment method. Upon confirmation, the PaymentIntent will attempt to initiate
     * a payment.
     *
     * If the selected payment method requires additional authentication steps, the
     * PaymentIntent will transition to the requires_action status and
     * suggest additional actions via next_action. If payment fails,
     * the PaymentIntent transitions to the requires_payment_method status or the
     * canceled status if the confirmation limit is reached. If
     * payment succeeds, the PaymentIntent will transition to the succeeded
     * status (or requires_capture, if capture_method is set to manual).
     *
     * If the confirmation_method is automatic, payment may be attempted
     * using our [client SDKs](https://docs.stripe.com/docs/stripe-js/reference#stripe-handle-card-payment)
     * and the PaymentIntent's [client_secret](https://docs.stripe.com/api#payment_intent_object-client_secret).
     * After next_actions are handled by the client, no additional
     * confirmation is required to complete the payment.
     *
     * If the confirmation_method is manual, all payment attempts must be
     * initiated using a secret key.
     *
     * If any actions are required for the payment, the PaymentIntent will
     * return to the requires_confirmation state
     * after those actions are completed. Your server needs to then
     * explicitly re-confirm the PaymentIntent to initiate the next payment
     * attempt.
     *
     * There is a variable upper limit on how many times a PaymentIntent can be confirmed.
     * After this limit is reached, any further calls to this endpoint will
     * transition the PaymentIntent to the canceled state.
     */
    confirm(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}/confirm`, params, options);
    }
    /**
     * Perform an incremental authorization on an eligible
     * [PaymentIntent](https://docs.stripe.com/docs/api/payment_intents/object). To be eligible, the
     * PaymentIntent's status must be requires_capture and
     * [incremental_authorization_supported](https://docs.stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported)
     * must be true.
     *
     * Incremental authorizations attempt to increase the authorized amount on
     * your customer's card to the new, higher amount provided. Similar to the
     * initial authorization, incremental authorizations can be declined. A
     * single PaymentIntent can call this endpoint multiple times to further
     * increase the authorized amount.
     *
     * If the incremental authorization succeeds, the PaymentIntent object
     * returns with the updated
     * [amount](https://docs.stripe.com/docs/api/payment_intents/object#payment_intent_object-amount).
     * If the incremental authorization fails, a
     * [card_declined](https://docs.stripe.com/docs/error-codes#card-declined) error returns, and no other
     * fields on the PaymentIntent or Charge update. The PaymentIntent
     * object remains capturable for the previously authorized amount.
     *
     * Each PaymentIntent can have a maximum of 10 incremental authorization attempts, including declines.
     * After it's captured, a PaymentIntent can no longer be incremented.
     *
     * Learn more about incremental authorizations with
     * [in-person payments](https://docs.stripe.com/docs/terminal/features/incremental-authorizations) and
     * [online payments](https://docs.stripe.com/docs/payments/incremental-authorization?platform=web&ui=elements).
     */
    incrementAuthorization(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}/increment_authorization`, params, options);
    }
    /**
     * Verifies microdeposits on a PaymentIntent object.
     */
    verifyMicrodeposits(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_intents/${encodeURIComponent(id)}/verify_microdeposits`, params, options);
    }
    /**
     * Lists all LineItems of a given PaymentIntent.
     */
    listAmountDetailsLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_intents/${encodeURIComponent(id)}/amount_details_line_items`, params, options, {
            methodType: 'list',
        });
    }
}
exports.PaymentIntentResource = PaymentIntentResource;
//# sourceMappingURL=PaymentIntents.js.map