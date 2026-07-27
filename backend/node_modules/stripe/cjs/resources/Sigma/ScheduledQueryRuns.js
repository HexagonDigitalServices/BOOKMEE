"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledQueryRunResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ScheduledQueryRunResource extends StripeResource_js_1.StripeResource {
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
exports.ScheduledQueryRunResource = ScheduledQueryRunResource;
//# sourceMappingURL=ScheduledQueryRuns.js.map