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
import {DmrClusterCertMatchingRuleAttributeFilterModel} from '../model/DmrClusterCertMatchingRuleAttributeFilterModel';
import {DmrClusterCertMatchingRuleAttributeFilterResponseModel} from '../model/DmrClusterCertMatchingRuleAttributeFilterResponseModel';
import {DmrClusterCertMatchingRuleAttributeFiltersResponseModel} from '../model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel';
import {DmrClusterCertMatchingRuleConditionModel} from '../model/DmrClusterCertMatchingRuleConditionModel';
import {DmrClusterCertMatchingRuleConditionResponseModel} from '../model/DmrClusterCertMatchingRuleConditionResponseModel';
import {DmrClusterCertMatchingRuleConditionsResponseModel} from '../model/DmrClusterCertMatchingRuleConditionsResponseModel';
import {DmrClusterCertMatchingRuleModel} from '../model/DmrClusterCertMatchingRuleModel';
import {DmrClusterCertMatchingRuleResponseModel} from '../model/DmrClusterCertMatchingRuleResponseModel';
import {DmrClusterCertMatchingRulesResponseModel} from '../model/DmrClusterCertMatchingRulesResponseModel';
import {DmrClusterLinkAttributeModel} from '../model/DmrClusterLinkAttributeModel';
import {DmrClusterLinkAttributeResponseModel} from '../model/DmrClusterLinkAttributeResponseModel';
import {DmrClusterLinkAttributesResponseModel} from '../model/DmrClusterLinkAttributesResponseModel';
import {DmrClusterLinkModel} from '../model/DmrClusterLinkModel';
import {DmrClusterLinkRemoteAddressModel} from '../model/DmrClusterLinkRemoteAddressModel';
import {DmrClusterLinkRemoteAddressResponseModel} from '../model/DmrClusterLinkRemoteAddressResponseModel';
import {DmrClusterLinkRemoteAddressesResponseModel} from '../model/DmrClusterLinkRemoteAddressesResponseModel';
import {DmrClusterLinkResponseModel} from '../model/DmrClusterLinkResponseModel';
import {DmrClusterLinkTlsTrustedCommonNameModel} from '../model/DmrClusterLinkTlsTrustedCommonNameModel';
import {DmrClusterLinkTlsTrustedCommonNameResponseModel} from '../model/DmrClusterLinkTlsTrustedCommonNameResponseModel';
import {DmrClusterLinkTlsTrustedCommonNamesResponseModel} from '../model/DmrClusterLinkTlsTrustedCommonNamesResponseModel';
import {DmrClusterLinksResponseModel} from '../model/DmrClusterLinksResponseModel';
import {DmrClusterModel} from '../model/DmrClusterModel';
import {DmrClusterResponseModel} from '../model/DmrClusterResponseModel';
import {DmrClustersResponseModel} from '../model/DmrClustersResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* DmrCluster service.
* @module api/DmrClusterApi
* @version 2.36
*/
export class DmrClusterApi {

