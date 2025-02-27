/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DomainNotification
 */
export interface DomainNotification {
    /**
     * The date the notification was added
     * @type {string}
     * @memberof DomainNotification
     */
    'addedAt': string;
    /**
     * The notification data for the given type as specifed by GET /v2/customers/{customerId}/domains/notifications/schema
     * @type {object}
     * @memberof DomainNotification
     */
    'metadata'?: object;
    /**
     * The notification ID to be used in POST /v2/customers/{customerId}/domains/notifications to acknowledge the notification
     * @type {string}
     * @memberof DomainNotification
     */
    'notificationId': string;
    /**
     * A client provided identifier (via X-Request-Id header) indicating the request this notification is for
     * @type {string}
     * @memberof DomainNotification
     */
    'requestId'?: string;
    /**
     * The resource the notification pertains to.
     * @type {string}
     * @memberof DomainNotification
     */
    'resource': string;
    /**
     * The type of resource the notification relates to
     * @type {string}
     * @memberof DomainNotification
     */
    'resourceType': DomainNotificationResourceTypeEnum;
    /**
     * The resulting status of the action.
     * @type {string}
     * @memberof DomainNotification
     */
    'status': DomainNotificationStatusEnum;
    /**
     * The type of action the notification relates to
     * @type {string}
     * @memberof DomainNotification
     */
    'type': DomainNotificationTypeEnum;
}

type DomainNotificationResourceTypeEnum = 'CONTACT' | 'DOMAIN' | 'HOST'
type DomainNotificationStatusEnum = 'AWAITING' | 'CANCELLED' | 'FAILED' | 'PENDING' | 'SUCCESS'
type DomainNotificationTypeEnum = 'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'AUTO_RENEWAL' | 'BACKORDER' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'CONTACT_CREATE' | 'CONTACT_DELETE' | 'CONTACT_UPDATE' | 'DNS_VERIFICATION' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'EXPIRY' | 'HOST_CREATE' | 'HOST_DELETE' | 'ICANN_VERIFICATION' | 'MIGRATE' | 'MIGRATE_IN' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'


