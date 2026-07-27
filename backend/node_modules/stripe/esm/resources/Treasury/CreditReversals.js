// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class CreditReversalResource extends StripeResource {
    /**
     * Returns a list of CreditReversals.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/credit_reversals', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Reverses a ReceivedCredit and creates a CreditReversal object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/treasury/credit_reversals', params, options);
    }
    /**
     * Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/credit_reversals/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=CreditReversals.js.map