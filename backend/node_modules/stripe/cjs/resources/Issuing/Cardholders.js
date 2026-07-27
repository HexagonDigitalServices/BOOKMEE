"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardholderResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class CardholderResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Issuing Cardholder objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/cardholders', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new Issuing Cardholder object that can be issued cards.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/issuing/cardholders', params, options);
    }
    /**
     * Retrieves an Issuing Cardholder object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/cardholders/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified Issuing Cardholder object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/cardholders/${encodeURIComponent(id)}`, params, options);
    }
}
exports.CardholderResource = CardholderResource;
//# sourceMappingURL=Cardholders.js.map