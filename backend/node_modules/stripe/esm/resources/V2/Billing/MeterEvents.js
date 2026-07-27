// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class MeterEventResource extends StripeResource {
    /**
     * Creates a meter event. Events are validated synchronously, but are processed asynchronously. Supports up to 1,000 events per second in livemode. For higher rate-limits, please use meter event streams instead.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_events', params, options);
    }
}
//# sourceMappingURL=MeterEvents.js.map