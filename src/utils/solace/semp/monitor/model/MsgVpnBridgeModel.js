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
import {MsgVpnBridgeCounterModel} from './MsgVpnBridgeCounterModel';
import {MsgVpnBridgeRateModel} from './MsgVpnBridgeRateModel';

/**
 * The MsgVpnBridgeModel model module.
 * @module model/MsgVpnBridgeModel
 * @version 2.36
 */
export class MsgVpnBridgeModel {
  /**
   * Constructs a new <code>MsgVpnBridgeModel</code>.
   * @alias module:model/MsgVpnBridgeModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeModel} The populated <code>MsgVpnBridgeModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeModel();
      if (data.hasOwnProperty('averageRxByteRate'))
        obj.averageRxByteRate = ApiClient.convertToType(data['averageRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxMsgRate'))
        obj.averageRxMsgRate = ApiClient.convertToType(data['averageRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageTxByteRate'))
        obj.averageTxByteRate = ApiClient.convertToType(data['averageTxByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxMsgRate'))
        obj.averageTxMsgRate = ApiClient.convertToType(data['averageTxMsgRate'], 'Number');
      if (data.hasOwnProperty('boundToQueue'))
        obj.boundToQueue = ApiClient.convertToType(data['boundToQueue'], 'Boolean');
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('bridgeVirtualRouter'))
        obj.bridgeVirtualRouter = ApiClient.convertToType(data['bridgeVirtualRouter'], 'String');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('compressed'))
        obj.compressed = ApiClient.convertToType(data['compressed'], 'Boolean');
      if (data.hasOwnProperty('controlRxByteCount'))
        obj.controlRxByteCount = ApiClient.convertToType(data['controlRxByteCount'], 'Number');
      if (data.hasOwnProperty('controlRxMsgCount'))
        obj.controlRxMsgCount = ApiClient.convertToType(data['controlRxMsgCount'], 'Number');
      if (data.hasOwnProperty('controlTxByteCount'))
        obj.controlTxByteCount = ApiClient.convertToType(data['controlTxByteCount'], 'Number');
      if (data.hasOwnProperty('controlTxMsgCount'))
        obj.controlTxMsgCount = ApiClient.convertToType(data['controlTxMsgCount'], 'Number');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnBridgeCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('dataRxByteCount'))
        obj.dataRxByteCount = ApiClient.convertToType(data['dataRxByteCount'], 'Number');
      if (data.hasOwnProperty('dataRxMsgCount'))
        obj.dataRxMsgCount = ApiClient.convertToType(data['dataRxMsgCount'], 'Number');
      if (data.hasOwnProperty('dataTxByteCount'))
        obj.dataTxByteCount = ApiClient.convertToType(data['dataTxByteCount'], 'Number');
      if (data.hasOwnProperty('dataTxMsgCount'))
        obj.dataTxMsgCount = ApiClient.convertToType(data['dataTxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedRxMsgCount'))
        obj.discardedRxMsgCount = ApiClient.convertToType(data['discardedRxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedTxMsgCount'))
        obj.discardedTxMsgCount = ApiClient.convertToType(data['discardedTxMsgCount'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('encrypted'))
        obj.encrypted = ApiClient.convertToType(data['encrypted'], 'Boolean');
      if (data.hasOwnProperty('establisher'))
        obj.establisher = ApiClient.convertToType(data['establisher'], 'String');
      if (data.hasOwnProperty('inboundFailureReason'))
        obj.inboundFailureReason = ApiClient.convertToType(data['inboundFailureReason'], 'String');
      if (data.hasOwnProperty('inboundState'))
        obj.inboundState = ApiClient.convertToType(data['inboundState'], 'String');
      if (data.hasOwnProperty('lastTxMsgId'))
        obj.lastTxMsgId = ApiClient.convertToType(data['lastTxMsgId'], 'Number');
      if (data.hasOwnProperty('localInterface'))
        obj.localInterface = ApiClient.convertToType(data['localInterface'], 'String');
      if (data.hasOwnProperty('localQueueName'))
        obj.localQueueName = ApiClient.convertToType(data['localQueueName'], 'String');
      if (data.hasOwnProperty('loginRxMsgCount'))
        obj.loginRxMsgCount = ApiClient.convertToType(data['loginRxMsgCount'], 'Number');
      if (data.hasOwnProperty('loginTxMsgCount'))
        obj.loginTxMsgCount = ApiClient.convertToType(data['loginTxMsgCount'], 'Number');
      if (data.hasOwnProperty('maxTtl'))
        obj.maxTtl = ApiClient.convertToType(data['maxTtl'], 'Number');
      if (data.hasOwnProperty('msgSpoolRxMsgCount'))
        obj.msgSpoolRxMsgCount = ApiClient.convertToType(data['msgSpoolRxMsgCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('outboundState'))
        obj.outboundState = ApiClient.convertToType(data['outboundState'], 'String');
      if (data.hasOwnProperty('rate'))
        obj.rate = MsgVpnBridgeRateModel.constructFromObject(data['rate']);
      if (data.hasOwnProperty('remoteAddress'))
        obj.remoteAddress = ApiClient.convertToType(data['remoteAddress'], 'String');
      if (data.hasOwnProperty('remoteAuthenticationBasicClientUsername'))
        obj.remoteAuthenticationBasicClientUsername = ApiClient.convertToType(data['remoteAuthenticationBasicClientUsername'], 'String');
      if (data.hasOwnProperty('remoteAuthenticationClientCertConfigTime'))
        obj.remoteAuthenticationClientCertConfigTime = ApiClient.convertToType(data['remoteAuthenticationClientCertConfigTime'], 'Number');
      if (data.hasOwnProperty('remoteAuthenticationClientCertThumbprint'))
        obj.remoteAuthenticationClientCertThumbprint = ApiClient.convertToType(data['remoteAuthenticationClientCertThumbprint'], 'String');
      if (data.hasOwnProperty('remoteAuthenticationScheme'))
        obj.remoteAuthenticationScheme = ApiClient.convertToType(data['remoteAuthenticationScheme'], 'String');
      if (data.hasOwnProperty('remoteConnectionRetryCount'))
        obj.remoteConnectionRetryCount = ApiClient.convertToType(data['remoteConnectionRetryCount'], 'Number');
      if (data.hasOwnProperty('remoteConnectionRetryDelay'))
        obj.remoteConnectionRetryDelay = ApiClient.convertToType(data['remoteConnectionRetryDelay'], 'Number');
      if (data.hasOwnProperty('remoteDeliverToOnePriority'))
        obj.remoteDeliverToOnePriority = ApiClient.convertToType(data['remoteDeliverToOnePriority'], 'String');
      if (data.hasOwnProperty('remoteMsgVpnName'))
        obj.remoteMsgVpnName = ApiClient.convertToType(data['remoteMsgVpnName'], 'String');
      if (data.hasOwnProperty('remoteRouterName'))
        obj.remoteRouterName = ApiClient.convertToType(data['remoteRouterName'], 'String');
      if (data.hasOwnProperty('remoteTxFlowId'))
        obj.remoteTxFlowId = ApiClient.convertToType(data['remoteTxFlowId'], 'Number');
      if (data.hasOwnProperty('rxByteCount'))
        obj.rxByteCount = ApiClient.convertToType(data['rxByteCount'], 'Number');
      if (data.hasOwnProperty('rxByteRate'))
        obj.rxByteRate = ApiClient.convertToType(data['rxByteRate'], 'Number');
      if (data.hasOwnProperty('rxConnectionFailureCategory'))
        obj.rxConnectionFailureCategory = ApiClient.convertToType(data['rxConnectionFailureCategory'], 'String');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxMsgRate'))
        obj.rxMsgRate = ApiClient.convertToType(data['rxMsgRate'], 'Number');
      if (data.hasOwnProperty('tlsCipherSuiteList'))
        obj.tlsCipherSuiteList = ApiClient.convertToType(data['tlsCipherSuiteList'], 'String');
      if (data.hasOwnProperty('tlsDefaultCipherSuiteList'))
        obj.tlsDefaultCipherSuiteList = ApiClient.convertToType(data['tlsDefaultCipherSuiteList'], 'Boolean');
      if (data.hasOwnProperty('ttlExceededEventRaised'))
        obj.ttlExceededEventRaised = ApiClient.convertToType(data['ttlExceededEventRaised'], 'Boolean');
      if (data.hasOwnProperty('txByteCount'))
        obj.txByteCount = ApiClient.convertToType(data['txByteCount'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txMsgCount'))
        obj.txMsgCount = ApiClient.convertToType(data['txMsgCount'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * The one minute average of the message rate received from the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageRxByteRate
 */
MsgVpnBridgeModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the message rate received from the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageRxMsgRate
 */
MsgVpnBridgeModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageTxByteRate
 */
MsgVpnBridgeModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageTxMsgRate
 */
MsgVpnBridgeModel.prototype.averageTxMsgRate = undefined;

/**
 * Indicates whether the Bridge is bound to the queue in the remote Message VPN.
 * @member {Boolean} boundToQueue
 */
MsgVpnBridgeModel.prototype.boundToQueue = undefined;

/**
 * The name of the Bridge.
 * @member {String} bridgeName
 */
MsgVpnBridgeModel.prototype.bridgeName = undefined;

/**
 * Allowed values for the <code>bridgeVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeModel.BridgeVirtualRouterEnum = {
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
 * The virtual router of the Bridge. The allowed values and their meaning are:  <pre> \"primary\" - The Bridge is used for the primary virtual router. \"backup\" - The Bridge is used for the backup virtual router. \"auto\" - The Bridge is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre> 
 * @member {module:model/MsgVpnBridgeModel.BridgeVirtualRouterEnum} bridgeVirtualRouter
 */
MsgVpnBridgeModel.prototype.bridgeVirtualRouter = undefined;

/**
 * The name of the Client for the Bridge.
 * @member {String} clientName
 */
MsgVpnBridgeModel.prototype.clientName = undefined;

/**
 * Indicates whether messages transmitted over the Bridge are compressed.
 * @member {Boolean} compressed
 */
MsgVpnBridgeModel.prototype.compressed = undefined;

/**
 * The amount of client control messages received from the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} controlRxByteCount
 */
MsgVpnBridgeModel.prototype.controlRxByteCount = undefined;

/**
 * The number of client control messages received from the Bridge. Available since 2.13.
 * @member {Number} controlRxMsgCount
 */
MsgVpnBridgeModel.prototype.controlRxMsgCount = undefined;

/**
 * The amount of client control messages transmitted to the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} controlTxByteCount
 */
MsgVpnBridgeModel.prototype.controlTxByteCount = undefined;

/**
 * The number of client control messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} controlTxMsgCount
 */
MsgVpnBridgeModel.prototype.controlTxMsgCount = undefined;

/**
 * @member {module:model/MsgVpnBridgeCounterModel} counter
 */
MsgVpnBridgeModel.prototype.counter = undefined;

/**
 * The amount of client data messages received from the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} dataRxByteCount
 */
MsgVpnBridgeModel.prototype.dataRxByteCount = undefined;

/**
 * The number of client data messages received from the Bridge. Available since 2.13.
 * @member {Number} dataRxMsgCount
 */
MsgVpnBridgeModel.prototype.dataRxMsgCount = undefined;

/**
 * The amount of client data messages transmitted to the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} dataTxByteCount
 */
MsgVpnBridgeModel.prototype.dataTxByteCount = undefined;

/**
 * The number of client data messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} dataTxMsgCount
 */
MsgVpnBridgeModel.prototype.dataTxMsgCount = undefined;

/**
 * The number of messages discarded during reception from the Bridge. Available since 2.13.
 * @member {Number} discardedRxMsgCount
 */
MsgVpnBridgeModel.prototype.discardedRxMsgCount = undefined;

/**
 * The number of messages discarded during transmission to the Bridge. Available since 2.13.
 * @member {Number} discardedTxMsgCount
 */
MsgVpnBridgeModel.prototype.discardedTxMsgCount = undefined;

/**
 * Indicates whether the Bridge is enabled.
 * @member {Boolean} enabled
 */
MsgVpnBridgeModel.prototype.enabled = undefined;

/**
 * Indicates whether messages transmitted over the Bridge are encrypted with TLS.
 * @member {Boolean} encrypted
 */
MsgVpnBridgeModel.prototype.encrypted = undefined;

/**
 * The establisher of the Bridge connection. The allowed values and their meaning are:  <pre> \"local\" - The Bridge connection was established by the local Message VPN. \"remote\" - The Bridge connection was established by the remote Message VPN. </pre> 
 * @member {String} establisher
 */
MsgVpnBridgeModel.prototype.establisher = undefined;

/**
 * The reason for the inbound connection failure from the Bridge. If there is no failure reason, an empty string (\"\") is returned.
 * @member {String} inboundFailureReason
 */
MsgVpnBridgeModel.prototype.inboundFailureReason = undefined;

/**
 * The state of the inbound connection from the Bridge. The allowed values and their meaning are:  <pre> \"init\" - The bridge is down but is initializing. \"disabled\" - The bridge is down. It has been disabled by configuration. \"prepare-wait-to-connect\" - The bridge is down. It is waiting to connect to the remote broker. \"prepare-fetching-dns\" - The bridge is down. The domain name of the remote broker is being resolved. \"not-ready-connecting\" - The bridge is down. It is in the process of connecting to the remote broker. \"not-ready-handshaking\" - The bridge is down. It has connected to the remote broker, and is in the process of negotiating with it. \"not-ready-wait-next\" - The bridge is down. It has failed to connect to a remote broker, and is waiting for the configured remote retry delay to expire before retrying. \"not-ready-wait-reuse\" - The bridge is down. It established its own connection to  the remote broker, but determined instead that it should use a pre-existing connection established from that remote broker. It is waiting for its own connection to close before reusing the existing connection. \"not-ready-wait-bridge-version-mismatch\" - The bridge is down. The connection failed to connect due to the remote broker presenting an unexpected version. \"not-ready-wait-cleanup\" - The bridge is down. Its connection has closed and is in the process of being cleaned up. \"ready-subscribing\" - The bridge is up and is attracting traffic. It is in the process of adding configured subscriptions to the  remote broker. \"ready-in-sync\" - The bridge is up and is attracting traffic. All configured subscriptions have been added to the remote broker. \"stalled\" - The bridge is down. Inbound guaranteed messages are not flowing. Administrative actions may be required to clear this state. \"not-applicable\" - The connection is not relevant in the inbound direction. </pre> 
 * @member {String} inboundState
 */
MsgVpnBridgeModel.prototype.inboundState = undefined;

/**
 * The ID of the last message transmitted to the Bridge.
 * @member {Number} lastTxMsgId
 */
MsgVpnBridgeModel.prototype.lastTxMsgId = undefined;

/**
 * The physical interface on the local Message VPN host for connecting to the remote Message VPN.
 * @member {String} localInterface
 */
MsgVpnBridgeModel.prototype.localInterface = undefined;

/**
 * The name of the local queue for the Bridge.
 * @member {String} localQueueName
 */
MsgVpnBridgeModel.prototype.localQueueName = undefined;

/**
 * The number of login request messages received from the Bridge. Available since 2.13.
 * @member {Number} loginRxMsgCount
 */
MsgVpnBridgeModel.prototype.loginRxMsgCount = undefined;

/**
 * The number of login response messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} loginTxMsgCount
 */
MsgVpnBridgeModel.prototype.loginTxMsgCount = undefined;

/**
 * The maximum time-to-live (TTL) in hops. Messages are discarded if their TTL exceeds this value.
 * @member {Number} maxTtl
 */
MsgVpnBridgeModel.prototype.maxTtl = undefined;

/**
 * The number of guaranteed messages received from the Bridge. Available since 2.13.
 * @member {Number} msgSpoolRxMsgCount
 */
MsgVpnBridgeModel.prototype.msgSpoolRxMsgCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnBridgeModel.prototype.msgVpnName = undefined;

/**
 * The state of the outbound connection to the Bridge. The allowed values and their meaning are:  <pre> \"ready\" - The bridge is up and is delivering traffic. \"not-applicable\" - The connection is not relevant in the outbound direction. </pre> 
 * @member {String} outboundState
 */
MsgVpnBridgeModel.prototype.outboundState = undefined;

/**
 * @member {module:model/MsgVpnBridgeRateModel} rate
 */
MsgVpnBridgeModel.prototype.rate = undefined;

/**
 * The FQDN or IP address of the remote Message VPN.
 * @member {String} remoteAddress
 */
MsgVpnBridgeModel.prototype.remoteAddress = undefined;

/**
 * The Client Username the Bridge uses to login to the remote Message VPN.
 * @member {String} remoteAuthenticationBasicClientUsername
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationBasicClientUsername = undefined;

/**
 * The timestamp of when the client-certificate was configured. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.28.
 * @member {Number} remoteAuthenticationClientCertConfigTime
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationClientCertConfigTime = undefined;

/**
 * The thumbprint of the client-certificate. Available since 2.28.
 * @member {String} remoteAuthenticationClientCertThumbprint
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationClientCertThumbprint = undefined;

/**
 * Allowed values for the <code>remoteAuthenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeModel.RemoteAuthenticationSchemeEnum = {
  /**
   * value: "basic"
   * @const
   */
  basic: "basic",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate"
};
/**
 * The authentication scheme for the remote Message VPN. The allowed values and their meaning are:  <pre> \"basic\" - Basic Authentication Scheme (via username and password). \"client-certificate\" - Client Certificate Authentication Scheme (via certificate file or content). </pre> 
 * @member {module:model/MsgVpnBridgeModel.RemoteAuthenticationSchemeEnum} remoteAuthenticationScheme
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationScheme = undefined;

/**
 * The maximum number of retry attempts to establish a connection to the remote Message VPN. A value of 0 means to retry forever.
 * @member {Number} remoteConnectionRetryCount
 */
