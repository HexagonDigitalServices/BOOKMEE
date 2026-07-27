"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterEventSessionResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class MeterEventSessionResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a meter event session to send usage on the high-throughput meter event stream. Authentication tokens are only valid for 15 minutes, so you need to create a new meter event session when your token expires.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_event_session', params, options);
    }
}
exports.MeterEventSessionResource = MeterEventSessionResource;
//# sourceMappingURL=MeterEventSession.js.map