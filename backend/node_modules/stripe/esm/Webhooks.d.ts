import { CryptoProvider } from './crypto/CryptoProvider.js';
import { PlatformFunctions } from './platform/PlatformFunctions.js';
import { Event } from './resources/Events.js';
/**
 * Value of the `stripe-signature` header from Stripe.
 * Typically a string.
 *
 * Note that this is typed to accept an array of strings
 * so that it works seamlessly with express's types,
 * but will throw if an array is passed in practice
 * since express should never return this header as an array,
 * only a string.
 */
type WebhookHeader = string | string[] | Uint8Array;
export type WebhookTestHeaderOptions = {
    timestamp?: number;
    payload: string;
    secret: string;
    scheme?: string;
    signature?: string;
    cryptoProvider?: CryptoProvider;
};
type WebhookPayload = string | Uint8Array;
export type WebhookSignatureObject = {
    verifyHeader: (encodedPayload: WebhookPayload, encodedHeader: WebhookHeader, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number) => boolean;
    verifyHeaderAsync: (encodedPayload: WebhookPayload, encodedHeader: WebhookHeader, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number) => Promise<boolean>;
};
export type WebhookObject = {
    DEFAULT_TOLERANCE: number;
    signature: WebhookSignatureObject | null;
    constructEvent: (payload: WebhookPayload, header: WebhookHeader, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number) => Event;
    constructEventAsync: (payload: WebhookPayload, header: WebhookHeader, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number) => Promise<Event>;
    generateTestHeaderString: (opts: WebhookTestHeaderOptions) => string;
    generateTestHeaderStringAsync: (opts: WebhookTestHeaderOptions) => Promise<string>;
};
export declare function createWebhooks(platformFunctions: PlatformFunctions): WebhookObject;
export {};
