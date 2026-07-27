"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLinkResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class AccountLinkResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/account_links', params, options);
    }
}
exports.AccountLinkResource = AccountLinkResource;
//# sourceMappingURL=AccountLinks.js.map