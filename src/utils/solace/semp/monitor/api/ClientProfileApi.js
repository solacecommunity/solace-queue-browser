import {ApiClient} from "../ApiClient";
import {MsgVpnClientProfileResponseModel} from '../model/MsgVpnClientProfileResponseModel';
import {MsgVpnClientProfilesResponseModel} from '../model/MsgVpnClientProfilesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* ClientProfile service.
* @module api/ClientProfileApi
* @version 2.36
*/
export class ClientProfileApi {

    /**
    * Constructs a new ClientProfileApi. 
    * @alias module:api/ClientProfileApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Client Profile object.
     * Get a Client Profile object.  Client Profiles are used to assign common configuration properties to clients that have been successfully authorized.   Attribute|Identifying|Deprecated :---|:---:|:---: allowCutThroughForwardingEnabled||x apiQueueManagementCopyFromOnCreateName||x apiTopicEndpointManagementCopyFromOnCreateName||x clientProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientProfileName The name of the Client Profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientProfileResponseModel} and HTTP response
     */
    getMsgVpnClientProfileWithHttpInfo(msgVpnName, clientProfileName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientProfile");
      }
      // verify the required parameter 'clientProfileName' is set
      if (clientProfileName === undefined || clientProfileName === null) {
        throw new Error("Missing the required parameter 'clientProfileName' when calling getMsgVpnClientProfile");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientProfileName': clientProfileName
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
      let returnType = MsgVpnClientProfileResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clientProfiles/{clientProfileName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client Profile object.
     * Get a Client Profile object.  Client Profiles are used to assign common configuration properties to clients that have been successfully authorized.   Attribute|Identifying|Deprecated :---|:---:|:---: allowCutThroughForwardingEnabled||x apiQueueManagementCopyFromOnCreateName||x apiTopicEndpointManagementCopyFromOnCreateName||x clientProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientProfileName The name of the Client Profile.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientProfileResponseModel}
     */
    getMsgVpnClientProfile(msgVpnName, clientProfileName, opts) {
      return this.getMsgVpnClientProfileWithHttpInfo(msgVpnName, clientProfileName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Client Profile objects.
     * Get a list of Client Profile objects.  Client Profiles are used to assign common configuration properties to clients that have been successfully authorized.   Attribute|Identifying|Deprecated :---|:---:|:---: allowCutThroughForwardingEnabled||x apiQueueManagementCopyFromOnCreateName||x apiTopicEndpointManagementCopyFromOnCreateName||x clientProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientProfilesResponseModel} and HTTP response
     */
    getMsgVpnClientProfilesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientProfiles");
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
      let returnType = MsgVpnClientProfilesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clientProfiles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client Profile objects.
     * Get a list of Client Profile objects.  Client Profiles are used to assign common configuration properties to clients that have been successfully authorized.   Attribute|Identifying|Deprecated :---|:---:|:---: allowCutThroughForwardingEnabled||x apiQueueManagementCopyFromOnCreateName||x apiTopicEndpointManagementCopyFromOnCreateName||x clientProfileName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientProfilesResponseModel}
     */
    getMsgVpnClientProfiles(msgVpnName, opts) {
      return this.getMsgVpnClientProfilesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}