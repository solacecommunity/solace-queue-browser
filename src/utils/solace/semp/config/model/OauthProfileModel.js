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
 * The OauthProfileModel model module.
 * @module model/OauthProfileModel
 * @version 2.36
 */
export class OauthProfileModel {
  /**
   * Constructs a new <code>OauthProfileModel</code>.
   * @alias module:model/OauthProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileModel} The populated <code>OauthProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileModel();
      if (data.hasOwnProperty('accessLevelGroupsClaimName'))
        obj.accessLevelGroupsClaimName = ApiClient.convertToType(data['accessLevelGroupsClaimName'], 'String');
      if (data.hasOwnProperty('accessLevelGroupsClaimStringFormat'))
        obj.accessLevelGroupsClaimStringFormat = ApiClient.convertToType(data['accessLevelGroupsClaimStringFormat'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('clientRedirectUri'))
        obj.clientRedirectUri = ApiClient.convertToType(data['clientRedirectUri'], 'String');
      if (data.hasOwnProperty('clientRequiredType'))
        obj.clientRequiredType = ApiClient.convertToType(data['clientRequiredType'], 'String');
      if (data.hasOwnProperty('clientScope'))
        obj.clientScope = ApiClient.convertToType(data['clientScope'], 'String');
      if (data.hasOwnProperty('clientSecret'))
        obj.clientSecret = ApiClient.convertToType(data['clientSecret'], 'String');
      if (data.hasOwnProperty('clientValidateTypeEnabled'))
        obj.clientValidateTypeEnabled = ApiClient.convertToType(data['clientValidateTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('defaultGlobalAccessLevel'))
        obj.defaultGlobalAccessLevel = ApiClient.convertToType(data['defaultGlobalAccessLevel'], 'String');
      if (data.hasOwnProperty('defaultMsgVpnAccessLevel'))
        obj.defaultMsgVpnAccessLevel = ApiClient.convertToType(data['defaultMsgVpnAccessLevel'], 'String');
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('endpointAuthorization'))
        obj.endpointAuthorization = ApiClient.convertToType(data['endpointAuthorization'], 'String');
      if (data.hasOwnProperty('endpointDiscovery'))
        obj.endpointDiscovery = ApiClient.convertToType(data['endpointDiscovery'], 'String');
      if (data.hasOwnProperty('endpointDiscoveryRefreshInterval'))
        obj.endpointDiscoveryRefreshInterval = ApiClient.convertToType(data['endpointDiscoveryRefreshInterval'], 'Number');
      if (data.hasOwnProperty('endpointIntrospection'))
        obj.endpointIntrospection = ApiClient.convertToType(data['endpointIntrospection'], 'String');
      if (data.hasOwnProperty('endpointIntrospectionTimeout'))
        obj.endpointIntrospectionTimeout = ApiClient.convertToType(data['endpointIntrospectionTimeout'], 'Number');
      if (data.hasOwnProperty('endpointJwks'))
        obj.endpointJwks = ApiClient.convertToType(data['endpointJwks'], 'String');
      if (data.hasOwnProperty('endpointJwksRefreshInterval'))
        obj.endpointJwksRefreshInterval = ApiClient.convertToType(data['endpointJwksRefreshInterval'], 'Number');
      if (data.hasOwnProperty('endpointToken'))
        obj.endpointToken = ApiClient.convertToType(data['endpointToken'], 'String');
      if (data.hasOwnProperty('endpointTokenTimeout'))
        obj.endpointTokenTimeout = ApiClient.convertToType(data['endpointTokenTimeout'], 'Number');
      if (data.hasOwnProperty('endpointUserinfo'))
        obj.endpointUserinfo = ApiClient.convertToType(data['endpointUserinfo'], 'String');
      if (data.hasOwnProperty('endpointUserinfoTimeout'))
        obj.endpointUserinfoTimeout = ApiClient.convertToType(data['endpointUserinfoTimeout'], 'Number');
      if (data.hasOwnProperty('interactiveEnabled'))
        obj.interactiveEnabled = ApiClient.convertToType(data['interactiveEnabled'], 'Boolean');
      if (data.hasOwnProperty('interactivePromptForExpiredSession'))
        obj.interactivePromptForExpiredSession = ApiClient.convertToType(data['interactivePromptForExpiredSession'], 'String');
      if (data.hasOwnProperty('interactivePromptForNewSession'))
        obj.interactivePromptForNewSession = ApiClient.convertToType(data['interactivePromptForNewSession'], 'String');
      if (data.hasOwnProperty('issuer'))
        obj.issuer = ApiClient.convertToType(data['issuer'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
      if (data.hasOwnProperty('oauthRole'))
        obj.oauthRole = ApiClient.convertToType(data['oauthRole'], 'String');
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
      if (data.hasOwnProperty('sempEnabled'))
        obj.sempEnabled = ApiClient.convertToType(data['sempEnabled'], 'Boolean');
      if (data.hasOwnProperty('usernameClaimName'))
        obj.usernameClaimName = ApiClient.convertToType(data['usernameClaimName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the groups claim. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"groups\"`.
 * @member {String} accessLevelGroupsClaimName
 */
OauthProfileModel.prototype.accessLevelGroupsClaimName = undefined;

/**
 * Allowed values for the <code>accessLevelGroupsClaimStringFormat</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileModel.AccessLevelGroupsClaimStringFormatEnum = {
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
 * The format of the access level groups claim value when it is a string. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"single\"`. The allowed values and their meaning are:  <pre> \"single\" - When the claim is a string, it is interpreted as as single group. \"space-delimited\" - When the claim is a string, it is interpreted as a space-delimited list of groups, similar to the \"scope\" claim. </pre>  Available since 2.32.
 * @member {module:model/OauthProfileModel.AccessLevelGroupsClaimStringFormatEnum} accessLevelGroupsClaimStringFormat
 */
OauthProfileModel.prototype.accessLevelGroupsClaimStringFormat = undefined;

/**
 * The OAuth client id. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} clientId
 */
OauthProfileModel.prototype.clientId = undefined;

/**
 * The OAuth redirect URI. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} clientRedirectUri
 */
OauthProfileModel.prototype.clientRedirectUri = undefined;

/**
 * The required value for the TYP field in the ID token header. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"JWT\"`.
 * @member {String} clientRequiredType
 */
OauthProfileModel.prototype.clientRequiredType = undefined;

/**
 * The OAuth scope. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"openid email\"`.
 * @member {String} clientScope
 */
OauthProfileModel.prototype.clientScope = undefined;

/**
 * The OAuth client secret. This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions in note 4. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} clientSecret
 */
OauthProfileModel.prototype.clientSecret = undefined;

/**
 * Enable or disable verification of the TYP field in the ID token header. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} clientValidateTypeEnabled
 */
OauthProfileModel.prototype.clientValidateTypeEnabled = undefined;

/**
 * Allowed values for the <code>defaultGlobalAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileModel.DefaultGlobalAccessLevelEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "read-only"
   * @const
   */
  readOnly: "read-only",

