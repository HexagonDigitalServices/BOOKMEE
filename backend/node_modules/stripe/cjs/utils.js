"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCallSiteToError = exports.parseHeadersForFetch = exports.parseHttpHeaderAsString = exports.getAPIMode = exports.jsonStringifyRequestData = exports.concat = exports.createApiKeyAuthenticator = exports.detectAIAgent = exports.AI_AGENTS = exports.validateInteger = exports.flattenAndStringify = exports.isObject = exports.pascalToCamelCase = exports.normalizeHeader = exports.normalizeHeaders = exports.removeNullish = exports.processOptions = exports.validateApiBase = exports.extractUrlParams = exports.makeURLInterpolator = exports.queryStringifyRequestData = exports.isOptionsHash = void 0;
const Types_js_1 = require("./Types.js");
const OPTIONS_KEYS = [
    'apiKey',
    'idempotencyKey',
    'stripeAccount',
    'apiVersion',
    'maxNetworkRetries',
    'timeout',
    'apiBase',
    'authenticator',
    'stripeContext',
    'headers',
    'additionalHeaders',
    'streaming',
];
function isOptionsHash(o) {
    return (o &&
        typeof o === 'object' &&
        OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop)));
}
exports.isOptionsHash = isOptionsHash;
/**
 * Stringifies an Object, accommodating nested objects
 * (forming the conventional key 'parent[child]=value')
 */
function queryStringifyRequestData(data) {
    return stringifyRequestData(data);
}
exports.queryStringifyRequestData = queryStringifyRequestData;
/**
 * Encodes a value for use in a query string, keeping brackets unencoded
 * for readability (the server accepts both encoded and unencoded brackets).
 */
function encodeQueryValue(value) {
    return (encodeURIComponent(value)
        // Encode characters not encoded by encodeURIComponent but encoded by qs
        .replace(/!/g, '%21')
        .replace(/\*/g, '%2A')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/'/g, '%27')
        // Decode brackets for readability (server accepts both)
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']'));
}
/**
 * Converts a value to a string representation for query string encoding.
 * Dates are converted to Unix timestamps.
 */
function valueToString(value) {
    if (value instanceof Date) {
        return Math.floor(value.getTime() / 1000).toString();
    }
    if (value === null) {
        return '';
    }
    return String(value);
}
/**
 * Custom query string stringifier that handles nested objects and arrays.
 * Produces output compatible with the qs library's indexed array format.
 */
function stringifyRequestData(data) {
    const pairs = [];
    function encode(key, value) {
        if (value === undefined) {
            return;
        }
        if (value === null || typeof value !== 'object' || value instanceof Date) {
            // Primitive value (including null and Date)
            pairs.push(encodeQueryValue(key) + '=' + encodeQueryValue(valueToString(value)));
            return;
        }
        if (Array.isArray(value)) {
            // Array: use indexed format arr[0], arr[1], etc.
            for (let i = 0; i < value.length; i++) {
                if (value[i] !== undefined) {
                    encode(key + '[' + i + ']', value[i]);
                }
            }
            return;
        }
        // Object: recurse with bracket notation
        for (const k of Object.keys(value)) {
            encode(key + '[' + k + ']', value[k]);
        }
    }
    // Handle top-level object
    if (typeof data === 'object' && data !== null) {
        for (const key of Object.keys(data)) {
            encode(key, data[key]);
        }
    }
    return pairs.join('&');
}
/**
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */
exports.makeURLInterpolator = (() => {
    const rc = {
        '\n': '\\n',
        '"': '\\"',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029',
    };
    return (str) => {
        const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
        return (outputs) => {
            return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => {
                const output = outputs[$1];
                if (isValidEncodeUriComponentType(output))
                    return encodeURIComponent(output);
                return '';
            });
        };
    };
})();
function isValidEncodeUriComponentType(value) {
    return ['number', 'string', 'boolean'].includes(typeof value);
}
function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
        return [];
    }
    return params.map((param) => param.replace(/[{}]/g, ''));
}
exports.extractUrlParams = extractUrlParams;
/**
 * enforces that only supplied API bases are allowed.
 */
