import {ApiClient} from "../ApiClient";
import {MsgVpnProxiesResponseModel} from '../model/MsgVpnProxiesResponseModel';
import {MsgVpnProxyResponseModel} from '../model/MsgVpnProxyResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* Proxy service.
* @module api/ProxyApi
* @version 2.36
*/
export class ProxyApi {

    /**
    * Constructs a new ProxyApi. 
    * @alias module:api/ProxyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a list of Proxy objects.
     * Get a list of Proxy objects.  Proxy objects define the connection parameters for a proxy server. To use a proxy for a particular connection such as a REST Consumer, select the proxy by name in the configuration for that object.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| proxyName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnProxiesResponseModel} and HTTP response
     */
    getMsgVpnProxiesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnProxies");
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
      let returnType = MsgVpnProxiesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/proxies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Proxy objects.
     * Get a list of Proxy objects.  Proxy objects define the connection parameters for a proxy server. To use a proxy for a particular connection such as a REST Consumer, select the proxy by name in the configuration for that object.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| proxyName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnProxiesResponseModel}
     */
    getMsgVpnProxies(msgVpnName, opts) {
      return this.getMsgVpnProxiesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Proxy object.
     * Get a Proxy object.  Proxy objects define the connection parameters for a proxy server. To use a proxy for a particular connection such as a REST Consumer, select the proxy by name in the configuration for that object.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| proxyName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} proxyName The name of the proxy.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnProxyResponseModel} and HTTP response
     */
    getMsgVpnProxyWithHttpInfo(msgVpnName, proxyName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnProxy");
      }
      // verify the required parameter 'proxyName' is set
      if (proxyName === undefined || proxyName === null) {
        throw new Error("Missing the required parameter 'proxyName' when calling getMsgVpnProxy");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'proxyName': proxyName
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
      let returnType = MsgVpnProxyResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/proxies/{proxyName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Proxy object.
     * Get a Proxy object.  Proxy objects define the connection parameters for a proxy server. To use a proxy for a particular connection such as a REST Consumer, select the proxy by name in the configuration for that object.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| proxyName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} proxyName The name of the proxy.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnProxyResponseModel}
     */
    getMsgVpnProxy(msgVpnName, proxyName, opts) {
      return this.getMsgVpnProxyWithHttpInfo(msgVpnName, proxyName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}