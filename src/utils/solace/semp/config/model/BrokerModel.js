/*
 * SEMP (Solace Element Management Protocol)
 * SEMP (starting in `v2`, see note 1) is a RESTful API for configuring, monitoring, and administering a Solace PubSub+ broker.  SEMP uses URIs to address manageable **resources** of the Solace PubSub+ broker. Resources are individual **objects**, **collections** of objects, or (exclusively in the action API) **actions**. This document applies to the following API:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Configuration|/SEMP/v2/config|Reading and writing config state|See note 2    The following APIs are also available:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Action|/SEMP/v2/action|Performing actions|See note 2 Monitoring|/SEMP/v2/monitor|Querying operational parameters|See note 2    Resources are always nouns, with individual objects being singular and collections being plural.  Objects within a collection are identified by an `obj-id`, which follows the collection name with the form `collection-name/obj-id`. An `obj-id` consists of one or more identifying attributes, separated by commas. Commas that appear in the identifying attribute itself must be percent encoded.   Actions within an object are identified by an `action-id`, which follows the object name with the form `obj-id/action-id`.  Some examples:  ``` /SEMP/v2/config/msgVpns                        ; MsgVpn collection /SEMP/v2/config/msgVpns/a                      ; MsgVpn object named \"a\" /SEMP/v2/config/msgVpns/a/bridges              ; Bridge collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/bridges/b,auto       ; Bridge object named \"b\" with virtual router \"auto\" in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues               ; Queue collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues/c             ; Queue object named \"c\" in MsgVpn \"a\" /SEMP/v2/action/msgVpns/a/queues/c/startReplay ; Action that starts a replay on Queue \"c\" in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients             ; Client collection in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients/d           ; Client object named \"d\" in MsgVpn \"a\" ```  ## Collection Resources  Collections are unordered lists of objects (unless described as otherwise), and are described by JSON arrays. Each item in the array represents an object in the same manner as the individual object would normally be represented. In the configuration API, the creation of a new object is done through its collection resource.  ## Object and Action Resources  Objects are composed of attributes, actions, collections, and other objects. They are described by JSON objects as name/value pairs. The collections and actions of an object are not contained directly in the object's JSON content; rather the content includes an attribute containing a URI which points to the collections and actions. These contained resources must be managed through this URI. At a minimum, every object has one or more identifying attributes, and its own `uri` attribute which contains the URI pointing to itself.  Actions are also composed of attributes, and are described by JSON objects as name/value pairs. Unlike objects, however, they are not members of a collection and cannot be retrieved, only performed. Actions only exist in the action API.  Attributes in an object or action may have any combination of the following properties:   Property|Meaning|Comments :---|:---|:--- Identifying|Attribute is involved in unique identification of the object, and appears in its URI| Const|Attribute value can only be chosen during object creation| Required|Attribute must be provided in the request| Read-Only|Attribute value cannot be changed|See note 3 Write-Only|Attribute can only be written, not read, unless the attribute is also opaque|See the documentation for the opaque property Requires-Disable|Attribute cannot be changed while the object (or the relevant part of the object) is administratively enabled| Auto-Disable|Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as one or more attributes will be temporarily disabled to apply the change| Deprecated|Attribute is deprecated, and will disappear in the next SEMP version| Opaque|Attribute can be set or retrieved in opaque form when the `opaquePassword` query parameter is present|See the `opaquePassword` query parameter documentation    In some requests, certain attributes may only be provided in certain combinations with other attributes:   Relationship|Meaning|Comments :---|:---|:--- Requires|Attribute may only be provided in a request if a particular attribute or combination of attributes is also provided in the request|The \"requires\" property will not be enforced for an attribute when all of the following conditions are met: (a) the attribute is not write-only; (b) the value provided for the attribute is the same as its current (or, on object creation, its default) value; and (c) the attribute requires a write-only attribute. In addition, the \"requires\" property may not be enforced even if only conditions (a) and (b) are met. Conflicts|Attribute may only be provided in a request if a particular attribute or combination of attributes is not also provided in the request|    In the monitoring API, any non-identifying attribute may not be returned in a GET.  ## HTTP Methods  The following HTTP methods manipulate resources in accordance with these general principles. Note that some methods are only used in certain APIs:   Method|Resource|Meaning|Request Body|Response Body|Notes :---|:---|:---|:---|:---|:--- POST|Collection|Create object|Initial attribute values|Object attributes and metadata|Absent attributes are set to default. If object already exists, a 400 error is returned PUT|Object|Update object|New attribute values|Object attributes and metadata|If does not exist, the object is first created. Absent attributes are set to default, with certain exceptions (see note 4) PUT|Action|Performs action|Action arguments|Action metadata| PATCH|Object|Update object|New attribute values|Object attributes and metadata|Absent attributes are left unchanged. If the object does not exist, a 404 error is returned DELETE|Object|Delete object|Empty|Object metadata|If the object does not exist, a 404 is returned GET|Object|Get object|Empty|Object attributes and metadata|If the object does not exist, a 404 is returned GET|Collection|Get collection|Empty|Object attributes and collection metadata|If the collection is empty, then an empty collection is returned with a 200 code    ## Common Query Parameters  The following are some common query parameters that are supported by many method/URI combinations. Individual URIs may document additional parameters. Note that multiple query parameters can be used together in a single URI, separated by the ampersand character. For example:  ``` ; Request for the MsgVpns collection using two hypothetical query parameters ; \"q1\" and \"q2\" with values \"val1\" and \"val2\" respectively /SEMP/v2/config/msgVpns?q1=val1&q2=val2 ```  ### select  Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. Use this query parameter to limit the size of the returned data for each returned object, return only those fields that are desired, or exclude fields that are not desired.  The value of `select` is a comma-separated list of attribute names. If the list contains attribute names that are not prefaced by `-`, only those attributes are included in the response. If the list contains attribute names that are prefaced by `-`, those attributes are excluded from the response. If the list contains both types, then the difference of the first set of attributes and the second set of attributes is returned. If the list is empty (i.e. `select=`), it is treated the same as if no `select` was provided: all attribute are returned.  All attributes that are prefaced by `-` must follow all attributes that are not prefaced by `-`. In addition, each attribute name in the list must match at least one attribute in the object.  Names may include the `*` wildcard (zero or more characters). Nested attribute names are supported using periods (e.g. `parentName.childName`).  Some examples:  ``` ; List of all MsgVpn names /SEMP/v2/config/msgVpns?select=msgVpnName ; List of all MsgVpn and their attributes except for their names /SEMP/v2/config/msgVpns?select=-msgVpnName ; Authentication attributes of MsgVpn \"finance\" /SEMP/v2/config/msgVpns/finance?select=authentication%2A ; All attributes of MsgVpn \"finance\" except for authentication attributes /SEMP/v2/config/msgVpns/finance?select=-authentication%2A ; Access related attributes of Queue \"orderQ\" of MsgVpn \"finance\" /SEMP/v2/config/msgVpns/finance/queues/orderQ?select=owner,permission ```  ### where  Include in the response only objects where certain conditions are true. Use this query parameter to limit which objects are returned to those whose attribute values meet the given conditions.  The value of `where` is a comma-separated list of expressions. All expressions must be true for the object to be included in the response. Each expression takes the form:  ``` expression  = attribute-name OP value OP          = '==' | '!=' | '<' | '>' | '<=' | '>=' ```  Write-only attributes cannot be used in a `where` expression.  `value` may be a number, string, `true`, or `false`, as appropriate for the type of `attribute-name`.  A `*` in a string `value` is interpreted as a wildcard (zero or more characters), but can be escaped using `\\`. The `\\` character can itself be escaped using `\\`. The `*` wildcard can only be used with the `==` and `!=` operators. If `*` is used as a literal with other operators, it must be escaped.  The `<`, `>`, `<=`, and `>=` operators perform a simple byte-for-byte comparison when used with a string `value`.  Some examples:  ``` ; Only enabled MsgVpns /SEMP/v2/config/msgVpns?where=enabled%3D%3Dtrue ; Only MsgVpns using basic non-LDAP authentication /SEMP/v2/config/msgVpns?where=authenticationBasicEnabled%3D%3Dtrue,authenticationBasicType%21%3Dldap ; Only MsgVpns that allow more than 100 client connections /SEMP/v2/config/msgVpns?where=maxConnectionCount%3E100 ; Only MsgVpns with msgVpnName starting with \"B\": /SEMP/v2/config/msgVpns?where=msgVpnName%3D%3DB%2A ```  ### count  Limit the count of objects in the response. This can be useful to limit the size of the response for large collections. The minimum value for `count` is `1` and the default is `10`. There is also a per-collection maximum value to limit request handling time.  `count` does not guarantee that a minimum number of objects will be returned. A page may contain fewer than `count` objects or even be empty. Additional objects may nonetheless be available for retrieval on subsequent pages. See the `cursor` query parameter documentation for more information on paging.  For example: ``` ; Up to 25 MsgVpns /SEMP/v2/config/msgVpns?count=25 ```  ### cursor  The cursor, or position, for the next page of objects. Cursors are opaque data that should not be created or interpreted by SEMP clients, and should only be used as described below.  When a request is made for a collection and there may be additional objects available for retrieval that are not included in the initial response, the response will include a `cursorQuery` field containing a cursor. The value of this field can be specified in the `cursor` query parameter of a subsequent request to retrieve the next page of objects.  Applications must continue to use the `cursorQuery` if one is provided in order to retrieve the full set of objects associated with the request, even if a page contains fewer than the requested number of objects (see the `count` query parameter documentation) or is empty.  ### opaquePassword  Attributes with the opaque property are also write-only and so cannot normally be retrieved in a GET. However, when a password is provided in the `opaquePassword` query parameter, attributes with the opaque property are retrieved in a GET in opaque form, encrypted with this password. The query parameter can also be used on a POST, PATCH, or PUT to set opaque attributes using opaque attribute values retrieved in a GET, so long as:  1. the same password that was used to retrieve the opaque attribute values is provided; and  2. the broker to which the request is being sent has the same major and minor SEMP version as the broker that produced the opaque attribute values.  The password provided in the query parameter must be a minimum of 8 characters and a maximum of 128 characters.  The query parameter can only be used in the configuration API, and only over HTTPS.  ## Authentication  When a client makes its first SEMPv2 request, it must supply a username and password using HTTP Basic authentication, or an OAuth token or tokens using HTTP Bearer authentication.  When HTTP Basic authentication is used, the broker returns a cookie containing a session key. The client can omit the username and password from subsequent requests, because the broker can use the session cookie for authentication instead. When the session expires or is deleted, the client must provide the username and password again, and the broker creates a new session.  There are a limited number of session slots available on the broker. The broker returns 529 No SEMP Session Available if it is not able to allocate a session.  If certain attributes—such as a user's password—are changed, the broker automatically deletes the affected sessions. These attributes are documented below. However, changes in external user configuration data stored on a RADIUS or LDAP server do not trigger the broker to delete the associated session(s), therefore you must do this manually, if required.  A client can retrieve its current session information using the /about/user endpoint and delete its own session using the /about/user/logout endpoint. A client with appropriate permissions can also manage all sessions using the /sessions endpoint.  Sessions are not created when authenticating with an OAuth token or tokens using HTTP Bearer authentication. If a session cookie is provided, it is ignored.  ## Help  Visit [our website](https://solace.com) to learn more about Solace.  You can also download the SEMP API specifications by clicking [here](https://solace.com/downloads/).  If you need additional support, please contact us at [support@solace.com](mailto:support@solace.com).  ## Notes  Note|Description :---:|:--- 1|This specification defines SEMP starting in \"v2\", and not the original SEMP \"v1\" interface. Request and response formats between \"v1\" and \"v2\" are entirely incompatible, although both protocols share a common port configuration on the Solace PubSub+ broker. They are differentiated by the initial portion of the URI path, one of either \"/SEMP/\" or \"/SEMP/v2/\" 2|This API is partially implemented. Only a subset of all objects are available. 3|Read-only attributes may appear in POST and PUT/PATCH requests but are ignored, except when the read-only attribute is identifying. 4|On a PUT, if the SEMP user is not authorized to modify the attribute, its value is left unchanged rather than set to default. In addition, the values of write-only attributes are not set to their defaults on a PUT, except in the following two cases: there is a mutual requires relationship with another non-write-only attribute, both attributes are absent from the request, and the non-write-only attribute is not currently set to its default value; or the attribute is also opaque and the `opaquePassword` query parameter is provided in the request.  
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
import {ApiClient} from '../ApiClient';
import {EventThresholdByPercentModel} from './EventThresholdByPercentModel';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The BrokerModel model module.
 * @module model/BrokerModel
 * @version 2.36
 */
