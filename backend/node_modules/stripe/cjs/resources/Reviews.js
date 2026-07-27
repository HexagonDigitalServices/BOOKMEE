"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class ReviewResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Review objects that have open set to true. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/reviews', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves a Review object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/reviews/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Approves a Review object, closing it and removing it from the list of reviews.
     */
    approve(id, params, options) {
        return this._makeRequest('POST', `/v1/reviews/${encodeURIComponent(id)}/approve`, params, options);
    }
}
exports.ReviewResource = ReviewResource;
//# sourceMappingURL=Reviews.js.map