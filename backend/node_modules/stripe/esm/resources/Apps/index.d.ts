import { Stripe } from '../../stripe.core.js';
import { Apps as AppsNamespace0, Secret, SecretResource } from './Secrets.js';
export { Secret } from './Secrets.js';
export declare class Apps {
    private readonly stripe;
    secrets: SecretResource;
    constructor(stripe: Stripe);
}
export declare namespace Apps {
    export import SecretListParams = AppsNamespace0.SecretListParams;
    export import SecretCreateParams = AppsNamespace0.SecretCreateParams;
    export import SecretFindParams = AppsNamespace0.SecretFindParams;
    export import SecretDeleteWhereParams = AppsNamespace0.SecretDeleteWhereParams;
    export { Secret, SecretResource };
}
