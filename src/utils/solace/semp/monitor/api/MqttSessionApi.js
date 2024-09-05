import {ApiClient} from "../ApiClient";
import {MsgVpnMqttSessionResponseModel} from '../model/MsgVpnMqttSessionResponseModel';
import {MsgVpnMqttSessionSubscriptionResponseModel} from '../model/MsgVpnMqttSessionSubscriptionResponseModel';
import {MsgVpnMqttSessionSubscriptionsResponseModel} from '../model/MsgVpnMqttSessionSubscriptionsResponseModel';
import {MsgVpnMqttSessionsResponseModel} from '../model/MsgVpnMqttSessionsResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* MqttSession service.
* @module api/MqttSessionApi
* @version 2.36
*/
export class MqttSessionApi {

    /**
    * Constructs a new MqttSessionApi. 
    * @alias module:api/MqttSessionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get an MQTT Session object.
     * Get an MQTT Session object.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: counter.mqttConnackErrorTxCount||x counter.mqttConnackTxCount||x counter.mqttConnectRxCount||x counter.mqttDisconnectRxCount||x counter.mqttPubcompTxCount||x counter.mqttPublishQos0RxCount||x counter.mqttPublishQos0TxCount||x counter.mqttPublishQos1RxCount||x counter.mqttPublishQos1TxCount||x counter.mqttPublishQos2RxCount||x counter.mqttPubrecTxCount||x counter.mqttPubrelRxCount||x mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
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
     * Get an MQTT Session object.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: counter.mqttConnackErrorTxCount||x counter.mqttConnackTxCount||x counter.mqttConnectRxCount||x counter.mqttDisconnectRxCount||x counter.mqttPubcompTxCount||x counter.mqttPublishQos0RxCount||x counter.mqttPublishQos0TxCount||x counter.mqttPublishQos1RxCount||x counter.mqttPublishQos1TxCount||x counter.mqttPublishQos2RxCount||x counter.mqttPubrecTxCount||x counter.mqttPubrelRxCount||x mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
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
     * Get a Subscription object.
     * Get a Subscription object.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x| subscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {String} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel} and HTTP response
     */
    getMsgVpnMqttSessionSubscriptionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling getMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling getMsgVpnMqttSessionSubscription");
      }
      // verify the required parameter 'subscriptionTopic' is set
      if (subscriptionTopic === undefined || subscriptionTopic === null) {
        throw new Error("Missing the required parameter 'subscriptionTopic' when calling getMsgVpnMqttSessionSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter,'subscriptionTopic': subscriptionTopic
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
      let returnType = MsgVpnMqttSessionSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions/{subscriptionTopic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Subscription object.
     * Get a Subscription object.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x| subscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {<&vendorExtensions.x-jsdoc-type>} subscriptionTopic The MQTT subscription topic.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionResponseModel}
     */
    getMsgVpnMqttSessionSubscription(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts) {
      return this.getMsgVpnMqttSessionSubscriptionWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, subscriptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Subscription objects.
     * Get a list of Subscription objects.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x| subscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {String} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnMqttSessionSubscriptionsResponseModel} and HTTP response
     */
    getMsgVpnMqttSessionSubscriptionsWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnMqttSessionSubscriptions");
      }
      // verify the required parameter 'mqttSessionClientId' is set
      if (mqttSessionClientId === undefined || mqttSessionClientId === null) {
        throw new Error("Missing the required parameter 'mqttSessionClientId' when calling getMsgVpnMqttSessionSubscriptions");
      }
      // verify the required parameter 'mqttSessionVirtualRouter' is set
      if (mqttSessionVirtualRouter === undefined || mqttSessionVirtualRouter === null) {
        throw new Error("Missing the required parameter 'mqttSessionVirtualRouter' when calling getMsgVpnMqttSessionSubscriptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'mqttSessionClientId': mqttSessionClientId,'mqttSessionVirtualRouter': mqttSessionVirtualRouter
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
      let returnType = MsgVpnMqttSessionSubscriptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/mqttSessions/{mqttSessionClientId},{mqttSessionVirtualRouter}/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Subscription objects.
     * Get a list of Subscription objects.  An MQTT session contains a client&#x27;s QoS 0 and QoS 1 subscription sets. On creation, a subscription defaults to QoS 0.   Attribute|Identifying|Deprecated :---|:---:|:---: mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x| subscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionClientId The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
     * @param {<&vendorExtensions.x-jsdoc-type>} mqttSessionVirtualRouter The virtual router of the MQTT Session.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnMqttSessionSubscriptionsResponseModel}
     */
    getMsgVpnMqttSessionSubscriptions(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts) {
      return this.getMsgVpnMqttSessionSubscriptionsWithHttpInfo(msgVpnName, mqttSessionClientId, mqttSessionVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of MQTT Session objects.
     * Get a list of MQTT Session objects.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: counter.mqttConnackErrorTxCount||x counter.mqttConnackTxCount||x counter.mqttConnectRxCount||x counter.mqttDisconnectRxCount||x counter.mqttPubcompTxCount||x counter.mqttPublishQos0RxCount||x counter.mqttPublishQos0TxCount||x counter.mqttPublishQos1RxCount||x counter.mqttPublishQos1TxCount||x counter.mqttPublishQos2RxCount||x counter.mqttPubrecTxCount||x counter.mqttPubrelRxCount||x mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
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
     * Get a list of MQTT Session objects.  An MQTT Session object is a virtual representation of an MQTT client connection. An MQTT session holds the state of an MQTT client (that is, it is used to contain a client&#x27;s QoS 0 and QoS 1 subscription sets and any undelivered QoS 1 messages).   Attribute|Identifying|Deprecated :---|:---:|:---: counter.mqttConnackErrorTxCount||x counter.mqttConnackTxCount||x counter.mqttConnectRxCount||x counter.mqttDisconnectRxCount||x counter.mqttPubcompTxCount||x counter.mqttPublishQos0RxCount||x counter.mqttPublishQos0TxCount||x counter.mqttPublishQos1RxCount||x counter.mqttPublishQos1TxCount||x counter.mqttPublishQos2RxCount||x counter.mqttPubrecTxCount||x counter.mqttPubrelRxCount||x mqttSessionClientId|x| mqttSessionVirtualRouter|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
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

}