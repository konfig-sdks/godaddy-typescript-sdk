/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ConsentV2 } from './consent-v2';
import { DomainContactsCreateV2 } from './domain-contacts-create-v2';

/**
 * 
 * @export
 * @interface DomainTransferInV2
 */
export interface DomainTransferInV2 {
    /**
     * Authorization code from registrar for transferring a domain
     * @type {string}
     * @memberof DomainTransferInV2
     */
    'authCode': string;
    /**
     * 
     * @type {ConsentV2}
     * @memberof DomainTransferInV2
     */
    'consent': ConsentV2;
    /**
     * 
     * @type {DomainContactsCreateV2}
     * @memberof DomainTransferInV2
     */
    'contacts'?: DomainContactsCreateV2;
    /**
     * Unique identifier of the identify document that the user wants to associate with the domain being transferred in. This is required only if the gaining registry has a requirement for an approved identity document
     * @type {string}
     * @memberof DomainTransferInV2
     */
    'identityDocumentId'?: string;
    /**
     * The domain eligibility data fields as specified by GET /v2/customers/{customerId}/domains/register/schema/{tld}
     * @type {object}
     * @memberof DomainTransferInV2
     */
    'metadata'?: object;
    /**
     * Can be more than 1 but no more than 10 years total including current registration length
     * @type {number}
     * @memberof DomainTransferInV2
     */
    'period'?: number;
    /**
     * Whether or not privacy has been requested
     * @type {boolean}
     * @memberof DomainTransferInV2
     */
    'privacy'?: boolean;
    /**
     * Whether or not the domain should be configured to automatically renew
     * @type {boolean}
     * @memberof DomainTransferInV2
     */
    'renewAuto'?: boolean;
}

