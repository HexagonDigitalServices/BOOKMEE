import { StripeResourceObject, MakeRequestSpec, RequestData, UrlInterpolator } from './Types.js';
import { Stripe } from './stripe.core.js';
import { RequestOptions } from './lib.js';
/**
 * Encapsulates request logic for a Stripe Resource
 */
declare class StripeResource implements StripeResourceObject {
    static MAX_BUFFERED_REQUEST_METRICS: number;
    _stripe: Stripe;
    path: UrlInterpolator;
    resourcePath: string;
    basePath: UrlInterpolator;
    requestDataProcessor: any;
    constructor(stripe: Stripe, deprecatedUrlData?: never);
    initialize(_stripe?: Stripe, _deprecatedUrlData?: never): void;
    _makeRequest(method: string, path: string, params: RequestData | undefined, options: RequestOptions | undefined, spec?: MakeRequestSpec): Promise<any>;
}
export { StripeResource };
