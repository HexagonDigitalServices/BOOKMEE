// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class MeterEventStreamResource extends StripeResource {
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
//# sourceMappingURL=MeterEventStream.js.map