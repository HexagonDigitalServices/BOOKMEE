"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmationTokenResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class ConfirmationTokenResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves an existing ConfirmationToken object
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/confirmation_tokens/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ConfirmationTokenResource = ConfirmationTokenResource;
//# sourceMappingURL=ConfirmationTokens.js.map