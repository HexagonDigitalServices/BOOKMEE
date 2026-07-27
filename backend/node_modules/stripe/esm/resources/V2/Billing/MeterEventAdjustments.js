// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class MeterEventAdjustmentResource extends StripeResource {
    /**
     * Creates a meter event adjustment to cancel a previously sent meter event.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_event_adjustments', params, options);
    }
}
//# sourceMappingURL=MeterEventAdjustments.js.map