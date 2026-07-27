// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class AccountSessionResource extends StripeResource {
    /**
     * Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/account_sessions', params, options);
    }
}
//# sourceMappingURL=AccountSessions.js.map