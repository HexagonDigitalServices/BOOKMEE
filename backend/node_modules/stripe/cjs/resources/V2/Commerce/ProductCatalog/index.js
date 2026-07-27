"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCatalog = void 0;
const Imports_js_1 = require("./Imports.js");
class ProductCatalog {
    constructor(stripe) {
        this.stripe = stripe;
        this.imports = new Imports_js_1.ImportResource(stripe);
    }
}
exports.ProductCatalog = ProductCatalog;
//# sourceMappingURL=index.js.map