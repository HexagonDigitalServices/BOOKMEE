import { StripeResource } from '../../../../StripeResource.js';
import { ProductCatalogImport } from './../../../V2/Commerce/ProductCatalogImports.js';
import { MetadataParam } from '../../../../shared.js';
import { RequestOptions, V2ListPromise, Response } from '../../../../lib.js';
export declare class ImportResource extends StripeResource {
    /**
     * Returns a list of ProductCatalogImport objects.
     */
    list(params?: V2.Commerce.ProductCatalog.ImportListParams, options?: RequestOptions): V2ListPromise<ProductCatalogImport>;
    /**
     * Creates a ProductCatalogImport.
     */
    create(params: V2.Commerce.ProductCatalog.ImportCreateParams, options?: RequestOptions): Promise<Response<ProductCatalogImport>>;
    /**
     * Retrieves a ProductCatalogImport by ID.
     */
    retrieve(id: string, params?: V2.Commerce.ProductCatalog.ImportRetrieveParams, options?: RequestOptions): Promise<Response<ProductCatalogImport>>;
}
export declare namespace V2 {
    namespace Commerce {
        namespace ProductCatalog {
            interface ImportCreateParams {
                /**
                 * The type of catalog data to import.
                 */
                feed_type: ImportCreateParams.FeedType;
                /**
                 * Additional information about the import in a structured format.
                 */
                metadata: MetadataParam;
                /**
                 * The strategy for handling existing catalog data during import.
                 */
                mode: ImportCreateParams.Mode;
            }
            namespace ImportCreateParams {
                type FeedType = 'inventory' | 'pricing' | 'product' | 'promotion';
                type Mode = 'replace' | 'upsert';
            }
        }
    }
}
export declare namespace V2 {
    namespace Commerce {
        namespace ProductCatalog {
            interface ImportRetrieveParams {
            }
        }
    }
}
export declare namespace V2 {
    namespace Commerce {
        namespace ProductCatalog {
            interface ImportListParams {
                /**
                 * Filter for objects created at the specified timestamp.
                 * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
                 */
                created?: string;
                /**
                 * Filter for objects created after the specified timestamp.
                 * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
                 */
                created_gt?: string;
                /**
                 * Filter for objects created on or after the specified timestamp.
                 * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
                 */
                created_gte?: string;
                /**
                 * Filter for objects created before the specified timestamp.
                 * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
                 */
                created_lt?: string;
                /**
                 * Filter for objects created on or before the specified timestamp.
                 * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
                 */
                created_lte?: string;
                /**
                 * Filter by the type of feed data being imported.
                 */
                feed_type?: ImportListParams.FeedType;
                /**
                 * The maximum number of results per page.
                 */
                limit?: number;
                /**
                 * Filter by import status.
                 */
                status?: ImportListParams.Status;
            }
            namespace ImportListParams {
                type FeedType = 'inventory' | 'pricing' | 'product' | 'promotion';
                type Status = 'awaiting_upload' | 'failed' | 'processing' | 'succeeded' | 'succeeded_with_errors';
            }
        }
    }
}
