// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class SettingResource extends StripeResource {
    /**
     * Retrieves Tax Settings for a merchant.
     */
    retrieve(params, options) {
        return this._makeRequest('GET', '/v1/tax/settings', params, options);
    }
    /**
     * Updates Tax Settings parameters used in tax calculations. All parameters are editable but none can be removed once set.
     */
    update(params, options) {
        return this._makeRequest('POST', '/v1/tax/settings', params, options);
    }
}
//# sourceMappingURL=Settings.js.map