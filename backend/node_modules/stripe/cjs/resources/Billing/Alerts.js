"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class AlertResource extends StripeResource_js_1.StripeResource {
    /**
     * Lists billing active and inactive alerts
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/billing/alerts', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a billing alert
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/billing/alerts', params, options);
    }
    /**
     * Retrieves a billing alert given an ID
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/billing/alerts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Reactivates this alert, allowing it to trigger again.
     */
    activate(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/alerts/${encodeURIComponent(id)}/activate`, params, options);
    }
    /**
     * Archives this alert, removing it from the list view and APIs. This is non-reversible.
     */
    archive(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/alerts/${encodeURIComponent(id)}/archive`, params, options);
    }
    /**
     * Deactivates this alert, preventing it from triggering.
     */
    deactivate(id, params, options) {
        return this._makeRequest('POST', `/v1/billing/alerts/${encodeURIComponent(id)}/deactivate`, params, options);
    }
}
exports.AlertResource = AlertResource;
//# sourceMappingURL=Alerts.js.map