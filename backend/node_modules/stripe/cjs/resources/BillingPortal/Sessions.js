"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class SessionResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a session of the customer portal.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing_portal/sessions', params, options);
    }
}
exports.SessionResource = SessionResource;
//# sourceMappingURL=Sessions.js.map