export class BrokerModel {
  /**
   * Constructs a new <code>BrokerModel</code>.
   * @alias module:model/BrokerModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BrokerModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrokerModel} obj Optional instance to populate.
   * @return {module:model/BrokerModel} The populated <code>BrokerModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BrokerModel();
      if (data.hasOwnProperty('authClientCertRevocationCheckMode'))
        obj.authClientCertRevocationCheckMode = ApiClient.convertToType(data['authClientCertRevocationCheckMode'], 'String');
      if (data.hasOwnProperty('configSyncAuthenticationClientCertMaxChainDepth'))
        obj.configSyncAuthenticationClientCertMaxChainDepth = ApiClient.convertToType(data['configSyncAuthenticationClientCertMaxChainDepth'], 'Number');
      if (data.hasOwnProperty('configSyncAuthenticationClientCertValidateDateEnabled'))
        obj.configSyncAuthenticationClientCertValidateDateEnabled = ApiClient.convertToType(data['configSyncAuthenticationClientCertValidateDateEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncClientProfileTcpInitialCongestionWindow'))
        obj.configSyncClientProfileTcpInitialCongestionWindow = ApiClient.convertToType(data['configSyncClientProfileTcpInitialCongestionWindow'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpKeepaliveCount'))
        obj.configSyncClientProfileTcpKeepaliveCount = ApiClient.convertToType(data['configSyncClientProfileTcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpKeepaliveIdle'))
        obj.configSyncClientProfileTcpKeepaliveIdle = ApiClient.convertToType(data['configSyncClientProfileTcpKeepaliveIdle'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpKeepaliveInterval'))
        obj.configSyncClientProfileTcpKeepaliveInterval = ApiClient.convertToType(data['configSyncClientProfileTcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpMaxWindow'))
        obj.configSyncClientProfileTcpMaxWindow = ApiClient.convertToType(data['configSyncClientProfileTcpMaxWindow'], 'Number');
      if (data.hasOwnProperty('configSyncClientProfileTcpMss'))
        obj.configSyncClientProfileTcpMss = ApiClient.convertToType(data['configSyncClientProfileTcpMss'], 'Number');
      if (data.hasOwnProperty('configSyncEnabled'))
        obj.configSyncEnabled = ApiClient.convertToType(data['configSyncEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncSynchronizeUsernameEnabled'))
        obj.configSyncSynchronizeUsernameEnabled = ApiClient.convertToType(data['configSyncSynchronizeUsernameEnabled'], 'Boolean');
      if (data.hasOwnProperty('configSyncTlsEnabled'))
        obj.configSyncTlsEnabled = ApiClient.convertToType(data['configSyncTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationScheduleDayList'))
        obj.guaranteedMsgingDefragmentationScheduleDayList = ApiClient.convertToType(data['guaranteedMsgingDefragmentationScheduleDayList'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationScheduleEnabled'))
        obj.guaranteedMsgingDefragmentationScheduleEnabled = ApiClient.convertToType(data['guaranteedMsgingDefragmentationScheduleEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationScheduleTimeList'))
        obj.guaranteedMsgingDefragmentationScheduleTimeList = ApiClient.convertToType(data['guaranteedMsgingDefragmentationScheduleTimeList'], 'String');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdEnabled'))
        obj.guaranteedMsgingDefragmentationThresholdEnabled = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdFragmentationPercentage'))
        obj.guaranteedMsgingDefragmentationThresholdFragmentationPercentage = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdFragmentationPercentage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdMinInterval'))
        obj.guaranteedMsgingDefragmentationThresholdMinInterval = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdMinInterval'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingDefragmentationThresholdUsagePercentage'))
        obj.guaranteedMsgingDefragmentationThresholdUsagePercentage = ApiClient.convertToType(data['guaranteedMsgingDefragmentationThresholdUsagePercentage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingEnabled'))
        obj.guaranteedMsgingEnabled = ApiClient.convertToType(data['guaranteedMsgingEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedMsgingEventCacheUsageThreshold'))
        obj.guaranteedMsgingEventCacheUsageThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventCacheUsageThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventDeliveredUnackedThreshold'))
        obj.guaranteedMsgingEventDeliveredUnackedThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventDeliveredUnackedThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventDiskUsageThreshold'))
        obj.guaranteedMsgingEventDiskUsageThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventDiskUsageThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventEgressFlowCountThreshold'))
        obj.guaranteedMsgingEventEgressFlowCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventEgressFlowCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventEndpointCountThreshold'))
        obj.guaranteedMsgingEventEndpointCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventEndpointCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventIngressFlowCountThreshold'))
        obj.guaranteedMsgingEventIngressFlowCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventIngressFlowCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventMsgCountThreshold'))
        obj.guaranteedMsgingEventMsgCountThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventMsgCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventMsgSpoolFileCountThreshold'))
        obj.guaranteedMsgingEventMsgSpoolFileCountThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventMsgSpoolFileCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventMsgSpoolUsageThreshold'))
        obj.guaranteedMsgingEventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventTransactedSessionCountThreshold'))
        obj.guaranteedMsgingEventTransactedSessionCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventTransactedSessionCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventTransactedSessionResourceCountThreshold'))
        obj.guaranteedMsgingEventTransactedSessionResourceCountThreshold = EventThresholdByPercentModel.constructFromObject(data['guaranteedMsgingEventTransactedSessionResourceCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingEventTransactionCountThreshold'))
        obj.guaranteedMsgingEventTransactionCountThreshold = EventThresholdModel.constructFromObject(data['guaranteedMsgingEventTransactionCountThreshold']);
      if (data.hasOwnProperty('guaranteedMsgingMaxCacheUsage'))
        obj.guaranteedMsgingMaxCacheUsage = ApiClient.convertToType(data['guaranteedMsgingMaxCacheUsage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingMaxMsgSpoolUsage'))
        obj.guaranteedMsgingMaxMsgSpoolUsage = ApiClient.convertToType(data['guaranteedMsgingMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout'))
        obj.guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = ApiClient.convertToType(data['guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout'))
        obj.guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = ApiClient.convertToType(data['guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedMsgingTransactionReplicationCompatibilityMode'))
        obj.guaranteedMsgingTransactionReplicationCompatibilityMode = ApiClient.convertToType(data['guaranteedMsgingTransactionReplicationCompatibilityMode'], 'String');
      if (data.hasOwnProperty('oauthProfileDefault'))
        obj.oauthProfileDefault = ApiClient.convertToType(data['oauthProfileDefault'], 'String');
      if (data.hasOwnProperty('serviceAmqpEnabled'))
        obj.serviceAmqpEnabled = ApiClient.convertToType(data['serviceAmqpEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceAmqpTlsListenPort'))
        obj.serviceAmqpTlsListenPort = ApiClient.convertToType(data['serviceAmqpTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceEventConnectionCountThreshold'))
        obj.serviceEventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceEventConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceHealthCheckEnabled'))
        obj.serviceHealthCheckEnabled = ApiClient.convertToType(data['serviceHealthCheckEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceHealthCheckListenPort'))
        obj.serviceHealthCheckListenPort = ApiClient.convertToType(data['serviceHealthCheckListenPort'], 'Number');
      if (data.hasOwnProperty('serviceHealthCheckTlsEnabled'))
        obj.serviceHealthCheckTlsEnabled = ApiClient.convertToType(data['serviceHealthCheckTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceHealthCheckTlsListenPort'))
        obj.serviceHealthCheckTlsListenPort = ApiClient.convertToType(data['serviceHealthCheckTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMateLinkEnabled'))
        obj.serviceMateLinkEnabled = ApiClient.convertToType(data['serviceMateLinkEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMateLinkListenPort'))
        obj.serviceMateLinkListenPort = ApiClient.convertToType(data['serviceMateLinkListenPort'], 'Number');
      if (data.hasOwnProperty('serviceMqttEnabled'))
        obj.serviceMqttEnabled = ApiClient.convertToType(data['serviceMqttEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMsgBackboneEnabled'))
        obj.serviceMsgBackboneEnabled = ApiClient.convertToType(data['serviceMsgBackboneEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRedundancyEnabled'))
        obj.serviceRedundancyEnabled = ApiClient.convertToType(data['serviceRedundancyEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRedundancyFirstListenPort'))
        obj.serviceRedundancyFirstListenPort = ApiClient.convertToType(data['serviceRedundancyFirstListenPort'], 'Number');
      if (data.hasOwnProperty('serviceRestEventOutgoingConnectionCountThreshold'))
        obj.serviceRestEventOutgoingConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceRestEventOutgoingConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceRestIncomingEnabled'))
        obj.serviceRestIncomingEnabled = ApiClient.convertToType(data['serviceRestIncomingEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceRestOutgoingEnabled'))
        obj.serviceRestOutgoingEnabled = ApiClient.convertToType(data['serviceRestOutgoingEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempCorsAllowAnyHostEnabled'))
        obj.serviceSempCorsAllowAnyHostEnabled = ApiClient.convertToType(data['serviceSempCorsAllowAnyHostEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempLegacyTimeoutEnabled'))
        obj.serviceSempLegacyTimeoutEnabled = ApiClient.convertToType(data['serviceSempLegacyTimeoutEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempPlainTextEnabled'))
        obj.serviceSempPlainTextEnabled = ApiClient.convertToType(data['serviceSempPlainTextEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempPlainTextListenPort'))
        obj.serviceSempPlainTextListenPort = ApiClient.convertToType(data['serviceSempPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSempSessionIdleTimeout'))
        obj.serviceSempSessionIdleTimeout = ApiClient.convertToType(data['serviceSempSessionIdleTimeout'], 'Number');
      if (data.hasOwnProperty('serviceSempSessionMaxLifetime'))
        obj.serviceSempSessionMaxLifetime = ApiClient.convertToType(data['serviceSempSessionMaxLifetime'], 'Number');
      if (data.hasOwnProperty('serviceSempTlsEnabled'))
        obj.serviceSempTlsEnabled = ApiClient.convertToType(data['serviceSempTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSempTlsListenPort'))
        obj.serviceSempTlsListenPort = ApiClient.convertToType(data['serviceSempTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfCompressionListenPort'))
        obj.serviceSmfCompressionListenPort = ApiClient.convertToType(data['serviceSmfCompressionListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfEnabled'))
        obj.serviceSmfEnabled = ApiClient.convertToType(data['serviceSmfEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceSmfEventConnectionCountThreshold'))
        obj.serviceSmfEventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceSmfEventConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceSmfPlainTextListenPort'))
        obj.serviceSmfPlainTextListenPort = ApiClient.convertToType(data['serviceSmfPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfRoutingControlListenPort'))
        obj.serviceSmfRoutingControlListenPort = ApiClient.convertToType(data['serviceSmfRoutingControlListenPort'], 'Number');
      if (data.hasOwnProperty('serviceSmfTlsListenPort'))
        obj.serviceSmfTlsListenPort = ApiClient.convertToType(data['serviceSmfTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceTlsEventConnectionCountThreshold'))
        obj.serviceTlsEventConnectionCountThreshold = EventThresholdModel.constructFromObject(data['serviceTlsEventConnectionCountThreshold']);
      if (data.hasOwnProperty('serviceWebTransportEnabled'))
        obj.serviceWebTransportEnabled = ApiClient.convertToType(data['serviceWebTransportEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebTransportPlainTextListenPort'))
        obj.serviceWebTransportPlainTextListenPort = ApiClient.convertToType(data['serviceWebTransportPlainTextListenPort'], 'Number');
      if (data.hasOwnProperty('serviceWebTransportTlsListenPort'))
        obj.serviceWebTransportTlsListenPort = ApiClient.convertToType(data['serviceWebTransportTlsListenPort'], 'Number');
      if (data.hasOwnProperty('serviceWebTransportWebUrlSuffix'))
        obj.serviceWebTransportWebUrlSuffix = ApiClient.convertToType(data['serviceWebTransportWebUrlSuffix'], 'String');
      if (data.hasOwnProperty('tlsBlockVersion11Enabled'))
        obj.tlsBlockVersion11Enabled = ApiClient.convertToType(data['tlsBlockVersion11Enabled'], 'Boolean');
      if (data.hasOwnProperty('tlsCipherSuiteManagementList'))
        obj.tlsCipherSuiteManagementList = ApiClient.convertToType(data['tlsCipherSuiteManagementList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteMsgBackboneList'))
        obj.tlsCipherSuiteMsgBackboneList = ApiClient.convertToType(data['tlsCipherSuiteMsgBackboneList'], 'String');
      if (data.hasOwnProperty('tlsCipherSuiteSecureShellList'))
        obj.tlsCipherSuiteSecureShellList = ApiClient.convertToType(data['tlsCipherSuiteSecureShellList'], 'String');
      if (data.hasOwnProperty('tlsCrimeExploitProtectionEnabled'))
        obj.tlsCrimeExploitProtectionEnabled = ApiClient.convertToType(data['tlsCrimeExploitProtectionEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsServerCertContent'))
        obj.tlsServerCertContent = ApiClient.convertToType(data['tlsServerCertContent'], 'String');
      if (data.hasOwnProperty('tlsServerCertPassword'))
        obj.tlsServerCertPassword = ApiClient.convertToType(data['tlsServerCertPassword'], 'String');
      if (data.hasOwnProperty('tlsStandardDomainCertificateAuthoritiesEnabled'))
        obj.tlsStandardDomainCertificateAuthoritiesEnabled = ApiClient.convertToType(data['tlsStandardDomainCertificateAuthoritiesEnabled'], 'Boolean');
      if (data.hasOwnProperty('tlsTicketLifetime'))
        obj.tlsTicketLifetime = ApiClient.convertToType(data['tlsTicketLifetime'], 'Number');
      if (data.hasOwnProperty('webManagerAllowUnencryptedWizardsEnabled'))
        obj.webManagerAllowUnencryptedWizardsEnabled = ApiClient.convertToType(data['webManagerAllowUnencryptedWizardsEnabled'], 'Boolean');
      if (data.hasOwnProperty('webManagerCustomization'))
        obj.webManagerCustomization = ApiClient.convertToType(data['webManagerCustomization'], 'String');
      if (data.hasOwnProperty('webManagerRedirectHttpEnabled'))
        obj.webManagerRedirectHttpEnabled = ApiClient.convertToType(data['webManagerRedirectHttpEnabled'], 'Boolean');
      if (data.hasOwnProperty('webManagerRedirectHttpOverrideTlsPort'))
        obj.webManagerRedirectHttpOverrideTlsPort = ApiClient.convertToType(data['webManagerRedirectHttpOverrideTlsPort'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>authClientCertRevocationCheckMode</code> property.
 * @enum {String}
 * @readonly
 */
BrokerModel.AuthClientCertRevocationCheckModeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "ocsp"
   * @const
   */
  ocsp: "ocsp",

