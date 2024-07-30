/*
 * SEMP (Solace Element Management Protocol)
 * SEMP (starting in `v2`, see note 1) is a RESTful API for configuring, monitoring, and administering a Solace PubSub+ broker.  SEMP uses URIs to address manageable **resources** of the Solace PubSub+ broker. Resources are individual **objects**, **collections** of objects, or (exclusively in the action API) **actions**. This document applies to the following API:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Action|/SEMP/v2/action|Performing actions|See note 2    The following APIs are also available:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Configuration|/SEMP/v2/config|Reading and writing config state|See note 2 Monitoring|/SEMP/v2/monitor|Querying operational parameters|See note 2    Resources are always nouns, with individual objects being singular and collections being plural.  Objects within a collection are identified by an `obj-id`, which follows the collection name with the form `collection-name/obj-id`. An `obj-id` consists of one or more identifying attributes, separated by commas. Commas that appear in the identifying attribute itself must be percent encoded.   Actions within an object are identified by an `action-id`, which follows the object name with the form `obj-id/action-id`.  Some examples:  ``` /SEMP/v2/config/msgVpns                        ; MsgVpn collection /SEMP/v2/config/msgVpns/a                      ; MsgVpn object named \"a\" /SEMP/v2/config/msgVpns/a/bridges              ; Bridge collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/bridges/b,auto       ; Bridge object named \"b\" with virtual router \"auto\" in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues               ; Queue collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues/c             ; Queue object named \"c\" in MsgVpn \"a\" /SEMP/v2/action/msgVpns/a/queues/c/startReplay ; Action that starts a replay on Queue \"c\" in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients             ; Client collection in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients/d           ; Client object named \"d\" in MsgVpn \"a\" ```  ## Collection Resources  Collections are unordered lists of objects (unless described as otherwise), and are described by JSON arrays. Each item in the array represents an object in the same manner as the individual object would normally be represented. In the configuration API, the creation of a new object is done through its collection resource.  ## Object and Action Resources  Objects are composed of attributes, actions, collections, and other objects. They are described by JSON objects as name/value pairs. The collections and actions of an object are not contained directly in the object's JSON content; rather the content includes an attribute containing a URI which points to the collections and actions. These contained resources must be managed through this URI. At a minimum, every object has one or more identifying attributes, and its own `uri` attribute which contains the URI pointing to itself.  Actions are also composed of attributes, and are described by JSON objects as name/value pairs. Unlike objects, however, they are not members of a collection and cannot be retrieved, only performed. Actions only exist in the action API.  Attributes in an object or action may have any combination of the following properties:   Property|Meaning|Comments :---|:---|:--- Identifying|Attribute is involved in unique identification of the object, and appears in its URI| Const|Attribute value can only be chosen during object creation| Required|Attribute must be provided in the request| Read-Only|Attribute value cannot be changed|See note 3 Write-Only|Attribute can only be written, not read, unless the attribute is also opaque|See the documentation for the opaque property Requires-Disable|Attribute cannot be changed while the object (or the relevant part of the object) is administratively enabled| Auto-Disable|Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as one or more attributes will be temporarily disabled to apply the change| Deprecated|Attribute is deprecated, and will disappear in the next SEMP version| Opaque|Attribute can be set or retrieved in opaque form when the `opaquePassword` query parameter is present|See the `opaquePassword` query parameter documentation    In some requests, certain attributes may only be provided in certain combinations with other attributes:   Relationship|Meaning|Comments :---|:---|:--- Requires|Attribute may only be provided in a request if a particular attribute or combination of attributes is also provided in the request|The \"requires\" property will not be enforced for an attribute when all of the following conditions are met: (a) the attribute is not write-only; (b) the value provided for the attribute is the same as its current (or, on object creation, its default) value; and (c) the attribute requires a write-only attribute. In addition, the \"requires\" property may not be enforced even if only conditions (a) and (b) are met. Conflicts|Attribute may only be provided in a request if a particular attribute or combination of attributes is not also provided in the request|    In the monitoring API, any non-identifying attribute may not be returned in a GET.  ## HTTP Methods  The following HTTP methods manipulate resources in accordance with these general principles. Note that some methods are only used in certain APIs:   Method|Resource|Meaning|Request Body|Response Body|Notes :---|:---|:---|:---|:---|:--- POST|Collection|Create object|Initial attribute values|Object attributes and metadata|Absent attributes are set to default. If object already exists, a 400 error is returned PUT|Object|Update object|New attribute values|Object attributes and metadata|If does not exist, the object is first created. Absent attributes are set to default, with certain exceptions (see note 4) PUT|Action|Performs action|Action arguments|Action metadata| PATCH|Object|Update object|New attribute values|Object attributes and metadata|Absent attributes are left unchanged. If the object does not exist, a 404 error is returned DELETE|Object|Delete object|Empty|Object metadata|If the object does not exist, a 404 is returned GET|Object|Get object|Empty|Object attributes and metadata|If the object does not exist, a 404 is returned GET|Collection|Get collection|Empty|Object attributes and collection metadata|If the collection is empty, then an empty collection is returned with a 200 code    ## Common Query Parameters  The following are some common query parameters that are supported by many method/URI combinations. Individual URIs may document additional parameters. Note that multiple query parameters can be used together in a single URI, separated by the ampersand character. For example:  ``` ; Request for the MsgVpns collection using two hypothetical query parameters ; \"q1\" and \"q2\" with values \"val1\" and \"val2\" respectively /SEMP/v2/action/msgVpns?q1=val1&q2=val2 ```  ### select  Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. Use this query parameter to limit the size of the returned data for each returned object, return only those fields that are desired, or exclude fields that are not desired.  The value of `select` is a comma-separated list of attribute names. If the list contains attribute names that are not prefaced by `-`, only those attributes are included in the response. If the list contains attribute names that are prefaced by `-`, those attributes are excluded from the response. If the list contains both types, then the difference of the first set of attributes and the second set of attributes is returned. If the list is empty (i.e. `select=`), it is treated the same as if no `select` was provided: all attribute are returned.  All attributes that are prefaced by `-` must follow all attributes that are not prefaced by `-`. In addition, each attribute name in the list must match at least one attribute in the object.  Names may include the `*` wildcard (zero or more characters). Nested attribute names are supported using periods (e.g. `parentName.childName`).  Some examples:  ``` ; List of all MsgVpn names /SEMP/v2/action/msgVpns?select=msgVpnName ; List of all MsgVpn and their attributes except for their names /SEMP/v2/action/msgVpns?select=-msgVpnName ; Authentication attributes of MsgVpn \"finance\" /SEMP/v2/action/msgVpns/finance?select=authentication%2A ; All attributes of MsgVpn \"finance\" except for authentication attributes /SEMP/v2/action/msgVpns/finance?select=-authentication%2A ; Access related attributes of Queue \"orderQ\" of MsgVpn \"finance\" /SEMP/v2/action/msgVpns/finance/queues/orderQ?select=owner,permission ```  ### where  Include in the response only objects where certain conditions are true. Use this query parameter to limit which objects are returned to those whose attribute values meet the given conditions.  The value of `where` is a comma-separated list of expressions. All expressions must be true for the object to be included in the response. Each expression takes the form:  ``` expression  = attribute-name OP value OP          = '==' | '!=' | '<' | '>' | '<=' | '>=' ```  Write-only attributes cannot be used in a `where` expression.  `value` may be a number, string, `true`, or `false`, as appropriate for the type of `attribute-name`.  A `*` in a string `value` is interpreted as a wildcard (zero or more characters), but can be escaped using `\\`. The `\\` character can itself be escaped using `\\`. The `*` wildcard can only be used with the `==` and `!=` operators. If `*` is used as a literal with other operators, it must be escaped.  The `<`, `>`, `<=`, and `>=` operators perform a simple byte-for-byte comparison when used with a string `value`.  Some examples:  ``` ; Only enabled MsgVpns /SEMP/v2/action/msgVpns?where=enabled%3D%3Dtrue ; Only MsgVpns using basic non-LDAP authentication /SEMP/v2/action/msgVpns?where=authenticationBasicEnabled%3D%3Dtrue,authenticationBasicType%21%3Dldap ; Only MsgVpns that allow more than 100 client connections /SEMP/v2/action/msgVpns?where=maxConnectionCount%3E100 ; Only MsgVpns with msgVpnName starting with \"B\": /SEMP/v2/action/msgVpns?where=msgVpnName%3D%3DB%2A ```  ### count  Limit the count of objects in the response. This can be useful to limit the size of the response for large collections. The minimum value for `count` is `1` and the default is `10`. There is also a per-collection maximum value to limit request handling time.  `count` does not guarantee that a minimum number of objects will be returned. A page may contain fewer than `count` objects or even be empty. Additional objects may nonetheless be available for retrieval on subsequent pages. See the `cursor` query parameter documentation for more information on paging.  For example: ``` ; Up to 25 MsgVpns /SEMP/v2/action/msgVpns?count=25 ```  ### cursor  The cursor, or position, for the next page of objects. Cursors are opaque data that should not be created or interpreted by SEMP clients, and should only be used as described below.  When a request is made for a collection and there may be additional objects available for retrieval that are not included in the initial response, the response will include a `cursorQuery` field containing a cursor. The value of this field can be specified in the `cursor` query parameter of a subsequent request to retrieve the next page of objects.  Applications must continue to use the `cursorQuery` if one is provided in order to retrieve the full set of objects associated with the request, even if a page contains fewer than the requested number of objects (see the `count` query parameter documentation) or is empty.  ### opaquePassword  Attributes with the opaque property are also write-only and so cannot normally be retrieved in a GET. However, when a password is provided in the `opaquePassword` query parameter, attributes with the opaque property are retrieved in a GET in opaque form, encrypted with this password. The query parameter can also be used on a POST, PATCH, or PUT to set opaque attributes using opaque attribute values retrieved in a GET, so long as:  1. the same password that was used to retrieve the opaque attribute values is provided; and  2. the broker to which the request is being sent has the same major and minor SEMP version as the broker that produced the opaque attribute values.  The password provided in the query parameter must be a minimum of 8 characters and a maximum of 128 characters.  The query parameter can only be used in the configuration API, and only over HTTPS.  ## Authentication  When a client makes its first SEMPv2 request, it must supply a username and password using HTTP Basic authentication, or an OAuth token or tokens using HTTP Bearer authentication.  When HTTP Basic authentication is used, the broker returns a cookie containing a session key. The client can omit the username and password from subsequent requests, because the broker can use the session cookie for authentication instead. When the session expires or is deleted, the client must provide the username and password again, and the broker creates a new session.  There are a limited number of session slots available on the broker. The broker returns 529 No SEMP Session Available if it is not able to allocate a session.  If certain attributes—such as a user's password—are changed, the broker automatically deletes the affected sessions. These attributes are documented below. However, changes in external user configuration data stored on a RADIUS or LDAP server do not trigger the broker to delete the associated session(s), therefore you must do this manually, if required.  A client can retrieve its current session information using the /about/user endpoint and delete its own session using the /about/user/logout endpoint. A client with appropriate permissions can also manage all sessions using the /sessions endpoint.  Sessions are not created when authenticating with an OAuth token or tokens using HTTP Bearer authentication. If a session cookie is provided, it is ignored.  ## Help  Visit [our website](https://solace.com) to learn more about Solace.  You can also download the SEMP API specifications by clicking [here](https://solace.com/downloads/).  If you need additional support, please contact us at [support@solace.com](mailto:support@solace.com).  ## Notes  Note|Description :---:|:--- 1|This specification defines SEMP starting in \"v2\", and not the original SEMP \"v1\" interface. Request and response formats between \"v1\" and \"v2\" are entirely incompatible, although both protocols share a common port configuration on the Solace PubSub+ broker. They are differentiated by the initial portion of the URI path, one of either \"/SEMP/\" or \"/SEMP/v2/\" 2|This API is partially implemented. Only a subset of all objects are available. 3|Read-only attributes may appear in POST and PUT/PATCH requests but are ignored, except when the read-only attribute is identifying. 4|On a PUT, if the SEMP user is not authorized to modify the attribute, its value is left unchanged rather than set to default. In addition, the values of write-only attributes are not set to their defaults on a PUT, except in the following two cases: there is a mutual requires relationship with another non-write-only attribute, both attributes are absent from the request, and the non-write-only attribute is not currently set to its default value; or the attribute is also opaque and the `opaquePassword` query parameter is provided in the request.  
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
import {AboutApiLinksModel} from './model/AboutApiLinksModel';
import {AboutApiModel} from './model/AboutApiModel';
import {AboutApiResponseModel} from './model/AboutApiResponseModel';
import {AboutLinksModel} from './model/AboutLinksModel';
import {AboutModel} from './model/AboutModel';
import {AboutResponseModel} from './model/AboutResponseModel';
import {AboutUserLinksModel} from './model/AboutUserLinksModel';
import {AboutUserLogoutModel} from './model/AboutUserLogoutModel';
import {AboutUserModel} from './model/AboutUserModel';
import {AboutUserMsgVpnLinksModel} from './model/AboutUserMsgVpnLinksModel';
import {AboutUserMsgVpnModel} from './model/AboutUserMsgVpnModel';
import {AboutUserMsgVpnResponseModel} from './model/AboutUserMsgVpnResponseModel';
import {AboutUserMsgVpnsResponseModel} from './model/AboutUserMsgVpnsResponseModel';
import {AboutUserResponseModel} from './model/AboutUserResponseModel';
import {BrokerLinksModel} from './model/BrokerLinksModel';
import {BrokerModel} from './model/BrokerModel';
import {BrokerResponseModel} from './model/BrokerResponseModel';
import {CertAuthoritiesResponseModel} from './model/CertAuthoritiesResponseModel';
import {CertAuthorityLinksModel} from './model/CertAuthorityLinksModel';
import {CertAuthorityModel} from './model/CertAuthorityModel';
import {CertAuthorityRefreshCrlModel} from './model/CertAuthorityRefreshCrlModel';
import {CertAuthorityResponseModel} from './model/CertAuthorityResponseModel';
import {ClientCertAuthoritiesResponseModel} from './model/ClientCertAuthoritiesResponseModel';
import {ClientCertAuthorityLinksModel} from './model/ClientCertAuthorityLinksModel';
import {ClientCertAuthorityModel} from './model/ClientCertAuthorityModel';
import {ClientCertAuthorityRefreshCrlModel} from './model/ClientCertAuthorityRefreshCrlModel';
import {ClientCertAuthorityResponseModel} from './model/ClientCertAuthorityResponseModel';
import {ConfigSyncAssertLeaderMsgVpnModel} from './model/ConfigSyncAssertLeaderMsgVpnModel';
import {ConfigSyncAssertLeaderRouterModel} from './model/ConfigSyncAssertLeaderRouterModel';
import {ConfigSyncResyncFollowerMsgVpnModel} from './model/ConfigSyncResyncFollowerMsgVpnModel';
import {ConfigSyncResyncLeaderMsgVpnModel} from './model/ConfigSyncResyncLeaderMsgVpnModel';
import {ConfigSyncResyncLeaderRouterModel} from './model/ConfigSyncResyncLeaderRouterModel';
import {GuaranteedMsgingDefragmentMsgSpoolFilesStartModel} from './model/GuaranteedMsgingDefragmentMsgSpoolFilesStartModel';
import {GuaranteedMsgingDefragmentMsgSpoolFilesStopModel} from './model/GuaranteedMsgingDefragmentMsgSpoolFilesStopModel';
import {MsgVpnAuthenticationOauthProfileClearStatsModel} from './model/MsgVpnAuthenticationOauthProfileClearStatsModel';
import {MsgVpnAuthenticationOauthProfileLinksModel} from './model/MsgVpnAuthenticationOauthProfileLinksModel';
import {MsgVpnAuthenticationOauthProfileModel} from './model/MsgVpnAuthenticationOauthProfileModel';
import {MsgVpnAuthenticationOauthProfileResponseModel} from './model/MsgVpnAuthenticationOauthProfileResponseModel';
import {MsgVpnAuthenticationOauthProfilesResponseModel} from './model/MsgVpnAuthenticationOauthProfilesResponseModel';
import {MsgVpnAuthenticationOauthProviderClearStatsModel} from './model/MsgVpnAuthenticationOauthProviderClearStatsModel';
import {MsgVpnAuthenticationOauthProviderLinksModel} from './model/MsgVpnAuthenticationOauthProviderLinksModel';
import {MsgVpnAuthenticationOauthProviderModel} from './model/MsgVpnAuthenticationOauthProviderModel';
import {MsgVpnAuthenticationOauthProviderResponseModel} from './model/MsgVpnAuthenticationOauthProviderResponseModel';
import {MsgVpnAuthenticationOauthProvidersResponseModel} from './model/MsgVpnAuthenticationOauthProvidersResponseModel';
import {MsgVpnBridgeClearEventModel} from './model/MsgVpnBridgeClearEventModel';
import {MsgVpnBridgeClearStatsModel} from './model/MsgVpnBridgeClearStatsModel';
import {MsgVpnBridgeDisconnectModel} from './model/MsgVpnBridgeDisconnectModel';
import {MsgVpnBridgeLinksModel} from './model/MsgVpnBridgeLinksModel';
import {MsgVpnBridgeModel} from './model/MsgVpnBridgeModel';
import {MsgVpnBridgeResponseModel} from './model/MsgVpnBridgeResponseModel';
import {MsgVpnBridgesResponseModel} from './model/MsgVpnBridgesResponseModel';
import {MsgVpnClearMsgSpoolStatsModel} from './model/MsgVpnClearMsgSpoolStatsModel';
import {MsgVpnClearReplicationStatsModel} from './model/MsgVpnClearReplicationStatsModel';
import {MsgVpnClearServiceStatsModel} from './model/MsgVpnClearServiceStatsModel';
import {MsgVpnClearStatsModel} from './model/MsgVpnClearStatsModel';
import {MsgVpnClientClearEventModel} from './model/MsgVpnClientClearEventModel';
import {MsgVpnClientClearStatsModel} from './model/MsgVpnClientClearStatsModel';
import {MsgVpnClientDisconnectModel} from './model/MsgVpnClientDisconnectModel';
import {MsgVpnClientLinksModel} from './model/MsgVpnClientLinksModel';
import {MsgVpnClientModel} from './model/MsgVpnClientModel';
import {MsgVpnClientResponseModel} from './model/MsgVpnClientResponseModel';
import {MsgVpnClientTransactedSessionDeleteModel} from './model/MsgVpnClientTransactedSessionDeleteModel';
import {MsgVpnClientTransactedSessionLinksModel} from './model/MsgVpnClientTransactedSessionLinksModel';
import {MsgVpnClientTransactedSessionModel} from './model/MsgVpnClientTransactedSessionModel';
import {MsgVpnClientTransactedSessionResponseModel} from './model/MsgVpnClientTransactedSessionResponseModel';
import {MsgVpnClientTransactedSessionsResponseModel} from './model/MsgVpnClientTransactedSessionsResponseModel';
import {MsgVpnClientsResponseModel} from './model/MsgVpnClientsResponseModel';
import {MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel} from './model/MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel} from './model/MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel} from './model/MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceClearEventModel} from './model/MsgVpnDistributedCacheClusterInstanceClearEventModel';
import {MsgVpnDistributedCacheClusterInstanceClearStatsModel} from './model/MsgVpnDistributedCacheClusterInstanceClearStatsModel';
import {MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel} from './model/MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceLinksModel} from './model/MsgVpnDistributedCacheClusterInstanceLinksModel';
import {MsgVpnDistributedCacheClusterInstanceModel} from './model/MsgVpnDistributedCacheClusterInstanceModel';
import {MsgVpnDistributedCacheClusterInstanceResponseModel} from './model/MsgVpnDistributedCacheClusterInstanceResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel} from './model/MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceStartModel} from './model/MsgVpnDistributedCacheClusterInstanceStartModel';
import {MsgVpnDistributedCacheClusterInstancesResponseModel} from './model/MsgVpnDistributedCacheClusterInstancesResponseModel';
import {MsgVpnDistributedCacheClusterLinksModel} from './model/MsgVpnDistributedCacheClusterLinksModel';
import {MsgVpnDistributedCacheClusterModel} from './model/MsgVpnDistributedCacheClusterModel';
import {MsgVpnDistributedCacheClusterResponseModel} from './model/MsgVpnDistributedCacheClusterResponseModel';
import {MsgVpnDistributedCacheClustersResponseModel} from './model/MsgVpnDistributedCacheClustersResponseModel';
import {MsgVpnDistributedCacheLinksModel} from './model/MsgVpnDistributedCacheLinksModel';
import {MsgVpnDistributedCacheModel} from './model/MsgVpnDistributedCacheModel';
import {MsgVpnDistributedCacheResponseModel} from './model/MsgVpnDistributedCacheResponseModel';
import {MsgVpnDistributedCachesResponseModel} from './model/MsgVpnDistributedCachesResponseModel';
import {MsgVpnKafkaReceiverClearStatsModel} from './model/MsgVpnKafkaReceiverClearStatsModel';
import {MsgVpnKafkaReceiverLinksModel} from './model/MsgVpnKafkaReceiverLinksModel';
import {MsgVpnKafkaReceiverModel} from './model/MsgVpnKafkaReceiverModel';
import {MsgVpnKafkaReceiverResponseModel} from './model/MsgVpnKafkaReceiverResponseModel';
import {MsgVpnKafkaReceiversResponseModel} from './model/MsgVpnKafkaReceiversResponseModel';
import {MsgVpnKafkaSenderClearStatsModel} from './model/MsgVpnKafkaSenderClearStatsModel';
import {MsgVpnKafkaSenderLinksModel} from './model/MsgVpnKafkaSenderLinksModel';
import {MsgVpnKafkaSenderModel} from './model/MsgVpnKafkaSenderModel';
import {MsgVpnKafkaSenderResponseModel} from './model/MsgVpnKafkaSenderResponseModel';
import {MsgVpnKafkaSendersResponseModel} from './model/MsgVpnKafkaSendersResponseModel';
import {MsgVpnLinksModel} from './model/MsgVpnLinksModel';
import {MsgVpnModel} from './model/MsgVpnModel';
import {MsgVpnMqttSessionClearStatsModel} from './model/MsgVpnMqttSessionClearStatsModel';
import {MsgVpnMqttSessionLinksModel} from './model/MsgVpnMqttSessionLinksModel';
import {MsgVpnMqttSessionModel} from './model/MsgVpnMqttSessionModel';
import {MsgVpnMqttSessionResponseModel} from './model/MsgVpnMqttSessionResponseModel';
import {MsgVpnMqttSessionsResponseModel} from './model/MsgVpnMqttSessionsResponseModel';
import {MsgVpnQueueCancelReplayModel} from './model/MsgVpnQueueCancelReplayModel';
import {MsgVpnQueueClearStatsModel} from './model/MsgVpnQueueClearStatsModel';
import {MsgVpnQueueCopyMsgFromQueueModel} from './model/MsgVpnQueueCopyMsgFromQueueModel';
import {MsgVpnQueueCopyMsgFromReplayLogModel} from './model/MsgVpnQueueCopyMsgFromReplayLogModel';
import {MsgVpnQueueCopyMsgFromTopicEndpointModel} from './model/MsgVpnQueueCopyMsgFromTopicEndpointModel';
import {MsgVpnQueueDeleteMsgsModel} from './model/MsgVpnQueueDeleteMsgsModel';
import {MsgVpnQueueLinksModel} from './model/MsgVpnQueueLinksModel';
import {MsgVpnQueueModel} from './model/MsgVpnQueueModel';
import {MsgVpnQueueMsgDeleteModel} from './model/MsgVpnQueueMsgDeleteModel';
import {MsgVpnQueueMsgLinksModel} from './model/MsgVpnQueueMsgLinksModel';
import {MsgVpnQueueMsgModel} from './model/MsgVpnQueueMsgModel';
import {MsgVpnQueueMsgResponseModel} from './model/MsgVpnQueueMsgResponseModel';
import {MsgVpnQueueMsgsResponseModel} from './model/MsgVpnQueueMsgsResponseModel';
import {MsgVpnQueueResponseModel} from './model/MsgVpnQueueResponseModel';
import {MsgVpnQueueStartReplayModel} from './model/MsgVpnQueueStartReplayModel';
import {MsgVpnQueuesResponseModel} from './model/MsgVpnQueuesResponseModel';
import {MsgVpnReplayLogLinksModel} from './model/MsgVpnReplayLogLinksModel';
import {MsgVpnReplayLogModel} from './model/MsgVpnReplayLogModel';
import {MsgVpnReplayLogResponseModel} from './model/MsgVpnReplayLogResponseModel';
import {MsgVpnReplayLogTrimLoggedMsgsModel} from './model/MsgVpnReplayLogTrimLoggedMsgsModel';
import {MsgVpnReplayLogsResponseModel} from './model/MsgVpnReplayLogsResponseModel';
import {MsgVpnResponseModel} from './model/MsgVpnResponseModel';
import {MsgVpnRestDeliveryPointLinksModel} from './model/MsgVpnRestDeliveryPointLinksModel';
import {MsgVpnRestDeliveryPointModel} from './model/MsgVpnRestDeliveryPointModel';
import {MsgVpnRestDeliveryPointResponseModel} from './model/MsgVpnRestDeliveryPointResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerClearStatsModel} from './model/MsgVpnRestDeliveryPointRestConsumerClearStatsModel';
import {MsgVpnRestDeliveryPointRestConsumerLinksModel} from './model/MsgVpnRestDeliveryPointRestConsumerLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerModel} from './model/MsgVpnRestDeliveryPointRestConsumerModel';
import {MsgVpnRestDeliveryPointRestConsumerResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumerResponseModel';
import {MsgVpnRestDeliveryPointRestConsumersResponseModel} from './model/MsgVpnRestDeliveryPointRestConsumersResponseModel';
import {MsgVpnRestDeliveryPointsResponseModel} from './model/MsgVpnRestDeliveryPointsResponseModel';
import {MsgVpnTopicEndpointCancelReplayModel} from './model/MsgVpnTopicEndpointCancelReplayModel';
import {MsgVpnTopicEndpointClearStatsModel} from './model/MsgVpnTopicEndpointClearStatsModel';
import {MsgVpnTopicEndpointCopyMsgFromQueueModel} from './model/MsgVpnTopicEndpointCopyMsgFromQueueModel';
import {MsgVpnTopicEndpointCopyMsgFromReplayLogModel} from './model/MsgVpnTopicEndpointCopyMsgFromReplayLogModel';
import {MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel} from './model/MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel';
import {MsgVpnTopicEndpointDeleteMsgsModel} from './model/MsgVpnTopicEndpointDeleteMsgsModel';
import {MsgVpnTopicEndpointLinksModel} from './model/MsgVpnTopicEndpointLinksModel';
import {MsgVpnTopicEndpointModel} from './model/MsgVpnTopicEndpointModel';
import {MsgVpnTopicEndpointMsgDeleteModel} from './model/MsgVpnTopicEndpointMsgDeleteModel';
import {MsgVpnTopicEndpointMsgLinksModel} from './model/MsgVpnTopicEndpointMsgLinksModel';
import {MsgVpnTopicEndpointMsgModel} from './model/MsgVpnTopicEndpointMsgModel';
import {MsgVpnTopicEndpointMsgResponseModel} from './model/MsgVpnTopicEndpointMsgResponseModel';
import {MsgVpnTopicEndpointMsgsResponseModel} from './model/MsgVpnTopicEndpointMsgsResponseModel';
import {MsgVpnTopicEndpointResponseModel} from './model/MsgVpnTopicEndpointResponseModel';
import {MsgVpnTopicEndpointStartReplayModel} from './model/MsgVpnTopicEndpointStartReplayModel';
import {MsgVpnTopicEndpointsResponseModel} from './model/MsgVpnTopicEndpointsResponseModel';
import {MsgVpnTransactionCommitModel} from './model/MsgVpnTransactionCommitModel';
import {MsgVpnTransactionDeleteModel} from './model/MsgVpnTransactionDeleteModel';
import {MsgVpnTransactionLinksModel} from './model/MsgVpnTransactionLinksModel';
import {MsgVpnTransactionModel} from './model/MsgVpnTransactionModel';
import {MsgVpnTransactionResponseModel} from './model/MsgVpnTransactionResponseModel';
import {MsgVpnTransactionRollbackModel} from './model/MsgVpnTransactionRollbackModel';
import {MsgVpnTransactionsResponseModel} from './model/MsgVpnTransactionsResponseModel';
import {MsgVpnsResponseModel} from './model/MsgVpnsResponseModel';
import {OauthProfileClearStatsModel} from './model/OauthProfileClearStatsModel';
import {OauthProfileLinksModel} from './model/OauthProfileLinksModel';
import {OauthProfileModel} from './model/OauthProfileModel';
import {OauthProfileResponseModel} from './model/OauthProfileResponseModel';
import {OauthProfilesResponseModel} from './model/OauthProfilesResponseModel';
import {SempErrorModel} from './model/SempErrorModel';
import {SempMetaModel} from './model/SempMetaModel';
import {SempMetaOnlyResponseModel} from './model/SempMetaOnlyResponseModel';
import {SempPagingModel} from './model/SempPagingModel';
import {SempRequestModel} from './model/SempRequestModel';
import {SessionDeleteModel} from './model/SessionDeleteModel';
import {SessionLinksModel} from './model/SessionLinksModel';
import {SessionModel} from './model/SessionModel';
import {SessionResponseModel} from './model/SessionResponseModel';
import {SessionsResponseModel} from './model/SessionsResponseModel';
import {AboutApi} from './api/AboutApi';
import {AllApi} from './api/AllApi';
import {AuthenticationOauthProfileApi} from './api/AuthenticationOauthProfileApi';
import {AuthenticationOauthProviderApi} from './api/AuthenticationOauthProviderApi';
import {BridgeApi} from './api/BridgeApi';
import {CertAuthorityApi} from './api/CertAuthorityApi';
import {ClientApi} from './api/ClientApi';
import {ClientCertAuthorityApi} from './api/ClientCertAuthorityApi';
import {DistributedCacheApi} from './api/DistributedCacheApi';
import {KafkaReceiverApi} from './api/KafkaReceiverApi';
import {KafkaSenderApi} from './api/KafkaSenderApi';
import {MqttSessionApi} from './api/MqttSessionApi';
import {MsgVpnApi} from './api/MsgVpnApi';
import {OauthProfileApi} from './api/OauthProfileApi';
import {QueueApi} from './api/QueueApi';
import {ReplayLogApi} from './api/ReplayLogApi';
import {RestDeliveryPointApi} from './api/RestDeliveryPointApi';
import {SessionApi} from './api/SessionApi';
import {TopicEndpointApi} from './api/TopicEndpointApi';
import {TransactionApi} from './api/TransactionApi';

/**
* SEMP__starting_in_v2_see_note_1_is_a_RESTful_API_for_configuring_monitoring_and_administering_a_Solace_PubSub_broker_SEMP_uses_URIs_to_address_manageable_resources_of_the_Solace_PubSub_broker__Resources_are_individual_objects_collections_of_objects_or__exclusively_in_the_action_API_actions__This_document_applies_to_the_following_APIAPIBase_PathPurposeComments____________ActionSEMPv2actionPerforming_actionsSee_note_2The_following_APIs_are_also_availableAPIBase_PathPurposeComments____________ConfigurationSEMPv2configReading_and_writing_config_stateSee_note_2MonitoringSEMPv2monitorQuerying_operational_parametersSee_note_2Resources_are_always_nouns_with_individual_objects_being_singular_and_collections_being_plural_Objects_within_a_collection_are_identified_by_an_obj_id_which_follows_the_collection_name_with_the_form_collection_nameobj_id__An_obj_id_consists_of_one_or_more_identifying_attributes_separated_by_commas__Commas_that_appear_in_the_identifying_attribute_itself_must_be_percent_encoded_Actions_within_an_object_are_identified_by_an_action_id_which_follows_the_object_name_with_the_form_obj_idaction_id_Some_examplesSEMPv2configmsgVpns_________________________MsgVpn_collectionSEMPv2configmsgVpnsa_______________________MsgVpn_object_named_aSEMPv2configmsgVpnsabridges_______________Bridge_collection_in_MsgVpn_aSEMPv2configmsgVpnsabridgesbauto________Bridge_object_named_b_with_virtual_router_auto_in_MsgVpn_aSEMPv2configmsgVpnsaqueues________________Queue_collection_in_MsgVpn_aSEMPv2configmsgVpnsaqueuesc______________Queue_object_named_c_in_MsgVpn_aSEMPv2actionmsgVpnsaqueuescstartReplay__Action_that_starts_a_replay_on_Queue_c_in_MsgVpn_aSEMPv2monitormsgVpnsaclients______________Client_collection_in_MsgVpn_aSEMPv2monitormsgVpnsaclientsd____________Client_object_named_d_in_MsgVpn_a_Collection_ResourcesCollections_are_unordered_lists_of_objects__unless_described_as_otherwise_and_are_described_by_JSON_arrays__Each_item_in_the_array_represents_an_object_in_the_same_manner_as_the_individual_object_would_normally_be_represented__In_the_configuration_API_the_creation_of_a_new_object_is_done_through_its_collection_resource__Object_and_Action_ResourcesObjects_are_composed_of_attributes_actions_collections_and_other_objects__They_are_described_by_JSON_objects_as_namevalue_pairs__The_collections_and_actions_of_an_object_are_not_contained_directly_in_the_objects_JSON_content_rather_the_content_includes_an_attribute_containing_a_URI_which_points_to_the_collections_and_actions__These_contained_resources_must_be_managed_through_this_URI__At_a_minimum_every_object_has_one_or_more_identifying_attributes_and_its_own_uri_attribute_which_contains_the_URI_pointing_to_itself_Actions_are_also_composed_of_attributes_and_are_described_by_JSON_objects_as_namevalue_pairs__Unlike_objects_however_they_are_not_members_of_a_collection_and_cannot_be_retrieved_only_performed__Actions_only_exist_in_the_action_API_Attributes_in_an_object_or_action_may_have_any_combination_of_the_following_propertiesPropertyMeaningComments_________IdentifyingAttribute_is_involved_in_unique_identification_of_the_object_and_appears_in_its_URIConstAttribute_value_can_only_be_chosen_during_object_creationRequiredAttribute_must_be_provided_in_the_requestRead_OnlyAttribute_value_cannot_be_changedSee_note_3Write_OnlyAttribute_can_only_be_written_not_read_unless_the_attribute_is_also_opaqueSee_the_documentation_for_the_opaque_propertyRequires_DisableAttribute_cannot_be_changed_while_the_object__or_the_relevant_part_of_the_object_is_administratively_enabledAuto_DisableModifying_this_attribute_while_the_object__or_the_relevant_part_of_the_object_is_administratively_enabled_may_be_service_impacting_as_one_or_more_attributes_will_be_temporarily_disabled_to_apply_the_changeDeprecatedAttribute_is_deprecated_and_will_disappear_in_the_next_SEMP_versionOpaqueAttribute_can_be_set_or_retrieved_in_opaque_form_when_the_opaquePassword_query_parameter_is_presentSee_the_opaquePassword_query_parameter_documentationIn_some_requests_certain_attributes_may_only_be_provided_in_certain_combinations_with_other_attributesRelationshipMeaningComments_________RequiresAttribute_may_only_be_provided_in_a_request_if_a_particular_attribute_or_combination_of_attributes_is_also_provided_in_the_requestThe_requires_property_will_not_be_enforced_for_an_attribute_when_all_of_the_following_conditions_are_met__a_the_attribute_is_not_write_only__b_the_value_provided_for_the_attribute_is_the_same_as_its_current__or_on_object_creation_its_default_value_and__c_the_attribute_requires_a_write_only_attribute__In_addition_the_requires_property_may_not_be_enforced_even_if_only_conditions__a_and__b_are_met_ConflictsAttribute_may_only_be_provided_in_a_request_if_a_particular_attribute_or_combination_of_attributes_is_not_also_provided_in_the_requestIn_the_monitoring_API_any_non_identifying_attribute_may_not_be_returned_in_a_GET__HTTP_MethodsThe_following_HTTP_methods_manipulate_resources_in_accordance_with_these_general_principles__Note_that_some_methods_are_only_used_in_certain_APIsMethodResourceMeaningRequest_BodyResponse_BodyNotes__________________POSTCollectionCreate_objectInitial_attribute_valuesObject_attributes_and_metadataAbsent_attributes_are_set_to_default__If_object_already_exists_a_400_error_is_returnedPUTObjectUpdate_objectNew_attribute_valuesObject_attributes_and_metadataIf_does_not_exist_the_object_is_first_created__Absent_attributes_are_set_to_default_with_certain_exceptions__see_note_4PUTActionPerforms_actionAction_argumentsAction_metadataPATCHObjectUpdate_objectNew_attribute_valuesObject_attributes_and_metadataAbsent_attributes_are_left_unchanged__If_the_object_does_not_exist_a_404_error_is_returnedDELETEObjectDelete_objectEmptyObject_metadataIf_the_object_does_not_exist_a_404_is_returnedGETObjectGet_objectEmptyObject_attributes_and_metadataIf_the_object_does_not_exist_a_404_is_returnedGETCollectionGet_collectionEmptyObject_attributes_and_collection_metadataIf_the_collection_is_empty_then_an_empty_collection_is_returned_with_a_200_code_Common_Query_ParametersThe_following_are_some_common_query_parameters_that_are_supported_by_many_methodURI_combinations__Individual_URIs_may_document_additional_parameters__Note_that_multiple_query_parameters_can_be_used_together_in_a_single_URI_separated_by_the_ampersand_character__For_example_Request_for_the_MsgVpns_collection_using_two_hypothetical_query_parameters_q1_and_q2_with_values_val1_and_val2_respectivelySEMPv2actionmsgVpnsq1val1q2val2_selectInclude_in_the_response_only_selected_attributes_of_the_object_or_exclude_from_the_response_selected_attributes_of_the_object__Use_this_query_parameter_to_limit_the_size_of_the_returned_data_for_each_returned_object_return_only_those_fields_that_are_desired_or_exclude_fields_that_are_not_desired_The_value_of_select_is_a_comma_separated_list_of_attribute_names__If_the_list_contains_attribute_names_that_are_not_prefaced_by___only_those_attributes_are_included_in_the_response__If_the_list_contains_attribute_names_that_are_prefaced_by___those_attributes_are_excluded_from_the_response__If_the_list_contains_both_types_then_the_difference_of_the_first_set_of_attributes_and_the_second_set_of_attributes_is_returned__If_the_list_is_empty__i_e__select_it_is_treated_the_same_as_if_no_select_was_provided_all_attribute_are_returned_All_attributes_that_are_prefaced_by___must_follow_all_attributes_that_are_not_prefaced_by____In_addition_each_attribute_name_in_the_list_must_match_at_least_one_attribute_in_the_object_Names_may_include_the__wildcard__zero_or_more_characters__Nested_attribute_names_are_supported_using_periods__e_g__parentName_childName_Some_examples_List_of_all_MsgVpn_namesSEMPv2actionmsgVpnsselectmsgVpnName_List_of_all_MsgVpn_and_their_attributes_except_for_their_namesSEMPv2actionmsgVpnsselect_msgVpnName_Authentication_attributes_of_MsgVpn_financeSEMPv2actionmsgVpnsfinanceselectauthentication2A_All_attributes_of_MsgVpn_finance_except_for_authentication_attributesSEMPv2actionmsgVpnsfinanceselect_authentication2A_Access_related_attributes_of_Queue_orderQ_of_MsgVpn_financeSEMPv2actionmsgVpnsfinancequeuesorderQselectownerpermission_whereInclude_in_the_response_only_objects_where_certain_conditions_are_true__Use_this_query_parameter_to_limit_which_objects_are_returned_to_those_whose_attribute_values_meet_the_given_conditions_The_value_of_where_is_a_comma_separated_list_of_expressions__All_expressions_must_be_true_for_the_object_to_be_included_in_the_response__Each_expression_takes_the_formexpression___attribute_name_OP_valueOP_____________________Write_only_attributes_cannot_be_used_in_a_where_expression_value_may_be_a_number_string_true_or_false_as_appropriate_for_the_type_of_attribute_name_A__in_a_string_value_is_interpreted_as_a_wildcard__zero_or_more_characters_but_can_be_escaped_using___The__character_can_itself_be_escaped_using___The__wildcard_can_only_be_used_with_the__and__operators__If__is_used_as_a_literal_with_other_operators_it_must_be_escaped_The____and__operators_perform_a_simple_byte_for_byte_comparison_when_used_with_a_string_value_Some_examples_Only_enabled_MsgVpnsSEMPv2actionmsgVpnswhereenabled3D3Dtrue_Only_MsgVpns_using_basic_non_LDAP_authenticationSEMPv2actionmsgVpnswhereauthenticationBasicEnabled3D3DtrueauthenticationBasicType213Dldap_Only_MsgVpns_that_allow_more_than_100_client_connectionsSEMPv2actionmsgVpnswheremaxConnectionCount3E100_Only_MsgVpns_with_msgVpnName_starting_with_BSEMPv2actionmsgVpnswheremsgVpnName3D3DB2A_countLimit_the_count_of_objects_in_the_response__This_can_be_useful_to_limit_the_size_of_the_response_for_large_collections__The_minimum_value_for_count_is_1_and_the_default_is_10__There_is_also_a_per_collection_maximum_value_to_limit_request_handling_time_count_does_not_guarantee_that_a_minimum_number_of_objects_will_be_returned__A_page_may_contain_fewer_than_count_objects_or_even_be_empty__Additional_objects_may_nonetheless_be_available_for_retrieval_on_subsequent_pages__See_the_cursor_query_parameter_documentation_for_more_information_on_paging_For_example_Up_to_25_MsgVpnsSEMPv2actionmsgVpnscount25_cursorThe_cursor_or_position_for_the_next_page_of_objects__Cursors_are_opaque_data_that_should_not_be_created_or_interpreted_by_SEMP_clients_and_should_only_be_used_as_described_below_When_a_request_is_made_for_a_collection_and_there_may_be_additional_objects_available_for_retrieval_that_are_not_included_in_the_initial_response_the_response_will_include_a_cursorQuery_field_containing_a_cursor__The_value_of_this_field_can_be_specified_in_the_cursor_query_parameter_of_a_subsequent_request_to_retrieve_the_next_page_of_objects_Applications_must_continue_to_use_the_cursorQuery_if_one_is_provided_in_order_to_retrieve_the_full_set_of_objects_associated_with_the_request_even_if_a_page_contains_fewer_than_the_requested_number_of_objects__see_the_count_query_parameter_documentation_or_is_empty__opaquePasswordAttributes_with_the_opaque_property_are_also_write_only_and_so_cannot_normally_be_retrieved_in_a_GET__However_when_a_password_is_provided_in_the_opaquePassword_query_parameter_attributes_with_the_opaque_property_are_retrieved_in_a_GET_in_opaque_form_encrypted_with_this_password__The_query_parameter_can_also_be_used_on_a_POST_PATCH_or_PUT_to_set_opaque_attributes_using_opaque_attribute_values_retrieved_in_a_GET_so_long_as1__the_same_password_that_was_used_to_retrieve_the_opaque_attribute_values_is_provided_and2__the_broker_to_which_the_request_is_being_sent_has_the_same_major_and_minor_SEMP_version_as_the_broker_that_produced_the_opaque_attribute_values_The_password_provided_in_the_query_parameter_must_be_a_minimum_of_8_characters_and_a_maximum_of_128_characters_The_query_parameter_can_only_be_used_in_the_configuration_API_and_only_over_HTTPS__AuthenticationWhen_a_client_makes_its_first_SEMPv2_request_it_must_supply_a_username_and_password_using_HTTP_Basic_authentication_or_an_OAuth_token_or_tokens_using_HTTP_Bearer_authentication_When_HTTP_Basic_authentication_is_used_the_broker_returns_a_cookie_containing_a_session_key__The_client_can_omit_the_username_and_password_from_subsequent_requests_because_the_broker_can_use_the_session_cookie_for_authentication_instead__When_the_session_expires_or_is_deleted_the_client_must_provide_the_username_and_password_again_and_the_broker_creates_a_new_session_There_are_a_limited_number_of_session_slots_available_on_the_broker__The_broker_returns_529_No_SEMP_Session_Available_if_it_is_not_able_to_allocate_a_session_If_certain_attributessuch_as_a_users_passwordare_changed_the_broker_automatically_deletes_the_affected_sessions__These_attributes_are_documented_below__However_changes_in_external_user_configuration_data_stored_on_a_RADIUS_or_LDAP_server_do_not_trigger_the_broker_to_delete_the_associated_session_s_therefore_you_must_do_this_manually_if_required_A_client_can_retrieve_its_current_session_information_using_the_aboutuser_endpoint_and_delete_its_own_session_using_the_aboutuserlogout_endpoint__A_client_with_appropriate_permissions_can_also_manage_all_sessions_using_the_sessions_endpoint_Sessions_are_not_created_when_authenticating_with_an_OAuth_token_or_tokens_using_HTTP_Bearer_authentication__If_a_session_cookie_is_provided_it_is_ignored__HelpVisit__our_website_httpssolace_com_to_learn_more_about_Solace_You_can_also_download_the_SEMP_API_specifications_by_clicking__here_httpssolace_comdownloads_If_you_need_additional_support_please_contact_us_at__supportsolace_com_mailtosupportsolace_com__NotesNoteDescription______1This_specification_defines_SEMP_starting_in_v2_and_not_the_original_SEMP_v1_interface__Request_and_response_formats_between_v1_and_v2_are_entirely_incompatible_although_both_protocols_share_a_common_port_configuration_on_the_Solace_PubSub_broker__They_are_differentiated_by_the_initial_portion_of_the_URI_path_one_of_either_SEMP_or_SEMPv22This_API_is_partially_implemented__Only_a_subset_of_all_objects_are_available_3Read_only_attributes_may_appear_in_POST_and_PUTPATCH_requests_but_are_ignored_except_when_the_read_only_attribute_is_identifying_4On_a_PUT_if_the_SEMP_user_is_not_authorized_to_modify_the_attribute_its_value_is_left_unchanged_rather_than_set_to_default__In_addition_the_values_of_write_only_attributes_are_not_set_to_their_defaults_on_a_PUT_except_in_the_following_two_cases_there_is_a_mutual_requires_relationship_with_another_non_write_only_attribute_both_attributes_are_absent_from_the_request_and_the_non_write_only_attribute_is_not_currently_set_to_its_default_value_or_the_attribute_is_also_opaque_and_the_opaquePassword_query_parameter_is_provided_in_the_request_.<br>
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
     * The AboutUserLinksModel model constructor.
     * @property {module:model/AboutUserLinksModel}
     */
    AboutUserLinksModel,

    /**
     * The AboutUserLogoutModel model constructor.
     * @property {module:model/AboutUserLogoutModel}
     */
    AboutUserLogoutModel,

    /**
     * The AboutUserModel model constructor.
     * @property {module:model/AboutUserModel}
     */
    AboutUserModel,

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
     * The CertAuthorityRefreshCrlModel model constructor.
     * @property {module:model/CertAuthorityRefreshCrlModel}
     */
    CertAuthorityRefreshCrlModel,

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
     * The ClientCertAuthorityRefreshCrlModel model constructor.
     * @property {module:model/ClientCertAuthorityRefreshCrlModel}
     */
    ClientCertAuthorityRefreshCrlModel,

    /**
     * The ClientCertAuthorityResponseModel model constructor.
     * @property {module:model/ClientCertAuthorityResponseModel}
     */
    ClientCertAuthorityResponseModel,

    /**
     * The ConfigSyncAssertLeaderMsgVpnModel model constructor.
     * @property {module:model/ConfigSyncAssertLeaderMsgVpnModel}
     */
    ConfigSyncAssertLeaderMsgVpnModel,

    /**
     * The ConfigSyncAssertLeaderRouterModel model constructor.
     * @property {module:model/ConfigSyncAssertLeaderRouterModel}
     */
    ConfigSyncAssertLeaderRouterModel,

    /**
     * The ConfigSyncResyncFollowerMsgVpnModel model constructor.
     * @property {module:model/ConfigSyncResyncFollowerMsgVpnModel}
     */
    ConfigSyncResyncFollowerMsgVpnModel,

    /**
     * The ConfigSyncResyncLeaderMsgVpnModel model constructor.
     * @property {module:model/ConfigSyncResyncLeaderMsgVpnModel}
     */
    ConfigSyncResyncLeaderMsgVpnModel,

    /**
     * The ConfigSyncResyncLeaderRouterModel model constructor.
     * @property {module:model/ConfigSyncResyncLeaderRouterModel}
     */
    ConfigSyncResyncLeaderRouterModel,

    /**
     * The GuaranteedMsgingDefragmentMsgSpoolFilesStartModel model constructor.
     * @property {module:model/GuaranteedMsgingDefragmentMsgSpoolFilesStartModel}
     */
    GuaranteedMsgingDefragmentMsgSpoolFilesStartModel,

    /**
     * The GuaranteedMsgingDefragmentMsgSpoolFilesStopModel model constructor.
     * @property {module:model/GuaranteedMsgingDefragmentMsgSpoolFilesStopModel}
     */
    GuaranteedMsgingDefragmentMsgSpoolFilesStopModel,

    /**
     * The MsgVpnAuthenticationOauthProfileClearStatsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProfileClearStatsModel}
     */
    MsgVpnAuthenticationOauthProfileClearStatsModel,

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
     * The MsgVpnAuthenticationOauthProviderClearStatsModel model constructor.
     * @property {module:model/MsgVpnAuthenticationOauthProviderClearStatsModel}
     */
    MsgVpnAuthenticationOauthProviderClearStatsModel,

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
     * The MsgVpnBridgeClearEventModel model constructor.
     * @property {module:model/MsgVpnBridgeClearEventModel}
     */
    MsgVpnBridgeClearEventModel,

    /**
     * The MsgVpnBridgeClearStatsModel model constructor.
     * @property {module:model/MsgVpnBridgeClearStatsModel}
     */
    MsgVpnBridgeClearStatsModel,

    /**
     * The MsgVpnBridgeDisconnectModel model constructor.
     * @property {module:model/MsgVpnBridgeDisconnectModel}
     */
    MsgVpnBridgeDisconnectModel,

    /**
     * The MsgVpnBridgeLinksModel model constructor.
     * @property {module:model/MsgVpnBridgeLinksModel}
     */
    MsgVpnBridgeLinksModel,

    /**
     * The MsgVpnBridgeModel model constructor.
     * @property {module:model/MsgVpnBridgeModel}
     */
    MsgVpnBridgeModel,

    /**
     * The MsgVpnBridgeResponseModel model constructor.
     * @property {module:model/MsgVpnBridgeResponseModel}
     */
    MsgVpnBridgeResponseModel,

    /**
     * The MsgVpnBridgesResponseModel model constructor.
     * @property {module:model/MsgVpnBridgesResponseModel}
     */
    MsgVpnBridgesResponseModel,

    /**
     * The MsgVpnClearMsgSpoolStatsModel model constructor.
     * @property {module:model/MsgVpnClearMsgSpoolStatsModel}
     */
    MsgVpnClearMsgSpoolStatsModel,

    /**
     * The MsgVpnClearReplicationStatsModel model constructor.
     * @property {module:model/MsgVpnClearReplicationStatsModel}
     */
    MsgVpnClearReplicationStatsModel,

    /**
     * The MsgVpnClearServiceStatsModel model constructor.
     * @property {module:model/MsgVpnClearServiceStatsModel}
     */
    MsgVpnClearServiceStatsModel,

    /**
     * The MsgVpnClearStatsModel model constructor.
     * @property {module:model/MsgVpnClearStatsModel}
     */
    MsgVpnClearStatsModel,

    /**
     * The MsgVpnClientClearEventModel model constructor.
     * @property {module:model/MsgVpnClientClearEventModel}
     */
    MsgVpnClientClearEventModel,

    /**
     * The MsgVpnClientClearStatsModel model constructor.
     * @property {module:model/MsgVpnClientClearStatsModel}
     */
    MsgVpnClientClearStatsModel,

    /**
     * The MsgVpnClientDisconnectModel model constructor.
     * @property {module:model/MsgVpnClientDisconnectModel}
     */
    MsgVpnClientDisconnectModel,

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
     * The MsgVpnClientResponseModel model constructor.
     * @property {module:model/MsgVpnClientResponseModel}
     */
    MsgVpnClientResponseModel,

    /**
     * The MsgVpnClientTransactedSessionDeleteModel model constructor.
     * @property {module:model/MsgVpnClientTransactedSessionDeleteModel}
     */
    MsgVpnClientTransactedSessionDeleteModel,

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
     * The MsgVpnClientsResponseModel model constructor.
     * @property {module:model/MsgVpnClientsResponseModel}
     */
    MsgVpnClientsResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel}
     */
    MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel}
     */
    MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel}
     */
    MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceClearEventModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceClearEventModel}
     */
    MsgVpnDistributedCacheClusterInstanceClearEventModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceClearStatsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceClearStatsModel}
     */
    MsgVpnDistributedCacheClusterInstanceClearStatsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel}
     */
    MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel,

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
     * The MsgVpnDistributedCacheClusterInstanceResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceResponseModel}
     */
    MsgVpnDistributedCacheClusterInstanceResponseModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel}
     */
    MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel,

    /**
     * The MsgVpnDistributedCacheClusterInstanceStartModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClusterInstanceStartModel}
     */
    MsgVpnDistributedCacheClusterInstanceStartModel,

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
     * The MsgVpnDistributedCacheClustersResponseModel model constructor.
     * @property {module:model/MsgVpnDistributedCacheClustersResponseModel}
     */
    MsgVpnDistributedCacheClustersResponseModel,

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
     * The MsgVpnKafkaReceiverClearStatsModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverClearStatsModel}
     */
    MsgVpnKafkaReceiverClearStatsModel,

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
     * The MsgVpnKafkaReceiverResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiverResponseModel}
     */
    MsgVpnKafkaReceiverResponseModel,

    /**
     * The MsgVpnKafkaReceiversResponseModel model constructor.
     * @property {module:model/MsgVpnKafkaReceiversResponseModel}
     */
    MsgVpnKafkaReceiversResponseModel,

    /**
     * The MsgVpnKafkaSenderClearStatsModel model constructor.
     * @property {module:model/MsgVpnKafkaSenderClearStatsModel}
     */
    MsgVpnKafkaSenderClearStatsModel,

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
     * The MsgVpnMqttSessionClearStatsModel model constructor.
     * @property {module:model/MsgVpnMqttSessionClearStatsModel}
     */
    MsgVpnMqttSessionClearStatsModel,

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
     * The MsgVpnMqttSessionsResponseModel model constructor.
     * @property {module:model/MsgVpnMqttSessionsResponseModel}
     */
    MsgVpnMqttSessionsResponseModel,

    /**
     * The MsgVpnQueueCancelReplayModel model constructor.
     * @property {module:model/MsgVpnQueueCancelReplayModel}
     */
    MsgVpnQueueCancelReplayModel,

    /**
     * The MsgVpnQueueClearStatsModel model constructor.
     * @property {module:model/MsgVpnQueueClearStatsModel}
     */
    MsgVpnQueueClearStatsModel,

    /**
     * The MsgVpnQueueCopyMsgFromQueueModel model constructor.
     * @property {module:model/MsgVpnQueueCopyMsgFromQueueModel}
     */
    MsgVpnQueueCopyMsgFromQueueModel,

    /**
     * The MsgVpnQueueCopyMsgFromReplayLogModel model constructor.
     * @property {module:model/MsgVpnQueueCopyMsgFromReplayLogModel}
     */
    MsgVpnQueueCopyMsgFromReplayLogModel,

    /**
     * The MsgVpnQueueCopyMsgFromTopicEndpointModel model constructor.
     * @property {module:model/MsgVpnQueueCopyMsgFromTopicEndpointModel}
     */
    MsgVpnQueueCopyMsgFromTopicEndpointModel,

    /**
     * The MsgVpnQueueDeleteMsgsModel model constructor.
     * @property {module:model/MsgVpnQueueDeleteMsgsModel}
     */
    MsgVpnQueueDeleteMsgsModel,

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
     * The MsgVpnQueueMsgDeleteModel model constructor.
     * @property {module:model/MsgVpnQueueMsgDeleteModel}
     */
    MsgVpnQueueMsgDeleteModel,

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
     * The MsgVpnQueueResponseModel model constructor.
     * @property {module:model/MsgVpnQueueResponseModel}
     */
    MsgVpnQueueResponseModel,

    /**
     * The MsgVpnQueueStartReplayModel model constructor.
     * @property {module:model/MsgVpnQueueStartReplayModel}
     */
    MsgVpnQueueStartReplayModel,

    /**
     * The MsgVpnQueuesResponseModel model constructor.
     * @property {module:model/MsgVpnQueuesResponseModel}
     */
    MsgVpnQueuesResponseModel,

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
     * The MsgVpnReplayLogResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogResponseModel}
     */
    MsgVpnReplayLogResponseModel,

    /**
     * The MsgVpnReplayLogTrimLoggedMsgsModel model constructor.
     * @property {module:model/MsgVpnReplayLogTrimLoggedMsgsModel}
     */
    MsgVpnReplayLogTrimLoggedMsgsModel,

    /**
     * The MsgVpnReplayLogsResponseModel model constructor.
     * @property {module:model/MsgVpnReplayLogsResponseModel}
     */
    MsgVpnReplayLogsResponseModel,

    /**
     * The MsgVpnResponseModel model constructor.
     * @property {module:model/MsgVpnResponseModel}
     */
    MsgVpnResponseModel,

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
     * The MsgVpnRestDeliveryPointResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointResponseModel}
     */
    MsgVpnRestDeliveryPointResponseModel,

    /**
     * The MsgVpnRestDeliveryPointRestConsumerClearStatsModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerClearStatsModel}
     */
    MsgVpnRestDeliveryPointRestConsumerClearStatsModel,

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
     * The MsgVpnRestDeliveryPointRestConsumerResponseModel model constructor.
     * @property {module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel}
     */
    MsgVpnRestDeliveryPointRestConsumerResponseModel,

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
     * The MsgVpnTopicEndpointCancelReplayModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCancelReplayModel}
     */
    MsgVpnTopicEndpointCancelReplayModel,

    /**
     * The MsgVpnTopicEndpointClearStatsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointClearStatsModel}
     */
    MsgVpnTopicEndpointClearStatsModel,

    /**
     * The MsgVpnTopicEndpointCopyMsgFromQueueModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCopyMsgFromQueueModel}
     */
    MsgVpnTopicEndpointCopyMsgFromQueueModel,

    /**
     * The MsgVpnTopicEndpointCopyMsgFromReplayLogModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCopyMsgFromReplayLogModel}
     */
    MsgVpnTopicEndpointCopyMsgFromReplayLogModel,

    /**
     * The MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel}
     */
    MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel,

    /**
     * The MsgVpnTopicEndpointDeleteMsgsModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointDeleteMsgsModel}
     */
    MsgVpnTopicEndpointDeleteMsgsModel,

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
     * The MsgVpnTopicEndpointMsgDeleteModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointMsgDeleteModel}
     */
    MsgVpnTopicEndpointMsgDeleteModel,

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
     * The MsgVpnTopicEndpointResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointResponseModel}
     */
    MsgVpnTopicEndpointResponseModel,

    /**
     * The MsgVpnTopicEndpointStartReplayModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointStartReplayModel}
     */
    MsgVpnTopicEndpointStartReplayModel,

    /**
     * The MsgVpnTopicEndpointsResponseModel model constructor.
     * @property {module:model/MsgVpnTopicEndpointsResponseModel}
     */
    MsgVpnTopicEndpointsResponseModel,

    /**
     * The MsgVpnTransactionCommitModel model constructor.
     * @property {module:model/MsgVpnTransactionCommitModel}
     */
    MsgVpnTransactionCommitModel,

    /**
     * The MsgVpnTransactionDeleteModel model constructor.
     * @property {module:model/MsgVpnTransactionDeleteModel}
     */
    MsgVpnTransactionDeleteModel,

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
     * The MsgVpnTransactionResponseModel model constructor.
     * @property {module:model/MsgVpnTransactionResponseModel}
     */
    MsgVpnTransactionResponseModel,

    /**
     * The MsgVpnTransactionRollbackModel model constructor.
     * @property {module:model/MsgVpnTransactionRollbackModel}
     */
    MsgVpnTransactionRollbackModel,

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
     * The OauthProfileClearStatsModel model constructor.
     * @property {module:model/OauthProfileClearStatsModel}
     */
    OauthProfileClearStatsModel,

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
     * The SessionDeleteModel model constructor.
     * @property {module:model/SessionDeleteModel}
     */
    SessionDeleteModel,

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
    * The AboutApi service constructor.
    * @property {module:api/AboutApi}
    */
    AboutApi,

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
    * The DistributedCacheApi service constructor.
    * @property {module:api/DistributedCacheApi}
    */
    DistributedCacheApi,

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
    * The QueueApi service constructor.
    * @property {module:api/QueueApi}
    */
    QueueApi,

    /**
    * The ReplayLogApi service constructor.
    * @property {module:api/ReplayLogApi}
    */
    ReplayLogApi,

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
    * The TopicEndpointApi service constructor.
    * @property {module:api/TopicEndpointApi}
    */
    TopicEndpointApi,

    /**
    * The TransactionApi service constructor.
    * @property {module:api/TransactionApi}
    */
    TransactionApi
};
