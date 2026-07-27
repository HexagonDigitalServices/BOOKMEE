// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
export class PersonalizationDesignResource extends StripeResource {
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
//# sourceMappingURL=PersonalizationDesigns.js.map