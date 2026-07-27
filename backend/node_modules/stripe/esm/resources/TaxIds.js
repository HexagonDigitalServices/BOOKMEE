// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class TaxIdResource extends StripeResource {
    /**
     * Deletes an existing account or customer tax_id object.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/tax_ids/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves an account or customer tax_id object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/tax_ids/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of tax IDs.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/tax_ids', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new account or customer tax_id object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/tax_ids', params, options);
    }
}
//# sourceMappingURL=TaxIds.js.map