// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class MeterEventSessionResource extends StripeResource {
    /**
     * Creates a meter event session to send usage on the high-throughput meter event stream. Authentication tokens are only valid for 15 minutes, so you need to create a new meter event session when your token expires.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/billing/meter_event_session', params, options);
    }
}
//# sourceMappingURL=MeterEventSession.js.map