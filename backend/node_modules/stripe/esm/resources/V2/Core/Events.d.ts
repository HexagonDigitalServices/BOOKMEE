import { StripeResource } from '../../../StripeResource.js';
import { RangeQueryParam } from '../../../shared.js';
import { RequestOptions, V2ListPromise, Response } from '../../../lib.js';
export declare class EventResource extends StripeResource {
    /**
     * List events, going back up to 30 days.
     */
    list(params?: V2.Core.EventListParams, options?: RequestOptions): V2ListPromise<Event>;
    /**
     * Retrieves the details of an event if it was created in the last 30 days. Supply the unique
     * identifier of the event, which might have been delivered to your event destination.
     */
    retrieve(id: string, params?: V2.Core.EventRetrieveParams, options?: RequestOptions): Promise<Response<Event>>;
    /**
     * @private
     *
     * For internal use in stripe-node.
     *
     * @param pulledEvent The retrieved event object
     * @returns The retrieved event object with a fetchRelatedObject method,
     * if pulledEvent.related_object is valid (non-null and has a url)
     */
    addFetchRelatedObjectIfNeeded(pulledEvent: any): any;
}
export interface EventBase {
    /**
     * Unique identifier for the event.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value of the object field.
     */
    object: 'v2.core.event';
    /**
     * Before and after changes for the primary related object.
     */
    changes?: Event.Changes;
    /**
     * Authentication context needed to fetch the event or related object.
     */
    context?: string;
    /**
     * Time at which the object was created.
     */
    created: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Reason for the event.
     */
    reason?: Event.Reason;
    /**
     * The type of the event.
     */
    type: string;
}
export declare namespace Event {
    type Changes = {
        [key: string]: unknown;
    };
    interface Reason {
        /**
         * Information on the API request that instigated the event.
         */
        request?: Reason.Request;
        /**
         * Event reason type.
         */
        type: 'request';
    }
    namespace Reason {
        interface Request {
            /**
             * ID of the API request that caused the event.
             */
            id: string;
            /**
             * The idempotency key transmitted during the request.
             */
            idempotency_key: string;
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventRetrieveParams {
        }
    }
}
export declare namespace V2 {
    namespace Core {
        interface EventListParams {
            /**
             * Set of filters to query events within a range of `created` timestamps.
             */
            created?: RangeQueryParam;
            /**
             * The page size.
             */
            limit?: number;
            /**
             * Primary object ID used to retrieve related events.
             */
            object_id?: string;
            /**
             * An array of up to 20 strings containing specific event names.
             */
            types?: Array<string>;
        }
    }
}
import { Core } from './index.js';
import { Billing as V1Billing } from './../../Billing/index.js';
import { Commerce } from './../Commerce/index.js';
export type Event = V1BillingMeterErrorReportTriggeredEvent | V1BillingMeterNoMeterFoundEvent | V2CommerceProductCatalogImportsFailedEvent | V2CommerceProductCatalogImportsProcessingEvent | V2CommerceProductCatalogImportsSucceededEvent | V2CommerceProductCatalogImportsSucceededWithErrorsEvent | V2CoreAccountClosedEvent | V2CoreAccountCreatedEvent | V2CoreAccountUpdatedEvent | V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent | V2CoreAccountIncludingConfigurationCustomerUpdatedEvent | V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent | V2CoreAccountIncludingConfigurationMerchantUpdatedEvent | V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent | V2CoreAccountIncludingConfigurationRecipientUpdatedEvent | V2CoreAccountIncludingDefaultsUpdatedEvent | V2CoreAccountIncludingFutureRequirementsUpdatedEvent | V2CoreAccountIncludingIdentityUpdatedEvent | V2CoreAccountIncludingRequirementsUpdatedEvent | V2CoreAccountLinkReturnedEvent | V2CoreAccountPersonCreatedEvent | V2CoreAccountPersonDeletedEvent | V2CoreAccountPersonUpdatedEvent | V2CoreEventDestinationPingEvent;
export type EventNotification = V1BillingMeterErrorReportTriggeredEventNotification | V1BillingMeterNoMeterFoundEventNotification | V2CommerceProductCatalogImportsFailedEventNotification | V2CommerceProductCatalogImportsProcessingEventNotification | V2CommerceProductCatalogImportsSucceededEventNotification | V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification | V2CoreAccountClosedEventNotification | V2CoreAccountCreatedEventNotification | V2CoreAccountUpdatedEventNotification | V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification | V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification | V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification | V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification | V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification | V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification | V2CoreAccountIncludingDefaultsUpdatedEventNotification | V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification | V2CoreAccountIncludingIdentityUpdatedEventNotification | V2CoreAccountIncludingRequirementsUpdatedEventNotification | V2CoreAccountLinkReturnedEventNotification | V2CoreAccountPersonCreatedEventNotification | V2CoreAccountPersonDeletedEventNotification | V2CoreAccountPersonUpdatedEventNotification | V2CoreEventDestinationPingEventNotification;
import { StripeContext } from '../../../StripeContext.js';
export declare namespace V2 {
    namespace Core {
        namespace Events {
            interface RelatedObject {
                /**
                 * Unique identifier for the object relevant to the event.
                 */ id: string;
                /**
                 * Type of the object relevant to the event.
                 */ type: string;
                /**
                 * URL to retrieve the resource.
                 */ url: string;
            }
        }
    }
}
/**
 * Represents the shape of an EventNotification that the SDK didn't know about when it was generated.
 */ export interface UnknownEventNotification extends EventNotificationBase {
    /**
     * Object containing the reference to API resource relevant to the event.
     */ related_object: V2.Core.Events.RelatedObject | null;
    /**
     * Fetches the full object corresponding to the `related_object` field. Returns `null` if there is no `related_object`.
     */ fetchRelatedObject: () => Promise<unknown>;
    /**
     * Fetches the full Event object corresponding to this notification.
     */ fetchEvent: () => Promise<EventBase>;
}
export interface EventNotificationBase extends Omit<EventBase, 'context'> {
    context?: StripeContext;
}
/**
 * Occurs when a Meter has invalid async usage events.
 */
export interface V1BillingMeterErrorReportTriggeredEvent extends EventBase {
    type: 'v1.billing.meter.error_report_triggered';
    data: V1BillingMeterErrorReportTriggeredEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<V1Billing.Meter>;
}
export interface V1BillingMeterErrorReportTriggeredEventNotification extends EventNotificationBase {
    type: 'v1.billing.meter.error_report_triggered';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<V1Billing.Meter>;
    fetchEvent(): Promise<V1BillingMeterErrorReportTriggeredEvent>;
}
export declare namespace V1BillingMeterErrorReportTriggeredEvent {
    interface Data {
        /**
         * Extra field included in the event's `data` when fetched from /v2/events.
         */
        developer_message_summary: string;
        /**
         * This contains information about why meter error happens.
         */
        reason: Data.Reason;
        /**
         * The end of the window that is encapsulated by this summary.
         */
        validation_end: string;
        /**
         * The start of the window that is encapsulated by this summary.
         */
        validation_start: string;
    }
    namespace Data {
        interface Reason {
            /**
             * The total error count within this window.
             */
            error_count: number;
            /**
             * The error details.
             */
            error_types: Array<Reason.ErrorType>;
        }
        namespace Reason {
            interface ErrorType {
                /**
                 * Open Enum.
                 */
                code: ErrorType.Code;
                /**
                 * The number of errors of this type.
                 */
                error_count: number;
                /**
                 * A list of sample errors of this type.
                 */
                sample_errors: Array<ErrorType.SampleError>;
            }
            namespace ErrorType {
                type Code = 'archived_meter' | 'meter_event_customer_not_found' | 'meter_event_dimension_count_too_high' | 'meter_event_invalid_value' | 'meter_event_no_customer_defined' | 'meter_event_value_too_many_digits' | 'missing_dimension_payload_keys' | 'no_meter' | 'timestamp_in_future' | 'timestamp_too_far_in_past';
                interface SampleError {
                    /**
                     * The error message.
                     */
                    error_message: string;
                    /**
                     * The request causes the error.
                     */
                    request: SampleError.Request;
                }
                namespace SampleError {
                    interface Request {
                        /**
                         * The request idempotency key.
                         */
                        identifier: string;
                    }
                }
            }
        }
    }
}
/**
 * Occurs when a Meter's id is missing or invalid in async usage events.
 */
export interface V1BillingMeterNoMeterFoundEvent extends EventBase {
    type: 'v1.billing.meter.no_meter_found';
    data: V1BillingMeterNoMeterFoundEvent.Data;
}
export interface V1BillingMeterNoMeterFoundEventNotification extends EventNotificationBase {
    type: 'v1.billing.meter.no_meter_found';
    fetchEvent(): Promise<V1BillingMeterNoMeterFoundEvent>;
}
export declare namespace V1BillingMeterNoMeterFoundEvent {
    interface Data {
        /**
         * Extra field included in the event's `data` when fetched from /v2/events.
         */
        developer_message_summary: string;
        /**
         * This contains information about why meter error happens.
         */
        reason: Data.Reason;
        /**
         * The end of the window that is encapsulated by this summary.
         */
        validation_end: string;
        /**
         * The start of the window that is encapsulated by this summary.
         */
        validation_start: string;
    }
    namespace Data {
        interface Reason {
            /**
             * The total error count within this window.
             */
            error_count: number;
            /**
             * The error details.
             */
            error_types: Array<Reason.ErrorType>;
        }
        namespace Reason {
            interface ErrorType {
                /**
                 * Open Enum.
                 */
                code: ErrorType.Code;
                /**
                 * The number of errors of this type.
                 */
                error_count: number;
                /**
                 * A list of sample errors of this type.
                 */
                sample_errors: Array<ErrorType.SampleError>;
            }
            namespace ErrorType {
                type Code = 'archived_meter' | 'meter_event_customer_not_found' | 'meter_event_dimension_count_too_high' | 'meter_event_invalid_value' | 'meter_event_no_customer_defined' | 'meter_event_value_too_many_digits' | 'missing_dimension_payload_keys' | 'no_meter' | 'timestamp_in_future' | 'timestamp_too_far_in_past';
                interface SampleError {
                    /**
                     * The error message.
                     */
                    error_message: string;
                    /**
                     * The request causes the error.
                     */
                    request: SampleError.Request;
                }
                namespace SampleError {
                    interface Request {
                        /**
                         * The request idempotency key.
                         */
                        identifier: string;
                    }
                }
            }
        }
    }
}
/**
 * Occurs when a product catalog import cannot be processed or if processing fails unexpectedly.
 */
export interface V2CommerceProductCatalogImportsFailedEvent extends EventBase {
    type: 'v2.commerce.product_catalog.imports.failed';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsFailedEventNotification extends EventNotificationBase {
    type: 'v2.commerce.product_catalog.imports.failed';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
    fetchEvent(): Promise<V2CommerceProductCatalogImportsFailedEvent>;
}
/**
 * Occurs when a product catalog import file has been uploaded and has started processing.
 */
export interface V2CommerceProductCatalogImportsProcessingEvent extends EventBase {
    type: 'v2.commerce.product_catalog.imports.processing';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsProcessingEventNotification extends EventNotificationBase {
    type: 'v2.commerce.product_catalog.imports.processing';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
    fetchEvent(): Promise<V2CommerceProductCatalogImportsProcessingEvent>;
}
/**
 * Occurs when a product catalog file has been uploaded successfully and passed validation.
 */
export interface V2CommerceProductCatalogImportsSucceededEvent extends EventBase {
    type: 'v2.commerce.product_catalog.imports.succeeded';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsSucceededEventNotification extends EventNotificationBase {
    type: 'v2.commerce.product_catalog.imports.succeeded';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
    fetchEvent(): Promise<V2CommerceProductCatalogImportsSucceededEvent>;
}
/**
 * Occurs when a product catalog file has been successfully processed but some rows failed validation.
 */
export interface V2CommerceProductCatalogImportsSucceededWithErrorsEvent extends EventBase {
    type: 'v2.commerce.product_catalog.imports.succeeded_with_errors';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
}
export interface V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification extends EventNotificationBase {
    type: 'v2.commerce.product_catalog.imports.succeeded_with_errors';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Commerce.ProductCatalogImport>;
    fetchEvent(): Promise<V2CommerceProductCatalogImportsSucceededWithErrorsEvent>;
}
/**
 * This event occurs when an account is closed.
 */
export interface V2CoreAccountClosedEvent extends EventBase {
    type: 'v2.core.account.closed';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountClosedEventNotification extends EventNotificationBase {
    type: 'v2.core.account.closed';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountClosedEvent>;
}
/**
 * Occurs when an Account is created.
 */
export interface V2CoreAccountCreatedEvent extends EventBase {
    type: 'v2.core.account.created';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountCreatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account.created';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountCreatedEvent>;
}
/**
 * Occurs when an Account is updated.
 */
export interface V2CoreAccountUpdatedEvent extends EventBase {
    type: 'v2.core.account.updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account.updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountUpdatedEvent>;
}
/**
 * Occurs when the status of an Account's customer configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent extends EventBase {
    type: 'v2.core.account[configuration.customer].capability_status_updated';
    data: V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[configuration.customer].capability_status_updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent>;
}
export declare namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
    interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: 'automatic_indirect_tax';
    }
}
/**
 * Occurs when an Account's customer configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEvent extends EventBase {
    type: 'v2.core.account[configuration.customer].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[configuration.customer].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingConfigurationCustomerUpdatedEvent>;
}
/**
 * Occurs when the status of an Account's merchant configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent extends EventBase {
    type: 'v2.core.account[configuration.merchant].capability_status_updated';
    data: V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[configuration.merchant].capability_status_updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent>;
}
export declare namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
    interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
    }
    namespace Data {
        type UpdatedCapability = 'ach_debit_payments' | 'acss_debit_payments' | 'affirm_payments' | 'afterpay_clearpay_payments' | 'alma_payments' | 'amazon_pay_payments' | 'au_becs_debit_payments' | 'bacs_debit_payments' | 'bancontact_payments' | 'blik_payments' | 'boleto_payments' | 'card_payments' | 'cartes_bancaires_payments' | 'cashapp_payments' | 'eps_payments' | 'fpx_payments' | 'gb_bank_transfer_payments' | 'grabpay_payments' | 'ideal_payments' | 'jcb_payments' | 'jp_bank_transfer_payments' | 'kakao_pay_payments' | 'klarna_payments' | 'konbini_payments' | 'kr_card_payments' | 'link_payments' | 'mobilepay_payments' | 'multibanco_payments' | 'mx_bank_transfer_payments' | 'naver_pay_payments' | 'oxxo_payments' | 'p24_payments' | 'payco_payments' | 'paynow_payments' | 'stripe_balance.payouts' | 'pay_by_bank_payments' | 'promptpay_payments' | 'revolut_pay_payments' | 'samsung_pay_payments' | 'sepa_bank_transfer_payments' | 'sepa_debit_payments' | 'sunbit_payments' | 'swish_payments' | 'twint_payments' | 'us_bank_transfer_payments' | 'zip_payments';
    }
}
/**
 * Occurs when an Account's merchant configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEvent extends EventBase {
    type: 'v2.core.account[configuration.merchant].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[configuration.merchant].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingConfigurationMerchantUpdatedEvent>;
}
/**
 * Occurs when the status of an Account's recipient configuration capability is updated.
 */
export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent extends EventBase {
    type: 'v2.core.account[configuration.recipient].capability_status_updated';
    data: V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[configuration.recipient].capability_status_updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent>;
}
export declare namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
    interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
    }
    namespace Data {
        type UpdatedCapability = 'bank_accounts.local' | 'bank_accounts.wire' | 'cards' | 'stripe_balance.payouts' | 'stripe_balance.stripe_transfers' | 'stripe.transfers';
    }
}
/**
 * Occurs when a Recipient's configuration is updated.
 */
export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEvent extends EventBase {
    type: 'v2.core.account[configuration.recipient].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[configuration.recipient].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingConfigurationRecipientUpdatedEvent>;
}
/**
 * This event occurs when account defaults are created or updated.
 */
export interface V2CoreAccountIncludingDefaultsUpdatedEvent extends EventBase {
    type: 'v2.core.account[defaults].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingDefaultsUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[defaults].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingDefaultsUpdatedEvent>;
}
/**
 * Occurs when an Account's future requirements are updated.
 */
export interface V2CoreAccountIncludingFutureRequirementsUpdatedEvent extends EventBase {
    type: 'v2.core.account[future_requirements].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[future_requirements].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingFutureRequirementsUpdatedEvent>;
}
/**
 * Occurs when an Identity is updated.
 */
export interface V2CoreAccountIncludingIdentityUpdatedEvent extends EventBase {
    type: 'v2.core.account[identity].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingIdentityUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[identity].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingIdentityUpdatedEvent>;
}
/**
 * Occurs when an Account's requirements are updated.
 */
export interface V2CoreAccountIncludingRequirementsUpdatedEvent extends EventBase {
    type: 'v2.core.account[requirements].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
}
export interface V2CoreAccountIncludingRequirementsUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account[requirements].updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.Account>;
    fetchEvent(): Promise<V2CoreAccountIncludingRequirementsUpdatedEvent>;
}
/**
 * Occurs when the generated AccountLink is completed.
 */
export interface V2CoreAccountLinkReturnedEvent extends EventBase {
    type: 'v2.core.account_link.returned';
    data: V2CoreAccountLinkReturnedEvent.Data;
}
export interface V2CoreAccountLinkReturnedEventNotification extends EventNotificationBase {
    type: 'v2.core.account_link.returned';
    fetchEvent(): Promise<V2CoreAccountLinkReturnedEvent>;
}
export declare namespace V2CoreAccountLinkReturnedEvent {
    interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
        /**
         * Configurations on the Account that was onboarded via the account link.
         */
        configurations: Array<Data.Configuration>;
        /**
         * Open Enum. The use case type of the account link that has been completed.
         */
        use_case: Data.UseCase;
    }
    namespace Data {
        type Configuration = 'customer' | 'merchant' | 'recipient';
        type UseCase = 'account_onboarding' | 'account_update';
    }
}
/**
 * Occurs when a Person is created.
 */
export interface V2CoreAccountPersonCreatedEvent extends EventBase {
    type: 'v2.core.account_person.created';
    data: V2CoreAccountPersonCreatedEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonCreatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account_person.created';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.AccountPerson>;
    fetchEvent(): Promise<V2CoreAccountPersonCreatedEvent>;
}
export declare namespace V2CoreAccountPersonCreatedEvent {
    interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
    }
}
/**
 * Occurs when a Person is deleted.
 */
