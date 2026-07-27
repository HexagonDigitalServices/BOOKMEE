// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class CustomerSessionResource extends StripeResource {
    /**
     * Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/customer_sessions', params, options);
    }
}
//# sourceMappingURL=CustomerSessions.js.map