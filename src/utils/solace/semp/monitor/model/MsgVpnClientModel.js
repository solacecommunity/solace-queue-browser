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

/**
 * The MsgVpnClientModel model module.
 * @module model/MsgVpnClientModel
 * @version 2.36
 */
export class MsgVpnClientModel {
  /**
   * Constructs a new <code>MsgVpnClientModel</code>.
   * @alias module:model/MsgVpnClientModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientModel} The populated <code>MsgVpnClientModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('aliasedFromMsgVpnName'))
        obj.aliasedFromMsgVpnName = ApiClient.convertToType(data['aliasedFromMsgVpnName'], 'String');
      if (data.hasOwnProperty('alreadyBoundBindFailureCount'))
        obj.alreadyBoundBindFailureCount = ApiClient.convertToType(data['alreadyBoundBindFailureCount'], 'Number');
      if (data.hasOwnProperty('authorizationGroupName'))
        obj.authorizationGroupName = ApiClient.convertToType(data['authorizationGroupName'], 'String');
      if (data.hasOwnProperty('averageRxByteRate'))
        obj.averageRxByteRate = ApiClient.convertToType(data['averageRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxMsgRate'))
        obj.averageRxMsgRate = ApiClient.convertToType(data['averageRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageTxByteRate'))
        obj.averageTxByteRate = ApiClient.convertToType(data['averageTxByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxMsgRate'))
        obj.averageTxMsgRate = ApiClient.convertToType(data['averageTxMsgRate'], 'Number');
      if (data.hasOwnProperty('bindRequestCount'))
        obj.bindRequestCount = ApiClient.convertToType(data['bindRequestCount'], 'Number');
      if (data.hasOwnProperty('bindSuccessCount'))
        obj.bindSuccessCount = ApiClient.convertToType(data['bindSuccessCount'], 'Number');
      if (data.hasOwnProperty('clientAddress'))
        obj.clientAddress = ApiClient.convertToType(data['clientAddress'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'Number');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('clientUsername'))
        obj.clientUsername = ApiClient.convertToType(data['clientUsername'], 'String');
      if (data.hasOwnProperty('controlRxByteCount'))
        obj.controlRxByteCount = ApiClient.convertToType(data['controlRxByteCount'], 'Number');
      if (data.hasOwnProperty('controlRxMsgCount'))
        obj.controlRxMsgCount = ApiClient.convertToType(data['controlRxMsgCount'], 'Number');
      if (data.hasOwnProperty('controlTxByteCount'))
        obj.controlTxByteCount = ApiClient.convertToType(data['controlTxByteCount'], 'Number');
      if (data.hasOwnProperty('controlTxMsgCount'))
        obj.controlTxMsgCount = ApiClient.convertToType(data['controlTxMsgCount'], 'Number');
      if (data.hasOwnProperty('cutThroughDeniedBindFailureCount'))
        obj.cutThroughDeniedBindFailureCount = ApiClient.convertToType(data['cutThroughDeniedBindFailureCount'], 'Number');
      if (data.hasOwnProperty('dataRxByteCount'))
        obj.dataRxByteCount = ApiClient.convertToType(data['dataRxByteCount'], 'Number');
      if (data.hasOwnProperty('dataRxMsgCount'))
        obj.dataRxMsgCount = ApiClient.convertToType(data['dataRxMsgCount'], 'Number');
      if (data.hasOwnProperty('dataTxByteCount'))
        obj.dataTxByteCount = ApiClient.convertToType(data['dataTxByteCount'], 'Number');
      if (data.hasOwnProperty('dataTxMsgCount'))
        obj.dataTxMsgCount = ApiClient.convertToType(data['dataTxMsgCount'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('disabledBindFailureCount'))
        obj.disabledBindFailureCount = ApiClient.convertToType(data['disabledBindFailureCount'], 'Number');
      if (data.hasOwnProperty('dtoLocalPriority'))
        obj.dtoLocalPriority = ApiClient.convertToType(data['dtoLocalPriority'], 'Number');
      if (data.hasOwnProperty('dtoNetworkPriority'))
        obj.dtoNetworkPriority = ApiClient.convertToType(data['dtoNetworkPriority'], 'Number');
      if (data.hasOwnProperty('eliding'))
        obj.eliding = ApiClient.convertToType(data['eliding'], 'Boolean');
      if (data.hasOwnProperty('elidingTopicCount'))
        obj.elidingTopicCount = ApiClient.convertToType(data['elidingTopicCount'], 'Number');
      if (data.hasOwnProperty('elidingTopicPeakCount'))
        obj.elidingTopicPeakCount = ApiClient.convertToType(data['elidingTopicPeakCount'], 'Number');
      if (data.hasOwnProperty('guaranteedDeniedBindFailureCount'))
        obj.guaranteedDeniedBindFailureCount = ApiClient.convertToType(data['guaranteedDeniedBindFailureCount'], 'Number');
      if (data.hasOwnProperty('invalidSelectorBindFailureCount'))
        obj.invalidSelectorBindFailureCount = ApiClient.convertToType(data['invalidSelectorBindFailureCount'], 'Number');
      if (data.hasOwnProperty('keepalive'))
        obj.keepalive = ApiClient.convertToType(data['keepalive'], 'Boolean');
      if (data.hasOwnProperty('keepaliveEffectiveTimeout'))
        obj.keepaliveEffectiveTimeout = ApiClient.convertToType(data['keepaliveEffectiveTimeout'], 'Number');
      if (data.hasOwnProperty('largeMsgEventRaised'))
        obj.largeMsgEventRaised = ApiClient.convertToType(data['largeMsgEventRaised'], 'Boolean');
      if (data.hasOwnProperty('loginRxMsgCount'))
        obj.loginRxMsgCount = ApiClient.convertToType(data['loginRxMsgCount'], 'Number');
      if (data.hasOwnProperty('loginTxMsgCount'))
        obj.loginTxMsgCount = ApiClient.convertToType(data['loginTxMsgCount'], 'Number');
      if (data.hasOwnProperty('maxBindCountExceededBindFailureCount'))
        obj.maxBindCountExceededBindFailureCount = ApiClient.convertToType(data['maxBindCountExceededBindFailureCount'], 'Number');
      if (data.hasOwnProperty('maxElidingTopicCountEventRaised'))
        obj.maxElidingTopicCountEventRaised = ApiClient.convertToType(data['maxElidingTopicCountEventRaised'], 'Boolean');
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
      if (data.hasOwnProperty('msgSpoolCongestionRxDiscardedMsgCount'))
        obj.msgSpoolCongestionRxDiscardedMsgCount = ApiClient.convertToType(data['msgSpoolCongestionRxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolRxDiscardedMsgCount'))
        obj.msgSpoolRxDiscardedMsgCount = ApiClient.convertToType(data['msgSpoolRxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('noLocalDelivery'))
        obj.noLocalDelivery = ApiClient.convertToType(data['noLocalDelivery'], 'Boolean');
      if (data.hasOwnProperty('noSubscriptionMatchRxDiscardedMsgCount'))
        obj.noSubscriptionMatchRxDiscardedMsgCount = ApiClient.convertToType(data['noSubscriptionMatchRxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('originalClientUsername'))
        obj.originalClientUsername = ApiClient.convertToType(data['originalClientUsername'], 'String');
      if (data.hasOwnProperty('otherBindFailureCount'))
        obj.otherBindFailureCount = ApiClient.convertToType(data['otherBindFailureCount'], 'Number');
      if (data.hasOwnProperty('platform'))
        obj.platform = ApiClient.convertToType(data['platform'], 'String');
      if (data.hasOwnProperty('publishTopicAclRxDiscardedMsgCount'))
        obj.publishTopicAclRxDiscardedMsgCount = ApiClient.convertToType(data['publishTopicAclRxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpRequestRxByteCount'))
        obj.restHttpRequestRxByteCount = ApiClient.convertToType(data['restHttpRequestRxByteCount'], 'Number');
      if (data.hasOwnProperty('restHttpRequestRxMsgCount'))
        obj.restHttpRequestRxMsgCount = ApiClient.convertToType(data['restHttpRequestRxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpRequestTxByteCount'))
        obj.restHttpRequestTxByteCount = ApiClient.convertToType(data['restHttpRequestTxByteCount'], 'Number');
      if (data.hasOwnProperty('restHttpRequestTxMsgCount'))
        obj.restHttpRequestTxMsgCount = ApiClient.convertToType(data['restHttpRequestTxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseErrorRxMsgCount'))
        obj.restHttpResponseErrorRxMsgCount = ApiClient.convertToType(data['restHttpResponseErrorRxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseErrorTxMsgCount'))
        obj.restHttpResponseErrorTxMsgCount = ApiClient.convertToType(data['restHttpResponseErrorTxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseRxByteCount'))
        obj.restHttpResponseRxByteCount = ApiClient.convertToType(data['restHttpResponseRxByteCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseRxMsgCount'))
        obj.restHttpResponseRxMsgCount = ApiClient.convertToType(data['restHttpResponseRxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseSuccessRxMsgCount'))
        obj.restHttpResponseSuccessRxMsgCount = ApiClient.convertToType(data['restHttpResponseSuccessRxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseSuccessTxMsgCount'))
        obj.restHttpResponseSuccessTxMsgCount = ApiClient.convertToType(data['restHttpResponseSuccessTxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseTimeoutRxMsgCount'))
        obj.restHttpResponseTimeoutRxMsgCount = ApiClient.convertToType(data['restHttpResponseTimeoutRxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseTimeoutTxMsgCount'))
        obj.restHttpResponseTimeoutTxMsgCount = ApiClient.convertToType(data['restHttpResponseTimeoutTxMsgCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseTxByteCount'))
        obj.restHttpResponseTxByteCount = ApiClient.convertToType(data['restHttpResponseTxByteCount'], 'Number');
      if (data.hasOwnProperty('restHttpResponseTxMsgCount'))
        obj.restHttpResponseTxMsgCount = ApiClient.convertToType(data['restHttpResponseTxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxByteCount'))
        obj.rxByteCount = ApiClient.convertToType(data['rxByteCount'], 'Number');
      if (data.hasOwnProperty('rxByteRate'))
        obj.rxByteRate = ApiClient.convertToType(data['rxByteRate'], 'Number');
      if (data.hasOwnProperty('rxDiscardedMsgCount'))
        obj.rxDiscardedMsgCount = ApiClient.convertToType(data['rxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxMsgRate'))
        obj.rxMsgRate = ApiClient.convertToType(data['rxMsgRate'], 'Number');
      if (data.hasOwnProperty('scheduledDisconnectTime'))
        obj.scheduledDisconnectTime = ApiClient.convertToType(data['scheduledDisconnectTime'], 'Number');
      if (data.hasOwnProperty('slowSubscriber'))
        obj.slowSubscriber = ApiClient.convertToType(data['slowSubscriber'], 'Boolean');
      if (data.hasOwnProperty('softwareDate'))
        obj.softwareDate = ApiClient.convertToType(data['softwareDate'], 'String');
      if (data.hasOwnProperty('softwareVersion'))
        obj.softwareVersion = ApiClient.convertToType(data['softwareVersion'], 'String');
      if (data.hasOwnProperty('tlsCipherDescription'))
        obj.tlsCipherDescription = ApiClient.convertToType(data['tlsCipherDescription'], 'String');
      if (data.hasOwnProperty('tlsDowngradedToPlainText'))
        obj.tlsDowngradedToPlainText = ApiClient.convertToType(data['tlsDowngradedToPlainText'], 'Boolean');
      if (data.hasOwnProperty('tlsVersion'))
        obj.tlsVersion = ApiClient.convertToType(data['tlsVersion'], 'String');
      if (data.hasOwnProperty('topicParseErrorRxDiscardedMsgCount'))
        obj.topicParseErrorRxDiscardedMsgCount = ApiClient.convertToType(data['topicParseErrorRxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('txByteCount'))
        obj.txByteCount = ApiClient.convertToType(data['txByteCount'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txDiscardedMsgCount'))
        obj.txDiscardedMsgCount = ApiClient.convertToType(data['txDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('txMsgCount'))
        obj.txMsgCount = ApiClient.convertToType(data['txMsgCount'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('virtualRouter'))
        obj.virtualRouter = ApiClient.convertToType(data['virtualRouter'], 'String');
      if (data.hasOwnProperty('webInactiveTimeout'))
        obj.webInactiveTimeout = ApiClient.convertToType(data['webInactiveTimeout'], 'Number');
      if (data.hasOwnProperty('webMaxPayload'))
        obj.webMaxPayload = ApiClient.convertToType(data['webMaxPayload'], 'Number');
      if (data.hasOwnProperty('webParseErrorRxDiscardedMsgCount'))
        obj.webParseErrorRxDiscardedMsgCount = ApiClient.convertToType(data['webParseErrorRxDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('webRemainingTimeout'))
        obj.webRemainingTimeout = ApiClient.convertToType(data['webRemainingTimeout'], 'Number');
      if (data.hasOwnProperty('webRxByteCount'))
        obj.webRxByteCount = ApiClient.convertToType(data['webRxByteCount'], 'Number');
      if (data.hasOwnProperty('webRxEncoding'))
        obj.webRxEncoding = ApiClient.convertToType(data['webRxEncoding'], 'String');
      if (data.hasOwnProperty('webRxMsgCount'))
        obj.webRxMsgCount = ApiClient.convertToType(data['webRxMsgCount'], 'Number');
      if (data.hasOwnProperty('webRxProtocol'))
        obj.webRxProtocol = ApiClient.convertToType(data['webRxProtocol'], 'String');
      if (data.hasOwnProperty('webRxRequestCount'))
        obj.webRxRequestCount = ApiClient.convertToType(data['webRxRequestCount'], 'Number');
      if (data.hasOwnProperty('webRxResponseCount'))
        obj.webRxResponseCount = ApiClient.convertToType(data['webRxResponseCount'], 'Number');
      if (data.hasOwnProperty('webRxTcpState'))
        obj.webRxTcpState = ApiClient.convertToType(data['webRxTcpState'], 'String');
      if (data.hasOwnProperty('webRxTlsCipherDescription'))
        obj.webRxTlsCipherDescription = ApiClient.convertToType(data['webRxTlsCipherDescription'], 'String');
      if (data.hasOwnProperty('webRxTlsVersion'))
        obj.webRxTlsVersion = ApiClient.convertToType(data['webRxTlsVersion'], 'String');
      if (data.hasOwnProperty('webSessionId'))
        obj.webSessionId = ApiClient.convertToType(data['webSessionId'], 'String');
      if (data.hasOwnProperty('webTxByteCount'))
        obj.webTxByteCount = ApiClient.convertToType(data['webTxByteCount'], 'Number');
      if (data.hasOwnProperty('webTxEncoding'))
        obj.webTxEncoding = ApiClient.convertToType(data['webTxEncoding'], 'String');
      if (data.hasOwnProperty('webTxMsgCount'))
        obj.webTxMsgCount = ApiClient.convertToType(data['webTxMsgCount'], 'Number');
      if (data.hasOwnProperty('webTxProtocol'))
        obj.webTxProtocol = ApiClient.convertToType(data['webTxProtocol'], 'String');
      if (data.hasOwnProperty('webTxRequestCount'))
        obj.webTxRequestCount = ApiClient.convertToType(data['webTxRequestCount'], 'Number');
      if (data.hasOwnProperty('webTxResponseCount'))
        obj.webTxResponseCount = ApiClient.convertToType(data['webTxResponseCount'], 'Number');
      if (data.hasOwnProperty('webTxTcpState'))
        obj.webTxTcpState = ApiClient.convertToType(data['webTxTcpState'], 'String');
      if (data.hasOwnProperty('webTxTlsCipherDescription'))
        obj.webTxTlsCipherDescription = ApiClient.convertToType(data['webTxTlsCipherDescription'], 'String');
      if (data.hasOwnProperty('webTxTlsVersion'))
        obj.webTxTlsVersion = ApiClient.convertToType(data['webTxTlsVersion'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the access control list (ACL) profile of the Client.
 * @member {String} aclProfileName
 */
MsgVpnClientModel.prototype.aclProfileName = undefined;

/**
 * The name of the original MsgVpn which the client signaled in. Available since 2.14.
 * @member {String} aliasedFromMsgVpnName
 */
MsgVpnClientModel.prototype.aliasedFromMsgVpnName = undefined;

/**
 * The number of Client bind failures due to endpoint being already bound.
 * @member {Number} alreadyBoundBindFailureCount
 */
MsgVpnClientModel.prototype.alreadyBoundBindFailureCount = undefined;

/**
 * The name of the authorization group of the Client.
 * @member {String} authorizationGroupName
 */
MsgVpnClientModel.prototype.authorizationGroupName = undefined;

/**
 * The one minute average of the message rate received from the Client, in bytes per second (B/sec).
 * @member {Number} averageRxByteRate
 */
MsgVpnClientModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the message rate received from the Client, in messages per second (msg/sec).
 * @member {Number} averageRxMsgRate
 */
MsgVpnClientModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Client, in bytes per second (B/sec).
 * @member {Number} averageTxByteRate
 */
MsgVpnClientModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Client, in messages per second (msg/sec).
 * @member {Number} averageTxMsgRate
 */
MsgVpnClientModel.prototype.averageTxMsgRate = undefined;

/**
 * The number of Client requests to bind to an endpoint.
 * @member {Number} bindRequestCount
 */
MsgVpnClientModel.prototype.bindRequestCount = undefined;

/**
 * The number of successful Client requests to bind to an endpoint.
 * @member {Number} bindSuccessCount
 */
MsgVpnClientModel.prototype.bindSuccessCount = undefined;

/**
 * The IP address and port of the Client.
 * @member {String} clientAddress
 */
MsgVpnClientModel.prototype.clientAddress = undefined;

/**
 * The identifier (ID) of the Client.
 * @member {Number} clientId
 */
MsgVpnClientModel.prototype.clientId = undefined;

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnClientModel.prototype.clientName = undefined;

/**
 * The name of the client profile of the Client.
 * @member {String} clientProfileName
 */
MsgVpnClientModel.prototype.clientProfileName = undefined;

/**
 * The client username of the Client used for authorization.
 * @member {String} clientUsername
 */
MsgVpnClientModel.prototype.clientUsername = undefined;

/**
 * The amount of client control messages received from the Client, in bytes (B).
 * @member {Number} controlRxByteCount
 */
MsgVpnClientModel.prototype.controlRxByteCount = undefined;

/**
 * The number of client control messages received from the Client.
 * @member {Number} controlRxMsgCount
 */
MsgVpnClientModel.prototype.controlRxMsgCount = undefined;

/**
 * The amount of client control messages transmitted to the Client, in bytes (B).
 * @member {Number} controlTxByteCount
 */
MsgVpnClientModel.prototype.controlTxByteCount = undefined;

/**
 * The number of client control messages transmitted to the Client.
 * @member {Number} controlTxMsgCount
 */
MsgVpnClientModel.prototype.controlTxMsgCount = undefined;

/**
 * The number of Client bind failures due to being denied cut-through forwarding.
 * @member {Number} cutThroughDeniedBindFailureCount
 */
MsgVpnClientModel.prototype.cutThroughDeniedBindFailureCount = undefined;

/**
 * The amount of client data messages received from the Client, in bytes (B).
 * @member {Number} dataRxByteCount
 */
MsgVpnClientModel.prototype.dataRxByteCount = undefined;

/**
 * The number of client data messages received from the Client.
 * @member {Number} dataRxMsgCount
 */
MsgVpnClientModel.prototype.dataRxMsgCount = undefined;

/**
 * The amount of client data messages transmitted to the Client, in bytes (B).
 * @member {Number} dataTxByteCount
 */
MsgVpnClientModel.prototype.dataTxByteCount = undefined;

/**
 * The number of client data messages transmitted to the Client.
 * @member {Number} dataTxMsgCount
 */
MsgVpnClientModel.prototype.dataTxMsgCount = undefined;

/**
 * The description text of the Client.
 * @member {String} description
 */
MsgVpnClientModel.prototype.description = undefined;

/**
 * The number of Client bind failures due to endpoint being disabled.
 * @member {Number} disabledBindFailureCount
 */
MsgVpnClientModel.prototype.disabledBindFailureCount = undefined;

/**
 * The priority of the Client's subscriptions for receiving deliver-to-one (DTO) messages published on the local broker.
 * @member {Number} dtoLocalPriority
 */
MsgVpnClientModel.prototype.dtoLocalPriority = undefined;

/**
 * The priority of the Client's subscriptions for receiving deliver-to-one (DTO) messages published on a remote broker.
 * @member {Number} dtoNetworkPriority
 */
MsgVpnClientModel.prototype.dtoNetworkPriority = undefined;

/**
 * Indicates whether message eliding is enabled for the Client.
 * @member {Boolean} eliding
 */
MsgVpnClientModel.prototype.eliding = undefined;

/**
 * The number of topics requiring message eliding for the Client.
 * @member {Number} elidingTopicCount
 */
MsgVpnClientModel.prototype.elidingTopicCount = undefined;

/**
 * The peak number of topics requiring message eliding for the Client.
 * @member {Number} elidingTopicPeakCount
 */
MsgVpnClientModel.prototype.elidingTopicPeakCount = undefined;

/**
 * The number of Client bind failures due to being denied guaranteed messaging.
 * @member {Number} guaranteedDeniedBindFailureCount
 */
MsgVpnClientModel.prototype.guaranteedDeniedBindFailureCount = undefined;

/**
 * The number of Client bind failures due to an invalid selector.
 * @member {Number} invalidSelectorBindFailureCount
 */
MsgVpnClientModel.prototype.invalidSelectorBindFailureCount = undefined;

/**
 * Indicates whether keepalive messages from the Client are received by the broker. Applicable for SMF and MQTT clients only. Available since 2.19.
 * @member {Boolean} keepalive
 */
MsgVpnClientModel.prototype.keepalive = undefined;

/**
 * The maximum period of time the broker will accept inactivity from the Client before disconnecting, in seconds. Available since 2.19.
 * @member {Number} keepaliveEffectiveTimeout
 */
MsgVpnClientModel.prototype.keepaliveEffectiveTimeout = undefined;

/**
 * Indicates whether the large-message event has been raised for the Client.
 * @member {Boolean} largeMsgEventRaised
 */
MsgVpnClientModel.prototype.largeMsgEventRaised = undefined;

/**
 * The number of login request messages received from the Client.
 * @member {Number} loginRxMsgCount
 */
MsgVpnClientModel.prototype.loginRxMsgCount = undefined;

/**
 * The number of login response messages transmitted to the Client.
 * @member {Number} loginTxMsgCount
 */
MsgVpnClientModel.prototype.loginTxMsgCount = undefined;

/**
 * The number of Client bind failures due to the endpoint maximum bind count being exceeded.
 * @member {Number} maxBindCountExceededBindFailureCount
 */
MsgVpnClientModel.prototype.maxBindCountExceededBindFailureCount = undefined;

/**
 * Indicates whether the max-eliding-topic-count event has been raised for the Client.
 * @member {Boolean} maxElidingTopicCountEventRaised
 */
MsgVpnClientModel.prototype.maxElidingTopicCountEventRaised = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) refused response packets transmitted to the Client.
 * @member {Number} mqttConnackErrorTxCount
 */
