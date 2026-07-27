import { StripeResource } from '../../../StripeResource.js';
import { Event } from './Events.js';
import { MetadataParam, Metadata } from '../../../shared.js';
import { RequestOptions, V2ListPromise, Response } from '../../../lib.js';
import { DeletedObject } from './../../V2/DeletedObject.js';
export declare class EventDestinationResource extends StripeResource {
    /**
     * Lists all event destinations.
     */
    list(params?: V2.Core.EventDestinationListParams, options?: RequestOptions): V2ListPromise<EventDestination>;
    /**
     * Create a new event destination.
     */
    create(params: V2.Core.EventDestinationCreateParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Delete an event destination.
     */
    del(id: string, params?: V2.Core.EventDestinationDeleteParams, options?: RequestOptions): Promise<Response<DeletedObject>>;
    /**
     * Retrieves the details of an event destination.
     */
    retrieve(id: string, params?: V2.Core.EventDestinationRetrieveParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Update the details of an event destination.
     */
    update(id: string, params?: V2.Core.EventDestinationUpdateParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Disable an event destination.
     */
    disable(id: string, params?: V2.Core.EventDestinationDisableParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Enable an event destination.
     */
    enable(id: string, params?: V2.Core.EventDestinationEnableParams, options?: RequestOptions): Promise<Response<EventDestination>>;
    /**
     * Send a `ping` event to an event destination.
     */
    ping(id: string, params?: V2.Core.EventDestinationPingParams, options?: RequestOptions): Promise<Response<Event>>;
}
export interface EventDestination {
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value of the object field.
     */
    object: 'v2.core.event_destination';
    /**
     * Amazon EventBridge configuration.
     */
    amazon_eventbridge?: EventDestination.AmazonEventbridge;
    /**
     * Azure Event Grid configuration.
     */
    azure_event_grid?: EventDestination.AzureEventGrid;
    /**
     * Time at which the object was created.
     */
    created: string;
    /**
     * An optional description of what the event destination is used for.
     */
    description: string;
    /**
     * The list of events to enable for this endpoint.
     */
    enabled_events: Array<string>;
    /**
     * Payload type of events being subscribed to.
     */
    event_payload: EventDestination.EventPayload;
    /**
     * Specifies which accounts' events route to this destination.
     * `@self`: Receive events from the account that owns the event destination.
     * `@accounts`: Receive events emitted from other accounts you manage which includes your v1 and v2 accounts.
     * `@organization_members`: Receive events from accounts directly linked to the organization.
     * `@organization_members/@accounts`: Receive events from all accounts connected to any platform accounts in the organization.
     */
    events_from?: Array<string>;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Metadata.
     */
    metadata?: Metadata;
    /**
     * Event destination name.
     */
    name: string;
    /**
     * If using the snapshot event payload, the API version events are rendered as.
     */
    snapshot_api_version?: string;
    /**
     * Status. It can be set to either enabled or disabled.
     */
    status: EventDestination.Status;
    /**
     * Additional information about event destination status.
     */
    status_details?: EventDestination.StatusDetails;
    /**
     * Event destination type.
     */
    type: EventDestination.Type;
    /**
     * Time at which the object was last updated.
     */
    updated: string;
    /**
     * Webhook endpoint configuration.
     */
    webhook_endpoint?: EventDestination.WebhookEndpoint;
}
export declare namespace EventDestination {
    interface AmazonEventbridge {
        /**
         * The AWS account ID.
         */
        aws_account_id: string;
        /**
         * The ARN of the AWS event source.
         */
        aws_event_source_arn: string;
        /**
         * The state of the AWS event source.
         */
        aws_event_source_status: AmazonEventbridge.AwsEventSourceStatus;
    }
    interface AzureEventGrid {
        /**
         * The name of the Azure partner topic.
         */
        azure_partner_topic_name: string;
        /**
         * The status of the Azure partner topic.
         */
        azure_partner_topic_status: AzureEventGrid.AzurePartnerTopicStatus;
        /**
         * The Azure region.
         */
        azure_region: string;
        /**
         * The name of the Azure resource group.
         */
        azure_resource_group_name: string;
        /**
         * The Azure subscription ID.
         */
        azure_subscription_id: string;
    }
    type EventPayload = 'snapshot' | 'thin';
    type Status = 'disabled' | 'enabled';
    interface StatusDetails {
        /**
         * Details about why the event destination has been disabled.
         */
        disabled?: StatusDetails.Disabled;
    }
    type Type = 'amazon_eventbridge' | 'azure_event_grid' | 'webhook_endpoint';
    interface WebhookEndpoint {
        /**
         * The signing secret of the webhook endpoint, only includable on creation.
         */
        signing_secret?: string;
        /**
         * The URL of the webhook endpoint, includable.
         */
        url?: string;
    }
    namespace AmazonEventbridge {
        type AwsEventSourceStatus = 'active' | 'deleted' | 'pending' | 'unknown';
    }
    namespace AzureEventGrid {
        type AzurePartnerTopicStatus = 'activated' | 'deleted' | 'never_activated' | 'unknown';
    }
    namespace StatusDetails {
        interface Disabled {
            /**
             * Reason event destination has been disabled.
             */
            reason: Disabled.Reason;
        }
        namespace Disabled {
            type Reason = 'no_aws_event_source_exists' | 'no_azure_partner_topic_exists' | 'user';
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationCreateParams {
            /**
             * The list of events to enable for this endpoint.
             */
            enabled_events: Array<string>;
            /**
             * Payload type of events being subscribed to.
             */
            event_payload: EventDestinationCreateParams.EventPayload;
            /**
             * Event destination name.
             */
            name: string;
            /**
             * Event destination type.
             */
            type: EventDestinationCreateParams.Type;
            /**
             * Amazon EventBridge configuration.
             */
            amazon_eventbridge?: EventDestinationCreateParams.AmazonEventbridge;
            /**
             * Azure Event Grid configuration.
             */
            azure_event_grid?: EventDestinationCreateParams.AzureEventGrid;
            /**
             * An optional description of what the event destination is used for.
             */
            description?: string;
            /**
             * Specifies which accounts' events route to this destination.
             * `@self`: Receive events from the account that owns the event destination.
             * `@accounts`: Receive events emitted from other accounts you manage which includes your v1 and v2 accounts.
             * `@organization_members`: Receive events from accounts directly linked to the organization.
             * `@organization_members/@accounts`: Receive events from all accounts connected to any platform accounts in the organization.
             */
            events_from?: Array<string>;
            /**
             * Additional fields to include in the response.
             */
            include?: Array<EventDestinationCreateParams.Include>;
            /**
             * Metadata.
             */
            metadata?: MetadataParam;
            /**
             * If using the snapshot event payload, the API version events are rendered as.
             */
            snapshot_api_version?: string;
            /**
             * Webhook endpoint configuration.
             */
            webhook_endpoint?: EventDestinationCreateParams.WebhookEndpoint;
        }
        namespace EventDestinationCreateParams {
            type EventPayload = 'snapshot' | 'thin';
            type Type = 'amazon_eventbridge' | 'azure_event_grid' | 'webhook_endpoint';
            interface AmazonEventbridge {
                /**
                 * The AWS account ID.
                 */
                aws_account_id: string;
                /**
                 * The region of the AWS event source.
                 */
                aws_region: string;
            }
            interface AzureEventGrid {
                /**
                 * The Azure region.
                 */
                azure_region: string;
                /**
                 * The name of the Azure resource group.
                 */
                azure_resource_group_name: string;
                /**
                 * The Azure subscription ID.
                 */
                azure_subscription_id: string;
            }
            type Include = 'webhook_endpoint.signing_secret' | 'webhook_endpoint.url';
            interface WebhookEndpoint {
                /**
                 * The URL of the webhook endpoint.
                 */
                url: string;
            }
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationRetrieveParams {
            /**
             * Additional fields to include in the response.
             */
            include?: Array<'webhook_endpoint.url'>;
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationUpdateParams {
            /**
             * An optional description of what the event destination is used for.
             */
            description?: string;
            /**
             * The list of events to enable for this endpoint.
             */
            enabled_events?: Array<string>;
            /**
             * Additional fields to include in the response. Currently supports `webhook_endpoint.url`.
             */
            include?: Array<'webhook_endpoint.url'>;
            /**
             * Metadata.
             */
            metadata?: MetadataParam;
            /**
             * Event destination name.
             */
            name?: string;
            /**
             * Webhook endpoint configuration.
             */
            webhook_endpoint?: EventDestinationUpdateParams.WebhookEndpoint;
        }
        namespace EventDestinationUpdateParams {
            interface WebhookEndpoint {
                /**
                 * The URL of the webhook endpoint.
                 */
                url: string;
            }
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationListParams {
            /**
             * Additional fields to include in the response. Currently supports `webhook_endpoint.url`.
             */
            include?: Array<'webhook_endpoint.url'>;
            /**
             * The page size.
             */
            limit?: number;
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationDeleteParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationDisableParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationEnableParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventDestinationPingParams {
        }
    }
}