  /**
   * value: "crl"
   * @const
   */
  crl: "crl",

  /**
   * value: "ocsp-crl"
   * @const
   */
  ocspCrl: "ocsp-crl"
};
/**
 * The client certificate revocation checking mode used when a client authenticates with a client certificate. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"none\"`. The allowed values and their meaning are:  <pre> \"none\" - Do not perform any certificate revocation checking. \"ocsp\" - Use the Open Certificate Status Protcol (OCSP) for certificate revocation checking. \"crl\" - Use Certificate Revocation Lists (CRL) for certificate revocation checking. \"ocsp-crl\" - Use OCSP first, but if OCSP fails to return an unambiguous result, then check via CRL. </pre> 
 * @member {module:model/BrokerModel.AuthClientCertRevocationCheckModeEnum} authClientCertRevocationCheckMode
 */
BrokerModel.prototype.authClientCertRevocationCheckMode = undefined;

/**
 * The maximum depth for a client certificate chain. The depth of a chain is defined as the number of signing CA certificates that are present in the chain back to a trusted self-signed root CA certificate. The default value is `3`. Available since 2.22.
 * @member {Number} configSyncAuthenticationClientCertMaxChainDepth
 */
BrokerModel.prototype.configSyncAuthenticationClientCertMaxChainDepth = undefined;

