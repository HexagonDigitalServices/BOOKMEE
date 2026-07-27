// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class AccountLinkResource extends StripeResource {
    /**
     * Creates an AccountLink object that includes a single-use URL that an account can use to access a Stripe-hosted flow for collecting or updating required information.
     * @throws Stripe.RateLimitError
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/core/account_links', params, options);
    }
}
//# sourceMappingURL=AccountLinks.js.map