MsgVpnBridgeModel.prototype.remoteConnectionRetryCount = undefined;

/**
 * The number of seconds the broker waits for the bridge connection to be established before attempting a new connection.
 * @member {Number} remoteConnectionRetryDelay
 */
MsgVpnBridgeModel.prototype.remoteConnectionRetryDelay = undefined;

/**
 * Allowed values for the <code>remoteDeliverToOnePriority</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeModel.RemoteDeliverToOnePriorityEnum = {
  /**
   * value: "p1"
   * @const
   */
  p1: "p1",

  /**
   * value: "p2"
   * @const
   */
  p2: "p2",

  /**
   * value: "p3"
   * @const
   */
  p3: "p3",

  /**
   * value: "p4"
   * @const
   */
  p4: "p4",

  /**
   * value: "da"
   * @const
   */
  da: "da"
};
/**
 * The priority for deliver-to-one (DTO) messages transmitted from the remote Message VPN. The allowed values and their meaning are:  <pre> \"p1\" - The 1st or highest priority. \"p2\" - The 2nd highest priority. \"p3\" - The 3rd highest priority. \"p4\" - The 4th highest priority. \"da\" - Ignore priority and deliver always. </pre> 
 * @member {module:model/MsgVpnBridgeModel.RemoteDeliverToOnePriorityEnum} remoteDeliverToOnePriority
 */
