// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ReaderResource extends StripeResource {
    /**
     * Deletes a Reader object.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/terminal/readers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a Reader object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/terminal/readers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a Reader object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of Reader objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/terminal/readers', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new Reader object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/readers', params, options);
    }
    /**
     * Cancels the current reader action. See [Programmatic Cancellation](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven#programmatic-cancellation) for more details.
     */
    cancelAction(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/cancel_action`, params, options);
    }
    /**
     * Initiates an [input collection flow](https://docs.stripe.com/docs/terminal/features/collect-inputs) on a Reader to display input forms and collect information from your customers.
     */
    collectInputs(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/collect_inputs`, params, options);
    }
    /**
     * Initiates a payment flow on a Reader and updates the PaymentIntent with card details before manual confirmation. See [Collecting a Payment method](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#collect-a-paymentmethod) for more details.
     */
    collectPaymentMethod(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/collect_payment_method`, params, options);
    }
    /**
     * Finalizes a payment on a Reader. See [Confirming a Payment](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=inspect#confirm-the-paymentintent) for more details.
     */
    confirmPaymentIntent(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/confirm_payment_intent`, params, options);
    }
    /**
     * Initiates a payment flow on a Reader. See [process the payment](https://docs.stripe.com/docs/terminal/payments/collect-card-payment?terminal-sdk-platform=server-driven&process=immediately#process-payment) for more details.
     */
    processPaymentIntent(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/process_payment_intent`, params, options);
    }
    /**
     * Initiates a SetupIntent flow on a Reader. See [Save directly without charging](https://docs.stripe.com/docs/terminal/features/saving-payment-details/save-directly) for more details.
     */
    processSetupIntent(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/process_setup_intent`, params, options);
    }
    /**
     * Initiates an in-person refund on a Reader. See [Refund an Interac Payment](https://docs.stripe.com/docs/terminal/payments/regional?integration-country=CA#refund-an-interac-payment) for more details.
     */
    refundPayment(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/refund_payment`, params, options);
    }
    /**
     * Sets the reader display to show [cart details](https://docs.stripe.com/docs/terminal/features/display).
     */
    setReaderDisplay(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/readers/${encodeURIComponent(id)}/set_reader_display`, params, options);
    }
}
//# sourceMappingURL=Readers.js.map