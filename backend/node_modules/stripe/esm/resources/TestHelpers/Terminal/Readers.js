// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class ReaderResource extends StripeResource {
    /**
     * Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.
     */
    presentPaymentMethod(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/terminal/readers/${encodeURIComponent(id)}/present_payment_method`, params, options);
    }
    /**
     * Use this endpoint to trigger a successful input collection on a simulated reader.
     */
    succeedInputCollection(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/terminal/readers/${encodeURIComponent(id)}/succeed_input_collection`, params, options);
    }
    /**
     * Use this endpoint to complete an input collection with a timeout error on a simulated reader.
     */
    timeoutInputCollection(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/terminal/readers/${encodeURIComponent(id)}/timeout_input_collection`, params, options);
    }
}
//# sourceMappingURL=Readers.js.map