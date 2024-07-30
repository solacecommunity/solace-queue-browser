/*
 * SEMP (Solace Element Management Protocol)
 * SEMP (starting in `v2`, see note 1) is a RESTful API for configuring, monitoring, and administering a Solace PubSub+ broker.  SEMP uses URIs to address manageable **resources** of the Solace PubSub+ broker. Resources are individual **objects**, **collections** of objects, or (exclusively in the action API) **actions**. This document applies to the following API:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Action|/SEMP/v2/action|Performing actions|See note 2    The following APIs are also available:   API|Base Path|Purpose|Comments :---|:---|:---|:--- Configuration|/SEMP/v2/config|Reading and writing config state|See note 2 Monitoring|/SEMP/v2/monitor|Querying operational parameters|See note 2    Resources are always nouns, with individual objects being singular and collections being plural.  Objects within a collection are identified by an `obj-id`, which follows the collection name with the form `collection-name/obj-id`. An `obj-id` consists of one or more identifying attributes, separated by commas. Commas that appear in the identifying attribute itself must be percent encoded.   Actions within an object are identified by an `action-id`, which follows the object name with the form `obj-id/action-id`.  Some examples:  ``` /SEMP/v2/config/msgVpns                        ; MsgVpn collection /SEMP/v2/config/msgVpns/a                      ; MsgVpn object named \"a\" /SEMP/v2/config/msgVpns/a/bridges              ; Bridge collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/bridges/b,auto       ; Bridge object named \"b\" with virtual router \"auto\" in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues               ; Queue collection in MsgVpn \"a\" /SEMP/v2/config/msgVpns/a/queues/c             ; Queue object named \"c\" in MsgVpn \"a\" /SEMP/v2/action/msgVpns/a/queues/c/startReplay ; Action that starts a replay on Queue \"c\" in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients             ; Client collection in MsgVpn \"a\" /SEMP/v2/monitor/msgVpns/a/clients/d           ; Client object named \"d\" in MsgVpn \"a\" ```  ## Collection Resources  Collections are unordered lists of objects (unless described as otherwise), and are described by JSON arrays. Each item in the array represents an object in the same manner as the individual object would normally be represented. In the configuration API, the creation of a new object is done through its collection resource.  ## Object and Action Resources  Objects are composed of attributes, actions, collections, and other objects. They are described by JSON objects as name/value pairs. The collections and actions of an object are not contained directly in the object's JSON content; rather the content includes an attribute containing a URI which points to the collections and actions. These contained resources must be managed through this URI. At a minimum, every object has one or more identifying attributes, and its own `uri` attribute which contains the URI pointing to itself.  Actions are also composed of attributes, and are described by JSON objects as name/value pairs. Unlike objects, however, they are not members of a collection and cannot be retrieved, only performed. Actions only exist in the action API.  Attributes in an object or action may have any combination of the following properties:   Property|Meaning|Comments :---|:---|:--- Identifying|Attribute is involved in unique identification of the object, and appears in its URI| Const|Attribute value can only be chosen during object creation| Required|Attribute must be provided in the request| Read-Only|Attribute value cannot be changed|See note 3 Write-Only|Attribute can only be written, not read, unless the attribute is also opaque|See the documentation for the opaque property Requires-Disable|Attribute cannot be changed while the object (or the relevant part of the object) is administratively enabled| Auto-Disable|Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as one or more attributes will be temporarily disabled to apply the change| Deprecated|Attribute is deprecated, and will disappear in the next SEMP version| Opaque|Attribute can be set or retrieved in opaque form when the `opaquePassword` query parameter is present|See the `opaquePassword` query parameter documentation    In some requests, certain attributes may only be provided in certain combinations with other attributes:   Relationship|Meaning|Comments :---|:---|:--- Requires|Attribute may only be provided in a request if a particular attribute or combination of attributes is also provided in the request|The \"requires\" property will not be enforced for an attribute when all of the following conditions are met: (a) the attribute is not write-only; (b) the value provided for the attribute is the same as its current (or, on object creation, its default) value; and (c) the attribute requires a write-only attribute. In addition, the \"requires\" property may not be enforced even if only conditions (a) and (b) are met. Conflicts|Attribute may only be provided in a request if a particular attribute or combination of attributes is not also provided in the request|    In the monitoring API, any non-identifying attribute may not be returned in a GET.  ## HTTP Methods  The following HTTP methods manipulate resources in accordance with these general principles. Note that some methods are only used in certain APIs:   Method|Resource|Meaning|Request Body|Response Body|Notes :---|:---|:---|:---|:---|:--- POST|Collection|Create object|Initial attribute values|Object attributes and metadata|Absent attributes are set to default. If object already exists, a 400 error is returned PUT|Object|Update object|New attribute values|Object attributes and metadata|If does not exist, the object is first created. Absent attributes are set to default, with certain exceptions (see note 4) PUT|Action|Performs action|Action arguments|Action metadata| PATCH|Object|Update object|New attribute values|Object attributes and metadata|Absent attributes are left unchanged. If the object does not exist, a 404 error is returned DELETE|Object|Delete object|Empty|Object metadata|If the object does not exist, a 404 is returned GET|Object|Get object|Empty|Object attributes and metadata|If the object does not exist, a 404 is returned GET|Collection|Get collection|Empty|Object attributes and collection metadata|If the collection is empty, then an empty collection is returned with a 200 code    ## Common Query Parameters  The following are some common query parameters that are supported by many method/URI combinations. Individual URIs may document additional parameters. Note that multiple query parameters can be used together in a single URI, separated by the ampersand character. For example:  ``` ; Request for the MsgVpns collection using two hypothetical query parameters ; \"q1\" and \"q2\" with values \"val1\" and \"val2\" respectively /SEMP/v2/action/msgVpns?q1=val1&q2=val2 ```  ### select  Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. Use this query parameter to limit the size of the returned data for each returned object, return only those fields that are desired, or exclude fields that are not desired.  The value of `select` is a comma-separated list of attribute names. If the list contains attribute names that are not prefaced by `-`, only those attributes are included in the response. If the list contains attribute names that are prefaced by `-`, those attributes are excluded from the response. If the list contains both types, then the difference of the first set of attributes and the second set of attributes is returned. If the list is empty (i.e. `select=`), it is treated the same as if no `select` was provided: all attribute are returned.  All attributes that are prefaced by `-` must follow all attributes that are not prefaced by `-`. In addition, each attribute name in the list must match at least one attribute in the object.  Names may include the `*` wildcard (zero or more characters). Nested attribute names are supported using periods (e.g. `parentName.childName`).  Some examples:  ``` ; List of all MsgVpn names /SEMP/v2/action/msgVpns?select=msgVpnName ; List of all MsgVpn and their attributes except for their names /SEMP/v2/action/msgVpns?select=-msgVpnName ; Authentication attributes of MsgVpn \"finance\" /SEMP/v2/action/msgVpns/finance?select=authentication%2A ; All attributes of MsgVpn \"finance\" except for authentication attributes /SEMP/v2/action/msgVpns/finance?select=-authentication%2A ; Access related attributes of Queue \"orderQ\" of MsgVpn \"finance\" /SEMP/v2/action/msgVpns/finance/queues/orderQ?select=owner,permission ```  ### where  Include in the response only objects where certain conditions are true. Use this query parameter to limit which objects are returned to those whose attribute values meet the given conditions.  The value of `where` is a comma-separated list of expressions. All expressions must be true for the object to be included in the response. Each expression takes the form:  ``` expression  = attribute-name OP value OP          = '==' | '!=' | '<' | '>' | '<=' | '>=' ```  Write-only attributes cannot be used in a `where` expression.  `value` may be a number, string, `true`, or `false`, as appropriate for the type of `attribute-name`.  A `*` in a string `value` is interpreted as a wildcard (zero or more characters), but can be escaped using `\\`. The `\\` character can itself be escaped using `\\`. The `*` wildcard can only be used with the `==` and `!=` operators. If `*` is used as a literal with other operators, it must be escaped.  The `<`, `>`, `<=`, and `>=` operators perform a simple byte-for-byte comparison when used with a string `value`.  Some examples:  ``` ; Only enabled MsgVpns /SEMP/v2/action/msgVpns?where=enabled%3D%3Dtrue ; Only MsgVpns using basic non-LDAP authentication /SEMP/v2/action/msgVpns?where=authenticationBasicEnabled%3D%3Dtrue,authenticationBasicType%21%3Dldap ; Only MsgVpns that allow more than 100 client connections /SEMP/v2/action/msgVpns?where=maxConnectionCount%3E100 ; Only MsgVpns with msgVpnName starting with \"B\": /SEMP/v2/action/msgVpns?where=msgVpnName%3D%3DB%2A ```  ### count  Limit the count of objects in the response. This can be useful to limit the size of the response for large collections. The minimum value for `count` is `1` and the default is `10`. There is also a per-collection maximum value to limit request handling time.  `count` does not guarantee that a minimum number of objects will be returned. A page may contain fewer than `count` objects or even be empty. Additional objects may nonetheless be available for retrieval on subsequent pages. See the `cursor` query parameter documentation for more information on paging.  For example: ``` ; Up to 25 MsgVpns /SEMP/v2/action/msgVpns?count=25 ```  ### cursor  The cursor, or position, for the next page of objects. Cursors are opaque data that should not be created or interpreted by SEMP clients, and should only be used as described below.  When a request is made for a collection and there may be additional objects available for retrieval that are not included in the initial response, the response will include a `cursorQuery` field containing a cursor. The value of this field can be specified in the `cursor` query parameter of a subsequent request to retrieve the next page of objects.  Applications must continue to use the `cursorQuery` if one is provided in order to retrieve the full set of objects associated with the request, even if a page contains fewer than the requested number of objects (see the `count` query parameter documentation) or is empty.  ### opaquePassword  Attributes with the opaque property are also write-only and so cannot normally be retrieved in a GET. However, when a password is provided in the `opaquePassword` query parameter, attributes with the opaque property are retrieved in a GET in opaque form, encrypted with this password. The query parameter can also be used on a POST, PATCH, or PUT to set opaque attributes using opaque attribute values retrieved in a GET, so long as:  1. the same password that was used to retrieve the opaque attribute values is provided; and  2. the broker to which the request is being sent has the same major and minor SEMP version as the broker that produced the opaque attribute values.  The password provided in the query parameter must be a minimum of 8 characters and a maximum of 128 characters.  The query parameter can only be used in the configuration API, and only over HTTPS.  ## Authentication  When a client makes its first SEMPv2 request, it must supply a username and password using HTTP Basic authentication, or an OAuth token or tokens using HTTP Bearer authentication.  When HTTP Basic authentication is used, the broker returns a cookie containing a session key. The client can omit the username and password from subsequent requests, because the broker can use the session cookie for authentication instead. When the session expires or is deleted, the client must provide the username and password again, and the broker creates a new session.  There are a limited number of session slots available on the broker. The broker returns 529 No SEMP Session Available if it is not able to allocate a session.  If certain attributes—such as a user's password—are changed, the broker automatically deletes the affected sessions. These attributes are documented below. However, changes in external user configuration data stored on a RADIUS or LDAP server do not trigger the broker to delete the associated session(s), therefore you must do this manually, if required.  A client can retrieve its current session information using the /about/user endpoint and delete its own session using the /about/user/logout endpoint. A client with appropriate permissions can also manage all sessions using the /sessions endpoint.  Sessions are not created when authenticating with an OAuth token or tokens using HTTP Bearer authentication. If a session cookie is provided, it is ignored.  ## Help  Visit [our website](https://solace.com) to learn more about Solace.  You can also download the SEMP API specifications by clicking [here](https://solace.com/downloads/).  If you need additional support, please contact us at [support@solace.com](mailto:support@solace.com).  ## Notes  Note|Description :---:|:--- 1|This specification defines SEMP starting in \"v2\", and not the original SEMP \"v1\" interface. Request and response formats between \"v1\" and \"v2\" are entirely incompatible, although both protocols share a common port configuration on the Solace PubSub+ broker. They are differentiated by the initial portion of the URI path, one of either \"/SEMP/\" or \"/SEMP/v2/\" 2|This API is partially implemented. Only a subset of all objects are available. 3|Read-only attributes may appear in POST and PUT/PATCH requests but are ignored, except when the read-only attribute is identifying. 4|On a PUT, if the SEMP user is not authorized to modify the attribute, its value is left unchanged rather than set to default. In addition, the values of write-only attributes are not set to their defaults on a PUT, except in the following two cases: there is a mutual requires relationship with another non-write-only attribute, both attributes are absent from the request, and the non-write-only attribute is not currently set to its default value; or the attribute is also opaque and the `opaquePassword` query parameter is provided in the request.  
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
import {MsgVpnAuthenticationOauthProfileClearStatsModel} from '../model/MsgVpnAuthenticationOauthProfileClearStatsModel';
import {MsgVpnAuthenticationOauthProfileResponseModel} from '../model/MsgVpnAuthenticationOauthProfileResponseModel';
import {MsgVpnAuthenticationOauthProfilesResponseModel} from '../model/MsgVpnAuthenticationOauthProfilesResponseModel';
import {MsgVpnAuthenticationOauthProviderClearStatsModel} from '../model/MsgVpnAuthenticationOauthProviderClearStatsModel';
import {MsgVpnAuthenticationOauthProviderResponseModel} from '../model/MsgVpnAuthenticationOauthProviderResponseModel';
import {MsgVpnAuthenticationOauthProvidersResponseModel} from '../model/MsgVpnAuthenticationOauthProvidersResponseModel';
import {MsgVpnBridgeClearEventModel} from '../model/MsgVpnBridgeClearEventModel';
import {MsgVpnBridgeClearStatsModel} from '../model/MsgVpnBridgeClearStatsModel';
import {MsgVpnBridgeDisconnectModel} from '../model/MsgVpnBridgeDisconnectModel';
import {MsgVpnBridgeResponseModel} from '../model/MsgVpnBridgeResponseModel';
import {MsgVpnBridgesResponseModel} from '../model/MsgVpnBridgesResponseModel';
import {MsgVpnClearMsgSpoolStatsModel} from '../model/MsgVpnClearMsgSpoolStatsModel';
import {MsgVpnClearReplicationStatsModel} from '../model/MsgVpnClearReplicationStatsModel';
import {MsgVpnClearServiceStatsModel} from '../model/MsgVpnClearServiceStatsModel';
import {MsgVpnClearStatsModel} from '../model/MsgVpnClearStatsModel';
import {MsgVpnClientClearEventModel} from '../model/MsgVpnClientClearEventModel';
import {MsgVpnClientClearStatsModel} from '../model/MsgVpnClientClearStatsModel';
import {MsgVpnClientDisconnectModel} from '../model/MsgVpnClientDisconnectModel';
import {MsgVpnClientResponseModel} from '../model/MsgVpnClientResponseModel';
import {MsgVpnClientTransactedSessionDeleteModel} from '../model/MsgVpnClientTransactedSessionDeleteModel';
import {MsgVpnClientTransactedSessionResponseModel} from '../model/MsgVpnClientTransactedSessionResponseModel';
import {MsgVpnClientTransactedSessionsResponseModel} from '../model/MsgVpnClientTransactedSessionsResponseModel';
import {MsgVpnClientsResponseModel} from '../model/MsgVpnClientsResponseModel';
import {MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel} from '../model/MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel} from '../model/MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel} from '../model/MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceClearEventModel} from '../model/MsgVpnDistributedCacheClusterInstanceClearEventModel';
import {MsgVpnDistributedCacheClusterInstanceClearStatsModel} from '../model/MsgVpnDistributedCacheClusterInstanceClearStatsModel';
import {MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel} from '../model/MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceResponseModel} from '../model/MsgVpnDistributedCacheClusterInstanceResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel} from '../model/MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel';
import {MsgVpnDistributedCacheClusterInstanceStartModel} from '../model/MsgVpnDistributedCacheClusterInstanceStartModel';
import {MsgVpnDistributedCacheClusterInstancesResponseModel} from '../model/MsgVpnDistributedCacheClusterInstancesResponseModel';
import {MsgVpnDistributedCacheClusterResponseModel} from '../model/MsgVpnDistributedCacheClusterResponseModel';
import {MsgVpnDistributedCacheClustersResponseModel} from '../model/MsgVpnDistributedCacheClustersResponseModel';
import {MsgVpnDistributedCacheResponseModel} from '../model/MsgVpnDistributedCacheResponseModel';
import {MsgVpnDistributedCachesResponseModel} from '../model/MsgVpnDistributedCachesResponseModel';
import {MsgVpnKafkaReceiverClearStatsModel} from '../model/MsgVpnKafkaReceiverClearStatsModel';
import {MsgVpnKafkaReceiverResponseModel} from '../model/MsgVpnKafkaReceiverResponseModel';
import {MsgVpnKafkaReceiversResponseModel} from '../model/MsgVpnKafkaReceiversResponseModel';
import {MsgVpnKafkaSenderClearStatsModel} from '../model/MsgVpnKafkaSenderClearStatsModel';
import {MsgVpnKafkaSenderResponseModel} from '../model/MsgVpnKafkaSenderResponseModel';
import {MsgVpnKafkaSendersResponseModel} from '../model/MsgVpnKafkaSendersResponseModel';
import {MsgVpnMqttSessionClearStatsModel} from '../model/MsgVpnMqttSessionClearStatsModel';
import {MsgVpnMqttSessionResponseModel} from '../model/MsgVpnMqttSessionResponseModel';
import {MsgVpnMqttSessionsResponseModel} from '../model/MsgVpnMqttSessionsResponseModel';
import {MsgVpnQueueCancelReplayModel} from '../model/MsgVpnQueueCancelReplayModel';
import {MsgVpnQueueClearStatsModel} from '../model/MsgVpnQueueClearStatsModel';
import {MsgVpnQueueCopyMsgFromQueueModel} from '../model/MsgVpnQueueCopyMsgFromQueueModel';
import {MsgVpnQueueCopyMsgFromReplayLogModel} from '../model/MsgVpnQueueCopyMsgFromReplayLogModel';
import {MsgVpnQueueCopyMsgFromTopicEndpointModel} from '../model/MsgVpnQueueCopyMsgFromTopicEndpointModel';
import {MsgVpnQueueDeleteMsgsModel} from '../model/MsgVpnQueueDeleteMsgsModel';
import {MsgVpnQueueMsgDeleteModel} from '../model/MsgVpnQueueMsgDeleteModel';
import {MsgVpnQueueMsgResponseModel} from '../model/MsgVpnQueueMsgResponseModel';
import {MsgVpnQueueMsgsResponseModel} from '../model/MsgVpnQueueMsgsResponseModel';
import {MsgVpnQueueResponseModel} from '../model/MsgVpnQueueResponseModel';
import {MsgVpnQueueStartReplayModel} from '../model/MsgVpnQueueStartReplayModel';
import {MsgVpnQueuesResponseModel} from '../model/MsgVpnQueuesResponseModel';
import {MsgVpnReplayLogResponseModel} from '../model/MsgVpnReplayLogResponseModel';
import {MsgVpnReplayLogTrimLoggedMsgsModel} from '../model/MsgVpnReplayLogTrimLoggedMsgsModel';
import {MsgVpnReplayLogsResponseModel} from '../model/MsgVpnReplayLogsResponseModel';
import {MsgVpnResponseModel} from '../model/MsgVpnResponseModel';
import {MsgVpnRestDeliveryPointResponseModel} from '../model/MsgVpnRestDeliveryPointResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerClearStatsModel} from '../model/MsgVpnRestDeliveryPointRestConsumerClearStatsModel';
import {MsgVpnRestDeliveryPointRestConsumerResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerResponseModel';
import {MsgVpnRestDeliveryPointRestConsumersResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumersResponseModel';
import {MsgVpnRestDeliveryPointsResponseModel} from '../model/MsgVpnRestDeliveryPointsResponseModel';
import {MsgVpnTopicEndpointCancelReplayModel} from '../model/MsgVpnTopicEndpointCancelReplayModel';
import {MsgVpnTopicEndpointClearStatsModel} from '../model/MsgVpnTopicEndpointClearStatsModel';
import {MsgVpnTopicEndpointCopyMsgFromQueueModel} from '../model/MsgVpnTopicEndpointCopyMsgFromQueueModel';
import {MsgVpnTopicEndpointCopyMsgFromReplayLogModel} from '../model/MsgVpnTopicEndpointCopyMsgFromReplayLogModel';
import {MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel} from '../model/MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel';
import {MsgVpnTopicEndpointDeleteMsgsModel} from '../model/MsgVpnTopicEndpointDeleteMsgsModel';
import {MsgVpnTopicEndpointMsgDeleteModel} from '../model/MsgVpnTopicEndpointMsgDeleteModel';
import {MsgVpnTopicEndpointMsgResponseModel} from '../model/MsgVpnTopicEndpointMsgResponseModel';
import {MsgVpnTopicEndpointMsgsResponseModel} from '../model/MsgVpnTopicEndpointMsgsResponseModel';
import {MsgVpnTopicEndpointResponseModel} from '../model/MsgVpnTopicEndpointResponseModel';
import {MsgVpnTopicEndpointStartReplayModel} from '../model/MsgVpnTopicEndpointStartReplayModel';
import {MsgVpnTopicEndpointsResponseModel} from '../model/MsgVpnTopicEndpointsResponseModel';
import {MsgVpnTransactionCommitModel} from '../model/MsgVpnTransactionCommitModel';
import {MsgVpnTransactionDeleteModel} from '../model/MsgVpnTransactionDeleteModel';
import {MsgVpnTransactionResponseModel} from '../model/MsgVpnTransactionResponseModel';
import {MsgVpnTransactionRollbackModel} from '../model/MsgVpnTransactionRollbackModel';
import {MsgVpnTransactionsResponseModel} from '../model/MsgVpnTransactionsResponseModel';
import {MsgVpnsResponseModel} from '../model/MsgVpnsResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* MsgVpn service.
* @module api/MsgVpnApi
* @version 2.36
*/
export class MsgVpnApi {

