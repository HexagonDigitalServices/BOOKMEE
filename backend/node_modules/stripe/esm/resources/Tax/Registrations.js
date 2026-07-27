// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class RegistrationResource extends StripeResource {
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
//# sourceMappingURL=Registrations.js.map