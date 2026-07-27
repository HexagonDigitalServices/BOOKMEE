// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ReceivedCreditResource extends StripeResource {
    /**
     * Returns a list of ReceivedCredits.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/treasury/received_credits', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an existing ReceivedCredit by passing the unique ReceivedCredit ID from the ReceivedCredit list.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/treasury/received_credits/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=ReceivedCredits.js.map