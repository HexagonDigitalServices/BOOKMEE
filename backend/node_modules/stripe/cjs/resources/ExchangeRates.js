"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class ExchangeRateResource extends StripeResource_js_1.StripeResource {
    /**
     * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
     *
     * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
     * @deprecated
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/exchange_rates', params, options, {
            methodType: 'list',
        });
    }
    /**
     * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
     *
     * Retrieves the exchange rates from the given currency to every supported currency.
     * @deprecated
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/exchange_rates/${encodeURIComponent(id)}`, params, options);
    }
}
exports.ExchangeRateResource = ExchangeRateResource;
//# sourceMappingURL=ExchangeRates.js.map