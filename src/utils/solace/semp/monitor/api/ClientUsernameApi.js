import {ApiClient} from "../ApiClient";
import {MsgVpnClientUsernameAttributeResponseModel} from '../model/MsgVpnClientUsernameAttributeResponseModel';
import {MsgVpnClientUsernameAttributesResponseModel} from '../model/MsgVpnClientUsernameAttributesResponseModel';
import {MsgVpnClientUsernameResponseModel} from '../model/MsgVpnClientUsernameResponseModel';
import {MsgVpnClientUsernamesResponseModel} from '../model/MsgVpnClientUsernamesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* ClientUsername service.
* @module api/ClientUsernameApi
* @version 2.36
*/
export class ClientUsernameApi {

    /**
    * Constructs a new ClientUsernameApi. 
    * @alias module:api/ClientUsernameApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Client Username object.
     * Get a Client Username object.  A client is only authorized to connect to a Message VPN that is associated with a Client Username that the client has been assigned.   Attribute|Identifying|Deprecated :---|:---:|:---: clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientUsername The name of the Client Username.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientUsernameResponseModel} and HTTP response
     */
    getMsgVpnClientUsernameWithHttpInfo(msgVpnName, clientUsername, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientUsername");
      }
      // verify the required parameter 'clientUsername' is set
      if (clientUsername === undefined || clientUsername === null) {
        throw new Error("Missing the required parameter 'clientUsername' when calling getMsgVpnClientUsername");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientUsername': clientUsername
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
      let returnType = MsgVpnClientUsernameResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clientUsernames/{clientUsername}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client Username object.
     * Get a Client Username object.  A client is only authorized to connect to a Message VPN that is associated with a Client Username that the client has been assigned.   Attribute|Identifying|Deprecated :---|:---:|:---: clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientUsername The name of the Client Username.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientUsernameResponseModel}
     */
    getMsgVpnClientUsername(msgVpnName, clientUsername, opts) {
      return this.getMsgVpnClientUsernameWithHttpInfo(msgVpnName, clientUsername, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Client Username Attribute object.
     * Get a Client Username Attribute object.  A ClientUsername Attribute is a key+value pair that can be used to locate a client username, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.27.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientUsername The name of the Client Username.
     * @param {String} attributeName The name of the Attribute.
     * @param {String} attributeValue The value of the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientUsernameAttributeResponseModel} and HTTP response
     */
    getMsgVpnClientUsernameAttributeWithHttpInfo(msgVpnName, clientUsername, attributeName, attributeValue, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientUsernameAttribute");
      }
      // verify the required parameter 'clientUsername' is set
      if (clientUsername === undefined || clientUsername === null) {
        throw new Error("Missing the required parameter 'clientUsername' when calling getMsgVpnClientUsernameAttribute");
      }
      // verify the required parameter 'attributeName' is set
      if (attributeName === undefined || attributeName === null) {
        throw new Error("Missing the required parameter 'attributeName' when calling getMsgVpnClientUsernameAttribute");
      }
      // verify the required parameter 'attributeValue' is set
      if (attributeValue === undefined || attributeValue === null) {
        throw new Error("Missing the required parameter 'attributeValue' when calling getMsgVpnClientUsernameAttribute");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientUsername': clientUsername,'attributeName': attributeName,'attributeValue': attributeValue
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
      let returnType = MsgVpnClientUsernameAttributeResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clientUsernames/{clientUsername}/attributes/{attributeName},{attributeValue}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Client Username Attribute object.
     * Get a Client Username Attribute object.  A ClientUsername Attribute is a key+value pair that can be used to locate a client username, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.27.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientUsername The name of the Client Username.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeName The name of the Attribute.
     * @param {<&vendorExtensions.x-jsdoc-type>} attributeValue The value of the Attribute.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientUsernameAttributeResponseModel}
     */
    getMsgVpnClientUsernameAttribute(msgVpnName, clientUsername, attributeName, attributeValue, opts) {
      return this.getMsgVpnClientUsernameAttributeWithHttpInfo(msgVpnName, clientUsername, attributeName, attributeValue, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Client Username Attribute objects.
     * Get a list of Client Username Attribute objects.  A ClientUsername Attribute is a key+value pair that can be used to locate a client username, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.27.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} clientUsername The name of the Client Username.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientUsernameAttributesResponseModel} and HTTP response
     */
    getMsgVpnClientUsernameAttributesWithHttpInfo(msgVpnName, clientUsername, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientUsernameAttributes");
      }
      // verify the required parameter 'clientUsername' is set
      if (clientUsername === undefined || clientUsername === null) {
        throw new Error("Missing the required parameter 'clientUsername' when calling getMsgVpnClientUsernameAttributes");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'clientUsername': clientUsername
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
      let returnType = MsgVpnClientUsernameAttributesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clientUsernames/{clientUsername}/attributes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client Username Attribute objects.
     * Get a list of Client Username Attribute objects.  A ClientUsername Attribute is a key+value pair that can be used to locate a client username, for example when using client certificate mapping.   Attribute|Identifying|Deprecated :---|:---:|:---: attributeName|x| attributeValue|x| clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.27.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} clientUsername The name of the Client Username.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientUsernameAttributesResponseModel}
     */
    getMsgVpnClientUsernameAttributes(msgVpnName, clientUsername, opts) {
      return this.getMsgVpnClientUsernameAttributesWithHttpInfo(msgVpnName, clientUsername, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Client Username objects.
     * Get a list of Client Username objects.  A client is only authorized to connect to a Message VPN that is associated with a Client Username that the client has been assigned.   Attribute|Identifying|Deprecated :---|:---:|:---: clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnClientUsernamesResponseModel} and HTTP response
     */
    getMsgVpnClientUsernamesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnClientUsernames");
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
      let returnType = MsgVpnClientUsernamesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/clientUsernames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Client Username objects.
     * Get a list of Client Username objects.  A client is only authorized to connect to a Message VPN that is associated with a Client Username that the client has been assigned.   Attribute|Identifying|Deprecated :---|:---:|:---: clientUsername|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnClientUsernamesResponseModel}
     */
    getMsgVpnClientUsernames(msgVpnName, opts) {
      return this.getMsgVpnClientUsernamesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}