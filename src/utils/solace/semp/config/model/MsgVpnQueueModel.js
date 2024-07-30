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
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The MsgVpnQueueModel model module.
 * @module model/MsgVpnQueueModel
 * @version 2.36
 */
export class MsgVpnQueueModel {
  /**
   * Constructs a new <code>MsgVpnQueueModel</code>.
   * @alias module:model/MsgVpnQueueModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueModel} The populated <code>MsgVpnQueueModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueModel();
      if (data.hasOwnProperty('accessType'))
        obj.accessType = ApiClient.convertToType(data['accessType'], 'String');
      if (data.hasOwnProperty('consumerAckPropagationEnabled'))
        obj.consumerAckPropagationEnabled = ApiClient.convertToType(data['consumerAckPropagationEnabled'], 'Boolean');
      if (data.hasOwnProperty('deadMsgQueue'))
        obj.deadMsgQueue = ApiClient.convertToType(data['deadMsgQueue'], 'String');
      if (data.hasOwnProperty('deliveryCountEnabled'))
        obj.deliveryCountEnabled = ApiClient.convertToType(data['deliveryCountEnabled'], 'Boolean');
      if (data.hasOwnProperty('deliveryDelay'))
        obj.deliveryDelay = ApiClient.convertToType(data['deliveryDelay'], 'Number');
      if (data.hasOwnProperty('egressEnabled'))
        obj.egressEnabled = ApiClient.convertToType(data['egressEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventBindCountThreshold'))
        obj.eventBindCountThreshold = EventThresholdModel.constructFromObject(data['eventBindCountThreshold']);
      if (data.hasOwnProperty('eventMsgSpoolUsageThreshold'))
        obj.eventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['eventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('eventRejectLowPriorityMsgLimitThreshold'))
        obj.eventRejectLowPriorityMsgLimitThreshold = EventThresholdModel.constructFromObject(data['eventRejectLowPriorityMsgLimitThreshold']);
      if (data.hasOwnProperty('ingressEnabled'))
        obj.ingressEnabled = ApiClient.convertToType(data['ingressEnabled'], 'Boolean');
      if (data.hasOwnProperty('maxBindCount'))
        obj.maxBindCount = ApiClient.convertToType(data['maxBindCount'], 'Number');
      if (data.hasOwnProperty('maxDeliveredUnackedMsgsPerFlow'))
        obj.maxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['maxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('maxMsgSize'))
        obj.maxMsgSize = ApiClient.convertToType(data['maxMsgSize'], 'Number');
      if (data.hasOwnProperty('maxMsgSpoolUsage'))
        obj.maxMsgSpoolUsage = ApiClient.convertToType(data['maxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('maxRedeliveryCount'))
        obj.maxRedeliveryCount = ApiClient.convertToType(data['maxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('maxTtl'))
        obj.maxTtl = ApiClient.convertToType(data['maxTtl'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('partitionCount'))
        obj.partitionCount = ApiClient.convertToType(data['partitionCount'], 'Number');
      if (data.hasOwnProperty('partitionRebalanceDelay'))
        obj.partitionRebalanceDelay = ApiClient.convertToType(data['partitionRebalanceDelay'], 'Number');
      if (data.hasOwnProperty('partitionRebalanceMaxHandoffTime'))
        obj.partitionRebalanceMaxHandoffTime = ApiClient.convertToType(data['partitionRebalanceMaxHandoffTime'], 'Number');
      if (data.hasOwnProperty('permission'))
        obj.permission = ApiClient.convertToType(data['permission'], 'String');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('redeliveryDelayEnabled'))
        obj.redeliveryDelayEnabled = ApiClient.convertToType(data['redeliveryDelayEnabled'], 'Boolean');
      if (data.hasOwnProperty('redeliveryDelayInitialInterval'))
        obj.redeliveryDelayInitialInterval = ApiClient.convertToType(data['redeliveryDelayInitialInterval'], 'Number');
      if (data.hasOwnProperty('redeliveryDelayMaxInterval'))
        obj.redeliveryDelayMaxInterval = ApiClient.convertToType(data['redeliveryDelayMaxInterval'], 'Number');
      if (data.hasOwnProperty('redeliveryDelayMultiplier'))
        obj.redeliveryDelayMultiplier = ApiClient.convertToType(data['redeliveryDelayMultiplier'], 'Number');
      if (data.hasOwnProperty('redeliveryEnabled'))
        obj.redeliveryEnabled = ApiClient.convertToType(data['redeliveryEnabled'], 'Boolean');
      if (data.hasOwnProperty('rejectLowPriorityMsgEnabled'))
        obj.rejectLowPriorityMsgEnabled = ApiClient.convertToType(data['rejectLowPriorityMsgEnabled'], 'Boolean');
      if (data.hasOwnProperty('rejectLowPriorityMsgLimit'))
        obj.rejectLowPriorityMsgLimit = ApiClient.convertToType(data['rejectLowPriorityMsgLimit'], 'Number');
      if (data.hasOwnProperty('rejectMsgToSenderOnDiscardBehavior'))
        obj.rejectMsgToSenderOnDiscardBehavior = ApiClient.convertToType(data['rejectMsgToSenderOnDiscardBehavior'], 'String');
      if (data.hasOwnProperty('respectMsgPriorityEnabled'))
        obj.respectMsgPriorityEnabled = ApiClient.convertToType(data['respectMsgPriorityEnabled'], 'Boolean');
      if (data.hasOwnProperty('respectTtlEnabled'))
        obj.respectTtlEnabled = ApiClient.convertToType(data['respectTtlEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>accessType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnQueueModel.AccessTypeEnum = {
  /**
   * value: "exclusive"
   * @const
   */
  exclusive: "exclusive",

