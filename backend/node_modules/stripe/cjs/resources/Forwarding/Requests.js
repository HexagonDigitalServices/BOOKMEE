"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class RequestResource extends StripeResource_js_1.StripeResource {
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
exports.RequestResource = RequestResource;
//# sourceMappingURL=Requests.js.map