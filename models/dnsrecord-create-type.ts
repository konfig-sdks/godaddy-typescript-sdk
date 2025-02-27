/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DNSRecordCreateType
 */
export interface DNSRecordCreateType {
    /**
     * 
     * @type {string}
     * @memberof DNSRecordCreateType
     */
    'data': string;
    /**
     * 
     * @type {string}
     * @memberof DNSRecordCreateType
     */
    'name': string;
    /**
     * Service port (SRV only)
     * @type {number}
     * @memberof DNSRecordCreateType
     */
    'port'?: number;
    /**
     * Record priority (MX and SRV only)
     * @type {number}
     * @memberof DNSRecordCreateType
     */
    'priority'?: number;
    /**
     * Service protocol (SRV only)
     * @type {string}
     * @memberof DNSRecordCreateType
     */
    'protocol'?: string;
    /**
     * Service type (SRV only)
     * @type {string}
     * @memberof DNSRecordCreateType
     */
    'service'?: string;
    /**
     * 
     * @type {number}
     * @memberof DNSRecordCreateType
     */
    'ttl'?: number;
    /**
     * Record weight (SRV only)
     * @type {number}
     * @memberof DNSRecordCreateType
     */
    'weight'?: number;
}

