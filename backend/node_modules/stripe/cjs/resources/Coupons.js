"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class CouponResource extends StripeResource_js_1.StripeResource {
    /**
     * You can delete coupons via the [coupon management](https://dashboard.stripe.com/coupons) page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons via the API.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/coupons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the coupon with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/coupons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/coupons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of your coupons.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/coupons', params, options, {
            methodType: 'list',
        });
    }
    /**
     * You can create coupons easily via the [coupon management](https://dashboard.stripe.com/coupons) page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.
     *
     * A coupon has either a percent_off or an amount_off and currency. If you set an amount_off, that amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of 100 will have a final total of 0 if a coupon with an amount_off of 200 is applied to it and an invoice with a subtotal of 300 will have a final total of 100 if a coupon with an amount_off of 200 is applied to it.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/coupons', params, options);
    }
}
exports.CouponResource = CouponResource;
//# sourceMappingURL=Coupons.js.map