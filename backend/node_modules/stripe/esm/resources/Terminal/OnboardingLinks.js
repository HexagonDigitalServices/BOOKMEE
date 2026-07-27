// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class OnboardingLinkResource extends StripeResource {
    /**
     * Creates a new OnboardingLink object that contains a redirect_url used for onboarding onto Tap to Pay on iPhone.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/onboarding_links', params, options);
    }
}
//# sourceMappingURL=OnboardingLinks.js.map