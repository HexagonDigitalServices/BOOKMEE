// File generated from our OpenAPI spec
import { StripeResource } from '../../../../StripeResource.js';
export class ImportResource extends StripeResource {
    /**
     * Returns a list of ProductCatalogImport objects.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v2/commerce/product_catalog/imports', params, options, {
            methodType: 'list',
            responseSchema: {
                kind: 'object',
                fields: {
                    data: {
                        kind: 'array',
                        element: {
                            kind: 'object',
                            fields: {
                                status_details: {
                                    kind: 'object',
                                    fields: {
                                        processing: {
                                            kind: 'object',
                                            fields: {
                                                error_count: { kind: 'int64_string' },
                                                success_count: { kind: 'int64_string' },
                                            },
                                        },
                                        succeeded: {
                                            kind: 'object',
                                            fields: { success_count: { kind: 'int64_string' } },
                                        },
                                        succeeded_with_errors: {
                                            kind: 'object',
                                            fields: {
                                                error_count: { kind: 'int64_string' },
                                                error_file: {
                                                    kind: 'object',
                                                    fields: { size: { kind: 'int64_string' } },
                                                },
                                                samples: {
                                                    kind: 'array',
                                                    element: {
                                                        kind: 'object',
                                                        fields: { row: { kind: 'int64_string' } },
                                                    },
                                                },
                                                success_count: { kind: 'int64_string' },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Creates a ProductCatalogImport.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v2/commerce/product_catalog/imports', params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    status_details: {
                        kind: 'object',
                        fields: {
                            processing: {
                                kind: 'object',
                                fields: {
                                    error_count: { kind: 'int64_string' },
                                    success_count: { kind: 'int64_string' },
                                },
                            },
                            succeeded: {
                                kind: 'object',
                                fields: { success_count: { kind: 'int64_string' } },
                            },
                            succeeded_with_errors: {
                                kind: 'object',
                                fields: {
                                    error_count: { kind: 'int64_string' },
                                    error_file: {
                                        kind: 'object',
                                        fields: { size: { kind: 'int64_string' } },
                                    },
                                    samples: {
                                        kind: 'array',
                                        element: {
                                            kind: 'object',
                                            fields: { row: { kind: 'int64_string' } },
                                        },
                                    },
                                    success_count: { kind: 'int64_string' },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
    /**
     * Retrieves a ProductCatalogImport by ID.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v2/commerce/product_catalog/imports/${encodeURIComponent(id)}`, params, options, {
            responseSchema: {
                kind: 'object',
                fields: {
                    status_details: {
                        kind: 'object',
                        fields: {
                            processing: {
                                kind: 'object',
                                fields: {
                                    error_count: { kind: 'int64_string' },
                                    success_count: { kind: 'int64_string' },
                                },
                            },
                            succeeded: {
                                kind: 'object',
                                fields: { success_count: { kind: 'int64_string' } },
                            },
                            succeeded_with_errors: {
                                kind: 'object',
                                fields: {
                                    error_count: { kind: 'int64_string' },
                                    error_file: {
                                        kind: 'object',
                                        fields: { size: { kind: 'int64_string' } },
                                    },
                                    samples: {
                                        kind: 'array',
                                        element: {
                                            kind: 'object',
                                            fields: { row: { kind: 'int64_string' } },
                                        },
                                    },
                                    success_count: { kind: 'int64_string' },
                                },
                            },
                        },
                    },
                },
            },
        });
    }
}
//# sourceMappingURL=Imports.js.map