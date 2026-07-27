// File generated from our OpenAPI spec
import { Billing } from './Billing/index.js';
import { Commerce } from './Commerce/index.js';
import { Core } from './Core/index.js';
export class V2 {
    constructor(stripe) {
        this.stripe = stripe;
        this.billing = new Billing(stripe);
        this.commerce = new Commerce(stripe);
        this.core = new Core(stripe);
    }
}
//# sourceMappingURL=index.js.map