"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupAttemptResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class SetupAttemptResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of SetupAttempts that associate with a provided SetupIntent.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/setup_attempts', params, options, {
            methodType: 'list',
        });
    }
}
exports.SetupAttemptResource = SetupAttemptResource;
//# sourceMappingURL=SetupAttempts.js.map