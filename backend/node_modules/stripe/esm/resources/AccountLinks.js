// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class AccountLinkResource extends StripeResource {
    /**
     * Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/account_links', params, options);
    }
}
//# sourceMappingURL=AccountLinks.js.map