const validateApiBase = (apiBase) => {
    if (typeof apiBase !== 'string') {
        throw new Error(`API base must be a string, got: ${typeof apiBase}`);
    }
    return apiBase in Types_js_1.DEFAULT_BASE_ADDRESSES;
};
exports.validateApiBase = validateApiBase;
function processOptions(options) {
    const result = {
        authenticator: null,
        headers: {},
        settings: {},
        streaming: false,
        apiBase: null,
    };
    if (!options) {
        return result;
    }
    if (options.apiKey) {
        result.authenticator = createApiKeyAuthenticator(options.apiKey);
    }
    if (options.idempotencyKey) {
        result.headers['Idempotency-Key'] = options.idempotencyKey;
    }
    if (options.stripeAccount) {
        result.headers['Stripe-Account'] = options.stripeAccount;
    }
    if (options.stripeContext) {
        if (result.headers['Stripe-Account']) {
            throw new Error("Can't specify both stripeAccount and stripeContext.");
        }
        result.headers['Stripe-Context'] = options.stripeContext;
    }
    if (options.apiVersion) {
        result.headers['Stripe-Version'] = options.apiVersion;
    }
    if (Number.isInteger(options.maxNetworkRetries)) {
        result.settings.maxNetworkRetries = options.maxNetworkRetries;
    }
    if (Number.isInteger(options.timeout)) {
        result.settings.timeout = options.timeout;
    }
    if (options.authenticator) {
        if (options.apiKey) {
            throw new Error("Can't specify both apiKey and authenticator.");
        }
        if (typeof options.authenticator !== 'function') {
            throw new Error('The authenticator must be a function ' +
                'receiving a request as the first parameter.');
        }
        result.authenticator = options.authenticator;
    }
    if (options.headers) {
        Object.assign(result.headers, options.headers);
    }
    if (options.streaming) {
        result.streaming = true;
    }
    return result;
}
exports.processOptions = processOptions;
/**
 * Remove empty values from an object
 */
function removeNullish(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Argument must be an object');
    }
    return Object.keys(obj).reduce((result, key) => {
        if (obj[key] != null) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}
exports.removeNullish = removeNullish;
/**
 * Normalize standard HTTP Headers:
 * {'foo-bar': 'hi'}
 * becomes
 * {'Foo-Bar': 'hi'}
 */
function normalizeHeaders(obj) {
    if (!(obj && typeof obj === 'object')) {
        return obj;
    }
    return Object.keys(obj).reduce((result, header) => {
        result[normalizeHeader(header)] = obj[header];
        return result;
    }, {});
}
exports.normalizeHeaders = normalizeHeaders;
/**
 * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
 * without the exceptions which are irrelevant to us.
 */
function normalizeHeader(header) {
    return header
        .split('-')
        .map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase())
        .join('-');
}
exports.normalizeHeader = normalizeHeader;
/**
 * Allow for special capitalization cases (such as OAuth)
 */
