/* tslint:disable */
/* eslint-disable */
/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Action } from '../models';
// @ts-ignore
import { ErrorLimit } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ActionsApi - axios parameter creator
 * @export
 */
export const ActionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancel the most recent user action for the specified domain
         * @param {string} customerId The Customer identifier&lt;br/&gt; Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\&#39;re operating on behalf of; otherwise use your shopper id.
         * @param {string} domain Domain whose action is to be cancelled
         * @param {'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'MIGRATE' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'} type The type of action to cancel
         * @param {string} [xRequestId] A client provided identifier for tracking this request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelRecentAction: async (customerId: string, domain: string, type: 'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'MIGRATE' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT', xRequestId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('cancelRecentAction', 'customerId', customerId)
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('cancelRecentAction', 'domain', domain)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('cancelRecentAction', 'type', type)
            const localVarPath = `/v2/customers/{customerId}/domains/{domain}/actions/{type}`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"domain"}}`, encodeURIComponent(String(domain !== undefined ? domain : `-domain-`)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type !== undefined ? type : `-type-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "apiKey", keyParamName: "apiKey", configuration })
            // authentication apiSecret required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "apiSecret", keyParamName: "apiSecret", configuration })
            if (xRequestId != null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/customers/{customerId}/domains/{domain}/actions/{type}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves the most recent action for the specified domain
         * @param {string} customerId The Customer identifier&lt;br/&gt; Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\&#39;re operating on behalf of; otherwise use your shopper id.
         * @param {string} domain Domain whose action is to be retrieved
         * @param {'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'AUTO_RENEWAL' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNS_VERIFICATION' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'EXPIRY' | 'ICANN_VERIFICATION' | 'MIGRATE' | 'MIGRATE_IN' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'} type The type of action to retrieve
         * @param {string} [xRequestId] A client provided identifier for tracking this request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentAction: async (customerId: string, domain: string, type: 'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'AUTO_RENEWAL' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNS_VERIFICATION' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'EXPIRY' | 'ICANN_VERIFICATION' | 'MIGRATE' | 'MIGRATE_IN' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT', xRequestId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('getRecentAction', 'customerId', customerId)
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('getRecentAction', 'domain', domain)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('getRecentAction', 'type', type)
            const localVarPath = `/v2/customers/{customerId}/domains/{domain}/actions/{type}`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"domain"}}`, encodeURIComponent(String(domain !== undefined ? domain : `-domain-`)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type !== undefined ? type : `-type-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "apiKey", keyParamName: "apiKey", configuration })
            // authentication apiSecret required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "apiSecret", keyParamName: "apiSecret", configuration })
            if (xRequestId != null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/customers/{customerId}/domains/{domain}/actions/{type}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieves a list of the most recent actions for the specified domain
         * @param {string} customerId The Customer identifier&lt;br/&gt; Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\&#39;re operating on behalf of; otherwise use your shopper id.
         * @param {string} domain Domain whose actions are to be retrieved
         * @param {string} [xRequestId] A client provided identifier for tracking this request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentList: async (customerId: string, domain: string, xRequestId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customerId' is not null or undefined
            assertParamExists('getRecentList', 'customerId', customerId)
            // verify required parameter 'domain' is not null or undefined
            assertParamExists('getRecentList', 'domain', domain)
            const localVarPath = `/v2/customers/{customerId}/domains/{domain}/actions`
                .replace(`{${"customerId"}}`, encodeURIComponent(String(customerId !== undefined ? customerId : `-customerId-`)))
                .replace(`{${"domain"}}`, encodeURIComponent(String(domain !== undefined ? domain : `-domain-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "apiKey", keyParamName: "apiKey", configuration })
            // authentication apiSecret required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "apiSecret", keyParamName: "apiSecret", configuration })
            if (xRequestId != null) {
                localVarHeaderParameter['X-Request-Id'] = String(xRequestId);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/customers/{customerId}/domains/{domain}/actions',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ActionsApi - functional programming interface
 * @export
 */
export const ActionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ActionsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Cancel the most recent user action for the specified domain
         * @param {ActionsApiCancelRecentActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelRecentAction(requestParameters: ActionsApiCancelRecentActionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelRecentAction(requestParameters.customerId, requestParameters.domain, requestParameters.type, requestParameters.xRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves the most recent action for the specified domain
         * @param {ActionsApiGetRecentActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecentAction(requestParameters: ActionsApiGetRecentActionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Action>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentAction(requestParameters.customerId, requestParameters.domain, requestParameters.type, requestParameters.xRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieves a list of the most recent actions for the specified domain
         * @param {ActionsApiGetRecentListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecentList(requestParameters: ActionsApiGetRecentListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Action>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecentList(requestParameters.customerId, requestParameters.domain, requestParameters.xRequestId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ActionsApi - factory interface
 * @export
 */
export const ActionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ActionsApiFp(configuration)
    return {
        /**
         * 
         * @summary Cancel the most recent user action for the specified domain
         * @param {ActionsApiCancelRecentActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelRecentAction(requestParameters: ActionsApiCancelRecentActionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.cancelRecentAction(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves the most recent action for the specified domain
         * @param {ActionsApiGetRecentActionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentAction(requestParameters: ActionsApiGetRecentActionRequest, options?: AxiosRequestConfig): AxiosPromise<Action> {
            return localVarFp.getRecentAction(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieves a list of the most recent actions for the specified domain
         * @param {ActionsApiGetRecentListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecentList(requestParameters: ActionsApiGetRecentListRequest, options?: AxiosRequestConfig): AxiosPromise<Array<Action>> {
            return localVarFp.getRecentList(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for cancelRecentAction operation in ActionsApi.
 * @export
 * @interface ActionsApiCancelRecentActionRequest
 */
export type ActionsApiCancelRecentActionRequest = {
    
    /**
    * The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.
    * @type {string}
    * @memberof ActionsApiCancelRecentAction
    */
    readonly customerId: string
    
    /**
    * Domain whose action is to be cancelled
    * @type {string}
    * @memberof ActionsApiCancelRecentAction
    */
    readonly domain: string
    
    /**
    * The type of action to cancel
    * @type {'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'MIGRATE' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'}
    * @memberof ActionsApiCancelRecentAction
    */
    readonly type: 'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'MIGRATE' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'
    
    /**
    * A client provided identifier for tracking this request.
    * @type {string}
    * @memberof ActionsApiCancelRecentAction
    */
    readonly xRequestId?: string
    
}

/**
 * Request parameters for getRecentAction operation in ActionsApi.
 * @export
 * @interface ActionsApiGetRecentActionRequest
 */
export type ActionsApiGetRecentActionRequest = {
    
    /**
    * The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.
    * @type {string}
    * @memberof ActionsApiGetRecentAction
    */
    readonly customerId: string
    
    /**
    * Domain whose action is to be retrieved
    * @type {string}
    * @memberof ActionsApiGetRecentAction
    */
    readonly domain: string
    
    /**
    * The type of action to retrieve
    * @type {'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'AUTO_RENEWAL' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNS_VERIFICATION' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'EXPIRY' | 'ICANN_VERIFICATION' | 'MIGRATE' | 'MIGRATE_IN' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'}
    * @memberof ActionsApiGetRecentAction
    */
    readonly type: 'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'AUTO_RENEWAL' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNS_VERIFICATION' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'EXPIRY' | 'ICANN_VERIFICATION' | 'MIGRATE' | 'MIGRATE_IN' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'
    
    /**
    * A client provided identifier for tracking this request.
    * @type {string}
    * @memberof ActionsApiGetRecentAction
    */
    readonly xRequestId?: string
    
}

/**
 * Request parameters for getRecentList operation in ActionsApi.
 * @export
 * @interface ActionsApiGetRecentListRequest
 */
export type ActionsApiGetRecentListRequest = {
    
    /**
    * The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.
    * @type {string}
    * @memberof ActionsApiGetRecentList
    */
    readonly customerId: string
    
    /**
    * Domain whose actions are to be retrieved
    * @type {string}
    * @memberof ActionsApiGetRecentList
    */
    readonly domain: string
    
    /**
    * A client provided identifier for tracking this request.
    * @type {string}
    * @memberof ActionsApiGetRecentList
    */
    readonly xRequestId?: string
    
}

/**
 * ActionsApiGenerated - object-oriented interface
 * @export
 * @class ActionsApiGenerated
 * @extends {BaseAPI}
 */
export class ActionsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Cancel the most recent user action for the specified domain
     * @param {ActionsApiCancelRecentActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiGenerated
     */
    public cancelRecentAction(requestParameters: ActionsApiCancelRecentActionRequest, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration).cancelRecentAction(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves the most recent action for the specified domain
     * @param {ActionsApiGetRecentActionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiGenerated
     */
    public getRecentAction(requestParameters: ActionsApiGetRecentActionRequest, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration).getRecentAction(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieves a list of the most recent actions for the specified domain
     * @param {ActionsApiGetRecentListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ActionsApiGenerated
     */
    public getRecentList(requestParameters: ActionsApiGetRecentListRequest, options?: AxiosRequestConfig) {
        return ActionsApiFp(this.configuration).getRecentList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
