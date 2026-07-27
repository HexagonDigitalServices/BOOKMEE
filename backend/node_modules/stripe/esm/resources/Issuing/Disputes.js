// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class DisputeResource extends StripeResource {
    /**
     * Returns a list of Issuing Dispute objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/issuing/disputes', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates an Issuing Dispute object. Individual pieces of evidence within the evidence object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to [Dispute reasons and evidence](https://docs.stripe.com/docs/issuing/purchases/disputes#dispute-reasons-and-evidence) for more details about evidence requirements.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/issuing/disputes', params, options);
    }
    /**
     * Retrieves an Issuing Dispute object.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/issuing/disputes/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the specified Issuing Dispute object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the evidence object can be unset by passing in an empty string.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/disputes/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Submits an Issuing Dispute to the card network. Stripe validates that all evidence fields required for the dispute's reason are present. For more details, see [Dispute reasons and evidence](https://docs.stripe.com/docs/issuing/purchases/disputes#dispute-reasons-and-evidence).
     */
    submit(id, params, options) {
        return this._makeRequest('POST', `/v1/issuing/disputes/${encodeURIComponent(id)}/submit`, params, options);
    }
}
//# sourceMappingURL=Disputes.js.map