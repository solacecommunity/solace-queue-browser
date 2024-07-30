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
import {MsgVpnTelemetryProfileModel} from '../model/MsgVpnTelemetryProfileModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} from '../model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} from '../model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel';
import {MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} from '../model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel';
import {MsgVpnTelemetryProfileResponseModel} from '../model/MsgVpnTelemetryProfileResponseModel';
import {MsgVpnTelemetryProfileTraceFilterModel} from '../model/MsgVpnTelemetryProfileTraceFilterModel';
import {MsgVpnTelemetryProfileTraceFilterResponseModel} from '../model/MsgVpnTelemetryProfileTraceFilterResponseModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionModel} from '../model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} from '../model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel';
import {MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} from '../model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel';
import {MsgVpnTelemetryProfileTraceFiltersResponseModel} from '../model/MsgVpnTelemetryProfileTraceFiltersResponseModel';
import {MsgVpnTelemetryProfilesResponseModel} from '../model/MsgVpnTelemetryProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* TelemetryProfile service.
* @module api/TelemetryProfileApi
* @version 2.36
*/
export class TelemetryProfileApi {

    /**
    * Constructs a new TelemetryProfileApi. 
    * @alias module:api/TelemetryProfileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Telemetry Profile object.
     * Create a Telemetry Profile object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| telemetryProfileName|x|x|x||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileModel} body The Telemetry Profile object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileResponseModel} and HTTP response
     */
    createMsgVpnTelemetryProfileWithHttpInfo(body, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnTelemetryProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
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
      let returnType = MsgVpnTelemetryProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Telemetry Profile object.
     * Create a Telemetry Profile object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| telemetryProfileName|x|x|x||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Telemetry Profile object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileResponseModel}
     */
    createMsgVpnTelemetryProfile(body, msgVpnName, opts) {
      return this.createMsgVpnTelemetryProfileWithHttpInfo(body, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Receiver ACL Connect Exception object.
     * Create a Receiver ACL Connect Exception object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| receiverAclConnectExceptionAddress|x|x|x|||| telemetryProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionModel} body The Receiver ACL Connect Exception object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} and HTTP response
     */
    createMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(body, msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling createMsgVpnTelemetryProfileReceiverAclConnectException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/receiverAclConnectExceptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Receiver ACL Connect Exception object.
     * Create a Receiver ACL Connect Exception object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| receiverAclConnectExceptionAddress|x|x|x|||| telemetryProfileName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Receiver ACL Connect Exception object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel}
     */
    createMsgVpnTelemetryProfileReceiverAclConnectException(body, msgVpnName, telemetryProfileName, opts) {
      return this.createMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(body, msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Trace Filter object.
     * Create a Trace Filter object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| telemetryProfileName|x|||x||| traceFilterName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileTraceFilterModel} body The Trace Filter object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} and HTTP response
     */
    createMsgVpnTelemetryProfileTraceFilterWithHttpInfo(body, msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling createMsgVpnTelemetryProfileTraceFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Trace Filter object.
     * Create a Trace Filter object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| telemetryProfileName|x|||x||| traceFilterName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Trace Filter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel}
     */
    createMsgVpnTelemetryProfileTraceFilter(body, msgVpnName, telemetryProfileName, opts) {
      return this.createMsgVpnTelemetryProfileTraceFilterWithHttpInfo(body, msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Telemetry Trace Filter Subscription object.
     * Create a Telemetry Trace Filter Subscription object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| subscription|x|x|x|||| subscriptionSyntax|x|x|x|||| telemetryProfileName|x|||x||| traceFilterName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionModel} body The Telemetry Trace Filter Subscription object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} and HTTP response
     */
    createMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(body, msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling createMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling createMsgVpnTelemetryProfileTraceFilterSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Telemetry Trace Filter Subscription object.
     * Create a Telemetry Trace Filter Subscription object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| subscription|x|x|x|||| subscriptionSyntax|x|x|x|||| telemetryProfileName|x|||x||| traceFilterName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Telemetry Trace Filter Subscription object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel}
     */
    createMsgVpnTelemetryProfileTraceFilterSubscription(body, msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.createMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(body, msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Telemetry Profile object.
     * Delete a Telemetry Profile object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnTelemetryProfileWithHttpInfo(msgVpnName, telemetryProfileName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling deleteMsgVpnTelemetryProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Telemetry Profile object.
     * Delete a Telemetry Profile object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnTelemetryProfile(msgVpnName, telemetryProfileName) {
      return this.deleteMsgVpnTelemetryProfileWithHttpInfo(msgVpnName, telemetryProfileName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Receiver ACL Connect Exception object.
     * Delete a Receiver ACL Connect Exception object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} receiverAclConnectExceptionAddress The IP address/netmask of the receiver connect exception in CIDR form.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling deleteMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'receiverAclConnectExceptionAddress' is set
      if (receiverAclConnectExceptionAddress === undefined || receiverAclConnectExceptionAddress === null) {
        throw new Error("Missing the required parameter 'receiverAclConnectExceptionAddress' when calling deleteMsgVpnTelemetryProfileReceiverAclConnectException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'receiverAclConnectExceptionAddress': receiverAclConnectExceptionAddress
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
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/receiverAclConnectExceptions/{receiverAclConnectExceptionAddress}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Receiver ACL Connect Exception object.
     * Delete a Receiver ACL Connect Exception object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} receiverAclConnectExceptionAddress The IP address/netmask of the receiver connect exception in CIDR form.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnTelemetryProfileReceiverAclConnectException(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress) {
      return this.deleteMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Trace Filter object.
     * Delete a Trace Filter object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnTelemetryProfileTraceFilterWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling deleteMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling deleteMsgVpnTelemetryProfileTraceFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Trace Filter object.
     * Delete a Trace Filter object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnTelemetryProfileTraceFilter(msgVpnName, telemetryProfileName, traceFilterName) {
      return this.deleteMsgVpnTelemetryProfileTraceFilterWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Telemetry Trace Filter Subscription object.
     * Delete a Telemetry Trace Filter Subscription object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  Trace filter subscriptions control which messages will be attracted by the tracing filter.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {String} subscription Messages matching this subscription will follow this filter&#x27;s configuration.
     * @param {String} subscriptionSyntax The syntax of the trace filter subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling deleteMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling deleteMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'subscription' is set
      if (subscription === undefined || subscription === null) {
        throw new Error("Missing the required parameter 'subscription' when calling deleteMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'subscriptionSyntax' is set
      if (subscriptionSyntax === undefined || subscriptionSyntax === null) {
        throw new Error("Missing the required parameter 'subscriptionSyntax' when calling deleteMsgVpnTelemetryProfileTraceFilterSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName,'subscription': subscription,'subscriptionSyntax': subscriptionSyntax
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
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}/subscriptions/{subscription},{subscriptionSyntax}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Telemetry Trace Filter Subscription object.
     * Delete a Telemetry Trace Filter Subscription object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  Trace filter subscriptions control which messages will be attracted by the tracing filter.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscription Messages matching this subscription will follow this filter&#x27;s configuration.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionSyntax The syntax of the trace filter subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnTelemetryProfileTraceFilterSubscription(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax) {
      return this.deleteMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Telemetry Profile object.
     * Get a Telemetry Profile object.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileWithHttpInfo(msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Telemetry Profile object.
     * Get a Telemetry Profile object.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileResponseModel}
     */
    getMsgVpnTelemetryProfile(msgVpnName, telemetryProfileName, opts) {
      return this.getMsgVpnTelemetryProfileWithHttpInfo(msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Receiver ACL Connect Exception object.
     * Get a Receiver ACL Connect Exception object.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| receiverAclConnectExceptionAddress|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} receiverAclConnectExceptionAddress The IP address/netmask of the receiver connect exception in CIDR form.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileReceiverAclConnectException");
      }
      // verify the required parameter 'receiverAclConnectExceptionAddress' is set
      if (receiverAclConnectExceptionAddress === undefined || receiverAclConnectExceptionAddress === null) {
        throw new Error("Missing the required parameter 'receiverAclConnectExceptionAddress' when calling getMsgVpnTelemetryProfileReceiverAclConnectException");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'receiverAclConnectExceptionAddress': receiverAclConnectExceptionAddress
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
      let returnType = MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/receiverAclConnectExceptions/{receiverAclConnectExceptionAddress}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Receiver ACL Connect Exception object.
     * Get a Receiver ACL Connect Exception object.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| receiverAclConnectExceptionAddress|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} receiverAclConnectExceptionAddress The IP address/netmask of the receiver connect exception in CIDR form.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionResponseModel}
     */
    getMsgVpnTelemetryProfileReceiverAclConnectException(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress, opts) {
      return this.getMsgVpnTelemetryProfileReceiverAclConnectExceptionWithHttpInfo(msgVpnName, telemetryProfileName, receiverAclConnectExceptionAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Receiver ACL Connect Exception objects.
     * Get a list of Receiver ACL Connect Exception objects.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| receiverAclConnectExceptionAddress|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileReceiverAclConnectExceptionsWithHttpInfo(msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileReceiverAclConnectExceptions");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileReceiverAclConnectExceptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/receiverAclConnectExceptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Receiver ACL Connect Exception objects.
     * Get a list of Receiver ACL Connect Exception objects.  A Receiver ACL Connect Exception is an exception to the default action to take when a receiver connects to the broker. Exceptions must be expressed as an IP address/netmask in CIDR form.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| receiverAclConnectExceptionAddress|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileReceiverAclConnectExceptionsResponseModel}
     */
    getMsgVpnTelemetryProfileReceiverAclConnectExceptions(msgVpnName, telemetryProfileName, opts) {
      return this.getMsgVpnTelemetryProfileReceiverAclConnectExceptionsWithHttpInfo(msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Trace Filter object.
     * Get a Trace Filter object.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFilterWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling getMsgVpnTelemetryProfileTraceFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Trace Filter object.
     * Get a Trace Filter object.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilter(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.getMsgVpnTelemetryProfileTraceFilterWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Telemetry Trace Filter Subscription object.
     * Get a Telemetry Trace Filter Subscription object.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| subscription|x||| subscriptionSyntax|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {String} subscription Messages matching this subscription will follow this filter&#x27;s configuration.
     * @param {String} subscriptionSyntax The syntax of the trace filter subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'subscription' is set
      if (subscription === undefined || subscription === null) {
        throw new Error("Missing the required parameter 'subscription' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }
      // verify the required parameter 'subscriptionSyntax' is set
      if (subscriptionSyntax === undefined || subscriptionSyntax === null) {
        throw new Error("Missing the required parameter 'subscriptionSyntax' when calling getMsgVpnTelemetryProfileTraceFilterSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName,'subscription': subscription,'subscriptionSyntax': subscriptionSyntax
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
      let returnType = MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}/subscriptions/{subscription},{subscriptionSyntax}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Telemetry Trace Filter Subscription object.
     * Get a Telemetry Trace Filter Subscription object.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| subscription|x||| subscriptionSyntax|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscription Messages matching this subscription will follow this filter&#x27;s configuration.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionSyntax The syntax of the trace filter subscription.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilterSubscription(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax, opts) {
      return this.getMsgVpnTelemetryProfileTraceFilterSubscriptionWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, subscription, subscriptionSyntax, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Telemetry Trace Filter Subscription objects.
     * Get a list of Telemetry Trace Filter Subscription objects.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| subscription|x||| subscriptionSyntax|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFilterSubscriptionsWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilterSubscriptions");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilterSubscriptions");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling getMsgVpnTelemetryProfileTraceFilterSubscriptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Telemetry Trace Filter Subscription objects.
     * Get a list of Telemetry Trace Filter Subscription objects.  Trace filter subscriptions control which messages will be attracted by the tracing filter.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| subscription|x||| subscriptionSyntax|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterSubscriptionsResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilterSubscriptions(msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.getMsgVpnTelemetryProfileTraceFilterSubscriptionsWithHttpInfo(msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Trace Filter objects.
     * Get a list of Trace Filter objects.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfileTraceFiltersWithHttpInfo(msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfileTraceFilters");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling getMsgVpnTelemetryProfileTraceFilters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileTraceFiltersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Trace Filter objects.
     * Get a list of Trace Filter objects.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x||| traceFilterName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFiltersResponseModel}
     */
    getMsgVpnTelemetryProfileTraceFilters(msgVpnName, telemetryProfileName, opts) {
      return this.getMsgVpnTelemetryProfileTraceFiltersWithHttpInfo(msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Telemetry Profile objects.
     * Get a list of Telemetry Profile objects.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfilesResponseModel} and HTTP response
     */
    getMsgVpnTelemetryProfilesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTelemetryProfiles");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
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
      let returnType = MsgVpnTelemetryProfilesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Telemetry Profile objects.
     * Get a list of Telemetry Profile objects.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| telemetryProfileName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfilesResponseModel}
     */
    getMsgVpnTelemetryProfiles(msgVpnName, opts) {
      return this.getMsgVpnTelemetryProfilesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Telemetry Profile object.
     * Replace a Telemetry Profile object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x|x||||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileModel} body The Telemetry Profile object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileResponseModel} and HTTP response
     */
    replaceMsgVpnTelemetryProfileWithHttpInfo(body, msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling replaceMsgVpnTelemetryProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Telemetry Profile object.
     * Replace a Telemetry Profile object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x|x||||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Telemetry Profile object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileResponseModel}
     */
    replaceMsgVpnTelemetryProfile(body, msgVpnName, telemetryProfileName, opts) {
      return this.replaceMsgVpnTelemetryProfileWithHttpInfo(body, msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Trace Filter object.
     * Replace a Trace Filter object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x||x||||| traceFilterName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileTraceFilterModel} body The Trace Filter object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} and HTTP response
     */
    replaceMsgVpnTelemetryProfileTraceFilterWithHttpInfo(body, msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling replaceMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling replaceMsgVpnTelemetryProfileTraceFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Trace Filter object.
     * Replace a Trace Filter object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x||x||||| traceFilterName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Trace Filter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel}
     */
    replaceMsgVpnTelemetryProfileTraceFilter(body, msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.replaceMsgVpnTelemetryProfileTraceFilterWithHttpInfo(body, msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Telemetry Profile object.
     * Update a Telemetry Profile object. Any attribute missing from the request will be left unchanged.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x|x||||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileModel} body The Telemetry Profile object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileResponseModel} and HTTP response
     */
    updateMsgVpnTelemetryProfileWithHttpInfo(body, msgVpnName, telemetryProfileName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnTelemetryProfile");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling updateMsgVpnTelemetryProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName
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
      let returnType = MsgVpnTelemetryProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Telemetry Profile object.
     * Update a Telemetry Profile object. Any attribute missing from the request will be left unchanged.  Using the Telemetry Profile allows trace spans to be generated as messages are processed by the broker. The generated spans are stored persistently on the broker and may be consumed by the Solace receiver component of an OpenTelemetry Collector.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x|x||||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Telemetry Profile object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileResponseModel}
     */
    updateMsgVpnTelemetryProfile(body, msgVpnName, telemetryProfileName, opts) {
      return this.updateMsgVpnTelemetryProfileWithHttpInfo(body, msgVpnName, telemetryProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Trace Filter object.
     * Update a Trace Filter object. Any attribute missing from the request will be left unchanged.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x||x||||| traceFilterName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {module:model/MsgVpnTelemetryProfileTraceFilterModel} body The Trace Filter object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} telemetryProfileName The name of the Telemetry Profile.
     * @param {String} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel} and HTTP response
     */
    updateMsgVpnTelemetryProfileTraceFilterWithHttpInfo(body, msgVpnName, telemetryProfileName, traceFilterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'telemetryProfileName' is set
      if (telemetryProfileName === undefined || telemetryProfileName === null) {
        throw new Error("Missing the required parameter 'telemetryProfileName' when calling updateMsgVpnTelemetryProfileTraceFilter");
      }
      // verify the required parameter 'traceFilterName' is set
      if (traceFilterName === undefined || traceFilterName === null) {
        throw new Error("Missing the required parameter 'traceFilterName' when calling updateMsgVpnTelemetryProfileTraceFilter");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'telemetryProfileName': telemetryProfileName,'traceFilterName': traceFilterName
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
      let returnType = MsgVpnTelemetryProfileTraceFilterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/telemetryProfiles/{telemetryProfileName}/traceFilters/{traceFilterName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Trace Filter object.
     * Update a Trace Filter object. Any attribute missing from the request will be left unchanged.  A Trace Filter controls which messages received by the broker will be traced. If an incoming message matches an enabled tracing filter&#x27;s subscription, the message will be traced as it passes through the broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| telemetryProfileName|x||x||||| traceFilterName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.31.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Trace Filter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} telemetryProfileName The name of the Telemetry Profile.
     * @param {<&vendorExtensions.x-jsdoc-type>} traceFilterName A name used to identify the trace filter. Consider a name that describes the subscriptions contained within the filter, such as the name of the application and/or the scenario in which the trace filter might be enabled, such as \&quot;appNameDebug\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTelemetryProfileTraceFilterResponseModel}
     */
    updateMsgVpnTelemetryProfileTraceFilter(body, msgVpnName, telemetryProfileName, traceFilterName, opts) {
      return this.updateMsgVpnTelemetryProfileTraceFilterWithHttpInfo(body, msgVpnName, telemetryProfileName, traceFilterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}