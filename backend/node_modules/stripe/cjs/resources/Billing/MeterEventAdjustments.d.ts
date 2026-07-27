import { StripeResource } from '../../StripeResource.js';
import { RequestOptions, Response } from '../../lib.js';
export declare class MeterEventAdjustmentResource extends StripeResource {
    /**
     * Creates a billing meter event adjustment.
     */
    create(params: Billing.MeterEventAdjustmentCreateParams, options?: RequestOptions): Promise<Response<MeterEventAdjustment>>;
}
export interface MeterEventAdjustment {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'billing.meter_event_adjustment';
    /**
     * Specifies which event to cancel.
     */
    cancel: MeterEventAdjustment.Cancel | null;
    /**
     * The name of the meter event. Corresponds with the `event_name` field on a meter.
     */
    event_name: string;
    /**
     * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
     */
    livemode: boolean;
    /**
     * The meter event adjustment's status.
     */
    status: MeterEventAdjustment.Status;
    /**
     * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
     */
    type: 'cancel';
}
export declare namespace MeterEventAdjustment {
    interface Cancel {
        /**
         * Unique identifier for the event.
         */
        identifier: string | null;
    }
    type Status = 'complete' | 'pending';
}
export declare namespace Billing {
    interface MeterEventAdjustmentCreateParams {
        /**
         * The name of the meter event. Corresponds with the `event_name` field on a meter.
         */
        event_name: string;
        /**
         * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
         */
        type: 'cancel';
        /**
         * Specifies which event to cancel.
         */
        cancel?: MeterEventAdjustmentCreateParams.Cancel;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
    namespace MeterEventAdjustmentCreateParams {
        interface Cancel {
            /**
             * Unique identifier for the event. You can only cancel events within 24 hours of Stripe receiving them.
             */
            identifier?: string;
        }
    }
}
