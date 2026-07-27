// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ConfigurationResource extends StripeResource {
    /**
     * Returns a list of configurations that describe the functionality of the customer portal.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/billing_portal/configurations', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a configuration that describes the functionality and behavior of a PortalSession
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing_portal/configurations', params, options);
    }
    /**
     * Retrieves a configuration that describes the functionality of the customer portal.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/billing_portal/configurations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a configuration that describes the functionality of the customer portal.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/billing_portal/configurations/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Configurations.js.map