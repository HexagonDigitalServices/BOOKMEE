import { Stripe } from '../../stripe.core.js';
import { Reporting as ReportingNamespace0, ReportRun, ReportRunResource } from './ReportRuns.js';
import { Reporting as ReportingNamespace1, ReportType, ReportTypeResource } from './ReportTypes.js';
export { ReportRun } from './ReportRuns.js';
export { ReportType } from './ReportTypes.js';
export declare class Reporting {
    private readonly stripe;
    reportRuns: ReportRunResource;
    reportTypes: ReportTypeResource;
    constructor(stripe: Stripe);
}
export declare namespace Reporting {
    export import ReportRunListParams = ReportingNamespace0.ReportRunListParams;
    export import ReportRunCreateParams = ReportingNamespace0.ReportRunCreateParams;
    export import ReportRunRetrieveParams = ReportingNamespace0.ReportRunRetrieveParams;
    export { ReportRun, ReportRunResource };
    export import ReportTypeListParams = ReportingNamespace1.ReportTypeListParams;
    export import ReportTypeRetrieveParams = ReportingNamespace1.ReportTypeRetrieveParams;
    export { ReportType, ReportTypeResource };
}
