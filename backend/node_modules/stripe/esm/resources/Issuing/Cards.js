// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class CardResource extends StripeResource {
    /**
     * Returns a list of Issuing Card objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/cards', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates an Issuing Card object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/issuing/cards', params, options);
    }
    /**
     * Retrieves an Issuing Card object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/cards/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified Issuing Card object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/cards/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Cards.js.map