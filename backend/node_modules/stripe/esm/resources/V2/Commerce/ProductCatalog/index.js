// File generated from our OpenAPI spec
import { ImportResource } from './Imports.js';
export class ProductCatalog {
    constructor(stripe) {
        this.stripe = stripe;
        this.imports = new ImportResource(stripe);
    }
}
//# sourceMappingURL=index.js.map