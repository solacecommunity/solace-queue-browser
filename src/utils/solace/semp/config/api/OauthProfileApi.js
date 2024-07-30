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
import {ApiClient} from "../ApiClient";
import {OauthProfileAccessLevelGroupModel} from '../model/OauthProfileAccessLevelGroupModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} from '../model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} from '../model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} from '../model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel';
import {OauthProfileAccessLevelGroupResponseModel} from '../model/OauthProfileAccessLevelGroupResponseModel';
import {OauthProfileAccessLevelGroupsResponseModel} from '../model/OauthProfileAccessLevelGroupsResponseModel';
import {OauthProfileClientAllowedHostModel} from '../model/OauthProfileClientAllowedHostModel';
import {OauthProfileClientAllowedHostResponseModel} from '../model/OauthProfileClientAllowedHostResponseModel';
import {OauthProfileClientAllowedHostsResponseModel} from '../model/OauthProfileClientAllowedHostsResponseModel';
import {OauthProfileClientAuthorizationParameterModel} from '../model/OauthProfileClientAuthorizationParameterModel';
import {OauthProfileClientAuthorizationParameterResponseModel} from '../model/OauthProfileClientAuthorizationParameterResponseModel';
import {OauthProfileClientAuthorizationParametersResponseModel} from '../model/OauthProfileClientAuthorizationParametersResponseModel';
import {OauthProfileClientRequiredClaimModel} from '../model/OauthProfileClientRequiredClaimModel';
import {OauthProfileClientRequiredClaimResponseModel} from '../model/OauthProfileClientRequiredClaimResponseModel';
import {OauthProfileClientRequiredClaimsResponseModel} from '../model/OauthProfileClientRequiredClaimsResponseModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionModel} from '../model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} from '../model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} from '../model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel';
import {OauthProfileModel} from '../model/OauthProfileModel';
import {OauthProfileResourceServerRequiredClaimModel} from '../model/OauthProfileResourceServerRequiredClaimModel';
import {OauthProfileResourceServerRequiredClaimResponseModel} from '../model/OauthProfileResourceServerRequiredClaimResponseModel';
import {OauthProfileResourceServerRequiredClaimsResponseModel} from '../model/OauthProfileResourceServerRequiredClaimsResponseModel';
import {OauthProfileResponseModel} from '../model/OauthProfileResponseModel';
import {OauthProfilesResponseModel} from '../model/OauthProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* OauthProfile service.
* @module api/OauthProfileApi
* @version 2.36
*/
export class OauthProfileApi {

