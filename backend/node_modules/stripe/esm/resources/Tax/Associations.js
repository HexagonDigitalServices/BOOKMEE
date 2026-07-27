// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class AssociationResource extends StripeResource {
    /**
     * Finds a tax association object by PaymentIntent id.
     */
    find(params, options) {
        return this._makeRequest('GET', '/v1/tax/associations/find', params, options);
    }
}
//# sourceMappingURL=Associations.js.map