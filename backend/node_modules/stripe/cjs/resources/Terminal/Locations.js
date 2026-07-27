"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class LocationResource extends StripeResource_js_1.StripeResource {
    /**
     * Deletes a Location object.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/terminal/locations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a Location object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/terminal/locations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/terminal/locations/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of Location objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/terminal/locations', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new Location object.
     * For further details, including which address fields are required in each country, see the [Manage locations](https://docs.stripe.com/docs/terminal/fleet/locations) guide.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/terminal/locations', params, options);
    }
}
exports.LocationResource = LocationResource;
//# sourceMappingURL=Locations.js.map