/**
 * Enable or disable validation of the \"Not Before\" and \"Not After\" validity dates in the authentication certificate(s). The default value is `true`. Available since 2.22.
 * @member {Boolean} configSyncAuthenticationClientCertValidateDateEnabled
 */
BrokerModel.prototype.configSyncAuthenticationClientCertValidateDateEnabled = undefined;

/**
 * The TCP initial congestion window size for Config Sync clients, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value. The default value is `2`. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpInitialCongestionWindow
 */
BrokerModel.prototype.configSyncClientProfileTcpInitialCongestionWindow = undefined;

/**
 * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available. The default value is `5`. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpKeepaliveCount
 */
BrokerModel.prototype.configSyncClientProfileTcpKeepaliveCount = undefined;

/**
 * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds. The default value is `3`. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpKeepaliveIdle
 */
BrokerModel.prototype.configSyncClientProfileTcpKeepaliveIdle = undefined;

/**
 * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds. The default value is `1`. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpKeepaliveInterval
 */
BrokerModel.prototype.configSyncClientProfileTcpKeepaliveInterval = undefined;

/**
 * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker. The default value is `256`. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpMaxWindow
 */
BrokerModel.prototype.configSyncClientProfileTcpMaxWindow = undefined;

/**
 * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections. The default value is `1460`. Available since 2.22.
 * @member {Number} configSyncClientProfileTcpMss
 */
