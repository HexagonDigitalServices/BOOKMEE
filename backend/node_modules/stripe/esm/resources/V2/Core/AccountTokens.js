// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class AccountTokenResource extends StripeResource {
    /**
     * Create an account token with a publishable key and pass it to the Accounts v2 API to
     * create or update an account without its data touching your server.
     * Learn more about [account tokens](https://docs.stripe.com/connect/account-tokens).
     * In live mode, you can only create account tokens with your application's publishable key.
     * In test mode, you can create account tokens with your secret key or publishable key.
     * @throws Stripe.RateLimitError
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/core/account_tokens', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    identity: {
                        kind: 'object',
                        fields: {
                            individual: {
                                kind: 'object',
                                fields: {
                                    relationship: {
                                        kind: 'object',
                                        fields: { percent_ownership: { kind: 'decimal_string' } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Retrieves an Account Token.
     * @throws Stripe.RateLimitError
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v2/core/account_tokens/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=AccountTokens.js.map