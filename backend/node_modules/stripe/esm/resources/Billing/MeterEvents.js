// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class MeterEventResource extends StripeResource {
    /**
     * Creates a billing meter event.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing/meter_events', params, options);
    }
}
//# sourceMappingURL=MeterEvents.js.map