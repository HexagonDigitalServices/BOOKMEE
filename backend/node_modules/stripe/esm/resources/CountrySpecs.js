// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class CountrySpecResource extends StripeResource {
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
//# sourceMappingURL=CountrySpecs.js.map