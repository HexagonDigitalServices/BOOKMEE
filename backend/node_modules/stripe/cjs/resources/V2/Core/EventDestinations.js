"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDestinationResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class EventDestinationResource extends StripeResource_js_1.StripeResource {
    /**
     * Lists all event destinations.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v2/core/event_destinations', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Create a new event destination.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/core/event_destinations', params, options);
    }
    /**
     * Delete an event destination.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v2/core/event_destinations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the details of an event destination.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v2/core/event_destinations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Update the details of an event destination.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v2/core/event_destinations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Disable an event destination.
     */
    disable(id, params, options) {
        return this._makeRequest('POST', `/v2/core/event_destinations/${encodeURIComponent(id)}/disable`, params, options);
    }
    /**
     * Enable an event destination.
     */
    enable(id, params, options) {
        return this._makeRequest('POST', `/v2/core/event_destinations/${encodeURIComponent(id)}/enable`, params, options);
    }
    /**
     * Send a `ping` event to an event destination.
     */
    ping(id, params, options) {
        return this._makeRequest('POST', `/v2/core/event_destinations/${encodeURIComponent(id)}/ping`, params, options);
    }
}
exports.EventDestinationResource = EventDestinationResource;
//# sourceMappingURL=EventDestinations.js.map