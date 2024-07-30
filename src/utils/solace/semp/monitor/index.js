/*
 * SEMP (Solace Element Management Protocol)
 * SEMP (starting in `v2`, see note 1) is a RESTful API for configuring, monitoring, and administering a Solace PubSub+ broker.  SEMP uses URIs to address manageable **resources** of the Solace PubSub+ broker. Resources are individual **objects**, **collections** of objects, or (exclusively in the action API) **actions**. This document applies to the following API:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Monitoring|/SEMP/v2/monitor|Querying operational parameters|See note 2    The following APIs are also available:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Action|/SEMP/v2/action|Performing actions|See note 2 Configuration|/SEMP/v2/config|Reading and writing config state|See note 2    Resources are always nouns, with individual objects being singular and collections being plural.  Objects within a collection are identified by an `obj-id`, which follows the collection name with the form `collection-name/obj-id`. An `obj-id` consists of one or more identifying attributes, separated by commas. Commas that appear in the identifying attribute itself must be percent encoded.   Actions within an object are identified by an `action-id`, which follows the object name with the form `obj-id/action-id`.  Some examples:  ``` /SEMP/v2/config/msgVpns                        ; MsgVpn collection /SEMP/v2/config/msgVpns/a                      ; MsgVpn object named \"a\" /SEMP/v2/config/msgVpns/a/bridges              ; Bridge collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/bridges/b,auto       ; Bridge object named \"b\" with virtual router \"auto\" in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues               ; Queue collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues/c             ; Queue object named \"c\" in MsgVpn \"a\" /SEMP/v2/action/msgVpns/a/queues/c/startReplay ; Action that starts a replay on Queue \"c\" in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients             ; Client collection in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients/d           ; Client object named \"d\" in MsgVpn \"a\" ```  ## Collection Resources  Collections are unordered lists of objects (unless described as otherwise), and are described by JSON arrays. Each item in the array represents an object in the same manner as the individual object would normally be represented. In the configuration API, the creation of a new object is done through its collection resource.  ## Object and Action Resources  Objects are composed of attributes, actions, collections, and other objects. They are described by JSON objects as name/value pairs. The collections and actions of an object are not contained directly in the object's JSON content; rather the content includes an attribute containing a URI which points to the collections and actions. These contained resources must be managed through this URI. At a minimum, every object has one or more identifying attributes, and its own `uri` attribute which contains the URI pointing to itself.  Actions are also composed of attributes, and are described by JSON objects as name/value pairs. Unlike objects, however, they are not members of a collection and cannot be retrieved, only performed. Actions only exist in the action API.  Attributes in an object or action may have any combination of the following properties:   Property|Meaning|Comments :---|:---|:--- Identifying|Attribute is involved in unique identification of the object, and appears in its URI| Const|Attribute value can only be chosen during object creation| Required|Attribute must be provided in the request| Read-Only|Attribute value cannot be changed|See note 3 Write-Only|Attribute can only be written, not read, unless the attribute is also opaque|See the documentation for the opaque property Requires-Disable|Attribute cannot be changed while the object (or the relevant part of the object) is administratively enabled| Auto-Disable|Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as one or more attributes will be temporarily disabled to apply the change| Deprecated|Attribute is deprecated, and will disappear in the next SEMP version| Opaque|Attribute can be set or retrieved in opaque form when the `opaquePassword` query parameter is present|See the `opaquePassword` query parameter documentation    In some requests, certain attributes may only be provided in certain combinations with other attributes:   Relationship|Meaning|Comments :---|:---|:--- Requires|Attribute may only be provided in a request if a particular attribute or combination of attributes is also provided in the request|The \"requires\" property will not be enforced for an attribute when all of the following conditions are met: (a) the attribute is not write-only; (b) the value provided for the attribute is the same as its current (or, on object creation, its default) value; and (c) the attribute requires a write-only attribute. In addition, the \"requires\" property may not be enforced even if only conditions (a) and (b) are met. Conflicts|Attribute may only be provided in a request if a particular attribute or combination of attributes is not also provided in the request|    In the monitoring API, any non-identifying attribute may not be returned in a GET.  ## HTTP Methods  The following HTTP methods manipulate resources in accordance with these general principles. Note that some methods are only used in certain APIs:   Method|Resource|Meaning|Request Body|Response Body|Notes :---|:---|:---|:---|:---|:--- POST|Collection|Create object|Initial attribute values|Object attributes and metadata|Absent attributes are set to default. If object already exists, a 400 error is returned PUT|Object|Update object|New attribute values|Object attributes and metadata|If does not exist, the object is first created. Absent attributes are set to default, with certain exceptions (see note 4) PUT|Action|Performs action|Action arguments|Action metadata| PATCH|Object|Update object|New attribute values|Object attributes and metadata|Absent attributes are left unchanged. If the object does not exist, a 404 error is returned DELETE|Object|Delete object|Empty|Object metadata|If the object does not exist, a 404 is returned GET|Object|Get object|Empty|Object attributes and metadata|If the object does not exist, a 404 is returned GET|Collection|Get collection|Empty|Object attributes and collection metadata|If the collection is empty, then an empty collection is returned with a 200 code    ## Common Query Parameters  The following are some common query parameters that are supported by many method/URI combinations. Individual URIs may document additional parameters. Note that multiple query parameters can be used together in a single URI, separated by the ampersand character. For example:  ``` ; Request for the MsgVpns collection using two hypothetical query parameters ; \"q1\" and \"q2\" with values \"val1\" and \"val2\" respectively /SEMP/v2/monitor/msgVpns?q1=val1&q2=val2 ```  ### select  Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. Use this query parameter to limit the size of the returned data for each returned object, return only those fields that are desired, or exclude fields that are not desired.  The value of `select` is a comma-separated list of attribute names. If the list contains attribute names that are not prefaced by `-`, only those attributes are included in the response. If the list contains attribute names that are prefaced by `-`, those attributes are excluded from the response. If the list contains both types, then the difference of the first set of attributes and the second set of attributes is returned. If the list is empty (i.e. `select=`), it is treated the same as if no `select` was provided: all attribute are returned.  All attributes that are prefaced by `-` must follow all attributes that are not prefaced by `-`. In addition, each attribute name in the list must match at least one attribute in the object.  Names may include the `*` wildcard (zero or more characters). Nested attribute names are supported using periods (e.g. `parentName.childName`).  Some examples:  ``` ; List of all MsgVpn names /SEMP/v2/monitor/msgVpns?select=msgVpnName ; List of all MsgVpn and their attributes except for their names /SEMP/v2/monitor/msgVpns?select=-msgVpnName ; Authentication attributes of MsgVpn \"finance\" /SEMP/v2/monitor/msgVpns/finance?select=authentication%2A ; All attributes of MsgVpn \"finance\" except for authentication attributes /SEMP/v2/monitor/msgVpns/finance?select=-authentication%2A ; Access related attributes of Queue \"orderQ\" of MsgVpn \"finance\" /SEMP/v2/monitor/msgVpns/finance/queues/orderQ?select=owner,permission ```  ### where  Include in the response only objects where certain conditions are true. Use this query parameter to limit which objects are returned to those whose attribute values meet the given conditions.  The value of `where` is a comma-separated list of expressions. All expressions must be true for the object to be included in the response. Each expression takes the form:  ``` expression  = attribute-name OP value OP          = '==' | '!=' | '<' | '>' | '<=' | '>=' ```  Write-only attributes cannot be used in a `where` expression.  `value` may be a number, string, `true`, or `false`, as appropriate for the type of `attribute-name`.  A `*` in a string `value` is interpreted as a wildcard (zero or more characters), but can be escaped using `\\`. The `\\` character can itself be escaped using `\\`. The `*` wildcard can only be used with the `==` and `!=` operators. If `*` is used as a literal with other operators, it must be escaped.  The `<`, `>`, `<=`, and `>=` operators perform a simple byte-for-byte comparison when used with a string `value`.  Some examples:  ``` ; Only enabled MsgVpns /SEMP/v2/monitor/msgVpns?where=enabled%3D%3Dtrue ; Only MsgVpns using basic non-LDAP authentication /SEMP/v2/monitor/msgVpns?where=authenticationBasicEnabled%3D%3Dtrue,authenticationBasicType%21%3Dldap ; Only MsgVpns that allow more than 100 client connections /SEMP/v2/monitor/msgVpns?where=maxConnectionCount%3E100 ; Only MsgVpns with msgVpnName starting with \"B\": /SEMP/v2/monitor/msgVpns?where=msgVpnName%3D%3DB%2A ```  ### count  Limit the count of objects in the response. This can be useful to limit the size of the response for large collections. The minimum value for `count` is `1` and the default is `10`. There is also a per-collection maximum value to limit request handling time.  `count` does not guarantee that a minimum number of objects will be returned. A page may contain fewer than `count` objects or even be empty. Additional objects may nonetheless be available for retrieval on subsequent pages. See the `cursor` query parameter documentation for more information on paging.  For example: ``` ; Up to 25 MsgVpns /SEMP/v2/monitor/msgVpns?count=25 ```  ### cursor  The cursor, or position, for the next page of objects. Cursors are opaque data that should not be created or interpreted by SEMP clients, and should only be used as described below.  When a request is made for a collection and there may be additional objects available for retrieval that are not included in the initial response, the response will include a `cursorQuery` field containing a cursor. The value of this field can be specified in the `cursor` query parameter of a subsequent request to retrieve the next page of objects.  Applications must continue to use the `cursorQuery` if one is provided in order to retrieve the full set of objects associated with the request, even if a page contains fewer than the requested number of objects (see the `count` query parameter documentation) or is empty.  ### opaquePassword  Attributes with the opaque property are also write-only and so cannot normally be retrieved in a GET. However, when a password is provided in the `opaquePassword` query parameter, attributes with the opaque property are retrieved in a GET in opaque form, encrypted with this password. The query parameter can also be used on a POST, PATCH, or PUT to set opaque attributes using opaque attribute values retrieved in a GET, so long as:  1. the same password that was used to retrieve the opaque attribute values is provided; and  2. the broker to which the request is being sent has the same major and minor SEMP version as the broker that produced the opaque attribute values.  The password provided in the query parameter must be a minimum of 8 characters and a maximum of 128 characters.  The query parameter can only be used in the configuration API, and only over HTTPS.  ## Authentication  When a client makes its first SEMPv2 request, it must supply a username and password using HTTP Basic authentication, or an OAuth token or tokens using HTTP Bearer authentication.  When HTTP Basic authentication is used, the broker returns a cookie containing a session key. The client can omit the username and password from subsequent requests, because the broker can use the session cookie for authentication instead. When the session expires or is deleted, the client must provide the username and password again, and the broker creates a new session.  There are a limited number of session slots available on the broker. The broker returns 529 No SEMP Session Available if it is not able to allocate a session.  If certain attributes—such as a user's password—are changed, the broker automatically deletes the affected sessions. These attributes are documented below. However, changes in external user configuration data stored on a RADIUS or LDAP server do not trigger the broker to delete the associated session(s), therefore you must do this manually, if required.  A client can retrieve its current session information using the /about/user endpoint and delete its own session using the /about/user/logout endpoint. A client with appropriate permissions can also manage all sessions using the /sessions endpoint.  Sessions are not created when authenticating with an OAuth token or tokens using HTTP Bearer authentication. If a session cookie is provided, it is ignored.  ## Help  Visit [our website](https://solace.com) to learn more about Solace.  You can also download the SEMP API specifications by clicking [here](https://solace.com/downloads/).  If you need additional support, please contact us at [support@solace.com](mailto:support@solace.com).  ## Notes  Note|Description :---:|:--- 1|This specification defines SEMP starting in \"v2\", and not the original SEMP \"v1\" interface. Request and response formats between \"v1\" and \"v2\" are entirely incompatible, although both protocols share a common port configuration on the Solace PubSub+ broker. They are differentiated by the initial portion of the URI path, one of either \"/SEMP/\" or \"/SEMP/v2/\" 2|This API is partially implemented. Only a subset of all objects are available. 3|Read-only attributes may appear in POST and PUT/PATCH requests but are ignored, except when the read-only attribute is identifying. 4|On a PUT, if the SEMP user is not authorized to modify the attribute, its value is left unchanged rather than set to default. In addition, the values of write-only attributes are not set to their defaults on a PUT, except in the following two cases: there is a mutual requires relationship with another non-write-only attribute, both attributes are absent from the request, and the non-write-only attribute is not currently set to its default value; or the attribute is also opaque and the `opaquePassword` query parameter is provided in the request.  
 *
 * OpenAPI spec version: 2.36
 * Contact: support@solace.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {AboutApiCollectionsModel} from './model/AboutApiCollectionsModel';
import {AboutApiLinksModel} from './model/AboutApiLinksModel';
import {AboutApiModel} from './model/AboutApiModel';
import {AboutApiResponseModel} from './model/AboutApiResponseModel';
import {AboutCollectionsModel} from './model/AboutCollectionsModel';
import {AboutLinksModel} from './model/AboutLinksModel';
import {AboutModel} from './model/AboutModel';
import {AboutResponseModel} from './model/AboutResponseModel';
import {AboutUserCollectionsModel} from './model/AboutUserCollectionsModel';
import {AboutUserCollectionsMsgVpnsModel} from './model/AboutUserCollectionsMsgVpnsModel';
import {AboutUserLinksModel} from './model/AboutUserLinksModel';
import {AboutUserModel} from './model/AboutUserModel';
import {AboutUserMsgVpnCollectionsModel} from './model/AboutUserMsgVpnCollectionsModel';
import {AboutUserMsgVpnLinksModel} from './model/AboutUserMsgVpnLinksModel';
import {AboutUserMsgVpnModel} from './model/AboutUserMsgVpnModel';
import {AboutUserMsgVpnResponseModel} from './model/AboutUserMsgVpnResponseModel';
import {AboutUserMsgVpnsResponseModel} from './model/AboutUserMsgVpnsResponseModel';
import {AboutUserResponseModel} from './model/AboutUserResponseModel';
import {BrokerCollectionsCertAuthoritiesModel} from './model/BrokerCollectionsCertAuthoritiesModel';
import {BrokerCollectionsClientCertAuthoritiesModel} from './model/BrokerCollectionsClientCertAuthoritiesModel';
import {BrokerCollectionsConfigSyncLocalDatabaseRowsModel} from './model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel';
import {BrokerCollectionsDmrClustersModel} from './model/BrokerCollectionsDmrClustersModel';
import {BrokerCollectionsDomainCertAuthoritiesModel} from './model/BrokerCollectionsDomainCertAuthoritiesModel';
import {BrokerCollectionsModel} from './model/BrokerCollectionsModel';
import {BrokerCollectionsMsgVpnsModel} from './model/BrokerCollectionsMsgVpnsModel';
import {BrokerCollectionsOauthProfilesModel} from './model/BrokerCollectionsOauthProfilesModel';
import {BrokerCollectionsSessionsModel} from './model/BrokerCollectionsSessionsModel';
import {BrokerCollectionsStandardDomainCertAuthoritiesModel} from './model/BrokerCollectionsStandardDomainCertAuthoritiesModel';
import {BrokerCollectionsVirtualHostnamesModel} from './model/BrokerCollectionsVirtualHostnamesModel';
import {BrokerLinksModel} from './model/BrokerLinksModel';
import {BrokerModel} from './model/BrokerModel';
import {BrokerResponseModel} from './model/BrokerResponseModel';
import {CertAuthoritiesResponseModel} from './model/CertAuthoritiesResponseModel';
import {CertAuthorityCollectionsModel} from './model/CertAuthorityCollectionsModel';
import {CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} from './model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel';
import {CertAuthorityLinksModel} from './model/CertAuthorityLinksModel';
import {CertAuthorityModel} from './model/CertAuthorityModel';
import {CertAuthorityOcspTlsTrustedCommonNameCollectionsModel} from './model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel';
import {CertAuthorityOcspTlsTrustedCommonNameLinksModel} from './model/CertAuthorityOcspTlsTrustedCommonNameLinksModel';
import {CertAuthorityOcspTlsTrustedCommonNameModel} from './model/CertAuthorityOcspTlsTrustedCommonNameModel';
import {CertAuthorityOcspTlsTrustedCommonNameResponseModel} from './model/CertAuthorityOcspTlsTrustedCommonNameResponseModel';
import {CertAuthorityOcspTlsTrustedCommonNamesResponseModel} from './model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel';
import {CertAuthorityResponseModel} from './model/CertAuthorityResponseModel';
import {ClientCertAuthoritiesResponseModel} from './model/ClientCertAuthoritiesResponseModel';
import {ClientCertAuthorityCollectionsModel} from './model/ClientCertAuthorityCollectionsModel';
import {ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel} from './model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel';
import {ClientCertAuthorityLinksModel} from './model/ClientCertAuthorityLinksModel';
import {ClientCertAuthorityModel} from './model/ClientCertAuthorityModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel} from './model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel} from './model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameModel} from './model/ClientCertAuthorityOcspTlsTrustedCommonNameModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel} from './model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel';
import {ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel} from './model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel';
import {ClientCertAuthorityResponseModel} from './model/ClientCertAuthorityResponseModel';
import {ConfigSyncLocalDatabaseRowCollectionsModel} from './model/ConfigSyncLocalDatabaseRowCollectionsModel';
import {ConfigSyncLocalDatabaseRowLinksModel} from './model/ConfigSyncLocalDatabaseRowLinksModel';
import {ConfigSyncLocalDatabaseRowModel} from './model/ConfigSyncLocalDatabaseRowModel';
import {ConfigSyncLocalDatabaseRowResponseModel} from './model/ConfigSyncLocalDatabaseRowResponseModel';
import {ConfigSyncLocalDatabaseRowsResponseModel} from './model/ConfigSyncLocalDatabaseRowsResponseModel';
import {DmrClusterCertMatchingRuleAttributeFilterCollectionsModel} from './model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel';
import {DmrClusterCertMatchingRuleAttributeFilterLinksModel} from './model/DmrClusterCertMatchingRuleAttributeFilterLinksModel';
import {DmrClusterCertMatchingRuleAttributeFilterModel} from './model/DmrClusterCertMatchingRuleAttributeFilterModel';
import {DmrClusterCertMatchingRuleAttributeFilterResponseModel} from './model/DmrClusterCertMatchingRuleAttributeFilterResponseModel';
import {DmrClusterCertMatchingRuleAttributeFiltersResponseModel} from './model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel';
import {DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel} from './model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel';
import {DmrClusterCertMatchingRuleCollectionsConditionsModel} from './model/DmrClusterCertMatchingRuleCollectionsConditionsModel';
import {DmrClusterCertMatchingRuleCollectionsModel} from './model/DmrClusterCertMatchingRuleCollectionsModel';
import {DmrClusterCertMatchingRuleConditionCollectionsModel} from './model/DmrClusterCertMatchingRuleConditionCollectionsModel';
import {DmrClusterCertMatchingRuleConditionLinksModel} from './model/DmrClusterCertMatchingRuleConditionLinksModel';
import {DmrClusterCertMatchingRuleConditionModel} from './model/DmrClusterCertMatchingRuleConditionModel';
import {DmrClusterCertMatchingRuleConditionResponseModel} from './model/DmrClusterCertMatchingRuleConditionResponseModel';
import {DmrClusterCertMatchingRuleConditionsResponseModel} from './model/DmrClusterCertMatchingRuleConditionsResponseModel';
import {DmrClusterCertMatchingRuleLinksModel} from './model/DmrClusterCertMatchingRuleLinksModel';
import {DmrClusterCertMatchingRuleModel} from './model/DmrClusterCertMatchingRuleModel';
import {DmrClusterCertMatchingRuleResponseModel} from './model/DmrClusterCertMatchingRuleResponseModel';
import {DmrClusterCertMatchingRulesResponseModel} from './model/DmrClusterCertMatchingRulesResponseModel';
import {DmrClusterCollectionsCertMatchingRulesModel} from './model/DmrClusterCollectionsCertMatchingRulesModel';
import {DmrClusterCollectionsLinksModel} from './model/DmrClusterCollectionsLinksModel';
import {DmrClusterCollectionsModel} from './model/DmrClusterCollectionsModel';
import {DmrClusterCollectionsTopologyIssuesModel} from './model/DmrClusterCollectionsTopologyIssuesModel';
import {DmrClusterLinkAttributeCollectionsModel} from './model/DmrClusterLinkAttributeCollectionsModel';
import {DmrClusterLinkAttributeLinksModel} from './model/DmrClusterLinkAttributeLinksModel';
import {DmrClusterLinkAttributeModel} from './model/DmrClusterLinkAttributeModel';
import {DmrClusterLinkAttributeResponseModel} from './model/DmrClusterLinkAttributeResponseModel';
import {DmrClusterLinkAttributesResponseModel} from './model/DmrClusterLinkAttributesResponseModel';
import {DmrClusterLinkChannelCollectionsModel} from './model/DmrClusterLinkChannelCollectionsModel';
import {DmrClusterLinkChannelLinksModel} from './model/DmrClusterLinkChannelLinksModel';
import {DmrClusterLinkChannelModel} from './model/DmrClusterLinkChannelModel';
import {DmrClusterLinkChannelResponseModel} from './model/DmrClusterLinkChannelResponseModel';
import {DmrClusterLinkChannelsResponseModel} from './model/DmrClusterLinkChannelsResponseModel';
import {DmrClusterLinkCollectionsAttributesModel} from './model/DmrClusterLinkCollectionsAttributesModel';
import {DmrClusterLinkCollectionsChannelsModel} from './model/DmrClusterLinkCollectionsChannelsModel';
import {DmrClusterLinkCollectionsModel} from './model/DmrClusterLinkCollectionsModel';
import {DmrClusterLinkCollectionsRemoteAddressesModel} from './model/DmrClusterLinkCollectionsRemoteAddressesModel';
import {DmrClusterLinkCollectionsTlsTrustedCommonNamesModel} from './model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel';
import {DmrClusterLinkLinksModel} from './model/DmrClusterLinkLinksModel';
import {DmrClusterLinkModel} from './model/DmrClusterLinkModel';
import {DmrClusterLinkRemoteAddressCollectionsModel} from './model/DmrClusterLinkRemoteAddressCollectionsModel';
import {DmrClusterLinkRemoteAddressLinksModel} from './model/DmrClusterLinkRemoteAddressLinksModel';
import {DmrClusterLinkRemoteAddressModel} from './model/DmrClusterLinkRemoteAddressModel';
import {DmrClusterLinkRemoteAddressResponseModel} from './model/DmrClusterLinkRemoteAddressResponseModel';
import {DmrClusterLinkRemoteAddressesResponseModel} from './model/DmrClusterLinkRemoteAddressesResponseModel';
import {DmrClusterLinkResponseModel} from './model/DmrClusterLinkResponseModel';
import {DmrClusterLinkTlsTrustedCommonNameCollectionsModel} from './model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel';
import {DmrClusterLinkTlsTrustedCommonNameLinksModel} from './model/DmrClusterLinkTlsTrustedCommonNameLinksModel';
import {DmrClusterLinkTlsTrustedCommonNameModel} from './model/DmrClusterLinkTlsTrustedCommonNameModel';
import {DmrClusterLinkTlsTrustedCommonNameResponseModel} from './model/DmrClusterLinkTlsTrustedCommonNameResponseModel';
import {DmrClusterLinkTlsTrustedCommonNamesResponseModel} from './model/DmrClusterLinkTlsTrustedCommonNamesResponseModel';
import {DmrClusterLinksModel} from './model/DmrClusterLinksModel';
import {DmrClusterLinksResponseModel} from './model/DmrClusterLinksResponseModel';
import {DmrClusterModel} from './model/DmrClusterModel';
import {DmrClusterResponseModel} from './model/DmrClusterResponseModel';
import {DmrClusterTopologyIssueCollectionsModel} from './model/DmrClusterTopologyIssueCollectionsModel';
import {DmrClusterTopologyIssueLinksModel} from './model/DmrClusterTopologyIssueLinksModel';
import {DmrClusterTopologyIssueModel} from './model/DmrClusterTopologyIssueModel';
import {DmrClusterTopologyIssueResponseModel} from './model/DmrClusterTopologyIssueResponseModel';
import {DmrClusterTopologyIssuesResponseModel} from './model/DmrClusterTopologyIssuesResponseModel';
import {DmrClustersResponseModel} from './model/DmrClustersResponseModel';
import {DomainCertAuthoritiesResponseModel} from './model/DomainCertAuthoritiesResponseModel';
import {DomainCertAuthorityCollectionsModel} from './model/DomainCertAuthorityCollectionsModel';
import {DomainCertAuthorityLinksModel} from './model/DomainCertAuthorityLinksModel';
import {DomainCertAuthorityModel} from './model/DomainCertAuthorityModel';
import {DomainCertAuthorityResponseModel} from './model/DomainCertAuthorityResponseModel';
import {EventThresholdByPercentModel} from './model/EventThresholdByPercentModel';
import {EventThresholdByValueModel} from './model/EventThresholdByValueModel';
import {EventThresholdModel} from './model/EventThresholdModel';
import {MsgVpnAclProfileClientConnectExceptionCollectionsModel} from './model/MsgVpnAclProfileClientConnectExceptionCollectionsModel';
import {MsgVpnAclProfileClientConnectExceptionLinksModel} from './model/MsgVpnAclProfileClientConnectExceptionLinksModel';
import {MsgVpnAclProfileClientConnectExceptionModel} from './model/MsgVpnAclProfileClientConnectExceptionModel';
import {MsgVpnAclProfileClientConnectExceptionResponseModel} from './model/MsgVpnAclProfileClientConnectExceptionResponseModel';
import {MsgVpnAclProfileClientConnectExceptionsResponseModel} from './model/MsgVpnAclProfileClientConnectExceptionsResponseModel';
import {MsgVpnAclProfileCollectionsClientConnectExceptionsModel} from './model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel';
import {MsgVpnAclProfileCollectionsModel} from './model/MsgVpnAclProfileCollectionsModel';
import {MsgVpnAclProfileCollectionsPublishExceptionsModel} from './model/MsgVpnAclProfileCollectionsPublishExceptionsModel';
import {MsgVpnAclProfileCollectionsPublishTopicExceptionsModel} from './model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel';
import {MsgVpnAclProfileCollectionsSubscribeExceptionsModel} from './model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel';
import {MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel} from './model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel';
import {MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel} from './model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel';
import {MsgVpnAclProfileLinksModel} from './model/MsgVpnAclProfileLinksModel';
import {MsgVpnAclProfileModel} from './model/MsgVpnAclProfileModel';
import {MsgVpnAclProfilePublishExceptionCollectionsModel} from './model/MsgVpnAclProfilePublishExceptionCollectionsModel';
import {MsgVpnAclProfilePublishExceptionLinksModel} from './model/MsgVpnAclProfilePublishExceptionLinksModel';
import {MsgVpnAclProfilePublishExceptionModel} from './model/MsgVpnAclProfilePublishExceptionModel';
import {MsgVpnAclProfilePublishExceptionResponseModel} from './model/MsgVpnAclProfilePublishExceptionResponseModel';
import {MsgVpnAclProfilePublishExceptionsResponseModel} from './model/MsgVpnAclProfilePublishExceptionsResponseModel';
import {MsgVpnAclProfilePublishTopicExceptionCollectionsModel} from './model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel';
import {MsgVpnAclProfilePublishTopicExceptionLinksModel} from './model/MsgVpnAclProfilePublishTopicExceptionLinksModel';
import {MsgVpnAclProfilePublishTopicExceptionModel} from './model/MsgVpnAclProfilePublishTopicExceptionModel';
import {MsgVpnAclProfilePublishTopicExceptionResponseModel} from './model/MsgVpnAclProfilePublishTopicExceptionResponseModel';
import {MsgVpnAclProfilePublishTopicExceptionsResponseModel} from './model/MsgVpnAclProfilePublishTopicExceptionsResponseModel';
import {MsgVpnAclProfileResponseModel} from './model/MsgVpnAclProfileResponseModel';
import {MsgVpnAclProfileSubscribeExceptionCollectionsModel} from './model/MsgVpnAclProfileSubscribeExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeExceptionLinksModel} from './model/MsgVpnAclProfileSubscribeExceptionLinksModel';
import {MsgVpnAclProfileSubscribeExceptionModel} from './model/MsgVpnAclProfileSubscribeExceptionModel';
import {MsgVpnAclProfileSubscribeExceptionResponseModel} from './model/MsgVpnAclProfileSubscribeExceptionResponseModel';
import {MsgVpnAclProfileSubscribeExceptionsResponseModel} from './model/MsgVpnAclProfileSubscribeExceptionsResponseModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel} from './model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionLinksModel} from './model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionModel} from './model/MsgVpnAclProfileSubscribeShareNameExceptionModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionResponseModel} from './model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel} from './model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel';
import {MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel} from './model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeTopicExceptionLinksModel} from './model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel';
import {MsgVpnAclProfileSubscribeTopicExceptionModel} from './model/MsgVpnAclProfileSubscribeTopicExceptionModel';
import {MsgVpnAclProfileSubscribeTopicExceptionResponseModel} from './model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel';
import {MsgVpnAclProfileSubscribeTopicExceptionsResponseModel} from './model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel';
import {MsgVpnAclProfilesResponseModel} from './model/MsgVpnAclProfilesResponseModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel} from './model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel} from './model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimModel} from './model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel} from './model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel} from './model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel';
import {MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel} from './model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel';
import {MsgVpnAuthenticationOauthProfileCollectionsModel} from './model/MsgVpnAuthenticationOauthProfileCollectionsModel';
import {MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel} from './model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel';
import {MsgVpnAuthenticationOauthProfileLinksModel} from './model/MsgVpnAuthenticationOauthProfileLinksModel';
import {MsgVpnAuthenticationOauthProfileModel} from './model/MsgVpnAuthenticationOauthProfileModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel} from './model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel} from './model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel} from './model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel} from './model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel} from './model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel';
import {MsgVpnAuthenticationOauthProfileResponseModel} from './model/MsgVpnAuthenticationOauthProfileResponseModel';
import {MsgVpnAuthenticationOauthProfilesResponseModel} from './model/MsgVpnAuthenticationOauthProfilesResponseModel';
import {MsgVpnAuthenticationOauthProviderCollectionsModel} from './model/MsgVpnAuthenticationOauthProviderCollectionsModel';
import {MsgVpnAuthenticationOauthProviderLinksModel} from './model/MsgVpnAuthenticationOauthProviderLinksModel';
import {MsgVpnAuthenticationOauthProviderModel} from './model/MsgVpnAuthenticationOauthProviderModel';
import {MsgVpnAuthenticationOauthProviderResponseModel} from './model/MsgVpnAuthenticationOauthProviderResponseModel';
import {MsgVpnAuthenticationOauthProvidersResponseModel} from './model/MsgVpnAuthenticationOauthProvidersResponseModel';
import {MsgVpnAuthorizationGroupCollectionsModel} from './model/MsgVpnAuthorizationGroupCollectionsModel';
import {MsgVpnAuthorizationGroupLinksModel} from './model/MsgVpnAuthorizationGroupLinksModel';
import {MsgVpnAuthorizationGroupModel} from './model/MsgVpnAuthorizationGroupModel';
import {MsgVpnAuthorizationGroupResponseModel} from './model/MsgVpnAuthorizationGroupResponseModel';
import {MsgVpnAuthorizationGroupsResponseModel} from './model/MsgVpnAuthorizationGroupsResponseModel';
import {MsgVpnBridgeCollectionsLocalSubscriptionsModel} from './model/MsgVpnBridgeCollectionsLocalSubscriptionsModel';
import {MsgVpnBridgeCollectionsModel} from './model/MsgVpnBridgeCollectionsModel';
import {MsgVpnBridgeCollectionsRemoteMsgVpnsModel} from './model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel';
import {MsgVpnBridgeCollectionsRemoteSubscriptionsModel} from './model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel';
import {MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel} from './model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel';
import {MsgVpnBridgeCounterModel} from './model/MsgVpnBridgeCounterModel';
import {MsgVpnBridgeLinksModel} from './model/MsgVpnBridgeLinksModel';
import {MsgVpnBridgeLocalSubscriptionCollectionsModel} from './model/MsgVpnBridgeLocalSubscriptionCollectionsModel';
import {MsgVpnBridgeLocalSubscriptionLinksModel} from './model/MsgVpnBridgeLocalSubscriptionLinksModel';
import {MsgVpnBridgeLocalSubscriptionModel} from './model/MsgVpnBridgeLocalSubscriptionModel';
import {MsgVpnBridgeLocalSubscriptionResponseModel} from './model/MsgVpnBridgeLocalSubscriptionResponseModel';
import {MsgVpnBridgeLocalSubscriptionsResponseModel} from './model/MsgVpnBridgeLocalSubscriptionsResponseModel';
import {MsgVpnBridgeModel} from './model/MsgVpnBridgeModel';
import {MsgVpnBridgeRateModel} from './model/MsgVpnBridgeRateModel';
import {MsgVpnBridgeRemoteMsgVpnCollectionsModel} from './model/MsgVpnBridgeRemoteMsgVpnCollectionsModel';
import {MsgVpnBridgeRemoteMsgVpnLinksModel} from './model/MsgVpnBridgeRemoteMsgVpnLinksModel';
import {MsgVpnBridgeRemoteMsgVpnModel} from './model/MsgVpnBridgeRemoteMsgVpnModel';
import {MsgVpnBridgeRemoteMsgVpnResponseModel} from './model/MsgVpnBridgeRemoteMsgVpnResponseModel';
import {MsgVpnBridgeRemoteMsgVpnsResponseModel} from './model/MsgVpnBridgeRemoteMsgVpnsResponseModel';
import {MsgVpnBridgeRemoteSubscriptionCollectionsModel} from './model/MsgVpnBridgeRemoteSubscriptionCollectionsModel';
import {MsgVpnBridgeRemoteSubscriptionLinksModel} from './model/MsgVpnBridgeRemoteSubscriptionLinksModel';
import {MsgVpnBridgeRemoteSubscriptionModel} from './model/MsgVpnBridgeRemoteSubscriptionModel';
import {MsgVpnBridgeRemoteSubscriptionResponseModel} from './model/MsgVpnBridgeRemoteSubscriptionResponseModel';
import {MsgVpnBridgeRemoteSubscriptionsResponseModel} from './model/MsgVpnBridgeRemoteSubscriptionsResponseModel';
import {MsgVpnBridgeResponseModel} from './model/MsgVpnBridgeResponseModel';
import {MsgVpnBridgeTlsTrustedCommonNameCollectionsModel} from './model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel';
import {MsgVpnBridgeTlsTrustedCommonNameLinksModel} from './model/MsgVpnBridgeTlsTrustedCommonNameLinksModel';
import {MsgVpnBridgeTlsTrustedCommonNameModel} from './model/MsgVpnBridgeTlsTrustedCommonNameModel';
import {MsgVpnBridgeTlsTrustedCommonNameResponseModel} from './model/MsgVpnBridgeTlsTrustedCommonNameResponseModel';
import {MsgVpnBridgeTlsTrustedCommonNamesResponseModel} from './model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel';
import {MsgVpnBridgesResponseModel} from './model/MsgVpnBridgesResponseModel';
import {MsgVpnCertMatchingRuleAttributeFilterCollectionsModel} from './model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel';
import {MsgVpnCertMatchingRuleAttributeFilterLinksModel} from './model/MsgVpnCertMatchingRuleAttributeFilterLinksModel';
import {MsgVpnCertMatchingRuleAttributeFilterModel} from './model/MsgVpnCertMatchingRuleAttributeFilterModel';
import {MsgVpnCertMatchingRuleAttributeFilterResponseModel} from './model/MsgVpnCertMatchingRuleAttributeFilterResponseModel';
import {MsgVpnCertMatchingRuleAttributeFiltersResponseModel} from './model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel';
import {MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel} from './model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel';
import {MsgVpnCertMatchingRuleCollectionsConditionsModel} from './model/MsgVpnCertMatchingRuleCollectionsConditionsModel';
import {MsgVpnCertMatchingRuleCollectionsModel} from './model/MsgVpnCertMatchingRuleCollectionsModel';
import {MsgVpnCertMatchingRuleConditionCollectionsModel} from './model/MsgVpnCertMatchingRuleConditionCollectionsModel';
import {MsgVpnCertMatchingRuleConditionLinksModel} from './model/MsgVpnCertMatchingRuleConditionLinksModel';
import {MsgVpnCertMatchingRuleConditionModel} from './model/MsgVpnCertMatchingRuleConditionModel';
import {MsgVpnCertMatchingRuleConditionResponseModel} from './model/MsgVpnCertMatchingRuleConditionResponseModel';
import {MsgVpnCertMatchingRuleConditionsResponseModel} from './model/MsgVpnCertMatchingRuleConditionsResponseModel';
import {MsgVpnCertMatchingRuleLinksModel} from './model/MsgVpnCertMatchingRuleLinksModel';
import {MsgVpnCertMatchingRuleModel} from './model/MsgVpnCertMatchingRuleModel';
import {MsgVpnCertMatchingRuleResponseModel} from './model/MsgVpnCertMatchingRuleResponseModel';
import {MsgVpnCertMatchingRulesResponseModel} from './model/MsgVpnCertMatchingRulesResponseModel';
import {MsgVpnClientCollectionsConnectionsModel} from './model/MsgVpnClientCollectionsConnectionsModel';
import {MsgVpnClientCollectionsModel} from './model/MsgVpnClientCollectionsModel';
import {MsgVpnClientCollectionsRxFlowsModel} from './model/MsgVpnClientCollectionsRxFlowsModel';
import {MsgVpnClientCollectionsSubscriptionsModel} from './model/MsgVpnClientCollectionsSubscriptionsModel';
import {MsgVpnClientCollectionsTransactedSessionsModel} from './model/MsgVpnClientCollectionsTransactedSessionsModel';
import {MsgVpnClientCollectionsTxFlowsModel} from './model/MsgVpnClientCollectionsTxFlowsModel';
import {MsgVpnClientConnectionCollectionsModel} from './model/MsgVpnClientConnectionCollectionsModel';
import {MsgVpnClientConnectionLinksModel} from './model/MsgVpnClientConnectionLinksModel';
import {MsgVpnClientConnectionModel} from './model/MsgVpnClientConnectionModel';
import {MsgVpnClientConnectionResponseModel} from './model/MsgVpnClientConnectionResponseModel';
import {MsgVpnClientConnectionsResponseModel} from './model/MsgVpnClientConnectionsResponseModel';
import {MsgVpnClientLinksModel} from './model/MsgVpnClientLinksModel';
import {MsgVpnClientModel} from './model/MsgVpnClientModel';
import {MsgVpnClientProfileCollectionsModel} from './model/MsgVpnClientProfileCollectionsModel';
import {MsgVpnClientProfileLinksModel} from './model/MsgVpnClientProfileLinksModel';
import {MsgVpnClientProfileModel} from './model/MsgVpnClientProfileModel';
import {MsgVpnClientProfileResponseModel} from './model/MsgVpnClientProfileResponseModel';
import {MsgVpnClientProfilesResponseModel} from './model/MsgVpnClientProfilesResponseModel';
import {MsgVpnClientResponseModel} from './model/MsgVpnClientResponseModel';
import {MsgVpnClientRxFlowCollectionsModel} from './model/MsgVpnClientRxFlowCollectionsModel';
import {MsgVpnClientRxFlowLinksModel} from './model/MsgVpnClientRxFlowLinksModel';
import {MsgVpnClientRxFlowModel} from './model/MsgVpnClientRxFlowModel';
import {MsgVpnClientRxFlowResponseModel} from './model/MsgVpnClientRxFlowResponseModel';
import {MsgVpnClientRxFlowsResponseModel} from './model/MsgVpnClientRxFlowsResponseModel';
import {MsgVpnClientSubscriptionCollectionsModel} from './model/MsgVpnClientSubscriptionCollectionsModel';
import {MsgVpnClientSubscriptionLinksModel} from './model/MsgVpnClientSubscriptionLinksModel';
import {MsgVpnClientSubscriptionModel} from './model/MsgVpnClientSubscriptionModel';
import {MsgVpnClientSubscriptionResponseModel} from './model/MsgVpnClientSubscriptionResponseModel';
import {MsgVpnClientSubscriptionsResponseModel} from './model/MsgVpnClientSubscriptionsResponseModel';
import {MsgVpnClientTransactedSessionCollectionsModel} from './model/MsgVpnClientTransactedSessionCollectionsModel';
import {MsgVpnClientTransactedSessionLinksModel} from './model/MsgVpnClientTransactedSessionLinksModel';
import {MsgVpnClientTransactedSessionModel} from './model/MsgVpnClientTransactedSessionModel';
import {MsgVpnClientTransactedSessionResponseModel} from './model/MsgVpnClientTransactedSessionResponseModel';
import {MsgVpnClientTransactedSessionsResponseModel} from './model/MsgVpnClientTransactedSessionsResponseModel';
import {MsgVpnClientTxFlowCollectionsModel} from './model/MsgVpnClientTxFlowCollectionsModel';
import {MsgVpnClientTxFlowLinksModel} from './model/MsgVpnClientTxFlowLinksModel';
import {MsgVpnClientTxFlowModel} from './model/MsgVpnClientTxFlowModel';
import {MsgVpnClientTxFlowResponseModel} from './model/MsgVpnClientTxFlowResponseModel';
import {MsgVpnClientTxFlowsResponseModel} from './model/MsgVpnClientTxFlowsResponseModel';
import {MsgVpnClientUsernameAttributeCollectionsModel} from './model/MsgVpnClientUsernameAttributeCollectionsModel';
import {MsgVpnClientUsernameAttributeLinksModel} from './model/MsgVpnClientUsernameAttributeLinksModel';
import {MsgVpnClientUsernameAttributeModel} from './model/MsgVpnClientUsernameAttributeModel';
import {MsgVpnClientUsernameAttributeResponseModel} from './model/MsgVpnClientUsernameAttributeResponseModel';
import {MsgVpnClientUsernameAttributesResponseModel} from './model/MsgVpnClientUsernameAttributesResponseModel';
import {MsgVpnClientUsernameCollectionsAttributesModel} from './model/MsgVpnClientUsernameCollectionsAttributesModel';
import {MsgVpnClientUsernameCollectionsModel} from './model/MsgVpnClientUsernameCollectionsModel';
import {MsgVpnClientUsernameLinksModel} from './model/MsgVpnClientUsernameLinksModel';
import {MsgVpnClientUsernameModel} from './model/MsgVpnClientUsernameModel';
import {MsgVpnClientUsernameResponseModel} from './model/MsgVpnClientUsernameResponseModel';
import {MsgVpnClientUsernamesResponseModel} from './model/MsgVpnClientUsernamesResponseModel';
import {MsgVpnClientsResponseModel} from './model/MsgVpnClientsResponseModel';
import {MsgVpnCollectionsAclProfilesModel} from './model/MsgVpnCollectionsAclProfilesModel';
import {MsgVpnCollectionsAuthenticationOauthProfilesModel} from './model/MsgVpnCollectionsAuthenticationOauthProfilesModel';
import {MsgVpnCollectionsAuthenticationOauthProvidersModel} from './model/MsgVpnCollectionsAuthenticationOauthProvidersModel';
import {MsgVpnCollectionsAuthorizationGroupsModel} from './model/MsgVpnCollectionsAuthorizationGroupsModel';
import {MsgVpnCollectionsBridgesModel} from './model/MsgVpnCollectionsBridgesModel';
import {MsgVpnCollectionsCertMatchingRulesModel} from './model/MsgVpnCollectionsCertMatchingRulesModel';
import {MsgVpnCollectionsClientProfilesModel} from './model/MsgVpnCollectionsClientProfilesModel';
import {MsgVpnCollectionsClientUsernamesModel} from './model/MsgVpnCollectionsClientUsernamesModel';
import {MsgVpnCollectionsClientsModel} from './model/MsgVpnCollectionsClientsModel';
import {MsgVpnCollectionsConfigSyncRemoteNodesModel} from './model/MsgVpnCollectionsConfigSyncRemoteNodesModel';
import {MsgVpnCollectionsDistributedCachesModel} from './model/MsgVpnCollectionsDistributedCachesModel';
import {MsgVpnCollectionsDmrBridgesModel} from './model/MsgVpnCollectionsDmrBridgesModel';
import {MsgVpnCollectionsJndiConnectionFactoriesModel} from './model/MsgVpnCollectionsJndiConnectionFactoriesModel';
import {MsgVpnCollectionsJndiQueuesModel} from './model/MsgVpnCollectionsJndiQueuesModel';
import {MsgVpnCollectionsJndiTopicsModel} from './model/MsgVpnCollectionsJndiTopicsModel';
import {MsgVpnCollectionsKafkaReceiversModel} from './model/MsgVpnCollectionsKafkaReceiversModel';
import {MsgVpnCollectionsKafkaSendersModel} from './model/MsgVpnCollectionsKafkaSendersModel';
import {MsgVpnCollectionsModel} from './model/MsgVpnCollectionsModel';
import {MsgVpnCollectionsMqttRetainCachesModel} from './model/MsgVpnCollectionsMqttRetainCachesModel';
import {MsgVpnCollectionsMqttSessionsModel} from './model/MsgVpnCollectionsMqttSessionsModel';
import {MsgVpnCollectionsProxiesModel} from './model/MsgVpnCollectionsProxiesModel';
import {MsgVpnCollectionsQueueTemplatesModel} from './model/MsgVpnCollectionsQueueTemplatesModel';
import {MsgVpnCollectionsQueuesModel} from './model/MsgVpnCollectionsQueuesModel';
import {MsgVpnCollectionsReplayLogsModel} from './model/MsgVpnCollectionsReplayLogsModel';
import {MsgVpnCollectionsReplicatedTopicsModel} from './model/MsgVpnCollectionsReplicatedTopicsModel';
import {MsgVpnCollectionsRestDeliveryPointsModel} from './model/MsgVpnCollectionsRestDeliveryPointsModel';
import {MsgVpnCollectionsTelemetryProfilesModel} from './model/MsgVpnCollectionsTelemetryProfilesModel';
import {MsgVpnCollectionsTopicEndpointTemplatesModel} from './model/MsgVpnCollectionsTopicEndpointTemplatesModel';
import {MsgVpnCollectionsTopicEndpointsModel} from './model/MsgVpnCollectionsTopicEndpointsModel';
import {MsgVpnCollectionsTransactionsModel} from './model/MsgVpnCollectionsTransactionsModel';
import {MsgVpnConfigSyncRemoteNodeCollectionsModel} from './model/MsgVpnConfigSyncRemoteNodeCollectionsModel';
import {MsgVpnConfigSyncRemoteNodeLinksModel} from './model/MsgVpnConfigSyncRemoteNodeLinksModel';
import {MsgVpnConfigSyncRemoteNodeModel} from './model/MsgVpnConfigSyncRemoteNodeModel';
import {MsgVpnConfigSyncRemoteNodeResponseModel} from './model/MsgVpnConfigSyncRemoteNodeResponseModel';
import {MsgVpnConfigSyncRemoteNodesResponseModel} from './model/MsgVpnConfigSyncRemoteNodesResponseModel';
import {MsgVpnCounterModel} from './model/MsgVpnCounterModel';
import {MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel} from './model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel';
import {MsgVpnDistributedCacheClusterCollectionsInstancesModel} from './model/MsgVpnDistributedCacheClusterCollectionsInstancesModel';
import {MsgVpnDistributedCacheClusterCollectionsModel} from './model/MsgVpnDistributedCacheClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterCollectionsTopicsModel} from './model/MsgVpnDistributedCacheClusterCollectionsTopicsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel} from './model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel';
import {MsgVpnDistributedCacheClusterInstanceCollectionsModel} from './model/MsgVpnDistributedCacheClusterInstanceCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel} from './model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel';
import {MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel} from './model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel';
import {MsgVpnDistributedCacheClusterInstanceCounterModel} from './model/MsgVpnDistributedCacheClusterInstanceCounterModel';
import {MsgVpnDistributedCacheClusterInstanceLinksModel} from './model/MsgVpnDistributedCacheClusterInstanceLinksModel';
import {MsgVpnDistributedCacheClusterInstanceModel} from './model/MsgVpnDistributedCacheClusterInstanceModel';
import {MsgVpnDistributedCacheClusterInstanceRateModel} from './model/MsgVpnDistributedCacheClusterInstanceRateModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel} from './model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel';
import {MsgVpnDistributedCacheClusterInstanceResponseModel} from './model/MsgVpnDistributedCacheClusterInstanceResponseModel';
import {MsgVpnDistributedCacheClusterInstancesResponseModel} from './model/MsgVpnDistributedCacheClusterInstancesResponseModel';
import {MsgVpnDistributedCacheClusterLinksModel} from './model/MsgVpnDistributedCacheClusterLinksModel';
import {MsgVpnDistributedCacheClusterModel} from './model/MsgVpnDistributedCacheClusterModel';
import {MsgVpnDistributedCacheClusterResponseModel} from './model/MsgVpnDistributedCacheClusterResponseModel';
import {MsgVpnDistributedCacheClusterTopicCollectionsModel} from './model/MsgVpnDistributedCacheClusterTopicCollectionsModel';
import {MsgVpnDistributedCacheClusterTopicLinksModel} from './model/MsgVpnDistributedCacheClusterTopicLinksModel';
import {MsgVpnDistributedCacheClusterTopicModel} from './model/MsgVpnDistributedCacheClusterTopicModel';
import {MsgVpnDistributedCacheClusterTopicResponseModel} from './model/MsgVpnDistributedCacheClusterTopicResponseModel';
import {MsgVpnDistributedCacheClusterTopicsResponseModel} from './model/MsgVpnDistributedCacheClusterTopicsResponseModel';
import {MsgVpnDistributedCacheClustersResponseModel} from './model/MsgVpnDistributedCacheClustersResponseModel';
import {MsgVpnDistributedCacheCollectionsClustersModel} from './model/MsgVpnDistributedCacheCollectionsClustersModel';
import {MsgVpnDistributedCacheCollectionsModel} from './model/MsgVpnDistributedCacheCollectionsModel';
import {MsgVpnDistributedCacheLinksModel} from './model/MsgVpnDistributedCacheLinksModel';
import {MsgVpnDistributedCacheModel} from './model/MsgVpnDistributedCacheModel';
import {MsgVpnDistributedCacheResponseModel} from './model/MsgVpnDistributedCacheResponseModel';
import {MsgVpnDistributedCachesResponseModel} from './model/MsgVpnDistributedCachesResponseModel';
import {MsgVpnDmrBridgeCollectionsModel} from './model/MsgVpnDmrBridgeCollectionsModel';
import {MsgVpnDmrBridgeLinksModel} from './model/MsgVpnDmrBridgeLinksModel';
import {MsgVpnDmrBridgeModel} from './model/MsgVpnDmrBridgeModel';
import {MsgVpnDmrBridgeResponseModel} from './model/MsgVpnDmrBridgeResponseModel';
import {MsgVpnDmrBridgesResponseModel} from './model/MsgVpnDmrBridgesResponseModel';
import {MsgVpnJndiConnectionFactoriesResponseModel} from './model/MsgVpnJndiConnectionFactoriesResponseModel';
import {MsgVpnJndiConnectionFactoryCollectionsModel} from './model/MsgVpnJndiConnectionFactoryCollectionsModel';
import {MsgVpnJndiConnectionFactoryLinksModel} from './model/MsgVpnJndiConnectionFactoryLinksModel';
import {MsgVpnJndiConnectionFactoryModel} from './model/MsgVpnJndiConnectionFactoryModel';
import {MsgVpnJndiConnectionFactoryResponseModel} from './model/MsgVpnJndiConnectionFactoryResponseModel';
import {MsgVpnJndiQueueCollectionsModel} from './model/MsgVpnJndiQueueCollectionsModel';
import {MsgVpnJndiQueueLinksModel} from './model/MsgVpnJndiQueueLinksModel';
import {MsgVpnJndiQueueModel} from './model/MsgVpnJndiQueueModel';
import {MsgVpnJndiQueueResponseModel} from './model/MsgVpnJndiQueueResponseModel';
import {MsgVpnJndiQueuesResponseModel} from './model/MsgVpnJndiQueuesResponseModel';
import {MsgVpnJndiTopicCollectionsModel} from './model/MsgVpnJndiTopicCollectionsModel';
import {MsgVpnJndiTopicLinksModel} from './model/MsgVpnJndiTopicLinksModel';
import {MsgVpnJndiTopicModel} from './model/MsgVpnJndiTopicModel';
import {MsgVpnJndiTopicResponseModel} from './model/MsgVpnJndiTopicResponseModel';
import {MsgVpnJndiTopicsResponseModel} from './model/MsgVpnJndiTopicsResponseModel';
import {MsgVpnKafkaReceiverCollectionsModel} from './model/MsgVpnKafkaReceiverCollectionsModel';
import {MsgVpnKafkaReceiverCollectionsRemoteBrokersModel} from './model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel';
import {MsgVpnKafkaReceiverCollectionsTopicBindingsModel} from './model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel';
import {MsgVpnKafkaReceiverLinksModel} from './model/MsgVpnKafkaReceiverLinksModel';
import {MsgVpnKafkaReceiverModel} from './model/MsgVpnKafkaReceiverModel';
import {MsgVpnKafkaReceiverRemoteBrokerCollectionsModel} from './model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel';
import {MsgVpnKafkaReceiverRemoteBrokerLinksModel} from './model/MsgVpnKafkaReceiverRemoteBrokerLinksModel';
import {MsgVpnKafkaReceiverRemoteBrokerModel} from './model/MsgVpnKafkaReceiverRemoteBrokerModel';
import {MsgVpnKafkaReceiverRemoteBrokerResponseModel} from './model/MsgVpnKafkaReceiverRemoteBrokerResponseModel';
import {MsgVpnKafkaReceiverRemoteBrokersResponseModel} from './model/MsgVpnKafkaReceiverRemoteBrokersResponseModel';
import {MsgVpnKafkaReceiverResponseModel} from './model/MsgVpnKafkaReceiverResponseModel';
import {MsgVpnKafkaReceiverTopicBindingCollectionsModel} from './model/MsgVpnKafkaReceiverTopicBindingCollectionsModel';
import {MsgVpnKafkaReceiverTopicBindingLinksModel} from './model/MsgVpnKafkaReceiverTopicBindingLinksModel';
import {MsgVpnKafkaReceiverTopicBindingModel} from './model/MsgVpnKafkaReceiverTopicBindingModel';
import {MsgVpnKafkaReceiverTopicBindingResponseModel} from './model/MsgVpnKafkaReceiverTopicBindingResponseModel';
import {MsgVpnKafkaReceiverTopicBindingsResponseModel} from './model/MsgVpnKafkaReceiverTopicBindingsResponseModel';
import {MsgVpnKafkaReceiversResponseModel} from './model/MsgVpnKafkaReceiversResponseModel';
import {MsgVpnKafkaSenderCollectionsModel} from './model/MsgVpnKafkaSenderCollectionsModel';
import {MsgVpnKafkaSenderCollectionsQueueBindingsModel} from './model/MsgVpnKafkaSenderCollectionsQueueBindingsModel';
import {MsgVpnKafkaSenderCollectionsRemoteBrokersModel} from './model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel';
import {MsgVpnKafkaSenderLinksModel} from './model/MsgVpnKafkaSenderLinksModel';
import {MsgVpnKafkaSenderModel} from './model/MsgVpnKafkaSenderModel';
import {MsgVpnKafkaSenderQueueBindingCollectionsModel} from './model/MsgVpnKafkaSenderQueueBindingCollectionsModel';
import {MsgVpnKafkaSenderQueueBindingLinksModel} from './model/MsgVpnKafkaSenderQueueBindingLinksModel';
import {MsgVpnKafkaSenderQueueBindingModel} from './model/MsgVpnKafkaSenderQueueBindingModel';
import {MsgVpnKafkaSenderQueueBindingResponseModel} from './model/MsgVpnKafkaSenderQueueBindingResponseModel';
import {MsgVpnKafkaSenderQueueBindingsResponseModel} from './model/MsgVpnKafkaSenderQueueBindingsResponseModel';
import {MsgVpnKafkaSenderRemoteBrokerCollectionsModel} from './model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel';
import {MsgVpnKafkaSenderRemoteBrokerLinksModel} from './model/MsgVpnKafkaSenderRemoteBrokerLinksModel';
import {MsgVpnKafkaSenderRemoteBrokerModel} from './model/MsgVpnKafkaSenderRemoteBrokerModel';
import {MsgVpnKafkaSenderRemoteBrokerResponseModel} from './model/MsgVpnKafkaSenderRemoteBrokerResponseModel';
import {MsgVpnKafkaSenderRemoteBrokersResponseModel} from './model/MsgVpnKafkaSenderRemoteBrokersResponseModel';
import {MsgVpnKafkaSenderResponseModel} from './model/MsgVpnKafkaSenderResponseModel';
import {MsgVpnKafkaSendersResponseModel} from './model/MsgVpnKafkaSendersResponseModel';
import {MsgVpnLinksModel} from './model/MsgVpnLinksModel';
import {MsgVpnModel} from './model/MsgVpnModel';
import {MsgVpnMqttRetainCacheCollectionsModel} from './model/MsgVpnMqttRetainCacheCollectionsModel';
import {MsgVpnMqttRetainCacheLinksModel} from './model/MsgVpnMqttRetainCacheLinksModel';
import {MsgVpnMqttRetainCacheModel} from './model/MsgVpnMqttRetainCacheModel';
import {MsgVpnMqttRetainCacheResponseModel} from './model/MsgVpnMqttRetainCacheResponseModel';
import {MsgVpnMqttRetainCachesResponseModel} from './model/MsgVpnMqttRetainCachesResponseModel';
import {MsgVpnMqttSessionCollectionsModel} from './model/MsgVpnMqttSessionCollectionsModel';
import {MsgVpnMqttSessionCollectionsSubscriptionsModel} from './model/MsgVpnMqttSessionCollectionsSubscriptionsModel';
import {MsgVpnMqttSessionCounterModel} from './model/MsgVpnMqttSessionCounterModel';
import {MsgVpnMqttSessionLinksModel} from './model/MsgVpnMqttSessionLinksModel';
import {MsgVpnMqttSessionModel} from './model/MsgVpnMqttSessionModel';
import {MsgVpnMqttSessionResponseModel} from './model/MsgVpnMqttSessionResponseModel';
import {MsgVpnMqttSessionSubscriptionCollectionsModel} from './model/MsgVpnMqttSessionSubscriptionCollectionsModel';
import {MsgVpnMqttSessionSubscriptionLinksModel} from './model/MsgVpnMqttSessionSubscriptionLinksModel';
import {MsgVpnMqttSessionSubscriptionModel} from './model/MsgVpnMqttSessionSubscriptionModel';
import {MsgVpnMqttSessionSubscriptionResponseModel} from './model/MsgVpnMqttSessionSubscriptionResponseModel';
import {MsgVpnMqttSessionSubscriptionsResponseModel} from './model/MsgVpnMqttSessionSubscriptionsResponseModel';
import {MsgVpnMqttSessionsResponseModel} from './model/MsgVpnMqttSessionsResponseModel';
import {MsgVpnProxiesResponseModel} from './model/MsgVpnProxiesResponseModel';
import {MsgVpnProxyCollectionsModel} from './model/MsgVpnProxyCollectionsModel';
import {MsgVpnProxyLinksModel} from './model/MsgVpnProxyLinksModel';
import {MsgVpnProxyModel} from './model/MsgVpnProxyModel';
import {MsgVpnProxyResponseModel} from './model/MsgVpnProxyResponseModel';
import {MsgVpnQueueCollectionsModel} from './model/MsgVpnQueueCollectionsModel';
import {MsgVpnQueueCollectionsMsgsModel} from './model/MsgVpnQueueCollectionsMsgsModel';
import {MsgVpnQueueCollectionsPrioritiesModel} from './model/MsgVpnQueueCollectionsPrioritiesModel';
import {MsgVpnQueueCollectionsSubscriptionsModel} from './model/MsgVpnQueueCollectionsSubscriptionsModel';
import {MsgVpnQueueCollectionsTxFlowsModel} from './model/MsgVpnQueueCollectionsTxFlowsModel';
import {MsgVpnQueueLinksModel} from './model/MsgVpnQueueLinksModel';
import {MsgVpnQueueModel} from './model/MsgVpnQueueModel';
import {MsgVpnQueueMsgCollectionsModel} from './model/MsgVpnQueueMsgCollectionsModel';
import {MsgVpnQueueMsgLinksModel} from './model/MsgVpnQueueMsgLinksModel';
import {MsgVpnQueueMsgModel} from './model/MsgVpnQueueMsgModel';
import {MsgVpnQueueMsgResponseModel} from './model/MsgVpnQueueMsgResponseModel';
import {MsgVpnQueueMsgsResponseModel} from './model/MsgVpnQueueMsgsResponseModel';
import {MsgVpnQueuePrioritiesResponseModel} from './model/MsgVpnQueuePrioritiesResponseModel';
import {MsgVpnQueuePriorityCollectionsModel} from './model/MsgVpnQueuePriorityCollectionsModel';
import {MsgVpnQueuePriorityLinksModel} from './model/MsgVpnQueuePriorityLinksModel';
import {MsgVpnQueuePriorityModel} from './model/MsgVpnQueuePriorityModel';
import {MsgVpnQueuePriorityResponseModel} from './model/MsgVpnQueuePriorityResponseModel';
import {MsgVpnQueueResponseModel} from './model/MsgVpnQueueResponseModel';
import {MsgVpnQueueSubscriptionCollectionsModel} from './model/MsgVpnQueueSubscriptionCollectionsModel';
import {MsgVpnQueueSubscriptionLinksModel} from './model/MsgVpnQueueSubscriptionLinksModel';
import {MsgVpnQueueSubscriptionModel} from './model/MsgVpnQueueSubscriptionModel';
import {MsgVpnQueueSubscriptionResponseModel} from './model/MsgVpnQueueSubscriptionResponseModel';
import {MsgVpnQueueSubscriptionsResponseModel} from './model/MsgVpnQueueSubscriptionsResponseModel';
import {MsgVpnQueueTemplateCollectionsModel} from './model/MsgVpnQueueTemplateCollectionsModel';
import {MsgVpnQueueTemplateLinksModel} from './model/MsgVpnQueueTemplateLinksModel';
import {MsgVpnQueueTemplateModel} from './model/MsgVpnQueueTemplateModel';
import {MsgVpnQueueTemplateResponseModel} from './model/MsgVpnQueueTemplateResponseModel';
import {MsgVpnQueueTemplatesResponseModel} from './model/MsgVpnQueueTemplatesResponseModel';
import {MsgVpnQueueTxFlowCollectionsModel} from './model/MsgVpnQueueTxFlowCollectionsModel';
import {MsgVpnQueueTxFlowLinksModel} from './model/MsgVpnQueueTxFlowLinksModel';
import {MsgVpnQueueTxFlowModel} from './model/MsgVpnQueueTxFlowModel';
import {MsgVpnQueueTxFlowResponseModel} from './model/MsgVpnQueueTxFlowResponseModel';
import {MsgVpnQueueTxFlowsResponseModel} from './model/MsgVpnQueueTxFlowsResponseModel';
import {MsgVpnQueuesResponseModel} from './model/MsgVpnQueuesResponseModel';
import {MsgVpnRateModel} from './model/MsgVpnRateModel';
import {MsgVpnReplayLogCollectionsModel} from './model/MsgVpnReplayLogCollectionsModel';
import {MsgVpnReplayLogCollectionsMsgsModel} from './model/MsgVpnReplayLogCollectionsMsgsModel';
import {MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel} from './model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel';
import {MsgVpnReplayLogLinksModel} from './model/MsgVpnReplayLogLinksModel';
import {MsgVpnReplayLogModel} from './model/MsgVpnReplayLogModel';
import {MsgVpnReplayLogMsgCollectionsModel} from './model/MsgVpnReplayLogMsgCollectionsModel';
import {MsgVpnReplayLogMsgLinksModel} from './model/MsgVpnReplayLogMsgLinksModel';
import {MsgVpnReplayLogMsgModel} from './model/MsgVpnReplayLogMsgModel';
import {MsgVpnReplayLogMsgResponseModel} from './model/MsgVpnReplayLogMsgResponseModel';
import {MsgVpnReplayLogMsgsResponseModel} from './model/MsgVpnReplayLogMsgsResponseModel';
import {MsgVpnReplayLogResponseModel} from './model/MsgVpnReplayLogResponseModel';
import {MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel} from './model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel';
import {MsgVpnReplayLogTopicFilterSubscriptionLinksModel} from './model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel';
import {MsgVpnReplayLogTopicFilterSubscriptionModel} from './model/MsgVpnReplayLogTopicFilterSubscriptionModel';
import {MsgVpnReplayLogTopicFilterSubscriptionResponseModel} from './model/MsgVpnReplayLogTopicFilterSubscriptionResponseModel';
import {MsgVpnReplayLogTopicFilterSubscriptionsResponseModel} from './model/MsgVpnReplayLogTopicFilterSubscriptionsResponseModel';
import {MsgVpnReplayLogsResponseModel} from './model/MsgVpnReplayLogsResponseModel';
import {MsgVpnReplicatedTopicCollectionsModel} from './model/MsgVpnReplicatedTopicCollectionsModel';
import {MsgVpnReplicatedTopicLinksModel} from './model/MsgVpnReplicatedTopicLinksModel';
import {MsgVpnReplicatedTopicModel} from './model/MsgVpnReplicatedTopicModel';
import {MsgVpnReplicatedTopicResponseModel} from './model/MsgVpnReplicatedTopicResponseModel';
import {MsgVpnReplicatedTopicsResponseModel} from './model/MsgVpnReplicatedTopicsResponseModel';
import {MsgVpnResponseModel} from './model/MsgVpnResponseModel';
import {MsgVpnRestDeliveryPointCollectionsModel} from './model/MsgVpnRestDeliveryPointCollectionsModel';
import {MsgVpnRestDeliveryPointCollectionsQueueBindingsModel} from './model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel';
import {MsgVpnRestDeliveryPointCollectionsRestConsumersModel} from './model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel';
import {MsgVpnRestDeliveryPointLinksModel} from './model/MsgVpnRestDeliveryPointLinksModel';
import {MsgVpnRestDeliveryPointModel} from './model/MsgVpnRestDeliveryPointModel';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsModel} from './model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel} from './model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel';
import {MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel} from './model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel';
import {MsgVpnRestDeliveryPointQueueBindingLinksModel} from './model/MsgVpnRestDeliveryPointQueueBindingLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingModel} from './model/MsgVpnRestDeliveryPointQueueBindingModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel} from './model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel} from './model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} from './model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} from './model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel} from './model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel} from './model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel} from './model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} from './model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} from './model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel} from './model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingResponseModel} from './model/MsgVpnRestDeliveryPointQueueBindingResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingsResponseModel} from './model/MsgVpnRestDeliveryPointQueueBindingsResponseModel';
import {MsgVpnRestDeliveryPointResponseModel} from './model/MsgVpnRestDeliveryPointResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsModel} from './model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel} from './model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel} from './model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel';
import {MsgVpnRestDeliveryPointRestConsumerCounterModel} from './model/MsgVpnRestDeliveryPointRestConsumerCounterModel';
import {MsgVpnRestDeliveryPointRestConsumerLinksModel} from './model/MsgVpnRestDeliveryPointRestConsumerLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerModel} from './model/MsgVpnRestDeliveryPointRestConsumerModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel} from './model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel} from './model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} from './model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumerResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel} from './model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel} from './model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} from './model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel';
import {MsgVpnRestDeliveryPointRestConsumersResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumersResponseModel';
import {MsgVpnRestDeliveryPointsResponseModel} from './model/MsgVpnRestDeliveryPointsResponseModel';
import {MsgVpnTelemetryProfileCollectionsModel} from './model/MsgVpnTelemetryProfileCollectionsModel';
import {MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel} from './model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel';
import {MsgVpnTelemetryProfileCollectionsTraceFiltersModel} from './model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel';
import {MsgVpnTelemetryProfileLinksModel} from './model/MsgVpnTelemetryProfileLinksModel';
import {MsgVpnTelemetryProfileModel} from './model/MsgVpnTelemetryProfileModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel} from './model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel} from './model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} from './model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} from './model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} from './model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel';
import {MsgVpnTelemetryProfileResponseModel} from './model/MsgVpnTelemetryProfileResponseModel';
import {MsgVpnTelemetryProfileTraceFilterCollectionsModel} from './model/MsgVpnTelemetryProfileTraceFilterCollectionsModel';
import {MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel} from './model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel';
import {MsgVpnTelemetryProfileTraceFilterLinksModel} from './model/MsgVpnTelemetryProfileTraceFilterLinksModel';
import {MsgVpnTelemetryProfileTraceFilterModel} from './model/MsgVpnTelemetryProfileTraceFilterModel';
import {MsgVpnTelemetryProfileTraceFilterResponseModel} from './model/MsgVpnTelemetryProfileTraceFilterResponseModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel} from './model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel} from './model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionModel} from './model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} from './model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} from './model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel';
import {MsgVpnTelemetryProfileTraceFiltersResponseModel} from './model/MsgVpnTelemetryProfileTraceFiltersResponseModel';
import {MsgVpnTelemetryProfilesResponseModel} from './model/MsgVpnTelemetryProfilesResponseModel';
import {MsgVpnTopicEndpointCollectionsModel} from './model/MsgVpnTopicEndpointCollectionsModel';
import {MsgVpnTopicEndpointCollectionsMsgsModel} from './model/MsgVpnTopicEndpointCollectionsMsgsModel';
import {MsgVpnTopicEndpointCollectionsPrioritiesModel} from './model/MsgVpnTopicEndpointCollectionsPrioritiesModel';
import {MsgVpnTopicEndpointCollectionsTxFlowsModel} from './model/MsgVpnTopicEndpointCollectionsTxFlowsModel';
import {MsgVpnTopicEndpointLinksModel} from './model/MsgVpnTopicEndpointLinksModel';
import {MsgVpnTopicEndpointModel} from './model/MsgVpnTopicEndpointModel';
import {MsgVpnTopicEndpointMsgCollectionsModel} from './model/MsgVpnTopicEndpointMsgCollectionsModel';
import {MsgVpnTopicEndpointMsgLinksModel} from './model/MsgVpnTopicEndpointMsgLinksModel';
import {MsgVpnTopicEndpointMsgModel} from './model/MsgVpnTopicEndpointMsgModel';
import {MsgVpnTopicEndpointMsgResponseModel} from './model/MsgVpnTopicEndpointMsgResponseModel';
import {MsgVpnTopicEndpointMsgsResponseModel} from './model/MsgVpnTopicEndpointMsgsResponseModel';
import {MsgVpnTopicEndpointPrioritiesResponseModel} from './model/MsgVpnTopicEndpointPrioritiesResponseModel';
import {MsgVpnTopicEndpointPriorityCollectionsModel} from './model/MsgVpnTopicEndpointPriorityCollectionsModel';
import {MsgVpnTopicEndpointPriorityLinksModel} from './model/MsgVpnTopicEndpointPriorityLinksModel';
import {MsgVpnTopicEndpointPriorityModel} from './model/MsgVpnTopicEndpointPriorityModel';
import {MsgVpnTopicEndpointPriorityResponseModel} from './model/MsgVpnTopicEndpointPriorityResponseModel';
import {MsgVpnTopicEndpointResponseModel} from './model/MsgVpnTopicEndpointResponseModel';
import {MsgVpnTopicEndpointTemplateCollectionsModel} from './model/MsgVpnTopicEndpointTemplateCollectionsModel';
import {MsgVpnTopicEndpointTemplateLinksModel} from './model/MsgVpnTopicEndpointTemplateLinksModel';
import {MsgVpnTopicEndpointTemplateModel} from './model/MsgVpnTopicEndpointTemplateModel';
import {MsgVpnTopicEndpointTemplateResponseModel} from './model/MsgVpnTopicEndpointTemplateResponseModel';
import {MsgVpnTopicEndpointTemplatesResponseModel} from './model/MsgVpnTopicEndpointTemplatesResponseModel';
import {MsgVpnTopicEndpointTxFlowCollectionsModel} from './model/MsgVpnTopicEndpointTxFlowCollectionsModel';
import {MsgVpnTopicEndpointTxFlowLinksModel} from './model/MsgVpnTopicEndpointTxFlowLinksModel';
import {MsgVpnTopicEndpointTxFlowModel} from './model/MsgVpnTopicEndpointTxFlowModel';
import {MsgVpnTopicEndpointTxFlowResponseModel} from './model/MsgVpnTopicEndpointTxFlowResponseModel';
import {MsgVpnTopicEndpointTxFlowsResponseModel} from './model/MsgVpnTopicEndpointTxFlowsResponseModel';
import {MsgVpnTopicEndpointsResponseModel} from './model/MsgVpnTopicEndpointsResponseModel';
import {MsgVpnTransactionCollectionsConsumerMsgsModel} from './model/MsgVpnTransactionCollectionsConsumerMsgsModel';
import {MsgVpnTransactionCollectionsModel} from './model/MsgVpnTransactionCollectionsModel';
import {MsgVpnTransactionCollectionsPublisherMsgsModel} from './model/MsgVpnTransactionCollectionsPublisherMsgsModel';
import {MsgVpnTransactionConsumerMsgCollectionsModel} from './model/MsgVpnTransactionConsumerMsgCollectionsModel';
import {MsgVpnTransactionConsumerMsgLinksModel} from './model/MsgVpnTransactionConsumerMsgLinksModel';
import {MsgVpnTransactionConsumerMsgModel} from './model/MsgVpnTransactionConsumerMsgModel';
import {MsgVpnTransactionConsumerMsgResponseModel} from './model/MsgVpnTransactionConsumerMsgResponseModel';
import {MsgVpnTransactionConsumerMsgsResponseModel} from './model/MsgVpnTransactionConsumerMsgsResponseModel';
import {MsgVpnTransactionLinksModel} from './model/MsgVpnTransactionLinksModel';
import {MsgVpnTransactionModel} from './model/MsgVpnTransactionModel';
import {MsgVpnTransactionPublisherMsgCollectionsModel} from './model/MsgVpnTransactionPublisherMsgCollectionsModel';
import {MsgVpnTransactionPublisherMsgLinksModel} from './model/MsgVpnTransactionPublisherMsgLinksModel';
import {MsgVpnTransactionPublisherMsgModel} from './model/MsgVpnTransactionPublisherMsgModel';
import {MsgVpnTransactionPublisherMsgResponseModel} from './model/MsgVpnTransactionPublisherMsgResponseModel';
import {MsgVpnTransactionPublisherMsgsResponseModel} from './model/MsgVpnTransactionPublisherMsgsResponseModel';
import {MsgVpnTransactionResponseModel} from './model/MsgVpnTransactionResponseModel';
import {MsgVpnTransactionsResponseModel} from './model/MsgVpnTransactionsResponseModel';
import {MsgVpnsResponseModel} from './model/MsgVpnsResponseModel';
import {OauthProfileAccessLevelGroupCollectionsModel} from './model/OauthProfileAccessLevelGroupCollectionsModel';
import {OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel} from './model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel';
import {OauthProfileAccessLevelGroupLinksModel} from './model/OauthProfileAccessLevelGroupLinksModel';
import {OauthProfileAccessLevelGroupModel} from './model/OauthProfileAccessLevelGroupModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel} from './model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel} from './model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} from './model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} from './model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} from './model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel';
import {OauthProfileAccessLevelGroupResponseModel} from './model/OauthProfileAccessLevelGroupResponseModel';
import {OauthProfileAccessLevelGroupsResponseModel} from './model/OauthProfileAccessLevelGroupsResponseModel';
import {OauthProfileClientAllowedHostCollectionsModel} from './model/OauthProfileClientAllowedHostCollectionsModel';
import {OauthProfileClientAllowedHostLinksModel} from './model/OauthProfileClientAllowedHostLinksModel';
import {OauthProfileClientAllowedHostModel} from './model/OauthProfileClientAllowedHostModel';
import {OauthProfileClientAllowedHostResponseModel} from './model/OauthProfileClientAllowedHostResponseModel';
import {OauthProfileClientAllowedHostsResponseModel} from './model/OauthProfileClientAllowedHostsResponseModel';
import {OauthProfileClientAuthorizationParameterCollectionsModel} from './model/OauthProfileClientAuthorizationParameterCollectionsModel';
import {OauthProfileClientAuthorizationParameterLinksModel} from './model/OauthProfileClientAuthorizationParameterLinksModel';
import {OauthProfileClientAuthorizationParameterModel} from './model/OauthProfileClientAuthorizationParameterModel';
import {OauthProfileClientAuthorizationParameterResponseModel} from './model/OauthProfileClientAuthorizationParameterResponseModel';
import {OauthProfileClientAuthorizationParametersResponseModel} from './model/OauthProfileClientAuthorizationParametersResponseModel';
import {OauthProfileClientRequiredClaimCollectionsModel} from './model/OauthProfileClientRequiredClaimCollectionsModel';
import {OauthProfileClientRequiredClaimLinksModel} from './model/OauthProfileClientRequiredClaimLinksModel';
import {OauthProfileClientRequiredClaimModel} from './model/OauthProfileClientRequiredClaimModel';
import {OauthProfileClientRequiredClaimResponseModel} from './model/OauthProfileClientRequiredClaimResponseModel';
import {OauthProfileClientRequiredClaimsResponseModel} from './model/OauthProfileClientRequiredClaimsResponseModel';
import {OauthProfileCollectionsAccessLevelGroupsModel} from './model/OauthProfileCollectionsAccessLevelGroupsModel';
import {OauthProfileCollectionsClientAllowedHostsModel} from './model/OauthProfileCollectionsClientAllowedHostsModel';
import {OauthProfileCollectionsClientAuthorizationParametersModel} from './model/OauthProfileCollectionsClientAuthorizationParametersModel';
import {OauthProfileCollectionsClientRequiredClaimsModel} from './model/OauthProfileCollectionsClientRequiredClaimsModel';
import {OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel} from './model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel';
import {OauthProfileCollectionsModel} from './model/OauthProfileCollectionsModel';
import {OauthProfileCollectionsResourceServerRequiredClaimsModel} from './model/OauthProfileCollectionsResourceServerRequiredClaimsModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel} from './model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel} from './model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionModel} from './model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} from './model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} from './model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel';
import {OauthProfileLinksModel} from './model/OauthProfileLinksModel';
import {OauthProfileModel} from './model/OauthProfileModel';
import {OauthProfileResourceServerRequiredClaimCollectionsModel} from './model/OauthProfileResourceServerRequiredClaimCollectionsModel';
import {OauthProfileResourceServerRequiredClaimLinksModel} from './model/OauthProfileResourceServerRequiredClaimLinksModel';
import {OauthProfileResourceServerRequiredClaimModel} from './model/OauthProfileResourceServerRequiredClaimModel';
import {OauthProfileResourceServerRequiredClaimResponseModel} from './model/OauthProfileResourceServerRequiredClaimResponseModel';
import {OauthProfileResourceServerRequiredClaimsResponseModel} from './model/OauthProfileResourceServerRequiredClaimsResponseModel';
import {OauthProfileResponseModel} from './model/OauthProfileResponseModel';
import {OauthProfilesResponseModel} from './model/OauthProfilesResponseModel';
import {SempErrorModel} from './model/SempErrorModel';
import {SempMetaModel} from './model/SempMetaModel';
import {SempMetaOnlyResponseModel} from './model/SempMetaOnlyResponseModel';
import {SempPagingModel} from './model/SempPagingModel';
import {SempRequestModel} from './model/SempRequestModel';
import {SessionCollectionsModel} from './model/SessionCollectionsModel';
import {SessionLinksModel} from './model/SessionLinksModel';
import {SessionModel} from './model/SessionModel';
import {SessionResponseModel} from './model/SessionResponseModel';
import {SessionsResponseModel} from './model/SessionsResponseModel';
import {StandardDomainCertAuthoritiesResponseModel} from './model/StandardDomainCertAuthoritiesResponseModel';
import {StandardDomainCertAuthorityCollectionsModel} from './model/StandardDomainCertAuthorityCollectionsModel';
import {StandardDomainCertAuthorityLinksModel} from './model/StandardDomainCertAuthorityLinksModel';
import {StandardDomainCertAuthorityModel} from './model/StandardDomainCertAuthorityModel';
import {StandardDomainCertAuthorityResponseModel} from './model/StandardDomainCertAuthorityResponseModel';
import {VirtualHostnameCollectionsModel} from './model/VirtualHostnameCollectionsModel';
import {VirtualHostnameLinksModel} from './model/VirtualHostnameLinksModel';
import {VirtualHostnameModel} from './model/VirtualHostnameModel';
import {VirtualHostnameResponseModel} from './model/VirtualHostnameResponseModel';
import {VirtualHostnamesResponseModel} from './model/VirtualHostnamesResponseModel';
import {AboutApi} from './api/AboutApi';
import {AclProfileApi} from './api/AclProfileApi';
import {AllApi} from './api/AllApi';
import {AuthenticationOauthProfileApi} from './api/AuthenticationOauthProfileApi';
import {AuthenticationOauthProviderApi} from './api/AuthenticationOauthProviderApi';
import {AuthorizationGroupApi} from './api/AuthorizationGroupApi';
import {BridgeApi} from './api/BridgeApi';
import {CertAuthorityApi} from './api/CertAuthorityApi';
import {CertMatchingRuleApi} from './api/CertMatchingRuleApi';
import {ClientApi} from './api/ClientApi';
import {ClientCertAuthorityApi} from './api/ClientCertAuthorityApi';
import {ClientProfileApi} from './api/ClientProfileApi';
import {ClientUsernameApi} from './api/ClientUsernameApi';
import {ConfigSyncLocalDatabaseRowApi} from './api/ConfigSyncLocalDatabaseRowApi';
import {ConfigSyncRemoteNodeApi} from './api/ConfigSyncRemoteNodeApi';
import {DistributedCacheApi} from './api/DistributedCacheApi';
import {DmrBridgeApi} from './api/DmrBridgeApi';
import {DmrClusterApi} from './api/DmrClusterApi';
import {DomainCertAuthorityApi} from './api/DomainCertAuthorityApi';
import {JndiApi} from './api/JndiApi';
import {KafkaReceiverApi} from './api/KafkaReceiverApi';
import {KafkaSenderApi} from './api/KafkaSenderApi';
import {MqttRetainCacheApi} from './api/MqttRetainCacheApi';
import {MqttSessionApi} from './api/MqttSessionApi';
import {MsgVpnApi} from './api/MsgVpnApi';
import {OauthProfileApi} from './api/OauthProfileApi';
import {ProxyApi} from './api/ProxyApi';
import {QueueApi} from './api/QueueApi';
import {QueueTemplateApi} from './api/QueueTemplateApi';
import {ReplayLogApi} from './api/ReplayLogApi';
import {ReplicatedTopicApi} from './api/ReplicatedTopicApi';
import {RestDeliveryPointApi} from './api/RestDeliveryPointApi';
import {SessionApi} from './api/SessionApi';
import {StandardDomainCertAuthorityApi} from './api/StandardDomainCertAuthorityApi';
import {TelemetryProfileApi} from './api/TelemetryProfileApi';
import {TopicEndpointApi} from './api/TopicEndpointApi';
import {TopicEndpointTemplateApi} from './api/TopicEndpointTemplateApi';
import {TransactionApi} from './api/TransactionApi';
import {VirtualHostnameApi} from './api/VirtualHostnameApi';

/**
* SEMP__starting_in_v2_see_note_1_is_a_RESTful_API_for_configuring_monitoring_and_administering_a_Solace_PubSub_broker_SEMP_uses_URIs_to_address_manageable_resources_of_the_Solace_PubSub_broker__Resources_are_individual_objects_collections_of_objects_or__exclusively_in_the_action_API_actions__This_document_applies_to_the_following_APIAPIBase_PathPurposeComments____________MonitoringSEMPv2monitorQuerying_operational_parametersSee_note_2The_following_APIs_are_also_availableAPIBase_PathPurposeComments____________ActionSEMPv2actionPerforming_actionsSee_note_2ConfigurationSEMPv2configReading_and_writing_config_stateSee_note_2Resources_are_always_nouns_with_individual_objects_being_singular_and_collections_being_plural_Objects_within_a_collection_are_identified_by_an_obj_id_which_follows_the_collection_name_with_the_form_collection_nameobj_id__An_obj_id_consists_of_one_or_more_identifying_attributes_separated_by_commas__Commas_that_appear_in_the_identifying_attribute_itself_must_be_percent_encoded_Actions_within_an_object_are_identified_by_an_action_id_which_follows_the_object_name_with_the_form_obj_idaction_id_Some_examplesSEMPv2configmsgVpns_________________________MsgVpn_collectionSEMPv2configmsgVpnsa_______________________MsgVpn_object_named_aSEMPv2configmsgVpnsabridges_______________Bridge_collection_in_MsgVpn_aSEMPv2configmsgVpnsabridgesbauto________Bridge_object_named_b_with_virtual_router_auto_in_MsgVpn_aSEMPv2configmsgVpnsaqueues________________Queue_collection_in_MsgVpn_aSEMPv2configmsgVpnsaqueuesc______________Queue_object_named_c_in_MsgVpn_aSEMPv2actionmsgVpnsaqueuescstartReplay__Action_that_starts_a_replay_on_Queue_c_in_MsgVpn_aSEMPv2monitormsgVpnsaclients______________Client_collection_in_MsgVpn_aSEMPv2monitormsgVpnsaclientsd____________Client_object_named_d_in_MsgVpn_a_Collection_ResourcesCollections_are_unordered_lists_of_objects__unless_described_as_otherwise_and_are_described_by_JSON_arrays__Each_item_in_the_array_represents_an_object_in_the_same_manner_as_the_individual_object_would_normally_be_represented__In_the_configuration_API_the_creation_of_a_new_object_is_done_through_its_collection_resource__Object_and_Action_ResourcesObjects_are_composed_of_attributes_actions_collections_and_other_objects__They_are_described_by_JSON_objects_as_namevalue_pairs__The_collections_and_actions_of_an_object_are_not_contained_directly_in_the_objects_JSON_content_rather_the_content_includes_an_attribute_containing_a_URI_which_points_to_the_collections_and_actions__These_contained_resources_must_be_managed_through_this_URI__At_a_minimum_every_object_has_one_or_more_identifying_attributes_and_its_own_uri_attribute_which_contains_the_URI_pointing_to_itself_Actions_are_also_composed_of_attributes_and_are_described_by_JSON_objects_as_namevalue_pairs__Unlike_objects_however_they_are_not_members_of_a_collection_and_cannot_be_retrieved_only_performed__Actions_only_exist_in_the_action_API_Attributes_in_an_object_or_action_may_have_any_combination_of_the_following_propertiesPropertyMeaningComments_________IdentifyingAttribute_is_involved_in_unique_identification_of_the_object_and_appears_in_its_URIConstAttribute_value_can_only_be_chosen_during_object_creationRequiredAttribute_must_be_provided_in_the_requestRead_OnlyAttribute_value_cannot_be_changedSee_note_3Write_OnlyAttribute_can_only_be_written_not_read_unless_the_attribute_is_also_opaqueSee_the_documentation_for_the_opaque_propertyRequires_DisableAttribute_cannot_be_changed_while_the_object__or_the_relevant_part_of_the_object_is_administratively_enabledAuto_DisableModifying_this_attribute_while_the_object__or_the_relevant_part_of_the_object_is_administratively_enabled_may_be_service_impacting_as_one_or_more_attributes_will_be_temporarily_disabled_to_apply_the_changeDeprecatedAttribute_is_deprecated_and_will_disappear_in_the_next_SEMP_versionOpaqueAttribute_can_be_set_or_retrieved_in_opaque_form_when_the_opaquePassword_query_parameter_is_presentSee_the_opaquePassword_query_parameter_documentationIn_some_requests_certain_attributes_may_only_be_provided_in_certain_combinations_with_other_attributesRelationshipMeaningComments_________RequiresAttribute_may_only_be_provided_in_a_request_if_a_particular_attribute_or_combination_of_attributes_is_also_provided_in_the_requestThe_requires_property_will_not_be_enforced_for_an_attribute_when_all_of_the_following_conditions_are_met__a_the_attribute_is_not_write_only__b_the_value_provided_for_the_attribute_is_the_same_as_its_current__or_on_object_creation_its_default_value_and__c_the_attribute_requires_a_write_only_attribute__In_addition_the_requires_property_may_not_be_enforced_even_if_only_conditions__a_and__b_are_met_ConflictsAttribute_may_only_be_provided_in_a_request_if_a_particular_attribute_or_combination_of_attributes_is_not_also_provided_in_the_requestIn_the_monitoring_API_any_non_identifying_attribute_may_not_be_returned_in_a_GET__HTTP_MethodsThe_following_HTTP_methods_manipulate_resources_in_accordance_with_these_general_principles__Note_that_some_methods_are_only_used_in_certain_APIsMethodResourceMeaningRequest_BodyResponse_BodyNotes__________________POSTCollectionCreate_objectInitial_attribute_valuesObject_attributes_and_metadataAbsent_attributes_are_set_to_default__If_object_already_exists_a_400_error_is_returnedPUTObjectUpdate_objectNew_attribute_valuesObject_attributes_and_metadataIf_does_not_exist_the_object_is_first_created__Absent_attributes_are_set_to_default_with_certain_exceptions__see_note_4PUTActionPerforms_actionAction_argumentsAction_metadataPATCHObjectUpdate_objectNew_attribute_valuesObject_attributes_and_metadataAbsent_attributes_are_left_unchanged__If_the_object_does_not_exist_a_404_error_is_returnedDELETEObjectDelete_objectEmptyObject_metadataIf_the_object_does_not_exist_a_404_is_returnedGETObjectGet_objectEmptyObject_attributes_and_metadataIf_the_object_does_not_exist_a_404_is_returnedGETCollectionGet_collectionEmptyObject_attributes_and_collection_metadataIf_the_collection_is_empty_then_an_empty_collection_is_returned_with_a_200_code_Common_Query_ParametersThe_following_are_some_common_query_parameters_that_are_supported_by_many_methodURI_combinations__Individual_URIs_may_document_additional_parameters__Note_that_multiple_query_parameters_can_be_used_together_in_a_single_URI_separated_by_the_ampersand_character__For_example_Request_for_the_MsgVpns_collection_using_two_hypothetical_query_parameters_q1_and_q2_with_values_val1_and_val2_respectivelySEMPv2monitormsgVpnsq1val1q2val2_selectInclude_in_the_response_only_selected_attributes_of_the_object_or_exclude_from_the_response_selected_attributes_of_the_object__Use_this_query_parameter_to_limit_the_size_of_the_returned_data_for_each_returned_object_return_only_those_fields_that_are_desired_or_exclude_fields_that_are_not_desired_The_value_of_select_is_a_comma_separated_list_of_attribute_names__If_the_list_contains_attribute_names_that_are_not_prefaced_by___only_those_attributes_are_included_in_the_response__If_the_list_contains_attribute_names_that_are_prefaced_by___those_attributes_are_excluded_from_the_response__If_the_list_contains_both_types_then_the_difference_of_the_first_set_of_attributes_and_the_second_set_of_attributes_is_returned__If_the_list_is_empty__i_e__select_it_is_treated_the_same_as_if_no_select_was_provided_all_attribute_are_returned_All_attributes_that_are_prefaced_by___must_follow_all_attributes_that_are_not_prefaced_by____In_addition_each_attribute_name_in_the_list_must_match_at_least_one_attribute_in_the_object_Names_may_include_the__wildcard__zero_or_more_characters__Nested_attribute_names_are_supported_using_periods__e_g__parentName_childName_Some_examples_List_of_all_MsgVpn_namesSEMPv2monitormsgVpnsselectmsgVpnName_List_of_all_MsgVpn_and_their_attributes_except_for_their_namesSEMPv2monitormsgVpnsselect_msgVpnName_Authentication_attributes_of_MsgVpn_financeSEMPv2monitormsgVpnsfinanceselectauthentication2A_All_attributes_of_MsgVpn_finance_except_for_authentication_attributesSEMPv2monitormsgVpnsfinanceselect_authentication2A_Access_related_attributes_of_Queue_orderQ_of_MsgVpn_financeSEMPv2monitormsgVpnsfinancequeuesorderQselectownerpermission_whereInclude_in_the_response_only_objects_where_certain_conditions_are_true__Use_this_query_parameter_to_limit_which_objects_are_returned_to_those_whose_attribute_values_meet_the_given_conditions_The_value_of_where_is_a_comma_separated_list_of_expressions__All_expressions_must_be_true_for_the_object_to_be_included_in_the_response__Each_expression_takes_the_formexpression___attribute_name_OP_valueOP_____________________Write_only_attributes_cannot_be_used_in_a_where_expression_value_may_be_a_number_string_true_or_false_as_appropriate_for_the_type_of_attribute_name_A__in_a_string_value_is_interpreted_as_a_wildcard__zero_or_more_characters_but_can_be_escaped_using___The__character_can_itself_be_escaped_using___The__wildcard_can_only_be_used_with_the__and__operators__If__is_used_as_a_literal_with_other_operators_it_must_be_escaped_The____and__operators_perform_a_simple_byte_for_byte_comparison_when_used_with_a_string_value_Some_examples_Only_enabled_MsgVpnsSEMPv2monitormsgVpnswhereenabled3D3Dtrue_Only_MsgVpns_using_basic_non_LDAP_authenticationSEMPv2monitormsgVpnswhereauthenticationBasicEnabled3D3DtrueauthenticationBasicType213Dldap_Only_MsgVpns_that_allow_more_than_100_client_connectionsSEMPv2monitormsgVpnswheremaxConnectionCount3E100_Only_MsgVpns_with_msgVpnName_starting_with_BSEMPv2monitormsgVpnswheremsgVpnName3D3DB2A_countLimit_the_count_of_objects_in_the_response__This_can_be_useful_to_limit_the_size_of_the_response_for_large_collections__The_minimum_value_for_count_is_1_and_the_default_is_10__There_is_also_a_per_collection_maximum_value_to_limit_request_handling_time_count_does_not_guarantee_that_a_minimum_number_of_objects_will_be_returned__A_page_may_contain_fewer_than_count_objects_or_even_be_empty__Additional_objects_may_nonetheless_be_available_for_retrieval_on_subsequent_pages__See_the_cursor_query_parameter_documentation_for_more_information_on_paging_For_example_Up_to_25_MsgVpnsSEMPv2monitormsgVpnscount25_cursorThe_cursor_or_position_for_the_next_page_of_objects__Cursors_are_opaque_data_that_should_not_be_created_or_interpreted_by_SEMP_clients_and_should_only_be_used_as_described_below_When_a_request_is_made_for_a_collection_and_there_may_be_additional_objects_available_for_retrieval_that_are_not_included_in_the_initial_response_the_response_will_include_a_cursorQuery_field_containing_a_cursor__The_value_of_this_field_can_be_specified_in_the_cursor_query_parameter_of_a_subsequent_request_to_retrieve_the_next_page_of_objects_Applications_must_continue_to_use_the_cursorQuery_if_one_is_provided_in_order_to_retrieve_the_full_set_of_objects_associated_with_the_request_even_if_a_page_contains_fewer_than_the_requested_number_of_objects__see_the_count_query_parameter_documentation_or_is_empty__opaquePasswordAttributes_with_the_opaque_property_are_also_write_only_and_so_cannot_normally_be_retrieved_in_a_GET__However_when_a_password_is_provided_in_the_opaquePassword_query_parameter_attributes_with_the_opaque_property_are_retrieved_in_a_GET_in_opaque_form_encrypted_with_this_password__The_query_parameter_can_also_be_used_on_a_POST_PATCH_or_PUT_to_set_opaque_attributes_using_opaque_attribute_values_retrieved_in_a_GET_so_long_as1__the_same_password_that_was_used_to_retrieve_the_opaque_attribute_values_is_provided_and2__the_broker_to_which_the_request_is_being_sent_has_the_same_major_and_minor_SEMP_version_as_the_broker_that_produced_the_opaque_attribute_values_The_password_provided_in_the_query_parameter_must_be_a_minimum_of_8_characters_and_a_maximum_of_128_characters_The_query_parameter_can_only_be_used_in_the_configuration_API_and_only_over_HTTPS__AuthenticationWhen_a_client_makes_its_first_SEMPv2_request_it_must_supply_a_username_and_password_using_HTTP_Basic_authentication_or_an_OAuth_token_or_tokens_using_HTTP_Bearer_authentication_When_HTTP_Basic_authentication_is_used_the_broker_returns_a_cookie_containing_a_session_key__The_client_can_omit_the_username_and_password_from_subsequent_requests_because_the_broker_can_use_the_session_cookie_for_authentication_instead__When_the_session_expires_or_is_deleted_the_client_must_provide_the_username_and_password_again_and_the_broker_creates_a_new_session_There_are_a_limited_number_of_session_slots_available_on_the_broker__The_broker_returns_529_No_SEMP_Session_Available_if_it_is_not_able_to_allocate_a_session_If_certain_attributessuch_as_a_users_passwordare_changed_the_broker_automatically_deletes_the_affected_sessions__These_attributes_are_documented_below__However_changes_in_external_user_configuration_data_stored_on_a_RADIUS_or_LDAP_server_do_not_trigger_the_broker_to_delete_the_associated_session_s_therefore_you_must_do_this_manually_if_required_A_client_can_retrieve_its_current_session_information_using_the_aboutuser_endpoint_and_delete_its_own_session_using_the_aboutuserlogout_endpoint__A_client_with_appropriate_permissions_can_also_manage_all_sessions_using_the_sessions_endpoint_Sessions_are_not_created_when_authenticating_with_an_OAuth_token_or_tokens_using_HTTP_Bearer_authentication__If_a_session_cookie_is_provided_it_is_ignored__HelpVisit__our_website_httpssolace_com_to_learn_more_about_Solace_You_can_also_download_the_SEMP_API_specifications_by_clicking__here_httpssolace_comdownloads_If_you_need_additional_support_please_contact_us_at__supportsolace_com_mailtosupportsolace_com__NotesNoteDescription______1This_specification_defines_SEMP_starting_in_v2_and_not_the_original_SEMP_v1_interface__Request_and_response_formats_between_v1_and_v2_are_entirely_incompatible_although_both_protocols_share_a_common_port_configuration_on_the_Solace_PubSub_broker__They_are_differentiated_by_the_initial_portion_of_the_URI_path_one_of_either_SEMP_or_SEMPv22This_API_is_partially_implemented__Only_a_subset_of_all_objects_are_available_3Read_only_attributes_may_appear_in_POST_and_PUTPATCH_requests_but_are_ignored_except_when_the_read_only_attribute_is_identifying_4On_a_PUT_if_the_SEMP_user_is_not_authorized_to_modify_the_attribute_its_value_is_left_unchanged_rather_than_set_to_default__In_addition_the_values_of_write_only_attributes_are_not_set_to_their_defaults_on_a_PUT_except_in_the_following_two_cases_there_is_a_mutual_requires_relationship_with_another_non_write_only_attribute_both_attributes_are_absent_from_the_request_and_the_non_write_only_attribute_is_not_currently_set_to_its_default_value_or_the_attribute_is_also_opaque_and_the_opaquePassword_query_parameter_is_provided_in_the_request_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SempSolaceElementManagementProtocol = require('index'); // See note below*.
* var xxxSvc = new SempSolaceElementManagementProtocol.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SempSolaceElementManagementProtocol.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SempSolaceElementManagementProtocol.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SempSolaceElementManagementProtocol.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.36
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AboutApiCollectionsModel model constructor.
     * @property {module:model/AboutApiCollectionsModel}
     */
    AboutApiCollectionsModel,

    /**
     * The AboutApiLinksModel model constructor.
     * @property {module:model/AboutApiLinksModel}
     */
    AboutApiLinksModel,

    /**
     * The AboutApiModel model constructor.
     * @property {module:model/AboutApiModel}
     */
    AboutApiModel,

    /**
     * The AboutApiResponseModel model constructor.
     * @property {module:model/AboutApiResponseModel}
     */
    AboutApiResponseModel,

    /**
     * The AboutCollectionsModel model constructor.
     * @property {module:model/AboutCollectionsModel}
     */
    AboutCollectionsModel,

    /**
     * The AboutLinksModel model constructor.
     * @property {module:model/AboutLinksModel}
     */
    AboutLinksModel,

    /**
     * The AboutModel model constructor.
     * @property {module:model/AboutModel}
     */
    AboutModel,

    /**
     * The AboutResponseModel model constructor.
     * @property {module:model/AboutResponseModel}
     */
    AboutResponseModel,

    /**
     * The AboutUserCollectionsModel model constructor.
     * @property {module:model/AboutUserCollectionsModel}
     */
    AboutUserCollectionsModel,

    /**
     * The AboutUserCollectionsMsgVpnsModel model constructor.
     * @property {module:model/AboutUserCollectionsMsgVpnsModel}
     */
    AboutUserCollectionsMsgVpnsModel,

    /**
     * The AboutUserLinksModel model constructor.
     * @property {module:model/AboutUserLinksModel}
     */
    AboutUserLinksModel,

    /**
     * The AboutUserModel model constructor.
     * @property {module:model/AboutUserModel}
     */
    AboutUserModel,

    /**
     * The AboutUserMsgVpnCollectionsModel model constructor.
     * @property {module:model/AboutUserMsgVpnCollectionsModel}
     */
    AboutUserMsgVpnCollectionsModel,

    /**
     * The AboutUserMsgVpnLinksModel model constructor.
     * @property {module:model/AboutUserMsgVpnLinksModel}
     */
    AboutUserMsgVpnLinksModel,

    /**
     * The AboutUserMsgVpnModel model constructor.
     * @property {module:model/AboutUserMsgVpnModel}
     */
    AboutUserMsgVpnModel,

    /**
     * The AboutUserMsgVpnResponseModel model constructor.
     * @property {module:model/AboutUserMsgVpnResponseModel}
     */
    AboutUserMsgVpnResponseModel,

    /**
     * The AboutUserMsgVpnsResponseModel model constructor.
     * @property {module:model/AboutUserMsgVpnsResponseModel}
     */
    AboutUserMsgVpnsResponseModel,

    /**
     * The AboutUserResponseModel model constructor.
     * @property {module:model/AboutUserResponseModel}
     */
    AboutUserResponseModel,

    /**
     * The BrokerCollectionsCertAuthoritiesModel model constructor.
     * @property {module:model/BrokerCollectionsCertAuthoritiesModel}
     */
    BrokerCollectionsCertAuthoritiesModel,

    /**
     * The BrokerCollectionsClientCertAuthoritiesModel model constructor.
     * @property {module:model/BrokerCollectionsClientCertAuthoritiesModel}
     */
    BrokerCollectionsClientCertAuthoritiesModel,

    /**
     * The BrokerCollectionsConfigSyncLocalDatabaseRowsModel model constructor.
     * @property {module:model/BrokerCollectionsConfigSyncLocalDatabaseRowsModel}
     */
    BrokerCollectionsConfigSyncLocalDatabaseRowsModel,

    /**
     * The BrokerCollectionsDmrClustersModel model constructor.
     * @property {module:model/BrokerCollectionsDmrClustersModel}
     */
    BrokerCollectionsDmrClustersModel,

    /**
     * The BrokerCollectionsDomainCertAuthoritiesModel model constructor.
     * @property {module:model/BrokerCollectionsDomainCertAuthoritiesModel}
     */
    BrokerCollectionsDomainCertAuthoritiesModel,

    /**
     * The BrokerCollectionsModel model constructor.
     * @property {module:model/BrokerCollectionsModel}
     */
    BrokerCollectionsModel,

    /**
     * The BrokerCollectionsMsgVpnsModel model constructor.
     * @property {module:model/BrokerCollectionsMsgVpnsModel}
     */
    BrokerCollectionsMsgVpnsModel,

    /**
     * The BrokerCollectionsOauthProfilesModel model constructor.
     * @property {module:model/BrokerCollectionsOauthProfilesModel}
     */
    BrokerCollectionsOauthProfilesModel,

    /**
     * The BrokerCollectionsSessionsModel model constructor.
     * @property {module:model/BrokerCollectionsSessionsModel}
     */
    BrokerCollectionsSessionsModel,

    /**
     * The BrokerCollectionsStandardDomainCertAuthoritiesModel model constructor.
     * @property {module:model/BrokerCollectionsStandardDomainCertAuthoritiesModel}
     */
    BrokerCollectionsStandardDomainCertAuthoritiesModel,

    /**
     * The BrokerCollectionsVirtualHostnamesModel model constructor.
     * @property {module:model/BrokerCollectionsVirtualHostnamesModel}
     */
    BrokerCollectionsVirtualHostnamesModel,

    /**
     * The BrokerLinksModel model constructor.
     * @property {module:model/BrokerLinksModel}
     */
    BrokerLinksModel,

    /**
     * The BrokerModel model constructor.
     * @property {module:model/BrokerModel}
     */
    BrokerModel,

    /**
     * The BrokerResponseModel model constructor.
     * @property {module:model/BrokerResponseModel}
     */
    BrokerResponseModel,

    /**
     * The CertAuthoritiesResponseModel model constructor.
     * @property {module:model/CertAuthoritiesResponseModel}
     */
    CertAuthoritiesResponseModel,

    /**
     * The CertAuthorityCollectionsModel model constructor.
     * @property {module:model/CertAuthorityCollectionsModel}
     */
    CertAuthorityCollectionsModel,

    /**
     * The CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel model constructor.
     * @property {module:model/CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel}
     */
    CertAuthorityCollectionsOcspTlsTrustedCommonNamesModel,

    /**
     * The CertAuthorityLinksModel model constructor.
     * @property {module:model/CertAuthorityLinksModel}
     */
    CertAuthorityLinksModel,

    /**
     * The CertAuthorityModel model constructor.
     * @property {module:model/CertAuthorityModel}
     */
    CertAuthorityModel,

    /**
     * The CertAuthorityOcspTlsTrustedCommonNameCollectionsModel model constructor.
     * @property {module:model/CertAuthorityOcspTlsTrustedCommonNameCollectionsModel}
     */
    CertAuthorityOcspTlsTrustedCommonNameCollectionsModel,

    /**
     * The CertAuthorityOcspTlsTrustedCommonNameLinksModel model constructor.
     * @property {module:model/CertAuthorityOcspTlsTrustedCommonNameLinksModel}
     */
    CertAuthorityOcspTlsTrustedCommonNameLinksModel,

    /**
     * The CertAuthorityOcspTlsTrustedCommonNameModel model constructor.
     * @property {module:model/CertAuthorityOcspTlsTrustedCommonNameModel}
     */
    CertAuthorityOcspTlsTrustedCommonNameModel,

    /**
     * The CertAuthorityOcspTlsTrustedCommonNameResponseModel model constructor.
     * @property {module:model/CertAuthorityOcspTlsTrustedCommonNameResponseModel}
     */
    CertAuthorityOcspTlsTrustedCommonNameResponseModel,

    /**
     * The CertAuthorityOcspTlsTrustedCommonNamesResponseModel model constructor.
     * @property {module:model/CertAuthorityOcspTlsTrustedCommonNamesResponseModel}
     */
    CertAuthorityOcspTlsTrustedCommonNamesResponseModel,

    /**
     * The CertAuthorityResponseModel model constructor.
     * @property {module:model/CertAuthorityResponseModel}
     */
    CertAuthorityResponseModel,

    /**
     * The ClientCertAuthoritiesResponseModel model constructor.
     * @property {module:model/ClientCertAuthoritiesResponseModel}
     */
    ClientCertAuthoritiesResponseModel,

    /**
     * The ClientCertAuthorityCollectionsModel model constructor.
     * @property {module:model/ClientCertAuthorityCollectionsModel}
     */
    ClientCertAuthorityCollectionsModel,

    /**
     * The ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel model constructor.
     * @property {module:model/ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel}
     */
    ClientCertAuthorityCollectionsOcspTlsTrustedCommonNamesModel,

    /**
     * The ClientCertAuthorityLinksModel model constructor.
     * @property {module:model/ClientCertAuthorityLinksModel}
     */
    ClientCertAuthorityLinksModel,

    /**
     * The ClientCertAuthorityModel model constructor.
     * @property {module:model/ClientCertAuthorityModel}
     */
    ClientCertAuthorityModel,

    /**
     * The ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel model constructor.
     * @property {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel}
     */
    ClientCertAuthorityOcspTlsTrustedCommonNameCollectionsModel,

    /**
     * The ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel model constructor.
     * @property {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel}
     */
    ClientCertAuthorityOcspTlsTrustedCommonNameLinksModel,

    /**
     * The ClientCertAuthorityOcspTlsTrustedCommonNameModel model constructor.
     * @property {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameModel}
     */
    ClientCertAuthorityOcspTlsTrustedCommonNameModel,

    /**
     * The ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel model constructor.
     * @property {module:model/ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel}
     */
    ClientCertAuthorityOcspTlsTrustedCommonNameResponseModel,

    /**
     * The ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel model constructor.
     * @property {module:model/ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel}
     */
    ClientCertAuthorityOcspTlsTrustedCommonNamesResponseModel,

    /**
     * The ClientCertAuthorityResponseModel model constructor.
     * @property {module:model/ClientCertAuthorityResponseModel}
     */
    ClientCertAuthorityResponseModel,

    /**
     * The ConfigSyncLocalDatabaseRowCollectionsModel model constructor.
     * @property {module:model/ConfigSyncLocalDatabaseRowCollectionsModel}
     */
    ConfigSyncLocalDatabaseRowCollectionsModel,

    /**
     * The ConfigSyncLocalDatabaseRowLinksModel model constructor.
     * @property {module:model/ConfigSyncLocalDatabaseRowLinksModel}
     */
    ConfigSyncLocalDatabaseRowLinksModel,

    /**
     * The ConfigSyncLocalDatabaseRowModel model constructor.
     * @property {module:model/ConfigSyncLocalDatabaseRowModel}
     */
    ConfigSyncLocalDatabaseRowModel,

    /**
     * The ConfigSyncLocalDatabaseRowResponseModel model constructor.
     * @property {module:model/ConfigSyncLocalDatabaseRowResponseModel}
     */
    ConfigSyncLocalDatabaseRowResponseModel,

    /**
     * The ConfigSyncLocalDatabaseRowsResponseModel model constructor.
     * @property {module:model/ConfigSyncLocalDatabaseRowsResponseModel}
     */
    ConfigSyncLocalDatabaseRowsResponseModel,

    /**
     * The DmrClusterCertMatchingRuleAttributeFilterCollectionsModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleAttributeFilterCollectionsModel}
     */
    DmrClusterCertMatchingRuleAttributeFilterCollectionsModel,

    /**
     * The DmrClusterCertMatchingRuleAttributeFilterLinksModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleAttributeFilterLinksModel}
     */
    DmrClusterCertMatchingRuleAttributeFilterLinksModel,

    /**
     * The DmrClusterCertMatchingRuleAttributeFilterModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleAttributeFilterModel}
     */
    DmrClusterCertMatchingRuleAttributeFilterModel,

    /**
     * The DmrClusterCertMatchingRuleAttributeFilterResponseModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel}
     */
    DmrClusterCertMatchingRuleAttributeFilterResponseModel,

    /**
     * The DmrClusterCertMatchingRuleAttributeFiltersResponseModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel}
     */
    DmrClusterCertMatchingRuleAttributeFiltersResponseModel,

    /**
     * The DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel}
     */
    DmrClusterCertMatchingRuleCollectionsAttributeFiltersModel,

    /**
     * The DmrClusterCertMatchingRuleCollectionsConditionsModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleCollectionsConditionsModel}
     */
    DmrClusterCertMatchingRuleCollectionsConditionsModel,

    /**
     * The DmrClusterCertMatchingRuleCollectionsModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleCollectionsModel}
     */
    DmrClusterCertMatchingRuleCollectionsModel,

    /**
     * The DmrClusterCertMatchingRuleConditionCollectionsModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleConditionCollectionsModel}
     */
    DmrClusterCertMatchingRuleConditionCollectionsModel,

    /**
     * The DmrClusterCertMatchingRuleConditionLinksModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleConditionLinksModel}
     */
    DmrClusterCertMatchingRuleConditionLinksModel,

    /**
     * The DmrClusterCertMatchingRuleConditionModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleConditionModel}
     */
    DmrClusterCertMatchingRuleConditionModel,

    /**
     * The DmrClusterCertMatchingRuleConditionResponseModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleConditionResponseModel}
     */
    DmrClusterCertMatchingRuleConditionResponseModel,

    /**
     * The DmrClusterCertMatchingRuleConditionsResponseModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleConditionsResponseModel}
     */
    DmrClusterCertMatchingRuleConditionsResponseModel,

    /**
     * The DmrClusterCertMatchingRuleLinksModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleLinksModel}
     */
    DmrClusterCertMatchingRuleLinksModel,

    /**
     * The DmrClusterCertMatchingRuleModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleModel}
     */
    DmrClusterCertMatchingRuleModel,

    /**
     * The DmrClusterCertMatchingRuleResponseModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRuleResponseModel}
     */
    DmrClusterCertMatchingRuleResponseModel,

    /**
     * The DmrClusterCertMatchingRulesResponseModel model constructor.
     * @property {module:model/DmrClusterCertMatchingRulesResponseModel}
     */
    DmrClusterCertMatchingRulesResponseModel,

    /**
     * The DmrClusterCollectionsCertMatchingRulesModel model constructor.
     * @property {module:model/DmrClusterCollectionsCertMatchingRulesModel}
     */
    DmrClusterCollectionsCertMatchingRulesModel,

    /**
     * The DmrClusterCollectionsLinksModel model constructor.
     * @property {module:model/DmrClusterCollectionsLinksModel}
     */
    DmrClusterCollectionsLinksModel,

    /**
     * The DmrClusterCollectionsModel model constructor.
     * @property {module:model/DmrClusterCollectionsModel}
     */
    DmrClusterCollectionsModel,

    /**
     * The DmrClusterCollectionsTopologyIssuesModel model constructor.
     * @property {module:model/DmrClusterCollectionsTopologyIssuesModel}
     */
    DmrClusterCollectionsTopologyIssuesModel,

    /**
     * The DmrClusterLinkAttributeCollectionsModel model constructor.
     * @property {module:model/DmrClusterLinkAttributeCollectionsModel}
     */
    DmrClusterLinkAttributeCollectionsModel,

    /**
     * The DmrClusterLinkAttributeLinksModel model constructor.
     * @property {module:model/DmrClusterLinkAttributeLinksModel}
     */
    DmrClusterLinkAttributeLinksModel,

    /**
     * The DmrClusterLinkAttributeModel model constructor.
     * @property {module:model/DmrClusterLinkAttributeModel}
     */
    DmrClusterLinkAttributeModel,

    /**
     * The DmrClusterLinkAttributeResponseModel model constructor.
     * @property {module:model/DmrClusterLinkAttributeResponseModel}
     */
    DmrClusterLinkAttributeResponseModel,

    /**
     * The DmrClusterLinkAttributesResponseModel model constructor.
     * @property {module:model/DmrClusterLinkAttributesResponseModel}
     */
    DmrClusterLinkAttributesResponseModel,

    /**
     * The DmrClusterLinkChannelCollectionsModel model constructor.
     * @property {module:model/DmrClusterLinkChannelCollectionsModel}
     */
    DmrClusterLinkChannelCollectionsModel,

    /**
     * The DmrClusterLinkChannelLinksModel model constructor.
     * @property {module:model/DmrClusterLinkChannelLinksModel}
     */
    DmrClusterLinkChannelLinksModel,

    /**
     * The DmrClusterLinkChannelModel model constructor.
     * @property {module:model/DmrClusterLinkChannelModel}
     */
    DmrClusterLinkChannelModel,

    /**
     * The DmrClusterLinkChannelResponseModel model constructor.
     * @property {module:model/DmrClusterLinkChannelResponseModel}
     */
    DmrClusterLinkChannelResponseModel,

    /**
     * The DmrClusterLinkChannelsResponseModel model constructor.
     * @property {module:model/DmrClusterLinkChannelsResponseModel}
     */
    DmrClusterLinkChannelsResponseModel,

    /**
     * The DmrClusterLinkCollectionsAttributesModel model constructor.
     * @property {module:model/DmrClusterLinkCollectionsAttributesModel}
     */
    DmrClusterLinkCollectionsAttributesModel,

    /**
     * The DmrClusterLinkCollectionsChannelsModel model constructor.
     * @property {module:model/DmrClusterLinkCollectionsChannelsModel}
     */
    DmrClusterLinkCollectionsChannelsModel,

    /**
     * The DmrClusterLinkCollectionsModel model constructor.
     * @property {module:model/DmrClusterLinkCollectionsModel}
     */
    DmrClusterLinkCollectionsModel,

    /**
     * The DmrClusterLinkCollectionsRemoteAddressesModel model constructor.
     * @property {module:model/DmrClusterLinkCollectionsRemoteAddressesModel}
     */
    DmrClusterLinkCollectionsRemoteAddressesModel,

    /**
     * The DmrClusterLinkCollectionsTlsTrustedCommonNamesModel model constructor.
     * @property {module:model/DmrClusterLinkCollectionsTlsTrustedCommonNamesModel}
     */
    DmrClusterLinkCollectionsTlsTrustedCommonNamesModel,

    /**
     * The DmrClusterLinkLinksModel model constructor.
     * @property {module:model/DmrClusterLinkLinksModel}
     */
    DmrClusterLinkLinksModel,

    /**
     * The DmrClusterLinkModel model constructor.
     * @property {module:model/DmrClusterLinkModel}
     */
    DmrClusterLinkModel,

    /**
     * The DmrClusterLinkRemoteAddressCollectionsModel model constructor.
     * @property {module:model/DmrClusterLinkRemoteAddressCollectionsModel}
     */
    DmrClusterLinkRemoteAddressCollectionsModel,

    /**
     * The DmrClusterLinkRemoteAddressLinksModel model constructor.
     * @property {module:model/DmrClusterLinkRemoteAddressLinksModel}
     */
    DmrClusterLinkRemoteAddressLinksModel,

    /**
     * The DmrClusterLinkRemoteAddressModel model constructor.
     * @property {module:model/DmrClusterLinkRemoteAddressModel}
     */
    DmrClusterLinkRemoteAddressModel,

    /**
     * The DmrClusterLinkRemoteAddressResponseModel model constructor.
     * @property {module:model/DmrClusterLinkRemoteAddressResponseModel}
     */
    DmrClusterLinkRemoteAddressResponseModel,

    /**
     * The DmrClusterLinkRemoteAddressesResponseModel model constructor.
     * @property {module:model/DmrClusterLinkRemoteAddressesResponseModel}
     */
    DmrClusterLinkRemoteAddressesResponseModel,

    /**
     * The DmrClusterLinkResponseModel model constructor.
     * @property {module:model/DmrClusterLinkResponseModel}
     */
    DmrClusterLinkResponseModel,

    /**
     * The DmrClusterLinkTlsTrustedCommonNameCollectionsModel model constructor.
     * @property {module:model/DmrClusterLinkTlsTrustedCommonNameCollectionsModel}
     */
    DmrClusterLinkTlsTrustedCommonNameCollectionsModel,

    /**
     * The DmrClusterLinkTlsTrustedCommonNameLinksModel model constructor.
     * @property {module:model/DmrClusterLinkTlsTrustedCommonNameLinksModel}
     */
    DmrClusterLinkTlsTrustedCommonNameLinksModel,

    /**
     * The DmrClusterLinkTlsTrustedCommonNameModel model constructor.
     * @property {module:model/DmrClusterLinkTlsTrustedCommonNameModel}
     */
    DmrClusterLinkTlsTrustedCommonNameModel,

    /**
     * The DmrClusterLinkTlsTrustedCommonNameResponseModel model constructor.
     * @property {module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel}
     */
    DmrClusterLinkTlsTrustedCommonNameResponseModel,

    /**
     * The DmrClusterLinkTlsTrustedCommonNamesResponseModel model constructor.
     * @property {module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel}
     */
    DmrClusterLinkTlsTrustedCommonNamesResponseModel,

    /**
     * The DmrClusterLinksModel model constructor.
     * @property {module:model/DmrClusterLinksModel}
     */
    DmrClusterLinksModel,

    /**
     * The DmrClusterLinksResponseModel model constructor.
     * @property {module:model/DmrClusterLinksResponseModel}
     */
    DmrClusterLinksResponseModel,

    /**
     * The DmrClusterModel model constructor.
     * @property {module:model/DmrClusterModel}
     */
    DmrClusterModel,

    /**
     * The DmrClusterResponseModel model constructor.
     * @property {module:model/DmrClusterResponseModel}
     */
    DmrClusterResponseModel,

    /**
     * The DmrClusterTopologyIssueCollectionsModel model constructor.
     * @property {module:model/DmrClusterTopologyIssueCollectionsModel}
     */
    DmrClusterTopologyIssueCollectionsModel,

    /**
     * The DmrClusterTopologyIssueLinksModel model constructor.
     * @property {module:model/DmrClusterTopologyIssueLinksModel}
     */
    DmrClusterTopologyIssueLinksModel,

    /**
     * The DmrClusterTopologyIssueModel model constructor.
     * @property {module:model/DmrClusterTopologyIssueModel}
     */
    DmrClusterTopologyIssueModel,

    /**
     * The DmrClusterTopologyIssueResponseModel model constructor.
     * @property {module:model/DmrClusterTopologyIssueResponseModel}
     */
    DmrClusterTopologyIssueResponseModel,

    /**
     * The DmrClusterTopologyIssuesResponseModel model constructor.
     * @property {module:model/DmrClusterTopologyIssuesResponseModel}
     */
    DmrClusterTopologyIssuesResponseModel,

    /**
     * The DmrClustersResponseModel model constructor.
     * @property {module:model/DmrClustersResponseModel}
     */
    DmrClustersResponseModel,

    /**
     * The DomainCertAuthoritiesResponseModel model constructor.
     * @property {module:model/DomainCertAuthoritiesResponseModel}
     */
    DomainCertAuthoritiesResponseModel,

    /**
     * The DomainCertAuthorityCollectionsModel model constructor.
     * @property {module:model/DomainCertAuthorityCollectionsModel}
     */
    DomainCertAuthorityCollectionsModel,

    /**
     * The DomainCertAuthorityLinksModel model constructor.
     * @property {module:model/DomainCertAuthorityLinksModel}
     */
    DomainCertAuthorityLinksModel,

    /**
     * The DomainCertAuthorityModel model constructor.
     * @property {module:model/DomainCertAuthorityModel}
     */
    DomainCertAuthorityModel,

    /**
     * The DomainCertAuthorityResponseModel model constructor.
     * @property {module:model/DomainCertAuthorityResponseModel}
     */
    DomainCertAuthorityResponseModel,

    /**
     * The EventThresholdByPercentModel model constructor.
     * @property {module:model/EventThresholdByPercentModel}
     */
    EventThresholdByPercentModel,

    /**
     * The EventThresholdByValueModel model constructor.
     * @property {module:model/EventThresholdByValueModel}
     */
    EventThresholdByValueModel,

    /**
     * The EventThresholdModel model constructor.
     * @property {module:model/EventThresholdModel}
     */
    EventThresholdModel,

    /**
     * The MsgVpnAclProfileClientConnectExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileClientConnectExceptionCollectionsModel}
     */
    MsgVpnAclProfileClientConnectExceptionCollectionsModel,

    /**
     * The MsgVpnAclProfileClientConnectExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfileClientConnectExceptionLinksModel}
     */
    MsgVpnAclProfileClientConnectExceptionLinksModel,

    /**
     * The MsgVpnAclProfileClientConnectExceptionModel model constructor.
     * @property {module:model/MsgVpnAclProfileClientConnectExceptionModel}
     */
    MsgVpnAclProfileClientConnectExceptionModel,

    /**
     * The MsgVpnAclProfileClientConnectExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileClientConnectExceptionResponseModel}
     */
    MsgVpnAclProfileClientConnectExceptionResponseModel,

    /**
     * The MsgVpnAclProfileClientConnectExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileClientConnectExceptionsResponseModel}
     */
    MsgVpnAclProfileClientConnectExceptionsResponseModel,

    /**
     * The MsgVpnAclProfileCollectionsClientConnectExceptionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsClientConnectExceptionsModel}
     */
    MsgVpnAclProfileCollectionsClientConnectExceptionsModel,

    /**
     * The MsgVpnAclProfileCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsModel}
     */
    MsgVpnAclProfileCollectionsModel,

    /**
     * The MsgVpnAclProfileCollectionsPublishExceptionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsPublishExceptionsModel}
     */
    MsgVpnAclProfileCollectionsPublishExceptionsModel,

    /**
     * The MsgVpnAclProfileCollectionsPublishTopicExceptionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsPublishTopicExceptionsModel}
     */
    MsgVpnAclProfileCollectionsPublishTopicExceptionsModel,

    /**
     * The MsgVpnAclProfileCollectionsSubscribeExceptionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsSubscribeExceptionsModel}
     */
    MsgVpnAclProfileCollectionsSubscribeExceptionsModel,

    /**
     * The MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel}
     */
    MsgVpnAclProfileCollectionsSubscribeShareNameExceptionsModel,

    /**
     * The MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel}
     */
    MsgVpnAclProfileCollectionsSubscribeTopicExceptionsModel,

    /**
     * The MsgVpnAclProfileLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfileLinksModel}
     */
    MsgVpnAclProfileLinksModel,

    /**
     * The MsgVpnAclProfileModel model constructor.
     * @property {module:model/MsgVpnAclProfileModel}
     */
    MsgVpnAclProfileModel,

    /**
     * The MsgVpnAclProfilePublishExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishExceptionCollectionsModel}
     */
    MsgVpnAclProfilePublishExceptionCollectionsModel,

    /**
     * The MsgVpnAclProfilePublishExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishExceptionLinksModel}
     */
    MsgVpnAclProfilePublishExceptionLinksModel,

    /**
     * The MsgVpnAclProfilePublishExceptionModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishExceptionModel}
     */
    MsgVpnAclProfilePublishExceptionModel,

    /**
     * The MsgVpnAclProfilePublishExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishExceptionResponseModel}
     */
    MsgVpnAclProfilePublishExceptionResponseModel,

    /**
     * The MsgVpnAclProfilePublishExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishExceptionsResponseModel}
     */
    MsgVpnAclProfilePublishExceptionsResponseModel,

    /**
     * The MsgVpnAclProfilePublishTopicExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel}
     */
    MsgVpnAclProfilePublishTopicExceptionCollectionsModel,

    /**
     * The MsgVpnAclProfilePublishTopicExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishTopicExceptionLinksModel}
     */
    MsgVpnAclProfilePublishTopicExceptionLinksModel,

    /**
     * The MsgVpnAclProfilePublishTopicExceptionModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishTopicExceptionModel}
     */
    MsgVpnAclProfilePublishTopicExceptionModel,

    /**
     * The MsgVpnAclProfilePublishTopicExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishTopicExceptionResponseModel}
     */
    MsgVpnAclProfilePublishTopicExceptionResponseModel,

    /**
     * The MsgVpnAclProfilePublishTopicExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfilePublishTopicExceptionsResponseModel}
     */
    MsgVpnAclProfilePublishTopicExceptionsResponseModel,

    /**
     * The MsgVpnAclProfileResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileResponseModel}
     */
    MsgVpnAclProfileResponseModel,

    /**
     * The MsgVpnAclProfileSubscribeExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeExceptionCollectionsModel}
     */
    MsgVpnAclProfileSubscribeExceptionCollectionsModel,

    /**
     * The MsgVpnAclProfileSubscribeExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeExceptionLinksModel}
     */
    MsgVpnAclProfileSubscribeExceptionLinksModel,

    /**
     * The MsgVpnAclProfileSubscribeExceptionModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeExceptionModel}
     */
    MsgVpnAclProfileSubscribeExceptionModel,

    /**
     * The MsgVpnAclProfileSubscribeExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeExceptionResponseModel}
     */
    MsgVpnAclProfileSubscribeExceptionResponseModel,

    /**
     * The MsgVpnAclProfileSubscribeExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeExceptionsResponseModel}
     */
    MsgVpnAclProfileSubscribeExceptionsResponseModel,

    /**
     * The MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel}
     */
    MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel,

    /**
     * The MsgVpnAclProfileSubscribeShareNameExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel}
     */
    MsgVpnAclProfileSubscribeShareNameExceptionLinksModel,

    /**
     * The MsgVpnAclProfileSubscribeShareNameExceptionModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel}
     */
    MsgVpnAclProfileSubscribeShareNameExceptionModel,

    /**
     * The MsgVpnAclProfileSubscribeShareNameExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel}
     */
    MsgVpnAclProfileSubscribeShareNameExceptionResponseModel,

    /**
     * The MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel}
     */
    MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel,

    /**
     * The MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel}
     */
    MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel,

    /**
     * The MsgVpnAclProfileSubscribeTopicExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel}
     */
    MsgVpnAclProfileSubscribeTopicExceptionLinksModel,

    /**
     * The MsgVpnAclProfileSubscribeTopicExceptionModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeTopicExceptionModel}
     */
    MsgVpnAclProfileSubscribeTopicExceptionModel,

    /**
     * The MsgVpnAclProfileSubscribeTopicExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel}
     */
    MsgVpnAclProfileSubscribeTopicExceptionResponseModel,

    /**
     * The MsgVpnAclProfileSubscribeTopicExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel}
     */
    MsgVpnAclProfileSubscribeTopicExceptionsResponseModel,

    /**
     * The MsgVpnAclProfilesResponseModel model constructor.
     * @property {module:model/MsgVpnAclProfilesResponseModel}
     */
    MsgVpnAclProfilesResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel}
     */
    MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel,

    /**
     * The MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel}
     */
    MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel,

    /**
     * The MsgVpnAuthenticationOauthProfileClientRequiredClaimModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel}
     */
    MsgVpnAuthenticationOauthProfileClientRequiredClaimModel,

    /**
     * The MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel}
     */
    MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel}
     */
    MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel}
     */
    MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel,

    /**
     * The MsgVpnAuthenticationOauthProfileCollectionsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileCollectionsModel}
     */
    MsgVpnAuthenticationOauthProfileCollectionsModel,

    /**
     * The MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel}
     */
    MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel,

    /**
     * The MsgVpnAuthenticationOauthProfileLinksModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileLinksModel}
     */
    MsgVpnAuthenticationOauthProfileLinksModel,

    /**
     * The MsgVpnAuthenticationOauthProfileModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileModel}
     */
    MsgVpnAuthenticationOauthProfileModel,

    /**
     * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel}
     */
    MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel,

    /**
     * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel}
     */
    MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel,

    /**
     * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel}
     */
    MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel,

    /**
     * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel}
     */
    MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel}
     */
    MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProfileResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileResponseModel}
     */
    MsgVpnAuthenticationOauthProfileResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProfilesResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfilesResponseModel}
     */
    MsgVpnAuthenticationOauthProfilesResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProviderCollectionsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProviderCollectionsModel}
     */
    MsgVpnAuthenticationOauthProviderCollectionsModel,

    /**
     * The MsgVpnAuthenticationOauthProviderLinksModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProviderLinksModel}
     */
    MsgVpnAuthenticationOauthProviderLinksModel,

    /**
     * The MsgVpnAuthenticationOauthProviderModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProviderModel}
     */
    MsgVpnAuthenticationOauthProviderModel,

    /**
     * The MsgVpnAuthenticationOauthProviderResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProviderResponseModel}
     */
    MsgVpnAuthenticationOauthProviderResponseModel,

    /**
     * The MsgVpnAuthenticationOauthProvidersResponseModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProvidersResponseModel}
     */
    MsgVpnAuthenticationOauthProvidersResponseModel,

    /**
     * The MsgVpnAuthorizationGroupCollectionsModel model constructor.
     * @property {module:model/MsgVpnAuthorizationGroupCollectionsModel}
     */
    MsgVpnAuthorizationGroupCollectionsModel,

    /**
     * The MsgVpnAuthorizationGroupLinksModel model constructor.
     * @property {module:model/MsgVpnAuthorizationGroupLinksModel}
     */
    MsgVpnAuthorizationGroupLinksModel,

    /**
     * The MsgVpnAuthorizationGroupModel model constructor.
     * @property {module:model/MsgVpnAuthorizationGroupModel}
     */
    MsgVpnAuthorizationGroupModel,

    /**
     * The MsgVpnAuthorizationGroupResponseModel model constructor.
     * @property {module:model/MsgVpnAuthorizationGroupResponseModel}
     */
    MsgVpnAuthorizationGroupResponseModel,

    /**
     * The MsgVpnAuthorizationGroupsResponseModel model constructor.
     * @property {module:model/MsgVpnAuthorizationGroupsResponseModel}
     */
    MsgVpnAuthorizationGroupsResponseModel,

    /**
     * The MsgVpnBridgeCollectionsLocalSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnBridgeCollectionsLocalSubscriptionsModel}
     */
    MsgVpnBridgeCollectionsLocalSubscriptionsModel,

    /**
     * The MsgVpnBridgeCollectionsModel model constructor.
     * @property {module:model/MsgVpnBridgeCollectionsModel}
     */
    MsgVpnBridgeCollectionsModel,

    /**
     * The MsgVpnBridgeCollectionsRemoteMsgVpnsModel model constructor.
     * @property {module:model/MsgVpnBridgeCollectionsRemoteMsgVpnsModel}
     */
    MsgVpnBridgeCollectionsRemoteMsgVpnsModel,

    /**
     * The MsgVpnBridgeCollectionsRemoteSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnBridgeCollectionsRemoteSubscriptionsModel}
     */
    MsgVpnBridgeCollectionsRemoteSubscriptionsModel,

    /**
     * The MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel model constructor.
     * @property {module:model/MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel}
     */
    MsgVpnBridgeCollectionsTlsTrustedCommonNamesModel,

    /**
     * The MsgVpnBridgeCounterModel model constructor.
     * @property {module:model/MsgVpnBridgeCounterModel}
     */
    MsgVpnBridgeCounterModel,

    /**
     * The MsgVpnBridgeLinksModel model constructor.
     * @property {module:model/MsgVpnBridgeLinksModel}
     */
    MsgVpnBridgeLinksModel,

    /**
     * The MsgVpnBridgeLocalSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnBridgeLocalSubscriptionCollectionsModel}
     */
    MsgVpnBridgeLocalSubscriptionCollectionsModel,

    /**
     * The MsgVpnBridgeLocalSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnBridgeLocalSubscriptionLinksModel}
     */
    MsgVpnBridgeLocalSubscriptionLinksModel,

    /**
     * The MsgVpnBridgeLocalSubscriptionModel model constructor.
     * @property {module:model/MsgVpnBridgeLocalSubscriptionModel}
     */
    MsgVpnBridgeLocalSubscriptionModel,

    /**
     * The MsgVpnBridgeLocalSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeLocalSubscriptionResponseModel}
     */
    MsgVpnBridgeLocalSubscriptionResponseModel,

    /**
     * The MsgVpnBridgeLocalSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeLocalSubscriptionsResponseModel}
     */
    MsgVpnBridgeLocalSubscriptionsResponseModel,

    /**
     * The MsgVpnBridgeModel model constructor.
     * @property {module:model/MsgVpnBridgeModel}
     */
    MsgVpnBridgeModel,

    /**
     * The MsgVpnBridgeRateModel model constructor.
     * @property {module:model/MsgVpnBridgeRateModel}
     */
    MsgVpnBridgeRateModel,

    /**
     * The MsgVpnBridgeRemoteMsgVpnCollectionsModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteMsgVpnCollectionsModel}
     */
    MsgVpnBridgeRemoteMsgVpnCollectionsModel,

    /**
     * The MsgVpnBridgeRemoteMsgVpnLinksModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteMsgVpnLinksModel}
     */
    MsgVpnBridgeRemoteMsgVpnLinksModel,

    /**
     * The MsgVpnBridgeRemoteMsgVpnModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteMsgVpnModel}
     */
    MsgVpnBridgeRemoteMsgVpnModel,

    /**
     * The MsgVpnBridgeRemoteMsgVpnResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteMsgVpnResponseModel}
     */
    MsgVpnBridgeRemoteMsgVpnResponseModel,

    /**
     * The MsgVpnBridgeRemoteMsgVpnsResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteMsgVpnsResponseModel}
     */
    MsgVpnBridgeRemoteMsgVpnsResponseModel,

    /**
     * The MsgVpnBridgeRemoteSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteSubscriptionCollectionsModel}
     */
    MsgVpnBridgeRemoteSubscriptionCollectionsModel,

    /**
     * The MsgVpnBridgeRemoteSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteSubscriptionLinksModel}
     */
    MsgVpnBridgeRemoteSubscriptionLinksModel,

    /**
     * The MsgVpnBridgeRemoteSubscriptionModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteSubscriptionModel}
     */
    MsgVpnBridgeRemoteSubscriptionModel,

    /**
     * The MsgVpnBridgeRemoteSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteSubscriptionResponseModel}
     */
    MsgVpnBridgeRemoteSubscriptionResponseModel,

    /**
     * The MsgVpnBridgeRemoteSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeRemoteSubscriptionsResponseModel}
     */
    MsgVpnBridgeRemoteSubscriptionsResponseModel,

    /**
     * The MsgVpnBridgeResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeResponseModel}
     */
    MsgVpnBridgeResponseModel,

    /**
     * The MsgVpnBridgeTlsTrustedCommonNameCollectionsModel model constructor.
     * @property {module:model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel}
     */
    MsgVpnBridgeTlsTrustedCommonNameCollectionsModel,

    /**
     * The MsgVpnBridgeTlsTrustedCommonNameLinksModel model constructor.
     * @property {module:model/MsgVpnBridgeTlsTrustedCommonNameLinksModel}
     */
    MsgVpnBridgeTlsTrustedCommonNameLinksModel,

    /**
     * The MsgVpnBridgeTlsTrustedCommonNameModel model constructor.
     * @property {module:model/MsgVpnBridgeTlsTrustedCommonNameModel}
     */
    MsgVpnBridgeTlsTrustedCommonNameModel,

    /**
     * The MsgVpnBridgeTlsTrustedCommonNameResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeTlsTrustedCommonNameResponseModel}
     */
    MsgVpnBridgeTlsTrustedCommonNameResponseModel,

    /**
     * The MsgVpnBridgeTlsTrustedCommonNamesResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel}
     */
    MsgVpnBridgeTlsTrustedCommonNamesResponseModel,

    /**
     * The MsgVpnBridgesResponseModel model constructor.
     * @property {module:model/MsgVpnBridgesResponseModel}
     */
    MsgVpnBridgesResponseModel,

    /**
     * The MsgVpnCertMatchingRuleAttributeFilterCollectionsModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleAttributeFilterCollectionsModel}
     */
    MsgVpnCertMatchingRuleAttributeFilterCollectionsModel,

    /**
     * The MsgVpnCertMatchingRuleAttributeFilterLinksModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleAttributeFilterLinksModel}
     */
    MsgVpnCertMatchingRuleAttributeFilterLinksModel,

    /**
     * The MsgVpnCertMatchingRuleAttributeFilterModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleAttributeFilterModel}
     */
    MsgVpnCertMatchingRuleAttributeFilterModel,

    /**
     * The MsgVpnCertMatchingRuleAttributeFilterResponseModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleAttributeFilterResponseModel}
     */
    MsgVpnCertMatchingRuleAttributeFilterResponseModel,

    /**
     * The MsgVpnCertMatchingRuleAttributeFiltersResponseModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleAttributeFiltersResponseModel}
     */
    MsgVpnCertMatchingRuleAttributeFiltersResponseModel,

    /**
     * The MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel}
     */
    MsgVpnCertMatchingRuleCollectionsAttributeFiltersModel,

    /**
     * The MsgVpnCertMatchingRuleCollectionsConditionsModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleCollectionsConditionsModel}
     */
    MsgVpnCertMatchingRuleCollectionsConditionsModel,

    /**
     * The MsgVpnCertMatchingRuleCollectionsModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleCollectionsModel}
     */
    MsgVpnCertMatchingRuleCollectionsModel,

    /**
     * The MsgVpnCertMatchingRuleConditionCollectionsModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleConditionCollectionsModel}
     */
    MsgVpnCertMatchingRuleConditionCollectionsModel,

    /**
     * The MsgVpnCertMatchingRuleConditionLinksModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleConditionLinksModel}
     */
    MsgVpnCertMatchingRuleConditionLinksModel,

    /**
     * The MsgVpnCertMatchingRuleConditionModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleConditionModel}
     */
    MsgVpnCertMatchingRuleConditionModel,

    /**
     * The MsgVpnCertMatchingRuleConditionResponseModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleConditionResponseModel}
     */
    MsgVpnCertMatchingRuleConditionResponseModel,

    /**
     * The MsgVpnCertMatchingRuleConditionsResponseModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleConditionsResponseModel}
     */
    MsgVpnCertMatchingRuleConditionsResponseModel,

    /**
     * The MsgVpnCertMatchingRuleLinksModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleLinksModel}
     */
    MsgVpnCertMatchingRuleLinksModel,

    /**
     * The MsgVpnCertMatchingRuleModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleModel}
     */
    MsgVpnCertMatchingRuleModel,

    /**
     * The MsgVpnCertMatchingRuleResponseModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRuleResponseModel}
     */
    MsgVpnCertMatchingRuleResponseModel,

    /**
     * The MsgVpnCertMatchingRulesResponseModel model constructor.
     * @property {module:model/MsgVpnCertMatchingRulesResponseModel}
     */
    MsgVpnCertMatchingRulesResponseModel,

    /**
     * The MsgVpnClientCollectionsConnectionsModel model constructor.
     * @property {module:model/MsgVpnClientCollectionsConnectionsModel}
     */
    MsgVpnClientCollectionsConnectionsModel,

    /**
     * The MsgVpnClientCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientCollectionsModel}
     */
    MsgVpnClientCollectionsModel,

    /**
     * The MsgVpnClientCollectionsRxFlowsModel model constructor.
     * @property {module:model/MsgVpnClientCollectionsRxFlowsModel}
     */
    MsgVpnClientCollectionsRxFlowsModel,

    /**
     * The MsgVpnClientCollectionsSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnClientCollectionsSubscriptionsModel}
     */
    MsgVpnClientCollectionsSubscriptionsModel,

    /**
     * The MsgVpnClientCollectionsTransactedSessionsModel model constructor.
     * @property {module:model/MsgVpnClientCollectionsTransactedSessionsModel}
     */
    MsgVpnClientCollectionsTransactedSessionsModel,

    /**
     * The MsgVpnClientCollectionsTxFlowsModel model constructor.
     * @property {module:model/MsgVpnClientCollectionsTxFlowsModel}
     */
    MsgVpnClientCollectionsTxFlowsModel,

    /**
     * The MsgVpnClientConnectionCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientConnectionCollectionsModel}
     */
    MsgVpnClientConnectionCollectionsModel,

    /**
     * The MsgVpnClientConnectionLinksModel model constructor.
     * @property {module:model/MsgVpnClientConnectionLinksModel}
     */
    MsgVpnClientConnectionLinksModel,

    /**
     * The MsgVpnClientConnectionModel model constructor.
     * @property {module:model/MsgVpnClientConnectionModel}
     */
    MsgVpnClientConnectionModel,

    /**
     * The MsgVpnClientConnectionResponseModel model constructor.
     * @property {module:model/MsgVpnClientConnectionResponseModel}
     */
    MsgVpnClientConnectionResponseModel,

    /**
     * The MsgVpnClientConnectionsResponseModel model constructor.
     * @property {module:model/MsgVpnClientConnectionsResponseModel}
     */
    MsgVpnClientConnectionsResponseModel,

    /**
     * The MsgVpnClientLinksModel model constructor.
     * @property {module:model/MsgVpnClientLinksModel}
     */
    MsgVpnClientLinksModel,

    /**
     * The MsgVpnClientModel model constructor.
     * @property {module:model/MsgVpnClientModel}
     */
    MsgVpnClientModel,

    /**
     * The MsgVpnClientProfileCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientProfileCollectionsModel}
     */
    MsgVpnClientProfileCollectionsModel,

    /**
     * The MsgVpnClientProfileLinksModel model constructor.
     * @property {module:model/MsgVpnClientProfileLinksModel}
     */
    MsgVpnClientProfileLinksModel,

    /**
     * The MsgVpnClientProfileModel model constructor.
     * @property {module:model/MsgVpnClientProfileModel}
     */
    MsgVpnClientProfileModel,

    /**
     * The MsgVpnClientProfileResponseModel model constructor.
     * @property {module:model/MsgVpnClientProfileResponseModel}
     */
    MsgVpnClientProfileResponseModel,

    /**
     * The MsgVpnClientProfilesResponseModel model constructor.
     * @property {module:model/MsgVpnClientProfilesResponseModel}
     */
    MsgVpnClientProfilesResponseModel,

    /**
     * The MsgVpnClientResponseModel model constructor.
     * @property {module:model/MsgVpnClientResponseModel}
     */
    MsgVpnClientResponseModel,

    /**
     * The MsgVpnClientRxFlowCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientRxFlowCollectionsModel}
     */
    MsgVpnClientRxFlowCollectionsModel,

    /**
     * The MsgVpnClientRxFlowLinksModel model constructor.
     * @property {module:model/MsgVpnClientRxFlowLinksModel}
     */
    MsgVpnClientRxFlowLinksModel,

    /**
     * The MsgVpnClientRxFlowModel model constructor.
     * @property {module:model/MsgVpnClientRxFlowModel}
     */
    MsgVpnClientRxFlowModel,

    /**
     * The MsgVpnClientRxFlowResponseModel model constructor.
     * @property {module:model/MsgVpnClientRxFlowResponseModel}
     */
    MsgVpnClientRxFlowResponseModel,

    /**
     * The MsgVpnClientRxFlowsResponseModel model constructor.
     * @property {module:model/MsgVpnClientRxFlowsResponseModel}
     */
    MsgVpnClientRxFlowsResponseModel,

    /**
     * The MsgVpnClientSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientSubscriptionCollectionsModel}
     */
    MsgVpnClientSubscriptionCollectionsModel,

    /**
     * The MsgVpnClientSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnClientSubscriptionLinksModel}
     */
    MsgVpnClientSubscriptionLinksModel,

    /**
     * The MsgVpnClientSubscriptionModel model constructor.
     * @property {module:model/MsgVpnClientSubscriptionModel}
     */
    MsgVpnClientSubscriptionModel,

    /**
     * The MsgVpnClientSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnClientSubscriptionResponseModel}
     */
    MsgVpnClientSubscriptionResponseModel,

    /**
     * The MsgVpnClientSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnClientSubscriptionsResponseModel}
     */
    MsgVpnClientSubscriptionsResponseModel,

    /**
     * The MsgVpnClientTransactedSessionCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientTransactedSessionCollectionsModel}
     */
    MsgVpnClientTransactedSessionCollectionsModel,

    /**
     * The MsgVpnClientTransactedSessionLinksModel model constructor.
     * @property {module:model/MsgVpnClientTransactedSessionLinksModel}
     */
    MsgVpnClientTransactedSessionLinksModel,

    /**
     * The MsgVpnClientTransactedSessionModel model constructor.
     * @property {module:model/MsgVpnClientTransactedSessionModel}
     */
    MsgVpnClientTransactedSessionModel,

    /**
     * The MsgVpnClientTransactedSessionResponseModel model constructor.
     * @property {module:model/MsgVpnClientTransactedSessionResponseModel}
     */
    MsgVpnClientTransactedSessionResponseModel,

    /**
     * The MsgVpnClientTransactedSessionsResponseModel model constructor.
     * @property {module:model/MsgVpnClientTransactedSessionsResponseModel}
     */
    MsgVpnClientTransactedSessionsResponseModel,

    /**
     * The MsgVpnClientTxFlowCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientTxFlowCollectionsModel}
     */
    MsgVpnClientTxFlowCollectionsModel,

    /**
     * The MsgVpnClientTxFlowLinksModel model constructor.
     * @property {module:model/MsgVpnClientTxFlowLinksModel}
     */
    MsgVpnClientTxFlowLinksModel,

    /**
     * The MsgVpnClientTxFlowModel model constructor.
     * @property {module:model/MsgVpnClientTxFlowModel}
     */
    MsgVpnClientTxFlowModel,

    /**
     * The MsgVpnClientTxFlowResponseModel model constructor.
     * @property {module:model/MsgVpnClientTxFlowResponseModel}
     */
    MsgVpnClientTxFlowResponseModel,

    /**
     * The MsgVpnClientTxFlowsResponseModel model constructor.
     * @property {module:model/MsgVpnClientTxFlowsResponseModel}
     */
    MsgVpnClientTxFlowsResponseModel,

    /**
     * The MsgVpnClientUsernameAttributeCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientUsernameAttributeCollectionsModel}
     */
    MsgVpnClientUsernameAttributeCollectionsModel,

    /**
     * The MsgVpnClientUsernameAttributeLinksModel model constructor.
     * @property {module:model/MsgVpnClientUsernameAttributeLinksModel}
     */
    MsgVpnClientUsernameAttributeLinksModel,

    /**
     * The MsgVpnClientUsernameAttributeModel model constructor.
     * @property {module:model/MsgVpnClientUsernameAttributeModel}
     */
    MsgVpnClientUsernameAttributeModel,

    /**
     * The MsgVpnClientUsernameAttributeResponseModel model constructor.
     * @property {module:model/MsgVpnClientUsernameAttributeResponseModel}
     */
    MsgVpnClientUsernameAttributeResponseModel,

    /**
     * The MsgVpnClientUsernameAttributesResponseModel model constructor.
     * @property {module:model/MsgVpnClientUsernameAttributesResponseModel}
     */
    MsgVpnClientUsernameAttributesResponseModel,

    /**
     * The MsgVpnClientUsernameCollectionsAttributesModel model constructor.
     * @property {module:model/MsgVpnClientUsernameCollectionsAttributesModel}
     */
    MsgVpnClientUsernameCollectionsAttributesModel,

    /**
     * The MsgVpnClientUsernameCollectionsModel model constructor.
     * @property {module:model/MsgVpnClientUsernameCollectionsModel}
     */
    MsgVpnClientUsernameCollectionsModel,

    /**
     * The MsgVpnClientUsernameLinksModel model constructor.
     * @property {module:model/MsgVpnClientUsernameLinksModel}
     */
    MsgVpnClientUsernameLinksModel,

    /**
     * The MsgVpnClientUsernameModel model constructor.
     * @property {module:model/MsgVpnClientUsernameModel}
     */
    MsgVpnClientUsernameModel,

    /**
     * The MsgVpnClientUsernameResponseModel model constructor.
     * @property {module:model/MsgVpnClientUsernameResponseModel}
     */
    MsgVpnClientUsernameResponseModel,

    /**
     * The MsgVpnClientUsernamesResponseModel model constructor.
     * @property {module:model/MsgVpnClientUsernamesResponseModel}
     */
    MsgVpnClientUsernamesResponseModel,

    /**
     * The MsgVpnClientsResponseModel model constructor.
     * @property {module:model/MsgVpnClientsResponseModel}
     */
    MsgVpnClientsResponseModel,

    /**
     * The MsgVpnCollectionsAclProfilesModel model constructor.
     * @property {module:model/MsgVpnCollectionsAclProfilesModel}
     */
    MsgVpnCollectionsAclProfilesModel,

    /**
     * The MsgVpnCollectionsAuthenticationOauthProfilesModel model constructor.
     * @property {module:model/MsgVpnCollectionsAuthenticationOauthProfilesModel}
     */
    MsgVpnCollectionsAuthenticationOauthProfilesModel,

    /**
     * The MsgVpnCollectionsAuthenticationOauthProvidersModel model constructor.
     * @property {module:model/MsgVpnCollectionsAuthenticationOauthProvidersModel}
     */
    MsgVpnCollectionsAuthenticationOauthProvidersModel,

    /**
     * The MsgVpnCollectionsAuthorizationGroupsModel model constructor.
     * @property {module:model/MsgVpnCollectionsAuthorizationGroupsModel}
     */
    MsgVpnCollectionsAuthorizationGroupsModel,

    /**
     * The MsgVpnCollectionsBridgesModel model constructor.
     * @property {module:model/MsgVpnCollectionsBridgesModel}
     */
    MsgVpnCollectionsBridgesModel,

    /**
     * The MsgVpnCollectionsCertMatchingRulesModel model constructor.
     * @property {module:model/MsgVpnCollectionsCertMatchingRulesModel}
     */
    MsgVpnCollectionsCertMatchingRulesModel,

    /**
     * The MsgVpnCollectionsClientProfilesModel model constructor.
     * @property {module:model/MsgVpnCollectionsClientProfilesModel}
     */
    MsgVpnCollectionsClientProfilesModel,

    /**
     * The MsgVpnCollectionsClientUsernamesModel model constructor.
     * @property {module:model/MsgVpnCollectionsClientUsernamesModel}
     */
    MsgVpnCollectionsClientUsernamesModel,

    /**
     * The MsgVpnCollectionsClientsModel model constructor.
     * @property {module:model/MsgVpnCollectionsClientsModel}
     */
    MsgVpnCollectionsClientsModel,

    /**
     * The MsgVpnCollectionsConfigSyncRemoteNodesModel model constructor.
     * @property {module:model/MsgVpnCollectionsConfigSyncRemoteNodesModel}
     */
    MsgVpnCollectionsConfigSyncRemoteNodesModel,

    /**
     * The MsgVpnCollectionsDistributedCachesModel model constructor.
     * @property {module:model/MsgVpnCollectionsDistributedCachesModel}
     */
    MsgVpnCollectionsDistributedCachesModel,

    /**
     * The MsgVpnCollectionsDmrBridgesModel model constructor.
     * @property {module:model/MsgVpnCollectionsDmrBridgesModel}
     */
    MsgVpnCollectionsDmrBridgesModel,

    /**
     * The MsgVpnCollectionsJndiConnectionFactoriesModel model constructor.
     * @property {module:model/MsgVpnCollectionsJndiConnectionFactoriesModel}
     */
    MsgVpnCollectionsJndiConnectionFactoriesModel,

    /**
     * The MsgVpnCollectionsJndiQueuesModel model constructor.
     * @property {module:model/MsgVpnCollectionsJndiQueuesModel}
     */
    MsgVpnCollectionsJndiQueuesModel,

    /**
     * The MsgVpnCollectionsJndiTopicsModel model constructor.
     * @property {module:model/MsgVpnCollectionsJndiTopicsModel}
     */
    MsgVpnCollectionsJndiTopicsModel,

    /**
     * The MsgVpnCollectionsKafkaReceiversModel model constructor.
     * @property {module:model/MsgVpnCollectionsKafkaReceiversModel}
     */
    MsgVpnCollectionsKafkaReceiversModel,

    /**
     * The MsgVpnCollectionsKafkaSendersModel model constructor.
     * @property {module:model/MsgVpnCollectionsKafkaSendersModel}
     */
    MsgVpnCollectionsKafkaSendersModel,

    /**
     * The MsgVpnCollectionsModel model constructor.
     * @property {module:model/MsgVpnCollectionsModel}
     */
    MsgVpnCollectionsModel,

    /**
     * The MsgVpnCollectionsMqttRetainCachesModel model constructor.
     * @property {module:model/MsgVpnCollectionsMqttRetainCachesModel}
     */
    MsgVpnCollectionsMqttRetainCachesModel,

    /**
     * The MsgVpnCollectionsMqttSessionsModel model constructor.
     * @property {module:model/MsgVpnCollectionsMqttSessionsModel}
     */
    MsgVpnCollectionsMqttSessionsModel,

    /**
     * The MsgVpnCollectionsProxiesModel model constructor.
     * @property {module:model/MsgVpnCollectionsProxiesModel}
     */
    MsgVpnCollectionsProxiesModel,

    /**
     * The MsgVpnCollectionsQueueTemplatesModel model constructor.
     * @property {module:model/MsgVpnCollectionsQueueTemplatesModel}
     */
    MsgVpnCollectionsQueueTemplatesModel,

    /**
     * The MsgVpnCollectionsQueuesModel model constructor.
     * @property {module:model/MsgVpnCollectionsQueuesModel}
     */
    MsgVpnCollectionsQueuesModel,

    /**
     * The MsgVpnCollectionsReplayLogsModel model constructor.
     * @property {module:model/MsgVpnCollectionsReplayLogsModel}
     */
    MsgVpnCollectionsReplayLogsModel,

    /**
     * The MsgVpnCollectionsReplicatedTopicsModel model constructor.
     * @property {module:model/MsgVpnCollectionsReplicatedTopicsModel}
     */
    MsgVpnCollectionsReplicatedTopicsModel,

    /**
     * The MsgVpnCollectionsRestDeliveryPointsModel model constructor.
     * @property {module:model/MsgVpnCollectionsRestDeliveryPointsModel}
     */
    MsgVpnCollectionsRestDeliveryPointsModel,

    /**
     * The MsgVpnCollectionsTelemetryProfilesModel model constructor.
     * @property {module:model/MsgVpnCollectionsTelemetryProfilesModel}
     */
    MsgVpnCollectionsTelemetryProfilesModel,

    /**
     * The MsgVpnCollectionsTopicEndpointTemplatesModel model constructor.
     * @property {module:model/MsgVpnCollectionsTopicEndpointTemplatesModel}
     */
    MsgVpnCollectionsTopicEndpointTemplatesModel,

    /**
     * The MsgVpnCollectionsTopicEndpointsModel model constructor.
     * @property {module:model/MsgVpnCollectionsTopicEndpointsModel}
     */
    MsgVpnCollectionsTopicEndpointsModel,

    /**
     * The MsgVpnCollectionsTransactionsModel model constructor.
     * @property {module:model/MsgVpnCollectionsTransactionsModel}
     */
    MsgVpnCollectionsTransactionsModel,

    /**
     * The MsgVpnConfigSyncRemoteNodeCollectionsModel model constructor.
     * @property {module:model/MsgVpnConfigSyncRemoteNodeCollectionsModel}
     */
    MsgVpnConfigSyncRemoteNodeCollectionsModel,

    /**
     * The MsgVpnConfigSyncRemoteNodeLinksModel model constructor.
     * @property {module:model/MsgVpnConfigSyncRemoteNodeLinksModel}
     */
    MsgVpnConfigSyncRemoteNodeLinksModel,

    /**
     * The MsgVpnConfigSyncRemoteNodeModel model constructor.
     * @property {module:model/MsgVpnConfigSyncRemoteNodeModel}
     */
    MsgVpnConfigSyncRemoteNodeModel,

    /**
     * The MsgVpnConfigSyncRemoteNodeResponseModel model constructor.
     * @property {module:model/MsgVpnConfigSyncRemoteNodeResponseModel}
     */
    MsgVpnConfigSyncRemoteNodeResponseModel,

    /**
     * The MsgVpnConfigSyncRemoteNodesResponseModel model constructor.
     * @property {module:model/MsgVpnConfigSyncRemoteNodesResponseModel}
     */
    MsgVpnConfigSyncRemoteNodesResponseModel,

    /**
     * The MsgVpnCounterModel model constructor.
     * @property {module:model/MsgVpnCounterModel}
     */
    MsgVpnCounterModel,

    /**
     * The MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel}
     */
    MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel,

    /**
     * The MsgVpnDistributedCacheClusterCollectionsInstancesModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterCollectionsInstancesModel}
     */
    MsgVpnDistributedCacheClusterCollectionsInstancesModel,

    /**
     * The MsgVpnDistributedCacheClusterCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterCollectionsModel}
     */
    MsgVpnDistributedCacheClusterCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterCollectionsTopicsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterCollectionsTopicsModel}
     */
    MsgVpnDistributedCacheClusterCollectionsTopicsModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel}
     */
    MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsModel}
     */
    MsgVpnDistributedCacheClusterInstanceCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel}
     */
    MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel}
     */
    MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceCounterModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceCounterModel}
     */
    MsgVpnDistributedCacheClusterInstanceCounterModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceLinksModel}
     */
    MsgVpnDistributedCacheClusterInstanceLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceModel}
     */
    MsgVpnDistributedCacheClusterInstanceModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRateModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRateModel}
     */
    MsgVpnDistributedCacheClusterInstanceRateModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteTopicModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteTopicModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel}
     */
    MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceResponseModel}
     */
    MsgVpnDistributedCacheClusterInstanceResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstancesResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstancesResponseModel}
     */
    MsgVpnDistributedCacheClusterInstancesResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterLinksModel}
     */
    MsgVpnDistributedCacheClusterLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterModel}
     */
    MsgVpnDistributedCacheClusterModel,

    /**
     * The MsgVpnDistributedCacheClusterResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterResponseModel}
     */
    MsgVpnDistributedCacheClusterResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterTopicCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterTopicCollectionsModel}
     */
    MsgVpnDistributedCacheClusterTopicCollectionsModel,

    /**
     * The MsgVpnDistributedCacheClusterTopicLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterTopicLinksModel}
     */
    MsgVpnDistributedCacheClusterTopicLinksModel,

    /**
     * The MsgVpnDistributedCacheClusterTopicModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterTopicModel}
     */
    MsgVpnDistributedCacheClusterTopicModel,

    /**
     * The MsgVpnDistributedCacheClusterTopicResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterTopicResponseModel}
     */
    MsgVpnDistributedCacheClusterTopicResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterTopicsResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterTopicsResponseModel}
     */
    MsgVpnDistributedCacheClusterTopicsResponseModel,

    /**
     * The MsgVpnDistributedCacheClustersResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClustersResponseModel}
     */
    MsgVpnDistributedCacheClustersResponseModel,

    /**
     * The MsgVpnDistributedCacheCollectionsClustersModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheCollectionsClustersModel}
     */
    MsgVpnDistributedCacheCollectionsClustersModel,

    /**
     * The MsgVpnDistributedCacheCollectionsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheCollectionsModel}
     */
    MsgVpnDistributedCacheCollectionsModel,

    /**
     * The MsgVpnDistributedCacheLinksModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheLinksModel}
     */
    MsgVpnDistributedCacheLinksModel,

    /**
     * The MsgVpnDistributedCacheModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheModel}
     */
    MsgVpnDistributedCacheModel,

    /**
     * The MsgVpnDistributedCacheResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheResponseModel}
     */
    MsgVpnDistributedCacheResponseModel,

    /**
     * The MsgVpnDistributedCachesResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCachesResponseModel}
     */
    MsgVpnDistributedCachesResponseModel,

    /**
     * The MsgVpnDmrBridgeCollectionsModel model constructor.
     * @property {module:model/MsgVpnDmrBridgeCollectionsModel}
     */
    MsgVpnDmrBridgeCollectionsModel,

    /**
     * The MsgVpnDmrBridgeLinksModel model constructor.
     * @property {module:model/MsgVpnDmrBridgeLinksModel}
     */
    MsgVpnDmrBridgeLinksModel,

    /**
     * The MsgVpnDmrBridgeModel model constructor.
     * @property {module:model/MsgVpnDmrBridgeModel}
     */
    MsgVpnDmrBridgeModel,

    /**
     * The MsgVpnDmrBridgeResponseModel model constructor.
     * @property {module:model/MsgVpnDmrBridgeResponseModel}
     */
    MsgVpnDmrBridgeResponseModel,

    /**
     * The MsgVpnDmrBridgesResponseModel model constructor.
     * @property {module:model/MsgVpnDmrBridgesResponseModel}
     */
    MsgVpnDmrBridgesResponseModel,

    /**
     * The MsgVpnJndiConnectionFactoriesResponseModel model constructor.
     * @property {module:model/MsgVpnJndiConnectionFactoriesResponseModel}
     */
    MsgVpnJndiConnectionFactoriesResponseModel,

    /**
     * The MsgVpnJndiConnectionFactoryCollectionsModel model constructor.
     * @property {module:model/MsgVpnJndiConnectionFactoryCollectionsModel}
     */
    MsgVpnJndiConnectionFactoryCollectionsModel,

    /**
     * The MsgVpnJndiConnectionFactoryLinksModel model constructor.
     * @property {module:model/MsgVpnJndiConnectionFactoryLinksModel}
     */
    MsgVpnJndiConnectionFactoryLinksModel,

    /**
     * The MsgVpnJndiConnectionFactoryModel model constructor.
     * @property {module:model/MsgVpnJndiConnectionFactoryModel}
     */
    MsgVpnJndiConnectionFactoryModel,

    /**
     * The MsgVpnJndiConnectionFactoryResponseModel model constructor.
     * @property {module:model/MsgVpnJndiConnectionFactoryResponseModel}
     */
    MsgVpnJndiConnectionFactoryResponseModel,

    /**
     * The MsgVpnJndiQueueCollectionsModel model constructor.
     * @property {module:model/MsgVpnJndiQueueCollectionsModel}
     */
    MsgVpnJndiQueueCollectionsModel,

    /**
     * The MsgVpnJndiQueueLinksModel model constructor.
     * @property {module:model/MsgVpnJndiQueueLinksModel}
     */
    MsgVpnJndiQueueLinksModel,

    /**
     * The MsgVpnJndiQueueModel model constructor.
     * @property {module:model/MsgVpnJndiQueueModel}
     */
    MsgVpnJndiQueueModel,

    /**
     * The MsgVpnJndiQueueResponseModel model constructor.
     * @property {module:model/MsgVpnJndiQueueResponseModel}
     */
    MsgVpnJndiQueueResponseModel,

    /**
     * The MsgVpnJndiQueuesResponseModel model constructor.
     * @property {module:model/MsgVpnJndiQueuesResponseModel}
     */
    MsgVpnJndiQueuesResponseModel,

    /**
     * The MsgVpnJndiTopicCollectionsModel model constructor.
     * @property {module:model/MsgVpnJndiTopicCollectionsModel}
     */
    MsgVpnJndiTopicCollectionsModel,

    /**
     * The MsgVpnJndiTopicLinksModel model constructor.
     * @property {module:model/MsgVpnJndiTopicLinksModel}
     */
    MsgVpnJndiTopicLinksModel,

    /**
     * The MsgVpnJndiTopicModel model constructor.
     * @property {module:model/MsgVpnJndiTopicModel}
     */
    MsgVpnJndiTopicModel,

    /**
     * The MsgVpnJndiTopicResponseModel model constructor.
     * @property {module:model/MsgVpnJndiTopicResponseModel}
     */
    MsgVpnJndiTopicResponseModel,

    /**
     * The MsgVpnJndiTopicsResponseModel model constructor.
     * @property {module:model/MsgVpnJndiTopicsResponseModel}
     */
    MsgVpnJndiTopicsResponseModel,

    /**
     * The MsgVpnKafkaReceiverCollectionsModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverCollectionsModel}
     */
    MsgVpnKafkaReceiverCollectionsModel,

    /**
     * The MsgVpnKafkaReceiverCollectionsRemoteBrokersModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverCollectionsRemoteBrokersModel}
     */
    MsgVpnKafkaReceiverCollectionsRemoteBrokersModel,

    /**
     * The MsgVpnKafkaReceiverCollectionsTopicBindingsModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel}
     */
    MsgVpnKafkaReceiverCollectionsTopicBindingsModel,

    /**
     * The MsgVpnKafkaReceiverLinksModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverLinksModel}
     */
    MsgVpnKafkaReceiverLinksModel,

    /**
     * The MsgVpnKafkaReceiverModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverModel}
     */
    MsgVpnKafkaReceiverModel,

    /**
     * The MsgVpnKafkaReceiverRemoteBrokerCollectionsModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel}
     */
    MsgVpnKafkaReceiverRemoteBrokerCollectionsModel,

    /**
     * The MsgVpnKafkaReceiverRemoteBrokerLinksModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverRemoteBrokerLinksModel}
     */
    MsgVpnKafkaReceiverRemoteBrokerLinksModel,

    /**
     * The MsgVpnKafkaReceiverRemoteBrokerModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverRemoteBrokerModel}
     */
    MsgVpnKafkaReceiverRemoteBrokerModel,

    /**
     * The MsgVpnKafkaReceiverRemoteBrokerResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverRemoteBrokerResponseModel}
     */
    MsgVpnKafkaReceiverRemoteBrokerResponseModel,

    /**
     * The MsgVpnKafkaReceiverRemoteBrokersResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverRemoteBrokersResponseModel}
     */
    MsgVpnKafkaReceiverRemoteBrokersResponseModel,

    /**
     * The MsgVpnKafkaReceiverResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverResponseModel}
     */
    MsgVpnKafkaReceiverResponseModel,

    /**
     * The MsgVpnKafkaReceiverTopicBindingCollectionsModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverTopicBindingCollectionsModel}
     */
    MsgVpnKafkaReceiverTopicBindingCollectionsModel,

    /**
     * The MsgVpnKafkaReceiverTopicBindingLinksModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverTopicBindingLinksModel}
     */
    MsgVpnKafkaReceiverTopicBindingLinksModel,

    /**
     * The MsgVpnKafkaReceiverTopicBindingModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverTopicBindingModel}
     */
    MsgVpnKafkaReceiverTopicBindingModel,

    /**
     * The MsgVpnKafkaReceiverTopicBindingResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverTopicBindingResponseModel}
     */
    MsgVpnKafkaReceiverTopicBindingResponseModel,

    /**
     * The MsgVpnKafkaReceiverTopicBindingsResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverTopicBindingsResponseModel}
     */
    MsgVpnKafkaReceiverTopicBindingsResponseModel,

    /**
     * The MsgVpnKafkaReceiversResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiversResponseModel}
     */
    MsgVpnKafkaReceiversResponseModel,

    /**
     * The MsgVpnKafkaSenderCollectionsModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderCollectionsModel}
     */
    MsgVpnKafkaSenderCollectionsModel,

    /**
     * The MsgVpnKafkaSenderCollectionsQueueBindingsModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderCollectionsQueueBindingsModel}
     */
    MsgVpnKafkaSenderCollectionsQueueBindingsModel,

    /**
     * The MsgVpnKafkaSenderCollectionsRemoteBrokersModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderCollectionsRemoteBrokersModel}
     */
    MsgVpnKafkaSenderCollectionsRemoteBrokersModel,

    /**
     * The MsgVpnKafkaSenderLinksModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderLinksModel}
     */
    MsgVpnKafkaSenderLinksModel,

    /**
     * The MsgVpnKafkaSenderModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderModel}
     */
    MsgVpnKafkaSenderModel,

    /**
     * The MsgVpnKafkaSenderQueueBindingCollectionsModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderQueueBindingCollectionsModel}
     */
    MsgVpnKafkaSenderQueueBindingCollectionsModel,

    /**
     * The MsgVpnKafkaSenderQueueBindingLinksModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderQueueBindingLinksModel}
     */
    MsgVpnKafkaSenderQueueBindingLinksModel,

    /**
     * The MsgVpnKafkaSenderQueueBindingModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderQueueBindingModel}
     */
    MsgVpnKafkaSenderQueueBindingModel,

    /**
     * The MsgVpnKafkaSenderQueueBindingResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderQueueBindingResponseModel}
     */
    MsgVpnKafkaSenderQueueBindingResponseModel,

    /**
     * The MsgVpnKafkaSenderQueueBindingsResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderQueueBindingsResponseModel}
     */
    MsgVpnKafkaSenderQueueBindingsResponseModel,

    /**
     * The MsgVpnKafkaSenderRemoteBrokerCollectionsModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderRemoteBrokerCollectionsModel}
     */
    MsgVpnKafkaSenderRemoteBrokerCollectionsModel,

    /**
     * The MsgVpnKafkaSenderRemoteBrokerLinksModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderRemoteBrokerLinksModel}
     */
    MsgVpnKafkaSenderRemoteBrokerLinksModel,

    /**
     * The MsgVpnKafkaSenderRemoteBrokerModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderRemoteBrokerModel}
     */
    MsgVpnKafkaSenderRemoteBrokerModel,

    /**
     * The MsgVpnKafkaSenderRemoteBrokerResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderRemoteBrokerResponseModel}
     */
    MsgVpnKafkaSenderRemoteBrokerResponseModel,

    /**
     * The MsgVpnKafkaSenderRemoteBrokersResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderRemoteBrokersResponseModel}
     */
    MsgVpnKafkaSenderRemoteBrokersResponseModel,

    /**
     * The MsgVpnKafkaSenderResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderResponseModel}
     */
    MsgVpnKafkaSenderResponseModel,

    /**
     * The MsgVpnKafkaSendersResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaSendersResponseModel}
     */
    MsgVpnKafkaSendersResponseModel,

    /**
     * The MsgVpnLinksModel model constructor.
     * @property {module:model/MsgVpnLinksModel}
     */
    MsgVpnLinksModel,

    /**
     * The MsgVpnModel model constructor.
     * @property {module:model/MsgVpnModel}
     */
    MsgVpnModel,

    /**
     * The MsgVpnMqttRetainCacheCollectionsModel model constructor.
     * @property {module:model/MsgVpnMqttRetainCacheCollectionsModel}
     */
    MsgVpnMqttRetainCacheCollectionsModel,

    /**
     * The MsgVpnMqttRetainCacheLinksModel model constructor.
     * @property {module:model/MsgVpnMqttRetainCacheLinksModel}
     */
    MsgVpnMqttRetainCacheLinksModel,

    /**
     * The MsgVpnMqttRetainCacheModel model constructor.
     * @property {module:model/MsgVpnMqttRetainCacheModel}
     */
    MsgVpnMqttRetainCacheModel,

    /**
     * The MsgVpnMqttRetainCacheResponseModel model constructor.
     * @property {module:model/MsgVpnMqttRetainCacheResponseModel}
     */
    MsgVpnMqttRetainCacheResponseModel,

    /**
     * The MsgVpnMqttRetainCachesResponseModel model constructor.
     * @property {module:model/MsgVpnMqttRetainCachesResponseModel}
     */
    MsgVpnMqttRetainCachesResponseModel,

    /**
     * The MsgVpnMqttSessionCollectionsModel model constructor.
     * @property {module:model/MsgVpnMqttSessionCollectionsModel}
     */
    MsgVpnMqttSessionCollectionsModel,

    /**
     * The MsgVpnMqttSessionCollectionsSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnMqttSessionCollectionsSubscriptionsModel}
     */
    MsgVpnMqttSessionCollectionsSubscriptionsModel,

    /**
     * The MsgVpnMqttSessionCounterModel model constructor.
     * @property {module:model/MsgVpnMqttSessionCounterModel}
     */
    MsgVpnMqttSessionCounterModel,

    /**
     * The MsgVpnMqttSessionLinksModel model constructor.
     * @property {module:model/MsgVpnMqttSessionLinksModel}
     */
    MsgVpnMqttSessionLinksModel,

    /**
     * The MsgVpnMqttSessionModel model constructor.
     * @property {module:model/MsgVpnMqttSessionModel}
     */
    MsgVpnMqttSessionModel,

    /**
     * The MsgVpnMqttSessionResponseModel model constructor.
     * @property {module:model/MsgVpnMqttSessionResponseModel}
     */
    MsgVpnMqttSessionResponseModel,

    /**
     * The MsgVpnMqttSessionSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnMqttSessionSubscriptionCollectionsModel}
     */
    MsgVpnMqttSessionSubscriptionCollectionsModel,

    /**
     * The MsgVpnMqttSessionSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnMqttSessionSubscriptionLinksModel}
     */
    MsgVpnMqttSessionSubscriptionLinksModel,

    /**
     * The MsgVpnMqttSessionSubscriptionModel model constructor.
     * @property {module:model/MsgVpnMqttSessionSubscriptionModel}
     */
    MsgVpnMqttSessionSubscriptionModel,

    /**
     * The MsgVpnMqttSessionSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnMqttSessionSubscriptionResponseModel}
     */
    MsgVpnMqttSessionSubscriptionResponseModel,

    /**
     * The MsgVpnMqttSessionSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnMqttSessionSubscriptionsResponseModel}
     */
    MsgVpnMqttSessionSubscriptionsResponseModel,

    /**
     * The MsgVpnMqttSessionsResponseModel model constructor.
     * @property {module:model/MsgVpnMqttSessionsResponseModel}
     */
    MsgVpnMqttSessionsResponseModel,

    /**
     * The MsgVpnProxiesResponseModel model constructor.
     * @property {module:model/MsgVpnProxiesResponseModel}
     */
    MsgVpnProxiesResponseModel,

    /**
     * The MsgVpnProxyCollectionsModel model constructor.
     * @property {module:model/MsgVpnProxyCollectionsModel}
     */
    MsgVpnProxyCollectionsModel,

    /**
     * The MsgVpnProxyLinksModel model constructor.
     * @property {module:model/MsgVpnProxyLinksModel}
     */
    MsgVpnProxyLinksModel,

    /**
     * The MsgVpnProxyModel model constructor.
     * @property {module:model/MsgVpnProxyModel}
     */
    MsgVpnProxyModel,

    /**
     * The MsgVpnProxyResponseModel model constructor.
     * @property {module:model/MsgVpnProxyResponseModel}
     */
    MsgVpnProxyResponseModel,

    /**
     * The MsgVpnQueueCollectionsModel model constructor.
     * @property {module:model/MsgVpnQueueCollectionsModel}
     */
    MsgVpnQueueCollectionsModel,

    /**
     * The MsgVpnQueueCollectionsMsgsModel model constructor.
     * @property {module:model/MsgVpnQueueCollectionsMsgsModel}
     */
    MsgVpnQueueCollectionsMsgsModel,

    /**
     * The MsgVpnQueueCollectionsPrioritiesModel model constructor.
     * @property {module:model/MsgVpnQueueCollectionsPrioritiesModel}
     */
    MsgVpnQueueCollectionsPrioritiesModel,

    /**
     * The MsgVpnQueueCollectionsSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnQueueCollectionsSubscriptionsModel}
     */
    MsgVpnQueueCollectionsSubscriptionsModel,

    /**
     * The MsgVpnQueueCollectionsTxFlowsModel model constructor.
     * @property {module:model/MsgVpnQueueCollectionsTxFlowsModel}
     */
    MsgVpnQueueCollectionsTxFlowsModel,

    /**
     * The MsgVpnQueueLinksModel model constructor.
     * @property {module:model/MsgVpnQueueLinksModel}
     */
    MsgVpnQueueLinksModel,

    /**
     * The MsgVpnQueueModel model constructor.
     * @property {module:model/MsgVpnQueueModel}
     */
    MsgVpnQueueModel,

    /**
     * The MsgVpnQueueMsgCollectionsModel model constructor.
     * @property {module:model/MsgVpnQueueMsgCollectionsModel}
     */
    MsgVpnQueueMsgCollectionsModel,

    /**
     * The MsgVpnQueueMsgLinksModel model constructor.
     * @property {module:model/MsgVpnQueueMsgLinksModel}
     */
    MsgVpnQueueMsgLinksModel,

    /**
     * The MsgVpnQueueMsgModel model constructor.
     * @property {module:model/MsgVpnQueueMsgModel}
     */
    MsgVpnQueueMsgModel,

    /**
     * The MsgVpnQueueMsgResponseModel model constructor.
     * @property {module:model/MsgVpnQueueMsgResponseModel}
     */
    MsgVpnQueueMsgResponseModel,

    /**
     * The MsgVpnQueueMsgsResponseModel model constructor.
     * @property {module:model/MsgVpnQueueMsgsResponseModel}
     */
    MsgVpnQueueMsgsResponseModel,

    /**
     * The MsgVpnQueuePrioritiesResponseModel model constructor.
     * @property {module:model/MsgVpnQueuePrioritiesResponseModel}
     */
    MsgVpnQueuePrioritiesResponseModel,

    /**
     * The MsgVpnQueuePriorityCollectionsModel model constructor.
     * @property {module:model/MsgVpnQueuePriorityCollectionsModel}
     */
    MsgVpnQueuePriorityCollectionsModel,

    /**
     * The MsgVpnQueuePriorityLinksModel model constructor.
     * @property {module:model/MsgVpnQueuePriorityLinksModel}
     */
    MsgVpnQueuePriorityLinksModel,

    /**
     * The MsgVpnQueuePriorityModel model constructor.
     * @property {module:model/MsgVpnQueuePriorityModel}
     */
    MsgVpnQueuePriorityModel,

    /**
     * The MsgVpnQueuePriorityResponseModel model constructor.
     * @property {module:model/MsgVpnQueuePriorityResponseModel}
     */
    MsgVpnQueuePriorityResponseModel,

    /**
     * The MsgVpnQueueResponseModel model constructor.
     * @property {module:model/MsgVpnQueueResponseModel}
     */
    MsgVpnQueueResponseModel,

    /**
     * The MsgVpnQueueSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnQueueSubscriptionCollectionsModel}
     */
    MsgVpnQueueSubscriptionCollectionsModel,

    /**
     * The MsgVpnQueueSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnQueueSubscriptionLinksModel}
     */
    MsgVpnQueueSubscriptionLinksModel,

    /**
     * The MsgVpnQueueSubscriptionModel model constructor.
     * @property {module:model/MsgVpnQueueSubscriptionModel}
     */
    MsgVpnQueueSubscriptionModel,

    /**
     * The MsgVpnQueueSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnQueueSubscriptionResponseModel}
     */
    MsgVpnQueueSubscriptionResponseModel,

    /**
     * The MsgVpnQueueSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnQueueSubscriptionsResponseModel}
     */
    MsgVpnQueueSubscriptionsResponseModel,

    /**
     * The MsgVpnQueueTemplateCollectionsModel model constructor.
     * @property {module:model/MsgVpnQueueTemplateCollectionsModel}
     */
    MsgVpnQueueTemplateCollectionsModel,

    /**
     * The MsgVpnQueueTemplateLinksModel model constructor.
     * @property {module:model/MsgVpnQueueTemplateLinksModel}
     */
    MsgVpnQueueTemplateLinksModel,

    /**
     * The MsgVpnQueueTemplateModel model constructor.
     * @property {module:model/MsgVpnQueueTemplateModel}
     */
    MsgVpnQueueTemplateModel,

    /**
     * The MsgVpnQueueTemplateResponseModel model constructor.
     * @property {module:model/MsgVpnQueueTemplateResponseModel}
     */
    MsgVpnQueueTemplateResponseModel,

    /**
     * The MsgVpnQueueTemplatesResponseModel model constructor.
     * @property {module:model/MsgVpnQueueTemplatesResponseModel}
     */
    MsgVpnQueueTemplatesResponseModel,

    /**
     * The MsgVpnQueueTxFlowCollectionsModel model constructor.
     * @property {module:model/MsgVpnQueueTxFlowCollectionsModel}
     */
    MsgVpnQueueTxFlowCollectionsModel,

    /**
     * The MsgVpnQueueTxFlowLinksModel model constructor.
     * @property {module:model/MsgVpnQueueTxFlowLinksModel}
     */
    MsgVpnQueueTxFlowLinksModel,

    /**
     * The MsgVpnQueueTxFlowModel model constructor.
     * @property {module:model/MsgVpnQueueTxFlowModel}
     */
    MsgVpnQueueTxFlowModel,

    /**
     * The MsgVpnQueueTxFlowResponseModel model constructor.
     * @property {module:model/MsgVpnQueueTxFlowResponseModel}
     */
    MsgVpnQueueTxFlowResponseModel,

    /**
     * The MsgVpnQueueTxFlowsResponseModel model constructor.
     * @property {module:model/MsgVpnQueueTxFlowsResponseModel}
     */
    MsgVpnQueueTxFlowsResponseModel,

    /**
     * The MsgVpnQueuesResponseModel model constructor.
     * @property {module:model/MsgVpnQueuesResponseModel}
     */
    MsgVpnQueuesResponseModel,

    /**
     * The MsgVpnRateModel model constructor.
     * @property {module:model/MsgVpnRateModel}
     */
    MsgVpnRateModel,

    /**
     * The MsgVpnReplayLogCollectionsModel model constructor.
     * @property {module:model/MsgVpnReplayLogCollectionsModel}
     */
    MsgVpnReplayLogCollectionsModel,

    /**
     * The MsgVpnReplayLogCollectionsMsgsModel model constructor.
     * @property {module:model/MsgVpnReplayLogCollectionsMsgsModel}
     */
    MsgVpnReplayLogCollectionsMsgsModel,

    /**
     * The MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel}
     */
    MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel,

    /**
     * The MsgVpnReplayLogLinksModel model constructor.
     * @property {module:model/MsgVpnReplayLogLinksModel}
     */
    MsgVpnReplayLogLinksModel,

    /**
     * The MsgVpnReplayLogModel model constructor.
     * @property {module:model/MsgVpnReplayLogModel}
     */
    MsgVpnReplayLogModel,

    /**
     * The MsgVpnReplayLogMsgCollectionsModel model constructor.
     * @property {module:model/MsgVpnReplayLogMsgCollectionsModel}
     */
    MsgVpnReplayLogMsgCollectionsModel,

    /**
     * The MsgVpnReplayLogMsgLinksModel model constructor.
     * @property {module:model/MsgVpnReplayLogMsgLinksModel}
     */
    MsgVpnReplayLogMsgLinksModel,

    /**
     * The MsgVpnReplayLogMsgModel model constructor.
     * @property {module:model/MsgVpnReplayLogMsgModel}
     */
    MsgVpnReplayLogMsgModel,

    /**
     * The MsgVpnReplayLogMsgResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogMsgResponseModel}
     */
    MsgVpnReplayLogMsgResponseModel,

    /**
     * The MsgVpnReplayLogMsgsResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogMsgsResponseModel}
     */
    MsgVpnReplayLogMsgsResponseModel,

    /**
     * The MsgVpnReplayLogResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogResponseModel}
     */
    MsgVpnReplayLogResponseModel,

    /**
     * The MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel}
     */
    MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel,

    /**
     * The MsgVpnReplayLogTopicFilterSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel}
     */
    MsgVpnReplayLogTopicFilterSubscriptionLinksModel,

    /**
     * The MsgVpnReplayLogTopicFilterSubscriptionModel model constructor.
     * @property {module:model/MsgVpnReplayLogTopicFilterSubscriptionModel}
     */
    MsgVpnReplayLogTopicFilterSubscriptionModel,

    /**
     * The MsgVpnReplayLogTopicFilterSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogTopicFilterSubscriptionResponseModel}
     */
    MsgVpnReplayLogTopicFilterSubscriptionResponseModel,

    /**
     * The MsgVpnReplayLogTopicFilterSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogTopicFilterSubscriptionsResponseModel}
     */
    MsgVpnReplayLogTopicFilterSubscriptionsResponseModel,

    /**
     * The MsgVpnReplayLogsResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogsResponseModel}
     */
    MsgVpnReplayLogsResponseModel,

    /**
     * The MsgVpnReplicatedTopicCollectionsModel model constructor.
     * @property {module:model/MsgVpnReplicatedTopicCollectionsModel}
     */
    MsgVpnReplicatedTopicCollectionsModel,

    /**
     * The MsgVpnReplicatedTopicLinksModel model constructor.
     * @property {module:model/MsgVpnReplicatedTopicLinksModel}
     */
    MsgVpnReplicatedTopicLinksModel,

    /**
     * The MsgVpnReplicatedTopicModel model constructor.
     * @property {module:model/MsgVpnReplicatedTopicModel}
     */
    MsgVpnReplicatedTopicModel,

    /**
     * The MsgVpnReplicatedTopicResponseModel model constructor.
     * @property {module:model/MsgVpnReplicatedTopicResponseModel}
     */
    MsgVpnReplicatedTopicResponseModel,

    /**
     * The MsgVpnReplicatedTopicsResponseModel model constructor.
     * @property {module:model/MsgVpnReplicatedTopicsResponseModel}
     */
    MsgVpnReplicatedTopicsResponseModel,

    /**
     * The MsgVpnResponseModel model constructor.
     * @property {module:model/MsgVpnResponseModel}
     */
    MsgVpnResponseModel,

    /**
     * The MsgVpnRestDeliveryPointCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointCollectionsModel}
     */
    MsgVpnRestDeliveryPointCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointCollectionsQueueBindingsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel}
     */
    MsgVpnRestDeliveryPointCollectionsQueueBindingsModel,

    /**
     * The MsgVpnRestDeliveryPointCollectionsRestConsumersModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel}
     */
    MsgVpnRestDeliveryPointCollectionsRestConsumersModel,

    /**
     * The MsgVpnRestDeliveryPointLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointLinksModel}
     */
    MsgVpnRestDeliveryPointLinksModel,

    /**
     * The MsgVpnRestDeliveryPointModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointModel}
     */
    MsgVpnRestDeliveryPointModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsModel}
     */
    MsgVpnRestDeliveryPointQueueBindingCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel}
     */
    MsgVpnRestDeliveryPointQueueBindingCollectionsProtectedRequestHeadersModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel}
     */
    MsgVpnRestDeliveryPointQueueBindingCollectionsRequestHeadersModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingLinksModel}
     */
    MsgVpnRestDeliveryPointQueueBindingLinksModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingModel}
     */
    MsgVpnRestDeliveryPointQueueBindingModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel}
     */
    MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel}
     */
    MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderLinksModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel}
     */
    MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel}
     */
    MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel}
     */
    MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel}
     */
    MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel}
     */
    MsgVpnRestDeliveryPointQueueBindingRequestHeaderLinksModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel}
     */
    MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel}
     */
    MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel}
     */
    MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel}
     */
    MsgVpnRestDeliveryPointQueueBindingResponseModel,

    /**
     * The MsgVpnRestDeliveryPointQueueBindingsResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointQueueBindingsResponseModel}
     */
    MsgVpnRestDeliveryPointQueueBindingsResponseModel,

    /**
     * The MsgVpnRestDeliveryPointResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointResponseModel}
     */
    MsgVpnRestDeliveryPointResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel}
     */
    MsgVpnRestDeliveryPointRestConsumerCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel}
     */
    MsgVpnRestDeliveryPointRestConsumerCollectionsOauthJwtClaimsModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel}
     */
    MsgVpnRestDeliveryPointRestConsumerCollectionsTlsTrustedCommonNamesModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerCounterModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerCounterModel}
     */
    MsgVpnRestDeliveryPointRestConsumerCounterModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerLinksModel}
     */
    MsgVpnRestDeliveryPointRestConsumerLinksModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerModel}
     */
    MsgVpnRestDeliveryPointRestConsumerModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel}
     */
    MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel}
     */
    MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimLinksModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel}
     */
    MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumerResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel}
     */
    MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameCollectionsModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel}
     */
    MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameLinksModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel}
     */
    MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumersResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumersResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumersResponseModel,

    /**
     * The MsgVpnRestDeliveryPointsResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointsResponseModel}
     */
    MsgVpnRestDeliveryPointsResponseModel,

    /**
     * The MsgVpnTelemetryProfileCollectionsModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileCollectionsModel}
     */
    MsgVpnTelemetryProfileCollectionsModel,

    /**
     * The MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel}
     */
    MsgVpnTelemetryProfileCollectionsReceiverAclConnectExceptionsModel,

    /**
     * The MsgVpnTelemetryProfileCollectionsTraceFiltersModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileCollectionsTraceFiltersModel}
     */
    MsgVpnTelemetryProfileCollectionsTraceFiltersModel,

    /**
     * The MsgVpnTelemetryProfileLinksModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileLinksModel}
     */
    MsgVpnTelemetryProfileLinksModel,

    /**
     * The MsgVpnTelemetryProfileModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileModel}
     */
    MsgVpnTelemetryProfileModel,

    /**
     * The MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel}
     */
    MsgVpnTelemetryProfileReceiverAclConnectExceptionCollectionsModel,

    /**
     * The MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel}
     */
    MsgVpnTelemetryProfileReceiverAclConnectExceptionLinksModel,

    /**
     * The MsgVpnTelemetryProfileReceiverAclConnectExceptionModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel}
     */
    MsgVpnTelemetryProfileReceiverAclConnectExceptionModel,

    /**
     * The MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel}
     */
    MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel,

    /**
     * The MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel}
     */
    MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel,

    /**
     * The MsgVpnTelemetryProfileResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileResponseModel}
     */
    MsgVpnTelemetryProfileResponseModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterCollectionsModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsModel}
     */
    MsgVpnTelemetryProfileTraceFilterCollectionsModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel}
     */
    MsgVpnTelemetryProfileTraceFilterCollectionsSubscriptionsModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterLinksModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterLinksModel}
     */
    MsgVpnTelemetryProfileTraceFilterLinksModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterModel}
     */
    MsgVpnTelemetryProfileTraceFilterModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterResponseModel}
     */
    MsgVpnTelemetryProfileTraceFilterResponseModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel}
     */
    MsgVpnTelemetryProfileTraceFilterSubscriptionCollectionsModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel}
     */
    MsgVpnTelemetryProfileTraceFilterSubscriptionLinksModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterSubscriptionModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel}
     */
    MsgVpnTelemetryProfileTraceFilterSubscriptionModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel}
     */
    MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel,

    /**
     * The MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel}
     */
    MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel,

    /**
     * The MsgVpnTelemetryProfileTraceFiltersResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel}
     */
    MsgVpnTelemetryProfileTraceFiltersResponseModel,

    /**
     * The MsgVpnTelemetryProfilesResponseModel model constructor.
     * @property {module:model/MsgVpnTelemetryProfilesResponseModel}
     */
    MsgVpnTelemetryProfilesResponseModel,

    /**
     * The MsgVpnTopicEndpointCollectionsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCollectionsModel}
     */
    MsgVpnTopicEndpointCollectionsModel,

    /**
     * The MsgVpnTopicEndpointCollectionsMsgsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCollectionsMsgsModel}
     */
    MsgVpnTopicEndpointCollectionsMsgsModel,

    /**
     * The MsgVpnTopicEndpointCollectionsPrioritiesModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCollectionsPrioritiesModel}
     */
    MsgVpnTopicEndpointCollectionsPrioritiesModel,

    /**
     * The MsgVpnTopicEndpointCollectionsTxFlowsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCollectionsTxFlowsModel}
     */
    MsgVpnTopicEndpointCollectionsTxFlowsModel,

    /**
     * The MsgVpnTopicEndpointLinksModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointLinksModel}
     */
    MsgVpnTopicEndpointLinksModel,

    /**
     * The MsgVpnTopicEndpointModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointModel}
     */
    MsgVpnTopicEndpointModel,

    /**
     * The MsgVpnTopicEndpointMsgCollectionsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointMsgCollectionsModel}
     */
    MsgVpnTopicEndpointMsgCollectionsModel,

    /**
     * The MsgVpnTopicEndpointMsgLinksModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointMsgLinksModel}
     */
    MsgVpnTopicEndpointMsgLinksModel,

    /**
     * The MsgVpnTopicEndpointMsgModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointMsgModel}
     */
    MsgVpnTopicEndpointMsgModel,

    /**
     * The MsgVpnTopicEndpointMsgResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointMsgResponseModel}
     */
    MsgVpnTopicEndpointMsgResponseModel,

    /**
     * The MsgVpnTopicEndpointMsgsResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointMsgsResponseModel}
     */
    MsgVpnTopicEndpointMsgsResponseModel,

    /**
     * The MsgVpnTopicEndpointPrioritiesResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointPrioritiesResponseModel}
     */
    MsgVpnTopicEndpointPrioritiesResponseModel,

    /**
     * The MsgVpnTopicEndpointPriorityCollectionsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointPriorityCollectionsModel}
     */
    MsgVpnTopicEndpointPriorityCollectionsModel,

    /**
     * The MsgVpnTopicEndpointPriorityLinksModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointPriorityLinksModel}
     */
    MsgVpnTopicEndpointPriorityLinksModel,

    /**
     * The MsgVpnTopicEndpointPriorityModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointPriorityModel}
     */
    MsgVpnTopicEndpointPriorityModel,

    /**
     * The MsgVpnTopicEndpointPriorityResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointPriorityResponseModel}
     */
    MsgVpnTopicEndpointPriorityResponseModel,

    /**
     * The MsgVpnTopicEndpointResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointResponseModel}
     */
    MsgVpnTopicEndpointResponseModel,

    /**
     * The MsgVpnTopicEndpointTemplateCollectionsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTemplateCollectionsModel}
     */
    MsgVpnTopicEndpointTemplateCollectionsModel,

    /**
     * The MsgVpnTopicEndpointTemplateLinksModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTemplateLinksModel}
     */
    MsgVpnTopicEndpointTemplateLinksModel,

    /**
     * The MsgVpnTopicEndpointTemplateModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTemplateModel}
     */
    MsgVpnTopicEndpointTemplateModel,

    /**
     * The MsgVpnTopicEndpointTemplateResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTemplateResponseModel}
     */
    MsgVpnTopicEndpointTemplateResponseModel,

    /**
     * The MsgVpnTopicEndpointTemplatesResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTemplatesResponseModel}
     */
    MsgVpnTopicEndpointTemplatesResponseModel,

    /**
     * The MsgVpnTopicEndpointTxFlowCollectionsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTxFlowCollectionsModel}
     */
    MsgVpnTopicEndpointTxFlowCollectionsModel,

    /**
     * The MsgVpnTopicEndpointTxFlowLinksModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTxFlowLinksModel}
     */
    MsgVpnTopicEndpointTxFlowLinksModel,

    /**
     * The MsgVpnTopicEndpointTxFlowModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTxFlowModel}
     */
    MsgVpnTopicEndpointTxFlowModel,

    /**
     * The MsgVpnTopicEndpointTxFlowResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTxFlowResponseModel}
     */
    MsgVpnTopicEndpointTxFlowResponseModel,

    /**
     * The MsgVpnTopicEndpointTxFlowsResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointTxFlowsResponseModel}
     */
    MsgVpnTopicEndpointTxFlowsResponseModel,

    /**
     * The MsgVpnTopicEndpointsResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointsResponseModel}
     */
    MsgVpnTopicEndpointsResponseModel,

    /**
     * The MsgVpnTransactionCollectionsConsumerMsgsModel model constructor.
     * @property {module:model/MsgVpnTransactionCollectionsConsumerMsgsModel}
     */
    MsgVpnTransactionCollectionsConsumerMsgsModel,

    /**
     * The MsgVpnTransactionCollectionsModel model constructor.
     * @property {module:model/MsgVpnTransactionCollectionsModel}
     */
    MsgVpnTransactionCollectionsModel,

    /**
     * The MsgVpnTransactionCollectionsPublisherMsgsModel model constructor.
     * @property {module:model/MsgVpnTransactionCollectionsPublisherMsgsModel}
     */
    MsgVpnTransactionCollectionsPublisherMsgsModel,

    /**
     * The MsgVpnTransactionConsumerMsgCollectionsModel model constructor.
     * @property {module:model/MsgVpnTransactionConsumerMsgCollectionsModel}
     */
    MsgVpnTransactionConsumerMsgCollectionsModel,

    /**
     * The MsgVpnTransactionConsumerMsgLinksModel model constructor.
     * @property {module:model/MsgVpnTransactionConsumerMsgLinksModel}
     */
    MsgVpnTransactionConsumerMsgLinksModel,

    /**
     * The MsgVpnTransactionConsumerMsgModel model constructor.
     * @property {module:model/MsgVpnTransactionConsumerMsgModel}
     */
    MsgVpnTransactionConsumerMsgModel,

    /**
     * The MsgVpnTransactionConsumerMsgResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionConsumerMsgResponseModel}
     */
    MsgVpnTransactionConsumerMsgResponseModel,

    /**
     * The MsgVpnTransactionConsumerMsgsResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionConsumerMsgsResponseModel}
     */
    MsgVpnTransactionConsumerMsgsResponseModel,

    /**
     * The MsgVpnTransactionLinksModel model constructor.
     * @property {module:model/MsgVpnTransactionLinksModel}
     */
    MsgVpnTransactionLinksModel,

    /**
     * The MsgVpnTransactionModel model constructor.
     * @property {module:model/MsgVpnTransactionModel}
     */
    MsgVpnTransactionModel,

    /**
     * The MsgVpnTransactionPublisherMsgCollectionsModel model constructor.
     * @property {module:model/MsgVpnTransactionPublisherMsgCollectionsModel}
     */
    MsgVpnTransactionPublisherMsgCollectionsModel,

    /**
     * The MsgVpnTransactionPublisherMsgLinksModel model constructor.
     * @property {module:model/MsgVpnTransactionPublisherMsgLinksModel}
     */
    MsgVpnTransactionPublisherMsgLinksModel,

    /**
     * The MsgVpnTransactionPublisherMsgModel model constructor.
     * @property {module:model/MsgVpnTransactionPublisherMsgModel}
     */
    MsgVpnTransactionPublisherMsgModel,

    /**
     * The MsgVpnTransactionPublisherMsgResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionPublisherMsgResponseModel}
     */
    MsgVpnTransactionPublisherMsgResponseModel,

    /**
     * The MsgVpnTransactionPublisherMsgsResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionPublisherMsgsResponseModel}
     */
    MsgVpnTransactionPublisherMsgsResponseModel,

    /**
     * The MsgVpnTransactionResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionResponseModel}
     */
    MsgVpnTransactionResponseModel,

    /**
     * The MsgVpnTransactionsResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionsResponseModel}
     */
    MsgVpnTransactionsResponseModel,

    /**
     * The MsgVpnsResponseModel model constructor.
     * @property {module:model/MsgVpnsResponseModel}
     */
    MsgVpnsResponseModel,

    /**
     * The OauthProfileAccessLevelGroupCollectionsModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupCollectionsModel}
     */
    OauthProfileAccessLevelGroupCollectionsModel,

    /**
     * The OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel}
     */
    OauthProfileAccessLevelGroupCollectionsMsgVpnAccessLevelExceptionsModel,

    /**
     * The OauthProfileAccessLevelGroupLinksModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupLinksModel}
     */
    OauthProfileAccessLevelGroupLinksModel,

    /**
     * The OauthProfileAccessLevelGroupModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupModel}
     */
    OauthProfileAccessLevelGroupModel,

    /**
     * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel}
     */
    OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel,

    /**
     * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel}
     */
    OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel,

    /**
     * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel}
     */
    OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel,

    /**
     * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel}
     */
    OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel,

    /**
     * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel}
     */
    OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel,

    /**
     * The OauthProfileAccessLevelGroupResponseModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupResponseModel}
     */
    OauthProfileAccessLevelGroupResponseModel,

    /**
     * The OauthProfileAccessLevelGroupsResponseModel model constructor.
     * @property {module:model/OauthProfileAccessLevelGroupsResponseModel}
     */
    OauthProfileAccessLevelGroupsResponseModel,

    /**
     * The OauthProfileClientAllowedHostCollectionsModel model constructor.
     * @property {module:model/OauthProfileClientAllowedHostCollectionsModel}
     */
    OauthProfileClientAllowedHostCollectionsModel,

    /**
     * The OauthProfileClientAllowedHostLinksModel model constructor.
     * @property {module:model/OauthProfileClientAllowedHostLinksModel}
     */
    OauthProfileClientAllowedHostLinksModel,

    /**
     * The OauthProfileClientAllowedHostModel model constructor.
     * @property {module:model/OauthProfileClientAllowedHostModel}
     */
    OauthProfileClientAllowedHostModel,

    /**
     * The OauthProfileClientAllowedHostResponseModel model constructor.
     * @property {module:model/OauthProfileClientAllowedHostResponseModel}
     */
    OauthProfileClientAllowedHostResponseModel,

    /**
     * The OauthProfileClientAllowedHostsResponseModel model constructor.
     * @property {module:model/OauthProfileClientAllowedHostsResponseModel}
     */
    OauthProfileClientAllowedHostsResponseModel,

    /**
     * The OauthProfileClientAuthorizationParameterCollectionsModel model constructor.
     * @property {module:model/OauthProfileClientAuthorizationParameterCollectionsModel}
     */
    OauthProfileClientAuthorizationParameterCollectionsModel,

    /**
     * The OauthProfileClientAuthorizationParameterLinksModel model constructor.
     * @property {module:model/OauthProfileClientAuthorizationParameterLinksModel}
     */
    OauthProfileClientAuthorizationParameterLinksModel,

    /**
     * The OauthProfileClientAuthorizationParameterModel model constructor.
     * @property {module:model/OauthProfileClientAuthorizationParameterModel}
     */
    OauthProfileClientAuthorizationParameterModel,

    /**
     * The OauthProfileClientAuthorizationParameterResponseModel model constructor.
     * @property {module:model/OauthProfileClientAuthorizationParameterResponseModel}
     */
    OauthProfileClientAuthorizationParameterResponseModel,

    /**
     * The OauthProfileClientAuthorizationParametersResponseModel model constructor.
     * @property {module:model/OauthProfileClientAuthorizationParametersResponseModel}
     */
    OauthProfileClientAuthorizationParametersResponseModel,

    /**
     * The OauthProfileClientRequiredClaimCollectionsModel model constructor.
     * @property {module:model/OauthProfileClientRequiredClaimCollectionsModel}
     */
    OauthProfileClientRequiredClaimCollectionsModel,

    /**
     * The OauthProfileClientRequiredClaimLinksModel model constructor.
     * @property {module:model/OauthProfileClientRequiredClaimLinksModel}
     */
    OauthProfileClientRequiredClaimLinksModel,

    /**
     * The OauthProfileClientRequiredClaimModel model constructor.
     * @property {module:model/OauthProfileClientRequiredClaimModel}
     */
    OauthProfileClientRequiredClaimModel,

    /**
     * The OauthProfileClientRequiredClaimResponseModel model constructor.
     * @property {module:model/OauthProfileClientRequiredClaimResponseModel}
     */
    OauthProfileClientRequiredClaimResponseModel,

    /**
     * The OauthProfileClientRequiredClaimsResponseModel model constructor.
     * @property {module:model/OauthProfileClientRequiredClaimsResponseModel}
     */
    OauthProfileClientRequiredClaimsResponseModel,

    /**
     * The OauthProfileCollectionsAccessLevelGroupsModel model constructor.
     * @property {module:model/OauthProfileCollectionsAccessLevelGroupsModel}
     */
    OauthProfileCollectionsAccessLevelGroupsModel,

    /**
     * The OauthProfileCollectionsClientAllowedHostsModel model constructor.
     * @property {module:model/OauthProfileCollectionsClientAllowedHostsModel}
     */
    OauthProfileCollectionsClientAllowedHostsModel,

    /**
     * The OauthProfileCollectionsClientAuthorizationParametersModel model constructor.
     * @property {module:model/OauthProfileCollectionsClientAuthorizationParametersModel}
     */
    OauthProfileCollectionsClientAuthorizationParametersModel,

    /**
     * The OauthProfileCollectionsClientRequiredClaimsModel model constructor.
     * @property {module:model/OauthProfileCollectionsClientRequiredClaimsModel}
     */
    OauthProfileCollectionsClientRequiredClaimsModel,

    /**
     * The OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel model constructor.
     * @property {module:model/OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel}
     */
    OauthProfileCollectionsDefaultMsgVpnAccessLevelExceptionsModel,

    /**
     * The OauthProfileCollectionsModel model constructor.
     * @property {module:model/OauthProfileCollectionsModel}
     */
    OauthProfileCollectionsModel,

    /**
     * The OauthProfileCollectionsResourceServerRequiredClaimsModel model constructor.
     * @property {module:model/OauthProfileCollectionsResourceServerRequiredClaimsModel}
     */
    OauthProfileCollectionsResourceServerRequiredClaimsModel,

    /**
     * The OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel model constructor.
     * @property {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel}
     */
    OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel,

    /**
     * The OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel model constructor.
     * @property {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel}
     */
    OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel,

    /**
     * The OauthProfileDefaultMsgVpnAccessLevelExceptionModel model constructor.
     * @property {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel}
     */
    OauthProfileDefaultMsgVpnAccessLevelExceptionModel,

    /**
     * The OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel model constructor.
     * @property {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel}
     */
    OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel,

    /**
     * The OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel model constructor.
     * @property {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel}
     */
    OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel,

    /**
     * The OauthProfileLinksModel model constructor.
     * @property {module:model/OauthProfileLinksModel}
     */
    OauthProfileLinksModel,

    /**
     * The OauthProfileModel model constructor.
     * @property {module:model/OauthProfileModel}
     */
    OauthProfileModel,

    /**
     * The OauthProfileResourceServerRequiredClaimCollectionsModel model constructor.
     * @property {module:model/OauthProfileResourceServerRequiredClaimCollectionsModel}
     */
    OauthProfileResourceServerRequiredClaimCollectionsModel,

    /**
     * The OauthProfileResourceServerRequiredClaimLinksModel model constructor.
     * @property {module:model/OauthProfileResourceServerRequiredClaimLinksModel}
     */
    OauthProfileResourceServerRequiredClaimLinksModel,

    /**
     * The OauthProfileResourceServerRequiredClaimModel model constructor.
     * @property {module:model/OauthProfileResourceServerRequiredClaimModel}
     */
    OauthProfileResourceServerRequiredClaimModel,

    /**
     * The OauthProfileResourceServerRequiredClaimResponseModel model constructor.
     * @property {module:model/OauthProfileResourceServerRequiredClaimResponseModel}
     */
    OauthProfileResourceServerRequiredClaimResponseModel,

    /**
     * The OauthProfileResourceServerRequiredClaimsResponseModel model constructor.
     * @property {module:model/OauthProfileResourceServerRequiredClaimsResponseModel}
     */
    OauthProfileResourceServerRequiredClaimsResponseModel,

    /**
     * The OauthProfileResponseModel model constructor.
     * @property {module:model/OauthProfileResponseModel}
     */
    OauthProfileResponseModel,

    /**
     * The OauthProfilesResponseModel model constructor.
     * @property {module:model/OauthProfilesResponseModel}
     */
    OauthProfilesResponseModel,

    /**
     * The SempErrorModel model constructor.
     * @property {module:model/SempErrorModel}
     */
    SempErrorModel,

    /**
     * The SempMetaModel model constructor.
     * @property {module:model/SempMetaModel}
     */
    SempMetaModel,

    /**
     * The SempMetaOnlyResponseModel model constructor.
     * @property {module:model/SempMetaOnlyResponseModel}
     */
    SempMetaOnlyResponseModel,

    /**
     * The SempPagingModel model constructor.
     * @property {module:model/SempPagingModel}
     */
    SempPagingModel,

    /**
     * The SempRequestModel model constructor.
     * @property {module:model/SempRequestModel}
     */
    SempRequestModel,

    /**
     * The SessionCollectionsModel model constructor.
     * @property {module:model/SessionCollectionsModel}
     */
    SessionCollectionsModel,

    /**
     * The SessionLinksModel model constructor.
     * @property {module:model/SessionLinksModel}
     */
    SessionLinksModel,

    /**
     * The SessionModel model constructor.
     * @property {module:model/SessionModel}
     */
    SessionModel,

    /**
     * The SessionResponseModel model constructor.
     * @property {module:model/SessionResponseModel}
     */
    SessionResponseModel,

    /**
     * The SessionsResponseModel model constructor.
     * @property {module:model/SessionsResponseModel}
     */
    SessionsResponseModel,

    /**
     * The StandardDomainCertAuthoritiesResponseModel model constructor.
     * @property {module:model/StandardDomainCertAuthoritiesResponseModel}
     */
    StandardDomainCertAuthoritiesResponseModel,

    /**
     * The StandardDomainCertAuthorityCollectionsModel model constructor.
     * @property {module:model/StandardDomainCertAuthorityCollectionsModel}
     */
    StandardDomainCertAuthorityCollectionsModel,

    /**
     * The StandardDomainCertAuthorityLinksModel model constructor.
     * @property {module:model/StandardDomainCertAuthorityLinksModel}
     */
    StandardDomainCertAuthorityLinksModel,

    /**
     * The StandardDomainCertAuthorityModel model constructor.
     * @property {module:model/StandardDomainCertAuthorityModel}
     */
    StandardDomainCertAuthorityModel,

    /**
     * The StandardDomainCertAuthorityResponseModel model constructor.
     * @property {module:model/StandardDomainCertAuthorityResponseModel}
     */
    StandardDomainCertAuthorityResponseModel,

    /**
     * The VirtualHostnameCollectionsModel model constructor.
     * @property {module:model/VirtualHostnameCollectionsModel}
     */
    VirtualHostnameCollectionsModel,

    /**
     * The VirtualHostnameLinksModel model constructor.
     * @property {module:model/VirtualHostnameLinksModel}
     */
    VirtualHostnameLinksModel,

    /**
     * The VirtualHostnameModel model constructor.
     * @property {module:model/VirtualHostnameModel}
     */
    VirtualHostnameModel,

    /**
     * The VirtualHostnameResponseModel model constructor.
     * @property {module:model/VirtualHostnameResponseModel}
     */
    VirtualHostnameResponseModel,

    /**
     * The VirtualHostnamesResponseModel model constructor.
     * @property {module:model/VirtualHostnamesResponseModel}
     */
    VirtualHostnamesResponseModel,

    /**
    * The AboutApi service constructor.
    * @property {module:api/AboutApi}
    */
    AboutApi,

    /**
    * The AclProfileApi service constructor.
    * @property {module:api/AclProfileApi}
    */
    AclProfileApi,

    /**
    * The AllApi service constructor.
    * @property {module:api/AllApi}
    */
    AllApi,

    /**
    * The AuthenticationOauthProfileApi service constructor.
    * @property {module:api/AuthenticationOauthProfileApi}
    */
    AuthenticationOauthProfileApi,

    /**
    * The AuthenticationOauthProviderApi service constructor.
    * @property {module:api/AuthenticationOauthProviderApi}
    */
    AuthenticationOauthProviderApi,

    /**
    * The AuthorizationGroupApi service constructor.
    * @property {module:api/AuthorizationGroupApi}
    */
    AuthorizationGroupApi,

    /**
    * The BridgeApi service constructor.
    * @property {module:api/BridgeApi}
    */
    BridgeApi,

    /**
    * The CertAuthorityApi service constructor.
    * @property {module:api/CertAuthorityApi}
    */
    CertAuthorityApi,

    /**
    * The CertMatchingRuleApi service constructor.
    * @property {module:api/CertMatchingRuleApi}
    */
    CertMatchingRuleApi,

    /**
    * The ClientApi service constructor.
    * @property {module:api/ClientApi}
    */
    ClientApi,

    /**
    * The ClientCertAuthorityApi service constructor.
    * @property {module:api/ClientCertAuthorityApi}
    */
    ClientCertAuthorityApi,

    /**
    * The ClientProfileApi service constructor.
    * @property {module:api/ClientProfileApi}
    */
    ClientProfileApi,

    /**
    * The ClientUsernameApi service constructor.
    * @property {module:api/ClientUsernameApi}
    */
    ClientUsernameApi,

    /**
    * The ConfigSyncLocalDatabaseRowApi service constructor.
    * @property {module:api/ConfigSyncLocalDatabaseRowApi}
    */
    ConfigSyncLocalDatabaseRowApi,

    /**
    * The ConfigSyncRemoteNodeApi service constructor.
    * @property {module:api/ConfigSyncRemoteNodeApi}
    */
    ConfigSyncRemoteNodeApi,

    /**
    * The DistributedCacheApi service constructor.
    * @property {module:api/DistributedCacheApi}
    */
    DistributedCacheApi,

    /**
    * The DmrBridgeApi service constructor.
    * @property {module:api/DmrBridgeApi}
    */
    DmrBridgeApi,

    /**
    * The DmrClusterApi service constructor.
    * @property {module:api/DmrClusterApi}
    */
    DmrClusterApi,

    /**
    * The DomainCertAuthorityApi service constructor.
    * @property {module:api/DomainCertAuthorityApi}
    */
    DomainCertAuthorityApi,

    /**
    * The JndiApi service constructor.
    * @property {module:api/JndiApi}
    */
    JndiApi,

    /**
    * The KafkaReceiverApi service constructor.
    * @property {module:api/KafkaReceiverApi}
    */
    KafkaReceiverApi,

    /**
    * The KafkaSenderApi service constructor.
    * @property {module:api/KafkaSenderApi}
    */
    KafkaSenderApi,

    /**
    * The MqttRetainCacheApi service constructor.
    * @property {module:api/MqttRetainCacheApi}
    */
    MqttRetainCacheApi,

    /**
    * The MqttSessionApi service constructor.
    * @property {module:api/MqttSessionApi}
    */
    MqttSessionApi,

    /**
    * The MsgVpnApi service constructor.
    * @property {module:api/MsgVpnApi}
    */
    MsgVpnApi,

    /**
    * The OauthProfileApi service constructor.
    * @property {module:api/OauthProfileApi}
    */
    OauthProfileApi,

    /**
    * The ProxyApi service constructor.
    * @property {module:api/ProxyApi}
    */
    ProxyApi,

    /**
    * The QueueApi service constructor.
    * @property {module:api/QueueApi}
    */
    QueueApi,

    /**
    * The QueueTemplateApi service constructor.
    * @property {module:api/QueueTemplateApi}
    */
    QueueTemplateApi,

    /**
    * The ReplayLogApi service constructor.
    * @property {module:api/ReplayLogApi}
    */
    ReplayLogApi,

    /**
    * The ReplicatedTopicApi service constructor.
    * @property {module:api/ReplicatedTopicApi}
    */
    ReplicatedTopicApi,

    /**
    * The RestDeliveryPointApi service constructor.
    * @property {module:api/RestDeliveryPointApi}
    */
    RestDeliveryPointApi,

    /**
    * The SessionApi service constructor.
    * @property {module:api/SessionApi}
    */
    SessionApi,

    /**
    * The StandardDomainCertAuthorityApi service constructor.
    * @property {module:api/StandardDomainCertAuthorityApi}
    */
    StandardDomainCertAuthorityApi,

    /**
    * The TelemetryProfileApi service constructor.
    * @property {module:api/TelemetryProfileApi}
    */
    TelemetryProfileApi,

    /**
    * The TopicEndpointApi service constructor.
    * @property {module:api/TopicEndpointApi}
    */
    TopicEndpointApi,

    /**
    * The TopicEndpointTemplateApi service constructor.
    * @property {module:api/TopicEndpointTemplateApi}
    */
    TopicEndpointTemplateApi,

    /**
    * The TransactionApi service constructor.
    * @property {module:api/TransactionApi}
    */
    TransactionApi,

    /**
    * The VirtualHostnameApi service constructor.
    * @property {module:api/VirtualHostnameApi}
    */
    VirtualHostnameApi
};
