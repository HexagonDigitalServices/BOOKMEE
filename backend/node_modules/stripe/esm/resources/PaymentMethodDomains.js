// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PaymentMethodDomainResource extends StripeResource {
    /**
     * Lists the details of existing payment method domains.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payment_method_domains', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a payment method domain.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/payment_method_domains', params, options);
    }
    /**
     * Retrieves the details of an existing payment method domain.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_method_domains/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing payment method domain.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_method_domains/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Some payment methods might require additional steps to register a domain. If the requirements weren't satisfied when the domain was created, the payment method will be inactive on the domain.
     * The payment method doesn't appear in Elements or Embedded Checkout for this domain until it is active.
     *
     * To activate a payment method on an existing payment method domain, complete the required registration steps specific to the payment method, and then validate the payment method domain with this endpoint.
     *
     * Related guides: [Payment method domains](https://docs.stripe.com/docs/payments/payment-methods/pmd-registration).
     */
    validate(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_method_domains/${encodeURIComponent(id)}/validate`, params, options);
    }
}
//# sourceMappingURL=PaymentMethodDomains.js.map