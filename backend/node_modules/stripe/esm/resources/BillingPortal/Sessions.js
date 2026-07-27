// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class SessionResource extends StripeResource {
    /**
     * Creates a session of the customer portal.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing_portal/sessions', params, options);
    }
}
//# sourceMappingURL=Sessions.js.map