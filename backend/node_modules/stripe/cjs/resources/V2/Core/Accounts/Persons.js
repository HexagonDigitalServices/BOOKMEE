"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResource = void 0;
const StripeResource_js_1 = require("../../../../StripeResource.js");
class PersonResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a paginated list of Persons associated with an Account.
     * @throws Stripe.RateLimitError
     */
    list(accountId, params, options) {
        return this._makeRequest('GET', `/v2/core/accounts/${encodeURIComponent(accountId)}/persons`, params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
        });
    }
    /**
     * Create a Person. Adds an individual to an Account's identity. You can set relationship attributes and identity information at creation.
     * @throws Stripe.RateLimitError
     */
    create(accountId, params, options) {
        return this._makeRequest('POST', `/v2/core/accounts/${encodeURIComponent(accountId)}/persons`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    relationship: {
                        kind: 'object',
                        fields: { percent_ownership: { kind: 'decimal_string' } },
                    },
                },
            },
            responseSchema: {
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
     * Delete a Person associated with an Account.
     * @throws Stripe.RateLimitError
     */
    del(accountId, id, params, options) {
        return this._makeRequest('DELETE', `/v2/core/accounts/${encodeURIComponent(accountId)}/persons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a Person associated with an Account.
     * @throws Stripe.RateLimitError
     */
    retrieve(accountId, id, params, options) {
        return this._makeRequest('GET', `/v2/core/accounts/${encodeURIComponent(accountId)}/persons/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
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
     * Updates a Person associated with an Account.
     * @throws Stripe.RateLimitError
     */
    update(accountId, id, params, options) {
        return this._makeRequest('POST', `/v2/core/accounts/${encodeURIComponent(accountId)}/persons/${encodeURIComponent(id)}`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    relationship: {
                        kind: 'object',
                        fields: { percent_ownership: { kind: 'decimal_string' } },
                    },
                },
            },
            responseSchema: {
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
}
exports.PersonResource = PersonResource;
//# sourceMappingURL=Persons.js.map