    /**
    * Constructs a new MsgVpnApi. 
    * @alias module:api/MsgVpnApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Clear the statistics for the OAuth Profile.
     * Clear the statistics for the OAuth Profile.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {module:model/MsgVpnAuthenticationOauthProfileClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnAuthenticationOauthProfileClearStatsWithHttpInfo(body, msgVpnName, oauthProfileName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnAuthenticationOauthProfileClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnAuthenticationOauthProfileClearStats");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling doMsgVpnAuthenticationOauthProfileClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the OAuth Profile.
     * Clear the statistics for the OAuth Profile.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnAuthenticationOauthProfileClearStats(body, msgVpnName, oauthProfileName) {
      return this.doMsgVpnAuthenticationOauthProfileClearStatsWithHttpInfo(body, msgVpnName, oauthProfileName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the OAuth Provider.
     * Clear the statistics for the OAuth Provider.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
     * @param {module:model/MsgVpnAuthenticationOauthProviderClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProviderName The name of the OAuth Provider.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnAuthenticationOauthProviderClearStatsWithHttpInfo(body, msgVpnName, oauthProviderName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnAuthenticationOauthProviderClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnAuthenticationOauthProviderClearStats");
      }
      // verify the required parameter 'oauthProviderName' is set
      if (oauthProviderName === undefined || oauthProviderName === null) {
        throw new Error("Missing the required parameter 'oauthProviderName' when calling doMsgVpnAuthenticationOauthProviderClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProviderName': oauthProviderName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProviders/{oauthProviderName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the OAuth Provider.
     * Clear the statistics for the OAuth Provider.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been deprecated since 2.25. authenticationOauthProviders replaced by authenticationOauthProfiles.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProviderName The name of the OAuth Provider.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnAuthenticationOauthProviderClearStats(body, msgVpnName, oauthProviderName) {
      return this.doMsgVpnAuthenticationOauthProviderClearStatsWithHttpInfo(body, msgVpnName, oauthProviderName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear an event for the Bridge so it can be generated anew.
     * Clear an event for the Bridge so it can be generated anew.   Attribute|Required|Deprecated :---|:---:|:---: eventName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnBridgeClearEventModel} body The Clear Event action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnBridgeClearEventWithHttpInfo(body, msgVpnName, bridgeName, bridgeVirtualRouter) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnBridgeClearEvent");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnBridgeClearEvent");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling doMsgVpnBridgeClearEvent");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling doMsgVpnBridgeClearEvent");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/clearEvent', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear an event for the Bridge so it can be generated anew.
     * Clear an event for the Bridge so it can be generated anew.   Attribute|Required|Deprecated :---|:---:|:---: eventName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Event action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnBridgeClearEvent(body, msgVpnName, bridgeName, bridgeVirtualRouter) {
      return this.doMsgVpnBridgeClearEventWithHttpInfo(body, msgVpnName, bridgeName, bridgeVirtualRouter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Bridge.
     * Clear the statistics for the Bridge.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnBridgeClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnBridgeClearStatsWithHttpInfo(body, msgVpnName, bridgeName, bridgeVirtualRouter) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnBridgeClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnBridgeClearStats");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling doMsgVpnBridgeClearStats");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling doMsgVpnBridgeClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Bridge.
     * Clear the statistics for the Bridge.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnBridgeClearStats(body, msgVpnName, bridgeName, bridgeVirtualRouter) {
      return this.doMsgVpnBridgeClearStatsWithHttpInfo(body, msgVpnName, bridgeName, bridgeVirtualRouter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Disconnect the Bridge.
     * Disconnect the Bridge.    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnBridgeDisconnectModel} body The Disconnect action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnBridgeDisconnectWithHttpInfo(body, msgVpnName, bridgeName, bridgeVirtualRouter) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnBridgeDisconnect");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnBridgeDisconnect");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling doMsgVpnBridgeDisconnect");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling doMsgVpnBridgeDisconnect");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/disconnect', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Disconnect the Bridge.
     * Disconnect the Bridge.    A SEMP client authorized with a minimum access scope/level of \&quot;global/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Disconnect action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnBridgeDisconnect(body, msgVpnName, bridgeName, bridgeVirtualRouter) {
      return this.doMsgVpnBridgeDisconnectWithHttpInfo(body, msgVpnName, bridgeName, bridgeVirtualRouter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the message spool statistics for the Message VPN.
     * Clear the message spool statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClearMsgSpoolStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClearMsgSpoolStatsWithHttpInfo(body, msgVpnName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClearMsgSpoolStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClearMsgSpoolStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clearMsgSpoolStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the message spool statistics for the Message VPN.
     * Clear the message spool statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClearMsgSpoolStats(body, msgVpnName) {
      return this.doMsgVpnClearMsgSpoolStatsWithHttpInfo(body, msgVpnName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the replication statistics for the Message VPN.
     * Clear the replication statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClearReplicationStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClearReplicationStatsWithHttpInfo(body, msgVpnName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClearReplicationStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClearReplicationStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clearReplicationStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the replication statistics for the Message VPN.
     * Clear the replication statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClearReplicationStats(body, msgVpnName) {
      return this.doMsgVpnClearReplicationStatsWithHttpInfo(body, msgVpnName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the service statistics for the Message VPN.
     * Clear the service statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClearServiceStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClearServiceStatsWithHttpInfo(body, msgVpnName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClearServiceStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClearServiceStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clearServiceStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the service statistics for the Message VPN.
     * Clear the service statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClearServiceStats(body, msgVpnName) {
      return this.doMsgVpnClearServiceStatsWithHttpInfo(body, msgVpnName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the client statistics for the Message VPN.
     * Clear the client statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClearStatsWithHttpInfo(body, msgVpnName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the client statistics for the Message VPN.
     * Clear the client statistics for the Message VPN.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClearStats(body, msgVpnName) {
      return this.doMsgVpnClearStatsWithHttpInfo(body, msgVpnName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear an event for the Client so it can be generated anew.
     * Clear an event for the Client so it can be generated anew.   Attribute|Required|Deprecated :---|:---:|:---: eventName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {module:model/MsgVpnClientClearEventModel} body The Clear Event action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClientClearEventWithHttpInfo(body, msgVpnName, clientName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClientClearEvent");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClientClearEvent");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling doMsgVpnClientClearEvent");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}/clearEvent', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear an event for the Client so it can be generated anew.
     * Clear an event for the Client so it can be generated anew.   Attribute|Required|Deprecated :---|:---:|:---: eventName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Event action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClientClearEvent(body, msgVpnName, clientName) {
      return this.doMsgVpnClientClearEventWithHttpInfo(body, msgVpnName, clientName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Client.
     * Clear the statistics for the Client.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClientClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClientClearStatsWithHttpInfo(body, msgVpnName, clientName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClientClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClientClearStats");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling doMsgVpnClientClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Client.
     * Clear the statistics for the Client.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClientClearStats(body, msgVpnName, clientName) {
      return this.doMsgVpnClientClearStatsWithHttpInfo(body, msgVpnName, clientName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Disconnect the Client.
     * Disconnect the Client.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClientDisconnectModel} body The Disconnect action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClientDisconnectWithHttpInfo(body, msgVpnName, clientName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClientDisconnect");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClientDisconnect");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling doMsgVpnClientDisconnect");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}/disconnect', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Disconnect the Client.
     * Disconnect the Client.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Disconnect action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClientDisconnect(body, msgVpnName, clientName) {
      return this.doMsgVpnClientDisconnectWithHttpInfo(body, msgVpnName, clientName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the Transacted Session.
     * Delete the Transacted Session.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnClientTransactedSessionDeleteModel} body The Delete action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @param {String} sessionName The name of the Transacted Session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnClientTransactedSessionDeleteWithHttpInfo(body, msgVpnName, clientName, sessionName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnClientTransactedSessionDelete");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnClientTransactedSessionDelete");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling doMsgVpnClientTransactedSessionDelete");
      }
      // verify the required parameter 'sessionName' is set
      if (sessionName === undefined || sessionName === null) {
        throw new Error("Missing the required parameter 'sessionName' when calling doMsgVpnClientTransactedSessionDelete");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName,'sessionName': sessionName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}/transactedSessions/{sessionName}/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete the Transacted Session.
     * Delete the Transacted Session.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @param {<&vendorExtensions.x-jsdoc-type>} sessionName The name of the Transacted Session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnClientTransactedSessionDelete(body, msgVpnName, clientName, sessionName) {
      return this.doMsgVpnClientTransactedSessionDeleteWithHttpInfo(body, msgVpnName, clientName, sessionName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Backup cached messages of the Cache Instance to disk.
     * Backup cached messages of the Cache Instance to disk.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceBackupCachedMsgsModel} body The Backup Cached Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgs");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgs");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgs");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/backupCachedMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Backup cached messages of the Cache Instance to disk.
     * Backup cached messages of the Cache Instance to disk.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Backup Cached Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgs(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceBackupCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel the backup of cached messages from the Cache Instance.
     * Cancel the backup of cached messages from the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsModel} body The Cancel Backup Cached Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgs");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgs");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgs");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/cancelBackupCachedMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel the backup of cached messages from the Cache Instance.
     * Cancel the backup of cached messages from the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cancel Backup Cached Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgs(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceCancelBackupCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel the restore of cached messages to the Cache Instance.
     * Cancel the restore of cached messages to the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsModel} body The Cancel Restore Cached Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgs");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgs");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgs");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/cancelRestoreCachedMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel the restore of cached messages to the Cache Instance.
     * Cancel the restore of cached messages to the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cancel Restore Cached Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgs(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceCancelRestoreCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear an event for the Cache Instance so it can be generated anew.
     * Clear an event for the Cache Instance so it can be generated anew.   Attribute|Required|Deprecated :---|:---:|:---: eventName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceClearEventModel} body The Clear Event action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceClearEventWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceClearEvent");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceClearEvent");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceClearEvent");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceClearEvent");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceClearEvent");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/clearEvent', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear an event for the Cache Instance so it can be generated anew.
     * Clear an event for the Cache Instance so it can be generated anew.   Attribute|Required|Deprecated :---|:---:|:---: eventName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Event action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceClearEvent(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceClearEventWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Cache Instance.
     * Clear the statistics for the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceClearStatsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceClearStats");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceClearStats");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceClearStats");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Cache Instance.
     * Clear the statistics for the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceClearStats(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceClearStatsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete messages covered by the given topic in the Cache Instance.
     * Delete messages covered by the given topic in the Cache Instance.   Attribute|Required|Deprecated :---|:---:|:---: topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceDeleteMsgsModel} body The Delete Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceDeleteMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceDeleteMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceDeleteMsgs");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceDeleteMsgs");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceDeleteMsgs");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceDeleteMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/deleteMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete messages covered by the given topic in the Cache Instance.
     * Delete messages covered by the given topic in the Cache Instance.   Attribute|Required|Deprecated :---|:---:|:---: topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceDeleteMsgs(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceDeleteMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Restore cached messages for the Cache Instance from disk.
     * Restore cached messages for the Cache Instance from disk.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsModel} body The Restore Cached Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgs");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgs");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgs");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/restoreCachedMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Restore cached messages for the Cache Instance from disk.
     * Restore cached messages for the Cache Instance from disk.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Restore Cached Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgs(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceRestoreCachedMsgsWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Start the Cache Instance.
     * Start the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnDistributedCacheClusterInstanceStartModel} body The Start Cache Instance action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnDistributedCacheClusterInstanceStartWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnDistributedCacheClusterInstanceStart");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnDistributedCacheClusterInstanceStart");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling doMsgVpnDistributedCacheClusterInstanceStart");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling doMsgVpnDistributedCacheClusterInstanceStart");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling doMsgVpnDistributedCacheClusterInstanceStart");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/start', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Start the Cache Instance.
     * Start the Cache Instance.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Start Cache Instance action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnDistributedCacheClusterInstanceStart(body, msgVpnName, cacheName, clusterName, instanceName) {
      return this.doMsgVpnDistributedCacheClusterInstanceStartWithHttpInfo(body, msgVpnName, cacheName, clusterName, instanceName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Kafka Receiver.
     * Clear the statistics for the Kafka Receiver.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {module:model/MsgVpnKafkaReceiverClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaReceiverName The name of the Kafka Receiver.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnKafkaReceiverClearStatsWithHttpInfo(body, msgVpnName, kafkaReceiverName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnKafkaReceiverClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnKafkaReceiverClearStats");
      }
      // verify the required parameter 'kafkaReceiverName' is set
      if (kafkaReceiverName === undefined || kafkaReceiverName === null) {
        throw new Error("Missing the required parameter 'kafkaReceiverName' when calling doMsgVpnKafkaReceiverClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaReceiverName': kafkaReceiverName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers/{kafkaReceiverName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Kafka Receiver.
     * Clear the statistics for the Kafka Receiver.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaReceiverName The name of the Kafka Receiver.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnKafkaReceiverClearStats(body, msgVpnName, kafkaReceiverName) {
      return this.doMsgVpnKafkaReceiverClearStatsWithHttpInfo(body, msgVpnName, kafkaReceiverName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Kafka Sender.
     * Clear the statistics for the Kafka Sender.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {module:model/MsgVpnKafkaSenderClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaSenderName The name of the Kafka Sender.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnKafkaSenderClearStatsWithHttpInfo(body, msgVpnName, kafkaSenderName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnKafkaSenderClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnKafkaSenderClearStats");
      }
      // verify the required parameter 'kafkaSenderName' is set
      if (kafkaSenderName === undefined || kafkaSenderName === null) {
        throw new Error("Missing the required parameter 'kafkaSenderName' when calling doMsgVpnKafkaSenderClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaSenderName': kafkaSenderName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders/{kafkaSenderName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Kafka Sender.
     * Clear the statistics for the Kafka Sender.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaSenderName The name of the Kafka Sender.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnKafkaSenderClearStats(body, msgVpnName, kafkaSenderName) {
      return this.doMsgVpnKafkaSenderClearStatsWithHttpInfo(body, msgVpnName, kafkaSenderName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the MQTT Session.
     * Clear the statistics for the MQTT Session.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnMqttSessionClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnMqttSessionClearStatsWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnMqttSessionClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnMqttSessionClearStats");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling doMsgVpnMqttSessionClearStats");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling doMsgVpnMqttSessionClearStats");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the MQTT Session.
     * Clear the statistics for the MQTT Session.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnMqttSessionClearStats(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter) {
      return this.doMsgVpnMqttSessionClearStatsWithHttpInfo(body, msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel the replay of messages to the Queue.
     * Cancel the replay of messages to the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnQueueCancelReplayModel} body The Cancel Replay action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueCancelReplayWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueCancelReplay");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueCancelReplay");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueCancelReplay");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/cancelReplay', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel the replay of messages to the Queue.
     * Cancel the replay of messages to the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cancel Replay action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueCancelReplay(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueCancelReplayWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Queue.
     * Clear the statistics for the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnQueueClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueClearStatsWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueClearStats");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Queue.
     * Clear the statistics for the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueClearStats(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueClearStatsWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a message from another Queue to this Queue.
     * Copy a message from another Queue to this Queue.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceQueueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {module:model/MsgVpnQueueCopyMsgFromQueueModel} body The Copy Message From Queue action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueCopyMsgFromQueueWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueCopyMsgFromQueue");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueCopyMsgFromQueue");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueCopyMsgFromQueue");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/copyMsgFromQueue', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Copy a message from another Queue to this Queue.
     * Copy a message from another Queue to this Queue.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceQueueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Copy Message From Queue action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueCopyMsgFromQueue(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueCopyMsgFromQueueWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a message from a Replay Log to this Queue.
     * Copy a message from a Replay Log to this Queue.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceReplayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {module:model/MsgVpnQueueCopyMsgFromReplayLogModel} body The Copy Message From Replay Log action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueCopyMsgFromReplayLogWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueCopyMsgFromReplayLog");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueCopyMsgFromReplayLog");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueCopyMsgFromReplayLog");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/copyMsgFromReplayLog', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Copy a message from a Replay Log to this Queue.
     * Copy a message from a Replay Log to this Queue.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceReplayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Copy Message From Replay Log action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueCopyMsgFromReplayLog(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueCopyMsgFromReplayLogWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a message from a Topic Endpoint to this Queue.
     * Copy a message from a Topic Endpoint to this Queue.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceTopicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {module:model/MsgVpnQueueCopyMsgFromTopicEndpointModel} body The Copy Message From Topic Endpoint action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueCopyMsgFromTopicEndpointWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueCopyMsgFromTopicEndpoint");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueCopyMsgFromTopicEndpoint");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueCopyMsgFromTopicEndpoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/copyMsgFromTopicEndpoint', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Copy a message from a Topic Endpoint to this Queue.
     * Copy a message from a Topic Endpoint to this Queue.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceTopicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Copy Message From Topic Endpoint action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueCopyMsgFromTopicEndpoint(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueCopyMsgFromTopicEndpointWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all spooled messages from the Queue.
     * Delete all spooled messages from the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/MsgVpnQueueDeleteMsgsModel} body The Delete All Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueDeleteMsgsWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueDeleteMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueDeleteMsgs");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueDeleteMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/deleteMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all spooled messages from the Queue.
     * Delete all spooled messages from the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete All Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueDeleteMsgs(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueDeleteMsgsWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the Message from the Queue.
     * Delete the Message from the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnQueueMsgDeleteModel} body The Delete action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @param {String} msgId The identifier (ID) of the Message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueMsgDeleteWithHttpInfo(body, msgVpnName, queueName, msgId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueMsgDelete");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueMsgDelete");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueMsgDelete");
      }
      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId' when calling doMsgVpnQueueMsgDelete");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName,'msgId': msgId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/msgs/{msgId}/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete the Message from the Queue.
     * Delete the Message from the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgId The identifier (ID) of the Message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueMsgDelete(body, msgVpnName, queueName, msgId) {
      return this.doMsgVpnQueueMsgDeleteWithHttpInfo(body, msgVpnName, queueName, msgId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Start the replay of messages to the Queue.
     * Start the replay of messages to the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnQueueStartReplayModel} body The Start Replay action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnQueueStartReplayWithHttpInfo(body, msgVpnName, queueName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnQueueStartReplay");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnQueueStartReplay");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling doMsgVpnQueueStartReplay");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/startReplay', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Start the replay of messages to the Queue.
     * Start the replay of messages to the Queue.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Start Replay action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnQueueStartReplay(body, msgVpnName, queueName) {
      return this.doMsgVpnQueueStartReplayWithHttpInfo(body, msgVpnName, queueName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Trim (delete) messages from the Replay Log.
     * Trim (delete) messages from the Replay Log.   Attribute|Required|Deprecated :---|:---:|:---: olderThanTime|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnReplayLogTrimLoggedMsgsModel} body The Trim Logged Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} replayLogName The name of the Replay Log.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnReplayLogTrimLoggedMsgsWithHttpInfo(body, msgVpnName, replayLogName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnReplayLogTrimLoggedMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnReplayLogTrimLoggedMsgs");
      }
      // verify the required parameter 'replayLogName' is set
      if (replayLogName === undefined || replayLogName === null) {
        throw new Error("Missing the required parameter 'replayLogName' when calling doMsgVpnReplayLogTrimLoggedMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'replayLogName': replayLogName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/replayLogs/{replayLogName}/trimLoggedMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Trim (delete) messages from the Replay Log.
     * Trim (delete) messages from the Replay Log.   Attribute|Required|Deprecated :---|:---:|:---: olderThanTime|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Trim Logged Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} replayLogName The name of the Replay Log.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnReplayLogTrimLoggedMsgs(body, msgVpnName, replayLogName) {
      return this.doMsgVpnReplayLogTrimLoggedMsgsWithHttpInfo(body, msgVpnName, replayLogName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the REST Consumer.
     * Clear the statistics for the REST Consumer.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnRestDeliveryPointRestConsumerClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnRestDeliveryPointRestConsumerClearStatsWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnRestDeliveryPointRestConsumerClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnRestDeliveryPointRestConsumerClearStats");
      }
      // verify the required parameter 'restDeliveryPointName' is set
      if (restDeliveryPointName === undefined || restDeliveryPointName === null) {
        throw new Error("Missing the required parameter 'restDeliveryPointName' when calling doMsgVpnRestDeliveryPointRestConsumerClearStats");
      }
      // verify the required parameter 'restConsumerName' is set
      if (restConsumerName === undefined || restConsumerName === null) {
        throw new Error("Missing the required parameter 'restConsumerName' when calling doMsgVpnRestDeliveryPointRestConsumerClearStats");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/restDeliveryPoints/{restDeliveryPointName}/restConsumers/{restConsumerName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the REST Consumer.
     * Clear the statistics for the REST Consumer.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnRestDeliveryPointRestConsumerClearStats(body, msgVpnName, restDeliveryPointName, restConsumerName) {
      return this.doMsgVpnRestDeliveryPointRestConsumerClearStatsWithHttpInfo(body, msgVpnName, restDeliveryPointName, restConsumerName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancel the replay of messages to the Topic Endpoint.
     * Cancel the replay of messages to the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnTopicEndpointCancelReplayModel} body The Cancel Replay action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointCancelReplayWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointCancelReplay");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointCancelReplay");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointCancelReplay");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/cancelReplay', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancel the replay of messages to the Topic Endpoint.
     * Cancel the replay of messages to the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Cancel Replay action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointCancelReplay(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointCancelReplayWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Clear the statistics for the Topic Endpoint.
     * Clear the statistics for the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnTopicEndpointClearStatsModel} body The Clear Stats action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointClearStatsWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointClearStats");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointClearStats");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointClearStats");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/clearStats', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Clear the statistics for the Topic Endpoint.
     * Clear the statistics for the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Clear Stats action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointClearStats(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointClearStatsWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a message from a Queue to this Topic Endpoint.
     * Copy a message from a Queue to this Topic Endpoint.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceQueueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {module:model/MsgVpnTopicEndpointCopyMsgFromQueueModel} body The Copy Message From Queue action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointCopyMsgFromQueueWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointCopyMsgFromQueue");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointCopyMsgFromQueue");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointCopyMsgFromQueue");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/copyMsgFromQueue', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Copy a message from a Queue to this Topic Endpoint.
     * Copy a message from a Queue to this Topic Endpoint.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceQueueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Copy Message From Queue action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointCopyMsgFromQueue(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointCopyMsgFromQueueWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a message from a Replay Log to this Topic Endpoint.
     * Copy a message from a Replay Log to this Topic Endpoint.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceReplayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {module:model/MsgVpnTopicEndpointCopyMsgFromReplayLogModel} body The Copy Message From Replay Log action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointCopyMsgFromReplayLogWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointCopyMsgFromReplayLog");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointCopyMsgFromReplayLog");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointCopyMsgFromReplayLog");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/copyMsgFromReplayLog', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Copy a message from a Replay Log to this Topic Endpoint.
     * Copy a message from a Replay Log to this Topic Endpoint.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceReplayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Copy Message From Replay Log action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointCopyMsgFromReplayLog(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointCopyMsgFromReplayLogWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Copy a message from another Topic Endpoint to this Topic Endpoint.
     * Copy a message from another Topic Endpoint to this Topic Endpoint.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceTopicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {module:model/MsgVpnTopicEndpointCopyMsgFromTopicEndpointModel} body The Copy Message From Topic Endpoint action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointCopyMsgFromTopicEndpointWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointCopyMsgFromTopicEndpoint");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointCopyMsgFromTopicEndpoint");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointCopyMsgFromTopicEndpoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/copyMsgFromTopicEndpoint', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Copy a message from another Topic Endpoint to this Topic Endpoint.
     * Copy a message from another Topic Endpoint to this Topic Endpoint.   Attribute|Required|Deprecated :---|:---:|:---: replicationGroupMsgId|x| sourceTopicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.29.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Copy Message From Topic Endpoint action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointCopyMsgFromTopicEndpoint(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointCopyMsgFromTopicEndpointWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete all spooled messages from the Topic Endpoint.
     * Delete all spooled messages from the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {module:model/MsgVpnTopicEndpointDeleteMsgsModel} body The Delete All Messages action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointDeleteMsgsWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointDeleteMsgs");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointDeleteMsgs");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointDeleteMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/deleteMsgs', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete all spooled messages from the Topic Endpoint.
     * Delete all spooled messages from the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.28.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete All Messages action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointDeleteMsgs(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointDeleteMsgsWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the Message from the Topic Endpoint.
     * Delete the Message from the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnTopicEndpointMsgDeleteModel} body The Delete action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {String} msgId The identifier (ID) of the Message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointMsgDeleteWithHttpInfo(body, msgVpnName, topicEndpointName, msgId) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointMsgDelete");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointMsgDelete");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointMsgDelete");
      }
      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId' when calling doMsgVpnTopicEndpointMsgDelete");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName,'msgId': msgId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/msgs/{msgId}/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete the Message from the Topic Endpoint.
     * Delete the Message from the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgId The identifier (ID) of the Message.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointMsgDelete(body, msgVpnName, topicEndpointName, msgId) {
      return this.doMsgVpnTopicEndpointMsgDeleteWithHttpInfo(body, msgVpnName, topicEndpointName, msgId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Start the replay of messages to the Topic Endpoint.
     * Start the replay of messages to the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {module:model/MsgVpnTopicEndpointStartReplayModel} body The Start Replay action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTopicEndpointStartReplayWithHttpInfo(body, msgVpnName, topicEndpointName) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTopicEndpointStartReplay");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTopicEndpointStartReplay");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling doMsgVpnTopicEndpointStartReplay");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/startReplay', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Start the replay of messages to the Topic Endpoint.
     * Start the replay of messages to the Topic Endpoint.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Start Replay action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTopicEndpointStartReplay(body, msgVpnName, topicEndpointName) {
      return this.doMsgVpnTopicEndpointStartReplayWithHttpInfo(body, msgVpnName, topicEndpointName)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Commit the Transaction.
     * Commit the Transaction.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {module:model/MsgVpnTransactionCommitModel} body The Commit action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} xid The identifier (ID) of the Transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTransactionCommitWithHttpInfo(body, msgVpnName, xid) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTransactionCommit");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTransactionCommit");
      }
      // verify the required parameter 'xid' is set
      if (xid === undefined || xid === null) {
        throw new Error("Missing the required parameter 'xid' when calling doMsgVpnTransactionCommit");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'xid': xid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/transactions/{xid}/commit', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Commit the Transaction.
     * Commit the Transaction.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Commit action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} xid The identifier (ID) of the Transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTransactionCommit(body, msgVpnName, xid) {
      return this.doMsgVpnTransactionCommitWithHttpInfo(body, msgVpnName, xid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete the Transaction.
     * Delete the Transaction.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {module:model/MsgVpnTransactionDeleteModel} body The Delete action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} xid The identifier (ID) of the Transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTransactionDeleteWithHttpInfo(body, msgVpnName, xid) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTransactionDelete");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTransactionDelete");
      }
      // verify the required parameter 'xid' is set
      if (xid === undefined || xid === null) {
        throw new Error("Missing the required parameter 'xid' when calling doMsgVpnTransactionDelete");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'xid': xid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/transactions/{xid}/delete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete the Transaction.
     * Delete the Transaction.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Delete action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} xid The identifier (ID) of the Transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTransactionDelete(body, msgVpnName, xid) {
      return this.doMsgVpnTransactionDeleteWithHttpInfo(body, msgVpnName, xid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Rollback the Transaction.
     * Rollback the Transaction.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {module:model/MsgVpnTransactionRollbackModel} body The Rollback action&#x27;s attributes.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} xid The identifier (ID) of the Transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SempMetaOnlyResponseModel} and HTTP response
     */
    doMsgVpnTransactionRollbackWithHttpInfo(body, msgVpnName, xid) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling doMsgVpnTransactionRollback");
      }
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling doMsgVpnTransactionRollback");
      }
      // verify the required parameter 'xid' is set
      if (xid === undefined || xid === null) {
        throw new Error("Missing the required parameter 'xid' when calling doMsgVpnTransactionRollback");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'xid': xid
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SempMetaOnlyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/transactions/{xid}/rollback', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Rollback the Transaction.
     * Rollback the Transaction.    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-write\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} body The Rollback action&#x27;s attributes.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} xid The identifier (ID) of the Transaction.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SempMetaOnlyResponseModel}
     */
    doMsgVpnTransactionRollback(body, msgVpnName, xid) {
      return this.doMsgVpnTransactionRollbackWithHttpInfo(body, msgVpnName, xid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Message VPN object.
     * Get a Message VPN object.  Message VPNs (Virtual Private Networks) allow for the segregation of topic space and clients. They also group clients connecting to a network of message brokers, such that messages published within a particular group are only visible to that group&#x27;s clients.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnResponseModel} and HTTP response
     */
    getMsgVpnWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpn");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Message VPN object.
     * Get a Message VPN object.  Message VPNs (Virtual Private Networks) allow for the segregation of topic space and clients. They also group clients connecting to a network of message brokers, such that messages published within a particular group are only visible to that group&#x27;s clients.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnResponseModel}
     */
    getMsgVpn(msgVpnName, opts) {
      return this.getMsgVpnWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfileResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfileWithHttpInfo(msgVpnName, oauthProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfile");
      }
      // verify the required parameter 'oauthProfileName' is set
      if (oauthProfileName === undefined || oauthProfileName === null) {
        throw new Error("Missing the required parameter 'oauthProfileName' when calling getMsgVpnAuthenticationOauthProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProfileName': oauthProfileName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnAuthenticationOauthProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles/{oauthProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OAuth Profile object.
     * Get an OAuth Profile object.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProfileName The name of the OAuth profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfileResponseModel}
     */
    getMsgVpnAuthenticationOauthProfile(msgVpnName, oauthProfileName, opts) {
      return this.getMsgVpnAuthenticationOauthProfileWithHttpInfo(msgVpnName, oauthProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProfilesResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProfilesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProfiles");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnAuthenticationOauthProfilesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OAuth Profile objects.
     * Get a list of OAuth Profile objects.  OAuth profiles specify how to securely authenticate to an OAuth provider.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthProfileName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.25.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProfilesResponseModel}
     */
    getMsgVpnAuthenticationOauthProfiles(msgVpnName, opts) {
      return this.getMsgVpnAuthenticationOauthProfilesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an OAuth Provider object.
     * Get an OAuth Provider object.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x oauthProviderName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} oauthProviderName The name of the OAuth Provider.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProviderResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProviderWithHttpInfo(msgVpnName, oauthProviderName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProvider");
      }
      // verify the required parameter 'oauthProviderName' is set
      if (oauthProviderName === undefined || oauthProviderName === null) {
        throw new Error("Missing the required parameter 'oauthProviderName' when calling getMsgVpnAuthenticationOauthProvider");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'oauthProviderName': oauthProviderName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnAuthenticationOauthProviderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProviders/{oauthProviderName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an OAuth Provider object.
     * Get an OAuth Provider object.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x oauthProviderName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthProviderName The name of the OAuth Provider.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProviderResponseModel}
     */
    getMsgVpnAuthenticationOauthProvider(msgVpnName, oauthProviderName, opts) {
      return this.getMsgVpnAuthenticationOauthProviderWithHttpInfo(msgVpnName, oauthProviderName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of OAuth Provider objects.
     * Get a list of OAuth Provider objects.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x oauthProviderName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnAuthenticationOauthProvidersResponseModel} and HTTP response
     */
    getMsgVpnAuthenticationOauthProvidersWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnAuthenticationOauthProviders");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnAuthenticationOauthProvidersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/authenticationOauthProviders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of OAuth Provider objects.
     * Get a list of OAuth Provider objects.  OAuth Providers contain information about the issuer of an OAuth token that is needed to validate the token and derive a client username from it.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x oauthProviderName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been deprecated since 2.25. Replaced by authenticationOauthProfiles.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnAuthenticationOauthProvidersResponseModel}
     */
    getMsgVpnAuthenticationOauthProviders(msgVpnName, opts) {
      return this.getMsgVpnAuthenticationOauthProvidersWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Bridge object.
     * Get a Bridge object.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeResponseModel} and HTTP response
     */
    getMsgVpnBridgeWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridge");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridge");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridge");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnBridgeResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Bridge object.
     * Get a Bridge object.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeResponseModel}
     */
    getMsgVpnBridge(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      return this.getMsgVpnBridgeWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Bridge objects.
     * Get a list of Bridge objects.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgesResponseModel} and HTTP response
     */
    getMsgVpnBridgesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridges");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnBridgesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Bridge objects.
     * Get a list of Bridge objects.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgesResponseModel}
     */
    getMsgVpnBridges(msgVpnName, opts) {
      return this.getMsgVpnBridgesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Client object.
     * Get a Client object.  Applications or devices that connect to message brokers to send and/or receive messages are represented as Clients.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientResponseModel} and HTTP response
     */
    getMsgVpnClientWithHttpInfo(msgVpnName, clientName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClient");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling getMsgVpnClient");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnClientResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client object.
     * Get a Client object.  Applications or devices that connect to message brokers to send and/or receive messages are represented as Clients.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientResponseModel}
     */
    getMsgVpnClient(msgVpnName, clientName, opts) {
      return this.getMsgVpnClientWithHttpInfo(msgVpnName, clientName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Client Transacted Session object.
     * Get a Client Transacted Session object.  Transacted Sessions enable clients to group multiple message send and/or receive operations together in single, atomic units known as local transactions.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x| sessionName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @param {String} sessionName The name of the Transacted Session.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientTransactedSessionResponseModel} and HTTP response
     */
    getMsgVpnClientTransactedSessionWithHttpInfo(msgVpnName, clientName, sessionName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientTransactedSession");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling getMsgVpnClientTransactedSession");
      }
      // verify the required parameter 'sessionName' is set
      if (sessionName === undefined || sessionName === null) {
        throw new Error("Missing the required parameter 'sessionName' when calling getMsgVpnClientTransactedSession");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName,'sessionName': sessionName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnClientTransactedSessionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}/transactedSessions/{sessionName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client Transacted Session object.
     * Get a Client Transacted Session object.  Transacted Sessions enable clients to group multiple message send and/or receive operations together in single, atomic units known as local transactions.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x| sessionName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @param {<&vendorExtensions.x-jsdoc-type>} sessionName The name of the Transacted Session.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientTransactedSessionResponseModel}
     */
    getMsgVpnClientTransactedSession(msgVpnName, clientName, sessionName, opts) {
      return this.getMsgVpnClientTransactedSessionWithHttpInfo(msgVpnName, clientName, sessionName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Client Transacted Session objects.
     * Get a list of Client Transacted Session objects.  Transacted Sessions enable clients to group multiple message send and/or receive operations together in single, atomic units known as local transactions.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x| sessionName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientName The name of the Client.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientTransactedSessionsResponseModel} and HTTP response
     */
    getMsgVpnClientTransactedSessionsWithHttpInfo(msgVpnName, clientName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientTransactedSessions");
      }
      // verify the required parameter 'clientName' is set
      if (clientName === undefined || clientName === null) {
        throw new Error("Missing the required parameter 'clientName' when calling getMsgVpnClientTransactedSessions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientName': clientName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnClientTransactedSessionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients/{clientName}/transactedSessions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client Transacted Session objects.
     * Get a list of Client Transacted Session objects.  Transacted Sessions enable clients to group multiple message send and/or receive operations together in single, atomic units known as local transactions.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x| sessionName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientName The name of the Client.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientTransactedSessionsResponseModel}
     */
    getMsgVpnClientTransactedSessions(msgVpnName, clientName, opts) {
      return this.getMsgVpnClientTransactedSessionsWithHttpInfo(msgVpnName, clientName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Client objects.
     * Get a list of Client objects.  Applications or devices that connect to message brokers to send and/or receive messages are represented as Clients.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientsResponseModel} and HTTP response
     */
    getMsgVpnClientsWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClients");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnClientsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client objects.
     * Get a list of Client objects.  Applications or devices that connect to message brokers to send and/or receive messages are represented as Clients.   Attribute|Identifying|Deprecated :---|:---:|:---: clientName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientsResponseModel}
     */
    getMsgVpnClients(msgVpnName, opts) {
      return this.getMsgVpnClientsWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Distributed Cache object.
     * Get a Distributed Cache object.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheWithHttpInfo(msgVpnName, cacheName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCache");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCache");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnDistributedCacheResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Distributed Cache object.
     * Get a Distributed Cache object.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheResponseModel}
     */
    getMsgVpnDistributedCache(msgVpnName, cacheName, opts) {
      return this.getMsgVpnDistributedCacheWithHttpInfo(msgVpnName, cacheName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cache Cluster object.
     * Get a Cache Cluster object.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterWithHttpInfo(msgVpnName, cacheName, clusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheCluster");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheCluster");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheCluster");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnDistributedCacheClusterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cache Cluster object.
     * Get a Cache Cluster object.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterResponseModel}
     */
    getMsgVpnDistributedCacheCluster(msgVpnName, cacheName, clusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterWithHttpInfo(msgVpnName, cacheName, clusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cache Instance object.
     * Get a Cache Instance object.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstanceWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstance");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstance");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstance");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling getMsgVpnDistributedCacheClusterInstance");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnDistributedCacheClusterInstanceResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cache Instance object.
     * Get a Cache Instance object.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstance(msgVpnName, cacheName, clusterName, instanceName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstanceWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cache Instance objects.
     * Get a list of Cache Instance objects.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstancesResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstancesWithHttpInfo(msgVpnName, cacheName, clusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstances");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstances");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstances");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnDistributedCacheClusterInstancesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cache Instance objects.
     * Get a list of Cache Instance objects.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstancesResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstances(msgVpnName, cacheName, clusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstancesWithHttpInfo(msgVpnName, cacheName, clusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cache Cluster objects.
     * Get a list of Cache Cluster objects.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClustersResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClustersWithHttpInfo(msgVpnName, cacheName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusters");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnDistributedCacheClustersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cache Cluster objects.
     * Get a list of Cache Cluster objects.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClustersResponseModel}
     */
    getMsgVpnDistributedCacheClusters(msgVpnName, cacheName, opts) {
      return this.getMsgVpnDistributedCacheClustersWithHttpInfo(msgVpnName, cacheName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Distributed Cache objects.
     * Get a list of Distributed Cache objects.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCachesResponseModel} and HTTP response
     */
    getMsgVpnDistributedCachesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCaches");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnDistributedCachesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Distributed Cache objects.
     * Get a list of Distributed Cache objects.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCachesResponseModel}
     */
    getMsgVpnDistributedCaches(msgVpnName, opts) {
      return this.getMsgVpnDistributedCachesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Kafka Receiver object.
     * Get a Kafka Receiver object.  A Kafka Receiver receives messages from a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaReceiverName The name of the Kafka Receiver.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaReceiverResponseModel} and HTTP response
     */
    getMsgVpnKafkaReceiverWithHttpInfo(msgVpnName, kafkaReceiverName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaReceiver");
      }
      // verify the required parameter 'kafkaReceiverName' is set
      if (kafkaReceiverName === undefined || kafkaReceiverName === null) {
        throw new Error("Missing the required parameter 'kafkaReceiverName' when calling getMsgVpnKafkaReceiver");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaReceiverName': kafkaReceiverName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnKafkaReceiverResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers/{kafkaReceiverName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Kafka Receiver object.
     * Get a Kafka Receiver object.  A Kafka Receiver receives messages from a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaReceiverName The name of the Kafka Receiver.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaReceiverResponseModel}
     */
    getMsgVpnKafkaReceiver(msgVpnName, kafkaReceiverName, opts) {
      return this.getMsgVpnKafkaReceiverWithHttpInfo(msgVpnName, kafkaReceiverName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Kafka Receiver objects.
     * Get a list of Kafka Receiver objects.  A Kafka Receiver receives messages from a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaReceiversResponseModel} and HTTP response
     */
    getMsgVpnKafkaReceiversWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaReceivers");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnKafkaReceiversResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Kafka Receiver objects.
     * Get a list of Kafka Receiver objects.  A Kafka Receiver receives messages from a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaReceiversResponseModel}
     */
    getMsgVpnKafkaReceivers(msgVpnName, opts) {
      return this.getMsgVpnKafkaReceiversWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Kafka Sender object.
     * Get a Kafka Sender object.  A Kafka Sender sends messages to a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaSenderName The name of the Kafka Sender.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaSenderResponseModel} and HTTP response
     */
    getMsgVpnKafkaSenderWithHttpInfo(msgVpnName, kafkaSenderName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaSender");
      }
      // verify the required parameter 'kafkaSenderName' is set
      if (kafkaSenderName === undefined || kafkaSenderName === null) {
        throw new Error("Missing the required parameter 'kafkaSenderName' when calling getMsgVpnKafkaSender");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaSenderName': kafkaSenderName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnKafkaSenderResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders/{kafkaSenderName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Kafka Sender object.
     * Get a Kafka Sender object.  A Kafka Sender sends messages to a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaSenderName The name of the Kafka Sender.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaSenderResponseModel}
     */
    getMsgVpnKafkaSender(msgVpnName, kafkaSenderName, opts) {
      return this.getMsgVpnKafkaSenderWithHttpInfo(msgVpnName, kafkaSenderName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Kafka Sender objects.
     * Get a list of Kafka Sender objects.  A Kafka Sender sends messages to a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaSendersResponseModel} and HTTP response
     */
    getMsgVpnKafkaSendersWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaSenders");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnKafkaSendersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Kafka Sender objects.
     * Get a list of Kafka Sender objects.  A Kafka Sender sends messages to a Kafka Cluster.  WARNING: This feature is in BETA with limited scalability and no production support. Configuration may change or be eliminated by future upgrades.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaSendersResponseModel}
     */
    getMsgVpnKafkaSenders(msgVpnName, opts) {
      return this.getMsgVpnKafkaSendersWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an MQTT Session object.
     * Get an MQTT Session object.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get an MQTT Session object.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
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
     * Get a list of MQTT Session objects.
     * Get a list of MQTT Session objects.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of MQTT Session objects.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a Queue object.
     * Get a Queue object.  A Queue acts as both a destination that clients can publish messages to, and as an endpoint that clients can bind consumers to and consume messages from.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnQueueResponseModel} and HTTP response
     */
    getMsgVpnQueueWithHttpInfo(msgVpnName, queueName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnQueue");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling getMsgVpnQueue");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnQueueResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Queue object.
     * Get a Queue object.  A Queue acts as both a destination that clients can publish messages to, and as an endpoint that clients can bind consumers to and consume messages from.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnQueueResponseModel}
     */
    getMsgVpnQueue(msgVpnName, queueName, opts) {
      return this.getMsgVpnQueueWithHttpInfo(msgVpnName, queueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Queue Message object.
     * Get a Queue Message object.  A Queue Message is a packet of information sent from producers to consumers using the Queue.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @param {String} msgId The identifier (ID) of the Message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnQueueMsgResponseModel} and HTTP response
     */
    getMsgVpnQueueMsgWithHttpInfo(msgVpnName, queueName, msgId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnQueueMsg");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling getMsgVpnQueueMsg");
      }
      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId' when calling getMsgVpnQueueMsg");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName,'msgId': msgId
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnQueueMsgResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/msgs/{msgId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Queue Message object.
     * Get a Queue Message object.  A Queue Message is a packet of information sent from producers to consumers using the Queue.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgId The identifier (ID) of the Message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnQueueMsgResponseModel}
     */
    getMsgVpnQueueMsg(msgVpnName, queueName, msgId, opts) {
      return this.getMsgVpnQueueMsgWithHttpInfo(msgVpnName, queueName, msgId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Queue Message objects.
     * Get a list of Queue Message objects.  A Queue Message is a packet of information sent from producers to consumers using the Queue.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} queueName The name of the Queue.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnQueueMsgsResponseModel} and HTTP response
     */
    getMsgVpnQueueMsgsWithHttpInfo(msgVpnName, queueName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnQueueMsgs");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling getMsgVpnQueueMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'queueName': queueName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnQueueMsgsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues/{queueName}/msgs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Queue Message objects.
     * Get a list of Queue Message objects.  A Queue Message is a packet of information sent from producers to consumers using the Queue.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnQueueMsgsResponseModel}
     */
    getMsgVpnQueueMsgs(msgVpnName, queueName, opts) {
      return this.getMsgVpnQueueMsgsWithHttpInfo(msgVpnName, queueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Queue objects.
     * Get a list of Queue objects.  A Queue acts as both a destination that clients can publish messages to, and as an endpoint that clients can bind consumers to and consume messages from.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnQueuesResponseModel} and HTTP response
     */
    getMsgVpnQueuesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnQueues");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnQueuesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/queues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Queue objects.
     * Get a list of Queue objects.  A Queue acts as both a destination that clients can publish messages to, and as an endpoint that clients can bind consumers to and consume messages from.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnQueuesResponseModel}
     */
    getMsgVpnQueues(msgVpnName, opts) {
      return this.getMsgVpnQueuesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Replay Log object.
     * Get a Replay Log object.  When the Message Replay feature is enabled, message brokers store persistent messages in a Replay Log. These messages are kept until the log is full, after which the oldest messages are removed to free up space for new messages.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| replayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} replayLogName The name of the Replay Log.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnReplayLogResponseModel} and HTTP response
     */
    getMsgVpnReplayLogWithHttpInfo(msgVpnName, replayLogName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnReplayLog");
      }
      // verify the required parameter 'replayLogName' is set
      if (replayLogName === undefined || replayLogName === null) {
        throw new Error("Missing the required parameter 'replayLogName' when calling getMsgVpnReplayLog");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'replayLogName': replayLogName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnReplayLogResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/replayLogs/{replayLogName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Replay Log object.
     * Get a Replay Log object.  When the Message Replay feature is enabled, message brokers store persistent messages in a Replay Log. These messages are kept until the log is full, after which the oldest messages are removed to free up space for new messages.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| replayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} replayLogName The name of the Replay Log.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnReplayLogResponseModel}
     */
    getMsgVpnReplayLog(msgVpnName, replayLogName, opts) {
      return this.getMsgVpnReplayLogWithHttpInfo(msgVpnName, replayLogName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Replay Log objects.
     * Get a list of Replay Log objects.  When the Message Replay feature is enabled, message brokers store persistent messages in a Replay Log. These messages are kept until the log is full, after which the oldest messages are removed to free up space for new messages.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| replayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnReplayLogsResponseModel} and HTTP response
     */
    getMsgVpnReplayLogsWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnReplayLogs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnReplayLogsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/replayLogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Replay Log objects.
     * Get a list of Replay Log objects.  When the Message Replay feature is enabled, message brokers store persistent messages in a Replay Log. These messages are kept until the log is full, after which the oldest messages are removed to free up space for new messages.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| replayLogName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnReplayLogsResponseModel}
     */
    getMsgVpnReplayLogs(msgVpnName, opts) {
      return this.getMsgVpnReplayLogsWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a REST Delivery Point object.
     * Get a REST Delivery Point object.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a REST Delivery Point object.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
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
     * Get a REST Consumer object.
     * Get a REST Consumer object.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a REST Consumer object.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
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
     * Get a list of REST Consumer objects.
     * Get a list of REST Consumer objects.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of REST Consumer objects.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a list of REST Delivery Point objects.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of REST Delivery Point objects.  A REST Delivery Point manages delivery of messages from queues to a named list of REST Consumers.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a Topic Endpoint object.
     * Get a Topic Endpoint object.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointWithHttpInfo(msgVpnName, topicEndpointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpoint");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpoint");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnTopicEndpointResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic Endpoint object.
     * Get a Topic Endpoint object.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointResponseModel}
     */
    getMsgVpnTopicEndpoint(msgVpnName, topicEndpointName, opts) {
      return this.getMsgVpnTopicEndpointWithHttpInfo(msgVpnName, topicEndpointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Topic Endpoint Message object.
     * Get a Topic Endpoint Message object.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {String} msgId The identifier (ID) of the Message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointMsgResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointMsgWithHttpInfo(msgVpnName, topicEndpointName, msgId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpointMsg");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpointMsg");
      }
      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId' when calling getMsgVpnTopicEndpointMsg");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName,'msgId': msgId
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnTopicEndpointMsgResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/msgs/{msgId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic Endpoint Message object.
     * Get a Topic Endpoint Message object.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgId The identifier (ID) of the Message.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointMsgResponseModel}
     */
    getMsgVpnTopicEndpointMsg(msgVpnName, topicEndpointName, msgId, opts) {
      return this.getMsgVpnTopicEndpointMsgWithHttpInfo(msgVpnName, topicEndpointName, msgId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic Endpoint Message objects.
     * Get a list of Topic Endpoint Message objects.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointMsgsResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointMsgsWithHttpInfo(msgVpnName, topicEndpointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpointMsgs");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpointMsgs");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnTopicEndpointMsgsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/msgs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic Endpoint Message objects.
     * Get a list of Topic Endpoint Message objects.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointMsgsResponseModel}
     */
    getMsgVpnTopicEndpointMsgs(msgVpnName, topicEndpointName, opts) {
      return this.getMsgVpnTopicEndpointMsgsWithHttpInfo(msgVpnName, topicEndpointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic Endpoint objects.
     * Get a list of Topic Endpoint objects.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointsResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointsWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpoints");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnTopicEndpointsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic Endpoint objects.
     * Get a list of Topic Endpoint objects.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointsResponseModel}
     */
    getMsgVpnTopicEndpoints(msgVpnName, opts) {
      return this.getMsgVpnTopicEndpointsWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Replicated Local Transaction or XA Transaction object.
     * Get a Replicated Local Transaction or XA Transaction object.  Transactions can be used to group a set of Guaranteed messages to be published or consumed or both as an atomic unit of work.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| xid|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} xid The identifier (ID) of the Transaction.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTransactionResponseModel} and HTTP response
     */
    getMsgVpnTransactionWithHttpInfo(msgVpnName, xid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTransaction");
      }
      // verify the required parameter 'xid' is set
      if (xid === undefined || xid === null) {
        throw new Error("Missing the required parameter 'xid' when calling getMsgVpnTransaction");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'xid': xid
      };
      let queryParams = {
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnTransactionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/transactions/{xid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Replicated Local Transaction or XA Transaction object.
     * Get a Replicated Local Transaction or XA Transaction object.  Transactions can be used to group a set of Guaranteed messages to be published or consumed or both as an atomic unit of work.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| xid|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} xid The identifier (ID) of the Transaction.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTransactionResponseModel}
     */
    getMsgVpnTransaction(msgVpnName, xid, opts) {
      return this.getMsgVpnTransactionWithHttpInfo(msgVpnName, xid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Replicated Local Transaction or XA Transaction objects.
     * Get a list of Replicated Local Transaction or XA Transaction objects.  Transactions can be used to group a set of Guaranteed messages to be published or consumed or both as an atomic unit of work.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| xid|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTransactionsResponseModel} and HTTP response
     */
    getMsgVpnTransactionsWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTransactions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnTransactionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Replicated Local Transaction or XA Transaction objects.
     * Get a list of Replicated Local Transaction or XA Transaction objects.  Transactions can be used to group a set of Guaranteed messages to be published or consumed or both as an atomic unit of work.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| xid|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTransactionsResponseModel}
     */
    getMsgVpnTransactions(msgVpnName, opts) {
      return this.getMsgVpnTransactionsWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Message VPN objects.
     * Get a list of Message VPN objects.  Message VPNs (Virtual Private Networks) allow for the segregation of topic space and clients. They also group clients connecting to a network of message brokers, such that messages published within a particular group are only visible to that group&#x27;s clients.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnsResponseModel} and HTTP response
     */
    getMsgVpnsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MsgVpnsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Message VPN objects.
     * Get a list of Message VPN objects.  Message VPNs (Virtual Private Networks) allow for the segregation of topic space and clients. They also group clients connecting to a network of message brokers, such that messages published within a particular group are only visible to that group&#x27;s clients.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnsResponseModel}
     */
    getMsgVpns(opts) {
      return this.getMsgVpnsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}