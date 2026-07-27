// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class SupplierResource extends StripeResource {
    /**
     * Lists all available Climate supplier objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/climate/suppliers', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a Climate supplier object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/climate/suppliers/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Suppliers.js.map