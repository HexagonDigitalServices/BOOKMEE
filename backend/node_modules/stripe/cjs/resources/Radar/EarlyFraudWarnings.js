"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarlyFraudWarningResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class EarlyFraudWarningResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of early fraud warnings.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/radar/early_fraud_warnings', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an early fraud warning that has previously been created.
     *
     * Please refer to the [early fraud warning](https://docs.stripe.com/api#early_fraud_warning_object) object reference for more details.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/radar/early_fraud_warnings/${encodeURIComponent(id)}`, params, options);
    }
}
exports.EarlyFraudWarningResource = EarlyFraudWarningResource;
//# sourceMappingURL=EarlyFraudWarnings.js.map