MsgVpnClientModel.prototype.mqttConnackErrorTxCount = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) accepted response packets transmitted to the Client.
 * @member {Number} mqttConnackTxCount
 */
MsgVpnClientModel.prototype.mqttConnackTxCount = undefined;

/**
 * The number of MQTT connect (CONNECT) request packets received from the Client.
 * @member {Number} mqttConnectRxCount
 */
MsgVpnClientModel.prototype.mqttConnectRxCount = undefined;

/**
 * The number of MQTT disconnect (DISCONNECT) request packets received from the Client.
 * @member {Number} mqttDisconnectRxCount
 */
MsgVpnClientModel.prototype.mqttDisconnectRxCount = undefined;

/**
 * The number of MQTT ping request (PINGREQ) packets received from the Client.
 * @member {Number} mqttPingreqRxCount
 */
MsgVpnClientModel.prototype.mqttPingreqRxCount = undefined;

/**
 * The number of MQTT ping response (PINGRESP) packets transmitted to the Client.
 * @member {Number} mqttPingrespTxCount
 */
MsgVpnClientModel.prototype.mqttPingrespTxCount = undefined;

/**
 * The number of MQTT publish acknowledgment (PUBACK) response packets received from the Client.
 * @member {Number} mqttPubackRxCount
 */
