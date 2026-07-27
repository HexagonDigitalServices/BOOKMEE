"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountrySpecResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class CountrySpecResource extends StripeResource_js_1.StripeResource {
    /**
     * Lists all Country Spec objects available in the API.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/country_specs', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Returns a Country Spec for a given Country code.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/country_specs/${encodeURIComponent(id)}`, params, options);
    }
}
exports.CountrySpecResource = CountrySpecResource;
//# sourceMappingURL=CountrySpecs.js.map