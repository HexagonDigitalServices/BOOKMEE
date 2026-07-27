"use strict";
const WebPlatformFunctions_js_1 = require("./platform/WebPlatformFunctions.js");
const stripe_core_js_1 = require("./stripe.core.js");
// Initialize the Stripe class with Web platform functions
stripe_core_js_1.Stripe.initialize(new WebPlatformFunctions_js_1.WebPlatformFunctions());
// @ts-expect-error: function expression lacks a construct signature, but at runtime
// the prototype chain wiring below makes both `new StripeConstructor()` and
// `StripeConstructor()` work correctly.
// eslint-disable-next-line func-style
const StripeConstructor = function (key, config) {
    // Support calling without `new`
    if (!(this instanceof StripeConstructor)) {
        return new stripe_core_js_1.Stripe(key, config);
    }
    // If called with `new`, return a new Stripe instance
    return new stripe_core_js_1.Stripe(key, config);
};
// Copy all static properties from Stripe to the wrapper
Object.setPrototypeOf(StripeConstructor, stripe_core_js_1.Stripe);
Object.setPrototypeOf(StripeConstructor.prototype, stripe_core_js_1.Stripe.prototype);
// Copy static properties explicitly
for (const key of Object.getOwnPropertyNames(stripe_core_js_1.Stripe)) {
    if (key !== 'length' && key !== 'prototype' && key !== 'name') {
        Object.defineProperty(StripeConstructor, key, {
            value: stripe_core_js_1.Stripe[key],
            writable: true,
            enumerable: true,
            configurable: true,
        });
    }
}
module.exports = StripeConstructor;
//# sourceMappingURL=stripe.cjs.worker.js.map