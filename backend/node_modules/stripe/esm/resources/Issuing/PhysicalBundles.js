// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class PhysicalBundleResource extends StripeResource {
    /**
     * Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/physical_bundles', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a physical bundle object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/physical_bundles/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=PhysicalBundles.js.map