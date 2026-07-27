import { Stripe } from './stripe.core.js';
type StripeCallableConstructor = typeof Stripe & {
    (key: string, config?: Record<string, unknown>): Stripe;
};
declare const StripeConstructor: StripeCallableConstructor;
export = StripeConstructor;
