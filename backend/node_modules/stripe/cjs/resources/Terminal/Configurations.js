"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ConfigurationResource extends StripeResource_js_1.StripeResource {
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
exports.ConfigurationResource = ConfigurationResource;
//# sourceMappingURL=Configurations.js.map