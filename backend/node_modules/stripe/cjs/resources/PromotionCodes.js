"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionCodeResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class PromotionCodeResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of your promotion codes.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/promotion_codes', params, options, {
            methodType: 'list',
        });
    }
    /**
     * A promotion code points to an underlying promotion. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/promotion_codes', params, options);
    }
    /**
     * Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing code use [list](https://docs.stripe.com/docs/api/promotion_codes/list) with the desired code.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/promotion_codes/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/promotion_codes/${encodeURIComponent(id)}`, params, options);
    }
}
exports.PromotionCodeResource = PromotionCodeResource;
//# sourceMappingURL=PromotionCodes.js.map