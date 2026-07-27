"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class SecretResource extends StripeResource_js_1.StripeResource {
    /**
     * List all secrets stored on the given scope.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/apps/secrets', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Create or replace a secret in the secret store.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/apps/secrets', params, options);
    }
    /**
     * Finds a secret in the secret store by name and scope.
     */
    find(params, options) {
        return this._makeRequest('GET', '/v1/apps/secrets/find', params, options);
    }
    /**
     * Deletes a secret from the secret store by name and scope.
     */
    deleteWhere(params, options) {
        return this._makeRequest('POST', '/v1/apps/secrets/delete', params, options);
    }
}
exports.SecretResource = SecretResource;
//# sourceMappingURL=Secrets.js.map