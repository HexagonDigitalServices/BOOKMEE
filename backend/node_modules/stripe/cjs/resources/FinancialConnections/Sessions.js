"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class SessionResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves the details of a Financial Connections Session
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/financial_connections/sessions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * To launch the Financial Connections authorization flow, create a Session. The session's client_secret can be used to launch the flow using Stripe.js.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/financial_connections/sessions', params, options);
    }
}
exports.SessionResource = SessionResource;
//# sourceMappingURL=Sessions.js.map