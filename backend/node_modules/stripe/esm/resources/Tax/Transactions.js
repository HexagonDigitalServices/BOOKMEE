// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class TransactionResource extends StripeResource {
    /**
     * Retrieves a Tax Transaction object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax/transactions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Creates a Tax Transaction from a calculation, if that calculation hasn't expired. Calculations expire after 90 days.
     */
    createFromCalculation(params, options) {
        return this._makeRequest('POST', '/v1/tax/transactions/create_from_calculation', params, options);
    }
    /**
     * Partially or fully reverses a previously created Transaction.
     */
    createReversal(params, options) {
        return this._makeRequest('POST', '/v1/tax/transactions/create_reversal', params, options);
    }
    /**
     * Retrieves the line items of a committed standalone transaction as a collection.
     */
    listLineItems(id, params, options) {
        return this._makeRequest('GET', `/v1/tax/transactions/${encodeURIComponent(id)}/line_items`, params, options, {
            methodType: 'list',
        });
    }
}
//# sourceMappingURL=Transactions.js.map