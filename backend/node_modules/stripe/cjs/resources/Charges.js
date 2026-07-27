"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class ChargeResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/charges', params, options, {
            methodType: 'list',
        });
    }
    /**
     * This method is no longer recommended—use the [Payment Intents API](https://docs.stripe.com/docs/api/payment_intents)
     * to initiate a new payment instead. Confirmation of the PaymentIntent creates the Charge
     * object used to request payment.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/charges', params, options);
    }
    /**
     * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/charges/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/charges/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Search for charges you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params, options) {
        return this._makeRequest('GET', '/v1/charges/search', params, options, {
            methodType: 'search',
        });
    }
    /**
     * Capture the payment of an existing, uncaptured charge that was created with the capture option set to false.
     *
     * Uncaptured payments expire a set number of days after they are created ([7 by default](https://docs.stripe.com/docs/charges/placing-a-hold)), after which they are marked as refunded and capture attempts will fail.
     *
     * Don't use this method to capture a PaymentIntent-initiated charge. Use [Capture a PaymentIntent](https://docs.stripe.com/docs/api/payment_intents/capture).
     */
    capture(id, params, options) {
        return this._makeRequest('POST', `/v1/charges/${encodeURIComponent(id)}/capture`, params, options);
    }
}
exports.ChargeResource = ChargeResource;
//# sourceMappingURL=Charges.js.map