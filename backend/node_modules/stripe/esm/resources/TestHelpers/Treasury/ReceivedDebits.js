// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class ReceivedDebitResource extends StripeResource {
    /**
     * Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can't directly create ReceivedDebits initiated by third parties.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/treasury/received_debits', params, options);
    }
}
//# sourceMappingURL=ReceivedDebits.js.map