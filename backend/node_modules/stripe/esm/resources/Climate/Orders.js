// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class OrderResource extends StripeResource {
    /**
     * Lists all Climate order objects. The orders are returned sorted by creation date, with the
     * most recently created orders appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/climate/orders', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: { metric_tons: { kind: 'decimal_string' } },
                        },
                    },
                },
            },
        });
    }
    /**
     * Creates a Climate order object for a given Climate product. The order will be processed immediately
     * after creation and payment will be deducted your Stripe balance.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/climate/orders', params, options, {
            requestSchema: {
                kind: 'object',
                fields: { metric_tons: { kind: 'decimal_string' } },
            },
            responseSchema: {
                kind: 'object',
                fields: { metric_tons: { kind: 'decimal_string' } },
            },
        });
    }
    /**
     * Retrieves the details of a Climate order object with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/climate/orders/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: { metric_tons: { kind: 'decimal_string' } },
            },
        });
    }
    /**
     * Updates the specified order by setting the values of the parameters passed.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/climate/orders/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: { metric_tons: { kind: 'decimal_string' } },
            },
        });
    }
    /**
     * Cancels a Climate order. You can cancel an order within 24 hours of creation. Stripe refunds the
     * reservation amount_subtotal, but not the amount_fees for user-triggered cancellations. Frontier
     * might cancel reservations if suppliers fail to deliver. If Frontier cancels the reservation, Stripe
     * provides 90 days advance notice and refunds the amount_total.
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/climate/orders/${encodeURIComponent(id)}/cancel`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: { metric_tons: { kind: 'decimal_string' } },
            },
        });
    }
}
//# sourceMappingURL=Orders.js.map