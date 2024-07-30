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
import {MsgVpnMqttSessionModel} from '../model/MsgVpnMqttSessionModel';
import {MsgVpnMqttSessionResponseModel} from '../model/MsgVpnMqttSessionResponseModel';
import {MsgVpnMqttSessionSubscriptionModel} from '../model/MsgVpnMqttSessionSubscriptionModel';
import {MsgVpnMqttSessionSubscriptionResponseModel} from '../model/MsgVpnMqttSessionSubscriptionResponseModel';
import {MsgVpnMqttSessionSubscriptionsResponseModel} from '../model/MsgVpnMqttSessionSubscriptionsResponseModel';
import {MsgVpnMqttSessionsResponseModel} from '../model/MsgVpnMqttSessionsResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* MqttSession service.
* @module api/MqttSessionApi
* @version 2.36
*/
export class MqttSessionApi {

    /**
    * Constructs a new MqttSessionApi. 
    * @alias module:api/MqttSessionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an MQTT Session object.
     * Create an MQTT Session object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|x|x|||| mqttSessionVirtualRouter|x|x|x|||| msgVpnName|x|||x|||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {module:model/MsgVpnMqttSessionModel} body The MQTT Session object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionResponseModel} and HTTP response
     */
    createMsgVpnMqttSessionWithHttpInfo(body, msgVpnName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnMqttSession");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnMqttSession");
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
      let returnType = MsgVpnMqttSessionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create an MQTT Session object.
     * Create an MQTT Session object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|x|x|||| mqttSessionVirtualRouter|x|x|x|||| msgVpnName|x|||x|||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The MQTT Session object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionResponseModel}
     */
    createMsgVpnMqttSession(body, msgVpnName, opts) {
      return this.createMsgVpnMqttSessionWithHttpInfo(body, msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Subscription object.
     * Create a Subscription object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|||x||| mqttSessionVirtualRouter|x|||x||| msgVpnName|x|||x||| subscriptionTopic|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {module:model/MsgVpnMqttSessionSubscriptionModel} body The Subscription object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel} and HTTP response
     */
    createMsgVpnMqttSessionSubscriptionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling createMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling createMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling createMsgVpnMqttSessionSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
      let returnType = MsgVpnMqttSessionSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Subscription object.
     * Create a Subscription object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|||x||| mqttSessionVirtualRouter|x|||x||| msgVpnName|x|||x||| subscriptionTopic|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Subscription object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel}
     */
    createMsgVpnMqttSessionSubscription(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      return this.createMsgVpnMqttSessionSubscriptionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete an MQTT Session object.
     * Delete an MQTT Session object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnMqttSessionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling deleteMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling deleteMsgVpnMqttSession");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an MQTT Session object.
     * Delete an MQTT Session object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnMqttSession(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter) {
      return this.deleteMsgVpnMqttSessionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Subscription object.
     * Delete a Subscription object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {String} subscriptionTopic The MQTT subscription topic.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteMsgVpnMqttSessionSubscriptionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic) {
      
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling deleteMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling deleteMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling deleteMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'subscriptionTopic' is set
      if (subscriptionTopic === undefined || subscriptionTopic === null) {
        throw new Error("Missing the required parameter 'subscriptionTopic' when calling deleteMsgVpnMqttSessionSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter,'subscriptionTopic': subscriptionTopic
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
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions/{subscriptionTopic}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Subscription object.
     * Delete a Subscription object. The deletion of instances of this object are synchronized to HA mates and replication sites via config-sync.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.  A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionTopic The MQTT subscription topic.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteMsgVpnMqttSessionSubscription(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic) {
      return this.deleteMsgVpnMqttSessionSubscriptionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an MQTT Session object.
     * Get an MQTT Session object.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionResponseModel} and HTTP response
     */
    getMsgVpnMqttSessionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling getMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling getMsgVpnMqttSession");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
      let returnType = MsgVpnMqttSessionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an MQTT Session object.
     * Get an MQTT Session object.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionResponseModel}
     */
    getMsgVpnMqttSession(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      return this.getMsgVpnMqttSessionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Subscription object.
     * Get a Subscription object.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x||| subscriptionTopic|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {String} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel} and HTTP response
     */
    getMsgVpnMqttSessionSubscriptionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling getMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling getMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'subscriptionTopic' is set
      if (subscriptionTopic === undefined || subscriptionTopic === null) {
        throw new Error("Missing the required parameter 'subscriptionTopic' when calling getMsgVpnMqttSessionSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter,'subscriptionTopic': subscriptionTopic
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
      let returnType = MsgVpnMqttSessionSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions/{subscriptionTopic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Subscription object.
     * Get a Subscription object.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x||| subscriptionTopic|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel}
     */
    getMsgVpnMqttSessionSubscription(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      return this.getMsgVpnMqttSessionSubscriptionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Subscription objects.
     * Get a list of Subscription objects.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x||| subscriptionTopic|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.1.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionsResponseModel} and HTTP response
     */
    getMsgVpnMqttSessionSubscriptionsWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnMqttSessionSubscriptions");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling getMsgVpnMqttSessionSubscriptions");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling getMsgVpnMqttSessionSubscriptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
      let returnType = MsgVpnMqttSessionSubscriptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Subscription objects.
     * Get a list of Subscription objects.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x||| subscriptionTopic|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionsResponseModel}
     */
    getMsgVpnMqttSessionSubscriptions(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      return this.getMsgVpnMqttSessionSubscriptionsWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of MQTT Session objects.
     * Get a list of MQTT Session objects.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.1.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionsResponseModel} and HTTP response
     */
    getMsgVpnMqttSessionsWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnMqttSessions");
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
      let returnType = MsgVpnMqttSessionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of MQTT Session objects.
     * Get a list of MQTT Session objects.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: mqttSessionClientId|x||| mqttSessionVirtualRouter|x||| msgVpnName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionsResponseModel}
     */
    getMsgVpnMqttSessions(msgVpnName, opts) {
      return this.getMsgVpnMqttSessionsWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace an MQTT Session object.
     * Replace an MQTT Session object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|x|||||| mqttSessionVirtualRouter|x|x|||||| msgVpnName|x||x||||| owner||||||x|| queueRejectMsgToSenderOnDiscardBehavior||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {module:model/MsgVpnMqttSessionModel} body The MQTT Session object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionResponseModel} and HTTP response
     */
    replaceMsgVpnMqttSessionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnMqttSession");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling replaceMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling replaceMsgVpnMqttSession");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
      let returnType = MsgVpnMqttSessionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace an MQTT Session object.
     * Replace an MQTT Session object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|x|||||| mqttSessionVirtualRouter|x|x|||||| msgVpnName|x||x||||| owner||||||x|| queueRejectMsgToSenderOnDiscardBehavior||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The MQTT Session object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionResponseModel}
     */
    replaceMsgVpnMqttSession(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      return this.replaceMsgVpnMqttSessionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Subscription object.
     * Replace a Subscription object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x||x||||| mqttSessionVirtualRouter|x||x||||| msgVpnName|x||x||||| subscriptionTopic|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {module:model/MsgVpnMqttSessionSubscriptionModel} body The Subscription object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {String} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel} and HTTP response
     */
    replaceMsgVpnMqttSessionSubscriptionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling replaceMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling replaceMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling replaceMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'subscriptionTopic' is set
      if (subscriptionTopic === undefined || subscriptionTopic === null) {
        throw new Error("Missing the required parameter 'subscriptionTopic' when calling replaceMsgVpnMqttSessionSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter,'subscriptionTopic': subscriptionTopic
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
      let returnType = MsgVpnMqttSessionSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions/{subscriptionTopic}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Subscription object.
     * Replace a Subscription object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x||x||||| mqttSessionVirtualRouter|x||x||||| msgVpnName|x||x||||| subscriptionTopic|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Subscription object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel}
     */
    replaceMsgVpnMqttSessionSubscription(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      return this.replaceMsgVpnMqttSessionSubscriptionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an MQTT Session object.
     * Update an MQTT Session object. Any attribute missing from the request will be left unchanged.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|x|||||| mqttSessionVirtualRouter|x|x|||||| msgVpnName|x||x||||| owner||||||x|| queueRejectMsgToSenderOnDiscardBehavior||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {module:model/MsgVpnMqttSessionModel} body The MQTT Session object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionResponseModel} and HTTP response
     */
    updateMsgVpnMqttSessionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnMqttSession");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling updateMsgVpnMqttSession");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling updateMsgVpnMqttSession");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
      let returnType = MsgVpnMqttSessionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an MQTT Session object.
     * Update an MQTT Session object. Any attribute missing from the request will be left unchanged.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x|x|||||| mqttSessionVirtualRouter|x|x|||||| msgVpnName|x||x||||| owner||||||x|| queueRejectMsgToSenderOnDiscardBehavior||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The MQTT Session object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionResponseModel}
     */
    updateMsgVpnMqttSession(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      return this.updateMsgVpnMqttSessionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Subscription object.
     * Update a Subscription object. Any attribute missing from the request will be left unchanged.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x||x||||| mqttSessionVirtualRouter|x||x||||| msgVpnName|x||x||||| subscriptionTopic|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {module:model/MsgVpnMqttSessionSubscriptionModel} body The Subscription object&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {String} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel} and HTTP response
     */
    updateMsgVpnMqttSessionSubscriptionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling updateMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling updateMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling updateMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'subscriptionTopic' is set
      if (subscriptionTopic === undefined || subscriptionTopic === null) {
        throw new Error("Missing the required parameter 'subscriptionTopic' when calling updateMsgVpnMqttSessionSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter,'subscriptionTopic': subscriptionTopic
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
      let returnType = MsgVpnMqttSessionSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions/{subscriptionTopic}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Subscription object.
     * Update a Subscription object. Any attribute missing from the request will be left unchanged.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: mqttSessionClientId|x||x||||| mqttSessionVirtualRouter|x||x||||| msgVpnName|x||x||||| subscriptionTopic|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.1.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Subscription object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel}
     */
    updateMsgVpnMqttSessionSubscription(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      return this.updateMsgVpnMqttSessionSubscriptionWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}