"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class CardResource extends StripeResource_js_1.StripeResource {
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
exports.CardResource = CardResource;
//# sourceMappingURL=Cards.js.map