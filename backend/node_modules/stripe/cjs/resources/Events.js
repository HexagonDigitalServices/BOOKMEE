"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class EventResource extends StripeResource_js_1.StripeResource {
    /**
     * List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in [event object](https://docs.stripe.com/api/events/object) api_version attribute (not according to your current Stripe API version or Stripe-Version header).
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/events', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an event if it was created in the last 30 days. Supply the unique identifier of the event, which you might have received in a webhook.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/events/${encodeURIComponent(id)}`, params, options);
    }
}
exports.EventResource = EventResource;
//# sourceMappingURL=Events.js.map