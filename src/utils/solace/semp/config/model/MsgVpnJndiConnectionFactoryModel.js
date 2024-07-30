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

/**
 * The MsgVpnJndiConnectionFactoryModel model module.
 * @module model/MsgVpnJndiConnectionFactoryModel
 * @version 2.36
 */
export class MsgVpnJndiConnectionFactoryModel {
  /**
   * Constructs a new <code>MsgVpnJndiConnectionFactoryModel</code>.
   * @alias module:model/MsgVpnJndiConnectionFactoryModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiConnectionFactoryModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiConnectionFactoryModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiConnectionFactoryModel} The populated <code>MsgVpnJndiConnectionFactoryModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiConnectionFactoryModel();
      if (data.hasOwnProperty('allowDuplicateClientIdEnabled'))
        obj.allowDuplicateClientIdEnabled = ApiClient.convertToType(data['allowDuplicateClientIdEnabled'], 'Boolean');
      if (data.hasOwnProperty('clientDescription'))
        obj.clientDescription = ApiClient.convertToType(data['clientDescription'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('connectionFactoryName'))
        obj.connectionFactoryName = ApiClient.convertToType(data['connectionFactoryName'], 'String');
      if (data.hasOwnProperty('dtoReceiveOverrideEnabled'))
        obj.dtoReceiveOverrideEnabled = ApiClient.convertToType(data['dtoReceiveOverrideEnabled'], 'Boolean');
      if (data.hasOwnProperty('dtoReceiveSubscriberLocalPriority'))
        obj.dtoReceiveSubscriberLocalPriority = ApiClient.convertToType(data['dtoReceiveSubscriberLocalPriority'], 'Number');
      if (data.hasOwnProperty('dtoReceiveSubscriberNetworkPriority'))
        obj.dtoReceiveSubscriberNetworkPriority = ApiClient.convertToType(data['dtoReceiveSubscriberNetworkPriority'], 'Number');
      if (data.hasOwnProperty('dtoSendEnabled'))
        obj.dtoSendEnabled = ApiClient.convertToType(data['dtoSendEnabled'], 'Boolean');
      if (data.hasOwnProperty('dynamicEndpointCreateDurableEnabled'))
        obj.dynamicEndpointCreateDurableEnabled = ApiClient.convertToType(data['dynamicEndpointCreateDurableEnabled'], 'Boolean');
      if (data.hasOwnProperty('dynamicEndpointRespectTtlEnabled'))
        obj.dynamicEndpointRespectTtlEnabled = ApiClient.convertToType(data['dynamicEndpointRespectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedReceiveAckTimeout'))
        obj.guaranteedReceiveAckTimeout = ApiClient.convertToType(data['guaranteedReceiveAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveReconnectRetryCount'))
        obj.guaranteedReceiveReconnectRetryCount = ApiClient.convertToType(data['guaranteedReceiveReconnectRetryCount'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveReconnectRetryWait'))
        obj.guaranteedReceiveReconnectRetryWait = ApiClient.convertToType(data['guaranteedReceiveReconnectRetryWait'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveWindowSize'))
        obj.guaranteedReceiveWindowSize = ApiClient.convertToType(data['guaranteedReceiveWindowSize'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveWindowSizeAckThreshold'))
        obj.guaranteedReceiveWindowSizeAckThreshold = ApiClient.convertToType(data['guaranteedReceiveWindowSizeAckThreshold'], 'Number');
      if (data.hasOwnProperty('guaranteedSendAckTimeout'))
        obj.guaranteedSendAckTimeout = ApiClient.convertToType(data['guaranteedSendAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedSendWindowSize'))
        obj.guaranteedSendWindowSize = ApiClient.convertToType(data['guaranteedSendWindowSize'], 'Number');
      if (data.hasOwnProperty('messagingDefaultDeliveryMode'))
        obj.messagingDefaultDeliveryMode = ApiClient.convertToType(data['messagingDefaultDeliveryMode'], 'String');
      if (data.hasOwnProperty('messagingDefaultDmqEligibleEnabled'))
        obj.messagingDefaultDmqEligibleEnabled = ApiClient.convertToType(data['messagingDefaultDmqEligibleEnabled'], 'Boolean');
      if (data.hasOwnProperty('messagingDefaultElidingEligibleEnabled'))
        obj.messagingDefaultElidingEligibleEnabled = ApiClient.convertToType(data['messagingDefaultElidingEligibleEnabled'], 'Boolean');
      if (data.hasOwnProperty('messagingJmsxUserIdEnabled'))
        obj.messagingJmsxUserIdEnabled = ApiClient.convertToType(data['messagingJmsxUserIdEnabled'], 'Boolean');
      if (data.hasOwnProperty('messagingTextInXmlPayloadEnabled'))
        obj.messagingTextInXmlPayloadEnabled = ApiClient.convertToType(data['messagingTextInXmlPayloadEnabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('transportCompressionLevel'))
        obj.transportCompressionLevel = ApiClient.convertToType(data['transportCompressionLevel'], 'Number');
      if (data.hasOwnProperty('transportConnectRetryCount'))
        obj.transportConnectRetryCount = ApiClient.convertToType(data['transportConnectRetryCount'], 'Number');
      if (data.hasOwnProperty('transportConnectRetryPerHostCount'))
        obj.transportConnectRetryPerHostCount = ApiClient.convertToType(data['transportConnectRetryPerHostCount'], 'Number');
      if (data.hasOwnProperty('transportConnectTimeout'))
        obj.transportConnectTimeout = ApiClient.convertToType(data['transportConnectTimeout'], 'Number');
      if (data.hasOwnProperty('transportDirectTransportEnabled'))
        obj.transportDirectTransportEnabled = ApiClient.convertToType(data['transportDirectTransportEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportKeepaliveCount'))
        obj.transportKeepaliveCount = ApiClient.convertToType(data['transportKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('transportKeepaliveEnabled'))
        obj.transportKeepaliveEnabled = ApiClient.convertToType(data['transportKeepaliveEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportKeepaliveInterval'))
        obj.transportKeepaliveInterval = ApiClient.convertToType(data['transportKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('transportMsgCallbackOnIoThreadEnabled'))
        obj.transportMsgCallbackOnIoThreadEnabled = ApiClient.convertToType(data['transportMsgCallbackOnIoThreadEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportOptimizeDirectEnabled'))
        obj.transportOptimizeDirectEnabled = ApiClient.convertToType(data['transportOptimizeDirectEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportPort'))
        obj.transportPort = ApiClient.convertToType(data['transportPort'], 'Number');
      if (data.hasOwnProperty('transportReadTimeout'))
        obj.transportReadTimeout = ApiClient.convertToType(data['transportReadTimeout'], 'Number');
      if (data.hasOwnProperty('transportReceiveBufferSize'))
        obj.transportReceiveBufferSize = ApiClient.convertToType(data['transportReceiveBufferSize'], 'Number');
      if (data.hasOwnProperty('transportReconnectRetryCount'))
        obj.transportReconnectRetryCount = ApiClient.convertToType(data['transportReconnectRetryCount'], 'Number');
      if (data.hasOwnProperty('transportReconnectRetryWait'))
        obj.transportReconnectRetryWait = ApiClient.convertToType(data['transportReconnectRetryWait'], 'Number');
      if (data.hasOwnProperty('transportSendBufferSize'))
        obj.transportSendBufferSize = ApiClient.convertToType(data['transportSendBufferSize'], 'Number');
      if (data.hasOwnProperty('transportTcpNoDelayEnabled'))
        obj.transportTcpNoDelayEnabled = ApiClient.convertToType(data['transportTcpNoDelayEnabled'], 'Boolean');
      if (data.hasOwnProperty('xaEnabled'))
        obj.xaEnabled = ApiClient.convertToType(data['xaEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Enable or disable whether new JMS connections can use the same Client identifier (ID) as an existing connection. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since 2.3.
 * @member {Boolean} allowDuplicateClientIdEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.allowDuplicateClientIdEnabled = undefined;

/**
 * The description of the Client. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} clientDescription
 */
MsgVpnJndiConnectionFactoryModel.prototype.clientDescription = undefined;

/**
 * The Client identifier (ID). If not specified, a unique value for it will be generated. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} clientId
 */
MsgVpnJndiConnectionFactoryModel.prototype.clientId = undefined;

/**
 * The name of the JMS Connection Factory.
 * @member {String} connectionFactoryName
 */
MsgVpnJndiConnectionFactoryModel.prototype.connectionFactoryName = undefined;

/**
 * Enable or disable overriding by the Subscriber (Consumer) of the deliver-to-one (DTO) property on messages. When enabled, the Subscriber can receive all DTO tagged messages. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} dtoReceiveOverrideEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoReceiveOverrideEnabled = undefined;

/**
 * The priority for receiving deliver-to-one (DTO) messages by the Subscriber (Consumer) if the messages are published on the local broker that the Subscriber is directly connected to. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
 * @member {Number} dtoReceiveSubscriberLocalPriority
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoReceiveSubscriberLocalPriority = undefined;

/**
 * The priority for receiving deliver-to-one (DTO) messages by the Subscriber (Consumer) if the messages are published on a remote broker. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1`.
 * @member {Number} dtoReceiveSubscriberNetworkPriority
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoReceiveSubscriberNetworkPriority = undefined;

/**
 * Enable or disable the deliver-to-one (DTO) property on messages sent by the Publisher (Producer). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} dtoSendEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoSendEnabled = undefined;

/**
 * Enable or disable whether a durable endpoint will be dynamically created on the broker when the client calls \"Session.createDurableSubscriber()\" or \"Session.createQueue()\". The created endpoint respects the message time-to-live (TTL) according to the \"dynamicEndpointRespectTtlEnabled\" property. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} dynamicEndpointCreateDurableEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dynamicEndpointCreateDurableEnabled = undefined;

/**
 * Enable or disable whether dynamically created durable and non-durable endpoints respect the message time-to-live (TTL) property. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} dynamicEndpointRespectTtlEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dynamicEndpointRespectTtlEnabled = undefined;

/**
 * The timeout for sending the acknowledgment (ACK) for guaranteed messages received by the Subscriber (Consumer), in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `1000`.
 * @member {Number} guaranteedReceiveAckTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveAckTimeout = undefined;

/**
 * The maximum number of attempts to reconnect to the host or list of hosts after the guaranteed  messaging connection has been lost. The value \"-1\" means to retry forever. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`. Available since 2.14.
 * @member {Number} guaranteedReceiveReconnectRetryCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveReconnectRetryCount = undefined;

/**
 * The amount of time to wait before making another attempt to connect or reconnect to the host after the guaranteed messaging connection has been lost, in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`. Available since 2.14.
 * @member {Number} guaranteedReceiveReconnectRetryWait
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveReconnectRetryWait = undefined;

/**
 * The size of the window for guaranteed messages received by the Subscriber (Consumer), in messages. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `18`.
 * @member {Number} guaranteedReceiveWindowSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveWindowSize = undefined;

/**
 * The threshold for sending the acknowledgment (ACK) for guaranteed messages received by the Subscriber (Consumer) as a percentage of `guaranteedReceiveWindowSize`. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `60`.
 * @member {Number} guaranteedReceiveWindowSizeAckThreshold
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveWindowSizeAckThreshold = undefined;

/**
 * The timeout for receiving the acknowledgment (ACK) for guaranteed messages sent by the Publisher (Producer), in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `2000`.
 * @member {Number} guaranteedSendAckTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedSendAckTimeout = undefined;

/**
 * The size of the window for non-persistent guaranteed messages sent by the Publisher (Producer), in messages. For persistent messages the window size is fixed at 1. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `255`.
 * @member {Number} guaranteedSendWindowSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedSendWindowSize = undefined;

/**
 * Allowed values for the <code>messagingDefaultDeliveryMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnJndiConnectionFactoryModel.MessagingDefaultDeliveryModeEnum = {
  /**
   * value: "persistent"
   * @const
   */
  persistent: "persistent",

