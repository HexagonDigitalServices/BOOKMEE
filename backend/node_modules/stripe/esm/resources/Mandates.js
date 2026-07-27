// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class MandateResource extends StripeResource {
    /**
     * Retrieves a Mandate object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/mandates/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Mandates.js.map