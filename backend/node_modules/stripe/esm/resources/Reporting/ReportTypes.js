// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ReportTypeResource extends StripeResource {
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
//# sourceMappingURL=ReportTypes.js.map