  /**
   * value: "read-write"
   * @const
   */
  readWrite: "read-write",

  /**
   * value: "admin"
   * @const
   */
  admin: "admin"
};
/**
 * The default global access level for this OAuth profile. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"none\"`. The allowed values and their meaning are:  <pre> \"none\" - User has no access to global data. \"read-only\" - User has read-only access to global data. \"read-write\" - User has read-write access to most global data. \"admin\" - User has read-write access to all global data. </pre> 
 * @member {module:model/OauthProfileModel.DefaultGlobalAccessLevelEnum} defaultGlobalAccessLevel
 */
OauthProfileModel.prototype.defaultGlobalAccessLevel = undefined;

/**
 * Allowed values for the <code>defaultMsgVpnAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileModel.DefaultMsgVpnAccessLevelEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "read-only"
   * @const
   */
  readOnly: "read-only",

  /**
   * value: "read-write"
   * @const
   */
  readWrite: "read-write"
};
/**
 * The default message VPN access level for the OAuth profile. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"none\"`. The allowed values and their meaning are:  <pre> \"none\" - User has no access to a Message VPN. \"read-only\" - User has read-only access to a Message VPN. \"read-write\" - User has read-write access to most Message VPN settings. </pre> 
 * @member {module:model/OauthProfileModel.DefaultMsgVpnAccessLevelEnum} defaultMsgVpnAccessLevel
 */
OauthProfileModel.prototype.defaultMsgVpnAccessLevel = undefined;

/**
 * The user friendly name for the OAuth profile. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} displayName
 */
OauthProfileModel.prototype.displayName = undefined;

/**
 * Enable or disable the OAuth profile. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `false`.
 * @member {Boolean} enabled
 */
OauthProfileModel.prototype.enabled = undefined;

/**
 * The OAuth authorization endpoint. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} endpointAuthorization
 */
OauthProfileModel.prototype.endpointAuthorization = undefined;

/**
 * The OpenID Connect discovery endpoint or OAuth Authorization Server Metadata endpoint. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} endpointDiscovery
 */
OauthProfileModel.prototype.endpointDiscovery = undefined;

/**
 * The number of seconds between discovery endpoint requests. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `86400`.
 * @member {Number} endpointDiscoveryRefreshInterval
 */
OauthProfileModel.prototype.endpointDiscoveryRefreshInterval = undefined;

/**
 * The OAuth introspection endpoint. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} endpointIntrospection
 */
OauthProfileModel.prototype.endpointIntrospection = undefined;