MsgVpnClientModel.prototype.mqttPubackRxCount = undefined;

/**
 * The number of MQTT publish acknowledgment (PUBACK) response packets transmitted to the Client.
 * @member {Number} mqttPubackTxCount
 */
MsgVpnClientModel.prototype.mqttPubackTxCount = undefined;

/**
 * The number of MQTT publish complete (PUBCOMP) packets transmitted to the Client in response to a PUBREL packet. These packets are the fourth and final packet of a QoS 2 protocol exchange.
 * @member {Number} mqttPubcompTxCount
 */
MsgVpnClientModel.prototype.mqttPubcompTxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 0 message delivery.
 * @member {Number} mqttPublishQos0RxCount
 */
MsgVpnClientModel.prototype.mqttPublishQos0RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 0 message delivery.
 * @member {Number} mqttPublishQos0TxCount
 */
MsgVpnClientModel.prototype.mqttPublishQos0TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 1 message delivery.
 * @member {Number} mqttPublishQos1RxCount
 */
MsgVpnClientModel.prototype.mqttPublishQos1RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 1 message delivery.
 * @member {Number} mqttPublishQos1TxCount
 */
MsgVpnClientModel.prototype.mqttPublishQos1TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 2 message delivery.
 * @member {Number} mqttPublishQos2RxCount
 */
