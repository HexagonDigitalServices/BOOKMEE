// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class EphemeralKeyResource extends StripeResource {
    /**
     * Invalidates a short-lived API key for a given resource.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/ephemeral_keys/${encodeURIComponent(id)}`, params, options);
    }
    create(params, options) {
        return this._makeRequest('POST', '/v1/ephemeral_keys', params, options, {
            validator: (data, options) => {
                if (!options.headers || !options.headers['Stripe-Version']) {
                    throw new Error('Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node');
                }
            },
        });
    }
}
//# sourceMappingURL=EphemeralKeys.js.map