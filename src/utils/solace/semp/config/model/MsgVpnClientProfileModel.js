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
 * The MsgVpnClientProfileModel model module.
 * @module model/MsgVpnClientProfileModel
 * @version 2.36
 */
export class MsgVpnClientProfileModel {
  /**
   * Constructs a new <code>MsgVpnClientProfileModel</code>.
   * @alias module:model/MsgVpnClientProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientProfileModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientProfileModel} The populated <code>MsgVpnClientProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientProfileModel();
      if (data.hasOwnProperty('allowBridgeConnectionsEnabled'))
        obj.allowBridgeConnectionsEnabled = ApiClient.convertToType(data['allowBridgeConnectionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowCutThroughForwardingEnabled'))
        obj.allowCutThroughForwardingEnabled = ApiClient.convertToType(data['allowCutThroughForwardingEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowGuaranteedEndpointCreateDurability'))
        obj.allowGuaranteedEndpointCreateDurability = ApiClient.convertToType(data['allowGuaranteedEndpointCreateDurability'], 'String');
      if (data.hasOwnProperty('allowGuaranteedEndpointCreateEnabled'))
        obj.allowGuaranteedEndpointCreateEnabled = ApiClient.convertToType(data['allowGuaranteedEndpointCreateEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowGuaranteedMsgReceiveEnabled'))
        obj.allowGuaranteedMsgReceiveEnabled = ApiClient.convertToType(data['allowGuaranteedMsgReceiveEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowGuaranteedMsgSendEnabled'))
        obj.allowGuaranteedMsgSendEnabled = ApiClient.convertToType(data['allowGuaranteedMsgSendEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowSharedSubscriptionsEnabled'))
        obj.allowSharedSubscriptionsEnabled = ApiClient.convertToType(data['allowSharedSubscriptionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowTransactedSessionsEnabled'))
        obj.allowTransactedSessionsEnabled = ApiClient.convertToType(data['allowTransactedSessionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('apiQueueManagementCopyFromOnCreateName'))
        obj.apiQueueManagementCopyFromOnCreateName = ApiClient.convertToType(data['apiQueueManagementCopyFromOnCreateName'], 'String');
      if (data.hasOwnProperty('apiQueueManagementCopyFromOnCreateTemplateName'))
        obj.apiQueueManagementCopyFromOnCreateTemplateName = ApiClient.convertToType(data['apiQueueManagementCopyFromOnCreateTemplateName'], 'String');
      if (data.hasOwnProperty('apiTopicEndpointManagementCopyFromOnCreateName'))
        obj.apiTopicEndpointManagementCopyFromOnCreateName = ApiClient.convertToType(data['apiTopicEndpointManagementCopyFromOnCreateName'], 'String');
      if (data.hasOwnProperty('apiTopicEndpointManagementCopyFromOnCreateTemplateName'))
        obj.apiTopicEndpointManagementCopyFromOnCreateTemplateName = ApiClient.convertToType(data['apiTopicEndpointManagementCopyFromOnCreateTemplateName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('compressionEnabled'))
        obj.compressionEnabled = ApiClient.convertToType(data['compressionEnabled'], 'Boolean');
      if (data.hasOwnProperty('elidingDelay'))
        obj.elidingDelay = ApiClient.convertToType(data['elidingDelay'], 'Number');
      if (data.hasOwnProperty('elidingEnabled'))
        obj.elidingEnabled = ApiClient.convertToType(data['elidingEnabled'], 'Boolean');
      if (data.hasOwnProperty('elidingMaxTopicCount'))
        obj.elidingMaxTopicCount = ApiClient.convertToType(data['elidingMaxTopicCount'], 'Number');
      if (data.hasOwnProperty('eventClientProvisionedEndpointSpoolUsageThreshold'))
        obj.eventClientProvisionedEndpointSpoolUsageThreshold = EventThresholdByPercentModel.constructFromObject(data['eventClientProvisionedEndpointSpoolUsageThreshold']);
      if (data.hasOwnProperty('eventConnectionCountPerClientUsernameThreshold'))
        obj.eventConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventEgressFlowCountThreshold'))
        obj.eventEgressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventEgressFlowCountThreshold']);
      if (data.hasOwnProperty('eventEndpointCountPerClientUsernameThreshold'))
        obj.eventEndpointCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventEndpointCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventIngressFlowCountThreshold'))
        obj.eventIngressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventIngressFlowCountThreshold']);
      if (data.hasOwnProperty('eventServiceSmfConnectionCountPerClientUsernameThreshold'))
        obj.eventServiceSmfConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventServiceSmfConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventServiceWebConnectionCountPerClientUsernameThreshold'))
        obj.eventServiceWebConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventServiceWebConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventSubscriptionCountThreshold'))
        obj.eventSubscriptionCountThreshold = EventThresholdModel.constructFromObject(data['eventSubscriptionCountThreshold']);
      if (data.hasOwnProperty('eventTransactedSessionCountThreshold'))
        obj.eventTransactedSessionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactedSessionCountThreshold']);
      if (data.hasOwnProperty('eventTransactionCountThreshold'))
        obj.eventTransactionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactionCountThreshold']);
      if (data.hasOwnProperty('maxConnectionCountPerClientUsername'))
        obj.maxConnectionCountPerClientUsername = ApiClient.convertToType(data['maxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('maxEgressFlowCount'))
        obj.maxEgressFlowCount = ApiClient.convertToType(data['maxEgressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEndpointCountPerClientUsername'))
        obj.maxEndpointCountPerClientUsername = ApiClient.convertToType(data['maxEndpointCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('maxIngressFlowCount'))
        obj.maxIngressFlowCount = ApiClient.convertToType(data['maxIngressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxMsgsPerTransaction'))
        obj.maxMsgsPerTransaction = ApiClient.convertToType(data['maxMsgsPerTransaction'], 'Number');
      if (data.hasOwnProperty('maxSubscriptionCount'))
        obj.maxSubscriptionCount = ApiClient.convertToType(data['maxSubscriptionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactedSessionCount'))
        obj.maxTransactedSessionCount = ApiClient.convertToType(data['maxTransactedSessionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactionCount'))
        obj.maxTransactionCount = ApiClient.convertToType(data['maxTransactionCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueControl1MaxDepth'))
        obj.queueControl1MaxDepth = ApiClient.convertToType(data['queueControl1MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueControl1MinMsgBurst'))
        obj.queueControl1MinMsgBurst = ApiClient.convertToType(data['queueControl1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueDirect1MaxDepth'))
        obj.queueDirect1MaxDepth = ApiClient.convertToType(data['queueDirect1MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueDirect1MinMsgBurst'))
        obj.queueDirect1MinMsgBurst = ApiClient.convertToType(data['queueDirect1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueDirect2MaxDepth'))
        obj.queueDirect2MaxDepth = ApiClient.convertToType(data['queueDirect2MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueDirect2MinMsgBurst'))
        obj.queueDirect2MinMsgBurst = ApiClient.convertToType(data['queueDirect2MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueDirect3MaxDepth'))
        obj.queueDirect3MaxDepth = ApiClient.convertToType(data['queueDirect3MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueDirect3MinMsgBurst'))
        obj.queueDirect3MinMsgBurst = ApiClient.convertToType(data['queueDirect3MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueGuaranteed1MaxDepth'))
        obj.queueGuaranteed1MaxDepth = ApiClient.convertToType(data['queueGuaranteed1MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueGuaranteed1MinMsgBurst'))
        obj.queueGuaranteed1MinMsgBurst = ApiClient.convertToType(data['queueGuaranteed1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('rejectMsgToSenderOnNoSubscriptionMatchEnabled'))
        obj.rejectMsgToSenderOnNoSubscriptionMatchEnabled = ApiClient.convertToType(data['rejectMsgToSenderOnNoSubscriptionMatchEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationAllowClientConnectWhenStandbyEnabled'))
        obj.replicationAllowClientConnectWhenStandbyEnabled = ApiClient.convertToType(data['replicationAllowClientConnectWhenStandbyEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMinKeepaliveTimeout'))
        obj.serviceMinKeepaliveTimeout = ApiClient.convertToType(data['serviceMinKeepaliveTimeout'], 'Number');
      if (data.hasOwnProperty('serviceSmfMaxConnectionCountPerClientUsername'))
        obj.serviceSmfMaxConnectionCountPerClientUsername = ApiClient.convertToType(data['serviceSmfMaxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('serviceSmfMinKeepaliveEnabled'))
        obj.serviceSmfMinKeepaliveEnabled = ApiClient.convertToType(data['serviceSmfMinKeepaliveEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebInactiveTimeout'))
        obj.serviceWebInactiveTimeout = ApiClient.convertToType(data['serviceWebInactiveTimeout'], 'Number');
      if (data.hasOwnProperty('serviceWebMaxConnectionCountPerClientUsername'))
        obj.serviceWebMaxConnectionCountPerClientUsername = ApiClient.convertToType(data['serviceWebMaxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('serviceWebMaxPayload'))
        obj.serviceWebMaxPayload = ApiClient.convertToType(data['serviceWebMaxPayload'], 'Number');
      if (data.hasOwnProperty('tcpCongestionWindowSize'))
        obj.tcpCongestionWindowSize = ApiClient.convertToType(data['tcpCongestionWindowSize'], 'Number');
      if (data.hasOwnProperty('tcpKeepaliveCount'))
        obj.tcpKeepaliveCount = ApiClient.convertToType(data['tcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('tcpKeepaliveIdleTime'))
        obj.tcpKeepaliveIdleTime = ApiClient.convertToType(data['tcpKeepaliveIdleTime'], 'Number');
      if (data.hasOwnProperty('tcpKeepaliveInterval'))
        obj.tcpKeepaliveInterval = ApiClient.convertToType(data['tcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('tcpMaxSegmentSize'))
        obj.tcpMaxSegmentSize = ApiClient.convertToType(data['tcpMaxSegmentSize'], 'Number');
      if (data.hasOwnProperty('tcpMaxWindowSize'))
        obj.tcpMaxWindowSize = ApiClient.convertToType(data['tcpMaxWindowSize'], 'Number');
      if (data.hasOwnProperty('tlsAllowDowngradeToPlainTextEnabled'))
        obj.tlsAllowDowngradeToPlainTextEnabled = ApiClient.convertToType(data['tlsAllowDowngradeToPlainTextEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Enable or disable allowing Bridge clients using the Client Profile to connect. Changing this setting does not affect existing Bridge client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} allowBridgeConnectionsEnabled
 */
MsgVpnClientProfileModel.prototype.allowBridgeConnectionsEnabled = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to bind to endpoints with the cut-through forwarding delivery mode. Changing this value does not affect existing client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Deprecated since 2.22. This attribute has been deprecated. Please visit the Solace Product Lifecycle Policy web page for details on deprecated features.
 * @member {Boolean} allowCutThroughForwardingEnabled
 */
MsgVpnClientProfileModel.prototype.allowCutThroughForwardingEnabled = undefined;

/**
 * Allowed values for the <code>allowGuaranteedEndpointCreateDurability</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnClientProfileModel.AllowGuaranteedEndpointCreateDurabilityEnum = {
  /**
   * value: "all"
   * @const
   */
  all: "all",

