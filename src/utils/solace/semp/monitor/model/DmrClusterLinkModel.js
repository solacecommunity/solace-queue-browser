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

/**
 * The DmrClusterLinkModel model module.
 * @module model/DmrClusterLinkModel
 * @version 2.36
 */
export class DmrClusterLinkModel {
  /**
   * Constructs a new <code>DmrClusterLinkModel</code>.
   * @alias module:model/DmrClusterLinkModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkModel} The populated <code>DmrClusterLinkModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkModel();
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('authenticationSchemeSecure'))
        obj.authenticationSchemeSecure = ApiClient.convertToType(data['authenticationSchemeSecure'], 'Boolean');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('clientProfileQueueControl1MaxDepth'))
        obj.clientProfileQueueControl1MaxDepth = ApiClient.convertToType(data['clientProfileQueueControl1MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueControl1MinMsgBurst'))
        obj.clientProfileQueueControl1MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueControl1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect1MaxDepth'))
        obj.clientProfileQueueDirect1MaxDepth = ApiClient.convertToType(data['clientProfileQueueDirect1MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect1MinMsgBurst'))
        obj.clientProfileQueueDirect1MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueDirect1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect2MaxDepth'))
        obj.clientProfileQueueDirect2MaxDepth = ApiClient.convertToType(data['clientProfileQueueDirect2MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect2MinMsgBurst'))
        obj.clientProfileQueueDirect2MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueDirect2MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect3MaxDepth'))
        obj.clientProfileQueueDirect3MaxDepth = ApiClient.convertToType(data['clientProfileQueueDirect3MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect3MinMsgBurst'))
        obj.clientProfileQueueDirect3MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueDirect3MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueGuaranteed1MaxDepth'))
        obj.clientProfileQueueGuaranteed1MaxDepth = ApiClient.convertToType(data['clientProfileQueueGuaranteed1MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueGuaranteed1MinMsgBurst'))
        obj.clientProfileQueueGuaranteed1MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueGuaranteed1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpCongestionWindowSize'))
        obj.clientProfileTcpCongestionWindowSize = ApiClient.convertToType(data['clientProfileTcpCongestionWindowSize'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpKeepaliveCount'))
        obj.clientProfileTcpKeepaliveCount = ApiClient.convertToType(data['clientProfileTcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpKeepaliveIdleTime'))
        obj.clientProfileTcpKeepaliveIdleTime = ApiClient.convertToType(data['clientProfileTcpKeepaliveIdleTime'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpKeepaliveInterval'))
        obj.clientProfileTcpKeepaliveInterval = ApiClient.convertToType(data['clientProfileTcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpMaxSegmentSize'))
        obj.clientProfileTcpMaxSegmentSize = ApiClient.convertToType(data['clientProfileTcpMaxSegmentSize'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpMaxWindowSize'))
        obj.clientProfileTcpMaxWindowSize = ApiClient.convertToType(data['clientProfileTcpMaxWindowSize'], 'Number');
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('egressFlowWindowSize'))
        obj.egressFlowWindowSize = ApiClient.convertToType(data['egressFlowWindowSize'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('initiator'))
        obj.initiator = ApiClient.convertToType(data['initiator'], 'String');
      if (data.hasOwnProperty('queueDeadMsgQueue'))
        obj.queueDeadMsgQueue = ApiClient.convertToType(data['queueDeadMsgQueue'], 'String');
      if (data.hasOwnProperty('queueEventSpoolUsageThreshold'))
        obj.queueEventSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['queueEventSpoolUsageThreshold']);
      if (data.hasOwnProperty('queueMaxDeliveredUnackedMsgsPerFlow'))
        obj.queueMaxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['queueMaxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSpoolUsage'))
        obj.queueMaxMsgSpoolUsage = ApiClient.convertToType(data['queueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('queueMaxRedeliveryCount'))
        obj.queueMaxRedeliveryCount = ApiClient.convertToType(data['queueMaxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('queueMaxTtl'))
        obj.queueMaxTtl = ApiClient.convertToType(data['queueMaxTtl'], 'Number');
      if (data.hasOwnProperty('queueRejectMsgToSenderOnDiscardBehavior'))
        obj.queueRejectMsgToSenderOnDiscardBehavior = ApiClient.convertToType(data['queueRejectMsgToSenderOnDiscardBehavior'], 'String');
      if (data.hasOwnProperty('queueRespectTtlEnabled'))
        obj.queueRespectTtlEnabled = ApiClient.convertToType(data['queueRespectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('remoteClusterName'))
        obj.remoteClusterName = ApiClient.convertToType(data['remoteClusterName'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
      if (data.hasOwnProperty('span'))
        obj.span = ApiClient.convertToType(data['span'], 'String');
      if (data.hasOwnProperty('transportCompressedEnabled'))
        obj.transportCompressedEnabled = ApiClient.convertToType(data['transportCompressedEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportTlsEnabled'))
        obj.transportTlsEnabled = ApiClient.convertToType(data['transportTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.AuthenticationSchemeEnum = {
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
 * The authentication scheme to be used by the Link which initiates connections to the remote node. The allowed values and their meaning are:  <pre> \"basic\" - Basic Authentication Scheme (via username and password). \"client-certificate\" - Client Certificate Authentication Scheme (via certificate file or content). </pre> 
 * @member {module:model/DmrClusterLinkModel.AuthenticationSchemeEnum} authenticationScheme
 */
DmrClusterLinkModel.prototype.authenticationScheme = undefined;

/**
 * Indicates whether certificate matching rules are used. Available since 2.28.
 * @member {Boolean} authenticationSchemeSecure
 */
DmrClusterLinkModel.prototype.authenticationSchemeSecure = undefined;

/**
 * The name of the Client Profile used by the Link.
 * @member {String} clientProfileName
 */
DmrClusterLinkModel.prototype.clientProfileName = undefined;

/**
 * The maximum depth of the \"Control 1\" (C-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueControl1MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueControl1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Control 1\" (C-1) priority queue, regardless of the `clientProfileQueueControl1MaxDepth` value.
 * @member {Number} clientProfileQueueControl1MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueControl1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 1\" (D-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueDirect1MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 1\" (D-1) priority queue, regardless of the `clientProfileQueueDirect1MaxDepth` value.
 * @member {Number} clientProfileQueueDirect1MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 2\" (D-2) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueDirect2MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect2MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 2\" (D-2) priority queue, regardless of the `clientProfileQueueDirect2MaxDepth` value.
 * @member {Number} clientProfileQueueDirect2MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect2MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 3\" (D-3) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueDirect3MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect3MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 3\" (D-3) priority queue, regardless of the `clientProfileQueueDirect3MaxDepth` value.
 * @member {Number} clientProfileQueueDirect3MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect3MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Guaranteed 1\" (G-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueGuaranteed1MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueGuaranteed1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Guaranteed 1\" (G-3) priority queue, regardless of the `clientProfileQueueGuaranteed1MaxDepth` value.
 * @member {Number} clientProfileQueueGuaranteed1MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueGuaranteed1MinMsgBurst = undefined;

/**
 * The TCP initial congestion window size, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
 * @member {Number} clientProfileTcpCongestionWindowSize
 */
DmrClusterLinkModel.prototype.clientProfileTcpCongestionWindowSize = undefined;

/**
 * The number of TCP keepalive retransmissions to be carried out before declaring that the remote end is not available.
 * @member {Number} clientProfileTcpKeepaliveCount
 */
DmrClusterLinkModel.prototype.clientProfileTcpKeepaliveCount = undefined;

/**
 * The amount of time a connection must remain idle before TCP begins sending keepalive probes, in seconds.
 * @member {Number} clientProfileTcpKeepaliveIdleTime
 */
DmrClusterLinkModel.prototype.clientProfileTcpKeepaliveIdleTime = undefined;

/**
 * The amount of time between TCP keepalive retransmissions when no acknowledgment is received, in seconds.
 * @member {Number} clientProfileTcpKeepaliveInterval
 */
DmrClusterLinkModel.prototype.clientProfileTcpKeepaliveInterval = undefined;

/**
 * The TCP maximum segment size, in bytes. Changes are applied to all existing connections.
 * @member {Number} clientProfileTcpMaxSegmentSize
 */
DmrClusterLinkModel.prototype.clientProfileTcpMaxSegmentSize = undefined;

/**
 * The TCP maximum window size, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
 * @member {Number} clientProfileTcpMaxWindowSize
 */
DmrClusterLinkModel.prototype.clientProfileTcpMaxWindowSize = undefined;

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterLinkModel.prototype.dmrClusterName = undefined;

/**
 * The number of outstanding guaranteed messages that can be sent over the Link before acknowledgment is received by the sender.
 * @member {Number} egressFlowWindowSize
 */
DmrClusterLinkModel.prototype.egressFlowWindowSize = undefined;

/**
 * Indicates whether the Link is enabled. When disabled, subscription sets of this and the remote node are not kept up-to-date, and messages are not exchanged with the remote node. Published guaranteed messages will be queued up for future delivery based on current subscription sets.
 * @member {Boolean} enabled
 */
DmrClusterLinkModel.prototype.enabled = undefined;

/**
 * The failure reason for the Link being down.
 * @member {String} failureReason
 */
DmrClusterLinkModel.prototype.failureReason = undefined;

/**
 * Allowed values for the <code>initiator</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.InitiatorEnum = {
  /**
   * value: "lexical"
   * @const
   */
  lexical: "lexical",

