// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class SubscriptionScheduleResource extends StripeResource {
    /**
     * Retrieves the list of your subscription schedules.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/subscription_schedules', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/subscription_schedules', params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    phases: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                add_invoice_items: {
                                    kind: 'array',
                                    element: {
                                        kind: 'object',
                                        fields: {
                                            price_data: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                        },
                                    },
                                },
                                items: {
                                    kind: 'array',
                                    element: {
                                        kind: 'object',
                                        fields: {
                                            price_data: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: { kind: 'decimal_string' },
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
     * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/subscription_schedules/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing subscription schedule.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/subscription_schedules/${encodeURIComponent(id)}`, params, options, {
            requestSchema: {
                kind: 'object',
                fields: {
                    phases: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                add_invoice_items: {
                                    kind: 'array',
                                    element: {
                                        kind: 'object',
                                        fields: {
                                            price_data: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: { kind: 'decimal_string' },
                                                },
                                            },
                                        },
                                    },
                                },
                                items: {
                                    kind: 'array',
                                    element: {
                                        kind: 'object',
                                        fields: {
                                            price_data: {
                                                kind: 'object',
                                                fields: {
                                                    unit_amount_decimal: { kind: 'decimal_string' },
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
     * Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is not_started or active.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/subscription_schedules/${encodeURIComponent(id)}/cancel`, params, options);
    }
    /**
     * Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is not_started or active. If the subscription schedule is currently associated with a subscription, releasing it will remove its subscription property and set the subscription's ID to the released_subscription property.
     */
    release(id, params, options) {
        return this._makeRequest('POST', `/v1/subscription_schedules/${encodeURIComponent(id)}/release`, params, options);
    }
}
//# sourceMappingURL=SubscriptionSchedules.js.map