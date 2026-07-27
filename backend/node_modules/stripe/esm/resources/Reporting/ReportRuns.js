// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ReportRunResource extends StripeResource {
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
//# sourceMappingURL=ReportRuns.js.map