  /**
   * value: "durable"
   * @const
   */
  durable: "durable",

  /**
   * value: "non-durable"
   * @const
   */
  nonDurable: "non-durable"
};
/**
 * The types of Queues and Topic Endpoints that clients using the client-profile can create. Changing this value does not affect existing client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"all\"`. The allowed values and their meaning are:  <pre> \"all\" - Client can create any type of endpoint. \"durable\" - Client can create only durable endpoints. \"non-durable\" - Client can create only non-durable endpoints. </pre>  Available since 2.14.
 * @member {module:model/MsgVpnClientProfileModel.AllowGuaranteedEndpointCreateDurabilityEnum} allowGuaranteedEndpointCreateDurability
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedEndpointCreateDurability = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to create topic endpoints or queues. Changing this value does not affect existing client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} allowGuaranteedEndpointCreateEnabled
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedEndpointCreateEnabled = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to receive guaranteed messages. Changing this setting does not affect existing client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} allowGuaranteedMsgReceiveEnabled
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedMsgReceiveEnabled = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to send guaranteed messages. Changing this setting does not affect existing client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} allowGuaranteedMsgSendEnabled
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedMsgSendEnabled = undefined;

/**
 * Enable or disable allowing shared subscriptions. Changing this setting does not affect existing subscriptions. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.11.
 * @member {Boolean} allowSharedSubscriptionsEnabled
 */