  /**
   * value: "non-persistent"
   * @const
   */
  nonPersistent: "non-persistent"
};
/**
 * The default delivery mode for messages sent by the Publisher (Producer). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"persistent\"`. The allowed values and their meaning are:  <pre> \"persistent\" - The broker spools messages (persists in the Message Spool) as part of the send operation. \"non-persistent\" - The broker does not spool messages (does not persist in the Message Spool) as part of the send operation. </pre> 
 * @member {module:model/MsgVpnJndiConnectionFactoryModel.MessagingDefaultDeliveryModeEnum} messagingDefaultDeliveryMode
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingDefaultDeliveryMode = undefined;

/**
 * Enable or disable whether messages sent by the Publisher (Producer) are Dead Message Queue (DMQ) eligible by default. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} messagingDefaultDmqEligibleEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingDefaultDmqEligibleEnabled = undefined;

/**
 * Enable or disable whether messages sent by the Publisher (Producer) are Eliding eligible by default. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} messagingDefaultElidingEligibleEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingDefaultElidingEligibleEnabled = undefined;

/**
 * Enable or disable inclusion (adding or replacing) of the JMSXUserID property in messages sent by the Publisher (Producer). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} messagingJmsxUserIdEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingJmsxUserIdEnabled = undefined;

/**
 * Enable or disable encoding of JMS text messages in Publisher (Producer) messages as XML payload. When disabled, JMS text messages are encoded as a binary attachment. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} messagingTextInXmlPayloadEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingTextInXmlPayloadEnabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnJndiConnectionFactoryModel.prototype.msgVpnName = undefined;

/**
 * The ZLIB compression level for the connection to the broker. The value \"0\" means no compression, and the value \"-1\" means the compression level is specified in the JNDI Properties file. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`.
 * @member {Number} transportCompressionLevel
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportCompressionLevel = undefined;

/**
 * The maximum number of retry attempts to establish an initial connection to the host or list of hosts. The value \"0\" means a single attempt (no retries), and the value \"-1\" means to retry forever. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} transportConnectRetryCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportConnectRetryCount = undefined;

/**
 * The maximum number of retry attempts to establish an initial connection to each host on the list of hosts. The value \"0\" means a single attempt (no retries), and the value \"-1\" means to retry forever. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
 * @member {Number} transportConnectRetryPerHostCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportConnectRetryPerHostCount = undefined;

/**
 * The timeout for establishing an initial connection to the broker, in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30000`.
 * @member {Number} transportConnectTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportConnectTimeout = undefined;

/**
 * Enable or disable usage of Direct Transport mode. When enabled, NON-PERSISTENT messages are sent as direct messages and non-durable topic consumers and temporary queue consumers consume using direct subscriptions rather than from guaranteed endpoints. If disabled all messaging uses guaranteed transport. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} transportDirectTransportEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportDirectTransportEnabled = undefined;

/**
 * The maximum number of consecutive application-level keepalive messages sent without the broker response before the connection to the broker is closed. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} transportKeepaliveCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportKeepaliveCount = undefined;

/**
 * Enable or disable usage of application-level keepalive messages to maintain a connection with the broker. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} transportKeepaliveEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportKeepaliveEnabled = undefined;

/**
 * The interval between application-level keepalive messages, in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`.
 * @member {Number} transportKeepaliveInterval
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportKeepaliveInterval = undefined;

/**
 * Enable or disable delivery of asynchronous messages directly from the I/O thread. Contact support before enabling this property. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} transportMsgCallbackOnIoThreadEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportMsgCallbackOnIoThreadEnabled = undefined;

/**
 * Enable or disable optimization for the Direct Transport delivery mode. If enabled, the client application is limited to one Publisher (Producer) and one non-durable Subscriber (Consumer). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} transportOptimizeDirectEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportOptimizeDirectEnabled = undefined;

/**
 * The connection port number on the broker for SMF clients. The value \"-1\" means the port is specified in the JNDI Properties file. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `-1`.
 * @member {Number} transportPort
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportPort = undefined;

/**
 * The timeout for reading a reply from the broker, in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `10000`.
 * @member {Number} transportReadTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReadTimeout = undefined;

/**
 * The size of the receive socket buffer, in bytes. It corresponds to the SO_RCVBUF socket option. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `65536`.
 * @member {Number} transportReceiveBufferSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReceiveBufferSize = undefined;

/**
 * The maximum number of attempts to reconnect to the host or list of hosts after the connection has been lost. The value \"-1\" means to retry forever. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} transportReconnectRetryCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReconnectRetryCount = undefined;

/**
 * The amount of time before making another attempt to connect or reconnect to the host after the connection has been lost, in milliseconds. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3000`.
 * @member {Number} transportReconnectRetryWait
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReconnectRetryWait = undefined;

/**
 * The size of the send socket buffer, in bytes. It corresponds to the SO_SNDBUF socket option. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `65536`.
 * @member {Number} transportSendBufferSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportSendBufferSize = undefined;

/**
 * Enable or disable the TCP_NODELAY option. When enabled, Nagle's algorithm for TCP/IP congestion control (RFC 896) is disabled. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `true`.
 * @member {Boolean} transportTcpNoDelayEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportTcpNoDelayEnabled = undefined;

/**
 * Enable or disable this as an XA Connection Factory. When enabled, the Connection Factory can be cast to \"XAConnectionFactory\", \"XAQueueConnectionFactory\" or \"XATopicConnectionFactory\". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} xaEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.xaEnabled = undefined;

