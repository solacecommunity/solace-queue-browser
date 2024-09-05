import {ApiClient} from "../ApiClient";
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeadersResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingRequestHeadersResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingResponseModel';
import {MsgVpnRestDeliveryPointQueueBindingsResponseModel} from '../model/MsgVpnRestDeliveryPointQueueBindingsResponseModel';
import {MsgVpnRestDeliveryPointResponseModel} from '../model/MsgVpnRestDeliveryPointResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerOauthJwtClaimsResponseModel';
import {MsgVpnRestDeliveryPointRestConsumerResponseModel} from '../model/MsgVpnRestDeliveryPointRestConsumerResponseModel';
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
     * Get a Queue Binding object.
     * Get a Queue Binding object.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a Queue Binding object.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
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
     * Get a Protected Request Header object.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a Protected Request Header object.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the protected HTTP request header.
     * @param {Object} opts Optional parameters
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
     * Get a list of Protected Request Header objects.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.30.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of Protected Request Header objects.  A protected request header to be added to the HTTP request. Unlike a non-protected request header, the header value cannot be displayed after it is set.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.30.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a Request Header object.  A request header to be added to the HTTP request.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {String} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a Request Header object.  A request header to be added to the HTTP request.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} headerName The name of the HTTP request header.
     * @param {Object} opts Optional parameters
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
     * Get a list of Request Header objects.  A request header to be added to the HTTP request.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.23.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of Request Header objects.  A request header to be added to the HTTP request.   Attribute|Identifying|Deprecated :---|:---:|:---: headerName|x| msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.23.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueBindingName The name of a queue in the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a list of Queue Binding objects.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of Queue Binding objects.  A Queue Binding for a REST Delivery Point attracts messages to be delivered to REST consumers. If the queue does not exist it can be created subsequently, and once the queue is operational the broker performs the queue binding. Removing the queue binding does not delete the queue itself. Similarly, removing the queue does not remove the queue binding, which fails until the queue is recreated or the queue binding is deleted.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| queueBindingName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a REST Consumer object.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: counter.httpRequestConnectionCloseTxMsgCount||x counter.httpRequestOutstandingTxMsgCount||x counter.httpRequestTimedOutTxMsgCount||x counter.httpRequestTxByteCount||x counter.httpRequestTxMsgCount||x counter.httpResponseErrorRxMsgCount||x counter.httpResponseRxByteCount||x counter.httpResponseRxMsgCount||x counter.httpResponseSuccessRxMsgCount||x msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
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
     * Get a REST Consumer object.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: counter.httpRequestConnectionCloseTxMsgCount||x counter.httpRequestOutstandingTxMsgCount||x counter.httpRequestTimedOutTxMsgCount||x counter.httpRequestTxByteCount||x counter.httpRequestTxMsgCount||x counter.httpResponseErrorRxMsgCount||x counter.httpResponseRxByteCount||x counter.httpResponseRxMsgCount||x counter.httpResponseSuccessRxMsgCount||x msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
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
     * Get a Claim object.
     * Get a Claim object.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthJwtClaimName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {String} oauthJwtClaimName The name of the additional claim. Cannot be \&quot;exp\&quot;, \&quot;iat\&quot;, or \&quot;jti\&quot;.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a Claim object.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthJwtClaimName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {<&vendorExtensions.x-jsdoc-type>} oauthJwtClaimName The name of the additional claim. Cannot be \&quot;exp\&quot;, \&quot;iat\&quot;, or \&quot;jti\&quot;.
     * @param {Object} opts Optional parameters
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
     * Get a list of Claim objects.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthJwtClaimName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.21.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
        'count': opts['count'],'cursor': opts['cursor'],'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of Claim objects.  A Claim is added to the JWT sent to the OAuth token request endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| oauthJwtClaimName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 500.  This has been available since 2.21.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
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
     * Get a Trusted Common Name object.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x restConsumerName|x|x restDeliveryPointName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
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
        'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a Trusted Common Name object.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x restConsumerName|x|x restDeliveryPointName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
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
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x restConsumerName|x|x restDeliveryPointName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} restDeliveryPointName The name of the REST Delivery Point.
     * @param {String} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
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
        'where': this.apiClient.buildCollectionParam(opts['where'], 'csv'),'select': this.apiClient.buildCollectionParam(opts['select'], 'csv')
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
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the REST Consumer are used by encrypted transports to verify the name in the certificate presented by the remote REST consumer. They must include the common name of the remote REST consumer&#x27;s server certificate.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x|x restConsumerName|x|x restDeliveryPointName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.17. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} restDeliveryPointName The name of the REST Delivery Point.
     * @param {<&vendorExtensions.x-jsdoc-type>} restConsumerName The name of the REST Consumer.
     * @param {Object} opts Optional parameters
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
     * Get a list of REST Consumer objects.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: counter.httpRequestConnectionCloseTxMsgCount||x counter.httpRequestOutstandingTxMsgCount||x counter.httpRequestTimedOutTxMsgCount||x counter.httpRequestTxByteCount||x counter.httpRequestTxMsgCount||x counter.httpResponseErrorRxMsgCount||x counter.httpResponseRxByteCount||x counter.httpResponseRxMsgCount||x counter.httpResponseSuccessRxMsgCount||x msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
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
     * Get a list of REST Consumer objects.  REST Consumer objects establish HTTP connectivity to REST consumer applications who wish to receive messages from a broker.   Attribute|Identifying|Deprecated :---|:---:|:---: counter.httpRequestConnectionCloseTxMsgCount||x counter.httpRequestOutstandingTxMsgCount||x counter.httpRequestTimedOutTxMsgCount||x counter.httpRequestTxByteCount||x counter.httpRequestTxMsgCount||x counter.httpResponseErrorRxMsgCount||x counter.httpResponseRxByteCount||x counter.httpResponseRxMsgCount||x counter.httpResponseSuccessRxMsgCount||x msgVpnName|x| restConsumerName|x| restDeliveryPointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
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

}