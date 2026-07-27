import { Stripe } from '../../../stripe.core.js';
import { ProductCatalogImport } from './ProductCatalogImports.js';
import { ProductCatalog } from './ProductCatalog/index.js';
export { ProductCatalogImport } from './ProductCatalogImports.js';
export declare class Commerce {
    private readonly stripe;
    productCatalog: ProductCatalog;
    constructor(stripe: Stripe);
}
export declare namespace Commerce {
    export { ProductCatalogImport };
    export { ProductCatalog };
}