  /**
   * value: "local"
   * @const
   */
  local: "local",

  /**
   * value: "remote"
   * @const
   */
  remote: "remote"
};
/**
 * The initiator of the Link's TCP connections. The allowed values and their meaning are:  <pre> \"lexical\" - The \"higher\" node-name initiates. \"local\" - The local node initiates. \"remote\" - The remote node initiates. </pre> 
 * @member {module:model/DmrClusterLinkModel.InitiatorEnum} initiator
 */
DmrClusterLinkModel.prototype.initiator = undefined;

/**
 * The name of the Dead Message Queue (DMQ) used by the Queue for discarded messages.
 * @member {String} queueDeadMsgQueue
 */
DmrClusterLinkModel.prototype.queueDeadMsgQueue = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventSpoolUsageThreshold
 */
DmrClusterLinkModel.prototype.queueEventSpoolUsageThreshold = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow for the Queue.
 * @member {Number} queueMaxDeliveredUnackedMsgsPerFlow
 */
DmrClusterLinkModel.prototype.queueMaxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The maximum message spool usage by the Queue (quota), in megabytes (MB).
 * @member {Number} queueMaxMsgSpoolUsage
 */
DmrClusterLinkModel.prototype.queueMaxMsgSpoolUsage = undefined;

/**
 * The maximum number of times the Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
 * @member {Number} queueMaxRedeliveryCount
 */
