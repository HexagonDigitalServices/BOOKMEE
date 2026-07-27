// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class FileLinkResource extends StripeResource {
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
//# sourceMappingURL=FileLinks.js.map