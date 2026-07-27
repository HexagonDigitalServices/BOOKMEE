// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class VerificationReportResource extends StripeResource {
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
//# sourceMappingURL=VerificationReports.js.map