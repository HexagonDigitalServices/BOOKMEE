// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class PaymentMethodConfigurationResource extends StripeResource {
    /**
     * List payment method configurations
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/payment_method_configurations', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a payment method configuration
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/payment_method_configurations', params, options);
    }
    /**
     * Retrieve payment method configuration
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/payment_method_configurations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Update payment method configuration
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/payment_method_configurations/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=PaymentMethodConfigurations.js.map