/**
 * The maximum time in seconds a token introspection request is allowed to take. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
 * @member {Number} endpointIntrospectionTimeout
 */
OauthProfileModel.prototype.endpointIntrospectionTimeout = undefined;

/**
 * The OAuth JWKS endpoint. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} endpointJwks
 */
OauthProfileModel.prototype.endpointJwks = undefined;

/**
 * The number of seconds between JWKS endpoint requests. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `86400`.
 * @member {Number} endpointJwksRefreshInterval
 */
OauthProfileModel.prototype.endpointJwksRefreshInterval = undefined;

/**
 * The OAuth token endpoint. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} endpointToken
 */
OauthProfileModel.prototype.endpointToken = undefined;

/**
 * The maximum time in seconds a token request is allowed to take. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
 * @member {Number} endpointTokenTimeout
 */
OauthProfileModel.prototype.endpointTokenTimeout = undefined;

/**
 * The OpenID Connect Userinfo endpoint. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} endpointUserinfo
 */
OauthProfileModel.prototype.endpointUserinfo = undefined;

/**
 * The maximum time in seconds a userinfo request is allowed to take. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `1`.
 * @member {Number} endpointUserinfoTimeout
 */
OauthProfileModel.prototype.endpointUserinfoTimeout = undefined;

/**
 * Enable or disable interactive logins via this OAuth provider. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} interactiveEnabled
 */
OauthProfileModel.prototype.interactiveEnabled = undefined;

/**
 * The value of the prompt parameter provided to the OAuth authorization server for login requests where the session has expired. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} interactivePromptForExpiredSession
 */
OauthProfileModel.prototype.interactivePromptForExpiredSession = undefined;

/**
 * The value of the prompt parameter provided to the OAuth authorization server for login requests where the session is new or the user has explicitly logged out. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"select_account\"`.
 * @member {String} interactivePromptForNewSession
 */
OauthProfileModel.prototype.interactivePromptForNewSession = undefined;

/**
 * The Issuer Identifier for the OAuth provider. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} issuer
 */
OauthProfileModel.prototype.issuer = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileModel.prototype.oauthProfileName = undefined;

/**
 * Allowed values for the <code>oauthRole</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileModel.OauthRoleEnum = {
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
 * The OAuth role of the broker. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"client\"`. The allowed values and their meaning are:  <pre> \"client\" - The broker is in the OAuth client role. \"resource-server\" - The broker is in the OAuth resource server role. </pre> 
 * @member {module:model/OauthProfileModel.OauthRoleEnum} oauthRole
 */
OauthProfileModel.prototype.oauthRole = undefined;

/**
 * Enable or disable parsing of the access token as a JWT. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} resourceServerParseAccessTokenEnabled
 */
OauthProfileModel.prototype.resourceServerParseAccessTokenEnabled = undefined;

/**
 * The required audience value. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} resourceServerRequiredAudience
 */
OauthProfileModel.prototype.resourceServerRequiredAudience = undefined;

/**
 * The required issuer value. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} resourceServerRequiredIssuer
 */
OauthProfileModel.prototype.resourceServerRequiredIssuer = undefined;

/**
 * A space-separated list of scopes that must be present in the scope claim. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"\"`.
 * @member {String} resourceServerRequiredScope
 */
OauthProfileModel.prototype.resourceServerRequiredScope = undefined;

/**
 * The required TYP value. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"at+jwt\"`.
 * @member {String} resourceServerRequiredType
 */
OauthProfileModel.prototype.resourceServerRequiredType = undefined;

/**
 * Enable or disable verification of the audience claim in the access token or introspection response. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} resourceServerValidateAudienceEnabled
 */
OauthProfileModel.prototype.resourceServerValidateAudienceEnabled = undefined;

/**
 * Enable or disable verification of the issuer claim in the access token or introspection response. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} resourceServerValidateIssuerEnabled
 */
OauthProfileModel.prototype.resourceServerValidateIssuerEnabled = undefined;

/**
 * Enable or disable verification of the scope claim in the access token or introspection response. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} resourceServerValidateScopeEnabled
 */
OauthProfileModel.prototype.resourceServerValidateScopeEnabled = undefined;

/**
 * Enable or disable verification of the TYP field in the access token header. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} resourceServerValidateTypeEnabled
 */
OauthProfileModel.prototype.resourceServerValidateTypeEnabled = undefined;

/**
 * Enable or disable authentication of SEMP requests with OAuth tokens. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `true`.
 * @member {Boolean} sempEnabled
 */
OauthProfileModel.prototype.sempEnabled = undefined;

/**
 * The name of the username claim. Changes to this attribute are synchronized to HA mates via config-sync. The default value is `\"sub\"`.
 * @member {String} usernameClaimName
 */
OauthProfileModel.prototype.usernameClaimName = undefined;