MsgVpnClientModel.prototype.mqttPublishQos2RxCount = undefined;

/**
 * The number of MQTT publish received (PUBREC) packets transmitted to the Client in response to a PUBLISH packet with QoS 2. These packets are the second packet of a QoS 2 protocol exchange.
 * @member {Number} mqttPubrecTxCount
 */
MsgVpnClientModel.prototype.mqttPubrecTxCount = undefined;

/**
 * The number of MQTT publish release (PUBREL) packets received from the Client in response to a PUBREC packet. These packets are the third packet of a QoS 2 protocol exchange.
 * @member {Number} mqttPubrelRxCount
 */
MsgVpnClientModel.prototype.mqttPubrelRxCount = undefined;

/**
 * The number of MQTT subscribe acknowledgment (SUBACK) failure response packets transmitted to the Client.
 * @member {Number} mqttSubackErrorTxCount
 */
MsgVpnClientModel.prototype.mqttSubackErrorTxCount = undefined;

/**
 * The number of MQTT subscribe acknowledgment (SUBACK) response packets transmitted to the Client.
 * @member {Number} mqttSubackTxCount
 */
MsgVpnClientModel.prototype.mqttSubackTxCount = undefined;

/**
 * The number of MQTT subscribe (SUBSCRIBE) request packets received from the Client to create one or more topic subscriptions.
 * @member {Number} mqttSubscribeRxCount
 */
