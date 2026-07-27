"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationTokenResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ConfirmationTokenResource extends StripeResource_js_1.StripeResource {
    /**
     * Creates a test mode Confirmation Token server side for your integration tests.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/confirmation_tokens', params, options);
    }
}
exports.ConfirmationTokenResource = ConfirmationTokenResource;
//# sourceMappingURL=ConfirmationTokens.js.map