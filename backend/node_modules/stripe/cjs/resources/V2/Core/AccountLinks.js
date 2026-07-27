"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountLinkResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
class AccountLinkResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates an AccountLink object that includes a single-use URL that an account can use to access a Stripe-hosted flow for collecting or updating required information.
     * @throws Stripe.RateLimitError
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/core/account_links', params, options);
    }
}
exports.AccountLinkResource = AccountLinkResource;
//# sourceMappingURL=AccountLinks.js.map