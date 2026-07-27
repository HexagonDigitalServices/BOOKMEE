import { Stripe } from '../../stripe.core.js';
import { Identity as IdentityNamespace0, VerificationReport, VerificationReportResource } from './VerificationReports.js';
import { Identity as IdentityNamespace1, VerificationSession, VerificationSessionResource } from './VerificationSessions.js';
export { VerificationReport } from './VerificationReports.js';
export { VerificationSession } from './VerificationSessions.js';
export declare class Identity {
    private readonly stripe;
    verificationReports: VerificationReportResource;
    verificationSessions: VerificationSessionResource;
    constructor(stripe: Stripe);
}
export declare namespace Identity {
    export import VerificationReportListParams = IdentityNamespace0.VerificationReportListParams;
    export import VerificationReportRetrieveParams = IdentityNamespace0.VerificationReportRetrieveParams;
    export { VerificationReport, VerificationReportResource };
    export import VerificationSessionListParams = IdentityNamespace1.VerificationSessionListParams;
    export import VerificationSessionCreateParams = IdentityNamespace1.VerificationSessionCreateParams;
    export import VerificationSessionRetrieveParams = IdentityNamespace1.VerificationSessionRetrieveParams;
    export import VerificationSessionUpdateParams = IdentityNamespace1.VerificationSessionUpdateParams;
    export import VerificationSessionCancelParams = IdentityNamespace1.VerificationSessionCancelParams;
    export import VerificationSessionRedactParams = IdentityNamespace1.VerificationSessionRedactParams;
    export { VerificationSession, VerificationSessionResource };
}