BrokerModel.prototype.configSyncClientProfileTcpMss = undefined;

/**
 * Enable or disable configuration synchronization for High Availability or Disaster Recovery. The default value is `false`. Available since 2.22.
 * @member {Boolean} configSyncEnabled
 */
BrokerModel.prototype.configSyncEnabled = undefined;

/**
 * Enable or disable the synchronizing of usernames within High Availability groups. The transition from not synchronizing to synchronizing will cause the High Availability mate to fall out of sync. Recommendation: leave this as enabled. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since 2.22.
 * @member {Boolean} configSyncSynchronizeUsernameEnabled
 */
BrokerModel.prototype.configSyncSynchronizeUsernameEnabled = undefined;

/**
 * Enable or disable the use of TLS encryption of the configuration synchronization communications between brokers in High Availability groups and/or Disaster Recovery sites. The default value is `false`. Available since 2.22.
 * @member {Boolean} configSyncTlsEnabled
 */
BrokerModel.prototype.configSyncTlsEnabled = undefined;

/**
 * The days of the week to schedule defragmentation runs, specified as \"daily\" or as a comma-separated list of days. Days must be specified as \"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri, or \"Sat\", with no spaces, and in sorted order from Sunday to Saturday. Please note \"Sun,Mon,Tue,Wed,Thu,Fri,Sat\" is not allowed, use \"daily\" instead. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"daily\"`. Available since 2.25.
 * @member {String} guaranteedMsgingDefragmentationScheduleDayList
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationScheduleDayList = undefined;

/**
 * Enable or disable schedule-based defragmentation of Guaranteed Messaging spool files. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.25.
 * @member {Boolean} guaranteedMsgingDefragmentationScheduleEnabled
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationScheduleEnabled = undefined;

/**
 * The times of the day to schedule defragmentation runs, specified as \"hourly\" or as a comma-separated list of 24-hour times in the form hh:mm, or h:mm. There must be no spaces, and times (up to 4) must be in sorted order from 0:00 to 23:59. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"0:00\"`. Available since 2.25.
 * @member {String} guaranteedMsgingDefragmentationScheduleTimeList
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationScheduleTimeList = undefined;

/**
 * Enable or disable threshold-based defragmentation of Guaranteed Messaging spool files. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.25.
 * @member {Boolean} guaranteedMsgingDefragmentationThresholdEnabled
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdEnabled = undefined;

/**
 * Percentage of spool fragmentation needed to trigger defragmentation run. The minimum value allowed is 30%. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `50`. Available since 2.25.
 * @member {Number} guaranteedMsgingDefragmentationThresholdFragmentationPercentage
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdFragmentationPercentage = undefined;

/**
 * Minimum interval of time (in minutes) between defragmentation runs triggered by thresholds. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `15`. Available since 2.25.
 * @member {Number} guaranteedMsgingDefragmentationThresholdMinInterval
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdMinInterval = undefined;

/**
 * Percentage of spool usage needed to trigger defragmentation run. The minimum value allowed is 30%. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `50`. Available since 2.25.
 * @member {Number} guaranteedMsgingDefragmentationThresholdUsagePercentage
 */
