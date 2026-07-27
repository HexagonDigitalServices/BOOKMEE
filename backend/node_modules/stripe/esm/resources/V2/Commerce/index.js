// File generated from our OpenAPI spec
import { ProductCatalog } from './ProductCatalog/index.js';
export class Commerce {
    constructor(stripe) {
        this.stripe = stripe;
        this.productCatalog = new ProductCatalog(stripe);
    }
}
//# sourceMappingURL=index.js.map