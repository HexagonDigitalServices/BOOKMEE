"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportRunResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ReportRunResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of Report Runs, with the most recent appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/reporting/report_runs', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new object and begin running the report. (Certain report types require a [live-mode API key](https://stripe.com/docs/keys#test-live-modes).)
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/reporting/report_runs', params, options);
    }
    /**
     * Retrieves the details of an existing Report Run.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/reporting/report_runs/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ReportRunResource = ReportRunResource;
//# sourceMappingURL=ReportRuns.js.map