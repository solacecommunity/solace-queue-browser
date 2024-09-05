import {ApiClient} from "../ApiClient";
import {MsgVpnTopicEndpointMsgResponseModel} from '../model/MsgVpnTopicEndpointMsgResponseModel';
import {MsgVpnTopicEndpointMsgsResponseModel} from '../model/MsgVpnTopicEndpointMsgsResponseModel';
import {MsgVpnTopicEndpointPrioritiesResponseModel} from '../model/MsgVpnTopicEndpointPrioritiesResponseModel';
import {MsgVpnTopicEndpointPriorityResponseModel} from '../model/MsgVpnTopicEndpointPriorityResponseModel';
import {MsgVpnTopicEndpointResponseModel} from '../model/MsgVpnTopicEndpointResponseModel';
import {MsgVpnTopicEndpointTxFlowResponseModel} from '../model/MsgVpnTopicEndpointTxFlowResponseModel';
import {MsgVpnTopicEndpointTxFlowsResponseModel} from '../model/MsgVpnTopicEndpointTxFlowsResponseModel';
import {MsgVpnTopicEndpointsResponseModel} from '../model/MsgVpnTopicEndpointsResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* TopicEndpoint service.
* @module api/TopicEndpointApi
* @version 2.36
*/
export class TopicEndpointApi {

