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
import {ApiClient} from '../ApiClient';
import {EventThresholdModel} from './EventThresholdModel';
import {MsgVpnMqttSessionCounterModel} from './MsgVpnMqttSessionCounterModel';

/**
 * The MsgVpnMqttSessionModel model module.
 * @module model/MsgVpnMqttSessionModel
 * @version 2.36
 */
export class MsgVpnMqttSessionModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionModel</code>.
   * @alias module:model/MsgVpnMqttSessionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionModel} The populated <code>MsgVpnMqttSessionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionModel();
      if (data.hasOwnProperty('clean'))
        obj.clean = ApiClient.convertToType(data['clean'], 'Boolean');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnMqttSessionCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('createdByManagement'))
        obj.createdByManagement = ApiClient.convertToType(data['createdByManagement'], 'Boolean');
      if (data.hasOwnProperty('durable'))
        obj.durable = ApiClient.convertToType(data['durable'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('expiryTime'))
        obj.expiryTime = ApiClient.convertToType(data['expiryTime'], 'Number');
      if (data.hasOwnProperty('maxPacketSize'))
        obj.maxPacketSize = ApiClient.convertToType(data['maxPacketSize'], 'Number');
      if (data.hasOwnProperty('mqttConnackErrorTxCount'))
        obj.mqttConnackErrorTxCount = ApiClient.convertToType(data['mqttConnackErrorTxCount'], 'Number');
      if (data.hasOwnProperty('mqttConnackTxCount'))
        obj.mqttConnackTxCount = ApiClient.convertToType(data['mqttConnackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttConnectRxCount'))
        obj.mqttConnectRxCount = ApiClient.convertToType(data['mqttConnectRxCount'], 'Number');
      if (data.hasOwnProperty('mqttDisconnectRxCount'))
        obj.mqttDisconnectRxCount = ApiClient.convertToType(data['mqttDisconnectRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPingreqRxCount'))
        obj.mqttPingreqRxCount = ApiClient.convertToType(data['mqttPingreqRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPingrespTxCount'))
        obj.mqttPingrespTxCount = ApiClient.convertToType(data['mqttPingrespTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubackRxCount'))
        obj.mqttPubackRxCount = ApiClient.convertToType(data['mqttPubackRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubackTxCount'))
        obj.mqttPubackTxCount = ApiClient.convertToType(data['mqttPubackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubcompTxCount'))
        obj.mqttPubcompTxCount = ApiClient.convertToType(data['mqttPubcompTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos0RxCount'))
        obj.mqttPublishQos0RxCount = ApiClient.convertToType(data['mqttPublishQos0RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos0TxCount'))
        obj.mqttPublishQos0TxCount = ApiClient.convertToType(data['mqttPublishQos0TxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos1RxCount'))
        obj.mqttPublishQos1RxCount = ApiClient.convertToType(data['mqttPublishQos1RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos1TxCount'))
        obj.mqttPublishQos1TxCount = ApiClient.convertToType(data['mqttPublishQos1TxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos2RxCount'))
        obj.mqttPublishQos2RxCount = ApiClient.convertToType(data['mqttPublishQos2RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubrecTxCount'))
        obj.mqttPubrecTxCount = ApiClient.convertToType(data['mqttPubrecTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubrelRxCount'))
        obj.mqttPubrelRxCount = ApiClient.convertToType(data['mqttPubrelRxCount'], 'Number');
      if (data.hasOwnProperty('mqttSessionClientId'))
        obj.mqttSessionClientId = ApiClient.convertToType(data['mqttSessionClientId'], 'String');
      if (data.hasOwnProperty('mqttSessionVirtualRouter'))
        obj.mqttSessionVirtualRouter = ApiClient.convertToType(data['mqttSessionVirtualRouter'], 'String');
      if (data.hasOwnProperty('mqttSubackErrorTxCount'))
        obj.mqttSubackErrorTxCount = ApiClient.convertToType(data['mqttSubackErrorTxCount'], 'Number');
      if (data.hasOwnProperty('mqttSubackTxCount'))
        obj.mqttSubackTxCount = ApiClient.convertToType(data['mqttSubackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttSubscribeRxCount'))
        obj.mqttSubscribeRxCount = ApiClient.convertToType(data['mqttSubscribeRxCount'], 'Number');
      if (data.hasOwnProperty('mqttUnsubackTxCount'))
        obj.mqttUnsubackTxCount = ApiClient.convertToType(data['mqttUnsubackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttUnsubscribeRxCount'))
        obj.mqttUnsubscribeRxCount = ApiClient.convertToType(data['mqttUnsubscribeRxCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('queueConsumerAckPropagationEnabled'))
        obj.queueConsumerAckPropagationEnabled = ApiClient.convertToType(data['queueConsumerAckPropagationEnabled'], 'Boolean');
      if (data.hasOwnProperty('queueDeadMsgQueue'))
        obj.queueDeadMsgQueue = ApiClient.convertToType(data['queueDeadMsgQueue'], 'String');
      if (data.hasOwnProperty('queueEventBindCountThreshold'))
        obj.queueEventBindCountThreshold = EventThresholdModel.constructFromObject(data['queueEventBindCountThreshold']);
      if (data.hasOwnProperty('queueEventMsgSpoolUsageThreshold'))
        obj.queueEventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['queueEventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('queueEventRejectLowPriorityMsgLimitThreshold'))
        obj.queueEventRejectLowPriorityMsgLimitThreshold = EventThresholdModel.constructFromObject(data['queueEventRejectLowPriorityMsgLimitThreshold']);
      if (data.hasOwnProperty('queueMaxBindCount'))
        obj.queueMaxBindCount = ApiClient.convertToType(data['queueMaxBindCount'], 'Number');
      if (data.hasOwnProperty('queueMaxDeliveredUnackedMsgsPerFlow'))
        obj.queueMaxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['queueMaxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSize'))
        obj.queueMaxMsgSize = ApiClient.convertToType(data['queueMaxMsgSize'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSpoolUsage'))
        obj.queueMaxMsgSpoolUsage = ApiClient.convertToType(data['queueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('queueMaxRedeliveryCount'))
        obj.queueMaxRedeliveryCount = ApiClient.convertToType(data['queueMaxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('queueMaxTtl'))
        obj.queueMaxTtl = ApiClient.convertToType(data['queueMaxTtl'], 'Number');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('queueRejectLowPriorityMsgEnabled'))
        obj.queueRejectLowPriorityMsgEnabled = ApiClient.convertToType(data['queueRejectLowPriorityMsgEnabled'], 'Boolean');
      if (data.hasOwnProperty('queueRejectLowPriorityMsgLimit'))
        obj.queueRejectLowPriorityMsgLimit = ApiClient.convertToType(data['queueRejectLowPriorityMsgLimit'], 'Number');
      if (data.hasOwnProperty('queueRejectMsgToSenderOnDiscardBehavior'))
        obj.queueRejectMsgToSenderOnDiscardBehavior = ApiClient.convertToType(data['queueRejectMsgToSenderOnDiscardBehavior'], 'String');
      if (data.hasOwnProperty('queueRespectTtlEnabled'))
        obj.queueRespectTtlEnabled = ApiClient.convertToType(data['queueRespectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('rxMax'))
        obj.rxMax = ApiClient.convertToType(data['rxMax'], 'Number');
      if (data.hasOwnProperty('will'))
        obj.will = ApiClient.convertToType(data['will'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether the Client requested a clean (newly created) MQTT Session when connecting. If not clean (already existing), then previously stored messages for QoS 1 subscriptions are delivered.
 * @member {Boolean} clean
 */
MsgVpnMqttSessionModel.prototype.clean = undefined;

/**
 * The name of the MQTT Session Client.
 * @member {String} clientName
 */
MsgVpnMqttSessionModel.prototype.clientName = undefined;

/**
 * @member {module:model/MsgVpnMqttSessionCounterModel} counter
 */
MsgVpnMqttSessionModel.prototype.counter = undefined;

/**
 * Indicates whether the MQTT Session was created by a Management API.
 * @member {Boolean} createdByManagement
 */
MsgVpnMqttSessionModel.prototype.createdByManagement = undefined;

/**
 * Indicates whether the MQTT Session is durable. Disconnected durable MQTT Sessions are deleted when their expiry time is reached. Disconnected non-durable MQTT Sessions are deleted immediately. Available since 2.21.
 * @member {Boolean} durable
 */
MsgVpnMqttSessionModel.prototype.durable = undefined;

/**
 * Indicates whether the MQTT Session is enabled.
 * @member {Boolean} enabled
 */
MsgVpnMqttSessionModel.prototype.enabled = undefined;

/**
 * The timestamp of when the disconnected MQTT session expires and is deleted. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). A value of 0 indicates that the session is either connected, or will never expire. Available since 2.21.
 * @member {Number} expiryTime
 */
MsgVpnMqttSessionModel.prototype.expiryTime = undefined;

/**
 * The maximum size of a packet, including all headers and payload, that the Client has signaled it is willing to accept. A value of zero indicates no limit. Note that there are other broker settings which may further limit packet size. Available since 2.21.
 * @member {Number} maxPacketSize
 */
MsgVpnMqttSessionModel.prototype.maxPacketSize = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) refused response packets transmitted to the Client. Available since 2.13.
 * @member {Number} mqttConnackErrorTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttConnackErrorTxCount = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) accepted response packets transmitted to the Client. Available since 2.13.
 * @member {Number} mqttConnackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttConnackTxCount = undefined;

/**
 * The number of MQTT connect (CONNECT) request packets received from the Client. Available since 2.13.
 * @member {Number} mqttConnectRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttConnectRxCount = undefined;

/**
 * The number of MQTT disconnect (DISCONNECT) request packets received from the Client. Available since 2.13.
 * @member {Number} mqttDisconnectRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttDisconnectRxCount = undefined;

/**
 * The number of MQTT ping request (PINGREQ) packets received from the Client. Available since 2.23.
 * @member {Number} mqttPingreqRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPingreqRxCount = undefined;

/**
 * The number of MQTT ping response (PINGRESP) packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttPingrespTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPingrespTxCount = undefined;

/**
 * The number of MQTT publish acknowledgment (PUBACK) response packets received from the Client. Available since 2.23.
 * @member {Number} mqttPubackRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubackRxCount = undefined;

/**
 * The number of MQTT publish acknowledgment (PUBACK) response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttPubackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubackTxCount = undefined;

/**
 * The number of MQTT publish complete (PUBCOMP) packets transmitted to the Client in response to a PUBREL packet. These packets are the fourth and final packet of a QoS 2 protocol exchange. Available since 2.13.
 * @member {Number} mqttPubcompTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubcompTxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 0 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos0RxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos0RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 0 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos0TxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos0TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 1 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos1RxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos1RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 1 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos1TxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos1TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 2 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos2RxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos2RxCount = undefined;

/**
 * The number of MQTT publish received (PUBREC) packets transmitted to the Client in response to a PUBLISH packet with QoS 2. These packets are the second packet of a QoS 2 protocol exchange. Available since 2.13.
 * @member {Number} mqttPubrecTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubrecTxCount = undefined;

/**
 * The number of MQTT publish release (PUBREL) packets received from the Client in response to a PUBREC packet. These packets are the third packet of a QoS 2 protocol exchange. Available since 2.13.
 * @member {Number} mqttPubrelRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubrelRxCount = undefined;

/**
 * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
 * @member {String} mqttSessionClientId
 */
MsgVpnMqttSessionModel.prototype.mqttSessionClientId = undefined;

/**
 * Allowed values for the <code>mqttSessionVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnMqttSessionModel.MqttSessionVirtualRouterEnum = {
  /**
   * value: "primary"
   * @const
   */
  primary: "primary",

  /**
   * value: "backup"
   * @const
   */
  backup: "backup",

  /**
   * value: "auto"
   * @const
   */
  auto: "auto"
};
/**
 * The virtual router of the MQTT Session. The allowed values and their meaning are:  <pre> \"primary\" - The MQTT Session belongs to the primary virtual router. \"backup\" - The MQTT Session belongs to the backup virtual router. \"auto\" - The MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre> 
 * @member {module:model/MsgVpnMqttSessionModel.MqttSessionVirtualRouterEnum} mqttSessionVirtualRouter
 */
MsgVpnMqttSessionModel.prototype.mqttSessionVirtualRouter = undefined;

/**
 * The number of MQTT subscribe acknowledgment (SUBACK) failure response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttSubackErrorTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttSubackErrorTxCount = undefined;

/**
 * The number of MQTT subscribe acknowledgment (SUBACK) response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttSubackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttSubackTxCount = undefined;

/**
 * The number of MQTT subscribe (SUBSCRIBE) request packets received from the Client to create one or more topic subscriptions. Available since 2.23.
 * @member {Number} mqttSubscribeRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttSubscribeRxCount = undefined;

/**
 * The number of MQTT unsubscribe acknowledgment (UNSUBACK) response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttUnsubackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttUnsubackTxCount = undefined;

/**
 * The number of MQTT unsubscribe (UNSUBSCRIBE) request packets received from the Client to remove one or more topic subscriptions. Available since 2.23.
 * @member {Number} mqttUnsubscribeRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttUnsubscribeRxCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnMqttSessionModel.prototype.msgVpnName = undefined;

/**
 * The Client Username which owns the MQTT Session.
 * @member {String} owner
 */
MsgVpnMqttSessionModel.prototype.owner = undefined;

/**
 * Indicates whether consumer acknowledgments (ACKs) received on the active replication Message VPN are propagated to the standby replication Message VPN. Available since 2.14.
 * @member {Boolean} queueConsumerAckPropagationEnabled
 */
MsgVpnMqttSessionModel.prototype.queueConsumerAckPropagationEnabled = undefined;

/**
 * The name of the Dead Message Queue (DMQ) used by the MQTT Session Queue. Available since 2.14.
 * @member {String} queueDeadMsgQueue
 */
MsgVpnMqttSessionModel.prototype.queueDeadMsgQueue = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventBindCountThreshold
 */
MsgVpnMqttSessionModel.prototype.queueEventBindCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventMsgSpoolUsageThreshold
 */
MsgVpnMqttSessionModel.prototype.queueEventMsgSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventRejectLowPriorityMsgLimitThreshold
 */
MsgVpnMqttSessionModel.prototype.queueEventRejectLowPriorityMsgLimitThreshold = undefined;

/**
 * The maximum number of consumer flows that can bind to the MQTT Session Queue. Available since 2.14.
 * @member {Number} queueMaxBindCount
 */
MsgVpnMqttSessionModel.prototype.queueMaxBindCount = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow for the MQTT Session Queue. Available since 2.14.
 * @member {Number} queueMaxDeliveredUnackedMsgsPerFlow
 */
MsgVpnMqttSessionModel.prototype.queueMaxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The maximum message size allowed in the MQTT Session Queue, in bytes (B). Available since 2.14.
 * @member {Number} queueMaxMsgSize
 */
MsgVpnMqttSessionModel.prototype.queueMaxMsgSize = undefined;

/**
 * The maximum message spool usage allowed by the MQTT Session Queue, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking. Available since 2.14.
 * @member {Number} queueMaxMsgSpoolUsage
 */
MsgVpnMqttSessionModel.prototype.queueMaxMsgSpoolUsage = undefined;

/**
 * The maximum number of times the MQTT Session Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever. Available since 2.14.
 * @member {Number} queueMaxRedeliveryCount
 */
MsgVpnMqttSessionModel.prototype.queueMaxRedeliveryCount = undefined;

/**
 * The maximum time in seconds a message can stay in the MQTT Session Queue when `queueRespectTtlEnabled` is `\"true\"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `queueMaxTtl` configured for the MQTT Session Queue, is exceeded. A value of 0 disables expiry. Available since 2.14.
 * @member {Number} queueMaxTtl
 */
MsgVpnMqttSessionModel.prototype.queueMaxTtl = undefined;

/**
 * The name of the MQTT Session Queue.
 * @member {String} queueName
 */
MsgVpnMqttSessionModel.prototype.queueName = undefined;

/**
 * Indicates whether to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. Available since 2.14.
 * @member {Boolean} queueRejectLowPriorityMsgEnabled
 */
MsgVpnMqttSessionModel.prototype.queueRejectLowPriorityMsgEnabled = undefined;

/**
 * The number of messages of any priority in the MQTT Session Queue above which low priority messages are not admitted but higher priority messages are allowed. Available since 2.14.
 * @member {Number} queueRejectLowPriorityMsgLimit
 */
MsgVpnMqttSessionModel.prototype.queueRejectLowPriorityMsgLimit = undefined;

/**
 * Allowed values for the <code>queueRejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnMqttSessionModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum = {
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
 * Indicates whether negative acknowledgments (NACKs) are returned to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. The allowed values and their meaning are:  <pre> \"never\" - Silently discard messages. \"when-queue-enabled\" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled. \"always\" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled. </pre>  Available since 2.14.
 * @member {module:model/MsgVpnMqttSessionModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum} queueRejectMsgToSenderOnDiscardBehavior
 */
MsgVpnMqttSessionModel.prototype.queueRejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * Indicates whether the time-to-live (TTL) for messages in the MQTT Session Queue is respected. When enabled, expired messages are discarded or moved to the DMQ. Available since 2.14.
 * @member {Boolean} queueRespectTtlEnabled
 */
MsgVpnMqttSessionModel.prototype.queueRespectTtlEnabled = undefined;

/**
 * The maximum number of outstanding QoS1 and QoS2 messages that the Client has signaled it is willing to accept. Note that there are other broker settings which may further limit the number of outstanding messages. Available since 2.21.
 * @member {Number} rxMax
 */
MsgVpnMqttSessionModel.prototype.rxMax = undefined;

/**
 * Indicates whether the MQTT Session has the Will message specified by the Client. The Will message is published if the Client disconnects without sending the MQTT DISCONNECT packet.
 * @member {Boolean} will
 */
MsgVpnMqttSessionModel.prototype.will = undefined;