export interface V2CoreAccountPersonDeletedEvent extends EventBase {
    type: 'v2.core.account_person.deleted';
    data: V2CoreAccountPersonDeletedEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonDeletedEventNotification extends EventNotificationBase {
    type: 'v2.core.account_person.deleted';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.AccountPerson>;
    fetchEvent(): Promise<V2CoreAccountPersonDeletedEvent>;
}
export declare namespace V2CoreAccountPersonDeletedEvent {
    interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
    }
}
/**
 * Occurs when a Person is updated.
 */
export interface V2CoreAccountPersonUpdatedEvent extends EventBase {
    type: 'v2.core.account_person.updated';
    data: V2CoreAccountPersonUpdatedEvent.Data;
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.AccountPerson>;
}
export interface V2CoreAccountPersonUpdatedEventNotification extends EventNotificationBase {
    type: 'v2.core.account_person.updated';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.AccountPerson>;
    fetchEvent(): Promise<V2CoreAccountPersonUpdatedEvent>;
}
export declare namespace V2CoreAccountPersonUpdatedEvent {
    interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
    }
}
/**
 * A ping event used to test the connection to an EventDestination.
 */
export interface V2CoreEventDestinationPingEvent extends EventBase {
    type: 'v2.core.event_destination.ping';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.EventDestination>;
}
export interface V2CoreEventDestinationPingEventNotification extends EventNotificationBase {
    type: 'v2.core.event_destination.ping';
    related_object: V2.Core.Events.RelatedObject;
    fetchRelatedObject(): Promise<Core.EventDestination>;
    fetchEvent(): Promise<V2CoreEventDestinationPingEvent>;
}
export declare namespace Events {
    export { UnknownEventNotification, V1BillingMeterErrorReportTriggeredEvent, V1BillingMeterNoMeterFoundEvent, V2CommerceProductCatalogImportsFailedEvent, V2CommerceProductCatalogImportsProcessingEvent, V2CommerceProductCatalogImportsSucceededEvent, V2CommerceProductCatalogImportsSucceededWithErrorsEvent, V2CoreAccountClosedEvent, V2CoreAccountCreatedEvent, V2CoreAccountUpdatedEvent, V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent, V2CoreAccountIncludingConfigurationCustomerUpdatedEvent, V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent, V2CoreAccountIncludingConfigurationMerchantUpdatedEvent, V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent, V2CoreAccountIncludingConfigurationRecipientUpdatedEvent, V2CoreAccountIncludingDefaultsUpdatedEvent, V2CoreAccountIncludingFutureRequirementsUpdatedEvent, V2CoreAccountIncludingIdentityUpdatedEvent, V2CoreAccountIncludingRequirementsUpdatedEvent, V2CoreAccountLinkReturnedEvent, V2CoreAccountPersonCreatedEvent, V2CoreAccountPersonDeletedEvent, V2CoreAccountPersonUpdatedEvent, V2CoreEventDestinationPingEvent, V1BillingMeterErrorReportTriggeredEventNotification, V1BillingMeterNoMeterFoundEventNotification, V2CommerceProductCatalogImportsFailedEventNotification, V2CommerceProductCatalogImportsProcessingEventNotification, V2CommerceProductCatalogImportsSucceededEventNotification, V2CommerceProductCatalogImportsSucceededWithErrorsEventNotification, V2CoreAccountClosedEventNotification, V2CoreAccountCreatedEventNotification, V2CoreAccountUpdatedEventNotification, V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification, V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification, V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification, V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification, V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification, V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification, V2CoreAccountIncludingDefaultsUpdatedEventNotification, V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification, V2CoreAccountIncludingIdentityUpdatedEventNotification, V2CoreAccountIncludingRequirementsUpdatedEventNotification, V2CoreAccountLinkReturnedEventNotification, V2CoreAccountPersonCreatedEventNotification, V2CoreAccountPersonDeletedEventNotification, V2CoreAccountPersonUpdatedEventNotification, V2CoreEventDestinationPingEventNotification, };
}
