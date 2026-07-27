"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class AssociationResource extends StripeResource_js_1.StripeResource {
    /**
     * Finds a tax association object by PaymentIntent id.
     */
    find(params, options) {
        return this._makeRequest('GET', '/v1/tax/associations/find', params, options);
    }
}
exports.AssociationResource = AssociationResource;
//# sourceMappingURL=Associations.js.map