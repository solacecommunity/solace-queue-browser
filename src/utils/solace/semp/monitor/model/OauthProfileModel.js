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
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('clientRedirectUri'))
        obj.clientRedirectUri = ApiClient.convertToType(data['clientRedirectUri'], 'String');
      if (data.hasOwnProperty('clientRequiredType'))
        obj.clientRequiredType = ApiClient.convertToType(data['clientRequiredType'], 'String');
      if (data.hasOwnProperty('clientScope'))
        obj.clientScope = ApiClient.convertToType(data['clientScope'], 'String');
      if (data.hasOwnProperty('clientValidateTypeEnabled'))
        obj.clientValidateTypeEnabled = ApiClient.convertToType(data['clientValidateTypeEnabled'], 'Boolean');
      if (data.hasOwnProperty('completeExpiredStateCount'))
        obj.completeExpiredStateCount = ApiClient.convertToType(data['completeExpiredStateCount'], 'Number');
      if (data.hasOwnProperty('completeInvalidStateCount'))
        obj.completeInvalidStateCount = ApiClient.convertToType(data['completeInvalidStateCount'], 'Number');
      if (data.hasOwnProperty('completeRequestCount'))
        obj.completeRequestCount = ApiClient.convertToType(data['completeRequestCount'], 'Number');
      if (data.hasOwnProperty('completeSuccessCount'))
        obj.completeSuccessCount = ApiClient.convertToType(data['completeSuccessCount'], 'Number');
      if (data.hasOwnProperty('defaultGlobalAccessLevel'))
        obj.defaultGlobalAccessLevel = ApiClient.convertToType(data['defaultGlobalAccessLevel'], 'String');
      if (data.hasOwnProperty('defaultMsgVpnAccessLevel'))
        obj.defaultMsgVpnAccessLevel = ApiClient.convertToType(data['defaultMsgVpnAccessLevel'], 'String');
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
      if (data.hasOwnProperty('displayName'))
        obj.displayName = ApiClient.convertToType(data['displayName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('endpointAuthorization'))
        obj.endpointAuthorization = ApiClient.convertToType(data['endpointAuthorization'], 'String');
      if (data.hasOwnProperty('endpointAuthorizationOperational'))
        obj.endpointAuthorizationOperational = ApiClient.convertToType(data['endpointAuthorizationOperational'], 'String');
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
      if (data.hasOwnProperty('endpointToken'))
        obj.endpointToken = ApiClient.convertToType(data['endpointToken'], 'String');
      if (data.hasOwnProperty('endpointTokenOperational'))
        obj.endpointTokenOperational = ApiClient.convertToType(data['endpointTokenOperational'], 'String');
      if (data.hasOwnProperty('endpointTokenTimeout'))
        obj.endpointTokenTimeout = ApiClient.convertToType(data['endpointTokenTimeout'], 'Number');
      if (data.hasOwnProperty('endpointUserinfo'))
        obj.endpointUserinfo = ApiClient.convertToType(data['endpointUserinfo'], 'String');
      if (data.hasOwnProperty('endpointUserinfoOperational'))
        obj.endpointUserinfoOperational = ApiClient.convertToType(data['endpointUserinfoOperational'], 'String');
      if (data.hasOwnProperty('endpointUserinfoTimeout'))
        obj.endpointUserinfoTimeout = ApiClient.convertToType(data['endpointUserinfoTimeout'], 'Number');
      if (data.hasOwnProperty('inactiveReason'))
        obj.inactiveReason = ApiClient.convertToType(data['inactiveReason'], 'String');
      if (data.hasOwnProperty('initiateInvalidErrorLinkCount'))
        obj.initiateInvalidErrorLinkCount = ApiClient.convertToType(data['initiateInvalidErrorLinkCount'], 'Number');
      if (data.hasOwnProperty('initiateInvalidHostCount'))
        obj.initiateInvalidHostCount = ApiClient.convertToType(data['initiateInvalidHostCount'], 'Number');
      if (data.hasOwnProperty('initiateInvalidTargetLinkCount'))
        obj.initiateInvalidTargetLinkCount = ApiClient.convertToType(data['initiateInvalidTargetLinkCount'], 'Number');
      if (data.hasOwnProperty('initiateRequestCount'))
        obj.initiateRequestCount = ApiClient.convertToType(data['initiateRequestCount'], 'Number');
      if (data.hasOwnProperty('initiateSuccessCount'))
        obj.initiateSuccessCount = ApiClient.convertToType(data['initiateSuccessCount'], 'Number');
      if (data.hasOwnProperty('interactiveEnabled'))
        obj.interactiveEnabled = ApiClient.convertToType(data['interactiveEnabled'], 'Boolean');
      if (data.hasOwnProperty('interactiveGroupsFoundInTokenCount'))
        obj.interactiveGroupsFoundInTokenCount = ApiClient.convertToType(data['interactiveGroupsFoundInTokenCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionMissingCount'))
        obj.interactiveIntrospectionMissingCount = ApiClient.convertToType(data['interactiveIntrospectionMissingCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionMissingGroupsCount'))
        obj.interactiveIntrospectionMissingGroupsCount = ApiClient.convertToType(data['interactiveIntrospectionMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionMissingUsernameCount'))
        obj.interactiveIntrospectionMissingUsernameCount = ApiClient.convertToType(data['interactiveIntrospectionMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionRequestCount'))
        obj.interactiveIntrospectionRequestCount = ApiClient.convertToType(data['interactiveIntrospectionRequestCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionResponseInvalidCount'))
        obj.interactiveIntrospectionResponseInvalidCount = ApiClient.convertToType(data['interactiveIntrospectionResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionStatusOkCount'))
        obj.interactiveIntrospectionStatusOkCount = ApiClient.convertToType(data['interactiveIntrospectionStatusOkCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionStatusOtherCount'))
        obj.interactiveIntrospectionStatusOtherCount = ApiClient.convertToType(data['interactiveIntrospectionStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('interactiveIntrospectionTokenNotActiveCount'))
        obj.interactiveIntrospectionTokenNotActiveCount = ApiClient.convertToType(data['interactiveIntrospectionTokenNotActiveCount'], 'Number');
      if (data.hasOwnProperty('interactivePromptForExpiredSession'))
        obj.interactivePromptForExpiredSession = ApiClient.convertToType(data['interactivePromptForExpiredSession'], 'String');
      if (data.hasOwnProperty('interactivePromptForNewSession'))
        obj.interactivePromptForNewSession = ApiClient.convertToType(data['interactivePromptForNewSession'], 'String');
      if (data.hasOwnProperty('interactiveUserinfoMissingCount'))
        obj.interactiveUserinfoMissingCount = ApiClient.convertToType(data['interactiveUserinfoMissingCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoMissingGroupsCount'))
        obj.interactiveUserinfoMissingGroupsCount = ApiClient.convertToType(data['interactiveUserinfoMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoMissingUsernameCount'))
        obj.interactiveUserinfoMissingUsernameCount = ApiClient.convertToType(data['interactiveUserinfoMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoRequestCount'))
        obj.interactiveUserinfoRequestCount = ApiClient.convertToType(data['interactiveUserinfoRequestCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoResponseInvalidCount'))
        obj.interactiveUserinfoResponseInvalidCount = ApiClient.convertToType(data['interactiveUserinfoResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoStatusOkCount'))
        obj.interactiveUserinfoStatusOkCount = ApiClient.convertToType(data['interactiveUserinfoStatusOkCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoStatusOtherCount'))
        obj.interactiveUserinfoStatusOtherCount = ApiClient.convertToType(data['interactiveUserinfoStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('interactiveUserinfoSubjectMismatchCount'))
        obj.interactiveUserinfoSubjectMismatchCount = ApiClient.convertToType(data['interactiveUserinfoSubjectMismatchCount'], 'Number');
      if (data.hasOwnProperty('interactiveUsernameFoundInTokenCount'))
        obj.interactiveUsernameFoundInTokenCount = ApiClient.convertToType(data['interactiveUsernameFoundInTokenCount'], 'Number');
      if (data.hasOwnProperty('introspectionAverageTime'))
        obj.introspectionAverageTime = ApiClient.convertToType(data['introspectionAverageTime'], 'Number');
      if (data.hasOwnProperty('introspectionLastFailureReason'))
        obj.introspectionLastFailureReason = ApiClient.convertToType(data['introspectionLastFailureReason'], 'String');
      if (data.hasOwnProperty('introspectionLastFailureTime'))
        obj.introspectionLastFailureTime = ApiClient.convertToType(data['introspectionLastFailureTime'], 'Number');
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
      if (data.hasOwnProperty('sempExpiredTokenCount'))
        obj.sempExpiredTokenCount = ApiClient.convertToType(data['sempExpiredTokenCount'], 'Number');
      if (data.hasOwnProperty('sempGroupsFoundInTokenCount'))
        obj.sempGroupsFoundInTokenCount = ApiClient.convertToType(data['sempGroupsFoundInTokenCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionMissingCount'))
        obj.sempIntrospectionMissingCount = ApiClient.convertToType(data['sempIntrospectionMissingCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionMissingGroupsCount'))
        obj.sempIntrospectionMissingGroupsCount = ApiClient.convertToType(data['sempIntrospectionMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionMissingUsernameCount'))
        obj.sempIntrospectionMissingUsernameCount = ApiClient.convertToType(data['sempIntrospectionMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionRequestCount'))
        obj.sempIntrospectionRequestCount = ApiClient.convertToType(data['sempIntrospectionRequestCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionResponseInvalidCount'))
        obj.sempIntrospectionResponseInvalidCount = ApiClient.convertToType(data['sempIntrospectionResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionStatusOkCount'))
        obj.sempIntrospectionStatusOkCount = ApiClient.convertToType(data['sempIntrospectionStatusOkCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionStatusOtherCount'))
        obj.sempIntrospectionStatusOtherCount = ApiClient.convertToType(data['sempIntrospectionStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('sempIntrospectionTokenNotActiveCount'))
        obj.sempIntrospectionTokenNotActiveCount = ApiClient.convertToType(data['sempIntrospectionTokenNotActiveCount'], 'Number');
      if (data.hasOwnProperty('sempInvalidTokenCount'))
        obj.sempInvalidTokenCount = ApiClient.convertToType(data['sempInvalidTokenCount'], 'Number');
      if (data.hasOwnProperty('sempRequestCount'))
        obj.sempRequestCount = ApiClient.convertToType(data['sempRequestCount'], 'Number');
      if (data.hasOwnProperty('sempSuccessCount'))
        obj.sempSuccessCount = ApiClient.convertToType(data['sempSuccessCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoMissingCount'))
        obj.sempUserinfoMissingCount = ApiClient.convertToType(data['sempUserinfoMissingCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoMissingGroupsCount'))
        obj.sempUserinfoMissingGroupsCount = ApiClient.convertToType(data['sempUserinfoMissingGroupsCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoMissingUsernameCount'))
        obj.sempUserinfoMissingUsernameCount = ApiClient.convertToType(data['sempUserinfoMissingUsernameCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoRequestCount'))
        obj.sempUserinfoRequestCount = ApiClient.convertToType(data['sempUserinfoRequestCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoResponseInvalidCount'))
        obj.sempUserinfoResponseInvalidCount = ApiClient.convertToType(data['sempUserinfoResponseInvalidCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoStatusOkCount'))
        obj.sempUserinfoStatusOkCount = ApiClient.convertToType(data['sempUserinfoStatusOkCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoStatusOtherCount'))
        obj.sempUserinfoStatusOtherCount = ApiClient.convertToType(data['sempUserinfoStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('sempUserinfoSubjectMismatchCount'))
        obj.sempUserinfoSubjectMismatchCount = ApiClient.convertToType(data['sempUserinfoSubjectMismatchCount'], 'Number');
      if (data.hasOwnProperty('sempUsernameFoundInTokenCount'))
        obj.sempUsernameFoundInTokenCount = ApiClient.convertToType(data['sempUsernameFoundInTokenCount'], 'Number');
      if (data.hasOwnProperty('tokenEndpointAverageTime'))
        obj.tokenEndpointAverageTime = ApiClient.convertToType(data['tokenEndpointAverageTime'], 'Number');
      if (data.hasOwnProperty('tokenEndpointInvalidTokenCount'))
        obj.tokenEndpointInvalidTokenCount = ApiClient.convertToType(data['tokenEndpointInvalidTokenCount'], 'Number');
      if (data.hasOwnProperty('tokenEndpointLastFailureReason'))
        obj.tokenEndpointLastFailureReason = ApiClient.convertToType(data['tokenEndpointLastFailureReason'], 'String');
      if (data.hasOwnProperty('tokenEndpointLastFailureTime'))
        obj.tokenEndpointLastFailureTime = ApiClient.convertToType(data['tokenEndpointLastFailureTime'], 'Number');
      if (data.hasOwnProperty('tokenEndpointOtherErrorCount'))
        obj.tokenEndpointOtherErrorCount = ApiClient.convertToType(data['tokenEndpointOtherErrorCount'], 'Number');
      if (data.hasOwnProperty('tokenEndpointRequestCount'))
        obj.tokenEndpointRequestCount = ApiClient.convertToType(data['tokenEndpointRequestCount'], 'Number');
      if (data.hasOwnProperty('tokenEndpointStatusBadRequestCount'))
        obj.tokenEndpointStatusBadRequestCount = ApiClient.convertToType(data['tokenEndpointStatusBadRequestCount'], 'Number');
      if (data.hasOwnProperty('tokenEndpointStatusOkCount'))
        obj.tokenEndpointStatusOkCount = ApiClient.convertToType(data['tokenEndpointStatusOkCount'], 'Number');
      if (data.hasOwnProperty('tokenEndpointStatusOtherCount'))
        obj.tokenEndpointStatusOtherCount = ApiClient.convertToType(data['tokenEndpointStatusOtherCount'], 'Number');
      if (data.hasOwnProperty('userinfoAverageTime'))
        obj.userinfoAverageTime = ApiClient.convertToType(data['userinfoAverageTime'], 'Number');
      if (data.hasOwnProperty('userinfoLastFailureReason'))
        obj.userinfoLastFailureReason = ApiClient.convertToType(data['userinfoLastFailureReason'], 'String');
      if (data.hasOwnProperty('userinfoLastFailureTime'))
        obj.userinfoLastFailureTime = ApiClient.convertToType(data['userinfoLastFailureTime'], 'Number');
      if (data.hasOwnProperty('usernameClaimName'))
        obj.usernameClaimName = ApiClient.convertToType(data['usernameClaimName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the groups claim.
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
 * The format of the access level groups claim value when it is a string. The allowed values and their meaning are:  <pre> \"single\" - When the claim is a string, it is interpreted as as single group. \"space-delimited\" - When the claim is a string, it is interpreted as a space-delimited list of groups, similar to the \"scope\" claim. </pre>  Available since 2.32.
 * @member {module:model/OauthProfileModel.AccessLevelGroupsClaimStringFormatEnum} accessLevelGroupsClaimStringFormat
 */
OauthProfileModel.prototype.accessLevelGroupsClaimStringFormat = undefined;

/**
 * Indicates whether the profile is active. An enabled profile may not be active if discovery is not complete, if there is no issuer specified, or if there is another profile with the same issuer. Available since 2.26.
 * @member {Boolean} active
 */
OauthProfileModel.prototype.active = undefined;

/**
 * The OAuth client id.
 * @member {String} clientId
 */
OauthProfileModel.prototype.clientId = undefined;

/**
 * The OAuth redirect URI.
 * @member {String} clientRedirectUri
 */
OauthProfileModel.prototype.clientRedirectUri = undefined;

/**
 * The required value for the TYP field in the ID token header.
 * @member {String} clientRequiredType
 */
OauthProfileModel.prototype.clientRequiredType = undefined;

/**
 * The OAuth scope.
 * @member {String} clientScope
 */
OauthProfileModel.prototype.clientScope = undefined;

/**
 * Enable or disable verification of the TYP field in the ID token header.
 * @member {Boolean} clientValidateTypeEnabled
 */
OauthProfileModel.prototype.clientValidateTypeEnabled = undefined;

/**
 * The number of requests to the broker OAuth completion endpoint with an expired state token.
 * @member {Number} completeExpiredStateCount
 */
OauthProfileModel.prototype.completeExpiredStateCount = undefined;

/**
 * The number of request to the broker OAuth completion endpoint with an invalid state token.
 * @member {Number} completeInvalidStateCount
 */
OauthProfileModel.prototype.completeInvalidStateCount = undefined;

/**
 * The number of requests to the broker OAuth completion endpoint (successful and unsuccessful).
 * @member {Number} completeRequestCount
 */
OauthProfileModel.prototype.completeRequestCount = undefined;

/**
 * The number of successful requests to the broker OAuth completion endpoint.  Successful requests have authenticated  the user and established a browser session.
 * @member {Number} completeSuccessCount
 */
OauthProfileModel.prototype.completeSuccessCount = undefined;

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
 * The default global access level for this OAuth profile. The allowed values and their meaning are:  <pre> \"none\" - User has no access to global data. \"read-only\" - User has read-only access to global data. \"read-write\" - User has read-write access to most global data. \"admin\" - User has read-write access to all global data. </pre> 
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
 * The default message VPN access level for the OAuth profile. The allowed values and their meaning are:  <pre> \"none\" - User has no access to a Message VPN. \"read-only\" - User has read-only access to a Message VPN. \"read-write\" - User has read-write access to most Message VPN settings. </pre> 
 * @member {module:model/OauthProfileModel.DefaultMsgVpnAccessLevelEnum} defaultMsgVpnAccessLevel
 */
OauthProfileModel.prototype.defaultMsgVpnAccessLevel = undefined;

/**
 * The reason for the last discovery endpoint refresh failure.
 * @member {String} discoveryLastRefreshFailureReason
 */
OauthProfileModel.prototype.discoveryLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last discovery endpoint refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryLastRefreshFailureTime
 */
OauthProfileModel.prototype.discoveryLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last discovery endpoint refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryLastRefreshTime
 */
OauthProfileModel.prototype.discoveryLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled discovery endpoint refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} discoveryNextScheduledRefreshTime
 */
OauthProfileModel.prototype.discoveryNextScheduledRefreshTime = undefined;

/**
 * The number of discovery endpoint refresh failures.
 * @member {Number} discoveryRefreshFailureCount
 */
OauthProfileModel.prototype.discoveryRefreshFailureCount = undefined;

/**
 * The user friendly name for the OAuth profile.
 * @member {String} displayName
 */
OauthProfileModel.prototype.displayName = undefined;

/**
 * Enable or disable the OAuth profile.
 * @member {Boolean} enabled
 */
OauthProfileModel.prototype.enabled = undefined;

/**
 * The OAuth authorization endpoint.
 * @member {String} endpointAuthorization
 */
OauthProfileModel.prototype.endpointAuthorization = undefined;

/**
 * The operational OAuth authorization endpoint.
 * @member {String} endpointAuthorizationOperational
 */
OauthProfileModel.prototype.endpointAuthorizationOperational = undefined;

/**
 * The OpenID Connect discovery endpoint or OAuth Authorization Server Metadata endpoint.
 * @member {String} endpointDiscovery
 */
OauthProfileModel.prototype.endpointDiscovery = undefined;

/**
 * The number of seconds between discovery endpoint requests.
 * @member {Number} endpointDiscoveryRefreshInterval
 */
OauthProfileModel.prototype.endpointDiscoveryRefreshInterval = undefined;

/**
 * The OAuth introspection endpoint.
 * @member {String} endpointIntrospection
 */
OauthProfileModel.prototype.endpointIntrospection = undefined;

/**
 * The operational OAuth introspection endpoint.
 * @member {String} endpointIntrospectionOperational
 */
OauthProfileModel.prototype.endpointIntrospectionOperational = undefined;

/**
 * The maximum time in seconds a token introspection request is allowed to take.
 * @member {Number} endpointIntrospectionTimeout
 */
OauthProfileModel.prototype.endpointIntrospectionTimeout = undefined;

/**
 * The OAuth JWKS endpoint.
 * @member {String} endpointJwks
 */
OauthProfileModel.prototype.endpointJwks = undefined;

/**
 * The operational OAuth JWKS endpoint.
 * @member {String} endpointJwksOperational
 */
OauthProfileModel.prototype.endpointJwksOperational = undefined;

/**
 * The number of seconds between JWKS endpoint requests.
 * @member {Number} endpointJwksRefreshInterval
 */
OauthProfileModel.prototype.endpointJwksRefreshInterval = undefined;

/**
 * The OAuth token endpoint.
 * @member {String} endpointToken
 */
OauthProfileModel.prototype.endpointToken = undefined;

/**
 * The operational OAuth token endpoint.
 * @member {String} endpointTokenOperational
 */
OauthProfileModel.prototype.endpointTokenOperational = undefined;

/**
 * The maximum time in seconds a token request is allowed to take.
 * @member {Number} endpointTokenTimeout
 */
OauthProfileModel.prototype.endpointTokenTimeout = undefined;

/**
 * The OpenID Connect Userinfo endpoint.
 * @member {String} endpointUserinfo
 */
OauthProfileModel.prototype.endpointUserinfo = undefined;

/**
 * The operational OpenID Connect Userinfo endpoint.
 * @member {String} endpointUserinfoOperational
 */
OauthProfileModel.prototype.endpointUserinfoOperational = undefined;

/**
 * The maximum time in seconds a userinfo request is allowed to take.
 * @member {Number} endpointUserinfoTimeout
 */
OauthProfileModel.prototype.endpointUserinfoTimeout = undefined;

/**
 * The reason the profile is not active. The allowed values and their meaning are:  <pre> \"profile-disabled\" - The OAuth profile is disabled. \"missing-issuer\" - The issuer has not been discovered or configured. \"duplicate-issuer\" - Another OAuth profile already has the same issuer. \"none\" - The OAuth profile is active. </pre>  Available since 2.26.
 * @member {String} inactiveReason
 */
OauthProfileModel.prototype.inactiveReason = undefined;

/**
 * The number of requests to the broker OAuth initiation endpoint that had an invalid error_link_uri parameter.
 * @member {Number} initiateInvalidErrorLinkCount
 */
OauthProfileModel.prototype.initiateInvalidErrorLinkCount = undefined;

/**
 * The number of requests to the broker OAuth initiation endpoint that did not have a valid Host header.  See the Allowed Host configuration setting.
 * @member {Number} initiateInvalidHostCount
 */
OauthProfileModel.prototype.initiateInvalidHostCount = undefined;

/**
 * The number of requests to the broker OAuth initiation endpoint that had an invalid target_link_uri parameter.
 * @member {Number} initiateInvalidTargetLinkCount
 */
OauthProfileModel.prototype.initiateInvalidTargetLinkCount = undefined;

/**
 * The number of requests to the broker OAuth initiation endpoint (successful and unsuccessful).
 * @member {Number} initiateRequestCount
 */
OauthProfileModel.prototype.initiateRequestCount = undefined;

/**
 * The number of requests to the broker OAuth initiation endpoint that successfully redirected to the OAuth provider's authorization endpoint.
 * @member {Number} initiateSuccessCount
 */
OauthProfileModel.prototype.initiateSuccessCount = undefined;

/**
 * Enable or disable interactive logins via this OAuth provider.
 * @member {Boolean} interactiveEnabled
 */
OauthProfileModel.prototype.interactiveEnabled = undefined;

/**
 * The number of times the groups were successfully found in the ID token or access token for interactive authentication.
 * @member {Number} interactiveGroupsFoundInTokenCount
 */
OauthProfileModel.prototype.interactiveGroupsFoundInTokenCount = undefined;

/**
 * The number of failures during interactive authentication due to missing introspection configuration (a introspection request was required but no introspection endpoint was configured).
 * @member {Number} interactiveIntrospectionMissingCount
 */
OauthProfileModel.prototype.interactiveIntrospectionMissingCount = undefined;

/**
 * The number of introspection request made from the broker during interactive authentication for this OAuth profile  where the configured groups claim wasn't found in the access token or the introspection response.
 * @member {Number} interactiveIntrospectionMissingGroupsCount
 */
OauthProfileModel.prototype.interactiveIntrospectionMissingGroupsCount = undefined;

/**
 * The number of introspection requests made from the broker during interactive authentication for this OAuth profile where the configured username claim wasn't found in the access token or introspection response.
 * @member {Number} interactiveIntrospectionMissingUsernameCount
 */
OauthProfileModel.prototype.interactiveIntrospectionMissingUsernameCount = undefined;

/**
 * The number of requests made to the introspection endpoint during interactive authentication.
 * @member {Number} interactiveIntrospectionRequestCount
 */
OauthProfileModel.prototype.interactiveIntrospectionRequestCount = undefined;

/**
 * The number of introspection responses during interactive authentication that couldn't be parsed.
 * @member {Number} interactiveIntrospectionResponseInvalidCount
 */
OauthProfileModel.prototype.interactiveIntrospectionResponseInvalidCount = undefined;

/**
 * The number of introspection requests made from the broker during interactive authentication for this OAuth profile with 200 status responses.
 * @member {Number} interactiveIntrospectionStatusOkCount
 */
OauthProfileModel.prototype.interactiveIntrospectionStatusOkCount = undefined;

/**
 * The number of introspection requests made from the broker during interactive authentication for this OAuth profile with status responses other than 200.
 * @member {Number} interactiveIntrospectionStatusOtherCount
 */
OauthProfileModel.prototype.interactiveIntrospectionStatusOtherCount = undefined;

/**
 * The number of introspection responses indicating that the provided token was not active.
 * @member {Number} interactiveIntrospectionTokenNotActiveCount
 */
OauthProfileModel.prototype.interactiveIntrospectionTokenNotActiveCount = undefined;

/**
 * The value of the prompt parameter provided to the OAuth authorization server for login requests where the session has expired.
 * @member {String} interactivePromptForExpiredSession
 */
OauthProfileModel.prototype.interactivePromptForExpiredSession = undefined;

/**
 * The value of the prompt parameter provided to the OAuth authorization server for login requests where the session is new or the user has explicitly logged out.
 * @member {String} interactivePromptForNewSession
 */
OauthProfileModel.prototype.interactivePromptForNewSession = undefined;

/**
 * The number of failures due to missing Userinfo configuration (a Userinfo request was required but no Userinfo endpoint was configured) during interactive authentication.
 * @member {Number} interactiveUserinfoMissingCount
 */
OauthProfileModel.prototype.interactiveUserinfoMissingCount = undefined;

/**
 * The number of Userinfo request made from the broker during interactive authentication for this OAuth profile where the configured groups claim wasn't found in the ID token or the Userinfo response.
 * @member {Number} interactiveUserinfoMissingGroupsCount
 */
OauthProfileModel.prototype.interactiveUserinfoMissingGroupsCount = undefined;

/**
 * The number of Userinfo requests made from the broker during interactive authentication for this OAuth profile where the configured username claim wasn't found in the ID token or Userinfo response.
 * @member {Number} interactiveUserinfoMissingUsernameCount
 */
OauthProfileModel.prototype.interactiveUserinfoMissingUsernameCount = undefined;

/**
 * The number of requests made to the Userinfo endpoint during interactive authentication.
 * @member {Number} interactiveUserinfoRequestCount
 */
OauthProfileModel.prototype.interactiveUserinfoRequestCount = undefined;

/**
 * The number of Userinfo requests made from the broker during interactive authentication for this OAuth profile with responses that couldn't be parsed.
 * @member {Number} interactiveUserinfoResponseInvalidCount
 */
OauthProfileModel.prototype.interactiveUserinfoResponseInvalidCount = undefined;

/**
 * The number of Userinfo requests made from the broker during interactive authentication for this OAuth profile with 200 status responses.
 * @member {Number} interactiveUserinfoStatusOkCount
 */
OauthProfileModel.prototype.interactiveUserinfoStatusOkCount = undefined;

/**
 * The number of Userinfo requests made from the broker during interactive authentication for this OAuth profile with status responses other than 200.
 * @member {Number} interactiveUserinfoStatusOtherCount
 */
OauthProfileModel.prototype.interactiveUserinfoStatusOtherCount = undefined;

/**
 * The number of Userinfo requests made from the broker during interactive authentication for this OAuth profile with subject claims that did not match the subject from the ID token.
 * @member {Number} interactiveUserinfoSubjectMismatchCount
 */
OauthProfileModel.prototype.interactiveUserinfoSubjectMismatchCount = undefined;

/**
 * The number of time the username was successfully found in the ID token or access token for interactive authentication.
 * @member {Number} interactiveUsernameFoundInTokenCount
 */
OauthProfileModel.prototype.interactiveUsernameFoundInTokenCount = undefined;

/**
 * The one minute average of the time required to complete a token introspection, in milliseconds (ms).
 * @member {Number} introspectionAverageTime
 */
OauthProfileModel.prototype.introspectionAverageTime = undefined;

/**
 * The reason for the introspection endpoint request failure.
 * @member {String} introspectionLastFailureReason
 */
OauthProfileModel.prototype.introspectionLastFailureReason = undefined;

/**
 * The timestamp of the last introspection endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} introspectionLastFailureTime
 */
OauthProfileModel.prototype.introspectionLastFailureTime = undefined;

/**
 * The Issuer Identifier for the OAuth provider.
 * @member {String} issuer
 */
OauthProfileModel.prototype.issuer = undefined;

/**
 * The operational Issuer Identifier for the OAuth provider.
 * @member {String} issuerOperational
 */
OauthProfileModel.prototype.issuerOperational = undefined;

/**
 * The reason for the last JWKS public key refresh failure.
 * @member {String} jwksLastRefreshFailureReason
 */
OauthProfileModel.prototype.jwksLastRefreshFailureReason = undefined;

/**
 * The timestamp of the last JWKS public key refresh failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksLastRefreshFailureTime
 */
OauthProfileModel.prototype.jwksLastRefreshFailureTime = undefined;

/**
 * The timestamp of the last JWKS public key refresh success. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksLastRefreshTime
 */
OauthProfileModel.prototype.jwksLastRefreshTime = undefined;

/**
 * The timestamp of the next scheduled JWKS public key refresh. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} jwksNextScheduledRefreshTime
 */
OauthProfileModel.prototype.jwksNextScheduledRefreshTime = undefined;

/**
 * The number of JWKS public key refresh failures.
 * @member {Number} jwksRefreshFailureCount
 */
OauthProfileModel.prototype.jwksRefreshFailureCount = undefined;

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
 * The OAuth role of the broker. The allowed values and their meaning are:  <pre> \"client\" - The broker is in the OAuth client role. \"resource-server\" - The broker is in the OAuth resource server role. </pre> 
 * @member {module:model/OauthProfileModel.OauthRoleEnum} oauthRole
 */
OauthProfileModel.prototype.oauthRole = undefined;

/**
 * Enable or disable parsing of the access token as a JWT.
 * @member {Boolean} resourceServerParseAccessTokenEnabled
 */
OauthProfileModel.prototype.resourceServerParseAccessTokenEnabled = undefined;

/**
 * The required audience value.
 * @member {String} resourceServerRequiredAudience
 */
OauthProfileModel.prototype.resourceServerRequiredAudience = undefined;

/**
 * The required issuer value.
 * @member {String} resourceServerRequiredIssuer
 */
OauthProfileModel.prototype.resourceServerRequiredIssuer = undefined;

/**
 * A space-separated list of scopes that must be present in the scope claim.
 * @member {String} resourceServerRequiredScope
 */
OauthProfileModel.prototype.resourceServerRequiredScope = undefined;

/**
 * The required TYP value.
 * @member {String} resourceServerRequiredType
 */
OauthProfileModel.prototype.resourceServerRequiredType = undefined;

/**
 * Enable or disable verification of the audience claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateAudienceEnabled
 */
OauthProfileModel.prototype.resourceServerValidateAudienceEnabled = undefined;

/**
 * Enable or disable verification of the issuer claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateIssuerEnabled
 */
OauthProfileModel.prototype.resourceServerValidateIssuerEnabled = undefined;

/**
 * Enable or disable verification of the scope claim in the access token or introspection response.
 * @member {Boolean} resourceServerValidateScopeEnabled
 */
OauthProfileModel.prototype.resourceServerValidateScopeEnabled = undefined;

/**
 * Enable or disable verification of the TYP field in the access token header.
 * @member {Boolean} resourceServerValidateTypeEnabled
 */
OauthProfileModel.prototype.resourceServerValidateTypeEnabled = undefined;

/**
 * Enable or disable authentication of SEMP requests with OAuth tokens.
 * @member {Boolean} sempEnabled
 */
OauthProfileModel.prototype.sempEnabled = undefined;

/**
 * The number of SEMP requests with an expired OAuth token.
 * @member {Number} sempExpiredTokenCount
 */
OauthProfileModel.prototype.sempExpiredTokenCount = undefined;

/**
 * The number of times the groups were successfully found in the ID token or access token for SEMP request authentication.
 * @member {Number} sempGroupsFoundInTokenCount
 */
OauthProfileModel.prototype.sempGroupsFoundInTokenCount = undefined;

/**
 * The number of failures during SEMP request authentication due to missing introspection configuration (a introspection request was required but no introspection endpoint was configured).
 * @member {Number} sempIntrospectionMissingCount
 */
OauthProfileModel.prototype.sempIntrospectionMissingCount = undefined;

/**
 * The number of introspection request made from the broker during SEMP request authentication for this OAuth profile where the configured groups claim wasn't found in the access token or the introspection response.
 * @member {Number} sempIntrospectionMissingGroupsCount
 */
OauthProfileModel.prototype.sempIntrospectionMissingGroupsCount = undefined;

/**
 * The number of introspection requests made from the broker during SEMP request authentication for this OAuth profile where the configured username claim wasn't found in the access token or introspection response.
 * @member {Number} sempIntrospectionMissingUsernameCount
 */
OauthProfileModel.prototype.sempIntrospectionMissingUsernameCount = undefined;

/**
 * The number of requests made to the introspection endpoint during SEMP request authentication.
 * @member {Number} sempIntrospectionRequestCount
 */
OauthProfileModel.prototype.sempIntrospectionRequestCount = undefined;

/**
 * The number of introspection responses during SEMP request authentication that couldn't be parsed.
 * @member {Number} sempIntrospectionResponseInvalidCount
 */
OauthProfileModel.prototype.sempIntrospectionResponseInvalidCount = undefined;

/**
 * The number of introspection requests made from the broker during SEMP request authentication for this OAuth profile with 200 status responses.
 * @member {Number} sempIntrospectionStatusOkCount
 */
OauthProfileModel.prototype.sempIntrospectionStatusOkCount = undefined;

/**
 * The number of introspection requests made from the broker during SEMP request authentication for this OAuth profile with status responses other than 200.
 * @member {Number} sempIntrospectionStatusOtherCount
 */
OauthProfileModel.prototype.sempIntrospectionStatusOtherCount = undefined;

/**
 * The number of introspection responses indicating that the provided token was not active.
 * @member {Number} sempIntrospectionTokenNotActiveCount
 */
OauthProfileModel.prototype.sempIntrospectionTokenNotActiveCount = undefined;

/**
 * The number of SEMP requests with an invalid OAuth token.
 * @member {Number} sempInvalidTokenCount
 */
OauthProfileModel.prototype.sempInvalidTokenCount = undefined;

/**
 * The number of SEMP requests (successful and unsuccessful) using this OAuth profile.
 * @member {Number} sempRequestCount
 */
OauthProfileModel.prototype.sempRequestCount = undefined;

/**
 * The number of successful SEMP authentications using this OAuth profile.
 * @member {Number} sempSuccessCount
 */
OauthProfileModel.prototype.sempSuccessCount = undefined;

/**
 * The number of failures due to missing Userinfo configuration (a Userinfo request was required but no Userinfo endpoint was configured) during SEMP request authentication.
 * @member {Number} sempUserinfoMissingCount
 */
OauthProfileModel.prototype.sempUserinfoMissingCount = undefined;

/**
 * The number of Userinfo request made from the broker during SEMP request authentication for this OAuth profile where the configured groups claim wasn't found in the ID token or the Userinfo response.
 * @member {Number} sempUserinfoMissingGroupsCount
 */
OauthProfileModel.prototype.sempUserinfoMissingGroupsCount = undefined;

/**
 * The number of Userinfo requests made from the broker during SEMP request authentication for this OAuth profile where the configured username claim wasn't found in the ID token or Userinfo response.
 * @member {Number} sempUserinfoMissingUsernameCount
 */
OauthProfileModel.prototype.sempUserinfoMissingUsernameCount = undefined;

/**
 * The number of requests made to the Userinfo endpoint during SEMP request authentication.
 * @member {Number} sempUserinfoRequestCount
 */
OauthProfileModel.prototype.sempUserinfoRequestCount = undefined;

/**
 * The number of Userinfo requests made from the broker during SEMP request authentication for this OAuth profile with responses that couldn't be parsed.
 * @member {Number} sempUserinfoResponseInvalidCount
 */
OauthProfileModel.prototype.sempUserinfoResponseInvalidCount = undefined;

/**
 * The number of Userinfo requests made from the broker during SEMP request authentication for this OAuth profile with 200 status responses.
 * @member {Number} sempUserinfoStatusOkCount
 */
OauthProfileModel.prototype.sempUserinfoStatusOkCount = undefined;

/**
 * The number of Userinfo requests made from the broker during SEMP request authentication for this OAuth profile with status responses other than 200.
 * @member {Number} sempUserinfoStatusOtherCount
 */
OauthProfileModel.prototype.sempUserinfoStatusOtherCount = undefined;

/**
 * The number of Userinfo requests made from the broker during SEMP request authentication for this OAuth profile with subject claims that did not match the subject from the ID token.
 * @member {Number} sempUserinfoSubjectMismatchCount
 */
OauthProfileModel.prototype.sempUserinfoSubjectMismatchCount = undefined;

/**
 * The number of time the username was successfully found in the ID token or access token for SEMP request authentication.
 * @member {Number} sempUsernameFoundInTokenCount
 */
OauthProfileModel.prototype.sempUsernameFoundInTokenCount = undefined;

/**
 * The one minute average of the time required to complete a token request, in milliseconds (ms).
 * @member {Number} tokenEndpointAverageTime
 */
OauthProfileModel.prototype.tokenEndpointAverageTime = undefined;

/**
 * The number of token endpoint requests made from the broker for this OAuth profile that returned tokens that couldn't be verified.
 * @member {Number} tokenEndpointInvalidTokenCount
 */
OauthProfileModel.prototype.tokenEndpointInvalidTokenCount = undefined;

/**
 * The reason for the last token endpoint request failure.
 * @member {String} tokenEndpointLastFailureReason
 */
OauthProfileModel.prototype.tokenEndpointLastFailureReason = undefined;

/**
 * The timestamp of the last token endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} tokenEndpointLastFailureTime
 */
OauthProfileModel.prototype.tokenEndpointLastFailureTime = undefined;

/**
 * The number of token endpoint requests made from the broker for this OAuth profile that returned an unexpected error not accounted for in the other failure statistics.
 * @member {Number} tokenEndpointOtherErrorCount
 */
OauthProfileModel.prototype.tokenEndpointOtherErrorCount = undefined;

/**
 * The number of token endpoint requests made from the broker for this OAuth profile.
 * @member {Number} tokenEndpointRequestCount
 */
OauthProfileModel.prototype.tokenEndpointRequestCount = undefined;

/**
 * The number of token endpoint requests made from the broker for this OAuth profile with 400 status responses.
 * @member {Number} tokenEndpointStatusBadRequestCount
 */
OauthProfileModel.prototype.tokenEndpointStatusBadRequestCount = undefined;

/**
 * The number of token endpoint requests made from the broker for this OAuth profile with 200 status responses.
 * @member {Number} tokenEndpointStatusOkCount
 */
OauthProfileModel.prototype.tokenEndpointStatusOkCount = undefined;

/**
 * The number of token endpoint requests made from the broker for this OAuth profile with status responses other than 200 or 400.
 * @member {Number} tokenEndpointStatusOtherCount
 */
OauthProfileModel.prototype.tokenEndpointStatusOtherCount = undefined;

/**
 * The one minute average of the time required to complete a token userinfo request, in milliseconds (ms).
 * @member {Number} userinfoAverageTime
 */
OauthProfileModel.prototype.userinfoAverageTime = undefined;

/**
 * The reason for the userinfo endpoint request failure.
 * @member {String} userinfoLastFailureReason
 */
OauthProfileModel.prototype.userinfoLastFailureReason = undefined;

/**
 * The timestamp of the last userinfo endpoint request failure. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} userinfoLastFailureTime
 */
OauthProfileModel.prototype.userinfoLastFailureTime = undefined;

/**
 * The name of the username claim.
 * @member {String} usernameClaimName
 */
OauthProfileModel.prototype.usernameClaimName = undefined;

