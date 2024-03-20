<div align="left">

[![Visit Godaddy](./header.png)](https://developer.godaddy.com)

# [Godaddy](https://developer.godaddy.com)<a id="godaddy"></a>

All the help and tools you need to grow online: Websites, Domains, Digital and Social Marketing - plus GoDaddy Guides with you every step of the way.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`godaddy.actions.cancelRecentAction`](#godaddyactionscancelrecentaction)
  * [`godaddy.actions.getRecentAction`](#godaddyactionsgetrecentaction)
  * [`godaddy.actions.getRecentList`](#godaddyactionsgetrecentlist)
  * [`godaddy.domains.acceptTransferIn`](#godaddydomainsaccepttransferin)
  * [`godaddy.domains.acceptTransferOut`](#godaddydomainsaccepttransferout)
  * [`godaddy.domains.cancelForwardingRequest`](#godaddydomainscancelforwardingrequest)
  * [`godaddy.domains.cancelTransferIn`](#godaddydomainscanceltransferin)
  * [`godaddy.domains.createForwardingConfiguration`](#godaddydomainscreateforwardingconfiguration)
  * [`godaddy.domains.getDetails`](#godaddydomainsgetdetails)
  * [`godaddy.domains.getForwardingInfo`](#godaddydomainsgetforwardinginfo)
  * [`godaddy.domains.getRegisterSchema`](#godaddydomainsgetregisterschema)
  * [`godaddy.domains.getUpcomingMaintenanceDetails`](#godaddydomainsgetupcomingmaintenancedetails)
  * [`godaddy.domains.getUpcomingMaintenancesList`](#godaddydomainsgetupcomingmaintenanceslist)
  * [`godaddy.domains.initiateTransferOut`](#godaddydomainsinitiatetransferout)
  * [`godaddy.domains.modifyForwardingInfo`](#godaddydomainsmodifyforwardinginfo)
  * [`godaddy.domains.purchaseRegisterDomain`](#godaddydomainspurchaseregisterdomain)
  * [`godaddy.domains.purchaseTransferProcess`](#godaddydomainspurchasetransferprocess)
  * [`godaddy.domains.redeemDomainRestore`](#godaddydomainsredeemdomainrestore)
  * [`godaddy.domains.rejectTransferOut`](#godaddydomainsrejecttransferout)
  * [`godaddy.domains.renewDomain`](#godaddydomainsrenewdomain)
  * [`godaddy.domains.restartTransferIn`](#godaddydomainsrestarttransferin)
  * [`godaddy.domains.retryTransferInProcess`](#godaddydomainsretrytransferinprocess)
  * [`godaddy.domains.validateDomainRegistration`](#godaddydomainsvalidatedomainregistration)
  * [`godaddy.notifications.acknowledgeDomainNotification`](#godaddynotificationsacknowledgedomainnotification)
  * [`godaddy.notifications.getNextDomain`](#godaddynotificationsgetnextdomain)
  * [`godaddy.notifications.getSchema`](#godaddynotificationsgetschema)
  * [`godaddy.notifications.listOptedInTypes`](#godaddynotificationslistoptedintypes)
  * [`godaddy.notifications.optInNotifications`](#godaddynotificationsoptinnotifications)
  * [`godaddy.v1.addDnsRecordsToDomain`](#godaddyv1adddnsrecordstodomain)
  * [`godaddy.v1.cancelDomainPurchase`](#godaddyv1canceldomainpurchase)
  * [`godaddy.v1.cancelPrivacyRequest`](#godaddyv1cancelprivacyrequest)
  * [`godaddy.v1.checkDomainAvailability`](#godaddyv1checkdomainavailability)
  * [`godaddy.v1.checkDomainAvailabilityPost`](#godaddyv1checkdomainavailabilitypost)
  * [`godaddy.v1.createDomainPurchase`](#godaddyv1createdomainpurchase)
  * [`godaddy.v1.deleteAllDnsRecords`](#godaddyv1deletealldnsrecords)
  * [`godaddy.v1.getDnsRecords`](#godaddyv1getdnsrecords)
  * [`godaddy.v1.getDomainDetails`](#godaddyv1getdomaindetails)
  * [`godaddy.v1.getDomainSchema`](#godaddyv1getdomainschema)
  * [`godaddy.v1.getDomainsList`](#godaddyv1getdomainslist)
  * [`godaddy.v1.getLegalAgreements`](#godaddyv1getlegalagreements)
  * [`godaddy.v1.getTldsList`](#godaddyv1gettldslist)
  * [`godaddy.v1.purchasePrivacyForDomain`](#godaddyv1purchaseprivacyfordomain)
  * [`godaddy.v1.purchaseTransferProcess`](#godaddyv1purchasetransferprocess)
  * [`godaddy.v1.renewDomain`](#godaddyv1renewdomain)
  * [`godaddy.v1.replaceDnsRecords`](#godaddyv1replacednsrecords)
  * [`godaddy.v1.replaceDnsRecordsType`](#godaddyv1replacednsrecordstype)
  * [`godaddy.v1.replaceDnsRecordsType_0`](#godaddyv1replacednsrecordstype_0)
  * [`godaddy.v1.resendContactEmailVerification`](#godaddyv1resendcontactemailverification)
  * [`godaddy.v1.suggestAlternateDomains`](#godaddyv1suggestalternatedomains)
  * [`godaddy.v1.updateDomainContacts`](#godaddyv1updatedomaincontacts)
  * [`godaddy.v1.updateDomainDetails`](#godaddyv1updatedomaindetails)
  * [`godaddy.v1.validateDomainContacts`](#godaddyv1validatedomaincontacts)
  * [`godaddy.v1.validateDomainPurchase`](#godaddyv1validatedomainpurchase)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=GoDaddy&serviceName=Domains&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { GoDaddy } from "godaddy-typescript-sdk";

const godaddy = new GoDaddy({
  // Defining the base path is optional and defaults to http://api.ote-godaddy.com
  // basePath: "http://api.ote-godaddy.com",
  apiKey: "API_KEY",
  apiSecret: "API_KEY",
});

const cancelRecentActionResponse = await godaddy.actions.cancelRecentAction({
  customerId: "customerId_example",
  domain: "domain_example",
  type: "AUTH_CODE_PURCHASE",
});

console.log(cancelRecentActionResponse);
```

## Reference<a id="reference"></a>


### `godaddy.actions.cancelRecentAction`<a id="godaddyactionscancelrecentaction"></a>

Cancel the most recent user action for the specified domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelRecentActionResponse = await godaddy.actions.cancelRecentAction({
  customerId: "customerId_example",
  domain: "domain_example",
  type: "AUTH_CODE_PURCHASE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain whose action is to be cancelled

##### type: `'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'MIGRATE' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'`<a id="type-auth_code_purchase--auth_code_regenerate--backorder_purchase--backorder_delete--backorder_update--dnssec_create--dnssec_delete--domain_delete--domain_update--domain_update_contacts--domain_update_name_servers--migrate--privacy_purchase--privacy_delete--redeem--register--renew--renew_undo--trade--trade_cancel--trade_purchase--trade_purchase_auth_text_message--trade_resend_auth_email--transfer--transfer_in_accept--transfer_in_cancel--transfer_in_restart--transfer_in_retry--transfer_out_accept--transfer_out_reject--transfer_out_requested--transit"></a>

The type of action to cancel

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/actions/{type}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.actions.getRecentAction`<a id="godaddyactionsgetrecentaction"></a>

Retrieves the most recent action for the specified domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentActionResponse = await godaddy.actions.getRecentAction({
  customerId: "customerId_example",
  domain: "domain_example",
  type: "AUTH_CODE_PURCHASE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain whose action is to be retrieved

##### type: `'AUTH_CODE_PURCHASE' | 'AUTH_CODE_REGENERATE' | 'AUTO_RENEWAL' | 'BACKORDER_PURCHASE' | 'BACKORDER_DELETE' | 'BACKORDER_UPDATE' | 'DNS_VERIFICATION' | 'DNSSEC_CREATE' | 'DNSSEC_DELETE' | 'DOMAIN_DELETE' | 'DOMAIN_UPDATE' | 'DOMAIN_UPDATE_CONTACTS' | 'DOMAIN_UPDATE_NAME_SERVERS' | 'EXPIRY' | 'ICANN_VERIFICATION' | 'MIGRATE' | 'MIGRATE_IN' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'PRIVACY_DELETE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'RENEW_UNDO' | 'TRADE' | 'TRADE_CANCEL' | 'TRADE_PURCHASE' | 'TRADE_PURCHASE_AUTH_TEXT_MESSAGE' | 'TRADE_RESEND_AUTH_EMAIL' | 'TRANSFER' | 'TRANSFER_IN' | 'TRANSFER_IN_ACCEPT' | 'TRANSFER_IN_CANCEL' | 'TRANSFER_IN_RESTART' | 'TRANSFER_IN_RETRY' | 'TRANSFER_OUT' | 'TRANSFER_OUT_ACCEPT' | 'TRANSFER_OUT_REJECT' | 'TRANSFER_OUT_REQUESTED' | 'TRANSIT'`<a id="type-auth_code_purchase--auth_code_regenerate--auto_renewal--backorder_purchase--backorder_delete--backorder_update--dns_verification--dnssec_create--dnssec_delete--domain_delete--domain_update--domain_update_contacts--domain_update_name_servers--expiry--icann_verification--migrate--migrate_in--premium--privacy_purchase--privacy_delete--redeem--register--renew--renew_undo--trade--trade_cancel--trade_purchase--trade_purchase_auth_text_message--trade_resend_auth_email--transfer--transfer_in--transfer_in_accept--transfer_in_cancel--transfer_in_restart--transfer_in_retry--transfer_out--transfer_out_accept--transfer_out_reject--transfer_out_requested--transit"></a>

The type of action to retrieve

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[Action](./models/action.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/actions/{type}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.actions.getRecentList`<a id="godaddyactionsgetrecentlist"></a>

Retrieves a list of the most recent actions for the specified domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentListResponse = await godaddy.actions.getRecentList({
  customerId: "customerId_example",
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain whose actions are to be retrieved

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[Action](./models/action.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/actions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.acceptTransferIn`<a id="godaddydomainsaccepttransferin"></a>

Accepts the transfer in

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const acceptTransferInResponse = await godaddy.domains.acceptTransferIn({
  customerId: "customerId_example",
  domain: "domain_example",
  authCode: "authCode_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authCode: `string`<a id="authcode-string"></a>

Authorization code for transferring the Domain

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to accept the transfer in for

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferInAccept` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.acceptTransferOut`<a id="godaddydomainsaccepttransferout"></a>

Accept transfer out

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const acceptTransferOutResponse = await godaddy.domains.acceptTransferOut({
  customerId: "customerId_example",
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to accept the transfer out for

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferOutAccept` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.cancelForwardingRequest`<a id="godaddydomainscancelforwardingrequest"></a>

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelForwardingRequestResponse =
  await godaddy.domains.cancelForwardingRequest({
    customerId: "customerId_example",
    fqdn: "fqdn_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### fqdn: `string`<a id="fqdn-string"></a>

The fully qualified domain name whose forwarding details are to be deleted.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/forwards/{fqdn}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.cancelTransferIn`<a id="godaddydomainscanceltransferin"></a>

Cancels the transfer in

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelTransferInResponse = await godaddy.domains.cancelTransferIn({
  customerId: "customerId_example",
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to cancel the transfer in for

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferInCancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.createForwardingConfiguration`<a id="godaddydomainscreateforwardingconfiguration"></a>

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createForwardingConfigurationResponse =
  await godaddy.domains.createForwardingConfiguration({
    customerId: "customerId_example",
    fqdn: "fqdn_example",
    type: "REDIRECT_PERMANENT",
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

The type of fowarding to implement<br/><ul><li><strong style=\\\'margin-left: 12px;\\\'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser\\\'s address bar.</li><li><strong style=\\\'margin-left: 12px;\\\'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style=\\\'margin-left: 12px;\\\'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>

##### url: `string`<a id="url-string"></a>

Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your own customer id.

##### fqdn: `string`<a id="fqdn-string"></a>

The fully qualified domain name whose forwarding details are to be modified.

##### mask: [`DomainForwardingMask`](./models/domain-forwarding-mask.ts)<a id="mask-domainforwardingmaskmodelsdomain-forwarding-maskts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/forwards/{fqdn}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.getDetails`<a id="godaddydomainsgetdetails"></a>

Retrieve details for the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await godaddy.domains.getDetails({
  customerId: "customerId_example",
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain name whose details are to be retrieved

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

##### includes: `string`[]<a id="includes-string"></a>

Optional details to be included in the response

#### 🔄 Return<a id="🔄-return"></a>

[DomainDetailV2](./models/domain-detail-v2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.getForwardingInfo`<a id="godaddydomainsgetforwardinginfo"></a>

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getForwardingInfoResponse = await godaddy.domains.getForwardingInfo({
  customerId: "customerId_example",
  fqdn: "fqdn_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### fqdn: `string`<a id="fqdn-string"></a>

The fully qualified domain name whose forwarding details are to be retrieved.

##### includeSubs: `boolean`<a id="includesubs-boolean"></a>

Optionally include all sub domains if the fqdn specified is a domain and not a sub domain.

#### 🔄 Return<a id="🔄-return"></a>

[DomainForwarding](./models/domain-forwarding.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/forwards/{fqdn}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.getRegisterSchema`<a id="godaddydomainsgetregisterschema"></a>

Retrieve the schema to be submitted when registering a Domain for the specified TLD

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRegisterSchemaResponse = await godaddy.domains.getRegisterSchema({
  customerId: "customerId_example",
  tld: "tld_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### tld: `string`<a id="tld-string"></a>

The Top-Level Domain whose schema should be retrieved

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[JsonSchema](./models/json-schema.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/register/schema/{tld}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.getUpcomingMaintenanceDetails`<a id="godaddydomainsgetupcomingmaintenancedetails"></a>

Retrieve the details for an upcoming system Maintenances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUpcomingMaintenanceDetailsResponse =
  await godaddy.domains.getUpcomingMaintenanceDetails({
    maintenanceId: "maintenanceId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### maintenanceId: `string`<a id="maintenanceid-string"></a>

The identifier for the system maintenance

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[MaintenanceDetail](./models/maintenance-detail.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/domains/maintenances/{maintenanceId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.getUpcomingMaintenancesList`<a id="godaddydomainsgetupcomingmaintenanceslist"></a>

Retrieve a list of upcoming system Maintenances

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUpcomingMaintenancesListResponse =
  await godaddy.domains.getUpcomingMaintenancesList({
    status: "ACTIVE",
    limit: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

##### status: `'ACTIVE' | 'CANCELLED'`<a id="status-active--cancelled"></a>

Only include results with the selected `status` value.  Returns all results if omitted<br/><ul><li><strong style=\'margin-left: 12px;\'>ACTIVE</strong> - The upcoming maintenance is active.</li><li><strong style=\'margin-left: 12px;\'>CANCELLED</strong> - The upcoming maintenance has been cancelled.</li></ul>

##### modifiedAtAfter: `string`<a id="modifiedatafter-string"></a>

Only include results with `modifiedAt` after the supplied date

##### startsAtAfter: `string`<a id="startsatafter-string"></a>

Only include results with `startsAt` after the supplied date

##### limit: `number`<a id="limit-number"></a>

Maximum number of results to return

#### 🔄 Return<a id="🔄-return"></a>

[Maintenance](./models/maintenance.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/domains/maintenances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.initiateTransferOut`<a id="godaddydomainsinitiatetransferout"></a>

Initiate transfer out to another registrar for a .uk domain.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const initiateTransferOutResponse = await godaddy.domains.initiateTransferOut({
  customerId: "customerId_example",
  domain: "domain_example",
  registrar: "registrar_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to initiate the transfer out for

##### registrar: `string`<a id="registrar-string"></a>

Registrar tag to push transfer to

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferOut` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.modifyForwardingInfo`<a id="godaddydomainsmodifyforwardinginfo"></a>

<strong>Notes:</strong><ul><li>**shopperId** is **not the same** as **customerId**.  **shopperId** is a number of max length 10 digits (*ex:* 1234567890) whereas **customerId** is a UUIDv4 (*ex:* 295e3bc3-b3b9-4d95-aae5-ede41a994d13)</li></ul>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const modifyForwardingInfoResponse = await godaddy.domains.modifyForwardingInfo(
  {
    customerId: "customerId_example",
    fqdn: "fqdn_example",
    type: "REDIRECT_PERMANENT",
    url: "url_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

The type of fowarding to implement<br/><ul><li><strong style=\\\'margin-left: 12px;\\\'>MASKED</strong> - Prevents the forwarded domain or subdomain URL from displaying in the browser\\\'s address bar.</li><li><strong style=\\\'margin-left: 12px;\\\'>REDIRECT_PERMANENT*</strong> - Redirects to the url you specified in the forwardTo field using a `301 Moved Permanently` HTTP response. The HTTP 301 response code tells user-agents (including search engines) that the location has permanently moved.</li><li><strong style=\\\'margin-left: 12px;\\\'>REDIRECT_TEMPORARY</strong> - Redirects to the url you specified in the forwardTo field using a `302 Found` HTTP response. The HTTP 302 response code tells user-agents (including search engines) that the location has temporarily moved.</li></ul>

##### url: `string`<a id="url-string"></a>

Forwards http(s) traffic to this destination url (ex. http://www.somedomain.com/)

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### fqdn: `string`<a id="fqdn-string"></a>

The fully qualified domain name whose forwarding details are to be modified.

##### mask: [`DomainForwardingMask`](./models/domain-forwarding-mask.ts)<a id="mask-domainforwardingmaskmodelsdomain-forwarding-maskts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/forwards/{fqdn}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.purchaseRegisterDomain`<a id="godaddydomainspurchaseregisterdomain"></a>

Purchase and register the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const purchaseRegisterDomainResponse =
  await godaddy.domains.purchaseRegisterDomain({
    customerId: "customerId_example",
    consent: {
      agreedAt: "agreedAt_example",
      agreedBy: "agreedBy_example",
      agreementKeys: ["agreementKeys_example"],
      currency: "USD",
      price: 1,
    },
    domain:
      'k$?x u&K}qz^sEC(lJ)=,jQ*&6`$cClu+k& &su[-l#6V+V6rEtCO?%28nxs"k8z(!\\6\\$TMxo:,sWVoim9gsbE`buHkrTt{qxXp~h',
    period: 1,
    privacy: false,
    renewAuto: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`ConsentV2`](./models/consent-v2.ts)<a id="consent-consentv2modelsconsent-v2ts"></a>

##### domain: `string`<a id="domain-string"></a>

For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### contacts: [`DomainContactsCreateV2`](./models/domain-contacts-create-v2.ts)<a id="contacts-domaincontactscreatev2modelsdomain-contacts-create-v2ts"></a>

##### metadata: `object`<a id="metadata-object"></a>

The domain eligibility data fields as specified by GET /v2/customers/{customerId}/domains/register/schema/{tld}

##### nameServers: `string`[]<a id="nameservers-string"></a>

##### period: `number`<a id="period-number"></a>

##### privacy: `boolean`<a id="privacy-boolean"></a>

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/register` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.purchaseTransferProcess`<a id="godaddydomainspurchasetransferprocess"></a>

Purchase and start or restart transfer process

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const purchaseTransferProcessResponse =
  await godaddy.domains.purchaseTransferProcess({
    customerId: "customerId_example",
    domain: "domain_example",
    authCode: "authCode_example",
    consent: {
      agreedAt: "agreedAt_example",
      agreedBy: "agreedBy_example",
      agreementKeys: ["agreementKeys_example"],
      currency: "USD",
      price: 1,
    },
    period: 1,
    privacy: false,
    renewAuto: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authCode: `string`<a id="authcode-string"></a>

Authorization code from registrar for transferring a domain

##### consent: [`ConsentV2`](./models/consent-v2.ts)<a id="consent-consentv2modelsconsent-v2ts"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to transfer in

##### contacts: [`DomainContactsCreateV2`](./models/domain-contacts-create-v2.ts)<a id="contacts-domaincontactscreatev2modelsdomain-contacts-create-v2ts"></a>

##### identityDocumentId: `string`<a id="identitydocumentid-string"></a>

Unique identifier of the identify document that the user wants to associate with the domain being transferred in. This is required only if the gaining registry has a requirement for an approved identity document

##### metadata: `object`<a id="metadata-object"></a>

The domain eligibility data fields as specified by GET /v2/customers/{customerId}/domains/register/schema/{tld}

##### period: `number`<a id="period-number"></a>

Can be more than 1 but no more than 10 years total including current registration length

##### privacy: `boolean`<a id="privacy-boolean"></a>

Whether or not privacy has been requested

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

Whether or not the domain should be configured to automatically renew

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transfer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.redeemDomainRestore`<a id="godaddydomainsredeemdomainrestore"></a>

Purchase a restore for the given domain to bring it out of redemption

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const redeemDomainRestoreResponse = await godaddy.domains.redeemDomainRestore({
  customerId: "customerId_example",
  domain: "domain_example",
  consent: {
    agreedAt: "agreedAt_example",
    agreedBy: "agreedBy_example",
    currency: "USD",
    fee: 1,
    price: 1,
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`ConsentRedemption`](./models/consent-redemption.ts)<a id="consent-consentredemptionmodelsconsent-redemptionts"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to request redeem for

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/redeem` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.rejectTransferOut`<a id="godaddydomainsrejecttransferout"></a>

Reject transfer out

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rejectTransferOutResponse = await godaddy.domains.rejectTransferOut({
  customerId: "customerId_example",
  domain: "domain_example",
  reason: "EVIDENCE_OF_FRAUD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to reject the transfer out for

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

##### reason: `'EVIDENCE_OF_FRAUD' | 'URDP_ACTION' | 'COURT_ORDER' | 'DISPUTE_OVER_IDENTITY' | 'NO_PAYMENT_FOR_PREVIOUS_REGISTRATION_PERIOD' | 'WRITTEN_OBJECTION' | 'TRANSFERRED_WITHIN_SIXTY_DAYS'`<a id="reason-evidence_of_fraud--urdp_action--court_order--dispute_over_identity--no_payment_for_previous_registration_period--written_objection--transferred_within_sixty_days"></a>

Transfer out reject reason

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferOutReject` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.renewDomain`<a id="godaddydomainsrenewdomain"></a>

Renew the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renewDomainResponse = await godaddy.domains.renewDomain({
  customerId: "customerId_example",
  domain: "domain_example",
  consent: {
    agreedAt: "agreedAt_example",
    agreedBy: "agreedBy_example",
    currency: "USD",
    price: 1,
  },
  expires: "expires_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`ConsentRenew`](./models/consent-renew.ts)<a id="consent-consentrenewmodelsconsent-renewts"></a>

##### expires: `string`<a id="expires-string"></a>

Current date when this domain will expire

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to be renewed

##### period: `number`<a id="period-number"></a>

Number of years to extend the Domain. Must not exceed maximum for TLD. When omitted, defaults to `period` specified during original purchase

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/renew` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.restartTransferIn`<a id="godaddydomainsrestarttransferin"></a>

Restarts transfer in request from the beginning

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restartTransferInResponse = await godaddy.domains.restartTransferIn({
  customerId: "customerId_example",
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to restart the transfer in

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferInRestart` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.retryTransferInProcess`<a id="godaddydomainsretrytransferinprocess"></a>

Retries the current transfer in request with supplied Authorization code

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const retryTransferInProcessResponse =
  await godaddy.domains.retryTransferInProcess({
    customerId: "customerId_example",
    domain: "domain_example",
    authCode: "authCode_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authCode: `string`<a id="authcode-string"></a>

Authorization code for transferring the Domain

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### domain: `string`<a id="domain-string"></a>

Domain to retry the transfer in

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/{domain}/transferInRetry` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.domains.validateDomainRegistration`<a id="godaddydomainsvalidatedomainregistration"></a>

Validate the request body using the Domain Registration Schema for the specified TLD

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateDomainRegistrationResponse =
  await godaddy.domains.validateDomainRegistration({
    customerId: "customerId_example",
    consent: {
      agreedAt: "agreedAt_example",
      agreedBy: "agreedBy_example",
      agreementKeys: ["agreementKeys_example"],
      currency: "USD",
      price: 1,
    },
    domain:
      'k$?x u&K}qz^sEC(lJ)=,jQ*&6`$cClu+k& &su[-l#6V+V6rEtCO?%28nxs"k8z(!\\6\\$TMxo:,sWVoim9gsbE`buHkrTt{qxXp~h',
    period: 1,
    privacy: false,
    renewAuto: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`ConsentV2`](./models/consent-v2.ts)<a id="consent-consentv2modelsconsent-v2ts"></a>

##### domain: `string`<a id="domain-string"></a>

For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### contacts: [`DomainContactsCreateV2`](./models/domain-contacts-create-v2.ts)<a id="contacts-domaincontactscreatev2modelsdomain-contacts-create-v2ts"></a>

##### metadata: `object`<a id="metadata-object"></a>

The domain eligibility data fields as specified by GET /v2/customers/{customerId}/domains/register/schema/{tld}

##### nameServers: `string`[]<a id="nameservers-string"></a>

##### period: `number`<a id="period-number"></a>

##### privacy: `boolean`<a id="privacy-boolean"></a>

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/register/validate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.notifications.acknowledgeDomainNotification`<a id="godaddynotificationsacknowledgedomainnotification"></a>

Acknowledge a domain notification

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const acknowledgeDomainNotificationResponse =
  await godaddy.notifications.acknowledgeDomainNotification({
    customerId: "customerId_example",
    notificationId: "notificationId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### notificationId: `string`<a id="notificationid-string"></a>

The notification ID to acknowledge

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/notifications/{notificationId}/acknowledge` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.notifications.getNextDomain`<a id="godaddynotificationsgetnextdomain"></a>

Retrieve the next domain notification

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNextDomainResponse = await godaddy.notifications.getNextDomain({
  customerId: "customerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[DomainNotification](./models/domain-notification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/notifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.notifications.getSchema`<a id="godaddynotificationsgetschema"></a>

Retrieve the schema for the notification data for the specified notification type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSchemaResponse = await godaddy.notifications.getSchema({
  customerId: "customerId_example",
  type: "AUTO_RENEWAL",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### type: `'AUTO_RENEWAL' | 'BACKORDER' | 'BACKORDER_PURCHASE' | 'EXPIRY' | 'PREMIUM' | 'PRIVACY_PURCHASE' | 'REDEEM' | 'REGISTER' | 'RENEW' | 'TRADE' | 'TRANSFER'`<a id="type-auto_renewal--backorder--backorder_purchase--expiry--premium--privacy_purchase--redeem--register--renew--trade--transfer"></a>

The notification type whose schema should be retrieved

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[JsonSchema](./models/json-schema.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/notifications/schemas/{type}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.notifications.listOptedInTypes`<a id="godaddynotificationslistoptedintypes"></a>

Retrieve a list of notification types that are opted in

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOptedInTypesResponse = await godaddy.notifications.listOptedInTypes({
  customerId: "customerId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🔄 Return<a id="🔄-return"></a>

[DomainNotification](./models/domain-notification.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/notifications/optIn` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.notifications.optInNotifications`<a id="godaddynotificationsoptinnotifications"></a>

Opt in to recieve notifications for the submitted notification types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const optInNotificationsResponse =
  await godaddy.notifications.optInNotifications({
    customerId: "customerId_example",
    types: ["AUTH_CODE_PURCHASE"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customerId: `string`<a id="customerid-string"></a>

The Customer identifier<br/> Note: For API Resellers, performing actions on behalf of your customers, you need to specify the Subaccount you\'re operating on behalf of; otherwise use your shopper id.

##### types: `string`[]<a id="types-string"></a>

The notification types that should be opted in

##### xRequestId: `string`<a id="xrequestid-string"></a>

A client provided identifier for tracking this request.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/customers/{customerId}/domains/notifications/optIn` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.addDnsRecordsToDomain`<a id="godaddyv1adddnsrecordstodomain"></a>

Add the specified DNS Records to the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addDnsRecordsToDomainResponse = await godaddy.v1.addDnsRecordsToDomain({
  domain: "domain_example",
  requestBody: [null],
  xShopperId: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose DNS Records are to be augmented

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

##### requestBody: [`DNSRecord`](./models/dnsrecord.ts)[]<a id="requestbody-dnsrecordmodelsdnsrecordts"></a>

DNS Records to add to whatever currently exists

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/records` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.cancelDomainPurchase`<a id="godaddyv1canceldomainpurchase"></a>

Cancel a purchased domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelDomainPurchaseResponse = await godaddy.v1.cancelDomainPurchase({
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain to cancel

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.cancelPrivacyRequest`<a id="godaddyv1cancelprivacyrequest"></a>

Submit a privacy cancellation request for the given domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelPrivacyRequestResponse = await godaddy.v1.cancelPrivacyRequest({
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose privacy is to be cancelled

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID of the owner of the domain

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/privacy` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.checkDomainAvailability`<a id="godaddyv1checkdomainavailability"></a>

Determine whether or not the specified domain is available for purchase

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkDomainAvailabilityResponse =
  await godaddy.v1.checkDomainAvailability({
    domain: "domain_example",
    checkType: "FAST",
    forTransfer: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain name whose availability is to be checked

##### checkType: `'FAST' | 'FULL' | 'fast' | 'full'`<a id="checktype-fast--full--fast--full"></a>

Optimize for time (\'FAST\') or accuracy (\'FULL\')

##### forTransfer: `boolean`<a id="fortransfer-boolean"></a>

Whether or not to include domains available for transfer. If set to True, checkType is ignored

#### 🔄 Return<a id="🔄-return"></a>

[DomainAvailableResponse](./models/domain-available-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/available` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.checkDomainAvailabilityPost`<a id="godaddyv1checkdomainavailabilitypost"></a>

Determine whether or not the specified domains are available for purchase

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkDomainAvailabilityPostResponse =
  await godaddy.v1.checkDomainAvailabilityPost({
    requestBody: ["requestBody_example"],
    checkType: "FAST",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### checkType: `'FAST' | 'FULL' | 'fast' | 'full'`<a id="checktype-fast--full--fast--full"></a>

Optimize for time (\'FAST\') or accuracy (\'FULL\')

##### requestBody: `string`[]<a id="requestbody-string"></a>

Domain names for which to check availability

#### 🔄 Return<a id="🔄-return"></a>

[DomainAvailableBulk](./models/domain-available-bulk.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/available` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.createDomainPurchase`<a id="godaddyv1createdomainpurchase"></a>

Purchase and register the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDomainPurchaseResponse = await godaddy.v1.createDomainPurchase({
  consent: null,
  domain: "domain_example",
  period: 1,
  privacy: false,
  renewAuto: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`Consent`](./models/consent.ts)<a id="consent-consentmodelsconsentts"></a>

##### domain: `string`<a id="domain-string"></a>

For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked

##### contactAdmin: [`Contact`](./models/contact.ts)<a id="contactadmin-contactmodelscontactts"></a>

##### contactBilling: [`Contact`](./models/contact.ts)<a id="contactbilling-contactmodelscontactts"></a>

##### contactRegistrant: [`Contact`](./models/contact.ts)<a id="contactregistrant-contactmodelscontactts"></a>

##### contactTech: [`Contact`](./models/contact.ts)<a id="contacttech-contactmodelscontactts"></a>

##### nameServers: `string`[]<a id="nameservers-string"></a>

##### period: `number`<a id="period-number"></a>

##### privacy: `boolean`<a id="privacy-boolean"></a>

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

##### xShopperId: `string`<a id="xshopperid-string"></a>

The Shopper for whom the domain should be purchased

#### 🔄 Return<a id="🔄-return"></a>

[DomainPurchaseResponse](./models/domain-purchase-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/purchase` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.deleteAllDnsRecords`<a id="godaddyv1deletealldnsrecords"></a>

Delete all DNS Records for the specified Domain with the specified Type and Name

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAllDnsRecordsResponse = await godaddy.v1.deleteAllDnsRecords({
  domain: "domain_example",
  type: "A",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose DNS Records are to be deleted

##### type: `'A' | 'AAAA' | 'CNAME' | 'MX' | 'SRV' | 'TXT'`<a id="type-a--aaaa--cname--mx--srv--txt"></a>

DNS Record Type for which DNS Records are to be deleted

##### name: `string`<a id="name-string"></a>

DNS Record Name for which DNS Records are to be deleted

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/records/{type}/{name}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.getDnsRecords`<a id="godaddyv1getdnsrecords"></a>

Retrieve DNS Records for the specified Domain, optionally with the specified Type and/or Name

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDnsRecordsResponse = await godaddy.v1.getDnsRecords({
  domain: "domain_example",
  type: "A",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose DNS Records are to be retrieved

##### type: `'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'SOA' | 'SRV' | 'TXT'`<a id="type-a--aaaa--cname--mx--ns--soa--srv--txt"></a>

DNS Record Type for which DNS Records are to be retrieved

##### name: `string`<a id="name-string"></a>

DNS Record Name for which DNS Records are to be retrieved

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

##### offset: `number`<a id="offset-number"></a>

Number of results to skip for pagination

##### limit: `number`<a id="limit-number"></a>

Maximum number of items to return

#### 🔄 Return<a id="🔄-return"></a>

[DNSRecord](./models/dnsrecord.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/records/{type}/{name}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.getDomainDetails`<a id="godaddyv1getdomaindetails"></a>

Retrieve details for the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDomainDetailsResponse = await godaddy.v1.getDomainDetails({
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain name whose details are to be retrieved

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID expected to own the specified domain

#### 🔄 Return<a id="🔄-return"></a>

[DomainDetail](./models/domain-detail.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.getDomainSchema`<a id="godaddyv1getdomainschema"></a>

Retrieve the schema to be submitted when registering a Domain for the specified TLD

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDomainSchemaResponse = await godaddy.v1.getDomainSchema({
  tld: "tld_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tld: `string`<a id="tld-string"></a>

The Top-Level Domain whose schema should be retrieved

#### 🔄 Return<a id="🔄-return"></a>

[JsonSchema](./models/json-schema.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/purchase/schema/{tld}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.getDomainsList`<a id="godaddyv1getdomainslist"></a>

Retrieve a list of Domains for the specified Shopper

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDomainsListResponse = await godaddy.v1.getDomainsList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID whose domains are to be retrieved

##### statuses: `string`[]<a id="statuses-string"></a>

Only include results with `status` value in the specified set

##### statusGroups: `string`[]<a id="statusgroups-string"></a>

Only include results with `status` value in any of the specified groups

##### limit: `number`<a id="limit-number"></a>

Maximum number of domains to return

##### marker: `string`<a id="marker-string"></a>

Marker Domain to use as the offset in results

##### includes: `string`[]<a id="includes-string"></a>

Optional details to be included in the response

##### modifiedDate: `string`<a id="modifieddate-string"></a>

Only include results that have been modified since the specified date

#### 🔄 Return<a id="🔄-return"></a>

[DomainSummary](./models/domain-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.getLegalAgreements`<a id="godaddyv1getlegalagreements"></a>

Retrieve the legal agreement(s) required to purchase the specified TLD and add-ons

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLegalAgreementsResponse = await godaddy.v1.getLegalAgreements({
  xMarketId: "en-US",
  tlds: ["tlds_example"],
  privacy: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tlds: `string`[]<a id="tlds-string"></a>

list of TLDs whose legal agreements are to be retrieved

##### privacy: `boolean`<a id="privacy-boolean"></a>

Whether or not privacy has been requested

##### xMarketId: `string`<a id="xmarketid-string"></a>

Unique identifier of the Market used to retrieve/translate Legal Agreements

##### forTransfer: `boolean`<a id="fortransfer-boolean"></a>

Whether or not domain tranfer has been requested

#### 🔄 Return<a id="🔄-return"></a>

[LegalAgreement](./models/legal-agreement.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/agreements` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.getTldsList`<a id="godaddyv1gettldslist"></a>

Retrieves a list of TLDs supported and enabled for sale

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTldsListResponse = await godaddy.v1.getTldsList();
```

#### 🔄 Return<a id="🔄-return"></a>

[TldSummary](./models/tld-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/tlds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.purchasePrivacyForDomain`<a id="godaddyv1purchaseprivacyfordomain"></a>

Purchase privacy for a specified domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const purchasePrivacyForDomainResponse =
  await godaddy.v1.purchasePrivacyForDomain({
    domain: "domain_example",
    consent: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`Consent`](./models/consent.ts)<a id="consent-consentmodelsconsentts"></a>

##### domain: `string`<a id="domain-string"></a>

Domain for which to purchase privacy

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID of the owner of the domain

#### 🔄 Return<a id="🔄-return"></a>

[DomainPurchaseResponse](./models/domain-purchase-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/privacy/purchase` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.purchaseTransferProcess`<a id="godaddyv1purchasetransferprocess"></a>

Purchase and start or restart transfer process

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const purchaseTransferProcessResponse =
  await godaddy.v1.purchaseTransferProcess({
    domain: "domain_example",
    authCode: "authCode_example",
    consent: null,
    period: 1,
    privacy: false,
    renewAuto: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authCode: `string`<a id="authcode-string"></a>

Authorization code from registrar for transferring a domain

##### consent: [`Consent`](./models/consent.ts)<a id="consent-consentmodelsconsentts"></a>

##### domain: `string`<a id="domain-string"></a>

Domain to transfer in

##### contactAdmin: [`Contact`](./models/contact.ts)<a id="contactadmin-contactmodelscontactts"></a>

##### contactBilling: [`Contact`](./models/contact.ts)<a id="contactbilling-contactmodelscontactts"></a>

##### contactRegistrant: [`Contact`](./models/contact.ts)<a id="contactregistrant-contactmodelscontactts"></a>

##### contactTech: [`Contact`](./models/contact.ts)<a id="contacttech-contactmodelscontactts"></a>

##### period: `number`<a id="period-number"></a>

Can be more than 1 but no more than 10 years total including current registration length

##### privacy: `boolean`<a id="privacy-boolean"></a>

Whether or not privacy has been requested

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

Whether or not the domain should be configured to automatically renew

##### xShopperId: `string`<a id="xshopperid-string"></a>

The Shopper to whom the domain should be transfered

#### 🔄 Return<a id="🔄-return"></a>

[DomainPurchaseResponse](./models/domain-purchase-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/transfer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.renewDomain`<a id="godaddyv1renewdomain"></a>

Renew the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renewDomainResponse = await godaddy.v1.renewDomain({
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain to renew

##### period: `number`<a id="period-number"></a>

Number of years to extend the Domain. Must not exceed maximum for TLD. When omitted, defaults to `period` specified during original purchase

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper for whom Domain is to be renewed. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

#### 🔄 Return<a id="🔄-return"></a>

[DomainPurchaseResponse](./models/domain-purchase-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/renew` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.replaceDnsRecords`<a id="godaddyv1replacednsrecords"></a>

Replace all DNS Records for the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceDnsRecordsResponse = await godaddy.v1.replaceDnsRecords({
  domain: "domain_example",
  requestBody: [null],
  xShopperId: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose DNS Records are to be replaced

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

##### requestBody: [`DNSRecord`](./models/dnsrecord.ts)[]<a id="requestbody-dnsrecordmodelsdnsrecordts"></a>

DNS Records to replace whatever currently exists

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/records` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.replaceDnsRecordsType`<a id="godaddyv1replacednsrecordstype"></a>

Replace all DNS Records for the specified Domain with the specified Type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceDnsRecordsTypeResponse = await godaddy.v1.replaceDnsRecordsType({
  domain: "domain_example",
  type: "A",
  requestBody: [null],
  xShopperId: "string_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose DNS Records are to be replaced

##### type: `'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'SOA' | 'SRV' | 'TXT'`<a id="type-a--aaaa--cname--mx--ns--soa--srv--txt"></a>

DNS Record Type for which DNS Records are to be replaced

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

##### requestBody: [`DNSRecordCreateType`](./models/dnsrecord-create-type.ts)[]<a id="requestbody-dnsrecordcreatetypemodelsdnsrecord-create-typets"></a>

DNS Records to replace whatever currently exists

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/records/{type}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.replaceDnsRecordsType_0`<a id="godaddyv1replacednsrecordstype_0"></a>

Replace all DNS Records for the specified Domain with the specified Type and Name

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const replaceDnsRecordsType_0Response =
  await godaddy.v1.replaceDnsRecordsType_0({
    domain: "domain_example",
    type: "A",
    name: "name_example",
    requestBody: [null],
    xShopperId: "string_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose DNS Records are to be replaced

##### type: `'A' | 'AAAA' | 'CNAME' | 'MX' | 'NS' | 'SOA' | 'SRV' | 'TXT'`<a id="type-a--aaaa--cname--mx--ns--soa--srv--txt"></a>

DNS Record Type for which DNS Records are to be replaced

##### name: `string`<a id="name-string"></a>

DNS Record Name for which DNS Records are to be replaced

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID which owns the domain. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

##### requestBody: [`DNSRecordCreateTypeName`](./models/dnsrecord-create-type-name.ts)[]<a id="requestbody-dnsrecordcreatetypenamemodelsdnsrecord-create-type-namets"></a>

DNS Records to replace whatever currently exists

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/records/{type}/{name}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.resendContactEmailVerification`<a id="godaddyv1resendcontactemailverification"></a>

Re-send Contact E-mail Verification for specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resendContactEmailVerificationResponse =
  await godaddy.v1.resendContactEmailVerification({
    domain: "domain_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose Contact E-mail should be verified.

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper for whom domain contact e-mail should be verified. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/verifyRegistrantEmail` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.suggestAlternateDomains`<a id="godaddyv1suggestalternatedomains"></a>

Suggest alternate Domain names based on a seed Domain, a set of keywords, or the shopper\&#39;s purchase history

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const suggestAlternateDomainsResponse =
  await godaddy.v1.suggestAlternateDomains({
    country: "AC",
    waitMs: 1000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper ID for which the suggestions are being generated

##### query: `string`<a id="query-string"></a>

Domain name or set of keywords for which alternative domain names will be suggested

##### country: `'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BV' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GS' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HM' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KR' | 'KV' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'false' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PN' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'ST' | 'SV' | 'SX' | 'SZ' | 'TC' | 'TD' | 'TF' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TP' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'UM' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW'`<a id="country-ac--ad--ae--af--ag--ai--al--am--ao--aq--ar--as--at--au--aw--ax--az--ba--bb--bd--be--bf--bg--bh--bi--bj--bm--bn--bo--bq--br--bs--bt--bv--bw--by--bz--ca--cc--cd--cf--cg--ch--ci--ck--cl--cm--cn--co--cr--cv--cw--cx--cy--cz--de--dj--dk--dm--do--dz--ec--ee--eg--eh--er--es--et--fi--fj--fk--fm--fo--fr--ga--gb--gd--ge--gf--gg--gh--gi--gl--gm--gn--gp--gq--gr--gs--gt--gu--gw--gy--hk--hm--hn--hr--ht--hu--id--ie--il--im--in--io--iq--is--it--je--jm--jo--jp--ke--kg--kh--ki--km--kn--kr--kv--kw--ky--kz--la--lb--lc--li--lk--lr--ls--lt--lu--lv--ly--ma--mc--md--me--mg--mh--mk--ml--mm--mn--mo--mp--mq--mr--ms--mt--mu--mv--mw--mx--my--mz--na--nc--ne--nf--ng--ni--nl--false--np--nr--nu--nz--om--pa--pe--pf--pg--ph--pk--pl--pm--pn--pr--ps--pt--pw--py--qa--re--ro--rs--ru--rw--sa--sb--sc--se--sg--sh--si--sj--sk--sl--sm--sn--so--sr--st--sv--sx--sz--tc--td--tf--tg--th--tj--tk--tl--tm--tn--to--tp--tr--tt--tv--tw--tz--ua--ug--um--us--uy--uz--va--vc--ve--vg--vi--vn--vu--wf--ws--ye--yt--za--zm--zw"></a>

Two-letter ISO country code to be used as a hint for target region<br/><br/> NOTE: These are sample values, there are many <a href=\"http://www.iso.org/iso/country_codes.htm\">more</a>

##### city: `string`<a id="city-string"></a>

Name of city to be used as a hint for target region

##### sources: `string`[]<a id="sources-string"></a>

Sources to be queried<br/><br/><ul> <li><strong>CC_TLD</strong> - Varies the TLD using Country Codes</li> <li><strong>EXTENSION</strong> - Varies the TLD</li> <li><strong>KEYWORD_SPIN</strong> - Identifies keywords and then rotates each one</li> <li><strong>PREMIUM</strong> - Includes variations with premium prices</li></ul>

##### tlds: `string`[]<a id="tlds-string"></a>

Top-level domains to be included in suggestions<br/><br/> NOTE: These are sample values, there are many <a href=\"http://www.godaddy.com/tlds/gtld.aspx#domain_search_form\">more</a>

##### lengthMax: `number`<a id="lengthmax-number"></a>

Maximum length of second-level domain

##### lengthMin: `number`<a id="lengthmin-number"></a>

Minimum length of second-level domain

##### limit: `number`<a id="limit-number"></a>

Maximum number of suggestions to return

##### waitMs: `number`<a id="waitms-number"></a>

Maximum amount of time, in milliseconds, to wait for responses If elapses, return the results compiled up to that point

#### 🔄 Return<a id="🔄-return"></a>

[DomainSuggestion](./models/domain-suggestion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/suggest` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.updateDomainContacts`<a id="godaddyv1updatedomaincontacts"></a>

Update domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDomainContactsResponse = await godaddy.v1.updateDomainContacts({
  domain: "domain_example",
  contactRegistrant: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contactRegistrant: [`Contact`](./models/contact.ts)<a id="contactregistrant-contactmodelscontactts"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose Contacts are to be updated.

##### contactAdmin: [`Contact`](./models/contact.ts)<a id="contactadmin-contactmodelscontactts"></a>

##### contactBilling: [`Contact`](./models/contact.ts)<a id="contactbilling-contactmodelscontactts"></a>

##### contactTech: [`Contact`](./models/contact.ts)<a id="contacttech-contactmodelscontactts"></a>

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper for whom domain contacts are to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}/contacts` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.updateDomainDetails`<a id="godaddyv1updatedomaindetails"></a>

Update details for the specified Domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDomainDetailsResponse = await godaddy.v1.updateDomainDetails({
  domain: "domain_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain whose details are to be updated

##### consent: [`ConsentDomainUpdate`](./models/consent-domain-update.ts)<a id="consent-consentdomainupdatemodelsconsent-domain-updatets"></a>

##### exposeWhois: `boolean`<a id="exposewhois-boolean"></a>

Whether or not the domain contact details should be shown in the WHOIS

##### locked: `boolean`<a id="locked-boolean"></a>

Whether or not the domain should be locked to prevent transfers

##### nameServers: `any`<a id="nameservers-any"></a>
                   `any`[]

Fully-qualified domain names for Name Servers to associate with the domain

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

Whether or not the domain should be configured to automatically renew

##### subaccountId: `string`<a id="subaccountid-string"></a>

Reseller subaccount shopperid who can manage the domain

##### xShopperId: `string`<a id="xshopperid-string"></a>

Shopper for whom Domain is to be updated. NOTE: This is only required if you are a Reseller managing a domain purchased outside the scope of your reseller account. For instance, if you\'re a Reseller, but purchased a Domain via http://www.godaddy.com

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/{domain}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.validateDomainContacts`<a id="godaddyv1validatedomaincontacts"></a>

All contacts specified in request will be validated against all domains specifed in "domains". As an alternative, you can also pass in tlds, with the exception of `uk`, which requires full domain names

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateDomainContactsResponse = await godaddy.v1.validateDomainContacts({
  xPrivateLabelId: 1,
  marketId: "en-US",
  domains: ["domains_example"],
  entityType: "ABORIGINAL",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domains: `string`[]<a id="domains-string"></a>

An array of domain names to be validated against. Alternatively, you can specify the extracted tlds. However, full domain names are required if the tld is `uk`

##### contactAdmin: [`Contact`](./models/contact.ts)<a id="contactadmin-contactmodelscontactts"></a>

##### contactBilling: [`Contact`](./models/contact.ts)<a id="contactbilling-contactmodelscontactts"></a>

##### contactPresence: [`Contact`](./models/contact.ts)<a id="contactpresence-contactmodelscontactts"></a>

##### contactRegistrant: [`Contact`](./models/contact.ts)<a id="contactregistrant-contactmodelscontactts"></a>

##### contactTech: [`Contact`](./models/contact.ts)<a id="contacttech-contactmodelscontactts"></a>

##### entityType: `string`<a id="entitytype-string"></a>

Canadian Presence Requirement (CA)

##### xPrivateLabelId: `number`<a id="xprivatelabelid-number"></a>

PrivateLabelId to operate as, if different from JWT

##### marketId: `string`<a id="marketid-string"></a>

MarketId in which the request is being made, and for which responses should be localized

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/contacts/validate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `godaddy.v1.validateDomainPurchase`<a id="godaddyv1validatedomainpurchase"></a>

Validate the request body using the Domain Purchase Schema for the specified TLD

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validateDomainPurchaseResponse = await godaddy.v1.validateDomainPurchase({
  consent: null,
  domain: "domain_example",
  period: 1,
  privacy: false,
  renewAuto: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consent: [`Consent`](./models/consent.ts)<a id="consent-consentmodelsconsentts"></a>

##### domain: `string`<a id="domain-string"></a>

For internationalized domain names with non-ascii characters, the domain name is converted to punycode before format and pattern validation rules are checked

##### contactAdmin: [`Contact`](./models/contact.ts)<a id="contactadmin-contactmodelscontactts"></a>

##### contactBilling: [`Contact`](./models/contact.ts)<a id="contactbilling-contactmodelscontactts"></a>

##### contactRegistrant: [`Contact`](./models/contact.ts)<a id="contactregistrant-contactmodelscontactts"></a>

##### contactTech: [`Contact`](./models/contact.ts)<a id="contacttech-contactmodelscontactts"></a>

##### nameServers: `string`[]<a id="nameservers-string"></a>

##### period: `number`<a id="period-number"></a>

##### privacy: `boolean`<a id="privacy-boolean"></a>

##### renewAuto: `boolean`<a id="renewauto-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/domains/purchase/validate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
