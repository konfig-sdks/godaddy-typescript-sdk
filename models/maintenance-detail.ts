/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MaintenanceSystem } from './maintenance-system';

/**
 * 
 * @export
 * @interface MaintenanceDetail
 */
export interface MaintenanceDetail {
    /**
     * A brief description of what is being performed
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'summary': string;
    /**
     * Date and time (UTC) when this maintenance was created
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'createdAt': string;
    /**
     * Date and time (UTC) when this maintenance will complete
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'endsAt': string;
    /**
     * The environment on which the maintenance will be performed<br/><ul><li><strong style=\'margin-left: 12px;\'>OTE</strong> - The Operational Testing Environment.</li><li><strong style=\'margin-left: 12px;\'>PRODUCTION</strong> - The Live Production Environment.</li></ul>
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'environment': MaintenanceDetailEnvironmentEnum;
    /**
     * The identifier for the system maintenance
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'maintenanceId': string;
    /**
     * Date and time (UTC) when this maintenance was last modified
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'modifiedAt': string;
    /**
     * The reason for the maintenance being performed<br/><ul><li><strong style=\'margin-left: 12px;\'>EMERGENCY</strong> - Unexpected Emergency maintenance.</li><li><strong style=\'margin-left: 12px;\'>PLANNED</strong> - Planned system maintenance.</li></ul>
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'reason': MaintenanceDetailReasonEnum;
    /**
     * Date and time (UTC) when this maintenance will start
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'startsAt': string;
    /**
     * The status of maintenance<br/><ul><li><strong style=\'margin-left: 12px;\'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style=\'margin-left: 12px;\'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'status': MaintenanceDetailStatusEnum;
    /**
     * List of systems that are impacted by the maintenance.
     * @type {Array<MaintenanceSystem>}
     * @memberof MaintenanceDetail
     */
    'systems'?: Array<MaintenanceSystem>;
    /**
     * List of tlds that are in maintenance.  Generally only applies when `type` is REGISTRY
     * @type {Array<string>}
     * @memberof MaintenanceDetail
     */
    'tlds'?: Array<string>;
    /**
     * The type of maintenance being performed<br/><ul><li><strong style=\'margin-left: 12px;\'>API</strong> - Programmatic Api components.</li><li><strong style=\'margin-left: 12px;\'>REGISTRY</strong> - The underlying Registry providing the tld(s).</li><li><strong style=\'margin-left: 12px;\'>UI</strong> - User Interface components.</li></ul>
     * @type {string}
     * @memberof MaintenanceDetail
     */
    'type': MaintenanceDetailTypeEnum;
}

type MaintenanceDetailEnvironmentEnum = 'OTE' | 'PRODUCTION'
type MaintenanceDetailReasonEnum = 'EMERGENCY' | 'PLANNED'
type MaintenanceDetailStatusEnum = 'ACTIVE' | 'CANCELLED'
type MaintenanceDetailTypeEnum = 'API' | 'REGISTRY' | 'UI'


