"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLinkResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class FileLinkResource extends StripeResource_js_1.StripeResource {
    /**
     * Returns a list of file links.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/file_links', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new file link object.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/file_links', params, options);
    }
    /**
     * Retrieves the file link with the given ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/file_links/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing file link object. Expired links can no longer be updated.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/file_links/${encodeURIComponent(id)}`, params, options);
    }
}
exports.FileLinkResource = FileLinkResource;
//# sourceMappingURL=FileLinks.js.map