MsgVpnClientModel.prototype.mqttSubscribeRxCount = undefined;

/**
 * The number of MQTT unsubscribe acknowledgment (UNSUBACK) response packets transmitted to the Client.
 * @member {Number} mqttUnsubackTxCount
 */
MsgVpnClientModel.prototype.mqttUnsubackTxCount = undefined;

/**
 * The number of MQTT unsubscribe (UNSUBSCRIBE) request packets received from the Client to remove one or more topic subscriptions.
 * @member {Number} mqttUnsubscribeRxCount
 */
MsgVpnClientModel.prototype.mqttUnsubscribeRxCount = undefined;

/**
 * The number of messages from the Client discarded due to message spool congestion primarily caused by message promotion.
 * @member {Number} msgSpoolCongestionRxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.msgSpoolCongestionRxDiscardedMsgCount = undefined;

/**
 * The number of messages from the Client discarded by the message spool.
 * @member {Number} msgSpoolRxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.msgSpoolRxDiscardedMsgCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether not to deliver messages to the Client if it published them.
 * @member {Boolean} noLocalDelivery
 */
MsgVpnClientModel.prototype.noLocalDelivery = undefined;

/**
 * The number of messages from the Client discarded due to no matching subscription found.
 * @member {Number} noSubscriptionMatchRxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.noSubscriptionMatchRxDiscardedMsgCount = undefined;

/**
 * The original value of the client username used for Client authentication.
 * @member {String} originalClientUsername
 */
