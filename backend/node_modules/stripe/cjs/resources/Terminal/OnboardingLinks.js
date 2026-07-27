"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardingLinkResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class OnboardingLinkResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a new OnboardingLink object that contains a redirect_url used for onboarding onto Tap to Pay on iPhone.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/onboarding_links', params, options);
    }
}
exports.OnboardingLinkResource = OnboardingLinkResource;
//# sourceMappingURL=OnboardingLinks.js.map