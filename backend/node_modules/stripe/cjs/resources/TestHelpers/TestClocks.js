"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClockResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class TestClockResource extends StripeResource_js_1.StripeResource {
    /**
     * Deletes a test clock.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/test_helpers/test_clocks/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a test clock.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/test_helpers/test_clocks/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of your test clocks.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/test_helpers/test_clocks', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new test clock that can be attached to new customers and quotes.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/test_helpers/test_clocks', params, options);
    }
    /**
     * Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to Ready.
     */
    advance(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/test_clocks/${encodeURIComponent(id)}/advance`, params, options);
    }
}
exports.TestClockResource = TestClockResource;
//# sourceMappingURL=TestClocks.js.map