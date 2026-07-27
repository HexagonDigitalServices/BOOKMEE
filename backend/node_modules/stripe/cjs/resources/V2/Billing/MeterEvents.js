"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterEventResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class MeterEventResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a meter event. Events are validated synchronously, but are processed asynchronously. Supports up to 1,000 events per second in livemode. For higher rate-limits, please use meter event streams instead.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_events', params, options);
    }
}
exports.MeterEventResource = MeterEventResource;
//# sourceMappingURL=MeterEvents.js.map