MsgVpnBridgeModel.prototype.remoteDeliverToOnePriority = undefined;

/**
 * The name of the remote Message VPN.
 * @member {String} remoteMsgVpnName
 */
MsgVpnBridgeModel.prototype.remoteMsgVpnName = undefined;

/**
 * The name of the remote broker.
 * @member {String} remoteRouterName
 */
MsgVpnBridgeModel.prototype.remoteRouterName = undefined;

/**
 * The ID of the transmit flow for the connected remote Message VPN.
 * @member {Number} remoteTxFlowId
 */
MsgVpnBridgeModel.prototype.remoteTxFlowId = undefined;

/**
 * The amount of messages received from the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} rxByteCount
 */
MsgVpnBridgeModel.prototype.rxByteCount = undefined;

/**
 * The current message rate received from the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} rxByteRate
 */
MsgVpnBridgeModel.prototype.rxByteRate = undefined;

/**
 * The category of the inbound connection failure from the Bridge. The allowed values and their meaning are:  <pre> \"no-failure\" - There is no bridge failure. \"local-configuration-problem\" - The bridge failure is a local configuration problem. \"local-operational-state-problem\" - The bridge failure is an operational state problem. </pre>  Available since 2.18.
 * @member {String} rxConnectionFailureCategory
 */
