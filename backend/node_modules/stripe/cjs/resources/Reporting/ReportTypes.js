"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportTypeResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ReportTypeResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a full list of Report Types.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/reporting/report_types', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of a Report Type. (Certain report types require a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/reporting/report_types/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ReportTypeResource = ReportTypeResource;
//# sourceMappingURL=ReportTypes.js.map