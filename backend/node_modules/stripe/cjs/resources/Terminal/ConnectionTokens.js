"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTokenResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ConnectionTokenResource extends StripeResource_js_1.StripeResource {
    /**
     * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/connection_tokens', params, options);
    }
}
exports.ConnectionTokenResource = ConnectionTokenResource;
//# sourceMappingURL=ConnectionTokens.js.map