MsgVpnClientModel.prototype.originalClientUsername = undefined;

/**
 * The number of Client bind failures due to other reasons.
 * @member {Number} otherBindFailureCount
 */
MsgVpnClientModel.prototype.otherBindFailureCount = undefined;

/**
 * The platform the Client application software was built for, which may include the OS and API type.
 * @member {String} platform
 */
MsgVpnClientModel.prototype.platform = undefined;

/**
 * The number of messages from the Client discarded due to the publish topic being denied by the Access Control List (ACL) profile.
 * @member {Number} publishTopicAclRxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.publishTopicAclRxDiscardedMsgCount = undefined;

/**
 * The amount of HTTP request messages received from the Client, in bytes (B).
 * @member {Number} restHttpRequestRxByteCount
 */
MsgVpnClientModel.prototype.restHttpRequestRxByteCount = undefined;

/**
 * The number of HTTP request messages received from the Client.
 * @member {Number} restHttpRequestRxMsgCount
 */
MsgVpnClientModel.prototype.restHttpRequestRxMsgCount = undefined;

/**
 * The amount of HTTP request messages transmitted to the Client, in bytes (B).
 * @member {Number} restHttpRequestTxByteCount
 */
MsgVpnClientModel.prototype.restHttpRequestTxByteCount = undefined;

/**
 * The number of HTTP request messages transmitted to the Client.
 * @member {Number} restHttpRequestTxMsgCount
 */
MsgVpnClientModel.prototype.restHttpRequestTxMsgCount = undefined;

/**
 * The number of HTTP client/server error response messages received from the Client.
 * @member {Number} restHttpResponseErrorRxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseErrorRxMsgCount = undefined;

/**
 * The number of HTTP client/server error response messages transmitted to the Client.
 * @member {Number} restHttpResponseErrorTxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseErrorTxMsgCount = undefined;

/**
 * The amount of HTTP response messages received from the Client, in bytes (B).
 * @member {Number} restHttpResponseRxByteCount
 */
MsgVpnClientModel.prototype.restHttpResponseRxByteCount = undefined;

/**
 * The number of HTTP response messages received from the Client.
 * @member {Number} restHttpResponseRxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseRxMsgCount = undefined;

/**
 * The number of HTTP successful response messages received from the Client.
 * @member {Number} restHttpResponseSuccessRxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseSuccessRxMsgCount = undefined;

/**
 * The number of HTTP successful response messages transmitted to the Client.
 * @member {Number} restHttpResponseSuccessTxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseSuccessTxMsgCount = undefined;

/**
 * The number of HTTP wait for reply timeout response messages received from the Client.
 * @member {Number} restHttpResponseTimeoutRxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseTimeoutRxMsgCount = undefined;

/**
 * The number of HTTP wait for reply timeout response messages transmitted to the Client.
 * @member {Number} restHttpResponseTimeoutTxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseTimeoutTxMsgCount = undefined;

/**
 * The amount of HTTP response messages transmitted to the Client, in bytes (B).
 * @member {Number} restHttpResponseTxByteCount
 */
MsgVpnClientModel.prototype.restHttpResponseTxByteCount = undefined;

/**
 * The number of HTTP response messages transmitted to the Client.
 * @member {Number} restHttpResponseTxMsgCount
 */
MsgVpnClientModel.prototype.restHttpResponseTxMsgCount = undefined;

/**
 * The amount of messages received from the Client, in bytes (B).
 * @member {Number} rxByteCount
 */
MsgVpnClientModel.prototype.rxByteCount = undefined;

/**
 * The current message rate received from the Client, in bytes per second (B/sec).
 * @member {Number} rxByteRate
 */
MsgVpnClientModel.prototype.rxByteRate = undefined;

/**
 * The number of messages discarded during reception from the Client.
 * @member {Number} rxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.rxDiscardedMsgCount = undefined;

/**
 * The number of messages received from the Client.
 * @member {Number} rxMsgCount
 */
