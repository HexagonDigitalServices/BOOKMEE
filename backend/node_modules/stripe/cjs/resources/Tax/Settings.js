"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class SettingResource extends StripeResource_js_1.StripeResource {
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
exports.SettingResource = SettingResource;
//# sourceMappingURL=Settings.js.map