"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
class AccountResource extends StripeResource_js_1.StripeResource {
    /**
     * With [Connect](https://docs.stripe.com/connect), you can delete accounts you manage.
     *
     * Test-mode accounts can be deleted at any time.
     *
     * Live-mode accounts that have access to the standard dashboard and Stripe is responsible for negative account balances cannot be deleted, which includes Standard accounts. All other Live-mode accounts, can be deleted when all [balances](https://docs.stripe.com/api/balance/balance_object) are zero.
     *
     * If you want to delete your own account, use the [account information tab in your account settings](https://dashboard.stripe.com/settings/account) instead.
     */
    del(id, params, options) {
        return this._makeRequest('DELETE', `/v1/accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the details of an account. Pass `null` as the account id to retrieve details about your own account.
     */
    retrieve(id, params, options) {
        if (typeof id === 'string') {
            return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(id)}`, params, options);
        }
        else {
            return this._makeRequest('GET', '/v1/account', params, options);
        }
    }
    /**
     * Updates a [connected account](https://docs.stripe.com/connect/accounts) by setting the values of the parameters passed. Any parameters not provided are
     * left unchanged.
     *
     * For accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection)
     * is application, which includes Custom accounts, you can update any information on the account.
     *
     * For accounts where [controller.requirement_collection](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection)
     * is stripe, which includes Standard and Express accounts, you can update all information until you create
     * an [Account Link or <a href="/api/account_sessions">Account Session](https://docs.stripe.com/api/account_links) to start Connect onboarding,
     * after which some properties can no longer be updated.
     *
     * To update your own account, use the [Dashboard](https://dashboard.stripe.com/settings/account). Refer to our
     * [Connect](https://docs.stripe.com/docs/connect/updating-accounts) documentation to learn more about updating accounts.
     */
    update(id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves the details of an account.
     */
    retrieveCurrent(params, options) {
        return this._makeRequest('GET', '/v1/account', params, options);
    }
    /**
     * Returns a list of accounts connected to your platform via [Connect](https://docs.stripe.com/docs/connect). If you're not a platform, the list is empty.
     */
    list(params, options) {
        return this._makeRequest('GET', '/v1/accounts', params, options, {
            methodType: 'list',
        });
    }
    /**
     * With [Connect](https://docs.stripe.com/docs/connect), you can create Stripe accounts for your users.
     * To do this, you'll first need to [register your platform](https://dashboard.stripe.com/account/applications/settings).
     *
     * If you've already collected information for your connected accounts, you [can prefill that information](https://docs.stripe.com/docs/connect/best-practices#onboarding) when
     * creating the account. Connect Onboarding won't ask for the prefilled information during account onboarding.
     * You can prefill any information on the account.
     */
    create(params, options) {
        return this._makeRequest('POST', '/v1/accounts', params, options);
    }
    /**
     * With [Connect](https://docs.stripe.com/connect), you can reject accounts that you have flagged as suspicious.
     *
     * Only accounts where your platform is liable for negative account balances, which includes Custom and Express accounts, can be rejected. Test-mode accounts can be rejected at any time. Live-mode accounts can only be rejected after all balances are zero.
     */
    reject(id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(id)}/reject`, params, options);
    }
    /**
     * Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.
     */
    listCapabilities(id, params, options) {
        return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(id)}/capabilities`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Retrieves information about the specified Account Capability.
     */
    retrieveCapability(accountId, id, params, options) {
        return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(accountId)}/capabilities/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing Account Capability. Request or remove a capability by updating its requested parameter.
     */
    updateCapability(accountId, id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(accountId)}/capabilities/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Delete a specified external account for a given account.
     */
    deleteExternalAccount(accountId, id, params, options) {
        return this._makeRequest('DELETE', `/v1/accounts/${encodeURIComponent(accountId)}/external_accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieve a specified external account for a given account.
     */
    retrieveExternalAccount(accountId, id, params, options) {
        return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(accountId)}/external_accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates the metadata, account holder name, account holder type of a bank account belonging to
     * a connected account and optionally sets it as the default for its currency. Other bank account
     * details are not editable by design.
     *
     * You can only update bank accounts when [account.controller.requirement_collection is application, which includes <a href="/connect/custom-accounts">Custom accounts](https://docs.stripe.com/api/accounts/object#account_object-controller-requirement_collection).
     *
     * You can re-enable a disabled bank account by performing an update call without providing any
     * arguments or changes.
     */
    updateExternalAccount(accountId, id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(accountId)}/external_accounts/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * List external accounts for an account.
     */
    listExternalAccounts(id, params, options) {
        return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(id)}/external_accounts`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Create an external account for a given account.
     */
    createExternalAccount(id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(id)}/external_accounts`, params, options);
    }
    /**
     * Creates a login link for a connected account to access the Express Dashboard.
     *
     * You can only create login links for accounts that use the [Express Dashboard](https://docs.stripe.com/connect/express-dashboard) and are connected to your platform.
     */
    createLoginLink(id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(id)}/login_links`, params, options);
    }
    /**
     * Deletes an existing person's relationship to the account's legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the account_opener. If your integration is using the executive parameter, you cannot delete the only verified executive on file.
     */
    deletePerson(accountId, id, params, options) {
        return this._makeRequest('DELETE', `/v1/accounts/${encodeURIComponent(accountId)}/persons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Retrieves an existing person.
     */
    retrievePerson(accountId, id, params, options) {
        return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(accountId)}/persons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Updates an existing person.
     */
    updatePerson(accountId, id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(accountId)}/persons/${encodeURIComponent(id)}`, params, options);
    }
    /**
     * Returns a list of people associated with the account's legal entity. The people are returned sorted by creation date, with the most recent people appearing first.
     */
    listPersons(id, params, options) {
        return this._makeRequest('GET', `/v1/accounts/${encodeURIComponent(id)}/persons`, params, options, {
            methodType: 'list',
        });
    }
    /**
     * Creates a new person.
     */
    createPerson(id, params, options) {
        return this._makeRequest('POST', `/v1/accounts/${encodeURIComponent(id)}/persons`, params, options);
    }
}
exports.AccountResource = AccountResource;
//# sourceMappingURL=Accounts.js.map