    /**
    * Constructs a new TopicEndpointApi. 
    * @alias module:api/TopicEndpointApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Topic Endpoint object.
     * Get a Topic Endpoint object.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x| virtualRouter||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
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
     * Get a Topic Endpoint object.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x| virtualRouter||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
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
     * Get a Topic Endpoint Message object.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
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
     * Get a Topic Endpoint Message object.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
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
     * Get a list of Topic Endpoint Message objects.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
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
     * Get a list of Topic Endpoint Message objects.  A Topic Endpoint Message is a packet of information sent from producers to consumers using the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
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
     * Get a list of Topic Endpoint Priority objects.
     * Get a list of Topic Endpoint Priority objects.  Topic Endpoints can optionally support priority message delivery; all messages of a higher priority are delivered before any messages of a lower priority. A Priority object contains information about the number and size of the messages with a particular priority in the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| priority|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 10.  This has been available since 2.12.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointPrioritiesResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointPrioritiesWithHttpInfo(msgVpnName, topicEndpointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpointPriorities");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpointPriorities");
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
      let returnType = MsgVpnTopicEndpointPrioritiesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/priorities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic Endpoint Priority objects.
     * Get a list of Topic Endpoint Priority objects.  Topic Endpoints can optionally support priority message delivery; all messages of a higher priority are delivered before any messages of a lower priority. A Priority object contains information about the number and size of the messages with a particular priority in the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| priority|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 10.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointPrioritiesResponseModel}
     */
    getMsgVpnTopicEndpointPriorities(msgVpnName, topicEndpointName, opts) {
      return this.getMsgVpnTopicEndpointPrioritiesWithHttpInfo(msgVpnName, topicEndpointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Topic Endpoint Priority object.
     * Get a Topic Endpoint Priority object.  Topic Endpoints can optionally support priority message delivery; all messages of a higher priority are delivered before any messages of a lower priority. A Priority object contains information about the number and size of the messages with a particular priority in the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| priority|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {String} priority The level of the Priority, from 9 (highest) to 0 (lowest).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointPriorityResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointPriorityWithHttpInfo(msgVpnName, topicEndpointName, priority, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpointPriority");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpointPriority");
      }
      // verify the required parameter 'priority' is set
      if (priority === undefined || priority === null) {
        throw new Error("Missing the required parameter 'priority' when calling getMsgVpnTopicEndpointPriority");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName,'priority': priority
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
      let returnType = MsgVpnTopicEndpointPriorityResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/priorities/{priority}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic Endpoint Priority object.
     * Get a Topic Endpoint Priority object.  Topic Endpoints can optionally support priority message delivery; all messages of a higher priority are delivered before any messages of a lower priority. A Priority object contains information about the number and size of the messages with a particular priority in the Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| priority|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {<&vendorExtensions.x-jsdoc-type>} priority The level of the Priority, from 9 (highest) to 0 (lowest).
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointPriorityResponseModel}
     */
    getMsgVpnTopicEndpointPriority(msgVpnName, topicEndpointName, priority, opts) {
      return this.getMsgVpnTopicEndpointPriorityWithHttpInfo(msgVpnName, topicEndpointName, priority, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Topic Endpoint Transmit Flow object.
     * Get a Topic Endpoint Transmit Flow object.  Topic Endpoint Transmit Flows are used by clients to consume Guaranteed messages from a Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: flowId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {String} flowId The identifier (ID) of the Flow.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointTxFlowResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointTxFlowWithHttpInfo(msgVpnName, topicEndpointName, flowId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpointTxFlow");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpointTxFlow");
      }
      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw new Error("Missing the required parameter 'flowId' when calling getMsgVpnTopicEndpointTxFlow");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'topicEndpointName': topicEndpointName,'flowId': flowId
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
      let returnType = MsgVpnTopicEndpointTxFlowResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/txFlows/{flowId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic Endpoint Transmit Flow object.
     * Get a Topic Endpoint Transmit Flow object.  Topic Endpoint Transmit Flows are used by clients to consume Guaranteed messages from a Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: flowId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {<&vendorExtensions.x-jsdoc-type>} flowId The identifier (ID) of the Flow.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointTxFlowResponseModel}
     */
    getMsgVpnTopicEndpointTxFlow(msgVpnName, topicEndpointName, flowId, opts) {
      return this.getMsgVpnTopicEndpointTxFlowWithHttpInfo(msgVpnName, topicEndpointName, flowId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic Endpoint Transmit Flow objects.
     * Get a list of Topic Endpoint Transmit Flow objects.  Topic Endpoint Transmit Flows are used by clients to consume Guaranteed messages from a Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: flowId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnTopicEndpointTxFlowsResponseModel} and HTTP response
     */
    getMsgVpnTopicEndpointTxFlowsWithHttpInfo(msgVpnName, topicEndpointName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnTopicEndpointTxFlows");
      }
      // verify the required parameter 'topicEndpointName' is set
      if (topicEndpointName === undefined || topicEndpointName === null) {
        throw new Error("Missing the required parameter 'topicEndpointName' when calling getMsgVpnTopicEndpointTxFlows");
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
      let returnType = MsgVpnTopicEndpointTxFlowsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/topicEndpoints/{topicEndpointName}/txFlows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic Endpoint Transmit Flow objects.
     * Get a list of Topic Endpoint Transmit Flow objects.  Topic Endpoint Transmit Flows are used by clients to consume Guaranteed messages from a Topic Endpoint.   Attribute|Identifying|Deprecated :---|:---:|:---: flowId|x| msgVpnName|x| topicEndpointName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicEndpointName The name of the Topic Endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnTopicEndpointTxFlowsResponseModel}
     */
    getMsgVpnTopicEndpointTxFlows(msgVpnName, topicEndpointName, opts) {
      return this.getMsgVpnTopicEndpointTxFlowsWithHttpInfo(msgVpnName, topicEndpointName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic Endpoint objects.
     * Get a list of Topic Endpoint objects.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x| virtualRouter||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
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
     * Get a list of Topic Endpoint objects.  A Topic Endpoint attracts messages published to a topic for which the Topic Endpoint has a matching topic subscription. The topic subscription for the Topic Endpoint is specified in the client request to bind a Flow to that Topic Endpoint. Queues are significantly more flexible than Topic Endpoints and are the recommended approach for most applications. The use of Topic Endpoints should be restricted to JMS applications.   Attribute|Identifying|Deprecated :---|:---:|:---: msgVpnName|x| topicEndpointName|x| virtualRouter||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.12.
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

}