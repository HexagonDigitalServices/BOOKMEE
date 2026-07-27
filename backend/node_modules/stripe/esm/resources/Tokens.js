// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class TokenResource extends StripeResource {
    /**
     * Retrieves the token with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tokens/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Creates a single-use token that represents a bank account's details.
     * You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a [connected account](https://docs.stripe.com/api#accounts) where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection) is application, which includes Custom accounts.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/tokens', params, options);
    }
}
//# sourceMappingURL=Tokens.js.map