"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizationDesignResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class PersonalizationDesignResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/personalization_designs', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a personalization design object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/issuing/personalization_designs', params, options);
    }
    /**
     * Retrieves a personalization design object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/personalization_designs/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a card personalization object.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/personalization_designs/${encodeURIComponent(id)}`, params, options);
    }
}
exports.PersonalizationDesignResource = PersonalizationDesignResource;
//# sourceMappingURL=PersonalizationDesigns.js.map