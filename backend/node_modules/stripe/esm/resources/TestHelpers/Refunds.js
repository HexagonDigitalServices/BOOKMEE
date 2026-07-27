// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class RefundResource extends StripeResource {
    /**
     * Expire a refund with a status of requires_action.
     */
    expire(id, params, options) {
        return this._makeRequest('POST', `/v1/test_helpers/refunds/${encodeURIComponent(id)}/expire`, params, options);
    }
}
//# sourceMappingURL=Refunds.js.map