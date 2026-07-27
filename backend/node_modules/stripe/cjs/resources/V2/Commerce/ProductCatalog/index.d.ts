import { Stripe } from '../../../../stripe.core.js';
import { ImportResource } from './Imports.js';
export declare class ProductCatalog {
    private readonly stripe;
    imports: ImportResource;
    constructor(stripe: Stripe);
}
export declare namespace ProductCatalog { }
