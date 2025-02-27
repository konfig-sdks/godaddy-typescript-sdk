/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContactDomainCreate } from './contact-domain-create';

/**
 * 
 * @export
 * @interface DomainContactsCreateV2
 */
export interface DomainContactsCreateV2 {
    /**
     * 
     * @type {ContactDomainCreate}
     * @memberof DomainContactsCreateV2
     */
    'admin'?: ContactDomainCreate;
    /**
     * Unique identifier of the contact that the user wants to use for the domain admin contact. This can be specified instead of the `admin` property. 
     * @type {string}
     * @memberof DomainContactsCreateV2
     */
    'adminId'?: string;
    /**
     * 
     * @type {ContactDomainCreate}
     * @memberof DomainContactsCreateV2
     */
    'billing'?: ContactDomainCreate;
    /**
     * Unique identifier of the contact that the user wants to use for the domain billing contact. This can be specified instead of the `billing` property. 
     * @type {string}
     * @memberof DomainContactsCreateV2
     */
    'billingId'?: string;
    /**
     * 
     * @type {ContactDomainCreate}
     * @memberof DomainContactsCreateV2
     */
    'registrant'?: ContactDomainCreate;
    /**
     * Unique identifier of the contact that the user wants to use for the domain registrant contact. This can be specified instead of the `registrant` property. 
     * @type {string}
     * @memberof DomainContactsCreateV2
     */
    'registrantId'?: string;
    /**
     * 
     * @type {ContactDomainCreate}
     * @memberof DomainContactsCreateV2
     */
    'tech'?: ContactDomainCreate;
    /**
     * Unique identifier of the contact that the user wants to use for the domain tech contact. This can be specified instead of the `tech` property. 
     * @type {string}
     * @memberof DomainContactsCreateV2
     */
    'techId'?: string;
}

