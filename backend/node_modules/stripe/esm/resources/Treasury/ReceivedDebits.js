// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ReceivedDebitResource extends StripeResource {
    /**
     * Returns a list of ReceivedDebits.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/received_debits', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/received_debits/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=ReceivedDebits.js.map