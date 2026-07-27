// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
export class VerificationSessionResource extends StripeResource {
    /**
     * Returns a list of VerificationSessions
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/identity/verification_sessions', params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a VerificationSession object.
     *
     * After the VerificationSession is created, display a verification modal using the session client_secret or send your users to the session's url.
     *
     * If your API key is in test mode, verification checks won't actually process, though everything else will occur as if in live mode.
     *
     * Related guide: [Verify your users' identity documents](https://docs.stripe.com/docs/identity/verify-identity-documents)
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/identity/verification_sessions', params, options);
    }
    /**
     * Retrieves the details of a VerificationSession that was previously created.
     *
     * When the session status is requires_input, you can use this method to retrieve a valid
     * client_secret or url to allow re-submission.
     */
    retrieve(id, params, options) {
        return this._makeRequest('GET', `/v1/identity/verification_sessions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates a VerificationSession object.
     *
     * When the session status is requires_input, you can use this method to update the
     * verification check and options.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/identity/verification_sessions/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * A VerificationSession object can be canceled when it is in requires_input [status](https://docs.stripe.com/docs/identity/how-sessions-work).
     *
     * Once canceled, future submission attempts are disabled. This cannot be undone. [Learn more](https://docs.stripe.com/docs/identity/verification-sessions#cancel).
     */
    cancel(id, params, options) {
        return this._makeRequest('POST', `/v1/identity/verification_sessions/${encodeURIComponent(id)}/cancel`, params, options);
    }
    /**
     * Redact a VerificationSession to remove all collected information from Stripe. This will redact
     * the VerificationSession and all objects related to it, including VerificationReports, Events,
     * request logs, etc.
     *
     * A VerificationSession object can be redacted when it is in requires_input or verified
     * [status](https://docs.stripe.com/docs/identity/how-sessions-work). Redacting a VerificationSession in requires_action
     * state will automatically cancel it.
     *
     * The redaction process may take up to four days. When the redaction process is in progress, the
     * VerificationSession's redaction.status field will be set to processing; when the process is
     * finished, it will change to redacted and an identity.verification_session.redacted event
     * will be emitted.
     *
     * Redaction is irreversible. Redacted objects are still accessible in the Stripe API, but all the
     * fields that contain personal data will be replaced by the string [redacted] or a similar
     * placeholder. The metadata field will also be erased. Redacted objects cannot be updated or
     * used for any purpose.
     *
     * [Learn more](https://docs.stripe.com/docs/identity/verification-sessions#redact).
     */
    redact(id, params, options) {
        return this._makeRequest('POST', `/v1/identity/verification_sessions/${encodeURIComponent(id)}/redact`, params, options);
    }
}
//# sourceMappingURL=VerificationSessions.js.map