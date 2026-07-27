// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ConnectionTokenResource extends StripeResource {
    /**
     * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/connection_tokens', params, options);
    }
}
//# sourceMappingURL=ConnectionTokens.js.map