MsgVpnClientModel.prototype.rxMsgCount = undefined;

/**
 * The current message rate received from the Client, in messages per second (msg/sec).
 * @member {Number} rxMsgRate
 */
MsgVpnClientModel.prototype.rxMsgRate = undefined;

/**
 * The timestamp of when the Client will be disconnected by the broker. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.13.
 * @member {Number} scheduledDisconnectTime
 */
MsgVpnClientModel.prototype.scheduledDisconnectTime = undefined;

/**
 * Indicates whether the Client is a slow subscriber and blocks for a few seconds when receiving messages.
 * @member {Boolean} slowSubscriber
 */
MsgVpnClientModel.prototype.slowSubscriber = undefined;

/**
 * The date the Client application software was built.
 * @member {String} softwareDate
 */
MsgVpnClientModel.prototype.softwareDate = undefined;

/**
 * The version of the Client application software.
 * @member {String} softwareVersion
 */
MsgVpnClientModel.prototype.softwareVersion = undefined;

/**
 * The description of the TLS cipher used by the Client, which may include cipher name, key exchange and encryption algorithms.
 * @member {String} tlsCipherDescription
 */
MsgVpnClientModel.prototype.tlsCipherDescription = undefined;

/**
 * Indicates whether the Client TLS connection was downgraded to plain-text to increase performance.
 * @member {Boolean} tlsDowngradedToPlainText
 */
MsgVpnClientModel.prototype.tlsDowngradedToPlainText = undefined;

/**
 * The version of TLS used by the Client.
 * @member {String} tlsVersion
 */
MsgVpnClientModel.prototype.tlsVersion = undefined;

/**
 * The number of messages from the Client discarded due to an error while parsing the publish topic.
 * @member {Number} topicParseErrorRxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.topicParseErrorRxDiscardedMsgCount = undefined;

/**
 * The amount of messages transmitted to the Client, in bytes (B).
 * @member {Number} txByteCount
 */
MsgVpnClientModel.prototype.txByteCount = undefined;

/**
 * The current message rate transmitted to the Client, in bytes per second (B/sec).
 * @member {Number} txByteRate
 */
MsgVpnClientModel.prototype.txByteRate = undefined;

/**
 * The number of messages discarded during transmission to the Client.
 * @member {Number} txDiscardedMsgCount
 */
MsgVpnClientModel.prototype.txDiscardedMsgCount = undefined;

/**
 * The number of messages transmitted to the Client.
 * @member {Number} txMsgCount
 */
MsgVpnClientModel.prototype.txMsgCount = undefined;

/**
 * The current message rate transmitted to the Client, in messages per second (msg/sec).
 * @member {Number} txMsgRate
 */
MsgVpnClientModel.prototype.txMsgRate = undefined;

/**
 * The amount of time in seconds since the Client connected.
 * @member {Number} uptime
 */
MsgVpnClientModel.prototype.uptime = undefined;

/**
 * The user description for the Client, which may include computer name and process ID.
 * @member {String} user
 */
MsgVpnClientModel.prototype.user = undefined;

/**
 * The virtual router used by the Client. The allowed values and their meaning are:  <pre> \"primary\" - The Client is using the primary virtual router. \"backup\" - The Client is using the backup virtual router. \"internal\" - The Client is using the internal virtual router. \"unknown\" - The Client virtual router is unknown. </pre> 
 * @member {String} virtualRouter
 */
MsgVpnClientModel.prototype.virtualRouter = undefined;

/**
 * The maximum web transport timeout for the Client being inactive, in seconds.
 * @member {Number} webInactiveTimeout
 */
MsgVpnClientModel.prototype.webInactiveTimeout = undefined;

/**
 * The maximum web transport message payload size which excludes the size of the message header, in bytes.
 * @member {Number} webMaxPayload
 */
MsgVpnClientModel.prototype.webMaxPayload = undefined;

/**
 * The number of messages from the Client discarded due to an error while parsing the web message.
 * @member {Number} webParseErrorRxDiscardedMsgCount
 */
MsgVpnClientModel.prototype.webParseErrorRxDiscardedMsgCount = undefined;

/**
 * The remaining web transport timeout for the Client being inactive, in seconds.
 * @member {Number} webRemainingTimeout
 */
MsgVpnClientModel.prototype.webRemainingTimeout = undefined;

/**
 * The amount of web transport messages received from the Client, in bytes (B).
 * @member {Number} webRxByteCount
 */
MsgVpnClientModel.prototype.webRxByteCount = undefined;

/**
 * The type of encoding used during reception from the Client. The allowed values and their meaning are:  <pre> \"binary\" - The Client is using binary encoding. \"base64\" - The Client is using base64 encoding. \"illegal\" - The Client is using an illegal encoding type. </pre> 
 * @member {String} webRxEncoding
 */
MsgVpnClientModel.prototype.webRxEncoding = undefined;

/**
 * The number of web transport messages received from the Client.
 * @member {Number} webRxMsgCount
 */
MsgVpnClientModel.prototype.webRxMsgCount = undefined;

/**
 * The type of web transport used during reception from the Client. The allowed values and their meaning are:  <pre> \"ws-binary\" - The Client is using WebSocket binary transport. \"http-binary-streaming\" - The Client is using HTTP binary streaming transport. \"http-binary\" - The Client is using HTTP binary transport. \"http-base64\" - The Client is using HTTP base64 transport. </pre> 
 * @member {String} webRxProtocol
 */
MsgVpnClientModel.prototype.webRxProtocol = undefined;

