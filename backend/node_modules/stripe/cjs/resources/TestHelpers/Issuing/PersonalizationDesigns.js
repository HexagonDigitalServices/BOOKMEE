"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalizationDesignResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class PersonalizationDesignResource extends StripeResource_js_1.StripeResource {
    /**
     * Updates the status of the specified testmode personalization design object to active.
     */
    activate(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/personalization_designs/${encodeURIComponent(id)}/activate`, params, options);
    }
    /**
     * Updates the status of the specified testmode personalization design object to inactive.
     */
    deactivate(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/personalization_designs/${encodeURIComponent(id)}/deactivate`, params, options);
    }
    /**
     * Updates the status of the specified testmode personalization design object to rejected.
     */
    reject(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/issuing/personalization_designs/${encodeURIComponent(id)}/reject`, params, options);
    }
}
exports.PersonalizationDesignResource = PersonalizationDesignResource;
//# sourceMappingURL=PersonalizationDesigns.js.map