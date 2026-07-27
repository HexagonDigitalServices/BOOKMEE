// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
export class ApplicationFeeResource extends StripeResource {
    /**
     * Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/application_fees', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/application_fees/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
     */
    retrieveRefund(feeId, id, params, options) {
        return this._makeRequest('GET', `/v1/application_fees/${encodeURIComponent(feeId)}/refunds/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     *
     * This request only accepts metadata as an argument.
     */
    updateRefund(feeId, id, params, options) {
        return this._makeRequest('POST', `/v1/application_fees/${encodeURIComponent(feeId)}/refunds/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
     */
    listRefunds(id, params, options) {
        return this._makeRequest('GET', `/v1/application_fees/${encodeURIComponent(id)}/refunds`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Refunds an application fee that has previously been collected but not yet refunded.
     * Funds will be refunded to the Stripe account from which the fee was originally collected.
     *
     * You can optionally refund only part of an application fee.
     * You can do so multiple times, until the entire fee has been refunded.
     *
     * Once entirely refunded, an application fee can't be refunded again.
     * This method will raise an error when called on an already-refunded application fee,
     * or when trying to refund more money than is left on an application fee.
     */
    createRefund(id, params, options) {
        return this._makeRequest('POST', `/v1/application_fees/${encodeURIComponent(id)}/refunds`, params, options);
    }
}
//# sourceMappingURL=ApplicationFees.js.map