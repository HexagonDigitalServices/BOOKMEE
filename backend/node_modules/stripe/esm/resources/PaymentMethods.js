// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PaymentMethodResource extends StripeResource {
    /**
     * Returns a list of all PaymentMethods.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payment_methods', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a PaymentMethod object. Read the [Stripe.js reference](https://docs.stripe.com/docs/stripe-js/reference#stripe-create-payment-method) to learn how to create PaymentMethods via Stripe.js.
     *
     * Instead of creating a PaymentMethod directly, we recommend using the [PaymentIntents API to accept a payment immediately or the <a href="/docs/payments/save-and-reuse">SetupIntent](https://docs.stripe.com/docs/payments/accept-a-payment) API to collect payment method details ahead of a future payment.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/payment_methods', params, options);
    }
    /**
     * Retrieves a PaymentMethod object attached to the StripeAccount. To retrieve a payment method attached to a Customer, you should use [Retrieve a Customer's PaymentMethods](https://docs.stripe.com/docs/api/payment_methods/customer)
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_methods/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a PaymentMethod object. A PaymentMethod must be attached to a customer to be updated.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_methods/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Attaches a PaymentMethod object to a Customer.
     *
     * To attach a new PaymentMethod to a customer for future payments, we recommend you use a [SetupIntent](https://docs.stripe.com/docs/api/setup_intents)
     * or a PaymentIntent with [setup_future_usage](https://docs.stripe.com/docs/api/payment_intents/create#create_payment_intent-setup_future_usage).
     * These approaches will perform any necessary steps to set up the PaymentMethod for future payments. Using the /v1/payment_methods/:id/attach
     * endpoint without first using a SetupIntent or PaymentIntent with setup_future_usage does not optimize the PaymentMethod for
     * future use, which makes later declines and payment friction more likely.
     * See [Optimizing cards for future payments](https://docs.stripe.com/docs/payments/payment-intents#future-usage) for more information about setting up
     * future payments.
     *
     * To use this PaymentMethod as the default for invoice or subscription payments,
     * set [invoice_settings.default_payment_method](https://docs.stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method),
     * on the Customer to the PaymentMethod's ID.
     */
    attach(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_methods/${encodeURIComponent(id)}/attach`, params, options);
    }
    /**
     * Detaches a PaymentMethod object from a Customer. After a PaymentMethod is detached, it can no longer be used for a payment or re-attached to a Customer.
     */
    detach(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_methods/${encodeURIComponent(id)}/detach`, params, options);
    }
}
//# sourceMappingURL=PaymentMethods.js.map