"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationReportResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class VerificationReportResource extends StripeResource_js_1.StripeResource {
    /**
     * List all verification reports.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/identity/verification_reports', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves an existing VerificationReport
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/identity/verification_reports/${encodeURIComponent(id)}`, params, options);
    }
}
exports.VerificationReportResource = VerificationReportResource;
//# sourceMappingURL=VerificationReports.js.map