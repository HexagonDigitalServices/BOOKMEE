// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class BalanceSettingResource extends StripeResource {
    /**
     * Retrieves balance settings for a given connected account.
     *  Related guide: [Making API calls for connected accounts](https://docs.stripe.com/connect/authentication)
     */
    retrieve(params, options) {
        return this._makeRequest('GET', '/v1/balance_settings', params, options);
    }
    /**
     * Updates balance settings for a given connected account.
     *  Related guide: [Making API calls for connected accounts](https://docs.stripe.com/connect/authentication)
     */
    update(params, options) {
        return this._makeRequest('POST', '/v1/balance_settings', params, options);
    }
}
//# sourceMappingURL=BalanceSettings.js.map