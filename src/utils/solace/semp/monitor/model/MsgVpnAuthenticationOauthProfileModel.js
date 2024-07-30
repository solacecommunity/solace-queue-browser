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
 * The MsgVpnAuthenticationOauthProfileModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileModel} The populated <code>MsgVpnAuthenticationOauthProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileModel();
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('authorizationGroupsClaimName'))
        obj.authorizationGroupsClaimName = ApiClient.convertToType(data['authorizationGroupsClaimName'], 'String');
      if (data.hasOwnProperty('authorizationGroupsClaimStringFormat'))
        obj.authorizationGroupsClaimStringFormat = ApiClient.convertToType(data['authorizationGroupsClaimStringFormat'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('clientRequiredType'))
        obj.clientRequiredType = ApiClient.convertToType(data['clientRequiredType'], 'String');
      if (data.hasOwnProperty('clientValidateTypeEnabled'))
        obj.clientValidateTypeEnabled = ApiClient.convertToType(data['clientValidateTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('disconnectOnTokenExpirationEnabled'))
        obj.disconnectOnTokenExpirationEnabled = ApiClient.convertToType(data['disconnectOnTokenExpirationEnabled'], 'Boolean');
      if (data.hasOwnProperty('discoveryLastRefreshFailureReason'))
        obj.discoveryLastRefreshFailureReason = ApiClient.convertToType(data['discoveryLastRefreshFailureReason'], 'String');
      if (data.hasOwnProperty('discoveryLastRefreshFailureTime'))
        obj.discoveryLastRefreshFailureTime = ApiClient.convertToType(data['discoveryLastRefreshFailureTime'], 'Number');
      if (data.hasOwnProperty('discoveryLastRefreshTime'))
        obj.discoveryLastRefreshTime = ApiClient.convertToType(data['discoveryLastRefreshTime'], 'Number');
      if (data.hasOwnProperty('discoveryNextScheduledRefreshTime'))
        obj.discoveryNextScheduledRefreshTime = ApiClient.convertToType(data['discoveryNextScheduledRefreshTime'], 'Number');
      if (data.hasOwnProperty('discoveryRefreshFailureCount'))
        obj.discoveryRefreshFailureCount = ApiClient.convertToType(data['discoveryRefreshFailureCount'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('endpointDiscovery'))
        obj.endpointDiscovery = ApiClient.convertToType(data['endpointDiscovery'], 'String');
      if (data.hasOwnProperty('endpointDiscoveryRefreshInterval'))
        obj.endpointDiscoveryRefreshInterval = ApiClient.convertToType(data['endpointDiscoveryRefreshInterval'], 'Number');
      if (data.hasOwnProperty('endpointIntrospection'))
        obj.endpointIntrospection = ApiClient.convertToType(data['endpointIntrospection'], 'String');
      if (data.hasOwnProperty('endpointIntrospectionOperational'))
        obj.endpointIntrospectionOperational = ApiClient.convertToType(data['endpointIntrospectionOperational'], 'String');
      if (data.hasOwnProperty('endpointIntrospectionTimeout'))
        obj.endpointIntrospectionTimeout = ApiClient.convertToType(data['endpointIntrospectionTimeout'], 'Number');
      if (data.hasOwnProperty('endpointJwks'))
        obj.endpointJwks = ApiClient.convertToType(data['endpointJwks'], 'String');
      if (data.hasOwnProperty('endpointJwksOperational'))
        obj.endpointJwksOperational = ApiClient.convertToType(data['endpointJwksOperational'], 'String');
      if (data.hasOwnProperty('endpointJwksRefreshInterval'))
        obj.endpointJwksRefreshInterval = ApiClient.convertToType(data['endpointJwksRefreshInterval'], 'Number');
      if (data.hasOwnProperty('endpointUserinfo'))
        obj.endpointUserinfo = ApiClient.convertToType(data['endpointUserinfo'], 'String');
      if (data.hasOwnProperty('endpointUserinfoOperational'))
        obj.endpointUserinfoOperational = ApiClient.convertToType(data['endpointUserinfoOperational'], 'String');
      if (data.hasOwnProperty('endpointUserinfoTimeout'))
        obj.endpointUserinfoTimeout = ApiClient.convertToType(data['endpointUserinfoTimeout'], 'Number');
      if (data.hasOwnProperty('expiredTokenCount'))
        obj.expiredTokenCount = ApiClient.convertToType(data['expiredTokenCount'], 'Number');
      if (data.hasOwnProperty('groupsFoundInTokenCount'))
        obj.groupsFoundInTokenCount = ApiClient.convertToType(data['groupsFoundInTokenCount'], 'Number');
      if (data.hasOwnProperty('inactiveReason'))
        obj.inactiveReason = ApiClient.convertToType(data['inactiveReason'], 'String');
      if (data.hasOwnProperty('introspectionAverageTime'))
        obj.introspectionAverageTime = ApiClient.convertToType(data['introspectionAverageTime'], 'Number');
      if (data.hasOwnProperty('introspectionLastFailureReason'))
        obj.introspectionLastFailureReason = ApiClient.convertToType(data['introspectionLastFailureReason'], 'String');
      if (data.hasOwnProperty('introspectionLastFailureTime'))
        obj.introspectionLastFailureTime = ApiClient.convertToType(data['introspectionLastFailureTime'], 'Number');
      if (data.hasOwnProperty('introspectionMissingCount'))
        obj.introspectionMissingCount = ApiClient.convertToType(data['introspectionMissingCount'], 'Number');
      if (data.hasOwnProperty('introspectionMissingGroupsCount'))
        obj.introspectionMissingGroupsCount = ApiClient.convertToType(data['introspectionMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('introspectionMissingUsernameCount'))
        obj.introspectionMissingUsernameCount = ApiClient.convertToType(data['introspectionMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('introspectionRequestCount'))
        obj.introspectionRequestCount = ApiClient.convertToType(data['introspectionRequestCount'], 'Number');
      if (data.hasOwnProperty('introspectionResponseInvalidCount'))
        obj.introspectionResponseInvalidCount = ApiClient.convertToType(data['introspectionResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('introspectionStatusOkCount'))
        obj.introspectionStatusOkCount = ApiClient.convertToType(data['introspectionStatusOkCount'], 'Number');
      if (data.hasOwnProperty('introspectionStatusOtherCount'))
        obj.introspectionStatusOtherCount = ApiClient.convertToType(data['introspectionStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('introspectionTokenNotActiveCount'))
        obj.introspectionTokenNotActiveCount = ApiClient.convertToType(data['introspectionTokenNotActiveCount'], 'Number');
      if (data.hasOwnProperty('invalidTokenCount'))
        obj.invalidTokenCount = ApiClient.convertToType(data['invalidTokenCount'], 'Number');
      if (data.hasOwnProperty('issuer'))
        obj.issuer = ApiClient.convertToType(data['issuer'], 'String');
      if (data.hasOwnProperty('issuerOperational'))
        obj.issuerOperational = ApiClient.convertToType(data['issuerOperational'], 'String');
      if (data.hasOwnProperty('jwksLastRefreshFailureReason'))
        obj.jwksLastRefreshFailureReason = ApiClient.convertToType(data['jwksLastRefreshFailureReason'], 'String');
      if (data.hasOwnProperty('jwksLastRefreshFailureTime'))
        obj.jwksLastRefreshFailureTime = ApiClient.convertToType(data['jwksLastRefreshFailureTime'], 'Number');
      if (data.hasOwnProperty('jwksLastRefreshTime'))
        obj.jwksLastRefreshTime = ApiClient.convertToType(data['jwksLastRefreshTime'], 'Number');
      if (data.hasOwnProperty('jwksNextScheduledRefreshTime'))
        obj.jwksNextScheduledRefreshTime = ApiClient.convertToType(data['jwksNextScheduledRefreshTime'], 'Number');
      if (data.hasOwnProperty('jwksRefreshFailureCount'))
        obj.jwksRefreshFailureCount = ApiClient.convertToType(data['jwksRefreshFailureCount'], 'Number');
      if (data.hasOwnProperty('mqttUsernameValidateEnabled'))
        obj.mqttUsernameValidateEnabled = ApiClient.convertToType(data['mqttUsernameValidateEnabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
      if (data.hasOwnProperty('oauthRole'))
        obj.oauthRole = ApiClient.convertToType(data['oauthRole'], 'String');
      if (data.hasOwnProperty('requestCount'))
        obj.requestCount = ApiClient.convertToType(data['requestCount'], 'Number');
      if (data.hasOwnProperty('resourceServerParseAccessTokenEnabled'))
        obj.resourceServerParseAccessTokenEnabled = ApiClient.convertToType(data['resourceServerParseAccessTokenEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerRequiredAudience'))
        obj.resourceServerRequiredAudience = ApiClient.convertToType(data['resourceServerRequiredAudience'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredIssuer'))
        obj.resourceServerRequiredIssuer = ApiClient.convertToType(data['resourceServerRequiredIssuer'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredScope'))
        obj.resourceServerRequiredScope = ApiClient.convertToType(data['resourceServerRequiredScope'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredType'))
        obj.resourceServerRequiredType = ApiClient.convertToType(data['resourceServerRequiredType'], 'String');
      if (data.hasOwnProperty('resourceServerValidateAudienceEnabled'))
        obj.resourceServerValidateAudienceEnabled = ApiClient.convertToType(data['resourceServerValidateAudienceEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerValidateIssuerEnabled'))
        obj.resourceServerValidateIssuerEnabled = ApiClient.convertToType(data['resourceServerValidateIssuerEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerValidateScopeEnabled'))
        obj.resourceServerValidateScopeEnabled = ApiClient.convertToType(data['resourceServerValidateScopeEnabled'], 'Boolean');
      if (data.hasOwnProperty('resourceServerValidateTypeEnabled'))
        obj.resourceServerValidateTypeEnabled = ApiClient.convertToType(data['resourceServerValidateTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('successCount'))
        obj.successCount = ApiClient.convertToType(data['successCount'], 'Number');
      if (data.hasOwnProperty('userinfoAverageTime'))
        obj.userinfoAverageTime = ApiClient.convertToType(data['userinfoAverageTime'], 'Number');
      if (data.hasOwnProperty('userinfoLastFailureReason'))
        obj.userinfoLastFailureReason = ApiClient.convertToType(data['userinfoLastFailureReason'], 'String');
      if (data.hasOwnProperty('userinfoLastFailureTime'))
        obj.userinfoLastFailureTime = ApiClient.convertToType(data['userinfoLastFailureTime'], 'Number');
      if (data.hasOwnProperty('userinfoMissingCount'))
        obj.userinfoMissingCount = ApiClient.convertToType(data['userinfoMissingCount'], 'Number');
      if (data.hasOwnProperty('userinfoMissingGroupsCount'))
        obj.userinfoMissingGroupsCount = ApiClient.convertToType(data['userinfoMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('userinfoMissingUsernameCount'))
        obj.userinfoMissingUsernameCount = ApiClient.convertToType(data['userinfoMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('userinfoRequestCount'))
        obj.userinfoRequestCount = ApiClient.convertToType(data['userinfoRequestCount'], 'Number');
      if (data.hasOwnProperty('userinfoResponseInvalidCount'))
        obj.userinfoResponseInvalidCount = ApiClient.convertToType(data['userinfoResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('userinfoStatusOkCount'))
        obj.userinfoStatusOkCount = ApiClient.convertToType(data['userinfoStatusOkCount'], 'Number');
      if (data.hasOwnProperty('userinfoStatusOtherCount'))
        obj.userinfoStatusOtherCount = ApiClient.convertToType(data['userinfoStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('userinfoSubjectMismatchCount'))
        obj.userinfoSubjectMismatchCount = ApiClient.convertToType(data['userinfoSubjectMismatchCount'], 'Number');
      if (data.hasOwnProperty('usernameClaimName'))
        obj.usernameClaimName = ApiClient.convertToType(data['usernameClaimName'], 'String');
      if (data.hasOwnProperty('usernameFoundInTokenCount'))
        obj.usernameFoundInTokenCount = ApiClient.convertToType(data['usernameFoundInTokenCount'], 'Number');
    }
    return obj;
  }
}

/**
 * Indicates whether the profile is active. An enabled profile may not be active if discovery is not complete, if there is no issuer specified, or if there is another profile with the same issuer. Available since 2.26.
 * @member {Boolean} active
 */
MsgVpnAuthenticationOauthProfileModel.prototype.active = undefined;

/**
 * The name of the groups claim. If non-empty, the specified claim will be used to determine groups for authorization. If empty, the authorizationType attribute of the Message VPN will be used to determine authorization.
 * @member {String} authorizationGroupsClaimName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.authorizationGroupsClaimName = undefined;

/**
 * Allowed values for the <code>authorizationGroupsClaimStringFormat</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProfileModel.AuthorizationGroupsClaimStringFormatEnum = {
  /**
   * value: "single"
   * @const
   */
  single: "single",

  /**
   * value: "space-delimited"
   * @const
   */
  spaceDelimited: "space-delimited"
};
/**
 * The format of the authorization groups claim value when it is a string. The allowed values and their meaning are:  <pre> \"single\" - When the claim is a string, it is interpreted as as single group. \"space-delimited\" - When the claim is a string, it is interpreted as a space-delimited list of groups, similar to the \"scope\" claim. </pre>  Available since 2.32.
 * @member {module:model/MsgVpnAuthenticationOauthProfileModel.AuthorizationGroupsClaimStringFormatEnum} authorizationGroupsClaimStringFormat
 */
MsgVpnAuthenticationOauthProfileModel.prototype.authorizationGroupsClaimStringFormat = undefined;

/**
 * The OAuth client id.
 * @member {String} clientId
 */
MsgVpnAuthenticationOauthProfileModel.prototype.clientId = undefined;

/**
 * The required value for the TYP field in the ID token header.
 * @member {String} clientRequiredType
 */
MsgVpnAuthenticationOauthProfileModel.prototype.clientRequiredType = undefined;

/**
 * Enable or disable verification of the TYP field in the ID token header.
 * @member {Boolean} clientValidateTypeEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.clientValidateTypeEnabled = undefined;

/**
 * Enable or disable the disconnection of clients when their tokens expire. Changing this value does not affect existing clients, only new client connections.
 * @member {Boolean} disconnectOnTokenExpirationEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.disconnectOnTokenExpirationEnabled = undefined;

/**
 * The reason for the last discovery endpoint refresh failure.
 * @member {String} discoveryLastRefreshFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last discovery endpoint refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryLastRefreshFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last discovery endpoint refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryLastRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled discovery endpoint refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryNextScheduledRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryNextScheduledRefreshTime = undefined;

/**
 * The number of discovery endpoint refresh failures.
 * @member {Number} discoveryRefreshFailureCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.discoveryRefreshFailureCount = undefined;

/**
 * Enable or disable the OAuth profile.
 * @member {Boolean} enabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.enabled = undefined;

/**
 * The OpenID Connect discovery endpoint or OAuth Authorization Server Metadata endpoint.
 * @member {String} endpointDiscovery
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointDiscovery = undefined;

/**
 * The number of seconds between discovery endpoint requests.
 * @member {Number} endpointDiscoveryRefreshInterval
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointDiscoveryRefreshInterval = undefined;

/**
 * The OAuth introspection endpoint.
 * @member {String} endpointIntrospection
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointIntrospection = undefined;

/**
 * The operational OAuth introspection endpoint.
 * @member {String} endpointIntrospectionOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointIntrospectionOperational = undefined;

/**
 * The maximum time in seconds a token introspection request is allowed to take.
 * @member {Number} endpointIntrospectionTimeout
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointIntrospectionTimeout = undefined;

/**
 * The OAuth JWKS endpoint.
 * @member {String} endpointJwks
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointJwks = undefined;

/**
 * The operational OAuth JWKS endpoint.
 * @member {String} endpointJwksOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointJwksOperational = undefined;

/**
 * The number of seconds between JWKS endpoint requests.
 * @member {Number} endpointJwksRefreshInterval
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointJwksRefreshInterval = undefined;

/**
 * The OpenID Connect Userinfo endpoint.
 * @member {String} endpointUserinfo
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointUserinfo = undefined;

/**
 * The operational OpenID Connect Userinfo endpoint.
 * @member {String} endpointUserinfoOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointUserinfoOperational = undefined;

/**
 * The maximum time in seconds a userinfo request is allowed to take.
 * @member {Number} endpointUserinfoTimeout
 */
MsgVpnAuthenticationOauthProfileModel.prototype.endpointUserinfoTimeout = undefined;

/**
 * The number of requests with an expired OAuth token.
 * @member {Number} expiredTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.expiredTokenCount = undefined;

/**
 * The number of times the groups were successfully found in the ID token or access token for request authentication.
 * @member {Number} groupsFoundInTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.groupsFoundInTokenCount = undefined;

/**
 * The reason the profile is not active. The allowed values and their meaning are:  <pre> \"msg-vpn-disabled\" - The Message VPN is disabled. \"oauth-disabled\" - OAuth is disabled for the Message VPN. \"profile-disabled\" - The OAuth profile is disabled. \"missing-issuer\" - The issuer has not been discovered or configured. \"duplicate-issuer\" - Another OAuth profile in the Message VPN already has the same issuer. \"none\" - The OAuth profile is active. </pre>  Available since 2.26.
 * @member {String} inactiveReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.inactiveReason = undefined;

/**
 * The one minute average of the time required to complete a token introspection, in milliseconds (ms).
 * @member {Number} introspectionAverageTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionAverageTime = undefined;

/**
 * The reason for the introspection endpoint request failure.
 * @member {String} introspectionLastFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionLastFailureReason = undefined;

/**
 * The timestamp of the last introspection endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} introspectionLastFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionLastFailureTime = undefined;

/**
 * The number of failures during request authentication due to missing introspection configuration (a introspection request was required but no introspection endpoint was configured).
 * @member {Number} introspectionMissingCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionMissingCount = undefined;

/**
 * The number of introspection request made from the broker during request authentication for this OAuth profile where the configured groups claim wasn't found in the access token or the introspection response.
 * @member {Number} introspectionMissingGroupsCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionMissingGroupsCount = undefined;

/**
 * The number of introspection requests made from the broker during request authentication for this OAuth profile where the configured username claim wasn't found in the access token or introspection response.
 * @member {Number} introspectionMissingUsernameCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionMissingUsernameCount = undefined;

/**
 * The number of requests made to the introspection endpoint during request authentication.
 * @member {Number} introspectionRequestCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionRequestCount = undefined;

/**
 * The number of introspection responses during request authentication that couldn't be parsed.
 * @member {Number} introspectionResponseInvalidCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionResponseInvalidCount = undefined;

/**
 * The number of introspection requests made from the broker during request authentication for this OAuth profile with 200 status responses.
 * @member {Number} introspectionStatusOkCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionStatusOkCount = undefined;

/**
 * The number of introspection requests made from the broker during request authentication for this OAuth profile with status responses other than 200.
 * @member {Number} introspectionStatusOtherCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionStatusOtherCount = undefined;

/**
 * The number of introspection responses indicating that the provided token was not active.
 * @member {Number} introspectionTokenNotActiveCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.introspectionTokenNotActiveCount = undefined;

/**
 * The number of requests with an invalid OAuth token.
 * @member {Number} invalidTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.invalidTokenCount = undefined;

/**
 * The Issuer Identifier for the OAuth provider.
 * @member {String} issuer
 */
MsgVpnAuthenticationOauthProfileModel.prototype.issuer = undefined;

/**
 * The operational Issuer Identifier for the OAuth provider.
 * @member {String} issuerOperational
 */
MsgVpnAuthenticationOauthProfileModel.prototype.issuerOperational = undefined;

/**
 * The reason for the last JWKS public key refresh failure.
 * @member {String} jwksLastRefreshFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last JWKS public key refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksLastRefreshFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last JWKS public key refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksLastRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled JWKS public key refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksNextScheduledRefreshTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksNextScheduledRefreshTime = undefined;

/**
 * The number of JWKS public key refresh failures.
 * @member {Number} jwksRefreshFailureCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.jwksRefreshFailureCount = undefined;

/**
 * Enable or disable whether the API provided MQTT client username will be validated against the username calculated from the token(s). When enabled, connection attempts by MQTT clients are rejected if they differ. Note that this value only applies to MQTT clients; SMF client usernames will not be validated.
 * @member {Boolean} mqttUsernameValidateEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.mqttUsernameValidateEnabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.oauthProfileName = undefined;

/**
 * Allowed values for the <code>oauthRole</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnAuthenticationOauthProfileModel.OauthRoleEnum = {
  /**
   * value: "client"
   * @const
   */
  client: "client",

  /**
   * value: "resource-server"
   * @const
   */
  resourceServer: "resource-server"
};
/**
 * The OAuth role of the broker. The allowed values and their meaning are:  <pre> \"client\" - The broker is in the OAuth client role. \"resource-server\" - The broker is in the OAuth resource server role. </pre> 
 * @member {module:model/MsgVpnAuthenticationOauthProfileModel.OauthRoleEnum} oauthRole
 */
MsgVpnAuthenticationOauthProfileModel.prototype.oauthRole = undefined;

/**
 * The number of requests (successful and unsuccessful) using this OAuth profile.
 * @member {Number} requestCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.requestCount = undefined;

/**
 * Enable or disable parsing of the access token as a JWT.
 * @member {Boolean} resourceServerParseAccessTokenEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerParseAccessTokenEnabled = undefined;

/**
 * The required audience value.
 * @member {String} resourceServerRequiredAudience
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredAudience = undefined;

/**
 * The required issuer value.
 * @member {String} resourceServerRequiredIssuer
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredIssuer = undefined;

/**
 * A space-separated list of scopes that must be present in the scope claim.
 * @member {String} resourceServerRequiredScope
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredScope = undefined;

/**
 * The required TYP value.
 * @member {String} resourceServerRequiredType
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerRequiredType = undefined;

/**
 * Enable or disable verification of the audience claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateAudienceEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateAudienceEnabled = undefined;

/**
 * Enable or disable verification of the issuer claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateIssuerEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateIssuerEnabled = undefined;

/**
 * Enable or disable verification of the scope claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateScopeEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateScopeEnabled = undefined;

/**
 * Enable or disable verification of the TYP field in the access token header.
 * @member {Boolean} resourceServerValidateTypeEnabled
 */
MsgVpnAuthenticationOauthProfileModel.prototype.resourceServerValidateTypeEnabled = undefined;

/**
 * The number of successful authentications using this OAuth profile.
 * @member {Number} successCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.successCount = undefined;

/**
 * The one minute average of the time required to complete a token userinfo request, in milliseconds (ms).
 * @member {Number} userinfoAverageTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoAverageTime = undefined;

/**
 * The reason for the userinfo endpoint request failure.
 * @member {String} userinfoLastFailureReason
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoLastFailureReason = undefined;

/**
 * The timestamp of the last userinfo endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} userinfoLastFailureTime
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoLastFailureTime = undefined;

/**
 * The number of failures due to missing Userinfo configuration (a Userinfo request was required but no Userinfo endpoint was configured) during request authentication.
 * @member {Number} userinfoMissingCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoMissingCount = undefined;

/**
 * The number of Userinfo request made from the broker during request authentication for this OAuth profile where the configured groups claim wasn't found in the ID token or the Userinfo response.
 * @member {Number} userinfoMissingGroupsCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoMissingGroupsCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile where the configured username claim wasn't found in the ID token or Userinfo response.
 * @member {Number} userinfoMissingUsernameCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoMissingUsernameCount = undefined;

/**
 * The number of requests made to the Userinfo endpoint during request authentication.
 * @member {Number} userinfoRequestCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoRequestCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with responses that couldn't be parsed.
 * @member {Number} userinfoResponseInvalidCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoResponseInvalidCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with 200 status responses.
 * @member {Number} userinfoStatusOkCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoStatusOkCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with status responses other than 200.
 * @member {Number} userinfoStatusOtherCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoStatusOtherCount = undefined;

/**
 * The number of Userinfo requests made from the broker during request authentication for this OAuth profile with subject claims that did not match the subject from the ID token.
 * @member {Number} userinfoSubjectMismatchCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.userinfoSubjectMismatchCount = undefined;

/**
 * The name of the username claim.
 * @member {String} usernameClaimName
 */
MsgVpnAuthenticationOauthProfileModel.prototype.usernameClaimName = undefined;

/**
 * The number of time the username was successfully found in the ID token or access token for request authentication.
 * @member {Number} usernameFoundInTokenCount
 */
MsgVpnAuthenticationOauthProfileModel.prototype.usernameFoundInTokenCount = undefined;

