"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodConfigurationResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class PaymentMethodConfigurationResource extends StripeResource_js_1.StripeResource {
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
exports.PaymentMethodConfigurationResource = PaymentMethodConfigurationResource;
//# sourceMappingURL=PaymentMethodConfigurations.js.map