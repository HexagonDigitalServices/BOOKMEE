// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class ReceivedCreditResource extends StripeResource {
    /**
     * Use this endpoint to simulate a test mode ReceivedCredit initiated by a third party. In live mode, you can't directly create ReceivedCredits initiated by third parties.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/treasury/received_credits', params, options);
    }
}
//# sourceMappingURL=ReceivedCredits.js.map