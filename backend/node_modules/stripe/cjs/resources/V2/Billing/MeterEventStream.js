"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterEventStreamResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class MeterEventStreamResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates meter events. Events are processed asynchronously, including validation. Requires a meter event session for authentication. Supports up to 10,000 requests per second in livemode. For even higher rate-limits, contact sales.
     * @throws Stripe.TemporarySessionExpiredError
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_event_stream', params, options, {
            apiBase: 'meter_events',
        });
    }
}
exports.MeterEventStreamResource = MeterEventStreamResource;
//# sourceMappingURL=MeterEventStream.js.map