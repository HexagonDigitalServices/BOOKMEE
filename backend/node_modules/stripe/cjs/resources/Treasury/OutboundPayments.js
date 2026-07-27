"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundPaymentResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class OutboundPaymentResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of OutboundPayments sent from the specified FinancialAccount.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/outbound_payments', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates an OutboundPayment.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/outbound_payments', params, options);
    }
    /**
     * Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/outbound_payments/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Cancel an OutboundPayment.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/treasury/outbound_payments/${encodeURIComponent(id)}/cancel`, params, options);
    }
}
exports.OutboundPaymentResource = OutboundPaymentResource;
//# sourceMappingURL=OutboundPayments.js.map