// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class TokenResource extends StripeResource {
    /**
     * Lists all Issuing Token objects for a given card.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/tokens', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves an Issuing Token object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/tokens/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Attempts to update the specified Issuing Token object to the status specified.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/tokens/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Tokens.js.map