MsgVpnClientProfileModel.prototype.allowSharedSubscriptionsEnabled = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to establish transacted sessions. Changing this setting does not affect existing client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} allowTransactedSessionsEnabled
 */
MsgVpnClientProfileModel.prototype.allowTransactedSessionsEnabled = undefined;

/**
 * The name of a queue to copy settings from when a new queue is created by a client using the Client Profile. The referenced queue must exist in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Deprecated since 2.14. This attribute has been replaced with `apiQueueManagementCopyFromOnCreateTemplateName`.
 * @member {String} apiQueueManagementCopyFromOnCreateName
 */
MsgVpnClientProfileModel.prototype.apiQueueManagementCopyFromOnCreateName = undefined;

/**
 * The name of a queue template to copy settings from when a new queue is created by a client using the Client Profile. If the referenced queue template does not exist, queue creation will fail when it tries to resolve this template. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.14.
 * @member {String} apiQueueManagementCopyFromOnCreateTemplateName
 */
MsgVpnClientProfileModel.prototype.apiQueueManagementCopyFromOnCreateTemplateName = undefined;

/**
 * The name of a topic endpoint to copy settings from when a new topic endpoint is created by a client using the Client Profile. The referenced topic endpoint must exist in the Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Deprecated since 2.14. This attribute has been replaced with `apiTopicEndpointManagementCopyFromOnCreateTemplateName`.
 * @member {String} apiTopicEndpointManagementCopyFromOnCreateName
 */
