"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class RegistrationResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Tax Registration objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/tax/registrations', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new Tax Registration object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/tax/registrations', params, options);
    }
    /**
     * Returns a Tax Registration object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax/registrations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing Tax Registration object.
     *
     * A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting expires_at.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/tax/registrations/${encodeURIComponent(id)}`, params, options);
    }
}
exports.RegistrationResource = RegistrationResource;
//# sourceMappingURL=Registrations.js.map