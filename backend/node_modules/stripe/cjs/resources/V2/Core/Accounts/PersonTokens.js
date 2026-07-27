"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonTokenResource = void 0;
const StripeResource_js_1 = require("../../../../StripeResource.js");
class PersonTokenResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a single-use token that represents the details for a person. Use this when you create or update persons associated with an Account v2. Learn more about [account tokens](https://docs.stripe.com/connect/account-tokens).
     * You can only create person tokens with your application's publishable key and in live mode. You can use your application's secret key to create person tokens only in test mode.
     * @throws Stripe.RateLimitError
     */
    create(accountId, params, options) {
        return this._makeRequest('POST', `/v2/core/accounts/${encodeURIComponent(accountId)}/person_tokens`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    relationship: {
                        kind: 'object',
                        fields: { percent_ownership: { kind: 'decimal_string' } },
                    },
                },
            },
        });
    }
    /**
     * Retrieves a Person Token associated with an Account.
     * @throws Stripe.RateLimitError
     */
    retrieve(accountId, id, params, options) {
        return this._makeRequest('GET', `/v2/core/accounts/${encodeURIComponent(accountId)}/person_tokens/${encodeURIComponent(id)}`, params, options);
    }
}
exports.PersonTokenResource = PersonTokenResource;
//# sourceMappingURL=PersonTokens.js.map