  /**
   * value: "non-exclusive"
   * @const
   */
  nonExclusive: "non-exclusive"
};
/**
 * The access type for delivering messages to consumer flows bound to the Queue. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"exclusive\"`. The allowed values and their meaning are:  <pre> \"exclusive\" - Exclusive delivery of messages to the first bound consumer flow. \"non-exclusive\" - Non-exclusive delivery of messages to bound consumer flows in a round-robin (if partition count is zero) or partitioned (if partition count is non-zero) fashion. </pre> 
 * @member {module:model/MsgVpnQueueModel.AccessTypeEnum} accessType
 */
MsgVpnQueueModel.prototype.accessType = undefined;

/**
 * Enable or disable the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} consumerAckPropagationEnabled
 */
MsgVpnQueueModel.prototype.consumerAckPropagationEnabled = undefined;

/**
 * The name of the Dead Message Queue (DMQ) used by the Queue. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"#DEAD_MSG_QUEUE\"`. Available since 2.2.
 * @member {String} deadMsgQueue
 */
MsgVpnQueueModel.prototype.deadMsgQueue = undefined;

/**
 * Enable or disable the ability for client applications to query the message delivery count of messages received from the Queue. This is a controlled availability feature. Please contact support to find out if this feature is supported for your use case. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.19.
 * @member {Boolean} deliveryCountEnabled
 */
MsgVpnQueueModel.prototype.deliveryCountEnabled = undefined;

/**
 * The delay, in seconds, to apply to messages arriving on the Queue before the messages are eligible for delivery. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.22.
 * @member {Number} deliveryDelay
 */
MsgVpnQueueModel.prototype.deliveryDelay = undefined;

/**
 * Enable or disable the transmission of messages from the Queue. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} egressEnabled
 */
MsgVpnQueueModel.prototype.egressEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} eventBindCountThreshold
 */
MsgVpnQueueModel.prototype.eventBindCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventMsgSpoolUsageThreshold
 */
MsgVpnQueueModel.prototype.eventMsgSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventRejectLowPriorityMsgLimitThreshold
 */
MsgVpnQueueModel.prototype.eventRejectLowPriorityMsgLimitThreshold = undefined;

/**
 * Enable or disable the reception of messages to the Queue. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} ingressEnabled
 */
MsgVpnQueueModel.prototype.ingressEnabled = undefined;

/**
 * The maximum number of consumer flows that can bind to the Queue. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} maxBindCount
 */
MsgVpnQueueModel.prototype.maxBindCount = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow for the Queue. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
 * @member {Number} maxDeliveredUnackedMsgsPerFlow
 */
MsgVpnQueueModel.prototype.maxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The maximum message size allowed in the Queue, in bytes (B). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000000`.
 * @member {Number} maxMsgSize
 */
MsgVpnQueueModel.prototype.maxMsgSize = undefined;

/**
 * The maximum message spool usage allowed by the Queue, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5000`.
 * @member {Number} maxMsgSpoolUsage
 */
MsgVpnQueueModel.prototype.maxMsgSpoolUsage = undefined;

/**
 * The maximum number of times the Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} maxRedeliveryCount
 */
MsgVpnQueueModel.prototype.maxRedeliveryCount = undefined;

/**
 * The maximum time in seconds a message can stay in the Queue when `respectTtlEnabled` is `\"true\"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `maxTtl` configured for the Queue, is exceeded. A value of 0 disables expiry. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} maxTtl
 */
MsgVpnQueueModel.prototype.maxTtl = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnQueueModel.prototype.msgVpnName = undefined;

/**
 * The Client Username that owns the Queue and has permission equivalent to `\"delete\"`. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} owner
 */
MsgVpnQueueModel.prototype.owner = undefined;

/**
 * The count of partitions of the queue. Only relevant for queues with an access type of non-exclusive. When zero, bound clients receive messages round-robin. Otherwise, bound clients receive messages from individually assigned partitions. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`. Available since 2.35.
 * @member {Number} partitionCount
 */
MsgVpnQueueModel.prototype.partitionCount = undefined;

/**
 * The delay (in seconds) before a partition rebalance is started once needed. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `5`. Available since 2.35.
 * @member {Number} partitionRebalanceDelay
 */
MsgVpnQueueModel.prototype.partitionRebalanceDelay = undefined;

/**
 * The maximum time (in seconds) to wait before handing off a partition while rebalancing. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`. Available since 2.35.
 * @member {Number} partitionRebalanceMaxHandoffTime
 */
