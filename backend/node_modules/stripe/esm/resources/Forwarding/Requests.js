// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class RequestResource extends StripeResource {
    /**
     * Lists all ForwardingRequest objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/forwarding/requests', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a ForwardingRequest object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/forwarding/requests', params, options);
    }
    /**
     * Retrieves a ForwardingRequest object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/forwarding/requests/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Requests.js.map