"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class MeterResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieve a list of billing meters.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/billing/meters', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a billing meter.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing/meters', params, options);
    }
    /**
     * Retrieves a billing meter given an ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/billing/meters/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a billing meter.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/meters/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * When a meter is deactivated, no more meter events will be accepted for this meter. You can't attach a deactivated meter to a price.
     */
    deactivate(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/meters/${encodeURIComponent(id)}/deactivate`, params, options);
    }
    /**
     * When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.
     */
    reactivate(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/meters/${encodeURIComponent(id)}/reactivate`, params, options);
    }
    /**
     * Retrieve a list of billing meter event summaries.
     */
    listEventSummaries(id, params, options) {
        return this._makeRequest('GET', `/v1/billing/meters/${encodeURIComponent(id)}/event_summaries`, params, options, {
            methodType: 'list',
        });
    }
}
exports.MeterResource = MeterResource;
//# sourceMappingURL=Meters.js.map