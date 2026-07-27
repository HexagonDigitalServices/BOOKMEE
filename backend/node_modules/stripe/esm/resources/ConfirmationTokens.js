// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class ConfirmationTokenResource extends StripeResource {
    /**
     * Retrieves an existing ConfirmationToken object
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/confirmation_tokens/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=ConfirmationTokens.js.map