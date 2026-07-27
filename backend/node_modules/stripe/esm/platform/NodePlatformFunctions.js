import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { EventEmitter } from 'events';
import { NodeCryptoProvider } from '../crypto/NodeCryptoProvider.js';
import { NodeHttpClient } from '../net/NodeHttpClient.js';
import { PlatformFunctions } from './PlatformFunctions.js';
import { StripeError } from '../Error.js';
import { concat } from '../utils.js';
class StreamProcessingError extends StripeError {
}
/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */
export class NodePlatformFunctions extends PlatformFunctions {
    constructor() {
        super(...arguments);
        this._telemetryId = undefined;
    }
    /** @override */
    uuid4() {
        // available in: v14.17.x+
        if (crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return super.uuid4();
    }
    /** @override */
    getPlatformInfo() {
        return `${process.platform} ${os.release()} ${os.arch()}`;
    }
    /** @override */
    emitWarning(warning) {
        if (typeof process.emitWarning === 'function') {
            process.emitWarning(warning, 'Stripe');
        }
        else {
            super.emitWarning(warning);
        }
    }
    /** @override */
    getEnv() {
        return process.env;
    }
    /** @override */
    getRuntimeVersion() {
        return process.version;
    }
    /** @override */
    getTelemetryId() {
        if (this._telemetryId !== undefined) {
            return this._telemetryId;
        }
        const filePath = this._getTelemetryIdPath();
        if (!filePath) {
            this._telemetryId = null;
            return null;
        }
        try {
            // eslint-disable-next-line no-sync
            const content = fs.readFileSync(filePath, 'utf8').trim();
            if (content) {
                this._telemetryId = content;
                return content;
            }
            // eslint-disable-next-line no-empty
        }
        catch { }
        const newId = crypto.randomBytes(16).toString('hex');
        try {
            // eslint-disable-next-line no-sync
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            // eslint-disable-next-line no-sync
            fs.writeFileSync(filePath, newId, 'utf8');
        }
        catch {
            this._telemetryId = null;
            return null;
        }
        this._telemetryId = newId;
        return newId;
    }
    _getTelemetryIdPath() {
        if (process.platform === 'win32') {
            const appData = process.env.APPDATA;
            if (!appData)
                return null;
            return path.join(appData, 'Stripe', 'telemetry_id');
        }
        const xdg = process.env.XDG_CONFIG_HOME;
        if (xdg) {
            return path.join(xdg, 'stripe', 'telemetry_id');
        }
        const home = os.homedir();
        if (!home)
            return null;
        return path.join(home, '.config', 'stripe', 'telemetry_id');
    }
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */
    secureCompare(a, b) {
        if (!a || !b) {
            throw new Error('secureCompare must receive two arguments');
        }
        // return early here if buffer lengths are not equal since timingSafeEqual
        // will throw if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
        // otherwise use our own scmp-internal function.
        if (crypto.timingSafeEqual) {
            const textEncoder = new TextEncoder();
            const aEncoded = textEncoder.encode(a);
            const bEncoded = textEncoder.encode(b);
            return crypto.timingSafeEqual(aEncoded, bEncoded);
        }
        return super.secureCompare(a, b);
    }
    createEmitter() {
        return new EventEmitter();
    }
    /** @override */
    tryBufferData(data) {
        if (!(data.file.data instanceof EventEmitter)) {
            return Promise.resolve(data);
        }
        const bufferArray = [];
        return new Promise((resolve, reject) => {
            data.file.data
                .on('data', (line) => {
                bufferArray.push(line);
            })
                .once('end', () => {
                // @ts-ignore
                const bufferData = Object.assign({}, data);
                bufferData.file.data = concat(bufferArray);
                resolve(bufferData);
            })
                .on('error', (err) => {
                reject(new StreamProcessingError({
                    message: 'An error occurred while attempting to process the file for upload.',
                    detail: err,
                }));
            });
        });
    }
    /** @override */
    createNodeHttpClient(agent) {
        return new NodeHttpClient(agent);
    }
    /** @override */
    createDefaultHttpClient() {
        return new NodeHttpClient();
    }
    /** @override */
    createNodeCryptoProvider() {
        return new NodeCryptoProvider();
    }
    /** @override */
    createDefaultCryptoProvider() {
        return this.createNodeCryptoProvider();
    }
}
//# sourceMappingURL=NodePlatformFunctions.js.map