MsgVpnClientProfileModel.prototype.apiTopicEndpointManagementCopyFromOnCreateName = undefined;

/**
 * The name of a topic endpoint template to copy settings from when a new topic endpoint is created by a client using the Client Profile. If the referenced topic endpoint template does not exist, topic endpoint creation will fail when it tries to resolve this template. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.14.
 * @member {String} apiTopicEndpointManagementCopyFromOnCreateTemplateName
 */
MsgVpnClientProfileModel.prototype.apiTopicEndpointManagementCopyFromOnCreateTemplateName = undefined;

/**
 * The name of the Client Profile.
 * @member {String} clientProfileName
 */
MsgVpnClientProfileModel.prototype.clientProfileName = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to use compression. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since 2.10.
 * @member {Boolean} compressionEnabled
 */
MsgVpnClientProfileModel.prototype.compressionEnabled = undefined;

/**
 * The amount of time to delay the delivery of messages to clients using the Client Profile after the initial message has been delivered (the eliding delay interval), in milliseconds. A value of 0 means there is no delay in delivering messages to clients. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} elidingDelay
 */
MsgVpnClientProfileModel.prototype.elidingDelay = undefined;

/**
 * Enable or disable message eliding for clients using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} elidingEnabled
 */
MsgVpnClientProfileModel.prototype.elidingEnabled = undefined;

/**
 * The maximum number of topics tracked for message eliding per client connection using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`.
 * @member {Number} elidingMaxTopicCount
 */
MsgVpnClientProfileModel.prototype.elidingMaxTopicCount = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} eventClientProvisionedEndpointSpoolUsageThreshold
 */
