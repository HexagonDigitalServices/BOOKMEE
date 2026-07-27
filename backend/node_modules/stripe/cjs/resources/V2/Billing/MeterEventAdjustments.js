"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterEventAdjustmentResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class MeterEventAdjustmentResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a meter event adjustment to cancel a previously sent meter event.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_event_adjustments', params, options);
    }
}
exports.MeterEventAdjustmentResource = MeterEventAdjustmentResource;
//# sourceMappingURL=MeterEventAdjustments.js.map