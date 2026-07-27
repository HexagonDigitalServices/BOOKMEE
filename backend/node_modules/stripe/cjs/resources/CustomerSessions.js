"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSessionResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class CustomerSessionResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/customer_sessions', params, options);
    }
}
exports.CustomerSessionResource = CustomerSessionResource;
//# sourceMappingURL=CustomerSessions.js.map