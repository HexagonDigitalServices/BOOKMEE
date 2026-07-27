"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.MandateResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class MandateResource extends StripeResource_js_1.StripeResource {
    /**
     * Retrieves a Mandate object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/mandates/${encodeURIComponent(id)}`, params, options);
    }
}
exports.MandateResource = MandateResource;
//# sourceMappingURL=Mandates.js.map