DmrClusterLinkModel.prototype.queueMaxRedeliveryCount = undefined;

/**
 * The maximum time in seconds a message can stay in the Queue when `queueRespectTtlEnabled` is `true`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `queueMaxTtl` configured for the Queue, is exceeded. A value of 0 disables expiry.
 * @member {Number} queueMaxTtl
 */
DmrClusterLinkModel.prototype.queueMaxTtl = undefined;

/**
 * Allowed values for the <code>queueRejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum = {
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
 * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. The allowed values and their meaning are:  <pre> \"never\" - Silently discard messages. \"when-queue-enabled\" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled. \"always\" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled. </pre> 
 * @member {module:model/DmrClusterLinkModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum} queueRejectMsgToSenderOnDiscardBehavior
 */
DmrClusterLinkModel.prototype.queueRejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * Indicates whether the the time-to-live (TTL) for messages in the Queue is respected. When enabled, expired messages are discarded or moved to the DMQ.
 * @member {Boolean} queueRespectTtlEnabled
 */
DmrClusterLinkModel.prototype.queueRespectTtlEnabled = undefined;

/**
 * The cluster name of the remote node. Available since 2.17.
 * @member {String} remoteClusterName
 */
DmrClusterLinkModel.prototype.remoteClusterName = undefined;

/**
 * The name of the node at the remote end of the Link.
 * @member {String} remoteNodeName
 */
DmrClusterLinkModel.prototype.remoteNodeName = undefined;

/**
 * Allowed values for the <code>span</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.SpanEnum = {
  /**
   * value: "internal"
   * @const
   */
  internal: "internal",

  /**
   * value: "external"
   * @const
   */
  external: "external"
};
/**
 * The span of the Link, either internal or external. Internal Links connect nodes within the same Cluster. External Links connect nodes within different Clusters. The allowed values and their meaning are:  <pre> \"internal\" - Link to same cluster. \"external\" - Link to other cluster. </pre> 
 * @member {module:model/DmrClusterLinkModel.SpanEnum} span
 */
DmrClusterLinkModel.prototype.span = undefined;

/**
 * Indicates whether compression is enabled on the Link.
 * @member {Boolean} transportCompressedEnabled
 */
DmrClusterLinkModel.prototype.transportCompressedEnabled = undefined;

/**
 * Indicates whether encryption (TLS) is enabled on the Link.
 * @member {Boolean} transportTlsEnabled
 */
DmrClusterLinkModel.prototype.transportTlsEnabled = undefined;

/**
 * Indicates whether the Link is operationally up.
 * @member {Boolean} up
 */
DmrClusterLinkModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Link was up.
 * @member {Number} uptime
 */
DmrClusterLinkModel.prototype.uptime = undefined;

