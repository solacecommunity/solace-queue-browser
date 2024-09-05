import {ApiClient} from "../ApiClient";
import {MsgVpnConfigSyncRemoteNodeResponseModel} from '../model/MsgVpnConfigSyncRemoteNodeResponseModel';
import {MsgVpnConfigSyncRemoteNodesResponseModel} from '../model/MsgVpnConfigSyncRemoteNodesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* ConfigSyncRemoteNode service.
* @module api/ConfigSyncRemoteNodeApi
* @version 2.36
*/
export class ConfigSyncRemoteNodeApi {

    /**
    * Constructs a new ConfigSyncRemoteNodeApi. 
    * @alias module:api/ConfigSyncRemoteNodeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Config Sync Remote Node object.
     * Get a Config Sync Remote Node object.  A Config Sync Remote Node object contains information about the status of the table for this Message VPN with respect to a remote node.   Attribute|Identifying|Deprecated :---|:---:|:---: lastMsgRxTime||x msgVpnName|x|x remoteNodeName|x|x role||x stale||x state||x timeInState||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.22. This attribute has been deprecated.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} remoteNodeName The name of the Config Sync Remote Node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnConfigSyncRemoteNodeResponseModel} and HTTP response
     */
    getMsgVpnConfigSyncRemoteNodeWithHttpInfo(msgVpnName, remoteNodeName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnConfigSyncRemoteNode");
      }
      // verify the required parameter 'remoteNodeName' is set
      if (remoteNodeName === undefined || remoteNodeName === null) {
        throw new Error("Missing the required parameter 'remoteNodeName' when calling getMsgVpnConfigSyncRemoteNode");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'remoteNodeName': remoteNodeName
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
      let returnType = MsgVpnConfigSyncRemoteNodeResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/configSyncRemoteNodes/{remoteNodeName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Config Sync Remote Node object.
     * Get a Config Sync Remote Node object.  A Config Sync Remote Node object contains information about the status of the table for this Message VPN with respect to a remote node.   Attribute|Identifying|Deprecated :---|:---:|:---: lastMsgRxTime||x msgVpnName|x|x remoteNodeName|x|x role||x stale||x state||x timeInState||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.22. This attribute has been deprecated.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteNodeName The name of the Config Sync Remote Node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnConfigSyncRemoteNodeResponseModel}
     */
    getMsgVpnConfigSyncRemoteNode(msgVpnName, remoteNodeName, opts) {
      return this.getMsgVpnConfigSyncRemoteNodeWithHttpInfo(msgVpnName, remoteNodeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Config Sync Remote Node objects.
     * Get a list of Config Sync Remote Node objects.  A Config Sync Remote Node object contains information about the status of the table for this Message VPN with respect to a remote node.   Attribute|Identifying|Deprecated :---|:---:|:---: lastMsgRxTime||x msgVpnName|x|x remoteNodeName|x|x role||x stale||x state||x timeInState||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.22. This attribute has been deprecated.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnConfigSyncRemoteNodesResponseModel} and HTTP response
     */
    getMsgVpnConfigSyncRemoteNodesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnConfigSyncRemoteNodes");
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
      let returnType = MsgVpnConfigSyncRemoteNodesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/configSyncRemoteNodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Config Sync Remote Node objects.
     * Get a list of Config Sync Remote Node objects.  A Config Sync Remote Node object contains information about the status of the table for this Message VPN with respect to a remote node.   Attribute|Identifying|Deprecated :---|:---:|:---: lastMsgRxTime||x msgVpnName|x|x remoteNodeName|x|x role||x stale||x state||x timeInState||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.22. This attribute has been deprecated.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnConfigSyncRemoteNodesResponseModel}
     */
    getMsgVpnConfigSyncRemoteNodes(msgVpnName, opts) {
      return this.getMsgVpnConfigSyncRemoteNodesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}