    /**
    * Constructs a new DmrClusterApi. 
    * @alias module:api/DmrClusterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a Cluster object.
     * Create a Cluster object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword|||||x||x authenticationClientCertContent|||||x||x authenticationClientCertPassword|||||x|| directOnlyEnabled||x||||| dmrClusterName|x|x|x|||| nodeName||||x||| tlsServerCertEnforceTrustedCommonNameEnabled||||||x|    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- DmrCluster|authenticationClientCertPassword|authenticationClientCertContent|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterModel} body The Cluster object&#x27;s attributes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterResponseModel} and HTTP response
     */
    createDmrClusterWithHttpInfo(body, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrCluster");
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
      let returnType = DmrClusterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Cluster object.
     * Create a Cluster object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword|||||x||x authenticationClientCertContent|||||x||x authenticationClientCertPassword|||||x|| directOnlyEnabled||x||||| dmrClusterName|x|x|x|||| nodeName||||x||| tlsServerCertEnforceTrustedCommonNameEnabled||||||x|    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- DmrCluster|authenticationClientCertPassword|authenticationClientCertContent|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cluster object&#x27;s attributes.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterResponseModel}
     */
    createDmrCluster(body, opts) {
      return this.createDmrClusterWithHttpInfo(body, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Certificate Matching Rule object.
     * Create a Certificate Matching Rule object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||| ruleName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleModel} body The Certificate Matching Rule object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel} and HTTP response
     */
    createDmrClusterCertMatchingRuleWithHttpInfo(body, dmrClusterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterCertMatchingRule");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterCertMatchingRuleResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Certificate Matching Rule object.
     * Create a Certificate Matching Rule object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||| ruleName|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel}
     */
    createDmrClusterCertMatchingRule(body, dmrClusterName, opts) {
      return this.createDmrClusterCertMatchingRuleWithHttpInfo(body, dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Certificate Matching Rule Attribute Filter object.
     * Create a Certificate Matching Rule Attribute Filter object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||| filterName|x|x|x|||| ruleName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterModel} body The Certificate Matching Rule Attribute Filter object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} and HTTP response
     */
    createDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(body, dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling createDmrClusterCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFilterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Certificate Matching Rule Attribute Filter object.
     * Create a Certificate Matching Rule Attribute Filter object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||| filterName|x|x|x|||| ruleName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule Attribute Filter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel}
     */
    createDmrClusterCertMatchingRuleAttributeFilter(body, dmrClusterName, ruleName, opts) {
      return this.createDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(body, dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Certificate Matching Rule Condition object.
     * Create a Certificate Matching Rule Condition object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: attribute||x||||| dmrClusterName|x|||x||| expression||x||||| ruleName|x|||x||| source|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleConditionModel} body The Certificate Matching Rule Condition object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleConditionResponseModel} and HTTP response
     */
    createDmrClusterCertMatchingRuleConditionWithHttpInfo(body, dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling createDmrClusterCertMatchingRuleCondition");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleConditionResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/conditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Certificate Matching Rule Condition object.
     * Create a Certificate Matching Rule Condition object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: attribute||x||||| dmrClusterName|x|||x||| expression||x||||| ruleName|x|||x||| source|x|x|x||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule Condition object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleConditionResponseModel}
     */
    createDmrClusterCertMatchingRuleCondition(body, dmrClusterName, ruleName, opts) {
      return this.createDmrClusterCertMatchingRuleConditionWithHttpInfo(body, dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Link object.
     * Create a Link object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword|||||x||x dmrClusterName|x|||x||| remoteNodeName|x|x|x||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterLinkModel} body The Link object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkResponseModel} and HTTP response
     */
    createDmrClusterLinkWithHttpInfo(body, dmrClusterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterLink");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterLink");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterLinkResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Link object.
     * Create a Link object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword|||||x||x dmrClusterName|x|||x||| remoteNodeName|x|x|x||||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Link object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkResponseModel}
     */
    createDmrClusterLink(body, dmrClusterName, opts) {
      return this.createDmrClusterLinkWithHttpInfo(body, dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Link Attribute object.
     * Create a Link Attribute object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: attributeName|x|x|x|||| attributeValue|x|x|x|||| dmrClusterName|x|||x||| remoteNodeName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterLinkAttributeModel} body The Link Attribute object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkAttributeResponseModel} and HTTP response
     */
    createDmrClusterLinkAttributeWithHttpInfo(body, dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterLinkAttribute");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterLinkAttribute");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling createDmrClusterLinkAttribute");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkAttributeResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/attributes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Link Attribute object.
     * Create a Link Attribute object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: attributeName|x|x|x|||| attributeValue|x|x|x|||| dmrClusterName|x|||x||| remoteNodeName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Link Attribute object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkAttributeResponseModel}
     */
    createDmrClusterLinkAttribute(body, dmrClusterName, remoteNodeName, opts) {
      return this.createDmrClusterLinkAttributeWithHttpInfo(body, dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Remote Address object.
     * Create a Remote Address object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||| remoteAddress|x|x|x|||| remoteNodeName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterLinkRemoteAddressModel} body The Remote Address object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkRemoteAddressResponseModel} and HTTP response
     */
    createDmrClusterLinkRemoteAddressWithHttpInfo(body, dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling createDmrClusterLinkRemoteAddress");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkRemoteAddressResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/remoteAddresses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Remote Address object.
     * Create a Remote Address object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||| remoteAddress|x|x|x|||| remoteNodeName|x|||x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Remote Address object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkRemoteAddressResponseModel}
     */
    createDmrClusterLinkRemoteAddress(body, dmrClusterName, remoteNodeName, opts) {
      return this.createDmrClusterLinkRemoteAddressWithHttpInfo(body, dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a Trusted Common Name object.
     * Create a Trusted Common Name object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||x| remoteNodeName|x|||x||x| tlsTrustedCommonName|x|x|x|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {module:model/DmrClusterLinkTlsTrustedCommonNameModel} body The Trusted Common Name object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel} and HTTP response
     */
    createDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(body, dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling createDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling createDmrClusterLinkTlsTrustedCommonName");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/tlsTrustedCommonNames', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a Trusted Common Name object.
     * Create a Trusted Common Name object. Any attribute missing from the request will be set to its default value. The creation of instances of this object are synchronized to HA mates via config-sync.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Const|Required|Read-Only|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x|||x||x| remoteNodeName|x|||x||x| tlsTrustedCommonName|x|x|x|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Trusted Common Name object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel}
     */
    createDmrClusterLinkTlsTrustedCommonName(body, dmrClusterName, remoteNodeName, opts) {
      return this.createDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(body, dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Cluster object.
     * Delete a Cluster object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterWithHttpInfo(dmrClusterName) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrCluster");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
        '/dmrClusters/{dmrClusterName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Cluster object.
     * Delete a Cluster object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrCluster(dmrClusterName) {
      return this.deleteDmrClusterWithHttpInfo(dmrClusterName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Certificate Matching Rule object.
     * Delete a Certificate Matching Rule object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterCertMatchingRuleWithHttpInfo(dmrClusterName, ruleName) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling deleteDmrClusterCertMatchingRule");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Certificate Matching Rule object.
     * Delete a Certificate Matching Rule object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterCertMatchingRule(dmrClusterName, ruleName) {
      return this.deleteDmrClusterCertMatchingRuleWithHttpInfo(dmrClusterName, ruleName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Certificate Matching Rule Attribute Filter object.
     * Delete a Certificate Matching Rule Attribute Filter object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} filterName The name of the filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(dmrClusterName, ruleName, filterName) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling deleteDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'filterName' is set
      if (filterName === undefined || filterName === null) {
        throw new Error("Missing the required parameter 'filterName' when calling deleteDmrClusterCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'filterName': filterName
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
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters/{filterName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Certificate Matching Rule Attribute Filter object.
     * Delete a Certificate Matching Rule Attribute Filter object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} filterName The name of the filter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterCertMatchingRuleAttributeFilter(dmrClusterName, ruleName, filterName) {
      return this.deleteDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(dmrClusterName, ruleName, filterName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Certificate Matching Rule Condition object.
     * Delete a Certificate Matching Rule Condition object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} source Certificate field to be compared with the Attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterCertMatchingRuleConditionWithHttpInfo(dmrClusterName, ruleName, source) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling deleteDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling deleteDmrClusterCertMatchingRuleCondition");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'source': source
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
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/conditions/{source}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Certificate Matching Rule Condition object.
     * Delete a Certificate Matching Rule Condition object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} source Certificate field to be compared with the Attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterCertMatchingRuleCondition(dmrClusterName, ruleName, source) {
      return this.deleteDmrClusterCertMatchingRuleConditionWithHttpInfo(dmrClusterName, ruleName, source)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Link object.
     * Delete a Link object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterLinkWithHttpInfo(dmrClusterName, remoteNodeName) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterLink");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling deleteDmrClusterLink");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Link object.
     * Delete a Link object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterLink(dmrClusterName, remoteNodeName) {
      return this.deleteDmrClusterLinkWithHttpInfo(dmrClusterName, remoteNodeName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Link Attribute object.
     * Delete a Link Attribute object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} attributeName The name of the Attribute.
     * @param {String} attributeValue The value of the Attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterLinkAttributeWithHttpInfo(dmrClusterName, remoteNodeName, attributeName, attributeValue) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterLinkAttribute");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling deleteDmrClusterLinkAttribute");
      }
      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling deleteDmrClusterLinkAttribute");
      }
      // verify the required parameter 'attributeValue' is set
      if (attributeValue === undefined || attributeValue === null) {
        throw new Error("Missing the required parameter 'attributeValue' when calling deleteDmrClusterLinkAttribute");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'attributeName': attributeName,'attributeValue': attributeValue
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
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/attributes/{attributeName},{attributeValue}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Link Attribute object.
     * Delete a Link Attribute object. The deletion of instances of this object are synchronized to HA mates via config-sync.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeName The name of the Attribute.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeValue The value of the Attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterLinkAttribute(dmrClusterName, remoteNodeName, attributeName, attributeValue) {
      return this.deleteDmrClusterLinkAttributeWithHttpInfo(dmrClusterName, remoteNodeName, attributeName, attributeValue)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Remote Address object.
     * Delete a Remote Address object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} remoteAddress The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterLinkRemoteAddressWithHttpInfo(dmrClusterName, remoteNodeName, remoteAddress) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling deleteDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteAddress' is set
      if (remoteAddress === undefined || remoteAddress === null) {
        throw new Error("Missing the required parameter 'remoteAddress' when calling deleteDmrClusterLinkRemoteAddress");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'remoteAddress': remoteAddress
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
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/remoteAddresses/{remoteAddress}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Remote Address object.
     * Delete a Remote Address object. The deletion of instances of this object are synchronized to HA mates via config-sync.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteAddress The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterLinkRemoteAddress(dmrClusterName, remoteNodeName, remoteAddress) {
      return this.deleteDmrClusterLinkRemoteAddressWithHttpInfo(dmrClusterName, remoteNodeName, remoteAddress)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a Trusted Common Name object.
     * Delete a Trusted Common Name object. The deletion of instances of this object are synchronized to HA mates via config-sync.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    deleteDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(dmrClusterName, remoteNodeName, tlsTrustedCommonName) {
      
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling deleteDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling deleteDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'tlsTrustedCommonName' is set
      if (tlsTrustedCommonName === undefined || tlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'tlsTrustedCommonName' when calling deleteDmrClusterLinkTlsTrustedCommonName");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'tlsTrustedCommonName': tlsTrustedCommonName
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
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/tlsTrustedCommonNames/{tlsTrustedCommonName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a Trusted Common Name object.
     * Delete a Trusted Common Name object. The deletion of instances of this object are synchronized to HA mates via config-sync.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.  A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    deleteDmrClusterLinkTlsTrustedCommonName(dmrClusterName, remoteNodeName, tlsTrustedCommonName) {
      return this.deleteDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(dmrClusterName, remoteNodeName, tlsTrustedCommonName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cluster object.
     * Get a Cluster object.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| dmrClusterName|x||| tlsServerCertEnforceTrustedCommonNameEnabled|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterResponseModel} and HTTP response
     */
    getDmrClusterWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrCluster");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cluster object.
     * Get a Cluster object.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| dmrClusterName|x||| tlsServerCertEnforceTrustedCommonNameEnabled|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterResponseModel}
     */
    getDmrCluster(dmrClusterName, opts) {
      return this.getDmrClusterWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule object.
     * Get a Certificate Matching Rule object.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleWithHttpInfo(dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRule");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule object.
     * Get a Certificate Matching Rule object.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel}
     */
    getDmrClusterCertMatchingRule(dmrClusterName, ruleName, opts) {
      return this.getDmrClusterCertMatchingRuleWithHttpInfo(dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule Attribute Filter object.
     * Get a Certificate Matching Rule Attribute Filter object.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| filterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(dmrClusterName, ruleName, filterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'filterName' is set
      if (filterName === undefined || filterName === null) {
        throw new Error("Missing the required parameter 'filterName' when calling getDmrClusterCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'filterName': filterName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFilterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters/{filterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule Attribute Filter object.
     * Get a Certificate Matching Rule Attribute Filter object.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| filterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel}
     */
    getDmrClusterCertMatchingRuleAttributeFilter(dmrClusterName, ruleName, filterName, opts) {
      return this.getDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(dmrClusterName, ruleName, filterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule Attribute Filter objects.
     * Get a list of Certificate Matching Rule Attribute Filter objects.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| filterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleAttributeFiltersWithHttpInfo(dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleAttributeFilters");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleAttributeFilters");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFiltersResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule Attribute Filter objects.
     * Get a list of Certificate Matching Rule Attribute Filter objects.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| filterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFiltersResponseModel}
     */
    getDmrClusterCertMatchingRuleAttributeFilters(dmrClusterName, ruleName, opts) {
      return this.getDmrClusterCertMatchingRuleAttributeFiltersWithHttpInfo(dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Certificate Matching Rule Condition object.
     * Get a Certificate Matching Rule Condition object.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x||| source|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} source Certificate field to be compared with the Attribute.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleConditionResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleConditionWithHttpInfo(dmrClusterName, ruleName, source, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleCondition");
      }
      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling getDmrClusterCertMatchingRuleCondition");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'source': source
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
      let returnType = DmrClusterCertMatchingRuleConditionResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/conditions/{source}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Certificate Matching Rule Condition object.
     * Get a Certificate Matching Rule Condition object.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x||| source|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} source Certificate field to be compared with the Attribute.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleConditionResponseModel}
     */
    getDmrClusterCertMatchingRuleCondition(dmrClusterName, ruleName, source, opts) {
      return this.getDmrClusterCertMatchingRuleConditionWithHttpInfo(dmrClusterName, ruleName, source, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule Condition objects.
     * Get a list of Certificate Matching Rule Condition objects.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x||| source|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleConditionsResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRuleConditionsWithHttpInfo(dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRuleConditions");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling getDmrClusterCertMatchingRuleConditions");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleConditionsResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/conditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule Condition objects.
     * Get a list of Certificate Matching Rule Condition objects.  A Cert Matching Rule Condition compares data extracted from a certificate to a link attribute or an expression.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x||| source|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleConditionsResponseModel}
     */
    getDmrClusterCertMatchingRuleConditions(dmrClusterName, ruleName, opts) {
      return this.getDmrClusterCertMatchingRuleConditionsWithHttpInfo(dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Certificate Matching Rule objects.
     * Get a list of Certificate Matching Rule objects.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRulesResponseModel} and HTTP response
     */
    getDmrClusterCertMatchingRulesWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterCertMatchingRules");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterCertMatchingRulesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Certificate Matching Rule objects.
     * Get a list of Certificate Matching Rule objects.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| ruleName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRulesResponseModel}
     */
    getDmrClusterCertMatchingRules(dmrClusterName, opts) {
      return this.getDmrClusterCertMatchingRulesWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Link object.
     * Get a Link object.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkResponseModel} and HTTP response
     */
    getDmrClusterLinkWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLink");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLink");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Link object.
     * Get a Link object.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkResponseModel}
     */
    getDmrClusterLink(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Link Attribute object.
     * Get a Link Attribute object.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: attributeName|x||| attributeValue|x||| dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} attributeName The name of the Attribute.
     * @param {String} attributeValue The value of the Attribute.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkAttributeResponseModel} and HTTP response
     */
    getDmrClusterLinkAttributeWithHttpInfo(dmrClusterName, remoteNodeName, attributeName, attributeValue, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkAttribute");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkAttribute");
      }
      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling getDmrClusterLinkAttribute");
      }
      // verify the required parameter 'attributeValue' is set
      if (attributeValue === undefined || attributeValue === null) {
        throw new Error("Missing the required parameter 'attributeValue' when calling getDmrClusterLinkAttribute");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'attributeName': attributeName,'attributeValue': attributeValue
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
      let returnType = DmrClusterLinkAttributeResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/attributes/{attributeName},{attributeValue}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Link Attribute object.
     * Get a Link Attribute object.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: attributeName|x||| attributeValue|x||| dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeName The name of the Attribute.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeValue The value of the Attribute.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkAttributeResponseModel}
     */
    getDmrClusterLinkAttribute(dmrClusterName, remoteNodeName, attributeName, attributeValue, opts) {
      return this.getDmrClusterLinkAttributeWithHttpInfo(dmrClusterName, remoteNodeName, attributeName, attributeValue, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Link Attribute objects.
     * Get a list of Link Attribute objects.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: attributeName|x||| attributeValue|x||| dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkAttributesResponseModel} and HTTP response
     */
    getDmrClusterLinkAttributesWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkAttributes");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkAttributes");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkAttributesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Link Attribute objects.
     * Get a list of Link Attribute objects.  A Link Attribute is a key+value pair that can be used to locate a DMR Cluster Link, for example when using client certificate mapping.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: attributeName|x||| attributeValue|x||| dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkAttributesResponseModel}
     */
    getDmrClusterLinkAttributes(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkAttributesWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Address object.
     * Get a Remote Address object.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| remoteAddress|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} remoteAddress The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkRemoteAddressResponseModel} and HTTP response
     */
    getDmrClusterLinkRemoteAddressWithHttpInfo(dmrClusterName, remoteNodeName, remoteAddress, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkRemoteAddress");
      }
      // verify the required parameter 'remoteAddress' is set
      if (remoteAddress === undefined || remoteAddress === null) {
        throw new Error("Missing the required parameter 'remoteAddress' when calling getDmrClusterLinkRemoteAddress");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'remoteAddress': remoteAddress
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
      let returnType = DmrClusterLinkRemoteAddressResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/remoteAddresses/{remoteAddress}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Address object.
     * Get a Remote Address object.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| remoteAddress|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteAddress The FQDN or IP address (and optional port) of the remote node. If a port is not provided, it will vary based on the transport encoding: 55555 (plain-text), 55443 (encrypted), or 55003 (compressed).
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkRemoteAddressResponseModel}
     */
    getDmrClusterLinkRemoteAddress(dmrClusterName, remoteNodeName, remoteAddress, opts) {
      return this.getDmrClusterLinkRemoteAddressWithHttpInfo(dmrClusterName, remoteNodeName, remoteAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Address objects.
     * Get a list of Remote Address objects.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| remoteAddress|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkRemoteAddressesResponseModel} and HTTP response
     */
    getDmrClusterLinkRemoteAddressesWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkRemoteAddresses");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkRemoteAddresses");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkRemoteAddressesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/remoteAddresses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Address objects.
     * Get a list of Remote Address objects.  Each Remote Address, consisting of a FQDN or IP address and optional port, is used to connect to the remote node for this Link. Up to 4 addresses may be provided for each Link, and will be tried on a round-robin basis.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||| remoteAddress|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkRemoteAddressesResponseModel}
     */
    getDmrClusterLinkRemoteAddresses(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkRemoteAddressesWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||x| remoteNodeName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel} and HTTP response
     */
    getDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(dmrClusterName, remoteNodeName, tlsTrustedCommonName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkTlsTrustedCommonName");
      }
      // verify the required parameter 'tlsTrustedCommonName' is set
      if (tlsTrustedCommonName === undefined || tlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'tlsTrustedCommonName' when calling getDmrClusterLinkTlsTrustedCommonName");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName,'tlsTrustedCommonName': tlsTrustedCommonName
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
      let returnType = DmrClusterLinkTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/tlsTrustedCommonNames/{tlsTrustedCommonName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||x| remoteNodeName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNameResponseModel}
     */
    getDmrClusterLinkTlsTrustedCommonName(dmrClusterName, remoteNodeName, tlsTrustedCommonName, opts) {
      return this.getDmrClusterLinkTlsTrustedCommonNameWithHttpInfo(dmrClusterName, remoteNodeName, tlsTrustedCommonName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||x| remoteNodeName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel} and HTTP response
     */
    getDmrClusterLinkTlsTrustedCommonNamesWithHttpInfo(dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinkTlsTrustedCommonNames");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getDmrClusterLinkTlsTrustedCommonNames");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkTlsTrustedCommonNamesResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}/tlsTrustedCommonNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the Link are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: dmrClusterName|x||x| remoteNodeName|x||x| tlsTrustedCommonName|x||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkTlsTrustedCommonNamesResponseModel}
     */
    getDmrClusterLinkTlsTrustedCommonNames(dmrClusterName, remoteNodeName, opts) {
      return this.getDmrClusterLinkTlsTrustedCommonNamesWithHttpInfo(dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Link objects.
     * Get a list of Link objects.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinksResponseModel} and HTTP response
     */
    getDmrClusterLinksWithHttpInfo(dmrClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling getDmrClusterLinks");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterLinksResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Link objects.
     * Get a list of Link objects.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x dmrClusterName|x||| remoteNodeName|x|||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinksResponseModel}
     */
    getDmrClusterLinks(dmrClusterName, opts) {
      return this.getDmrClusterLinksWithHttpInfo(dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cluster objects.
     * Get a list of Cluster objects.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| dmrClusterName|x||| tlsServerCertEnforceTrustedCommonNameEnabled|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClustersResponseModel} and HTTP response
     */
    getDmrClustersWithHttpInfo(opts) {
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
      let returnType = DmrClustersResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cluster objects.
     * Get a list of Cluster objects.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Write-Only|Deprecated|Opaque :---|:---:|:---:|:---:|:---: authenticationBasicPassword||x||x authenticationClientCertContent||x||x authenticationClientCertPassword||x|| dmrClusterName|x||| tlsServerCertEnforceTrustedCommonNameEnabled|||x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClustersResponseModel}
     */
    getDmrClusters(opts) {
      return this.getDmrClustersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Cluster object.
     * Replace a Cluster object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| directOnlyEnabled||x|||||| dmrClusterName|x|x|||||| nodeName|||x||||| tlsServerCertEnforceTrustedCommonNameEnabled|||||||x|    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- DmrCluster|authenticationClientCertPassword|authenticationClientCertContent|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterModel} body The Cluster object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterResponseModel} and HTTP response
     */
    replaceDmrClusterWithHttpInfo(body, dmrClusterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceDmrCluster");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling replaceDmrCluster");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Cluster object.
     * Replace a Cluster object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| directOnlyEnabled||x|||||| dmrClusterName|x|x|||||| nodeName|||x||||| tlsServerCertEnforceTrustedCommonNameEnabled|||||||x|    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- DmrCluster|authenticationClientCertPassword|authenticationClientCertContent|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cluster object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterResponseModel}
     */
    replaceDmrCluster(body, dmrClusterName, opts) {
      return this.replaceDmrClusterWithHttpInfo(body, dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Certificate Matching Rule object.
     * Replace a Certificate Matching Rule object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| ruleName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleModel} body The Certificate Matching Rule object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel} and HTTP response
     */
    replaceDmrClusterCertMatchingRuleWithHttpInfo(body, dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling replaceDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling replaceDmrClusterCertMatchingRule");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Certificate Matching Rule object.
     * Replace a Certificate Matching Rule object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| ruleName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel}
     */
    replaceDmrClusterCertMatchingRule(body, dmrClusterName, ruleName, opts) {
      return this.replaceDmrClusterCertMatchingRuleWithHttpInfo(body, dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Certificate Matching Rule Attribute Filter object.
     * Replace a Certificate Matching Rule Attribute Filter object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| filterName|x|x|||||| ruleName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterModel} body The Certificate Matching Rule Attribute Filter object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} and HTTP response
     */
    replaceDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(body, dmrClusterName, ruleName, filterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling replaceDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling replaceDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'filterName' is set
      if (filterName === undefined || filterName === null) {
        throw new Error("Missing the required parameter 'filterName' when calling replaceDmrClusterCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'filterName': filterName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFilterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters/{filterName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Certificate Matching Rule Attribute Filter object.
     * Replace a Certificate Matching Rule Attribute Filter object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| filterName|x|x|||||| ruleName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule Attribute Filter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel}
     */
    replaceDmrClusterCertMatchingRuleAttributeFilter(body, dmrClusterName, ruleName, filterName, opts) {
      return this.replaceDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(body, dmrClusterName, ruleName, filterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Replace a Link object.
     * Replace a Link object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationScheme||||||x|| dmrClusterName|x||x||||| egressFlowWindowSize||||||x|| initiator||||||x|| remoteNodeName|x|x|||||| span||||||x|| transportCompressedEnabled||||||x|| transportTlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterLinkModel} body The Link object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkResponseModel} and HTTP response
     */
    replaceDmrClusterLinkWithHttpInfo(body, dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceDmrClusterLink");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling replaceDmrClusterLink");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling replaceDmrClusterLink");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Replace a Link object.
     * Replace a Link object. Any attribute missing from the request will be set to its default value, subject to the exceptions in note 4.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationScheme||||||x|| dmrClusterName|x||x||||| egressFlowWindowSize||||||x|| initiator||||||x|| remoteNodeName|x|x|||||| span||||||x|| transportCompressedEnabled||||||x|| transportTlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Link object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkResponseModel}
     */
    replaceDmrClusterLink(body, dmrClusterName, remoteNodeName, opts) {
      return this.replaceDmrClusterLinkWithHttpInfo(body, dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Cluster object.
     * Update a Cluster object. Any attribute missing from the request will be left unchanged.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| directOnlyEnabled||x|||||| dmrClusterName|x|x|||||| nodeName|||x||||| tlsServerCertEnforceTrustedCommonNameEnabled|||||||x|    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- DmrCluster|authenticationClientCertPassword|authenticationClientCertContent|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterModel} body The Cluster object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterResponseModel} and HTTP response
     */
    updateDmrClusterWithHttpInfo(body, dmrClusterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDmrCluster");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling updateDmrCluster");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName
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
      let returnType = DmrClusterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Cluster object.
     * Update a Cluster object. Any attribute missing from the request will be left unchanged.  A Cluster is a provisioned object on a message broker that contains global DMR configuration parameters.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationClientCertContent||||x||x||x authenticationClientCertPassword||||x||x|| directOnlyEnabled||x|||||| dmrClusterName|x|x|||||| nodeName|||x||||| tlsServerCertEnforceTrustedCommonNameEnabled|||||||x|    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- DmrCluster|authenticationClientCertPassword|authenticationClientCertContent|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cluster object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterResponseModel}
     */
    updateDmrCluster(body, dmrClusterName, opts) {
      return this.updateDmrClusterWithHttpInfo(body, dmrClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Certificate Matching Rule object.
     * Update a Certificate Matching Rule object. Any attribute missing from the request will be left unchanged.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| ruleName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleModel} body The Certificate Matching Rule object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel} and HTTP response
     */
    updateDmrClusterCertMatchingRuleWithHttpInfo(body, dmrClusterName, ruleName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling updateDmrClusterCertMatchingRule");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling updateDmrClusterCertMatchingRule");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName
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
      let returnType = DmrClusterCertMatchingRuleResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Certificate Matching Rule object.
     * Update a Certificate Matching Rule object. Any attribute missing from the request will be left unchanged.  A Cert Matching Rule is a collection of conditions and attribute filters that all have to be satisfied for certificate to be acceptable as authentication for a given link.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| ruleName|x|x||||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleResponseModel}
     */
    updateDmrClusterCertMatchingRule(body, dmrClusterName, ruleName, opts) {
      return this.updateDmrClusterCertMatchingRuleWithHttpInfo(body, dmrClusterName, ruleName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Certificate Matching Rule Attribute Filter object.
     * Update a Certificate Matching Rule Attribute Filter object. Any attribute missing from the request will be left unchanged.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| filterName|x|x|||||| ruleName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/DmrClusterCertMatchingRuleAttributeFilterModel} body The Certificate Matching Rule Attribute Filter object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} ruleName The name of the rule.
     * @param {String} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel} and HTTP response
     */
    updateDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(body, dmrClusterName, ruleName, filterName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling updateDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'ruleName' is set
      if (ruleName === undefined || ruleName === null) {
        throw new Error("Missing the required parameter 'ruleName' when calling updateDmrClusterCertMatchingRuleAttributeFilter");
      }
      // verify the required parameter 'filterName' is set
      if (filterName === undefined || filterName === null) {
        throw new Error("Missing the required parameter 'filterName' when calling updateDmrClusterCertMatchingRuleAttributeFilter");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'ruleName': ruleName,'filterName': filterName
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
      let returnType = DmrClusterCertMatchingRuleAttributeFilterResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/certMatchingRules/{ruleName}/attributeFilters/{filterName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Certificate Matching Rule Attribute Filter object.
     * Update a Certificate Matching Rule Attribute Filter object. Any attribute missing from the request will be left unchanged.  A Cert Matching Rule Attribute Filter compares a link attribute to a string.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: dmrClusterName|x||x||||| filterName|x|x|||||| ruleName|x||x|||||    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Certificate Matching Rule Attribute Filter object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} ruleName The name of the rule.
     * @param {<&vendorExtensions.x-jsdoc-type>} filterName The name of the filter.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterCertMatchingRuleAttributeFilterResponseModel}
     */
    updateDmrClusterCertMatchingRuleAttributeFilter(body, dmrClusterName, ruleName, filterName, opts) {
      return this.updateDmrClusterCertMatchingRuleAttributeFilterWithHttpInfo(body, dmrClusterName, ruleName, filterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a Link object.
     * Update a Link object. Any attribute missing from the request will be left unchanged.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationScheme||||||x|| dmrClusterName|x||x||||| egressFlowWindowSize||||||x|| initiator||||||x|| remoteNodeName|x|x|||||| span||||||x|| transportCompressedEnabled||||||x|| transportTlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/DmrClusterLinkModel} body The Link object&#x27;s attributes.
     * @param {String} dmrClusterName The name of the Cluster.
     * @param {String} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DmrClusterLinkResponseModel} and HTTP response
     */
    updateDmrClusterLinkWithHttpInfo(body, dmrClusterName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateDmrClusterLink");
      }
      // verify the required parameter 'dmrClusterName' is set
      if (dmrClusterName === undefined || dmrClusterName === null) {
        throw new Error("Missing the required parameter 'dmrClusterName' when calling updateDmrClusterLink");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling updateDmrClusterLink");
      }

      let pathParams = {
        'dmrClusterName': dmrClusterName,'remoteNodeName': remoteNodeName
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
      let returnType = DmrClusterLinkResponseModel;

      return this.apiClient.callApi(
        '/dmrClusters/{dmrClusterName}/links/{remoteNodeName}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a Link object.
     * Update a Link object. Any attribute missing from the request will be left unchanged.  A Link connects nodes (either within a Cluster or between two different Clusters) and allows them to exchange topology information, subscriptions and data.   Attribute|Identifying|Const|Read-Only|Write-Only|Requires-Disable|Auto-Disable|Deprecated|Opaque :---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: authenticationBasicPassword||||x||x||x authenticationScheme||||||x|| dmrClusterName|x||x||||| egressFlowWindowSize||||||x|| initiator||||||x|| remoteNodeName|x|x|||||| span||||||x|| transportCompressedEnabled||||||x|| transportTlsEnabled||||||x||    The following attributes in the request may only be provided in certain combinations with other attributes:   Class|Attribute|Requires|Conflicts :---|:---|:---|:--- EventThreshold|clearPercent|setPercent|clearValue, setValue EventThreshold|clearValue|setValue|clearPercent, setPercent EventThreshold|setPercent|clearPercent|clearValue, setValue EventThreshold|setValue|clearValue|clearPercent, setPercent    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Link object&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} dmrClusterName The name of the Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the node at the remote end of the Link.
     * @param {Object} opts Optional parameters
     * @param {String} opts.opaquePassword Accept opaque attributes in the request or return opaque attributes in the response, encrypted with the specified password. See the documentation for the &#x60;opaquePassword&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DmrClusterLinkResponseModel}
     */
    updateDmrClusterLink(body, dmrClusterName, remoteNodeName, opts) {
      return this.updateDmrClusterLinkWithHttpInfo(body, dmrClusterName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}