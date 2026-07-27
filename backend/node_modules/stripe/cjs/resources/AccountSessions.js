"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSessionResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class AccountSessionResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/account_sessions', params, options);
    }
}
exports.AccountSessionResource = AccountSessionResource;
//# sourceMappingURL=AccountSessions.js.map