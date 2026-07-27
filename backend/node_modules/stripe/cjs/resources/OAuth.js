'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const utils_js_1 = require("../utils.js");
class OAuthResource extends StripeResource_js_1.StripeResource {
    constructor() {
        super(...arguments);
        this.basePath = (0, utils_js_1.makeURLInterpolator)('/');
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
        return `https://${connectHost}/${path}?${(0, utils_js_1.queryStringifyRequestData)(params)}`;
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
exports.OAuthResource = OAuthResource;
//# sourceMappingURL=OAuth.js.map