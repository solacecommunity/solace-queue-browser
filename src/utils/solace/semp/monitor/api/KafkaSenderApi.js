import {ApiClient} from "../ApiClient";
import {MsgVpnKafkaSenderQueueBindingResponseModel} from '../model/MsgVpnKafkaSenderQueueBindingResponseModel';
import {MsgVpnKafkaSenderQueueBindingsResponseModel} from '../model/MsgVpnKafkaSenderQueueBindingsResponseModel';
import {MsgVpnKafkaSenderRemoteBrokerResponseModel} from '../model/MsgVpnKafkaSenderRemoteBrokerResponseModel';
import {MsgVpnKafkaSenderRemoteBrokersResponseModel} from '../model/MsgVpnKafkaSenderRemoteBrokersResponseModel';
import {MsgVpnKafkaSenderResponseModel} from '../model/MsgVpnKafkaSenderResponseModel';
import {MsgVpnKafkaSendersResponseModel} from '../model/MsgVpnKafkaSendersResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* KafkaSender service.
* @module api/KafkaSenderApi
* @version 2.36
*/
export class KafkaSenderApi {

    /**
    * Constructs a new KafkaSenderApi. 
    * @alias module:api/KafkaSenderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
     * Get a Queue Binding object.
     * Get a Queue Binding object.  A Queue Binding sends messages from a local Solace Queue to a remote Kafka topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaSenderName The name of the Kafka Sender.
     * @param {String} queueName The name of the Queue.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaSenderQueueBindingResponseModel} and HTTP response
     */
    getMsgVpnKafkaSenderQueueBindingWithHttpInfo(msgVpnName, kafkaSenderName, queueName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaSenderQueueBinding");
      }
      // verify the required parameter 'kafkaSenderName' is set
      if (kafkaSenderName === undefined || kafkaSenderName === null) {
        throw new Error("Missing the required parameter 'kafkaSenderName' when calling getMsgVpnKafkaSenderQueueBinding");
      }
      // verify the required parameter 'queueName' is set
      if (queueName === undefined || queueName === null) {
        throw new Error("Missing the required parameter 'queueName' when calling getMsgVpnKafkaSenderQueueBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaSenderName': kafkaSenderName,'queueName': queueName
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
      let returnType = MsgVpnKafkaSenderQueueBindingResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders/{kafkaSenderName}/queueBindings/{queueName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Queue Binding object.
     * Get a Queue Binding object.  A Queue Binding sends messages from a local Solace Queue to a remote Kafka topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaSenderName The name of the Kafka Sender.
     * @param {<&vendorExtensions.x-jsdoc-type>} queueName The name of the Queue.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaSenderQueueBindingResponseModel}
     */
    getMsgVpnKafkaSenderQueueBinding(msgVpnName, kafkaSenderName, queueName, opts) {
      return this.getMsgVpnKafkaSenderQueueBindingWithHttpInfo(msgVpnName, kafkaSenderName, queueName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Queue Binding objects.
     * Get a list of Queue Binding objects.  A Queue Binding sends messages from a local Solace Queue to a remote Kafka topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaSenderName The name of the Kafka Sender.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaSenderQueueBindingsResponseModel} and HTTP response
     */
    getMsgVpnKafkaSenderQueueBindingsWithHttpInfo(msgVpnName, kafkaSenderName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaSenderQueueBindings");
      }
      // verify the required parameter 'kafkaSenderName' is set
      if (kafkaSenderName === undefined || kafkaSenderName === null) {
        throw new Error("Missing the required parameter 'kafkaSenderName' when calling getMsgVpnKafkaSenderQueueBindings");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaSenderName': kafkaSenderName
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
      let returnType = MsgVpnKafkaSenderQueueBindingsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders/{kafkaSenderName}/queueBindings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Queue Binding objects.
     * Get a list of Queue Binding objects.  A Queue Binding sends messages from a local Solace Queue to a remote Kafka topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| queueName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaSenderName The name of the Kafka Sender.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaSenderQueueBindingsResponseModel}
     */
    getMsgVpnKafkaSenderQueueBindings(msgVpnName, kafkaSenderName, opts) {
      return this.getMsgVpnKafkaSenderQueueBindingsWithHttpInfo(msgVpnName, kafkaSenderName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Kafka Brokers object.
     * Get a Remote Kafka Brokers object.  A remote Kafka broker used by the Kafka Sender.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaSenderName The name of the Kafka Sender.
     * @param {String} remoteBroker The Kafka remote broker name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaSenderRemoteBrokerResponseModel} and HTTP response
     */
    getMsgVpnKafkaSenderRemoteBrokerWithHttpInfo(msgVpnName, kafkaSenderName, remoteBroker, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaSenderRemoteBroker");
      }
      // verify the required parameter 'kafkaSenderName' is set
      if (kafkaSenderName === undefined || kafkaSenderName === null) {
        throw new Error("Missing the required parameter 'kafkaSenderName' when calling getMsgVpnKafkaSenderRemoteBroker");
      }
      // verify the required parameter 'remoteBroker' is set
      if (remoteBroker === undefined || remoteBroker === null) {
        throw new Error("Missing the required parameter 'remoteBroker' when calling getMsgVpnKafkaSenderRemoteBroker");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaSenderName': kafkaSenderName,'remoteBroker': remoteBroker
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
      let returnType = MsgVpnKafkaSenderRemoteBrokerResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders/{kafkaSenderName}/remoteBrokers/{remoteBroker}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Kafka Brokers object.
     * Get a Remote Kafka Brokers object.  A remote Kafka broker used by the Kafka Sender.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaSenderName The name of the Kafka Sender.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteBroker The Kafka remote broker name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaSenderRemoteBrokerResponseModel}
     */
    getMsgVpnKafkaSenderRemoteBroker(msgVpnName, kafkaSenderName, remoteBroker, opts) {
      return this.getMsgVpnKafkaSenderRemoteBrokerWithHttpInfo(msgVpnName, kafkaSenderName, remoteBroker, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Kafka Brokers objects.
     * Get a list of Remote Kafka Brokers objects.  A remote Kafka broker used by the Kafka Sender.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaSenderName The name of the Kafka Sender.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaSenderRemoteBrokersResponseModel} and HTTP response
     */
    getMsgVpnKafkaSenderRemoteBrokersWithHttpInfo(msgVpnName, kafkaSenderName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaSenderRemoteBrokers");
      }
      // verify the required parameter 'kafkaSenderName' is set
      if (kafkaSenderName === undefined || kafkaSenderName === null) {
        throw new Error("Missing the required parameter 'kafkaSenderName' when calling getMsgVpnKafkaSenderRemoteBrokers");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaSenderName': kafkaSenderName
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
      let returnType = MsgVpnKafkaSenderRemoteBrokersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaSenders/{kafkaSenderName}/remoteBrokers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Kafka Brokers objects.
     * Get a list of Remote Kafka Brokers objects.  A remote Kafka broker used by the Kafka Sender.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaSenderName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaSenderName The name of the Kafka Sender.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaSenderRemoteBrokersResponseModel}
     */
    getMsgVpnKafkaSenderRemoteBrokers(msgVpnName, kafkaSenderName, opts) {
      return this.getMsgVpnKafkaSenderRemoteBrokersWithHttpInfo(msgVpnName, kafkaSenderName, opts)
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

}