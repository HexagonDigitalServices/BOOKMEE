// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class CustomerResource extends StripeResource {
    /**
     * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/customers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a Customer object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided are left unchanged. For example, if you pass the source parameter, that becomes the customer's active source (such as a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the source parameter: for each of the customer's current subscriptions, if the subscription bills automatically and is in the past_due state, then the latest open invoice for the subscription with automatic collection enabled is retried. This retry doesn't count as an automatic retry, and doesn't affect the next regularly scheduled payment for the invoice. Changing the default_source for a customer doesn't trigger this behavior.
     *
     * This request accepts mostly the same arguments as the customer creation call.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    subscriptions: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
                                        items: {
                                            kind: 'object',
                                            fields: {
                                                data: {
                                                    kind: 'array',
                                                    element: {
                                                        kind: 'object',
                                                        fields: {
                                                            plan: {
                                                                kind: 'object',
                                                                fields: {
                                                                    amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                    tiers: {
                                                                        kind: 'array',
                                                                        element: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                flat_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                            price: {
                                                                kind: 'object',
                                                                fields: {
                                                                    currency_options: {
                                                                        kind: 'array',
                                                                        element: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                tiers: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            flat_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: {
                                                                                                    kind: 'decimal_string',
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    tiers: {
                                                                        kind: 'array',
                                                                        element: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                flat_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    unit_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
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
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Removes the currently applied discount on a customer.
     */
    deleteDiscount(id, params, options) {
        return this._makeRequest('DELETE', `/v1/customers/${encodeURIComponent(id)}/discount`, params, options);
    }
    /**
     * Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/customers', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                subscriptions: {
                                    kind: 'object',
                                    fields: {
                                        data: {
                                            kind: 'array',
                                            element: {
                                                kind: 'object',
                                                fields: {
                                                    items: {
                                                        kind: 'object',
                                                        fields: {
                                                            data: {
                                                                kind: 'array',
                                                                element: {
                                                                    kind: 'object',
                                                                    fields: {
                                                                        plan: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                tiers: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            flat_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                        price: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                currency_options: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            tiers: {
                                                                                                kind: 'array',
                                                                                                element: {
                                                                                                    kind: 'object',
                                                                                                    fields: {
                                                                                                        flat_amount_decimal: {
                                                                                                            kind: 'nullable',
                                                                                                            inner: {
                                                                                                                kind: 'decimal_string',
                                                                                                            },
                                                                                                        },
                                                                                                        unit_amount_decimal: {
                                                                                                            kind: 'nullable',
                                                                                                            inner: {
                                                                                                                kind: 'decimal_string',
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                tiers: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            flat_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
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
     * Creates a new customer object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/customers', params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    subscriptions: {
                        kind: 'object',
                        fields: {
                            data: {
                                kind: 'array',
                                element: {
                                    kind: 'object',
                                    fields: {
                                        items: {
                                            kind: 'object',
                                            fields: {
                                                data: {
                                                    kind: 'array',
                                                    element: {
                                                        kind: 'object',
                                                        fields: {
                                                            plan: {
                                                                kind: 'object',
                                                                fields: {
                                                                    amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
                                                                    },
                                                                    tiers: {
                                                                        kind: 'array',
                                                                        element: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                flat_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                            price: {
                                                                kind: 'object',
                                                                fields: {
                                                                    currency_options: {
                                                                        kind: 'array',
                                                                        element: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                tiers: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            flat_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    tiers: {
                                                                        kind: 'array',
                                                                        element: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                flat_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    unit_amount_decimal: {
                                                                        kind: 'nullable',
                                                                        inner: { kind: 'decimal_string' },
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
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Search for customers you've previously created using Stripe's [Search Query Language](https://docs.stripe.com/docs/search#search-query-language).
     * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
     * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
     * to an hour behind during outages. Search functionality is not available to merchants in India.
     */
    search(params, options) {
        return this._makeRequest('GET', '/v1/customers/search', params, options, {
            methodType: 'search',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                subscriptions: {
                                    kind: 'object',
                                    fields: {
                                        data: {
                                            kind: 'array',
                                            element: {
                                                kind: 'object',
                                                fields: {
                                                    items: {
                                                        kind: 'object',
                                                        fields: {
                                                            data: {
                                                                kind: 'array',
                                                                element: {
                                                                    kind: 'object',
                                                                    fields: {
                                                                        plan: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
                                                                                },
                                                                                tiers: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            flat_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                        price: {
                                                                            kind: 'object',
                                                                            fields: {
                                                                                currency_options: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            tiers: {
                                                                                                kind: 'array',
                                                                                                element: {
                                                                                                    kind: 'object',
                                                                                                    fields: {
                                                                                                        flat_amount_decimal: {
                                                                                                            kind: 'nullable',
                                                                                                            inner: {
                                                                                                                kind: 'decimal_string',
                                                                                                            },
                                                                                                        },
                                                                                                        unit_amount_decimal: {
                                                                                                            kind: 'nullable',
                                                                                                            inner: {
                                                                                                                kind: 'decimal_string',
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                tiers: {
                                                                                    kind: 'array',
                                                                                    element: {
                                                                                        kind: 'object',
                                                                                        fields: {
                                                                                            flat_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                            unit_amount_decimal: {
                                                                                                kind: 'nullable',
                                                                                                inner: { kind: 'decimal_string' },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                unit_amount_decimal: {
                                                                                    kind: 'nullable',
                                                                                    inner: { kind: 'decimal_string' },
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
     * Returns a list of transactions that updated the customer's [balances](https://docs.stripe.com/docs/billing/customer/balance).
     */
    listBalanceTransactions(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}/balance_transactions`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates an immutable transaction that updates the customer's credit [balance](https://docs.stripe.com/docs/billing/customer/balance).
     */
    createBalanceTransaction(id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(id)}/balance_transactions`, params, options);
    }
    /**
     * Retrieves a specific customer balance transaction that updated the customer's [balances](https://docs.stripe.com/docs/billing/customer/balance).
     */
    retrieveBalanceTransaction(customerId, id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(customerId)}/balance_transactions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Most credit balance transaction fields are immutable, but you may update its description and metadata.
     */
    updateBalanceTransaction(customerId, id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(customerId)}/balance_transactions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a customer's cash balance.
     */
    retrieveCashBalance(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}/cash_balance`, params, options);
    }
    /**
     * Changes the settings on a customer's cash balance.
     */
    updateCashBalance(id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(id)}/cash_balance`, params, options);
    }
    /**
     * Returns a list of transactions that modified the customer's [cash balance](https://docs.stripe.com/docs/payments/customer-balance).
     */
    listCashBalanceTransactions(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}/cash_balance_transactions`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a specific cash balance transaction, which updated the customer's [cash balance](https://docs.stripe.com/docs/payments/customer-balance).
     */
    retrieveCashBalanceTransaction(customerId, id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(customerId)}/cash_balance_transactions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
     * funding instructions will be created. If funding instructions have already been created for a given customer, the same
     * funding instructions will be retrieved. In other words, we will return the same funding instructions each time.
     */
    createFundingInstructions(id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(id)}/funding_instructions`, params, options);
    }
    /**
     * Returns a list of PaymentMethods for a given Customer
     */
    listPaymentMethods(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}/payment_methods`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a PaymentMethod object for a given Customer.
     */
    retrievePaymentMethod(customerId, id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(customerId)}/payment_methods/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * List sources for a specified customer.
     */
    listSources(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}/sources`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * When you create a new credit card, you must specify a customer or recipient on which to create it.
     *
     * If the card's owner has no default card, then the new card will become the default.
     * However, if the owner already has a default, then it will not change.
     * To change the default, you should [update the customer](https://docs.stripe.com/api/customers/update) to have a new default_source.
     */
    createSource(id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(id)}/sources`, params, options);
    }
    /**
     * Retrieve a specified source for a given customer.
     */
    retrieveSource(customerId, id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(customerId)}/sources/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Update a specified source for a given customer.
     */
    updateSource(customerId, id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(customerId)}/sources/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Delete a specified source for a given customer.
     */
    deleteSource(customerId, id, params, options) {
        return this._makeRequest('DELETE', `/v1/customers/${encodeURIComponent(customerId)}/sources/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Verify a specified bank account for a given customer.
     */
    verifySource(customerId, id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(customerId)}/sources/${encodeURIComponent(id)}/verify`, params, options);
    }
    /**
     * Deletes an existing tax_id object.
     */
    deleteTaxId(customerId, id, params, options) {
        return this._makeRequest('DELETE', `/v1/customers/${encodeURIComponent(customerId)}/tax_ids/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the tax_id object with the given identifier.
     */
    retrieveTaxId(customerId, id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(customerId)}/tax_ids/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of tax IDs for a customer.
     */
    listTaxIds(id, params, options) {
        return this._makeRequest('GET', `/v1/customers/${encodeURIComponent(id)}/tax_ids`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new tax_id object for a customer.
     */
    createTaxId(id, params, options) {
        return this._makeRequest('POST', `/v1/customers/${encodeURIComponent(id)}/tax_ids`, params, options);
    }
}
//# sourceMappingURL=Customers.js.map