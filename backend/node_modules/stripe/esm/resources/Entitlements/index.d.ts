import { Stripe } from '../../stripe.core.js';
import { Entitlements as EntitlementsNamespace0, ActiveEntitlement, ActiveEntitlementResource } from './ActiveEntitlements.js';
import { Entitlements as EntitlementsNamespace1, Feature, FeatureResource } from './Features.js';
import { ActiveEntitlementSummary } from './ActiveEntitlementSummaries.js';
export { ActiveEntitlement } from './ActiveEntitlements.js';
export { Feature } from './Features.js';
export { ActiveEntitlementSummary } from './ActiveEntitlementSummaries.js';
export declare class Entitlements {
    private readonly stripe;
    activeEntitlements: ActiveEntitlementResource;
    features: FeatureResource;
    constructor(stripe: Stripe);
}
export declare namespace Entitlements {
    export import ActiveEntitlementListParams = EntitlementsNamespace0.ActiveEntitlementListParams;
    export import ActiveEntitlementRetrieveParams = EntitlementsNamespace0.ActiveEntitlementRetrieveParams;
    export { ActiveEntitlement, ActiveEntitlementResource };
    export import FeatureListParams = EntitlementsNamespace1.FeatureListParams;
    export import FeatureCreateParams = EntitlementsNamespace1.FeatureCreateParams;
    export import FeatureRetrieveParams = EntitlementsNamespace1.FeatureRetrieveParams;
    export import FeatureUpdateParams = EntitlementsNamespace1.FeatureUpdateParams;
    export { Feature, FeatureResource };
    export { ActiveEntitlementSummary };
}
