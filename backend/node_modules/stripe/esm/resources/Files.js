// File generated from our OpenAPI spec
import { multipartRequestDataProcessor } from '../multipart.js';
import { StripeResource } from '../StripeResource.js';
export class FileResource extends StripeResource {
    constructor() {
        super(...arguments);
        this.requestDataProcessor = multipartRequestDataProcessor;
    }
    /**
     * Returns a list of the files that your account has access to. Stripe sorts and returns the files by their creation dates, placing the most recently created files at the top.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/files', params, options, {
            methodType: 'list',
        });
    }
    /**
     * To upload a file to Stripe, you need to send a request of type multipart/form-data. Include the file you want to upload in the request, and the parameters for creating a file.
     *
     * All of Stripe's officially supported Client libraries support sending multipart/form-data.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/files', params, options, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            apiBase: 'files',
        });
    }
    /**
     * Retrieves the details of an existing file object. After you supply a unique file ID, Stripe returns the corresponding file object. Learn how to [access file contents](https://docs.stripe.com/docs/file-upload#download-file-contents).
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/files/${encodeURIComponent(id)}`, params, options);
    }
}
//# sourceMappingURL=Files.js.map