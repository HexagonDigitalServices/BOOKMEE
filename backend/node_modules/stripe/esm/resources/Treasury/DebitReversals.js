// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class DebitReversalResource extends StripeResource {
    /**
     * Returns a list of DebitReversals.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/debit_reversals', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Reverses a ReceivedDebit and creates a DebitReversal object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/debit_reversals', params, options);
    }
    /**
     * Retrieves a DebitReversal object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/debit_reversals/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=DebitReversals.js.map