MsgVpnClientProfileModel.prototype.eventClientProvisionedEndpointSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventConnectionCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventConnectionCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEgressFlowCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventEgressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEndpointCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventEndpointCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventIngressFlowCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventIngressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceSmfConnectionCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventServiceSmfConnectionCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceWebConnectionCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventServiceWebConnectionCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventSubscriptionCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventSubscriptionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactedSessionCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventTransactedSessionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactionCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventTransactionCountThreshold = undefined;

/**
 * The maximum number of client connections per Client Username using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
 * @member {Number} maxConnectionCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.maxConnectionCountPerClientUsername = undefined;

/**
 * The maximum number of transmit flows that can be created by one client using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxEgressFlowCount
 */
MsgVpnClientProfileModel.prototype.maxEgressFlowCount = undefined;

/**
 * The maximum number of queues and topic endpoints that can be created by clients with the same Client Username using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxEndpointCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.maxEndpointCountPerClientUsername = undefined;

/**
 * The maximum number of receive flows that can be created by one client using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxIngressFlowCount
 */
MsgVpnClientProfileModel.prototype.maxIngressFlowCount = undefined;

/**
 * The maximum number of publisher and consumer messages combined that is allowed within a transaction for each client associated with this client-profile. Exceeding this limit will result in a transaction prepare or commit failure. Changing this value during operation will not affect existing sessions. It is only validated at transaction creation time. Large transactions consume more resources and are more likely to require retrieving messages from the ADB or from disk to process the transaction prepare or commit requests. The transaction processing rate may diminish if a large number of messages must be retrieved from the ADB or from disk. Care should be taken to not use excessively large transactions needlessly to avoid exceeding resource limits and to avoid reducing the overall broker performance. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`. Available since 2.20.
 * @member {Number} maxMsgsPerTransaction
 */
MsgVpnClientProfileModel.prototype.maxMsgsPerTransaction = undefined;

/**
 * The maximum number of subscriptions per client using the Client Profile. This limit is not enforced when a client adds a subscription to an endpoint, except for MQTT QoS 1 subscriptions. In addition, this limit is not enforced when a subscription is added using a management interface, such as CLI or SEMP. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} maxSubscriptionCount
 */
MsgVpnClientProfileModel.prototype.maxSubscriptionCount = undefined;

/**
 * The maximum number of transacted sessions that can be created by one client using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10`.
 * @member {Number} maxTransactedSessionCount
 */
MsgVpnClientProfileModel.prototype.maxTransactedSessionCount = undefined;

/**
 * The maximum number of transactions that can be created by one client using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default varies by platform.
 * @member {Number} maxTransactionCount
 */
MsgVpnClientProfileModel.prototype.maxTransactionCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientProfileModel.prototype.msgVpnName = undefined;

/**
 * The maximum depth of the \"Control 1\" (C-1) priority queue, in work units. Each work unit is 2048 bytes of message data. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
 * @member {Number} queueControl1MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueControl1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Control 1\" (C-1) priority queue, regardless of the `queueControl1MaxDepth` value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
 * @member {Number} queueControl1MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueControl1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 1\" (D-1) priority queue, in work units. Each work unit is 2048 bytes of message data. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
 * @member {Number} queueDirect1MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueDirect1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 1\" (D-1) priority queue, regardless of the `queueDirect1MaxDepth` value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
 * @member {Number} queueDirect1MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueDirect1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 2\" (D-2) priority queue, in work units. Each work unit is 2048 bytes of message data. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
 * @member {Number} queueDirect2MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueDirect2MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 2\" (D-2) priority queue, regardless of the `queueDirect2MaxDepth` value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
 * @member {Number} queueDirect2MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueDirect2MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 3\" (D-3) priority queue, in work units. Each work unit is 2048 bytes of message data. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
 * @member {Number} queueDirect3MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueDirect3MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 3\" (D-3) priority queue, regardless of the `queueDirect3MaxDepth` value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
 * @member {Number} queueDirect3MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueDirect3MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Guaranteed 1\" (G-1) priority queue, in work units. Each work unit is 2048 bytes of message data. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `20000`.
 * @member {Number} queueGuaranteed1MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueGuaranteed1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Guaranteed 1\" (G-3) priority queue, regardless of the `queueGuaranteed1MaxDepth` value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `255`.
 * @member {Number} queueGuaranteed1MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueGuaranteed1MinMsgBurst = undefined;

/**
 * Enable or disable the sending of a negative acknowledgment (NACK) to a client using the Client Profile when discarding a guaranteed message due to no matching subscription found. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.2.
 * @member {Boolean} rejectMsgToSenderOnNoSubscriptionMatchEnabled
 */
