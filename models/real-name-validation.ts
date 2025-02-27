/*


All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface RealNameValidation
 */
export interface RealNameValidation {
    /**
     * 
     * @type {string}
     * @memberof RealNameValidation
     */
    'status'?: RealNameValidationStatusEnum;
}

type RealNameValidationStatusEnum = 'APPROVED' | 'PENDING' | 'PENDING_ASSOCIATION_WITH_DOMAIN' | 'PENDING_SUBMISSION_TO_VERIFICATION_SERVICE' | 'PENDING_VERIFICATION_SERVICE_REPLY' | 'PENDING_SUBMISSION_TO_REGISTRY' | 'PENDING_REGISTRY_REPLY' | 'PENDING_DOMAIN_UPDATE' | 'REJECTED'