BrokerModel.prototype.guaranteedMsgingDefragmentationThresholdUsagePercentage = undefined;

/**
 * Enable or disable Guaranteed Messaging. The default value is `false`. Available since 2.18.
 * @member {Boolean} guaranteedMsgingEnabled
 */
BrokerModel.prototype.guaranteedMsgingEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventCacheUsageThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventCacheUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventDeliveredUnackedThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventDeliveredUnackedThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventDiskUsageThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventDiskUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventEgressFlowCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventEgressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventEndpointCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventEndpointCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventIngressFlowCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventIngressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventMsgCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventMsgCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventMsgSpoolFileCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventMsgSpoolFileCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventMsgSpoolUsageThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventMsgSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventTransactedSessionCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventTransactedSessionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} guaranteedMsgingEventTransactedSessionResourceCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventTransactedSessionResourceCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} guaranteedMsgingEventTransactionCountThreshold
 */
BrokerModel.prototype.guaranteedMsgingEventTransactionCountThreshold = undefined;

/**
 * Guaranteed messaging cache usage limit. Expressed as a maximum percentage of the NAB's egress queueing. resources that the guaranteed message cache is allowed to use. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `10`. Available since 2.18.
 * @member {Number} guaranteedMsgingMaxCacheUsage
 */
BrokerModel.prototype.guaranteedMsgingMaxCacheUsage = undefined;

/**
 * The maximum total message spool usage allowed across all VPNs on this broker, in megabytes. Recommendation: the maximum value should be less than 90% of the disk space allocated for the guaranteed message spool. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1500`. Available since 2.18.
 * @member {Number} guaranteedMsgingMaxMsgSpoolUsage
 */
BrokerModel.prototype.guaranteedMsgingMaxMsgSpoolUsage = undefined;

/**
 * The maximum time, in milliseconds, that can be tolerated for remote acknowledgment of synchronization messages before which the remote system will be considered out of sync. The default value is `10000`. Available since 2.18.
 * @member {Number} guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout
 */
BrokerModel.prototype.guaranteedMsgingMsgSpoolSyncMirroredMsgAckTimeout = undefined;

/**
 * The maximum time, in milliseconds, that can be tolerated for remote disk writes before which the remote system will be considered out of sync. The default value is `10000`. Available since 2.18.
 * @member {Number} guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout
 */
BrokerModel.prototype.guaranteedMsgingMsgSpoolSyncMirroredSpoolFileAckTimeout = undefined;

/**
 * Allowed values for the <code>guaranteedMsgingTransactionReplicationCompatibilityMode</code> property.
 * @enum {String}
 * @readonly
 */
BrokerModel.GuaranteedMsgingTransactionReplicationCompatibilityModeEnum = {
  /**
   * value: "legacy"
   * @const
   */
  legacy: "legacy",

  /**
   * value: "transacted"
   * @const
   */
  transacted: "transacted"
};
/**
 * The replication compatibility mode for the broker. The default value is `\"legacy\"`. The allowed values and their meaning are:\"legacy\" - All transactions originated by clients are replicated to the standby site without using transactions.\"transacted\" - All transactions originated by clients are replicated to the standby site using transactions. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"legacy\"`. The allowed values and their meaning are:  <pre> \"legacy\" - All transactions originated by clients are replicated to the standby site without using transactions. \"transacted\" - All transactions originated by clients are replicated to the standby site using transactions. </pre>  Available since 2.18.
 * @member {module:model/BrokerModel.GuaranteedMsgingTransactionReplicationCompatibilityModeEnum} guaranteedMsgingTransactionReplicationCompatibilityMode
 */
BrokerModel.prototype.guaranteedMsgingTransactionReplicationCompatibilityMode = undefined;

/**
 * The default OAuth profile for OAuth authenticated SEMP requests. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`. Available since 2.24.
 * @member {String} oauthProfileDefault
 */
BrokerModel.prototype.oauthProfileDefault = undefined;

/**
 * Enable or disable the AMQP service. When disabled new AMQP Clients may not connect through the global or per-VPN AMQP listen-ports, and all currently connected AMQP Clients are immediately disconnected. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.17.
 * @member {Boolean} serviceAmqpEnabled
 */
BrokerModel.prototype.serviceAmqpEnabled = undefined;

/**
 * TCP port number that AMQP clients can use to connect to the broker using raw TCP over TLS. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceAmqpEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since 2.17.
 * @member {Number} serviceAmqpTlsListenPort
 */
BrokerModel.prototype.serviceAmqpTlsListenPort = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceEventConnectionCountThreshold
 */
BrokerModel.prototype.serviceEventConnectionCountThreshold = undefined;

/**
 * Enable or disable the plain-text health-check service. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.17.
 * @member {Boolean} serviceHealthCheckEnabled
 */
BrokerModel.prototype.serviceHealthCheckEnabled = undefined;

