// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ScheduledQueryRunResource extends StripeResource {
    /**
     * Returns a list of scheduled query runs.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/sigma/scheduled_query_runs', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an scheduled query run.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/sigma/scheduled_query_runs/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=ScheduledQueryRuns.js.map