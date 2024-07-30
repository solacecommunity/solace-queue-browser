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
import {MsgVpnRestDeliveryPointModel} from '../model/MsgVpnRestDeliveryPointModel';
import {MsgVpnRestDeliveryPointQueueBindingModel} from '../model/MsgVpnRestDeliveryPointQueueBindingModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} from '../model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} from '../model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingsResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingsResponseModel';
import {MsgVpnRestDeliveryPointResponseModel} from '../model/MsgVpnRestDeliveryPointResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerModel} from '../model/MsgVpnRestDeliveryPointRestConsumerModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} from '../model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} from '../model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel';
import {MsgVpnRestDeliveryPointRestConsumersResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumersResponseModel';
import {MsgVpnRestDeliveryPointsResponseModel} from '../model/MsgVpnRestDeliveryPointsResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* RestDeliveryPoint service.
* @module api/RestDeliveryPointApi
* @version 2.36
*/
export class RestDeliveryPointApi {

    /**
    * Constructs a new RestDeliveryPointApi. 
    * @alias module:api/RestDeliveryPointApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a REST Delivery Point object.
     * Create a REST Delivery Point object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| restDeliveryPointName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointModel} body The REST Delivery Point object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointWithHttpInfo(body, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPoint");
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
      let returnType = MsgVpnRestDeliveryPointResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a REST Delivery Point object.
     * Create a REST Delivery Point object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| restDeliveryPointName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The REST Delivery Point object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel}
     */
    createMsgVpnRestDeliveryPoint(body, msgVpnName, opts) {
      return this.createMsgVpnRestDeliveryPointWithHttpInfo(body, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Queue Binding object.
     * Create a Queue Binding object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| queueBindingName|x|x|x|||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingModel} body The Queue Binding object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling createMsgVpnRestDeliveryPointQueueBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Queue Binding object.
     * Create a Queue Binding object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| queueBindingName|x|x|x|||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Queue Binding object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel}
     */
    createMsgVpnRestDeliveryPointQueueBinding(body, msgVpnName, restDeliveryPointName, opts) {
      return this.createMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Protected Request Header object.
     * Create a Protected Request Header object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|x|||| headerValue|||||x||x msgVpnName|x|||x||| queueBindingName|x|||x||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} body The Protected Request Header object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/protectedRequestHeaders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Protected Request Header object.
     * Create a Protected Request Header object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|x|||| headerValue|||||x||x msgVpnName|x|||x||| queueBindingName|x|||x||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Protected Request Header object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel}
     */
    createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.createMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Request Header object.
     * Create a Request Header object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A request header to be added to the HTTP request.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|x|||| msgVpnName|x|||x||| queueBindingName|x|||x||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} body The Request Header object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling createMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling createMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/requestHeaders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Request Header object.
     * Create a Request Header object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A request header to be added to the HTTP request.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|x|||| msgVpnName|x|||x||| queueBindingName|x|||x||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Request Header object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel}
     */
    createMsgVpnRestDeliveryPointQueueBindingRequestHeader(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.createMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a REST Consumer object.
     * Create a REST Consumer object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey|||||x||x authenticationClientCertContent|||||x||x authenticationClientCertPassword|||||x|| authenticationHttpBasicPassword|||||x||x authenticationHttpHeaderValue|||||x||x authenticationOauthClientSecret|||||x||x authenticationOauthJwtSecretKey|||||x||x msgVpnName|x|||x||| restConsumerName|x|x|x|||| restDeliveryPointName|x|||x|||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- MsgVpnRestDeliveryPointRestConsumer|authenticationClientCertPassword|authenticationClientCertContent| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicPassword|authenticationHttpBasicUsername| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicUsername|authenticationHttpBasicPassword| MsgVpnRestDeliveryPointRestConsumer|remotePort|tlsEnabled| MsgVpnRestDeliveryPointRestConsumer|tlsEnabled|remotePort|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointRestConsumerModel} body The REST Consumer object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling createMsgVpnRestDeliveryPointRestConsumer");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a REST Consumer object.
     * Create a REST Consumer object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey|||||x||x authenticationClientCertContent|||||x||x authenticationClientCertPassword|||||x|| authenticationHttpBasicPassword|||||x||x authenticationHttpHeaderValue|||||x||x authenticationOauthClientSecret|||||x||x authenticationOauthJwtSecretKey|||||x||x msgVpnName|x|||x||| restConsumerName|x|x|x|||| restDeliveryPointName|x|||x|||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- MsgVpnRestDeliveryPointRestConsumer|authenticationClientCertPassword|authenticationClientCertContent| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicPassword|authenticationHttpBasicUsername| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicUsername|authenticationHttpBasicPassword| MsgVpnRestDeliveryPointRestConsumer|remotePort|tlsEnabled| MsgVpnRestDeliveryPointRestConsumer|tlsEnabled|remotePort|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The REST Consumer object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel}
     */
    createMsgVpnRestDeliveryPointRestConsumer(body, msgVpnName, restDeliveryPointName, opts) {
      return this.createMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Claim object.
     * Create a Claim object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| oauthJwtClaimName|x|x|x|||| oauthJwtClaimValue||x|x|||| restConsumerName|x|||x||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimModel} body The Claim object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/oauthJwtClaims', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Claim object.
     * Create a Claim object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||| oauthJwtClaimName|x|x|x|||| oauthJwtClaimValue||x|x|||| restConsumerName|x|||x||| restDeliveryPointName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Claim object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel}
     */
    createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.createMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Trusted Common Name object.
     * Create a Trusted Common Name object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||x| restConsumerName|x|||x||x| restDeliveryPointName|x|||x||x| tlsTrustedCommonName|x|x|x|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameModel} body The Trusted Common Name object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel} and HTTP response
     */
    createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/tlsTrustedCommonNames', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Trusted Common Name object.
     * Create a Trusted Common Name object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x|||x||x| restConsumerName|x|||x||x| restDeliveryPointName|x|||x||x| tlsTrustedCommonName|x|x|x|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Trusted Common Name object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel}
     */
    createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.createMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a REST Delivery Point object.
     * Delete a REST Delivery Point object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointWithHttpInfo(msgVpnName, restDeliveryPointName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a REST Delivery Point object.
     * Delete a REST Delivery Point object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPoint(msgVpnName, restDeliveryPointName) {
      return this.deleteMsgVpnRestDeliveryPointWithHttpInfo(msgVpnName, restDeliveryPointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Queue Binding object.
     * Delete a Queue Binding object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling deleteMsgVpnRestDeliveryPointQueueBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Queue Binding object.
     * Delete a Queue Binding object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPointQueueBinding(msgVpnName, restDeliveryPointName, queueBindingName) {
      return this.deleteMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Protected Request Header object.
     * Delete a Protected Request Header object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the protected HTTP request header.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/protectedRequestHeaders/{headerName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Protected Request Header object.
     * Delete a Protected Request Header object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the protected HTTP request header.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader(msgVpnName, restDeliveryPointName, queueBindingName, headerName) {
      return this.deleteMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Request Header object.
     * Delete a Request Header object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A request header to be added to the HTTP request.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the HTTP request header.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling deleteMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling deleteMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/requestHeaders/{headerName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Request Header object.
     * Delete a Request Header object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A request header to be added to the HTTP request.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the HTTP request header.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPointQueueBindingRequestHeader(msgVpnName, restDeliveryPointName, queueBindingName, headerName) {
      return this.deleteMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a REST Consumer object.
     * Delete a REST Consumer object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling deleteMsgVpnRestDeliveryPointRestConsumer");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a REST Consumer object.
     * Delete a REST Consumer object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPointRestConsumer(msgVpnName, restDeliveryPointName, restConsumerName) {
      return this.deleteMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Claim object.
     * Delete a Claim object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Claim is added to the JWT sent to the OAuth token request endpoint.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {String} oauthJwtClaimName The name of the additional claim. Cannot be \&quot;exp\&quot;, \&quot;iat\&quot;, or \&quot;jti\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, oauthJwtClaimName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'oauthJwtClaimName' is set
      if (oauthJwtClaimName === undefined || oauthJwtClaimName === null) {
        throw new Error("Missing the required parameter 'oauthJwtClaimName' when calling deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName,'oauthJwtClaimName': oauthJwtClaimName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/oauthJwtClaims/{oauthJwtClaimName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Claim object.
     * Delete a Claim object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  A Claim is added to the JWT sent to the OAuth token request endpoint.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthJwtClaimName The name of the additional claim. Cannot be \&quot;exp\&quot;, \&quot;iat\&quot;, or \&quot;jti\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim(msgVpnName, restDeliveryPointName, restConsumerName, oauthJwtClaimName) {
      return this.deleteMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, oauthJwtClaimName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Trusted Common Name object.
     * Delete a Trusted Common Name object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, tlsTrustedCommonName) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'tlsTrustedCommonName' is set
      if (tlsTrustedCommonName === undefined || tlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'tlsTrustedCommonName' when calling deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName,'tlsTrustedCommonName': tlsTrustedCommonName
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
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/tlsTrustedCommonNames/{tlsTrustedCommonName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Trusted Common Name object.
     * Delete a Trusted Common Name object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName(msgVpnName, restDeliveryPointName, restConsumerName, tlsTrustedCommonName) {
      return this.deleteMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, tlsTrustedCommonName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a REST Delivery Point object.
     * Get a REST Delivery Point object.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointWithHttpInfo(msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a REST Delivery Point object.
     * Get a REST Delivery Point object.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel}
     */
    getMsgVpnRestDeliveryPoint(msgVpnName, restDeliveryPointName, opts) {
      return this.getMsgVpnRestDeliveryPointWithHttpInfo(msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Queue Binding object.
     * Get a Queue Binding object.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling getMsgVpnRestDeliveryPointQueueBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Queue Binding object.
     * Get a Queue Binding object.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel}
     */
    getMsgVpnRestDeliveryPointQueueBinding(msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.getMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Protected Request Header object.
     * Get a Protected Request Header object.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| headerValue||x||x msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/protectedRequestHeaders/{headerName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Protected Request Header object.
     * Get a Protected Request Header object.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| headerValue||x||x msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel}
     */
    getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader(msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      return this.getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Protected Request Header objects.
     * Get a list of Protected Request Header objects.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| headerValue||x||x msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.30.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaders");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaders");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaders");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/protectedRequestHeaders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Protected Request Header objects.
     * Get a list of Protected Request Header objects.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| headerValue||x||x msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel}
     */
    getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaders(msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.getMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Request Header object.
     * Get a Request Header object.  A request header to be added to the HTTP request.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/requestHeaders/{headerName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Request Header object.
     * Get a Request Header object.  A request header to be added to the HTTP request.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel}
     */
    getMsgVpnRestDeliveryPointQueueBindingRequestHeader(msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      return this.getMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Request Header objects.
     * Get a list of Request Header objects.  A request header to be added to the HTTP request.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.23.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointQueueBindingRequestHeadersWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeaders");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeaders");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling getMsgVpnRestDeliveryPointQueueBindingRequestHeaders");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/requestHeaders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Request Header objects.
     * Get a list of Request Header objects.  A request header to be added to the HTTP request.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: headerName|x||| msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel}
     */
    getMsgVpnRestDeliveryPointQueueBindingRequestHeaders(msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.getMsgVpnRestDeliveryPointQueueBindingRequestHeadersWithHttpInfo(msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Queue Binding objects.
     * Get a list of Queue Binding objects.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingsResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointQueueBindingsWithHttpInfo(msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointQueueBindings");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointQueueBindings");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Queue Binding objects.
     * Get a list of Queue Binding objects.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| queueBindingName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingsResponseModel}
     */
    getMsgVpnRestDeliveryPointQueueBindings(msgVpnName, restDeliveryPointName, opts) {
      return this.getMsgVpnRestDeliveryPointQueueBindingsWithHttpInfo(msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a REST Consumer object.
     * Get a REST Consumer object.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| authenticationHttpBasicPassword||x||x authenticationHttpHeaderValue||x||x authenticationOauthClientSecret||x||x authenticationOauthJwtSecretKey||x||x msgVpnName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling getMsgVpnRestDeliveryPointRestConsumer");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a REST Consumer object.
     * Get a REST Consumer object.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| authenticationHttpBasicPassword||x||x authenticationHttpHeaderValue||x||x authenticationOauthClientSecret||x||x authenticationOauthJwtSecretKey||x||x msgVpnName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel}
     */
    getMsgVpnRestDeliveryPointRestConsumer(msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.getMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Claim object.
     * Get a Claim object.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthJwtClaimName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {String} oauthJwtClaimName The name of the additional claim. Cannot be \&quot;exp\&quot;, \&quot;iat\&quot;, or \&quot;jti\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, oauthJwtClaimName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }
      // verify the required parameter 'oauthJwtClaimName' is set
      if (oauthJwtClaimName === undefined || oauthJwtClaimName === null) {
        throw new Error("Missing the required parameter 'oauthJwtClaimName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName,'oauthJwtClaimName': oauthJwtClaimName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/oauthJwtClaims/{oauthJwtClaimName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Claim object.
     * Get a Claim object.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthJwtClaimName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthJwtClaimName The name of the additional claim. Cannot be \&quot;exp\&quot;, \&quot;iat\&quot;, or \&quot;jti\&quot;.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel}
     */
    getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim(msgVpnName, restDeliveryPointName, restConsumerName, oauthJwtClaimName, opts) {
      return this.getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, oauthJwtClaimName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Claim objects.
     * Get a list of Claim objects.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthJwtClaimName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.21.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaims");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaims");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaims");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/oauthJwtClaims', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Claim objects.
     * Get a list of Claim objects.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| oauthJwtClaimName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel}
     */
    getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaims(msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.getMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||x| restConsumerName|x||x| restDeliveryPointName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, tlsTrustedCommonName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }
      // verify the required parameter 'tlsTrustedCommonName' is set
      if (tlsTrustedCommonName === undefined || tlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'tlsTrustedCommonName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName,'tlsTrustedCommonName': tlsTrustedCommonName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/tlsTrustedCommonNames/{tlsTrustedCommonName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||x| restConsumerName|x||x| restDeliveryPointName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameResponseModel}
     */
    getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonName(msgVpnName, restDeliveryPointName, restConsumerName, tlsTrustedCommonName, opts) {
      return this.getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNameWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, tlsTrustedCommonName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||x| restConsumerName|x||x| restDeliveryPointName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNames");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNames");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNames");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
      };
      let queryParams = {
        'opaquePassword': opts['opaquePassword'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/tlsTrustedCommonNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||x| restConsumerName|x||x| restDeliveryPointName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesResponseModel}
     */
    getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNames(msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.getMsgVpnRestDeliveryPointRestConsumerTlsTrustedCommonNamesWithHttpInfo(msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of REST Consumer objects.
     * Get a list of REST Consumer objects.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| authenticationHttpBasicPassword||x||x authenticationHttpHeaderValue||x||x authenticationOauthClientSecret||x||x authenticationOauthJwtSecretKey||x||x msgVpnName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumersResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointRestConsumersWithHttpInfo(msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPointRestConsumers");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling getMsgVpnRestDeliveryPointRestConsumers");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of REST Consumer objects.
     * Get a list of REST Consumer objects.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| authenticationHttpBasicPassword||x||x authenticationHttpHeaderValue||x||x authenticationOauthClientSecret||x||x authenticationOauthJwtSecretKey||x||x msgVpnName|x||| restConsumerName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumersResponseModel}
     */
    getMsgVpnRestDeliveryPointRestConsumers(msgVpnName, restDeliveryPointName, opts) {
      return this.getMsgVpnRestDeliveryPointRestConsumersWithHttpInfo(msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of REST Delivery Point objects.
     * Get a list of REST Delivery Point objects.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.0.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointsResponseModel} and HTTP response
     */
    getMsgVpnRestDeliveryPointsWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnRestDeliveryPoints");
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
      let returnType = MsgVpnRestDeliveryPointsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of REST Delivery Point objects.
     * Get a list of REST Delivery Point objects.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: msgVpnName|x||| restDeliveryPointName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointsResponseModel}
     */
    getMsgVpnRestDeliveryPoints(msgVpnName, opts) {
      return this.getMsgVpnRestDeliveryPointsWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a REST Delivery Point object.
     * Replace a REST Delivery Point object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientProfileName||||||x|| msgVpnName|x||x||||| restDeliveryPointName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointModel} body The REST Delivery Point object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel} and HTTP response
     */
    replaceMsgVpnRestDeliveryPointWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling replaceMsgVpnRestDeliveryPoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a REST Delivery Point object.
     * Replace a REST Delivery Point object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientProfileName||||||x|| msgVpnName|x||x||||| restDeliveryPointName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The REST Delivery Point object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel}
     */
    replaceMsgVpnRestDeliveryPoint(body, msgVpnName, restDeliveryPointName, opts) {
      return this.replaceMsgVpnRestDeliveryPointWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Queue Binding object.
     * Replace a Queue Binding object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| queueBindingName|x|x|||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingModel} body The Queue Binding object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel} and HTTP response
     */
    replaceMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling replaceMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling replaceMsgVpnRestDeliveryPointQueueBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Queue Binding object.
     * Replace a Queue Binding object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| queueBindingName|x|x|||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Queue Binding object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel}
     */
    replaceMsgVpnRestDeliveryPointQueueBinding(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.replaceMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Protected Request Header object.
     * Replace a Protected Request Header object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| headerValue||||x||||x msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} body The Protected Request Header object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} and HTTP response
     */
    replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/protectedRequestHeaders/{headerName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Protected Request Header object.
     * Replace a Protected Request Header object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| headerValue||||x||||x msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Protected Request Header object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel}
     */
    replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      return this.replaceMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Request Header object.
     * Replace a Request Header object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A request header to be added to the HTTP request.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} body The Request Header object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} and HTTP response
     */
    replaceMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling replaceMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling replaceMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling replaceMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/requestHeaders/{headerName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Request Header object.
     * Replace a Request Header object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A request header to be added to the HTTP request.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Request Header object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel}
     */
    replaceMsgVpnRestDeliveryPointQueueBindingRequestHeader(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      return this.replaceMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a REST Consumer object.
     * Replace a REST Consumer object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||||x||||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| authenticationHttpBasicPassword||||x||x||x authenticationHttpBasicUsername||||||x|| authenticationHttpHeaderValue||||x||||x authenticationOauthClientId||||||x|| authenticationOauthClientScope||||||x|| authenticationOauthClientSecret||||x||x||x authenticationOauthClientTokenEndpoint||||||x|| authenticationOauthClientTokenExpiryDefault||||||x|| authenticationOauthJwtSecretKey||||x||x||x authenticationOauthJwtTokenEndpoint||||||x|| authenticationOauthJwtTokenExpiryDefault||||||x|| authenticationScheme||||||x|| msgVpnName|x||x||||| outgoingConnectionCount||||||x|| remoteHost||||||x|| remotePort||||||x|| restConsumerName|x|x|||||| restDeliveryPointName|x||x||||| tlsCipherSuiteList||||||x|| tlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- MsgVpnRestDeliveryPointRestConsumer|authenticationClientCertPassword|authenticationClientCertContent| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicPassword|authenticationHttpBasicUsername| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicUsername|authenticationHttpBasicPassword| MsgVpnRestDeliveryPointRestConsumer|remotePort|tlsEnabled| MsgVpnRestDeliveryPointRestConsumer|tlsEnabled|remotePort|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointRestConsumerModel} body The REST Consumer object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel} and HTTP response
     */
    replaceMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling replaceMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling replaceMsgVpnRestDeliveryPointRestConsumer");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a REST Consumer object.
     * Replace a REST Consumer object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||||x||||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| authenticationHttpBasicPassword||||x||x||x authenticationHttpBasicUsername||||||x|| authenticationHttpHeaderValue||||x||||x authenticationOauthClientId||||||x|| authenticationOauthClientScope||||||x|| authenticationOauthClientSecret||||x||x||x authenticationOauthClientTokenEndpoint||||||x|| authenticationOauthClientTokenExpiryDefault||||||x|| authenticationOauthJwtSecretKey||||x||x||x authenticationOauthJwtTokenEndpoint||||||x|| authenticationOauthJwtTokenExpiryDefault||||||x|| authenticationScheme||||||x|| msgVpnName|x||x||||| outgoingConnectionCount||||||x|| remoteHost||||||x|| remotePort||||||x|| restConsumerName|x|x|||||| restDeliveryPointName|x||x||||| tlsCipherSuiteList||||||x|| tlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- MsgVpnRestDeliveryPointRestConsumer|authenticationClientCertPassword|authenticationClientCertContent| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicPassword|authenticationHttpBasicUsername| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicUsername|authenticationHttpBasicPassword| MsgVpnRestDeliveryPointRestConsumer|remotePort|tlsEnabled| MsgVpnRestDeliveryPointRestConsumer|tlsEnabled|remotePort|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The REST Consumer object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel}
     */
    replaceMsgVpnRestDeliveryPointRestConsumer(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.replaceMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a REST Delivery Point object.
     * Update a REST Delivery Point object. Any attribute missing from the request will be left unchanged.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientProfileName||||||x|| msgVpnName|x||x||||| restDeliveryPointName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointModel} body The REST Delivery Point object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel} and HTTP response
     */
    updateMsgVpnRestDeliveryPointWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnRestDeliveryPoint");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling updateMsgVpnRestDeliveryPoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName
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
      let returnType = MsgVpnRestDeliveryPointResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a REST Delivery Point object.
     * Update a REST Delivery Point object. Any attribute missing from the request will be left unchanged.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: clientProfileName||||||x|| msgVpnName|x||x||||| restDeliveryPointName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The REST Delivery Point object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointResponseModel}
     */
    updateMsgVpnRestDeliveryPoint(body, msgVpnName, restDeliveryPointName, opts) {
      return this.updateMsgVpnRestDeliveryPointWithHttpInfo(body, msgVpnName, restDeliveryPointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Queue Binding object.
     * Update a Queue Binding object. Any attribute missing from the request will be left unchanged.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| queueBindingName|x|x|||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingModel} body The Queue Binding object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel} and HTTP response
     */
    updateMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling updateMsgVpnRestDeliveryPointQueueBinding");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling updateMsgVpnRestDeliveryPointQueueBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Queue Binding object.
     * Update a Queue Binding object. Any attribute missing from the request will be left unchanged.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: msgVpnName|x||x||||| queueBindingName|x|x|||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Queue Binding object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingResponseModel}
     */
    updateMsgVpnRestDeliveryPointQueueBinding(body, msgVpnName, restDeliveryPointName, queueBindingName, opts) {
      return this.updateMsgVpnRestDeliveryPointQueueBindingWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Protected Request Header object.
     * Update a Protected Request Header object. Any attribute missing from the request will be left unchanged.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| headerValue||||x||||x msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderModel} body The Protected Request Header object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} and HTTP response
     */
    updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/protectedRequestHeaders/{headerName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Protected Request Header object.
     * Update a Protected Request Header object. Any attribute missing from the request will be left unchanged.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| headerValue||||x||||x msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Protected Request Header object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel}
     */
    updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      return this.updateMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Request Header object.
     * Update a Request Header object. Any attribute missing from the request will be left unchanged.  A request header to be added to the HTTP request.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderModel} body The Request Header object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} and HTTP response
     */
    updateMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling updateMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'queueBindingName' is set
      if (queueBindingName === undefined || queueBindingName === null) {
        throw new Error("Missing the required parameter 'queueBindingName' when calling updateMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }
      // verify the required parameter 'headerName' is set
      if (headerName === undefined || headerName === null) {
        throw new Error("Missing the required parameter 'headerName' when calling updateMsgVpnRestDeliveryPointQueueBindingRequestHeader");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'queueBindingName': queueBindingName,'headerName': headerName
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
      let returnType = MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/queueBindings/{queueBindingName}/requestHeaders/{headerName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Request Header object.
     * Update a Request Header object. Any attribute missing from the request will be left unchanged.  A request header to be added to the HTTP request.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: headerName|x|x|||||| msgVpnName|x||x||||| queueBindingName|x||x||||| restDeliveryPointName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Request Header object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel}
     */
    updateMsgVpnRestDeliveryPointQueueBindingRequestHeader(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts) {
      return this.updateMsgVpnRestDeliveryPointQueueBindingRequestHeaderWithHttpInfo(body, msgVpnName, restDeliveryPointName, queueBindingName, headerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a REST Consumer object.
     * Update a REST Consumer object. Any attribute missing from the request will be left unchanged.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||||x||||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| authenticationHttpBasicPassword||||x||x||x authenticationHttpBasicUsername||||||x|| authenticationHttpHeaderValue||||x||||x authenticationOauthClientId||||||x|| authenticationOauthClientScope||||||x|| authenticationOauthClientSecret||||x||x||x authenticationOauthClientTokenEndpoint||||||x|| authenticationOauthClientTokenExpiryDefault||||||x|| authenticationOauthJwtSecretKey||||x||x||x authenticationOauthJwtTokenEndpoint||||||x|| authenticationOauthJwtTokenExpiryDefault||||||x|| authenticationScheme||||||x|| msgVpnName|x||x||||| outgoingConnectionCount||||||x|| remoteHost||||||x|| remotePort||||||x|| restConsumerName|x|x|||||| restDeliveryPointName|x||x||||| tlsCipherSuiteList||||||x|| tlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- MsgVpnRestDeliveryPointRestConsumer|authenticationClientCertPassword|authenticationClientCertContent| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicPassword|authenticationHttpBasicUsername| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicUsername|authenticationHttpBasicPassword| MsgVpnRestDeliveryPointRestConsumer|remotePort|tlsEnabled| MsgVpnRestDeliveryPointRestConsumer|tlsEnabled|remotePort|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {module:model/MsgVpnRestDeliveryPointRestConsumerModel} body The REST Consumer object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel} and HTTP response
     */
    updateMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling updateMsgVpnRestDeliveryPointRestConsumer");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling updateMsgVpnRestDeliveryPointRestConsumer");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'restDeliveryPointName': restDeliveryPointName,'restConsumerName': restConsumerName
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
      let returnType = MsgVpnRestDeliveryPointRestConsumerResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a REST Consumer object.
     * Update a REST Consumer object. Any attribute missing from the request will be left unchanged.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationAwsSecretAccessKey||||x||||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| authenticationHttpBasicPassword||||x||x||x authenticationHttpBasicUsername||||||x|| authenticationHttpHeaderValue||||x||||x authenticationOauthClientId||||||x|| authenticationOauthClientScope||||||x|| authenticationOauthClientSecret||||x||x||x authenticationOauthClientTokenEndpoint||||||x|| authenticationOauthClientTokenExpiryDefault||||||x|| authenticationOauthJwtSecretKey||||x||x||x authenticationOauthJwtTokenEndpoint||||||x|| authenticationOauthJwtTokenExpiryDefault||||||x|| authenticationScheme||||||x|| msgVpnName|x||x||||| outgoingConnectionCount||||||x|| remoteHost||||||x|| remotePort||||||x|| restConsumerName|x|x|||||| restDeliveryPointName|x||x||||| tlsCipherSuiteList||||||x|| tlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- MsgVpnRestDeliveryPointRestConsumer|authenticationClientCertPassword|authenticationClientCertContent| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicPassword|authenticationHttpBasicUsername| MsgVpnRestDeliveryPointRestConsumer|authenticationHttpBasicUsername|authenticationHttpBasicPassword| MsgVpnRestDeliveryPointRestConsumer|remotePort|tlsEnabled| MsgVpnRestDeliveryPointRestConsumer|tlsEnabled|remotePort|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.0.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The REST Consumer object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnRestDeliveryPointRestConsumerResponseModel}
     */
    updateMsgVpnRestDeliveryPointRestConsumer(body, msgVpnName, restDeliveryPointName, restConsumerName, opts) {
      return this.updateMsgVpnRestDeliveryPointRestConsumerWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}