/**
 * The port number for the plain-text health-check service. The port must be unique across the message backbone. The health-check service must be disabled to change the port. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceHealthCheckEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `5550`. Available since 2.17.
 * @member {Number} serviceHealthCheckListenPort
 */
BrokerModel.prototype.serviceHealthCheckListenPort = undefined;

/**
 * Enable or disable the TLS health-check service. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.34.
 * @member {Boolean} serviceHealthCheckTlsEnabled
 */
BrokerModel.prototype.serviceHealthCheckTlsEnabled = undefined;

/**
 * The port number for the TLS health-check service. The port must be unique across the message backbone. The health-check service must be disabled to change the port. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceHealthCheckTlsEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since 2.34.
 * @member {Number} serviceHealthCheckTlsListenPort
 */
BrokerModel.prototype.serviceHealthCheckTlsListenPort = undefined;

/**
 * Enable or disable the mate-link service. The default value is `true`. Available since 2.17.
 * @member {Boolean} serviceMateLinkEnabled
 */
BrokerModel.prototype.serviceMateLinkEnabled = undefined;

/**
 * The port number for the mate-link service. The port must be unique across the message backbone. The mate-link service must be disabled to change the port. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceMateLinkEnabled will be temporarily set to false to apply the change. The default value is `8741`. Available since 2.17.
 * @member {Number} serviceMateLinkListenPort
 */
BrokerModel.prototype.serviceMateLinkListenPort = undefined;

/**
 * Enable or disable the MQTT service. When disabled new MQTT Clients may not connect through the per-VPN MQTT listen-ports, and all currently connected MQTT Clients are immediately disconnected. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.17.
 * @member {Boolean} serviceMqttEnabled
 */
BrokerModel.prototype.serviceMqttEnabled = undefined;

/**
 * Enable or disable the msg-backbone service. When disabled new Clients may not connect through global or per-VPN listen-ports, and all currently connected Clients are immediately disconnected. The default value is `true`. Available since 2.17.
 * @member {Boolean} serviceMsgBackboneEnabled
 */
BrokerModel.prototype.serviceMsgBackboneEnabled = undefined;

/**
 * Enable or disable the redundancy service. The default value is `true`. Available since 2.17.
 * @member {Boolean} serviceRedundancyEnabled
 */
BrokerModel.prototype.serviceRedundancyEnabled = undefined;

/**
 * The first listen-port used for the redundancy service. Redundancy uses this port and the subsequent 2 ports. These port must be unique across the message backbone. The redundancy service must be disabled to change this port. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceRedundancyEnabled will be temporarily set to false to apply the change. The default value is `8300`. Available since 2.17.
 * @member {Number} serviceRedundancyFirstListenPort
 */
BrokerModel.prototype.serviceRedundancyFirstListenPort = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceRestEventOutgoingConnectionCountThreshold
 */
BrokerModel.prototype.serviceRestEventOutgoingConnectionCountThreshold = undefined;

/**
 * Enable or disable the REST service incoming connections on the broker. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.17.
 * @member {Boolean} serviceRestIncomingEnabled
 */
BrokerModel.prototype.serviceRestIncomingEnabled = undefined;

/**
 * Enable or disable the REST service outgoing connections on the broker. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.17.
 * @member {Boolean} serviceRestOutgoingEnabled
 */
BrokerModel.prototype.serviceRestOutgoingEnabled = undefined;

/**
 * Enable or disable cross origin resource requests for the SEMP service. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since 2.24.
 * @member {Boolean} serviceSempCorsAllowAnyHostEnabled
 */
BrokerModel.prototype.serviceSempCorsAllowAnyHostEnabled = undefined;

/**
 * Enable or disable extended SEMP timeouts for paged responses. When a request times out, it returns the current page of content, even if the page is not full.  When enabled, the timeout is 60 seconds. When disabled, the timeout is 5 seconds.  The recommended setting is disabled (no legacy-timeout).  This parameter is intended as a temporary workaround to be used until SEMP clients can handle short pages.  This setting will be removed in a future release. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.18.
 * @member {Boolean} serviceSempLegacyTimeoutEnabled
 */
BrokerModel.prototype.serviceSempLegacyTimeoutEnabled = undefined;

/**
 * Enable or disable plain-text SEMP service. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since 2.17.
 * @member {Boolean} serviceSempPlainTextEnabled
 */
BrokerModel.prototype.serviceSempPlainTextEnabled = undefined;

/**
 * The TCP port for plain-text SEMP client connections. This attribute cannot be cannot be changed while serviceSempPlainTextEnabled are set to true. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `80`. Available since 2.17.
 * @member {Number} serviceSempPlainTextListenPort
 */
BrokerModel.prototype.serviceSempPlainTextListenPort = undefined;

/**
 * The session idle timeout, in minutes. Sessions will be invalidated if there is no activity in this period of time. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `15`. Available since 2.21.
 * @member {Number} serviceSempSessionIdleTimeout
 */
BrokerModel.prototype.serviceSempSessionIdleTimeout = undefined;

/**
 * The maximum lifetime of a session, in minutes. Sessions will be invalidated after this period of time, regardless of activity. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `43200`. Available since 2.21.
 * @member {Number} serviceSempSessionMaxLifetime
 */
BrokerModel.prototype.serviceSempSessionMaxLifetime = undefined;

/**
 * Enable or disable TLS SEMP service. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since 2.17.
 * @member {Boolean} serviceSempTlsEnabled
 */
BrokerModel.prototype.serviceSempTlsEnabled = undefined;

/**
 * The TCP port for TLS SEMP client connections. This attribute cannot be cannot be changed while serviceSempTlsEnabled are set to true. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1943`. Available since 2.17.
 * @member {Number} serviceSempTlsListenPort
 */
BrokerModel.prototype.serviceSempTlsListenPort = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw compression TCP. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceSmfEnabled will be temporarily set to false to apply the change. The default value is `55003`. Available since 2.17.
 * @member {Number} serviceSmfCompressionListenPort
 */
BrokerModel.prototype.serviceSmfCompressionListenPort = undefined;

/**
 * Enable or disable the SMF service. When disabled new SMF Clients may not connect through the global listen-ports, and all currently connected SMF Clients are immediately disconnected. The default value is `true`. Available since 2.17.
 * @member {Boolean} serviceSmfEnabled
 */
BrokerModel.prototype.serviceSmfEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceSmfEventConnectionCountThreshold
 */
BrokerModel.prototype.serviceSmfEventConnectionCountThreshold = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw TCP. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceSmfEnabled will be temporarily set to false to apply the change. The default value is `55555`. Available since 2.17.
 * @member {Number} serviceSmfPlainTextListenPort
 */
