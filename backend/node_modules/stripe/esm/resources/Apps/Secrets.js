// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class SecretResource extends StripeResource {
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
//# sourceMappingURL=Secrets.js.map