import {ApiClient} from "../ApiClient";
import {MsgVpnBridgeLocalSubscriptionResponseModel} from '../model/MsgVpnBridgeLocalSubscriptionResponseModel';
import {MsgVpnBridgeLocalSubscriptionsResponseModel} from '../model/MsgVpnBridgeLocalSubscriptionsResponseModel';
import {MsgVpnBridgeRemoteMsgVpnResponseModel} from '../model/MsgVpnBridgeRemoteMsgVpnResponseModel';
import {MsgVpnBridgeRemoteMsgVpnsResponseModel} from '../model/MsgVpnBridgeRemoteMsgVpnsResponseModel';
import {MsgVpnBridgeRemoteSubscriptionResponseModel} from '../model/MsgVpnBridgeRemoteSubscriptionResponseModel';
import {MsgVpnBridgeRemoteSubscriptionsResponseModel} from '../model/MsgVpnBridgeRemoteSubscriptionsResponseModel';
import {MsgVpnBridgeResponseModel} from '../model/MsgVpnBridgeResponseModel';
import {MsgVpnBridgeTlsTrustedCommonNameResponseModel} from '../model/MsgVpnBridgeTlsTrustedCommonNameResponseModel';
import {MsgVpnBridgeTlsTrustedCommonNamesResponseModel} from '../model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel';
import {MsgVpnBridgesResponseModel} from '../model/MsgVpnBridgesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* Bridge service.
* @module api/BridgeApi
* @version 2.36
*/
export class BridgeApi {

