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
 * The MsgVpnRestDeliveryPointRestConsumerModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumerModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumerModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumerModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumerModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumerModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumerModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumerModel} The populated <code>MsgVpnRestDeliveryPointRestConsumerModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumerModel();
      if (data.hasOwnProperty('authenticationAwsAccessKeyId'))
        obj.authenticationAwsAccessKeyId = ApiClient.convertToType(data['authenticationAwsAccessKeyId'], 'String');
      if (data.hasOwnProperty('authenticationAwsRegion'))
        obj.authenticationAwsRegion = ApiClient.convertToType(data['authenticationAwsRegion'], 'String');
      if (data.hasOwnProperty('authenticationAwsSecretAccessKey'))
        obj.authenticationAwsSecretAccessKey = ApiClient.convertToType(data['authenticationAwsSecretAccessKey'], 'String');
      if (data.hasOwnProperty('authenticationAwsService'))
        obj.authenticationAwsService = ApiClient.convertToType(data['authenticationAwsService'], 'String');
      if (data.hasOwnProperty('authenticationClientCertContent'))
        obj.authenticationClientCertContent = ApiClient.convertToType(data['authenticationClientCertContent'], 'String');
      if (data.hasOwnProperty('authenticationClientCertPassword'))
        obj.authenticationClientCertPassword = ApiClient.convertToType(data['authenticationClientCertPassword'], 'String');
      if (data.hasOwnProperty('authenticationHttpBasicPassword'))
        obj.authenticationHttpBasicPassword = ApiClient.convertToType(data['authenticationHttpBasicPassword'], 'String');
      if (data.hasOwnProperty('authenticationHttpBasicUsername'))
        obj.authenticationHttpBasicUsername = ApiClient.convertToType(data['authenticationHttpBasicUsername'], 'String');
      if (data.hasOwnProperty('authenticationHttpHeaderName'))
        obj.authenticationHttpHeaderName = ApiClient.convertToType(data['authenticationHttpHeaderName'], 'String');
      if (data.hasOwnProperty('authenticationHttpHeaderValue'))
        obj.authenticationHttpHeaderValue = ApiClient.convertToType(data['authenticationHttpHeaderValue'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientId'))
        obj.authenticationOauthClientId = ApiClient.convertToType(data['authenticationOauthClientId'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientScope'))
        obj.authenticationOauthClientScope = ApiClient.convertToType(data['authenticationOauthClientScope'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientSecret'))
        obj.authenticationOauthClientSecret = ApiClient.convertToType(data['authenticationOauthClientSecret'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientTokenEndpoint'))
        obj.authenticationOauthClientTokenEndpoint = ApiClient.convertToType(data['authenticationOauthClientTokenEndpoint'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientTokenExpiryDefault'))
        obj.authenticationOauthClientTokenExpiryDefault = ApiClient.convertToType(data['authenticationOauthClientTokenExpiryDefault'], 'Number');
      if (data.hasOwnProperty('authenticationOauthJwtSecretKey'))
        obj.authenticationOauthJwtSecretKey = ApiClient.convertToType(data['authenticationOauthJwtSecretKey'], 'String');
      if (data.hasOwnProperty('authenticationOauthJwtTokenEndpoint'))
        obj.authenticationOauthJwtTokenEndpoint = ApiClient.convertToType(data['authenticationOauthJwtTokenEndpoint'], 'String');
      if (data.hasOwnProperty('authenticationOauthJwtTokenExpiryDefault'))
        obj.authenticationOauthJwtTokenExpiryDefault = ApiClient.convertToType(data['authenticationOauthJwtTokenExpiryDefault'], 'Number');
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('httpMethod'))
        obj.httpMethod = ApiClient.convertToType(data['httpMethod'], 'String');
      if (data.hasOwnProperty('localInterface'))
        obj.localInterface = ApiClient.convertToType(data['localInterface'], 'String');
      if (data.hasOwnProperty('maxPostWaitTime'))
        obj.maxPostWaitTime = ApiClient.convertToType(data['maxPostWaitTime'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('outgoingConnectionCount'))
        obj.outgoingConnectionCount = ApiClient.convertToType(data['outgoingConnectionCount'], 'Number');
      if (data.hasOwnProperty('proxyName'))
        obj.proxyName = ApiClient.convertToType(data['proxyName'], 'String');
      if (data.hasOwnProperty('remoteHost'))
        obj.remoteHost = ApiClient.convertToType(data['remoteHost'], 'String');
      if (data.hasOwnProperty('remotePort'))
        obj.remotePort = ApiClient.convertToType(data['remotePort'], 'Number');
      if (data.hasOwnProperty('restConsumerName'))
        obj.restConsumerName = ApiClient.convertToType(data['restConsumerName'], 'String');
      if (data.hasOwnProperty('restDeliveryPointName'))
        obj.restDeliveryPointName = ApiClient.convertToType(data['restDeliveryPointName'], 'String');
      if (data.hasOwnProperty('retryDelay'))
        obj.retryDelay = ApiClient.convertToType(data['retryDelay'], 'Number');
      if (data.hasOwnProperty('tlsCipherSuiteList'))
        obj.tlsCipherSuiteList = ApiClient.convertToType(data['tlsCipherSuiteList'], 'String');
      if (data.hasOwnProperty('tlsEnabled'))
        obj.tlsEnabled = ApiClient.convertToType(data['tlsEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The AWS access key id. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.26.
 * @member {String} authenticationAwsAccessKeyId
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsAccessKeyId = undefined;

/**
 * The AWS region id. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.26.
 * @member {String} authenticationAwsRegion
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsRegion = undefined;

/**
 * The AWS secret access key. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.26.
 * @member {String} authenticationAwsSecretAccessKey
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsSecretAccessKey = undefined;

/**
 * The AWS service id. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.26.
 * @member {String} authenticationAwsService
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationAwsService = undefined;

/**
 * The PEM formatted content for the client certificate that the REST Consumer will present to the REST host. It must consist of a private key and between one and three certificates comprising the certificate trust chain. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `\"\"`. Available since 2.9.
 * @member {String} authenticationClientCertContent
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationClientCertContent = undefined;

/**
 * The password for the client certificate. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. The default value is `\"\"`. Available since 2.9.
 * @member {String} authenticationClientCertPassword
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationClientCertPassword = undefined;

/**
 * The password for the username. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationHttpBasicPassword
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationHttpBasicPassword = undefined;

/**
 * The username that the REST Consumer will use to login to the REST host. Normally a username is only configured when basic authentication is selected for the REST Consumer. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} authenticationHttpBasicUsername
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationHttpBasicUsername = undefined;

/**
 * The authentication header name. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.15.
 * @member {String} authenticationHttpHeaderName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationHttpHeaderName = undefined;

/**
 * The authentication header value. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.15.
 * @member {String} authenticationHttpHeaderValue
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationHttpHeaderValue = undefined;

/**
 * The OAuth client ID. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.19.
 * @member {String} authenticationOauthClientId
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientId = undefined;

/**
 * The OAuth scope. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.19.
 * @member {String} authenticationOauthClientScope
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientScope = undefined;

/**
 * The OAuth client secret. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.19.
 * @member {String} authenticationOauthClientSecret
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientSecret = undefined;

/**
 * The OAuth token endpoint URL that the REST Consumer will use to request a token for login to the REST host. Must begin with \"https\". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.19.
 * @member {String} authenticationOauthClientTokenEndpoint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenEndpoint = undefined;

/**
 * The default expiry time for a token, in seconds. Only used when the token endpoint does not return an expiry time. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `900`. Available since 2.30.
 * @member {Number} authenticationOauthClientTokenExpiryDefault
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthClientTokenExpiryDefault = undefined;

/**
 * The OAuth secret key used to sign the token request JWT. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.21.
 * @member {String} authenticationOauthJwtSecretKey
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtSecretKey = undefined;

/**
 * The OAuth token endpoint URL that the REST Consumer will use to request a token for login to the REST host. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.21.
 * @member {String} authenticationOauthJwtTokenEndpoint
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenEndpoint = undefined;

/**
 * The default expiry time for a token, in seconds. Only used when the token endpoint does not return an expiry time. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `900`. Available since 2.30.
 * @member {Number} authenticationOauthJwtTokenExpiryDefault
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationOauthJwtTokenExpiryDefault = undefined;

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnRestDeliveryPointRestConsumerModel.AuthenticationSchemeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "http-basic"
   * @const
   */
  httpBasic: "http-basic",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate",

  /**
   * value: "http-header"
   * @const
   */
  httpHeader: "http-header",

  /**
   * value: "oauth-client"
   * @const
   */
  oauthClient: "oauth-client",

  /**
   * value: "oauth-jwt"
   * @const
   */
  oauthJwt: "oauth-jwt",

  /**
   * value: "transparent"
   * @const
   */
  transparent: "transparent",

  /**
   * value: "aws"
   * @const
   */
  aws: "aws"
};
/**
 * The authentication scheme used by the REST Consumer to login to the REST host. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"none\"`. The allowed values and their meaning are:  <pre> \"none\" - Login with no authentication. This may be useful for anonymous connections or when a REST Consumer does not require authentication. \"http-basic\" - Login with a username and optional password according to HTTP Basic authentication as per RFC 2616. \"client-certificate\" - Login with a client TLS certificate as per RFC 5246. Client certificate authentication is only available on TLS connections. \"http-header\" - Login with a specified HTTP header. \"oauth-client\" - Login with OAuth 2.0 client credentials. \"oauth-jwt\" - Login with OAuth (RFC 7523 JWT Profile). \"transparent\" - Login using the Authorization header from the message properties, if present. Transparent authentication passes along existing Authorization header metadata instead of discarding it. Note that if the message is coming from a REST producer, the REST service must be configured to forward the Authorization header. \"aws\" - Login using AWS Signature Version 4 authentication (AWS4-HMAC-SHA256). </pre> 
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerModel.AuthenticationSchemeEnum} authenticationScheme
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.authenticationScheme = undefined;

/**
 * Enable or disable the REST Consumer. When disabled, no connections are initiated or messages delivered to this particular REST Consumer. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} enabled
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.enabled = undefined;

/**
 * Allowed values for the <code>httpMethod</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnRestDeliveryPointRestConsumerModel.HttpMethodEnum = {
  /**
   * value: "post"
   * @const
   */
  post: "post",

  /**
   * value: "put"
   * @const
   */
  put: "put"
};
/**
 * The HTTP method to use (POST or PUT). This is used only when operating in the REST service \"messaging\" mode and is ignored in \"gateway\" mode. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"post\"`. The allowed values and their meaning are:  <pre> \"post\" - Use the POST HTTP method. \"put\" - Use the PUT HTTP method. </pre>  Available since 2.17.
 * @member {module:model/MsgVpnRestDeliveryPointRestConsumerModel.HttpMethodEnum} httpMethod
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.httpMethod = undefined;

/**
 * The interface that will be used for all outgoing connections associated with the REST Consumer. When unspecified, an interface is automatically chosen. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} localInterface
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.localInterface = undefined;

/**
 * The maximum amount of time (in seconds) to wait for an HTTP POST response from the REST Consumer. Once this time is exceeded, the TCP connection is reset. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `30`.
 * @member {Number} maxPostWaitTime
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.maxPostWaitTime = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.msgVpnName = undefined;

/**
 * The number of concurrent TCP connections open to the REST Consumer. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} outgoingConnectionCount
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.outgoingConnectionCount = undefined;

/**
 * The name of the proxy to use. Leave empty for no proxy. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`. Available since 2.36.
 * @member {String} proxyName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.proxyName = undefined;

/**
 * The IP address or DNS name to which the broker is to connect to deliver messages for the REST Consumer. A host value must be configured for the REST Consumer to be operationally up. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"\"`.
 * @member {String} remoteHost
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.remoteHost = undefined;

/**
 * The port associated with the host of the REST Consumer. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `8080`.
 * @member {Number} remotePort
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.remotePort = undefined;

/**
 * The name of the REST Consumer.
 * @member {String} restConsumerName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.restConsumerName = undefined;

/**
 * The name of the REST Delivery Point.
 * @member {String} restDeliveryPointName
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.restDeliveryPointName = undefined;

/**
 * The number of seconds that must pass before retrying the remote REST Consumer connection. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `3`.
 * @member {Number} retryDelay
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.retryDelay = undefined;

/**
 * The colon-separated list of cipher suites the REST Consumer uses in its encrypted connection. The value `\"default\"` implies all supported suites ordered from most secure to least secure. The list of default cipher suites is available in the `tlsCipherSuiteMsgBackboneDefaultList` attribute of the Broker object in the Monitoring API. The REST Consumer should choose the first suite from this list that it supports. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `\"default\"`.
 * @member {String} tlsCipherSuiteList
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.tlsCipherSuiteList = undefined;

/**
 * Enable or disable encryption (TLS) for the REST Consumer. Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
 * @member {Boolean} tlsEnabled
 */
MsgVpnRestDeliveryPointRestConsumerModel.prototype.tlsEnabled = undefined;

