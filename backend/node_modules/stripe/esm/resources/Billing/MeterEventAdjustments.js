// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class MeterEventAdjustmentResource extends StripeResource {
    /**
     * Creates a billing meter event adjustment.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing/meter_event_adjustments', params, options);
    }
}
//# sourceMappingURL=MeterEventAdjustments.js.map