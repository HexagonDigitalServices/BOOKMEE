import { Stripe } from '../../../stripe.core.js';
import { V2 as V2Namespace0, MeterEvent, MeterEventResource } from './MeterEvents.js';
import { V2 as V2Namespace1, MeterEventAdjustment, MeterEventAdjustmentResource } from './MeterEventAdjustments.js';
import { V2 as V2Namespace2, MeterEventSession, MeterEventSessionResource } from './MeterEventSession.js';
import { MeterEventStreamResource } from './MeterEventStream.js';
export { MeterEvent } from './MeterEvents.js';
export { MeterEventAdjustment } from './MeterEventAdjustments.js';
export { MeterEventSession } from './MeterEventSession.js';
export declare class Billing {
    private readonly stripe;
    meterEvents: MeterEventResource;
    meterEventAdjustments: MeterEventAdjustmentResource;
    meterEventSession: MeterEventSessionResource;
    meterEventStream: MeterEventStreamResource;
    constructor(stripe: Stripe);
}
export declare namespace Billing {
    export import MeterEventCreateParams = V2Namespace0.Billing.MeterEventCreateParams;
    export { MeterEvent, MeterEventResource };
    export import MeterEventAdjustmentCreateParams = V2Namespace1.Billing.MeterEventAdjustmentCreateParams;
    export { MeterEventAdjustment, MeterEventAdjustmentResource };
    export import MeterEventSessionCreateParams = V2Namespace2.Billing.MeterEventSessionCreateParams;
    export { MeterEventSession, MeterEventSessionResource };
}