    /**
    * Constructs a new BridgeApi. 
    * @alias module:api/BridgeApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Bridge object.
     * Get a Bridge object.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| counter.controlRxByteCount||x counter.controlRxMsgCount||x counter.controlTxByteCount||x counter.controlTxMsgCount||x counter.dataRxByteCount||x counter.dataRxMsgCount||x counter.dataTxByteCount||x counter.dataTxMsgCount||x counter.discardedRxMsgCount||x counter.discardedTxMsgCount||x counter.loginRxMsgCount||x counter.loginTxMsgCount||x counter.msgSpoolRxMsgCount||x counter.rxByteCount||x counter.rxMsgCount||x counter.txByteCount||x counter.txMsgCount||x msgVpnName|x| rate.averageRxByteRate||x rate.averageRxMsgRate||x rate.averageTxByteRate||x rate.averageTxMsgRate||x rate.rxByteRate||x rate.rxMsgRate||x rate.txByteRate||x rate.txMsgRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
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
     * Get a Bridge object.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| counter.controlRxByteCount||x counter.controlRxMsgCount||x counter.controlTxByteCount||x counter.controlTxMsgCount||x counter.dataRxByteCount||x counter.dataRxMsgCount||x counter.dataTxByteCount||x counter.dataTxMsgCount||x counter.discardedRxMsgCount||x counter.discardedTxMsgCount||x counter.loginRxMsgCount||x counter.loginTxMsgCount||x counter.msgSpoolRxMsgCount||x counter.rxByteCount||x counter.rxMsgCount||x counter.txByteCount||x counter.txMsgCount||x msgVpnName|x| rate.averageRxByteRate||x rate.averageRxMsgRate||x rate.averageTxByteRate||x rate.averageTxMsgRate||x rate.rxByteRate||x rate.rxMsgRate||x rate.txByteRate||x rate.txMsgRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
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
     * Get a Bridge Local Subscriptions object.
     * Get a Bridge Local Subscriptions object.  A Local Subscription is a topic subscription used by a remote Message VPN Bridge to attract messages from this broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| localSubscriptionTopic|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {String} localSubscriptionTopic The topic of the Bridge local subscription.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeLocalSubscriptionResponseModel} and HTTP response
     */
    getMsgVpnBridgeLocalSubscriptionWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, localSubscriptionTopic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeLocalSubscription");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeLocalSubscription");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeLocalSubscription");
      }
      // verify the required parameter 'localSubscriptionTopic' is set
      if (localSubscriptionTopic === undefined || localSubscriptionTopic === null) {
        throw new Error("Missing the required parameter 'localSubscriptionTopic' when calling getMsgVpnBridgeLocalSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter,'localSubscriptionTopic': localSubscriptionTopic
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
      let returnType = MsgVpnBridgeLocalSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/localSubscriptions/{localSubscriptionTopic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Bridge Local Subscriptions object.
     * Get a Bridge Local Subscriptions object.  A Local Subscription is a topic subscription used by a remote Message VPN Bridge to attract messages from this broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| localSubscriptionTopic|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} localSubscriptionTopic The topic of the Bridge local subscription.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeLocalSubscriptionResponseModel}
     */
    getMsgVpnBridgeLocalSubscription(msgVpnName, bridgeName, bridgeVirtualRouter, localSubscriptionTopic, opts) {
      return this.getMsgVpnBridgeLocalSubscriptionWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, localSubscriptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Bridge Local Subscriptions objects.
     * Get a list of Bridge Local Subscriptions objects.  A Local Subscription is a topic subscription used by a remote Message VPN Bridge to attract messages from this broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| localSubscriptionTopic|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeLocalSubscriptionsResponseModel} and HTTP response
     */
    getMsgVpnBridgeLocalSubscriptionsWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeLocalSubscriptions");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeLocalSubscriptions");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeLocalSubscriptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
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
      let returnType = MsgVpnBridgeLocalSubscriptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/localSubscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Bridge Local Subscriptions objects.
     * Get a list of Bridge Local Subscriptions objects.  A Local Subscription is a topic subscription used by a remote Message VPN Bridge to attract messages from this broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| localSubscriptionTopic|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeLocalSubscriptionsResponseModel}
     */
    getMsgVpnBridgeLocalSubscriptions(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      return this.getMsgVpnBridgeLocalSubscriptionsWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Message VPN object.
     * Get a Remote Message VPN object.  The Remote Message VPN is the Message VPN that the Bridge connects to.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteMsgVpnInterface|x| remoteMsgVpnLocation|x| remoteMsgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {String} remoteMsgVpnName The name of the remote Message VPN.
     * @param {String} remoteMsgVpnLocation The location of the remote Message VPN as either an FQDN with port, IP address with port, or virtual router name (starting with \&quot;v:\&quot;).
     * @param {String} remoteMsgVpnInterface The physical interface on the local Message VPN host for connecting to the remote Message VPN. By default, an interface is chosen automatically (recommended), but if specified, &#x60;remoteMsgVpnLocation&#x60; must not be a virtual router name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeRemoteMsgVpnResponseModel} and HTTP response
     */
    getMsgVpnBridgeRemoteMsgVpnWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, remoteMsgVpnName, remoteMsgVpnLocation, remoteMsgVpnInterface, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeRemoteMsgVpn");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeRemoteMsgVpn");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeRemoteMsgVpn");
      }
      // verify the required parameter 'remoteMsgVpnName' is set
      if (remoteMsgVpnName === undefined || remoteMsgVpnName === null) {
        throw new Error("Missing the required parameter 'remoteMsgVpnName' when calling getMsgVpnBridgeRemoteMsgVpn");
      }
      // verify the required parameter 'remoteMsgVpnLocation' is set
      if (remoteMsgVpnLocation === undefined || remoteMsgVpnLocation === null) {
        throw new Error("Missing the required parameter 'remoteMsgVpnLocation' when calling getMsgVpnBridgeRemoteMsgVpn");
      }
      // verify the required parameter 'remoteMsgVpnInterface' is set
      if (remoteMsgVpnInterface === undefined || remoteMsgVpnInterface === null) {
        throw new Error("Missing the required parameter 'remoteMsgVpnInterface' when calling getMsgVpnBridgeRemoteMsgVpn");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter,'remoteMsgVpnName': remoteMsgVpnName,'remoteMsgVpnLocation': remoteMsgVpnLocation,'remoteMsgVpnInterface': remoteMsgVpnInterface
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
      let returnType = MsgVpnBridgeRemoteMsgVpnResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/remoteMsgVpns/{remoteMsgVpnName},{remoteMsgVpnLocation},{remoteMsgVpnInterface}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Message VPN object.
     * Get a Remote Message VPN object.  The Remote Message VPN is the Message VPN that the Bridge connects to.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteMsgVpnInterface|x| remoteMsgVpnLocation|x| remoteMsgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteMsgVpnName The name of the remote Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteMsgVpnLocation The location of the remote Message VPN as either an FQDN with port, IP address with port, or virtual router name (starting with \&quot;v:\&quot;).
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteMsgVpnInterface The physical interface on the local Message VPN host for connecting to the remote Message VPN. By default, an interface is chosen automatically (recommended), but if specified, &#x60;remoteMsgVpnLocation&#x60; must not be a virtual router name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeRemoteMsgVpnResponseModel}
     */
    getMsgVpnBridgeRemoteMsgVpn(msgVpnName, bridgeName, bridgeVirtualRouter, remoteMsgVpnName, remoteMsgVpnLocation, remoteMsgVpnInterface, opts) {
      return this.getMsgVpnBridgeRemoteMsgVpnWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, remoteMsgVpnName, remoteMsgVpnLocation, remoteMsgVpnInterface, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Message VPN objects.
     * Get a list of Remote Message VPN objects.  The Remote Message VPN is the Message VPN that the Bridge connects to.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteMsgVpnInterface|x| remoteMsgVpnLocation|x| remoteMsgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeRemoteMsgVpnsResponseModel} and HTTP response
     */
    getMsgVpnBridgeRemoteMsgVpnsWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeRemoteMsgVpns");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeRemoteMsgVpns");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeRemoteMsgVpns");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
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
      let returnType = MsgVpnBridgeRemoteMsgVpnsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/remoteMsgVpns', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Message VPN objects.
     * Get a list of Remote Message VPN objects.  The Remote Message VPN is the Message VPN that the Bridge connects to.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteMsgVpnInterface|x| remoteMsgVpnLocation|x| remoteMsgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeRemoteMsgVpnsResponseModel}
     */
    getMsgVpnBridgeRemoteMsgVpns(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      return this.getMsgVpnBridgeRemoteMsgVpnsWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Subscription object.
     * Get a Remote Subscription object.  A Remote Subscription is a topic subscription used by the Message VPN Bridge to attract messages from the remote message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteSubscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {String} remoteSubscriptionTopic The topic of the Bridge remote subscription.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeRemoteSubscriptionResponseModel} and HTTP response
     */
    getMsgVpnBridgeRemoteSubscriptionWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, remoteSubscriptionTopic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeRemoteSubscription");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeRemoteSubscription");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeRemoteSubscription");
      }
      // verify the required parameter 'remoteSubscriptionTopic' is set
      if (remoteSubscriptionTopic === undefined || remoteSubscriptionTopic === null) {
        throw new Error("Missing the required parameter 'remoteSubscriptionTopic' when calling getMsgVpnBridgeRemoteSubscription");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter,'remoteSubscriptionTopic': remoteSubscriptionTopic
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
      let returnType = MsgVpnBridgeRemoteSubscriptionResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/remoteSubscriptions/{remoteSubscriptionTopic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Subscription object.
     * Get a Remote Subscription object.  A Remote Subscription is a topic subscription used by the Message VPN Bridge to attract messages from the remote message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteSubscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} remoteSubscriptionTopic The topic of the Bridge remote subscription.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeRemoteSubscriptionResponseModel}
     */
    getMsgVpnBridgeRemoteSubscription(msgVpnName, bridgeName, bridgeVirtualRouter, remoteSubscriptionTopic, opts) {
      return this.getMsgVpnBridgeRemoteSubscriptionWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, remoteSubscriptionTopic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Subscription objects.
     * Get a list of Remote Subscription objects.  A Remote Subscription is a topic subscription used by the Message VPN Bridge to attract messages from the remote message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteSubscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeRemoteSubscriptionsResponseModel} and HTTP response
     */
    getMsgVpnBridgeRemoteSubscriptionsWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeRemoteSubscriptions");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeRemoteSubscriptions");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeRemoteSubscriptions");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
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
      let returnType = MsgVpnBridgeRemoteSubscriptionsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/remoteSubscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Subscription objects.
     * Get a list of Remote Subscription objects.  A Remote Subscription is a topic subscription used by the Message VPN Bridge to attract messages from the remote message broker.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| msgVpnName|x| remoteSubscriptionTopic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeRemoteSubscriptionsResponseModel}
     */
    getMsgVpnBridgeRemoteSubscriptions(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      return this.getMsgVpnBridgeRemoteSubscriptionsWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the Bridge are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x|x bridgeVirtualRouter|x|x msgVpnName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {String} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeTlsTrustedCommonNameResponseModel} and HTTP response
     */
    getMsgVpnBridgeTlsTrustedCommonNameWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, tlsTrustedCommonName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeTlsTrustedCommonName");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeTlsTrustedCommonName");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeTlsTrustedCommonName");
      }
      // verify the required parameter 'tlsTrustedCommonName' is set
      if (tlsTrustedCommonName === undefined || tlsTrustedCommonName === null) {
        throw new Error("Missing the required parameter 'tlsTrustedCommonName' when calling getMsgVpnBridgeTlsTrustedCommonName");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter,'tlsTrustedCommonName': tlsTrustedCommonName
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
      let returnType = MsgVpnBridgeTlsTrustedCommonNameResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/tlsTrustedCommonNames/{tlsTrustedCommonName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Trusted Common Name object.
     * Get a Trusted Common Name object.  The Trusted Common Names for the Bridge are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x|x bridgeVirtualRouter|x|x msgVpnName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} tlsTrustedCommonName The expected trusted common name of the remote certificate.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeTlsTrustedCommonNameResponseModel}
     */
    getMsgVpnBridgeTlsTrustedCommonName(msgVpnName, bridgeName, bridgeVirtualRouter, tlsTrustedCommonName, opts) {
      return this.getMsgVpnBridgeTlsTrustedCommonNameWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, tlsTrustedCommonName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the Bridge are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x|x bridgeVirtualRouter|x|x msgVpnName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} bridgeName The name of the Bridge.
     * @param {String} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel} and HTTP response
     */
    getMsgVpnBridgeTlsTrustedCommonNamesWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnBridgeTlsTrustedCommonNames");
      }
      // verify the required parameter 'bridgeName' is set
      if (bridgeName === undefined || bridgeName === null) {
        throw new Error("Missing the required parameter 'bridgeName' when calling getMsgVpnBridgeTlsTrustedCommonNames");
      }
      // verify the required parameter 'bridgeVirtualRouter' is set
      if (bridgeVirtualRouter === undefined || bridgeVirtualRouter === null) {
        throw new Error("Missing the required parameter 'bridgeVirtualRouter' when calling getMsgVpnBridgeTlsTrustedCommonNames");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'bridgeName': bridgeName,'bridgeVirtualRouter': bridgeVirtualRouter
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
      let returnType = MsgVpnBridgeTlsTrustedCommonNamesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/bridges/{bridgeName},{bridgeVirtualRouter}/tlsTrustedCommonNames', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Trusted Common Name objects.
     * Get a list of Trusted Common Name objects.  The Trusted Common Names for the Bridge are used by encrypted transports to verify the name in the certificate presented by the remote node. They must include the common name of the remote node&#x27;s server certificate or client certificate, depending upon the initiator of the connection.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x|x bridgeVirtualRouter|x|x msgVpnName|x|x tlsTrustedCommonName|x|x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeName The name of the Bridge.
     * @param {<&vendorExtensions.x-jsdoc-type>} bridgeVirtualRouter The virtual router of the Bridge.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel}
     */
    getMsgVpnBridgeTlsTrustedCommonNames(msgVpnName, bridgeName, bridgeVirtualRouter, opts) {
      return this.getMsgVpnBridgeTlsTrustedCommonNamesWithHttpInfo(msgVpnName, bridgeName, bridgeVirtualRouter, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Bridge objects.
     * Get a list of Bridge objects.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| counter.controlRxByteCount||x counter.controlRxMsgCount||x counter.controlTxByteCount||x counter.controlTxMsgCount||x counter.dataRxByteCount||x counter.dataRxMsgCount||x counter.dataTxByteCount||x counter.dataTxMsgCount||x counter.discardedRxMsgCount||x counter.discardedTxMsgCount||x counter.loginRxMsgCount||x counter.loginTxMsgCount||x counter.msgSpoolRxMsgCount||x counter.rxByteCount||x counter.rxMsgCount||x counter.txByteCount||x counter.txMsgCount||x msgVpnName|x| rate.averageRxByteRate||x rate.averageRxMsgRate||x rate.averageTxByteRate||x rate.averageTxMsgRate||x rate.rxByteRate||x rate.rxMsgRate||x rate.txByteRate||x rate.txMsgRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
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
     * Get a list of Bridge objects.  Bridges can be used to link two Message VPNs so that messages published to one Message VPN that match the topic subscriptions set for the bridge are also delivered to the linked Message VPN.   Attribute|Identifying|Deprecated :---|:---:|:---: bridgeName|x| bridgeVirtualRouter|x| counter.controlRxByteCount||x counter.controlRxMsgCount||x counter.controlTxByteCount||x counter.controlTxMsgCount||x counter.dataRxByteCount||x counter.dataRxMsgCount||x counter.dataTxByteCount||x counter.dataTxMsgCount||x counter.discardedRxMsgCount||x counter.discardedTxMsgCount||x counter.loginRxMsgCount||x counter.loginTxMsgCount||x counter.msgSpoolRxMsgCount||x counter.rxByteCount||x counter.rxMsgCount||x counter.txByteCount||x counter.txMsgCount||x msgVpnName|x| rate.averageRxByteRate||x rate.averageRxMsgRate||x rate.averageTxByteRate||x rate.averageTxMsgRate||x rate.rxByteRate||x rate.rxMsgRate||x rate.txByteRate||x rate.txMsgRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
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

}