'use strict';
import { StripeResource } from '../StripeResource.js';
import { makeURLInterpolator, queryStringifyRequestData } from '../utils.js';
export class OAuthResource extends StripeResource {
    constructor() {
        super(...arguments);
        this.basePath = makeURLInterpolator('/');
    }
    authorizeUrl(params, options) {
        params = params || {};
        options = options || {};
        let path = 'oauth/authorize';
        // For Express accounts, the path changes
        if (options.express) {
            path = `express/${path}`;
        }
        if (!params.response_type) {
            params.response_type = 'code';
        }
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
            params.scope = 'read_write';
        }
        const connectHost = this._stripe.resolveBaseAddress('connect');
        return `https://${connectHost}/${path}?${queryStringifyRequestData(params)}`;
    }
    token(params, options) {
        return this._makeRequest('POST', '/oauth/token', params, options, {
            apiBase: 'connect',
        });
    }
    deauthorize(params, options) {
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        return this._makeRequest('POST', '/oauth/deauthorize', params, options, {
            apiBase: 'connect',
        });
    }
}
//# sourceMappingURL=OAuth.js.map