    /**
    * Constructs a new OauthProfileApi. 
    * @alias module:api/OauthProfileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an OAuth Profile object.
     * Create an OAuth Profile object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientSecret|||||x||x oauthProfileName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileModel} body The OAuth Profile object&#x27;s attributes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResponseModel} and HTTP response
     */
    createOauthProfileWithHttpInfo(body, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfile");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an OAuth Profile object.
     * Create an OAuth Profile object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientSecret|||||x||x oauthProfileName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The OAuth Profile object&#x27;s attributes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResponseModel}
     */
    createOauthProfile(body, opts) {
      return this.createOauthProfileWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Group Access Level object.
     * Create a Group Access Level object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: globalAccessLevel|global/admin    This has been available since 2.24.
     * @param {module:model/OauthProfileAccessLevelGroupModel} body The Group Access Level object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel} and HTTP response
     */
    createOauthProfileAccessLevelGroupWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileAccessLevelGroup");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Group Access Level object.
     * Create a Group Access Level object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: globalAccessLevel|global/admin    This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Group Access Level object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel}
     */
    createOauthProfileAccessLevelGroup(body, oauthProfileName, opts) {
      return this.createOauthProfileAccessLevelGroupWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Message VPN Access-Level Exception object.
     * Create a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|||x||| msgVpnName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    createOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling createOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Message VPN Access-Level Exception object.
     * Create a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|||x||| msgVpnName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel}
     */
    createOauthProfileAccessLevelGroupMsgVpnAccessLevelException(body, oauthProfileName, groupName, opts) {
      return this.createOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an Allowed Host Value object.
     * Create an Allowed Host Value object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: allowedHost|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileClientAllowedHostModel} body The Allowed Host Value object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAllowedHostResponseModel} and HTTP response
     */
    createOauthProfileClientAllowedHostWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileClientAllowedHost");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileClientAllowedHost");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAllowedHostResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAllowedHosts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an Allowed Host Value object.
     * Create an Allowed Host Value object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: allowedHost|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Allowed Host Value object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAllowedHostResponseModel}
     */
    createOauthProfileClientAllowedHost(body, oauthProfileName, opts) {
      return this.createOauthProfileClientAllowedHostWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create an Authorization Parameter object.
     * Create an Authorization Parameter object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authorizationParameterName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileClientAuthorizationParameterModel} body The Authorization Parameter object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel} and HTTP response
     */
    createOauthProfileClientAuthorizationParameterWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileClientAuthorizationParameter");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAuthorizationParameterResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an Authorization Parameter object.
     * Create an Authorization Parameter object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authorizationParameterName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Authorization Parameter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel}
     */
    createOauthProfileClientAuthorizationParameter(body, oauthProfileName, opts) {
      return this.createOauthProfileClientAuthorizationParameterWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Required Claim object.
     * Create a Required Claim object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the ID token.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientRequiredClaimName|x|x|x|||| clientRequiredClaimValue||x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileClientRequiredClaimModel} body The Required Claim object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientRequiredClaimResponseModel} and HTTP response
     */
    createOauthProfileClientRequiredClaimWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileClientRequiredClaim");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileClientRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientRequiredClaims', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Required Claim object.
     * Create a Required Claim object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the ID token.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientRequiredClaimName|x|x|x|||| clientRequiredClaimValue||x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Required Claim object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientRequiredClaimResponseModel}
     */
    createOauthProfileClientRequiredClaim(body, oauthProfileName, opts) {
      return this.createOauthProfileClientRequiredClaimWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Message VPN Access-Level Exception object.
     * Create a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Default message VPN access-level exceptions.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    createOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileDefaultMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Message VPN Access-Level Exception object.
     * Create a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Default message VPN access-level exceptions.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|x|x|||| oauthProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel}
     */
    createOauthProfileDefaultMsgVpnAccessLevelException(body, oauthProfileName, opts) {
      return this.createOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Required Claim object.
     * Create a Required Claim object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the access token.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: oauthProfileName|x|||x||| resourceServerRequiredClaimName|x|x|x|||| resourceServerRequiredClaimValue||x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileResourceServerRequiredClaimModel} body The Required Claim object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResourceServerRequiredClaimResponseModel} and HTTP response
     */
    createOauthProfileResourceServerRequiredClaimWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOauthProfileResourceServerRequiredClaim");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling createOauthProfileResourceServerRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileResourceServerRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/resourceServerRequiredClaims', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Required Claim object.
     * Create a Required Claim object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the access token.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: oauthProfileName|x|||x||| resourceServerRequiredClaimName|x|x|x|||| resourceServerRequiredClaimValue||x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Required Claim object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResourceServerRequiredClaimResponseModel}
     */
    createOauthProfileResourceServerRequiredClaim(body, oauthProfileName, opts) {
      return this.createOauthProfileResourceServerRequiredClaimWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an OAuth Profile object.
     * Delete an OAuth Profile object. The deletion of instances of this object are synchronized to HA mates via config-sync.  OAuth profiles specify how to securely authenticate to an OAuth provider.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileWithHttpInfo(oauthProfileName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfile");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an OAuth Profile object.
     * Delete an OAuth Profile object. The deletion of instances of this object are synchronized to HA mates via config-sync.  OAuth profiles specify how to securely authenticate to an OAuth provider.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfile(oauthProfileName) {
      return this.deleteOauthProfileWithHttpInfo(oauthProfileName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Group Access Level object.
     * Delete a Group Access Level object. The deletion of instances of this object are synchronized to HA mates via config-sync.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileAccessLevelGroupWithHttpInfo(oauthProfileName, groupName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling deleteOauthProfileAccessLevelGroup");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Group Access Level object.
     * Delete a Group Access Level object. The deletion of instances of this object are synchronized to HA mates via config-sync.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileAccessLevelGroup(oauthProfileName, groupName) {
      return this.deleteOauthProfileAccessLevelGroupWithHttpInfo(oauthProfileName, groupName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Message VPN Access-Level Exception object.
     * Delete a Message VPN Access-Level Exception object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Message VPN access-level exceptions for members of this group.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {String} msgVpnName The name of the message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, groupName, msgVpnName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling deleteOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions/{msgVpnName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Message VPN Access-Level Exception object.
     * Delete a Message VPN Access-Level Exception object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Message VPN access-level exceptions for members of this group.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileAccessLevelGroupMsgVpnAccessLevelException(oauthProfileName, groupName, msgVpnName) {
      return this.deleteOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, groupName, msgVpnName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Allowed Host Value object.
     * Delete an Allowed Host Value object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A valid hostname for this broker in OAuth redirects.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} allowedHost An allowed value for the Host header.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileClientAllowedHostWithHttpInfo(oauthProfileName, allowedHost) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileClientAllowedHost");
      }
      // verify the required parameter 'allowedHost' is set
      if (allowedHost === undefined || allowedHost === null) {
        throw new Error("Missing the required parameter 'allowedHost' when calling deleteOauthProfileClientAllowedHost");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'allowedHost': allowedHost
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAllowedHosts/{allowedHost}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an Allowed Host Value object.
     * Delete an Allowed Host Value object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A valid hostname for this broker in OAuth redirects.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} allowedHost An allowed value for the Host header.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileClientAllowedHost(oauthProfileName, allowedHost) {
      return this.deleteOauthProfileClientAllowedHostWithHttpInfo(oauthProfileName, allowedHost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an Authorization Parameter object.
     * Delete an Authorization Parameter object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Additional parameters to be passed to the OAuth authorization endpoint.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} authorizationParameterName The name of the authorization parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileClientAuthorizationParameterWithHttpInfo(oauthProfileName, authorizationParameterName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'authorizationParameterName' is set
      if (authorizationParameterName === undefined || authorizationParameterName === null) {
        throw new Error("Missing the required parameter 'authorizationParameterName' when calling deleteOauthProfileClientAuthorizationParameter");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'authorizationParameterName': authorizationParameterName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters/{authorizationParameterName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an Authorization Parameter object.
     * Delete an Authorization Parameter object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Additional parameters to be passed to the OAuth authorization endpoint.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} authorizationParameterName The name of the authorization parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileClientAuthorizationParameter(oauthProfileName, authorizationParameterName) {
      return this.deleteOauthProfileClientAuthorizationParameterWithHttpInfo(oauthProfileName, authorizationParameterName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Required Claim object.
     * Delete a Required Claim object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the ID token.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} clientRequiredClaimName The name of the ID token claim to verify.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileClientRequiredClaimWithHttpInfo(oauthProfileName, clientRequiredClaimName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileClientRequiredClaim");
      }
      // verify the required parameter 'clientRequiredClaimName' is set
      if (clientRequiredClaimName === undefined || clientRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'clientRequiredClaimName' when calling deleteOauthProfileClientRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'clientRequiredClaimName': clientRequiredClaimName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientRequiredClaims/{clientRequiredClaimName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Required Claim object.
     * Delete a Required Claim object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the ID token.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientRequiredClaimName The name of the ID token claim to verify.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileClientRequiredClaim(oauthProfileName, clientRequiredClaimName) {
      return this.deleteOauthProfileClientRequiredClaimWithHttpInfo(oauthProfileName, clientRequiredClaimName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Message VPN Access-Level Exception object.
     * Delete a Message VPN Access-Level Exception object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Default message VPN access-level exceptions.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} msgVpnName The name of the message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, msgVpnName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteOauthProfileDefaultMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions/{msgVpnName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Message VPN Access-Level Exception object.
     * Delete a Message VPN Access-Level Exception object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Default message VPN access-level exceptions.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileDefaultMsgVpnAccessLevelException(oauthProfileName, msgVpnName) {
      return this.deleteOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, msgVpnName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Required Claim object.
     * Delete a Required Claim object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the access token.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteOauthProfileResourceServerRequiredClaimWithHttpInfo(oauthProfileName, resourceServerRequiredClaimName) {
      
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling deleteOauthProfileResourceServerRequiredClaim");
      }
      // verify the required parameter 'resourceServerRequiredClaimName' is set
      if (resourceServerRequiredClaimName === undefined || resourceServerRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'resourceServerRequiredClaimName' when calling deleteOauthProfileResourceServerRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'resourceServerRequiredClaimName': resourceServerRequiredClaimName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/resourceServerRequiredClaims/{resourceServerRequiredClaimName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Required Claim object.
     * Delete a Required Claim object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Additional claims to be verified in the access token.  A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteOauthProfileResourceServerRequiredClaim(oauthProfileName, resourceServerRequiredClaimName) {
      return this.deleteOauthProfileResourceServerRequiredClaimWithHttpInfo(oauthProfileName, resourceServerRequiredClaimName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientSecret||x||x oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResponseModel} and HTTP response
     */
    getOauthProfileWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfile");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientSecret||x||x oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResponseModel}
     */
    getOauthProfile(oauthProfileName, opts) {
      return this.getOauthProfileWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Group Access Level object.
     * Get a Group Access Level object.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupWithHttpInfo(oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling getOauthProfileAccessLevelGroup");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Group Access Level object.
     * Get a Group Access Level object.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel}
     */
    getOauthProfileAccessLevelGroup(oauthProfileName, groupName, opts) {
      return this.getOauthProfileAccessLevelGroupWithHttpInfo(oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, groupName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions/{msgVpnName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel}
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelException(oauthProfileName, groupName, msgVpnName, opts) {
      return this.getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, groupName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptions");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptions");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel}
     */
    getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptions(oauthProfileName, groupName, opts) {
      return this.getOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Group Access Level objects.
     * Get a list of Group Access Level objects.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupsResponseModel} and HTTP response
     */
    getOauthProfileAccessLevelGroupsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileAccessLevelGroups");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Group Access Level objects.
     * Get a list of Group Access Level objects.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: groupName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupsResponseModel}
     */
    getOauthProfileAccessLevelGroups(oauthProfileName, opts) {
      return this.getOauthProfileAccessLevelGroupsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an Allowed Host Value object.
     * Get an Allowed Host Value object.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: allowedHost|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} allowedHost An allowed value for the Host header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAllowedHostResponseModel} and HTTP response
     */
    getOauthProfileClientAllowedHostWithHttpInfo(oauthProfileName, allowedHost, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAllowedHost");
      }
      // verify the required parameter 'allowedHost' is set
      if (allowedHost === undefined || allowedHost === null) {
        throw new Error("Missing the required parameter 'allowedHost' when calling getOauthProfileClientAllowedHost");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'allowedHost': allowedHost
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAllowedHostResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAllowedHosts/{allowedHost}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an Allowed Host Value object.
     * Get an Allowed Host Value object.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: allowedHost|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} allowedHost An allowed value for the Host header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAllowedHostResponseModel}
     */
    getOauthProfileClientAllowedHost(oauthProfileName, allowedHost, opts) {
      return this.getOauthProfileClientAllowedHostWithHttpInfo(oauthProfileName, allowedHost, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Allowed Host Value objects.
     * Get a list of Allowed Host Value objects.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: allowedHost|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAllowedHostsResponseModel} and HTTP response
     */
    getOauthProfileClientAllowedHostsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAllowedHosts");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAllowedHostsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAllowedHosts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Allowed Host Value objects.
     * Get a list of Allowed Host Value objects.  A valid hostname for this broker in OAuth redirects.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: allowedHost|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAllowedHostsResponseModel}
     */
    getOauthProfileClientAllowedHosts(oauthProfileName, opts) {
      return this.getOauthProfileClientAllowedHostsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an Authorization Parameter object.
     * Get an Authorization Parameter object.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authorizationParameterName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel} and HTTP response
     */
    getOauthProfileClientAuthorizationParameterWithHttpInfo(oauthProfileName, authorizationParameterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'authorizationParameterName' is set
      if (authorizationParameterName === undefined || authorizationParameterName === null) {
        throw new Error("Missing the required parameter 'authorizationParameterName' when calling getOauthProfileClientAuthorizationParameter");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'authorizationParameterName': authorizationParameterName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAuthorizationParameterResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters/{authorizationParameterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an Authorization Parameter object.
     * Get an Authorization Parameter object.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authorizationParameterName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel}
     */
    getOauthProfileClientAuthorizationParameter(oauthProfileName, authorizationParameterName, opts) {
      return this.getOauthProfileClientAuthorizationParameterWithHttpInfo(oauthProfileName, authorizationParameterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Authorization Parameter objects.
     * Get a list of Authorization Parameter objects.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authorizationParameterName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParametersResponseModel} and HTTP response
     */
    getOauthProfileClientAuthorizationParametersWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientAuthorizationParameters");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAuthorizationParametersResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Authorization Parameter objects.
     * Get a list of Authorization Parameter objects.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authorizationParameterName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParametersResponseModel}
     */
    getOauthProfileClientAuthorizationParameters(oauthProfileName, opts) {
      return this.getOauthProfileClientAuthorizationParametersWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the ID token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientRequiredClaimName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} clientRequiredClaimName The name of the ID token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientRequiredClaimResponseModel} and HTTP response
     */
    getOauthProfileClientRequiredClaimWithHttpInfo(oauthProfileName, clientRequiredClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientRequiredClaim");
      }
      // verify the required parameter 'clientRequiredClaimName' is set
      if (clientRequiredClaimName === undefined || clientRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'clientRequiredClaimName' when calling getOauthProfileClientRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'clientRequiredClaimName': clientRequiredClaimName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientRequiredClaims/{clientRequiredClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the ID token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientRequiredClaimName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientRequiredClaimName The name of the ID token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientRequiredClaimResponseModel}
     */
    getOauthProfileClientRequiredClaim(oauthProfileName, clientRequiredClaimName, opts) {
      return this.getOauthProfileClientRequiredClaimWithHttpInfo(oauthProfileName, clientRequiredClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the ID token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientRequiredClaimName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientRequiredClaimsResponseModel} and HTTP response
     */
    getOauthProfileClientRequiredClaimsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileClientRequiredClaims");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientRequiredClaimsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientRequiredClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the ID token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientRequiredClaimName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientRequiredClaimsResponseModel}
     */
    getOauthProfileClientRequiredClaims(oauthProfileName, opts) {
      return this.getOauthProfileClientRequiredClaimsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Default message VPN access-level exceptions.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    getOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getOauthProfileDefaultMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions/{msgVpnName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Message VPN Access-Level Exception object.
     * Get a Message VPN Access-Level Exception object.  Default message VPN access-level exceptions.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel}
     */
    getOauthProfileDefaultMsgVpnAccessLevelException(oauthProfileName, msgVpnName, opts) {
      return this.getOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(oauthProfileName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Default message VPN access-level exceptions.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} and HTTP response
     */
    getOauthProfileDefaultMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileDefaultMsgVpnAccessLevelExceptions");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Message VPN Access-Level Exception objects.
     * Get a list of Message VPN Access-Level Exception objects.  Default message VPN access-level exceptions.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel}
     */
    getOauthProfileDefaultMsgVpnAccessLevelExceptions(oauthProfileName, opts) {
      return this.getOauthProfileDefaultMsgVpnAccessLevelExceptionsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the access token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: oauthProfileName|x||| resourceServerRequiredClaimName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResourceServerRequiredClaimResponseModel} and HTTP response
     */
    getOauthProfileResourceServerRequiredClaimWithHttpInfo(oauthProfileName, resourceServerRequiredClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileResourceServerRequiredClaim");
      }
      // verify the required parameter 'resourceServerRequiredClaimName' is set
      if (resourceServerRequiredClaimName === undefined || resourceServerRequiredClaimName === null) {
        throw new Error("Missing the required parameter 'resourceServerRequiredClaimName' when calling getOauthProfileResourceServerRequiredClaim");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'resourceServerRequiredClaimName': resourceServerRequiredClaimName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileResourceServerRequiredClaimResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/resourceServerRequiredClaims/{resourceServerRequiredClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Required Claim object.
     * Get a Required Claim object.  Additional claims to be verified in the access token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: oauthProfileName|x||| resourceServerRequiredClaimName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} resourceServerRequiredClaimName The name of the access token claim to verify.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResourceServerRequiredClaimResponseModel}
     */
    getOauthProfileResourceServerRequiredClaim(oauthProfileName, resourceServerRequiredClaimName, opts) {
      return this.getOauthProfileResourceServerRequiredClaimWithHttpInfo(oauthProfileName, resourceServerRequiredClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the access token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: oauthProfileName|x||| resourceServerRequiredClaimName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResourceServerRequiredClaimsResponseModel} and HTTP response
     */
    getOauthProfileResourceServerRequiredClaimsWithHttpInfo(oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getOauthProfileResourceServerRequiredClaims");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfileResourceServerRequiredClaimsResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/resourceServerRequiredClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Required Claim objects.
     * Get a list of Required Claim objects.  Additional claims to be verified in the access token.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: oauthProfileName|x||| resourceServerRequiredClaimName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResourceServerRequiredClaimsResponseModel}
     */
    getOauthProfileResourceServerRequiredClaims(oauthProfileName, opts) {
      return this.getOauthProfileResourceServerRequiredClaimsWithHttpInfo(oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientSecret||x||x oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfilesResponseModel} and HTTP response
     */
    getOauthProfilesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OauthProfilesResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: clientSecret||x||x oauthProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.24.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfilesResponseModel}
     */
    getOauthProfiles(opts) {
      return this.getOauthProfilesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace an OAuth Profile object.
     * Replace an OAuth Profile object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientSecret||||x||||x oauthProfileName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: accessLevelGroupsClaimName|global/admin accessLevelGroupsClaimStringFormat|global/admin clientId|global/admin clientRedirectUri|global/admin clientRequiredType|global/admin clientScope|global/admin clientSecret|global/admin clientValidateTypeEnabled|global/admin defaultGlobalAccessLevel|global/admin displayName|global/admin enabled|global/admin endpointAuthorization|global/admin endpointDiscovery|global/admin endpointDiscoveryRefreshInterval|global/admin endpointIntrospection|global/admin endpointIntrospectionTimeout|global/admin endpointJwks|global/admin endpointJwksRefreshInterval|global/admin endpointToken|global/admin endpointTokenTimeout|global/admin endpointUserinfo|global/admin endpointUserinfoTimeout|global/admin interactiveEnabled|global/admin interactivePromptForExpiredSession|global/admin interactivePromptForNewSession|global/admin issuer|global/admin oauthRole|global/admin resourceServerParseAccessTokenEnabled|global/admin resourceServerRequiredAudience|global/admin resourceServerRequiredIssuer|global/admin resourceServerRequiredScope|global/admin resourceServerRequiredType|global/admin resourceServerValidateAudienceEnabled|global/admin resourceServerValidateIssuerEnabled|global/admin resourceServerValidateScopeEnabled|global/admin resourceServerValidateTypeEnabled|global/admin sempEnabled|global/admin usernameClaimName|global/admin    This has been available since 2.24.
     * @param {module:model/OauthProfileModel} body The OAuth Profile object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResponseModel} and HTTP response
     */
    replaceOauthProfileWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceOauthProfile");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling replaceOauthProfile");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace an OAuth Profile object.
     * Replace an OAuth Profile object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientSecret||||x||||x oauthProfileName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: accessLevelGroupsClaimName|global/admin accessLevelGroupsClaimStringFormat|global/admin clientId|global/admin clientRedirectUri|global/admin clientRequiredType|global/admin clientScope|global/admin clientSecret|global/admin clientValidateTypeEnabled|global/admin defaultGlobalAccessLevel|global/admin displayName|global/admin enabled|global/admin endpointAuthorization|global/admin endpointDiscovery|global/admin endpointDiscoveryRefreshInterval|global/admin endpointIntrospection|global/admin endpointIntrospectionTimeout|global/admin endpointJwks|global/admin endpointJwksRefreshInterval|global/admin endpointToken|global/admin endpointTokenTimeout|global/admin endpointUserinfo|global/admin endpointUserinfoTimeout|global/admin interactiveEnabled|global/admin interactivePromptForExpiredSession|global/admin interactivePromptForNewSession|global/admin issuer|global/admin oauthRole|global/admin resourceServerParseAccessTokenEnabled|global/admin resourceServerRequiredAudience|global/admin resourceServerRequiredIssuer|global/admin resourceServerRequiredScope|global/admin resourceServerRequiredType|global/admin resourceServerValidateAudienceEnabled|global/admin resourceServerValidateIssuerEnabled|global/admin resourceServerValidateScopeEnabled|global/admin resourceServerValidateTypeEnabled|global/admin sempEnabled|global/admin usernameClaimName|global/admin    This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The OAuth Profile object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResponseModel}
     */
    replaceOauthProfile(body, oauthProfileName, opts) {
      return this.replaceOauthProfileWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Group Access Level object.
     * Replace a Group Access Level object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: globalAccessLevel|global/admin    This has been available since 2.24.
     * @param {module:model/OauthProfileAccessLevelGroupModel} body The Group Access Level object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel} and HTTP response
     */
    replaceOauthProfileAccessLevelGroupWithHttpInfo(body, oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling replaceOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling replaceOauthProfileAccessLevelGroup");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Group Access Level object.
     * Replace a Group Access Level object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: globalAccessLevel|global/admin    This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Group Access Level object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel}
     */
    replaceOauthProfileAccessLevelGroup(body, oauthProfileName, groupName, opts) {
      return this.replaceOauthProfileAccessLevelGroupWithHttpInfo(body, oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Message VPN Access-Level Exception object.
     * Replace a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x||x||||| msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, groupName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions/{msgVpnName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Message VPN Access-Level Exception object.
     * Replace a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x||x||||| msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel}
     */
    replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelException(body, oauthProfileName, groupName, msgVpnName, opts) {
      return this.replaceOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, groupName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace an Authorization Parameter object.
     * Replace an Authorization Parameter object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authorizationParameterName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileClientAuthorizationParameterModel} body The Authorization Parameter object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel} and HTTP response
     */
    replaceOauthProfileClientAuthorizationParameterWithHttpInfo(body, oauthProfileName, authorizationParameterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling replaceOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'authorizationParameterName' is set
      if (authorizationParameterName === undefined || authorizationParameterName === null) {
        throw new Error("Missing the required parameter 'authorizationParameterName' when calling replaceOauthProfileClientAuthorizationParameter");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'authorizationParameterName': authorizationParameterName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAuthorizationParameterResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters/{authorizationParameterName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace an Authorization Parameter object.
     * Replace an Authorization Parameter object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authorizationParameterName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Authorization Parameter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel}
     */
    replaceOauthProfileClientAuthorizationParameter(body, oauthProfileName, authorizationParameterName, opts) {
      return this.replaceOauthProfileClientAuthorizationParameterWithHttpInfo(body, oauthProfileName, authorizationParameterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Message VPN Access-Level Exception object.
     * Replace a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Default message VPN access-level exceptions.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    replaceOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling replaceOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceOauthProfileDefaultMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions/{msgVpnName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Message VPN Access-Level Exception object.
     * Replace a Message VPN Access-Level Exception object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Default message VPN access-level exceptions.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel}
     */
    replaceOauthProfileDefaultMsgVpnAccessLevelException(body, oauthProfileName, msgVpnName, opts) {
      return this.replaceOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an OAuth Profile object.
     * Update an OAuth Profile object. Any attribute missing from the request will be left unchanged.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientSecret||||x||||x oauthProfileName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: accessLevelGroupsClaimName|global/admin accessLevelGroupsClaimStringFormat|global/admin clientId|global/admin clientRedirectUri|global/admin clientRequiredType|global/admin clientScope|global/admin clientSecret|global/admin clientValidateTypeEnabled|global/admin defaultGlobalAccessLevel|global/admin displayName|global/admin enabled|global/admin endpointAuthorization|global/admin endpointDiscovery|global/admin endpointDiscoveryRefreshInterval|global/admin endpointIntrospection|global/admin endpointIntrospectionTimeout|global/admin endpointJwks|global/admin endpointJwksRefreshInterval|global/admin endpointToken|global/admin endpointTokenTimeout|global/admin endpointUserinfo|global/admin endpointUserinfoTimeout|global/admin interactiveEnabled|global/admin interactivePromptForExpiredSession|global/admin interactivePromptForNewSession|global/admin issuer|global/admin oauthRole|global/admin resourceServerParseAccessTokenEnabled|global/admin resourceServerRequiredAudience|global/admin resourceServerRequiredIssuer|global/admin resourceServerRequiredScope|global/admin resourceServerRequiredType|global/admin resourceServerValidateAudienceEnabled|global/admin resourceServerValidateIssuerEnabled|global/admin resourceServerValidateScopeEnabled|global/admin resourceServerValidateTypeEnabled|global/admin sempEnabled|global/admin usernameClaimName|global/admin    This has been available since 2.24.
     * @param {module:model/OauthProfileModel} body The OAuth Profile object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileResponseModel} and HTTP response
     */
    updateOauthProfileWithHttpInfo(body, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOauthProfile");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling updateOauthProfile");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an OAuth Profile object.
     * Update an OAuth Profile object. Any attribute missing from the request will be left unchanged.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientSecret||||x||||x oauthProfileName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: accessLevelGroupsClaimName|global/admin accessLevelGroupsClaimStringFormat|global/admin clientId|global/admin clientRedirectUri|global/admin clientRequiredType|global/admin clientScope|global/admin clientSecret|global/admin clientValidateTypeEnabled|global/admin defaultGlobalAccessLevel|global/admin displayName|global/admin enabled|global/admin endpointAuthorization|global/admin endpointDiscovery|global/admin endpointDiscoveryRefreshInterval|global/admin endpointIntrospection|global/admin endpointIntrospectionTimeout|global/admin endpointJwks|global/admin endpointJwksRefreshInterval|global/admin endpointToken|global/admin endpointTokenTimeout|global/admin endpointUserinfo|global/admin endpointUserinfoTimeout|global/admin interactiveEnabled|global/admin interactivePromptForExpiredSession|global/admin interactivePromptForNewSession|global/admin issuer|global/admin oauthRole|global/admin resourceServerParseAccessTokenEnabled|global/admin resourceServerRequiredAudience|global/admin resourceServerRequiredIssuer|global/admin resourceServerRequiredScope|global/admin resourceServerRequiredType|global/admin resourceServerValidateAudienceEnabled|global/admin resourceServerValidateIssuerEnabled|global/admin resourceServerValidateScopeEnabled|global/admin resourceServerValidateTypeEnabled|global/admin sempEnabled|global/admin usernameClaimName|global/admin    This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The OAuth Profile object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileResponseModel}
     */
    updateOauthProfile(body, oauthProfileName, opts) {
      return this.updateOauthProfileWithHttpInfo(body, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Group Access Level object.
     * Update a Group Access Level object. Any attribute missing from the request will be left unchanged.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: globalAccessLevel|global/admin    This has been available since 2.24.
     * @param {module:model/OauthProfileAccessLevelGroupModel} body The Group Access Level object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel} and HTTP response
     */
    updateOauthProfileAccessLevelGroupWithHttpInfo(body, oauthProfileName, groupName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling updateOauthProfileAccessLevelGroup");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling updateOauthProfileAccessLevelGroup");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Group Access Level object.
     * Update a Group Access Level object. Any attribute missing from the request will be left unchanged.  The name of a group as it exists on the OAuth server being used to authenticate SEMP users.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation. Requests which include the following attributes require greater access scope/level:   Attribute|Access Scope/Level :---|:---: globalAccessLevel|global/admin    This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Group Access Level object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupResponseModel}
     */
    updateOauthProfileAccessLevelGroup(body, oauthProfileName, groupName, opts) {
      return this.updateOauthProfileAccessLevelGroupWithHttpInfo(body, oauthProfileName, groupName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Message VPN Access-Level Exception object.
     * Update a Message VPN Access-Level Exception object. Any attribute missing from the request will be left unchanged.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x||x||||| msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} groupName The name of the group.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    updateOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, groupName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling updateOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling updateOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateOauthProfileAccessLevelGroupMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'groupName': groupName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/accessLevelGroups/{groupName}/msgVpnAccessLevelExceptions/{msgVpnName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Message VPN Access-Level Exception object.
     * Update a Message VPN Access-Level Exception object. Any attribute missing from the request will be left unchanged.  Message VPN access-level exceptions for members of this group.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: groupName|x||x||||| msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} groupName The name of the group.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel}
     */
    updateOauthProfileAccessLevelGroupMsgVpnAccessLevelException(body, oauthProfileName, groupName, msgVpnName, opts) {
      return this.updateOauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, groupName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an Authorization Parameter object.
     * Update an Authorization Parameter object. Any attribute missing from the request will be left unchanged.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authorizationParameterName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileClientAuthorizationParameterModel} body The Authorization Parameter object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel} and HTTP response
     */
    updateOauthProfileClientAuthorizationParameterWithHttpInfo(body, oauthProfileName, authorizationParameterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling updateOauthProfileClientAuthorizationParameter");
      }
      // verify the required parameter 'authorizationParameterName' is set
      if (authorizationParameterName === undefined || authorizationParameterName === null) {
        throw new Error("Missing the required parameter 'authorizationParameterName' when calling updateOauthProfileClientAuthorizationParameter");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'authorizationParameterName': authorizationParameterName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileClientAuthorizationParameterResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/clientAuthorizationParameters/{authorizationParameterName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an Authorization Parameter object.
     * Update an Authorization Parameter object. Any attribute missing from the request will be left unchanged.  Additional parameters to be passed to the OAuth authorization endpoint.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authorizationParameterName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/admin\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Authorization Parameter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} authorizationParameterName The name of the authorization parameter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileClientAuthorizationParameterResponseModel}
     */
    updateOauthProfileClientAuthorizationParameter(body, oauthProfileName, authorizationParameterName, opts) {
      return this.updateOauthProfileClientAuthorizationParameterWithHttpInfo(body, oauthProfileName, authorizationParameterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Message VPN Access-Level Exception object.
     * Update a Message VPN Access-Level Exception object. Any attribute missing from the request will be left unchanged.  Default message VPN access-level exceptions.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {String} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} and HTTP response
     */
    updateOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling updateOauthProfileDefaultMsgVpnAccessLevelException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateOauthProfileDefaultMsgVpnAccessLevelException");
      }

      let pathParams = {
        'oauthProfileName': oauthProfileName,'msgVpnName': msgVpnName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel;

      return this.apiClient.callApi(
        '/oauthProfiles/{oauthProfileName}/defaultMsgVpnAccessLevelExceptions/{msgVpnName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Message VPN Access-Level Exception object.
     * Update a Message VPN Access-Level Exception object. Any attribute missing from the request will be left unchanged.  Default message VPN access-level exceptions.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|x|||||| oauthProfileName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.24.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Message VPN Access-Level Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel}
     */
    updateOauthProfileDefaultMsgVpnAccessLevelException(body, oauthProfileName, msgVpnName, opts) {
      return this.updateOauthProfileDefaultMsgVpnAccessLevelExceptionWithHttpInfo(body, oauthProfileName, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}