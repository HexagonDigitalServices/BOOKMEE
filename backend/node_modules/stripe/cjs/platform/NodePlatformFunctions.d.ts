/// <reference types="node" />
/// <reference types="node" />
import * as http from 'http';
import { CryptoProvider } from '../crypto/CryptoProvider.js';
import { EventEmitter } from 'events';
import { HttpClient, NodeHttpClientInterface } from '../net/HttpClient.js';
import { PlatformFunctions } from './PlatformFunctions.js';
import { MultipartRequestData, RequestData, BufferedFile } from '../Types.js';
/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
export declare class NodePlatformFunctions extends PlatformFunctions {
    /** @override */
    uuid4(): string;
    /** @override */
    getPlatformInfo(): string;
    /** @override */
    emitWarning(warning: string): void;
    /** @override */
    getEnv(): Record<string, string | undefined>;
    /** @override */
    getRuntimeVersion(): string;
    private _telemetryId;
    /** @override */
    getTelemetryId(): string | null;
    private _getTelemetryIdPath;
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */
    secureCompare(a: string, b: string): boolean;
    createEmitter(): EventEmitter;
    /** @override */
    tryBufferData(data: MultipartRequestData): Promise<RequestData | BufferedFile>;
    /** @override */
    createNodeHttpClient(agent?: http.Agent): NodeHttpClientInterface;
    /** @override */
    createDefaultHttpClient(): HttpClient;
    /** @override */
    createNodeCryptoProvider(): CryptoProvider;
    /** @override */
    createDefaultCryptoProvider(): CryptoProvider;
}
