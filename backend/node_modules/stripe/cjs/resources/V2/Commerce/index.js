"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commerce = void 0;
const index_js_1 = require("./ProductCatalog/index.js");
class Commerce {
    constructor(stripe) {
        this.stripe = stripe;
        this.productCatalog = new index_js_1.ProductCatalog(stripe);
    }
}
exports.Commerce = Commerce;
//# sourceMappingURL=index.js.map