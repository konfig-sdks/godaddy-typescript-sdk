/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Contact } from './contact';
import { VerificationsDomain } from './verifications-domain';

/**
 * 
 * @export
 * @interface DomainDetail
 */
export interface DomainDetail {
    /**
     * Authorization code for transferring the Domain
     * @type {string}
     * @memberof DomainDetail
     */
    'authCode': string;
    /**
     * 
     * @type {Contact}
     * @memberof DomainDetail
     */
    'contactAdmin': Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainDetail
     */
    'contactBilling': Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainDetail
     */
    'contactRegistrant': Contact;
    /**
     * 
     * @type {Contact}
     * @memberof DomainDetail
     */
    'contactTech': Contact;
    /**
     * Date and time when this domain was created
     * @type {string}
     * @memberof DomainDetail
     */
    'createdAt': string;
    /**
     * Date and time when this domain was deleted
     * @type {string}
     * @memberof DomainDetail
     */
    'deletedAt'?: string;
    /**
     * Name of the domain
     * @type {string}
     * @memberof DomainDetail
     */
    'domain': string;
    /**
     * Unique identifier for this Domain
     * @type {number}
     * @memberof DomainDetail
     */
    'domainId': number;
    /**
     * Whether or not the domain is protected from expiration
     * @type {boolean}
     * @memberof DomainDetail
     */
    'expirationProtected': boolean;
    /**
     * Date and time when this domain will expire
     * @type {string}
     * @memberof DomainDetail
     */
    'expires'?: string;
    /**
     * Whether or not the domain contact details should be shown in the WHOIS
     * @type {boolean}
     * @memberof DomainDetail
     */
    'exposeWhois'?: boolean;
    /**
     * Whether or not the domain is on-hold by the registrar
     * @type {boolean}
     * @memberof DomainDetail
     */
    'holdRegistrar': boolean;
    /**
     * Whether or not the domain is locked to prevent transfers
     * @type {boolean}
     * @memberof DomainDetail
     */
    'locked': boolean;
    /**
     * Fully-qualified domain names for DNS servers
     * @type {Array<string>}
     * @memberof DomainDetail
     */
    'nameServers': Array<string>;
    /**
     * Whether or not the domain has privacy protection
     * @type {boolean}
     * @memberof DomainDetail
     */
    'privacy': boolean;
    /**
     * Date and time when this domain was created by the registrar
     * @type {string}
     * @memberof DomainDetail
     */
    'registrarCreatedAt'?: string;
    /**
     * Whether or not the domain is configured to automatically renew
     * @type {boolean}
     * @memberof DomainDetail
     */
    'renewAuto': boolean;
    /**
     * Date the domain must renew on
     * @type {string}
     * @memberof DomainDetail
     */
    'renewDeadline': string;
    /**
     * Processing status of the domain<br/><ul> <li><strong style=\'margin-left: 12px;\'>ACTIVE</strong> - All is well</li> <li><strong style=\'margin-left: 12px;\'>AWAITING*</strong> - System is waiting for the end-user to complete an action</li> <li><strong style=\'margin-left: 12px;\'>CANCELLED*</strong> - Domain has been cancelled, and may or may not be reclaimable</li> <li><strong style=\'margin-left: 12px;\'>CONFISCATED</strong> - Domain has been confiscated, usually for abuse, chargeback, or fraud</li> <li><strong style=\'margin-left: 12px;\'>DISABLED*</strong> - Domain has been disabled</li> <li><strong style=\'margin-left: 12px;\'>EXCLUDED*</strong> - Domain has been excluded from Firehose registration</li> <li><strong style=\'margin-left: 12px;\'>EXPIRED*</strong> - Domain has expired</li> <li><strong style=\'margin-left: 12px;\'>FAILED*</strong> - Domain has failed a required action, and the system is no longer retrying</li> <li><strong style=\'margin-left: 12px;\'>HELD*</strong> - Domain has been placed on hold, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>LOCKED*</strong> - Domain has been locked, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>PARKED*</strong> - Domain has been parked, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>PENDING*</strong> - Domain is working its way through an automated workflow</li> <li><strong style=\'margin-left: 12px;\'>RESERVED*</strong> - Domain is reserved, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>REVERTED</strong> - Domain has been reverted, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>SUSPENDED*</strong> - Domain has been suspended, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>TRANSFERRED*</strong> - Domain has been transferred out</li> <li><strong style=\'margin-left: 12px;\'>UNKNOWN</strong> - Domain is in an unknown state</li> <li><strong style=\'margin-left: 12px;\'>UNLOCKED*</strong> - Domain has been unlocked, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>UNPARKED*</strong> - Domain has been unparked, and likely requires intervention from Support</li> <li><strong style=\'margin-left: 12px;\'>UPDATED*</strong> - Domain ownership has been transferred to another account</li> </ul>
     * @type {string}
     * @memberof DomainDetail
     */
    'status': string;
    /**
     * Reseller subaccount shopperid who can manage the domain
     * @type {string}
     * @memberof DomainDetail
     */
    'subaccountId'?: string;
    /**
     * Date and time when this domain is eligible to transfer
     * @type {string}
     * @memberof DomainDetail
     */
    'transferAwayEligibleAt'?: string;
    /**
     * Whether or not the domain is protected from transfer
     * @type {boolean}
     * @memberof DomainDetail
     */
    'transferProtected': boolean;
    /**
     * 
     * @type {VerificationsDomain}
     * @memberof DomainDetail
     */
    'verifications'?: VerificationsDomain;
}

