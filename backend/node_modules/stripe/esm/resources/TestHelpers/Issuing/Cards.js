// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class CardResource extends StripeResource {
    /**
     * Updates the shipping status of the specified Issuing Card object to delivered.
     */
    deliverCard(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/deliver`, params, options);
    }
    /**
     * Updates the shipping status of the specified Issuing Card object to failure.
     */
    failCard(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/fail`, params, options);
    }
    /**
     * Updates the shipping status of the specified Issuing Card object to returned.
     */
    returnCard(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/return`, params, options);
    }
    /**
     * Updates the shipping status of the specified Issuing Card object to shipped.
     */
    shipCard(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/ship`, params, options);
    }
    /**
     * Updates the shipping status of the specified Issuing Card object to submitted. This method requires Stripe Version ‘2024-09-30.acacia' or later.
     */
    submitCard(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/submit`, params, options);
    }
}
//# sourceMappingURL=Cards.js.map