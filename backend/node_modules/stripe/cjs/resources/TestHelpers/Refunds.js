"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class RefundResource extends StripeResource_js_1.StripeResource {
    /**
     * Expire a refund with a status of requires_action.
     */
    expire(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/refunds/${encodeURIComponent(id)}/expire`, params, options);
    }
}
exports.RefundResource = RefundResource;
//# sourceMappingURL=Refunds.js.map