MsgVpnQueueModel.prototype.partitionRebalanceMaxHandoffTime = undefined;

/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnQueueModel.PermissionEnum = {
  /**
   * value: "no-access"
   * @const
   */
  noAccess: "no-access",

  /**
   * value: "read-only"
   * @const
   */
  readOnly: "read-only",

  /**
   * value: "consume"
   * @const
   */
  consume: "consume",

  /**
   * value: "modify-topic"
   * @const
   */
  modifyTopic: "modify-topic",

  /**
   * value: "delete"
   * @const
   */
  _delete: "delete"
};
/**
 * The permission level for all consumers of the Queue, excluding the owner. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"no-access\"`. The allowed values and their meaning are:  <pre> \"no-access\" - Disallows all access. \"read-only\" - Read-only access to the messages. \"consume\" - Consume (read and remove) messages. \"modify-topic\" - Consume messages or modify the topic/selector. \"delete\" - Consume messages, modify the topic/selector or delete the Client created endpoint altogether. </pre> 
 * @member {module:model/MsgVpnQueueModel.PermissionEnum} permission
 */
MsgVpnQueueModel.prototype.permission = undefined;

/**
 * The name of the Queue.
 * @member {String} queueName
 */
MsgVpnQueueModel.prototype.queueName = undefined;

/**
 * Enable or disable a message redelivery delay. When false, messages are redelivered as soon as possible.  When true, messages are redelivered according to the initial, max and multiplier.  This should only be enabled when redelivery is enabled. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.33.
 * @member {Boolean} redeliveryDelayEnabled
 */
MsgVpnQueueModel.prototype.redeliveryDelayEnabled = undefined;

/**
 * The delay to be used between the first 2 redelivery attempts.  This value is in milliseconds. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`. Available since 2.33.
 * @member {Number} redeliveryDelayInitialInterval
 */
MsgVpnQueueModel.prototype.redeliveryDelayInitialInterval = undefined;

/**
 * The maximum delay to be used between any 2 redelivery attempts.  This value is in milliseconds.  Due to technical limitations, some redelivery attempt delays may slightly exceed this value. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `64000`. Available since 2.33.
 * @member {Number} redeliveryDelayMaxInterval
 */
MsgVpnQueueModel.prototype.redeliveryDelayMaxInterval = undefined;

/**
 * The amount each delay interval is multiplied by after each failed delivery attempt.  This number is in a fixed-point decimal format in which you must divide by 100 to get the floating point value. For example, a value of 125 would cause the delay to be multiplied by 1.25. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `200`. Available since 2.33.
 * @member {Number} redeliveryDelayMultiplier
 */
MsgVpnQueueModel.prototype.redeliveryDelayMultiplier = undefined;

/**
 * Enable or disable message redelivery. When enabled, the number of redelivery attempts is controlled by maxRedeliveryCount. When disabled, the message will never be delivered from the queue more than once. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`. Available since 2.18.
 * @member {Boolean} redeliveryEnabled
 */
MsgVpnQueueModel.prototype.redeliveryEnabled = undefined;

/**
 * Enable or disable the checking of low priority messages against the `rejectLowPriorityMsgLimit`. This may only be enabled if `rejectMsgToSenderOnDiscardBehavior` does not have a value of `\"never\"`. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} rejectLowPriorityMsgEnabled
 */
MsgVpnQueueModel.prototype.rejectLowPriorityMsgEnabled = undefined;

/**
 * The number of messages of any priority in the Queue above which low priority messages are not admitted but higher priority messages are allowed. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} rejectLowPriorityMsgLimit
 */
MsgVpnQueueModel.prototype.rejectLowPriorityMsgLimit = undefined;

/**
 * Allowed values for the <code>rejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnQueueModel.RejectMsgToSenderOnDiscardBehaviorEnum = {
  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-queue-enabled"
   * @const
   */
  whenQueueEnabled: "when-queue-enabled",

  /**
   * value: "always"
   * @const
   */
  always: "always"
};
/**
 * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as rejectLowPriorityMsgEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"when-queue-enabled\"`. The allowed values and their meaning are:  <pre> \"never\" - Silently discard messages. \"when-queue-enabled\" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled. \"always\" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled. </pre>  Available since 2.1.
 * @member {module:model/MsgVpnQueueModel.RejectMsgToSenderOnDiscardBehaviorEnum} rejectMsgToSenderOnDiscardBehavior
 */
MsgVpnQueueModel.prototype.rejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * Enable or disable the respecting of message priority. When enabled, messages contained in the Queue are delivered in priority order, from 9 (highest) to 0 (lowest). Regardless of this setting, message priority is not respected when browsing the queue, when the queue is used by a bridge, or if the queue is partitioned. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as egressEnabled and ingressEnabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.8.
 * @member {Boolean} respectMsgPriorityEnabled
 */
MsgVpnQueueModel.prototype.respectMsgPriorityEnabled = undefined;

/**
 * Enable or disable the respecting of the time-to-live (TTL) for messages in the Queue. When enabled, expired messages are discarded or moved to the DMQ. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} respectTtlEnabled
 */
MsgVpnQueueModel.prototype.respectTtlEnabled = undefined;

