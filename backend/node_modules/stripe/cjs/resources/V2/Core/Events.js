"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class EventResource extends StripeResource_js_1.StripeResource {
    /**
     * List events, going back up to 30 days.
     */
    list(params, options) {
        const transformResponseData = (response) => {
            return {
                ...response,
                data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)),
            };
        };
        return this._makeRequest('GET', '/v2/core/events', params, options, {
            methodType: 'list',
            transformResponseData: transformResponseData,
        });
    }
    /**
     * Retrieves the details of an event if it was created in the last 30 days. Supply the unique
     * identifier of the event, which might have been delivered to your event destination.
     */
    retrieve(id, params, options) {
        const transformResponseData = (response) => {
            return this.addFetchRelatedObjectIfNeeded(response);
        };
        return this._makeRequest('GET', `/v2/core/events/${encodeURIComponent(id)}`, params, options, {
            transformResponseData: transformResponseData,
        });
    }
    /**
     * @private
     *
     * For internal use in stripe-node.
     *
     * @param pulledEvent The retrieved event object
     * @returns The retrieved event object with a fetchRelatedObject method,
     * if pulledEvent.related_object is valid (non-null and has a url)
     */
    addFetchRelatedObjectIfNeeded(pulledEvent) {
        if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
            return pulledEvent;
        }
        return {
            ...pulledEvent,
            fetchRelatedObject: () => this._makeRequest('GET', pulledEvent.related_object.url, undefined, {
                stripeContext: pulledEvent.context,
                headers: {
                    'Stripe-Request-Trigger': `event=${pulledEvent.id}`,
                },
            }),
        };
    }
}
exports.EventResource = EventResource;
//# sourceMappingURL=Events.js.map