function pascalToCamelCase(name) {
    if (name === 'OAuth') {
        return 'oauth';
    }
    else {
        return name[0].toLowerCase() + name.substring(1);
    }
}
exports.pascalToCamelCase = pascalToCamelCase;
function isObject(obj) {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
}
exports.isObject = isObject;
// For use in multipart requests
function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey) => {
        Object.entries(obj).forEach(([key, value]) => {
            const newKey = prevKey ? `${prevKey}[${key}]` : key;
            if (isObject(value)) {
                if (!(value instanceof Uint8Array) &&
                    !Object.prototype.hasOwnProperty.call(value, 'data')) {
                    // Non-buffer non-file Objects are recursively flattened
                    return step(value, newKey);
                }
                else {
                    // Buffers and file objects are stored without modification
                    result[newKey] = value;
                }
            }
            else {
                // Primitives are converted to strings
                result[newKey] = String(value);
            }
        });
    };
    step(data, null);
    return result;
}
exports.flattenAndStringify = flattenAndStringify;
function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
        if (defaultVal !== undefined) {
            return defaultVal;
        }
        else {
            throw new Error(`${name} must be an integer`);
        }
    }
    return n;
}
exports.validateInteger = validateInteger;
exports.AI_AGENTS = [
    // The beginning of the section generated from our OpenAPI spec
    ['ANTIGRAVITY_CLI_ALIAS', 'antigravity'],
    ['CLAUDECODE', 'claude_code'],
    ['CLINE_ACTIVE', 'cline'],
    ['CODEX_SANDBOX', 'codex_cli'],
    ['CODEX_THREAD_ID', 'codex_cli'],
    ['CODEX_SANDBOX_NETWORK_DISABLED', 'codex_cli'],
    ['CODEX_CI', 'codex_cli'],
    ['CURSOR_AGENT', 'cursor'],
    ['GEMINI_CLI', 'gemini_cli'],
    ['OPENCLAW_SHELL', 'openclaw'],
    ['OPENCODE', 'open_code'],
    // The end of the section generated from our OpenAPI spec
];
function detectAIAgent(env) {
    for (const [envVar, agentName] of exports.AI_AGENTS) {
        if (env[envVar]) {
            return agentName;
        }
    }
    return '';
}
exports.detectAIAgent = detectAIAgent;
function createApiKeyAuthenticator(apiKey) {
    const authenticator = (request) => {
        request.headers.Authorization = 'Bearer ' + apiKey;
        return Promise.resolve();
    };
    // For testing
    authenticator._apiKey = apiKey;
    return authenticator;
}
exports.createApiKeyAuthenticator = createApiKeyAuthenticator;
/**
 * Joins an array of Uint8Arrays into a single Uint8Array
 */
function concat(arrays) {
    const totalLength = arrays.reduce((len, array) => len + array.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    arrays.forEach((array) => {
        merged.set(array, offset);
        offset += array.length;
    });
    return merged;
}
exports.concat = concat;
/**
 * Replaces Date objects with Unix timestamps
 */
function dateTimeReplacer(key, value) {
    if (this[key] instanceof Date) {
        return Math.floor(this[key].getTime() / 1000).toString();
    }
    return value;
}
/**
 * JSON stringifies an Object, replacing Date objects with Unix timestamps
 */
function jsonStringifyRequestData(data) {
    return JSON.stringify(data, dateTimeReplacer);
}
exports.jsonStringifyRequestData = jsonStringifyRequestData;
/**
 * Inspects the given path to determine if the endpoint is for v1 or v2 API
 */
function getAPIMode(path) {
    if (!path) {
        return 'v1';
    }
    return path.startsWith('/v2') ? 'v2' : 'v1';
}
exports.getAPIMode = getAPIMode;
function parseHttpHeaderAsString(header) {
    if (Array.isArray(header)) {
        return header.join(', ');
    }
    return String(header);
}
exports.parseHttpHeaderAsString = parseHttpHeaderAsString;
function parseHeadersForFetch(headers) {
    return Object.entries(headers).map(([key, value]) => {
        return [key, parseHttpHeaderAsString(value)];
    });
}
exports.parseHeadersForFetch = parseHeadersForFetch;
const CALL_SITE_MARKER = '\nOriginating from:';
/**
 * We do some async indirection in our HTTP calling code that means stack traces aren't correct traced back to their actual origin in userland
 * So, we call this with a manually sourced error right before we do async HTTP operations, capturing the stack trace
 * NOTE: Modifies the `err` arg.
 */
function attachCallSiteToError(err, callSiteStack) {
    if (!err || !err.stack || !callSiteStack) {
        return;
    }
    const callerFrames = callSiteStack.substring(callSiteStack.indexOf('\n') + 1);
    const existingMarkerIdx = err.stack.indexOf(CALL_SITE_MARKER);
    const baseStack = existingMarkerIdx >= 0
        ? err.stack.substring(0, existingMarkerIdx)
        : err.stack;
    err.stack = `${baseStack}${CALL_SITE_MARKER}\n${callerFrames}`;
}
exports.attachCallSiteToError = attachCallSiteToError;
//# sourceMappingURL=utils.js.map