/**
 * The number of web transport requests received from the Client (HTTP only). Not available for WebSockets.
 * @member {Number} webRxRequestCount
 */
MsgVpnClientModel.prototype.webRxRequestCount = undefined;

/**
 * The number of web transport responses transmitted to the Client on the receive connection (HTTP only). Not available for WebSockets.
 * @member {Number} webRxResponseCount
 */
MsgVpnClientModel.prototype.webRxResponseCount = undefined;

/**
 * The TCP state of the receive connection from the Client. When fully operational, should be: established. See RFC 793 for further details. The allowed values and their meaning are:  <pre> \"closed\" - No connection state at all. \"listen\" - Waiting for a connection request from any remote TCP and port. \"syn-sent\" - Waiting for a matching connection request after having sent a connection request. \"syn-received\" - Waiting for a confirming connection request acknowledgment after having both received and sent a connection request. \"established\" - An open connection, data received can be delivered to the user. \"close-wait\" - Waiting for a connection termination request from the local user. \"fin-wait-1\" - Waiting for a connection termination request from the remote TCP, or an acknowledgment of the connection termination request previously sent. \"closing\" - Waiting for a connection termination request acknowledgment from the remote TCP. \"last-ack\" - Waiting for an acknowledgment of the connection termination request previously sent to the remote TCP. \"fin-wait-2\" - Waiting for a connection termination request from the remote TCP. \"time-wait\" - Waiting for enough time to pass to be sure the remote TCP received the acknowledgment of its connection termination request. </pre> 
 * @member {String} webRxTcpState
 */
MsgVpnClientModel.prototype.webRxTcpState = undefined;

/**
 * The description of the TLS cipher received from the Client, which may include cipher name, key exchange and encryption algorithms.
 * @member {String} webRxTlsCipherDescription
 */
MsgVpnClientModel.prototype.webRxTlsCipherDescription = undefined;

/**
 * The version of TLS used during reception from the Client.
 * @member {String} webRxTlsVersion
 */
MsgVpnClientModel.prototype.webRxTlsVersion = undefined;

/**
 * The identifier (ID) of the web transport session for the Client.
 * @member {String} webSessionId
 */
MsgVpnClientModel.prototype.webSessionId = undefined;

/**
 * The amount of web transport messages transmitted to the Client, in bytes (B).
 * @member {Number} webTxByteCount
 */
MsgVpnClientModel.prototype.webTxByteCount = undefined;

/**
 * The type of encoding used during transmission to the Client. The allowed values and their meaning are:  <pre> \"binary\" - The Client is using binary encoding. \"base64\" - The Client is using base64 encoding. \"illegal\" - The Client is using an illegal encoding type. </pre> 
 * @member {String} webTxEncoding
 */
MsgVpnClientModel.prototype.webTxEncoding = undefined;

/**
 * The number of web transport messages transmitted to the Client.
 * @member {Number} webTxMsgCount
 */
MsgVpnClientModel.prototype.webTxMsgCount = undefined;

/**
 * The type of web transport used during transmission to the Client. The allowed values and their meaning are:  <pre> \"ws-binary\" - The Client is using WebSocket binary transport. \"http-binary-streaming\" - The Client is using HTTP binary streaming transport. \"http-binary\" - The Client is using HTTP binary transport. \"http-base64\" - The Client is using HTTP base64 transport. </pre> 
 * @member {String} webTxProtocol
 */
MsgVpnClientModel.prototype.webTxProtocol = undefined;

/**
 * The number of web transport requests transmitted to the Client (HTTP only). Not available for WebSockets.
 * @member {Number} webTxRequestCount
 */
MsgVpnClientModel.prototype.webTxRequestCount = undefined;

/**
 * The number of web transport responses received from the Client on the transmit connection (HTTP only). Not available for WebSockets.
 * @member {Number} webTxResponseCount
 */
MsgVpnClientModel.prototype.webTxResponseCount = undefined;

/**
 * The TCP state of the transmit connection to the Client. When fully operational, should be: established. See RFC 793 for further details. The allowed values and their meaning are:  <pre> \"closed\" - No connection state at all. \"listen\" - Waiting for a connection request from any remote TCP and port. \"syn-sent\" - Waiting for a matching connection request after having sent a connection request. \"syn-received\" - Waiting for a confirming connection request acknowledgment after having both received and sent a connection request. \"established\" - An open connection, data received can be delivered to the user. \"close-wait\" - Waiting for a connection termination request from the local user. \"fin-wait-1\" - Waiting for a connection termination request from the remote TCP, or an acknowledgment of the connection termination request previously sent. \"closing\" - Waiting for a connection termination request acknowledgment from the remote TCP. \"last-ack\" - Waiting for an acknowledgment of the connection termination request previously sent to the remote TCP. \"fin-wait-2\" - Waiting for a connection termination request from the remote TCP. \"time-wait\" - Waiting for enough time to pass to be sure the remote TCP received the acknowledgment of its connection termination request. </pre> 
 * @member {String} webTxTcpState
 */
MsgVpnClientModel.prototype.webTxTcpState = undefined;

/**
 * The description of the TLS cipher transmitted to the Client, which may include cipher name, key exchange and encryption algorithms.
 * @member {String} webTxTlsCipherDescription
 */
MsgVpnClientModel.prototype.webTxTlsCipherDescription = undefined;

/**
 * The version of TLS used during transmission to the Client.
 * @member {String} webTxTlsVersion
 */
MsgVpnClientModel.prototype.webTxTlsVersion = undefined;

