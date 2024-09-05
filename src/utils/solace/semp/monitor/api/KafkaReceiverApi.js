import {ApiClient} from "../ApiClient";
import {MsgVpnKafkaReceiverRemoteBrokerResponseModel} from '../model/MsgVpnKafkaReceiverRemoteBrokerResponseModel';
import {MsgVpnKafkaReceiverRemoteBrokersResponseModel} from '../model/MsgVpnKafkaReceiverRemoteBrokersResponseModel';
import {MsgVpnKafkaReceiverResponseModel} from '../model/MsgVpnKafkaReceiverResponseModel';
import {MsgVpnKafkaReceiverTopicBindingResponseModel} from '../model/MsgVpnKafkaReceiverTopicBindingResponseModel';
import {MsgVpnKafkaReceiverTopicBindingsResponseModel} from '../model/MsgVpnKafkaReceiverTopicBindingsResponseModel';
import {MsgVpnKafkaReceiversResponseModel} from '../model/MsgVpnKafkaReceiversResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* KafkaReceiver service.
* @module api/KafkaReceiverApi
* @version 2.36
*/
export class KafkaReceiverApi {

    /**
    * Constructs a new KafkaReceiverApi. 
    * @alias module:api/KafkaReceiverApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
     * Get a Remote Kafka Brokers object.
     * Get a Remote Kafka Brokers object.  A remote Kafka broker used by the Kafka Receiver.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaReceiverName The name of the Kafka Receiver.
     * @param {String} remoteBroker The Kafka remote broker name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaReceiverRemoteBrokerResponseModel} and HTTP response
     */
    getMsgVpnKafkaReceiverRemoteBrokerWithHttpInfo(msgVpnName, kafkaReceiverName, remoteBroker, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaReceiverRemoteBroker");
      }
      // verify the required parameter 'kafkaReceiverName' is set
      if (kafkaReceiverName === undefined || kafkaReceiverName === null) {
        throw new Error("Missing the required parameter 'kafkaReceiverName' when calling getMsgVpnKafkaReceiverRemoteBroker");
      }
      // verify the required parameter 'remoteBroker' is set
      if (remoteBroker === undefined || remoteBroker === null) {
        throw new Error("Missing the required parameter 'remoteBroker' when calling getMsgVpnKafkaReceiverRemoteBroker");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaReceiverName': kafkaReceiverName,'remoteBroker': remoteBroker
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
      let returnType = MsgVpnKafkaReceiverRemoteBrokerResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers/{kafkaReceiverName}/remoteBrokers/{remoteBroker}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Kafka Brokers object.
     * Get a Remote Kafka Brokers object.  A remote Kafka broker used by the Kafka Receiver.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaReceiverName The name of the Kafka Receiver.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteBroker The Kafka remote broker name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaReceiverRemoteBrokerResponseModel}
     */
    getMsgVpnKafkaReceiverRemoteBroker(msgVpnName, kafkaReceiverName, remoteBroker, opts) {
      return this.getMsgVpnKafkaReceiverRemoteBrokerWithHttpInfo(msgVpnName, kafkaReceiverName, remoteBroker, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Kafka Brokers objects.
     * Get a list of Remote Kafka Brokers objects.  A remote Kafka broker used by the Kafka Receiver.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaReceiverName The name of the Kafka Receiver.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaReceiverRemoteBrokersResponseModel} and HTTP response
     */
    getMsgVpnKafkaReceiverRemoteBrokersWithHttpInfo(msgVpnName, kafkaReceiverName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaReceiverRemoteBrokers");
      }
      // verify the required parameter 'kafkaReceiverName' is set
      if (kafkaReceiverName === undefined || kafkaReceiverName === null) {
        throw new Error("Missing the required parameter 'kafkaReceiverName' when calling getMsgVpnKafkaReceiverRemoteBrokers");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaReceiverName': kafkaReceiverName
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
      let returnType = MsgVpnKafkaReceiverRemoteBrokersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers/{kafkaReceiverName}/remoteBrokers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Kafka Brokers objects.
     * Get a list of Remote Kafka Brokers objects.  A remote Kafka broker used by the Kafka Receiver.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| remoteBroker|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaReceiverName The name of the Kafka Receiver.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaReceiverRemoteBrokersResponseModel}
     */
    getMsgVpnKafkaReceiverRemoteBrokers(msgVpnName, kafkaReceiverName, opts) {
      return this.getMsgVpnKafkaReceiverRemoteBrokersWithHttpInfo(msgVpnName, kafkaReceiverName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Topic Binding object.
     * Get a Topic Binding object.  A Topic Binding receives messages from a remote Kafka Topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| topicName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaReceiverName The name of the Kafka Receiver.
     * @param {String} topicName The name of the Topic.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaReceiverTopicBindingResponseModel} and HTTP response
     */
    getMsgVpnKafkaReceiverTopicBindingWithHttpInfo(msgVpnName, kafkaReceiverName, topicName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaReceiverTopicBinding");
      }
      // verify the required parameter 'kafkaReceiverName' is set
      if (kafkaReceiverName === undefined || kafkaReceiverName === null) {
        throw new Error("Missing the required parameter 'kafkaReceiverName' when calling getMsgVpnKafkaReceiverTopicBinding");
      }
      // verify the required parameter 'topicName' is set
      if (topicName === undefined || topicName === null) {
        throw new Error("Missing the required parameter 'topicName' when calling getMsgVpnKafkaReceiverTopicBinding");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaReceiverName': kafkaReceiverName,'topicName': topicName
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
      let returnType = MsgVpnKafkaReceiverTopicBindingResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers/{kafkaReceiverName}/topicBindings/{topicName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic Binding object.
     * Get a Topic Binding object.  A Topic Binding receives messages from a remote Kafka Topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| topicName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaReceiverName The name of the Kafka Receiver.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicName The name of the Topic.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaReceiverTopicBindingResponseModel}
     */
    getMsgVpnKafkaReceiverTopicBinding(msgVpnName, kafkaReceiverName, topicName, opts) {
      return this.getMsgVpnKafkaReceiverTopicBindingWithHttpInfo(msgVpnName, kafkaReceiverName, topicName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic Binding objects.
     * Get a list of Topic Binding objects.  A Topic Binding receives messages from a remote Kafka Topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| topicName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} kafkaReceiverName The name of the Kafka Receiver.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnKafkaReceiverTopicBindingsResponseModel} and HTTP response
     */
    getMsgVpnKafkaReceiverTopicBindingsWithHttpInfo(msgVpnName, kafkaReceiverName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnKafkaReceiverTopicBindings");
      }
      // verify the required parameter 'kafkaReceiverName' is set
      if (kafkaReceiverName === undefined || kafkaReceiverName === null) {
        throw new Error("Missing the required parameter 'kafkaReceiverName' when calling getMsgVpnKafkaReceiverTopicBindings");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'kafkaReceiverName': kafkaReceiverName
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
      let returnType = MsgVpnKafkaReceiverTopicBindingsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/kafkaReceivers/{kafkaReceiverName}/topicBindings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic Binding objects.
     * Get a list of Topic Binding objects.  A Topic Binding receives messages from a remote Kafka Topic.   Attribute|Identifying|Deprecated :---|:---:|:---: kafkaReceiverName|x| msgVpnName|x| topicName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.36.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} kafkaReceiverName The name of the Kafka Receiver.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnKafkaReceiverTopicBindingsResponseModel}
     */
    getMsgVpnKafkaReceiverTopicBindings(msgVpnName, kafkaReceiverName, opts) {
      return this.getMsgVpnKafkaReceiverTopicBindingsWithHttpInfo(msgVpnName, kafkaReceiverName, opts)
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

}