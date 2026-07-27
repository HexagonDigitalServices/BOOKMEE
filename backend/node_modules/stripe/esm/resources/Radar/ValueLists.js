// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class ValueListResource extends StripeResource {
    /**
     * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/radar/value_lists/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a ValueList object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/radar/value_lists/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/radar/value_lists/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/radar/value_lists', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new ValueList object, which can then be referenced in rules.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/radar/value_lists', params, options);
    }
}
//# sourceMappingURL=ValueLists.js.map