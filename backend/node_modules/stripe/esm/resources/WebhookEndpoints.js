// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class WebhookEndpointResource extends StripeResource {
    /**
     * You can also delete webhook endpoints via the [webhook endpoint management](https://dashboard.stripe.com/account/webhooks) page of the Stripe dashboard.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/webhook_endpoints/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the webhook endpoint with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/webhook_endpoints/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the webhook endpoint. You may edit the url, the list of enabled_events, and the status of your endpoint.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/webhook_endpoints/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of your webhook endpoints.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/webhook_endpoints', params, options, {
            methodType: 'list',
        });
    }
    /**
     * A webhook endpoint must have a url and a list of enabled_events. You may optionally specify the Boolean connect parameter. If set to true, then a Connect webhook endpoint that notifies the specified url about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified url only about events from your account is created. You can also create webhook endpoints in the [webhooks settings](https://dashboard.stripe.com/account/webhooks) section of the Dashboard.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/webhook_endpoints', params, options);
    }
}
//# sourceMappingURL=WebhookEndpoints.js.map