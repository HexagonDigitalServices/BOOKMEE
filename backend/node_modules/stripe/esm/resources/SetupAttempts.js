// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class SetupAttemptResource extends StripeResource {
    /**
     * Returns a list of SetupAttempts that associate with a provided SetupIntent.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/setup_attempts', params, options, {
            methodType: 'list',
        });
    }
}
//# sourceMappingURL=SetupAttempts.js.map