MsgVpnBridgeModel.prototype.rxConnectionFailureCategory = undefined;

/**
 * The number of messages received from the Bridge. Available since 2.13.
 * @member {Number} rxMsgCount
 */
MsgVpnBridgeModel.prototype.rxMsgCount = undefined;

/**
 * The current message rate received from the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} rxMsgRate
 */
MsgVpnBridgeModel.prototype.rxMsgRate = undefined;

/**
 * The colon-separated list of cipher suites supported for TLS connections to the remote Message VPN. The value \"default\" implies all supported suites ordered from most secure to least secure.
 * @member {String} tlsCipherSuiteList
 */
MsgVpnBridgeModel.prototype.tlsCipherSuiteList = undefined;

/**
 * Indicates whether the Bridge is configured to use the default cipher-suite list.
 * @member {Boolean} tlsDefaultCipherSuiteList
 */
MsgVpnBridgeModel.prototype.tlsDefaultCipherSuiteList = undefined;

/**
 * Indicates whether the TTL (hops) exceeded event has been raised.
 * @member {Boolean} ttlExceededEventRaised
 */
MsgVpnBridgeModel.prototype.ttlExceededEventRaised = undefined;

/**
 * The amount of messages transmitted to the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} txByteCount
 */
MsgVpnBridgeModel.prototype.txByteCount = undefined;

/**
 * The current message rate transmitted to the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} txByteRate
 */
MsgVpnBridgeModel.prototype.txByteRate = undefined;

/**
 * The number of messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} txMsgCount
 */
MsgVpnBridgeModel.prototype.txMsgCount = undefined;

/**
 * The current message rate transmitted to the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} txMsgRate
 */
MsgVpnBridgeModel.prototype.txMsgRate = undefined;

/**
 * The amount of time in seconds since the Bridge connected to the remote Message VPN.
 * @member {Number} uptime
 */
MsgVpnBridgeModel.prototype.uptime = undefined;