BrokerModel.prototype.serviceSmfPlainTextListenPort = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw routing control TCP. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceSmfEnabled will be temporarily set to false to apply the change. The default value is `55556`. Available since 2.17.
 * @member {Number} serviceSmfRoutingControlListenPort
 */
BrokerModel.prototype.serviceSmfRoutingControlListenPort = undefined;

/**
 * TCP port number that SMF clients can use to connect to the broker using raw TCP over TLS. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceSmfEnabled will be temporarily set to false to apply the change. The default value is `55443`. Available since 2.17.
 * @member {Number} serviceSmfTlsListenPort
 */
BrokerModel.prototype.serviceSmfTlsListenPort = undefined;

/**
 * @member {module:model/EventThresholdModel} serviceTlsEventConnectionCountThreshold
 */
BrokerModel.prototype.serviceTlsEventConnectionCountThreshold = undefined;

/**
 * Enable or disable the web-transport service. When disabled new web-transport Clients may not connect through the global listen-ports, and all currently connected web-transport Clients are immediately disconnected. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.17.
 * @member {Boolean} serviceWebTransportEnabled
 */
BrokerModel.prototype.serviceWebTransportEnabled = undefined;

/**
 * The TCP port for plain-text WEB client connections. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceWebTransportEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `8008`. Available since 2.17.
 * @member {Number} serviceWebTransportPlainTextListenPort
 */
BrokerModel.prototype.serviceWebTransportPlainTextListenPort = undefined;

/**
 * The TCP port for TLS WEB client connections. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceWebTransportEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1443`. Available since 2.17.
 * @member {Number} serviceWebTransportTlsListenPort
 */
BrokerModel.prototype.serviceWebTransportTlsListenPort = undefined;

/**
 * Used to specify the Web URL suffix that will be used by Web clients when communicating with the broker. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as serviceWebTransportEnabled will be temporarily set to false to apply the change. The default value is `\"\"`. Available since 2.17.
 * @member {String} serviceWebTransportWebUrlSuffix
 */
BrokerModel.prototype.serviceWebTransportWebUrlSuffix = undefined;

/**
 * Enable or disable the blocking of TLS version 1.1 connections. When blocked, all existing incoming and outgoing TLS 1.1 connections with Clients, SEMP users, and LDAP servers remain connected while new connections are blocked. Note that support for TLS 1.1 will eventually be discontinued, at which time TLS 1.1 connections will be blocked regardless of this setting. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
 * @member {Boolean} tlsBlockVersion11Enabled
 */
BrokerModel.prototype.tlsBlockVersion11Enabled = undefined;

/**
 * The colon-separated list of cipher suites used for TLS management connections (e.g. SEMP, LDAP). The value \"default\" implies all supported suites ordered from most secure to least secure. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"default\"`.
 * @member {String} tlsCipherSuiteManagementList
 */
BrokerModel.prototype.tlsCipherSuiteManagementList = undefined;

/**
 * The colon-separated list of cipher suites used for TLS data connections (e.g. client pub/sub). The value \"default\" implies all supported suites ordered from most secure to least secure. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"default\"`.
 * @member {String} tlsCipherSuiteMsgBackboneList
 */
BrokerModel.prototype.tlsCipherSuiteMsgBackboneList = undefined;

/**
 * The colon-separated list of cipher suites used for TLS secure shell connections (e.g. SSH, SFTP, SCP). The value \"default\" implies all supported suites ordered from most secure to least secure. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"default\"`.
 * @member {String} tlsCipherSuiteSecureShellList
 */
BrokerModel.prototype.tlsCipherSuiteSecureShellList = undefined;

/**
 * Enable or disable protection against the CRIME exploit. When enabled, TLS+compressed messaging performance is degraded. This protection should only be disabled if sufficient ACL and authentication features are being employed such that a potential attacker does not have sufficient access to trigger the exploit. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} tlsCrimeExploitProtectionEnabled
 */
BrokerModel.prototype.tlsCrimeExploitProtectionEnabled = undefined;

/**
 * The PEM formatted content for the server certificate used for TLS connections. It must consist of a private key and between one and three certificates comprising the certificate trust chain. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. The default value is `\"\"`.
 * @member {String} tlsServerCertContent
 */
BrokerModel.prototype.tlsServerCertContent = undefined;

/**
 * The password for the server certificate used for TLS connections. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. The default value is `\"\"`.
 * @member {String} tlsServerCertPassword
 */
BrokerModel.prototype.tlsServerCertPassword = undefined;

/**
 * Enable or disable the standard domain certificate authority list. The default value is `true`. Available since 2.19.
 * @member {Boolean} tlsStandardDomainCertificateAuthoritiesEnabled
 */
BrokerModel.prototype.tlsStandardDomainCertificateAuthoritiesEnabled = undefined;

/**
 * The TLS ticket lifetime in seconds. When a client connects with TLS, a session with a session ticket is created using the TLS ticket lifetime which determines how long the client has to resume the session. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `86400`.
 * @member {Number} tlsTicketLifetime
 */
BrokerModel.prototype.tlsTicketLifetime = undefined;

/**
 * Enable or disable the use of unencrypted wizards in the Web-based Manager UI. This setting should be left at its default on all production systems or other systems that need to be secure.  Enabling this option will permit the broker to forward plain-text data to other brokers, making important information or credentials available for snooping. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`. Available since 2.28.
 * @member {Boolean} webManagerAllowUnencryptedWizardsEnabled
 */
BrokerModel.prototype.webManagerAllowUnencryptedWizardsEnabled = undefined;

/**
 * Reserved for internal use by Solace. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`. Available since 2.25.
 * @member {String} webManagerCustomization
 */
BrokerModel.prototype.webManagerCustomization = undefined;

/**
 * Enable or disable redirection of HTTP requests for the broker manager to HTTPS. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`. Available since 2.24.
 * @member {Boolean} webManagerRedirectHttpEnabled
 */
BrokerModel.prototype.webManagerRedirectHttpEnabled = undefined;

/**
 * The HTTPS port that HTTP requests will be redirected towards in a HTTP 301 redirect response. Zero is a special value that means use the value specified for the SEMP TLS port value. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `0`. Available since 2.24.
 * @member {Number} webManagerRedirectHttpOverrideTlsPort
 */
BrokerModel.prototype.webManagerRedirectHttpOverrideTlsPort = undefined;

