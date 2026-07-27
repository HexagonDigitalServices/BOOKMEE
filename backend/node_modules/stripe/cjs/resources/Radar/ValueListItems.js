"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueListItemResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
class ValueListItemResource extends StripeResource_js_1.StripeResource {
    /**
     * Deletes a ValueListItem object, removing it from its parent value list.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/radar/value_list_items/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves a ValueListItem object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/radar/value_list_items/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of ValueListItem objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/radar/value_list_items', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new ValueListItem object, which is added to the specified parent value list.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/radar/value_list_items', params, options);
    }
}
exports.ValueListItemResource = ValueListItemResource;
//# sourceMappingURL=ValueListItems.js.map