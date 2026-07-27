"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2 = void 0;
const index_js_1 = require("./Billing/index.js");
const index_js_2 = require("./Commerce/index.js");
const index_js_3 = require("./Core/index.js");
class V2 {
    constructor(stripe) {
        this.stripe = stripe;
        this.billing = new index_js_1.Billing(stripe);
        this.commerce = new index_js_2.Commerce(stripe);
        this.core = new index_js_3.Core(stripe);
    }
}
exports.V2 = V2;
//# sourceMappingURL=index.js.map