MsgVpnClientProfileModel.prototype.rejectMsgToSenderOnNoSubscriptionMatchEnabled = undefined;

/**
 * Enable or disable allowing clients using the Client Profile to connect to the Message VPN when its replication state is standby. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} replicationAllowClientConnectWhenStandbyEnabled
 */
MsgVpnClientProfileModel.prototype.replicationAllowClientConnectWhenStandbyEnabled = undefined;

/**
 * The minimum client keepalive timeout which will be enforced for client connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30`. Available since 2.19.
 * @member {Number} serviceMinKeepaliveTimeout
 */
MsgVpnClientProfileModel.prototype.serviceMinKeepaliveTimeout = undefined;

/**
 * The maximum number of SMF client connections per Client Username using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
 * @member {Number} serviceSmfMaxConnectionCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.serviceSmfMaxConnectionCountPerClientUsername = undefined;

/**
 * Enable or disable the enforcement of a minimum keepalive timeout for SMF clients. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.19.
 * @member {Boolean} serviceSmfMinKeepaliveEnabled
 */
MsgVpnClientProfileModel.prototype.serviceSmfMinKeepaliveEnabled = undefined;

/**
 * The timeout for inactive Web Transport client sessions using the Client Profile, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30`.
 * @member {Number} serviceWebInactiveTimeout
 */
MsgVpnClientProfileModel.prototype.serviceWebInactiveTimeout = undefined;

/**
 * The maximum number of Web Transport client connections per Client Username using the Client Profile. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default is the maximum value supported by the platform.
 * @member {Number} serviceWebMaxConnectionCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.serviceWebMaxConnectionCountPerClientUsername = undefined;

/**
 * The maximum Web Transport payload size before fragmentation occurs for clients using the Client Profile, in bytes. The size of the header is not included. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000000`.
 * @member {Number} serviceWebMaxPayload
 */
MsgVpnClientProfileModel.prototype.serviceWebMaxPayload = undefined;

/**
 * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2`.
 * @member {Number} tcpCongestionWindowSize
 */
MsgVpnClientProfileModel.prototype.tcpCongestionWindowSize = undefined;

/**
 * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5`.
 * @member {Number} tcpKeepaliveCount
 */
MsgVpnClientProfileModel.prototype.tcpKeepaliveCount = undefined;

/**
 * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} tcpKeepaliveIdleTime
 */
MsgVpnClientProfileModel.prototype.tcpKeepaliveIdleTime = undefined;

/**
 * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
 * @member {Number} tcpKeepaliveInterval
 */
MsgVpnClientProfileModel.prototype.tcpKeepaliveInterval = undefined;

/**
 * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1460`.
 * @member {Number} tcpMaxSegmentSize
 */
MsgVpnClientProfileModel.prototype.tcpMaxSegmentSize = undefined;

/**
 * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `256`.
 * @member {Number} tcpMaxWindowSize
 */
MsgVpnClientProfileModel.prototype.tcpMaxWindowSize = undefined;

/**
 * Enable or disable allowing a client using the Client Profile to downgrade an encrypted connection to plain text. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since 2.8.
 * @member {Boolean} tlsAllowDowngradeToPlainTextEnabled
 */
MsgVpnClientProfileModel.prototype.tlsAllowDowngradeToPlainTextEnabled = undefined;

