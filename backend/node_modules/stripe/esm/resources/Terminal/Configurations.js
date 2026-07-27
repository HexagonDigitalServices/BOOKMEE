// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ConfigurationResource extends StripeResource {
    /**
     * Deletes a Configuration object.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/terminal/configurations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a Configuration object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/terminal/configurations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a new Configuration object.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/configurations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of Configuration objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/terminal/configurations', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new Configuration object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/configurations', params, options);
    }
}
//# sourceMappingURL=Configurations.js.map