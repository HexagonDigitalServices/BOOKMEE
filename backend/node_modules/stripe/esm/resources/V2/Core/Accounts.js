// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
import { PersonResource } from './Accounts/Persons.js';
import { PersonTokenResource } from './Accounts/PersonTokens.js';
export class AccountResource extends StripeResource {
    constructor(stripe) {
        super(stripe);
        this.stripe = stripe;
        this.persons = new PersonResource(stripe);
        this.personTokens = new PersonTokenResource(stripe);
    }
    /**
     * Returns a list of Accounts.
     * @throws Stripe.RateLimitError
     */
    list(params, options) {
        return this._makeRequest('GET', '/v2/core/accounts', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
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
                    },
                },
            },
        });
    }
    /**
     * Create an Account that represents a company, individual, or other entity that your business interacts with. Accounts contain identifying information about the entity, and configurations that store the features an account has access to. An account can be configured as any or all of the following configurations: Customer, Merchant and/or Recipient.
     * @throws Stripe.RateLimitError
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/core/accounts', params, options, {
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
            responseSchema: {
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
     * Retrieves the details of an Account.
     * @throws Stripe.RateLimitError
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v2/core/accounts/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
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
     * Updates the details of an Account.
     * @throws Stripe.RateLimitError
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v2/core/accounts/${encodeURIComponent(id)}`, params, options, {
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
            responseSchema: {
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
     * Removes access to the Account and its associated resources. Closed Accounts can no longer be operated on, but limited information can still be retrieved through the API in order to be able to track their history.
     * @throws Stripe.RateLimitError
     */
    close(id, params, options) {
        return this._makeRequest('POST', `/v2/core/accounts/${encodeURIComponent(id)}/close`, params, options, {
            responseSchema: {
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
}
//# sourceMappingURL=Accounts.js.map