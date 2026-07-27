// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ConfirmationTokenResource extends StripeResource {
    /**
     * Creates a test mode Confirmation Token server side for your integration tests.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/confirmation_tokens', params, options);
    }
}
//# sourceMappingURL=ConfirmationTokens.js.map