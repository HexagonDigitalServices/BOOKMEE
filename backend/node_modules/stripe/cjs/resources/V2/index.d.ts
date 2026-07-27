import { Stripe } from '../../stripe.core.js';
import { DeletedObject } from './DeletedObject.js';
import { Billing } from './Billing/index.js';
import { Commerce } from './Commerce/index.js';
import { Core } from './Core/index.js';
export { DeletedObject } from './DeletedObject.js';
export declare class V2 {
    private readonly stripe;
    billing: Billing;
    commerce: Commerce;
    core: Core;
    constructor(stripe: Stripe);
}
export declare namespace V2 {
    export { DeletedObject };
    export { Billing };
    export { Commerce };
    export { Core };
}
