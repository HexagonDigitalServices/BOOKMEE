// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class SessionResource extends StripeResource {
    /**
     * Retrieves the details of a Financial Connections Session
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/financial_connections/sessions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/financial_connections/sessions', params, options);
    }
}
//# sourceMappingURL=Sessions.js.map