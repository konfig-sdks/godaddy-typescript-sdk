/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Consent } from './consent';
import { Contact } from './contact';

/**
 * 
 * @export
 * @interface DomainTransferIn
 */
export interface DomainTransferIn {
    /**
     * Authorization code from registrar for transferring a domain
     * @type {string}
     * @memberof DomainTransferIn
     */
    'authCode': string;
    /**
     * 
     * @type {Consent}
     * @memberof DomainTransferIn
     */
    'consent': Consent;
    /**
     * 
     * @type {Contact}
     * @memberof DomainTransferIn
     */
    'contactAdmin'?: Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainTransferIn
     */
    'contactBilling'?: Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainTransferIn
     */
    'contactRegistrant'?: Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainTransferIn
     */
    'contactTech'?: Contact;
    /**
     * Can be more than 1 but no more than 10 years total including current registration length
     * @type {number}
     * @memberof DomainTransferIn
     */
    'period'?: number;
    /**
     * Whether or not privacy has been requested
     * @type {boolean}
     * @memberof DomainTransferIn
     */
    'privacy'?: boolean;
    /**
     * Whether or not the domain should be configured to automatically renew
     * @type {boolean}
     * @memberof DomainTransferIn
     */
    'renewAuto'?: boolean;
}

