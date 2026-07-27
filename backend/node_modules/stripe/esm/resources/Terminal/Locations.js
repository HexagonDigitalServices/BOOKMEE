// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class LocationResource extends StripeResource {
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
//# sourceMappingURL=Locations.js.map