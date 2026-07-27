"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSettingResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class BalanceSettingResource extends StripeResource_js_1.StripeResource {
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
exports.BalanceSettingResource = BalanceSettingResource;
//# sourceMappingURL=BalanceSettings.js.map