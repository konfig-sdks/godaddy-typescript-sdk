/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Contact } from './contact';

/**
 * 
 * @export
 * @interface DomainContacts
 */
export interface DomainContacts {
    /**
     * 
     * @type {Contact}
     * @memberof DomainContacts
     */
    'contactAdmin'?: Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainContacts
     */
    'contactBilling'?: Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainContacts
     */
    'contactRegistrant': Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainContacts
     */
    'contactTech'?: Contact;
}

