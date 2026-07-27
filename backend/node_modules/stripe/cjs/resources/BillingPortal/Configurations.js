"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ConfigurationResource extends StripeResource_js_1.StripeResource {
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
exports.ConfigurationResource = ConfigurationResource;
//# sourceMappingURL=Configurations.js.map