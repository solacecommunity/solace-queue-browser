import {ApiClient} from "../ApiClient";
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel} from '../model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel} from '../model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel} from '../model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel} from '../model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel} from '../model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel} from '../model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel} from '../model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel} from '../model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel';
import {MsgVpnDistributedCacheClusterInstanceResponseModel} from '../model/MsgVpnDistributedCacheClusterInstanceResponseModel';
import {MsgVpnDistributedCacheClusterInstancesResponseModel} from '../model/MsgVpnDistributedCacheClusterInstancesResponseModel';
import {MsgVpnDistributedCacheClusterResponseModel} from '../model/MsgVpnDistributedCacheClusterResponseModel';
import {MsgVpnDistributedCacheClusterTopicResponseModel} from '../model/MsgVpnDistributedCacheClusterTopicResponseModel';
import {MsgVpnDistributedCacheClusterTopicsResponseModel} from '../model/MsgVpnDistributedCacheClusterTopicsResponseModel';
import {MsgVpnDistributedCacheClustersResponseModel} from '../model/MsgVpnDistributedCacheClustersResponseModel';
import {MsgVpnDistributedCacheResponseModel} from '../model/MsgVpnDistributedCacheResponseModel';
import {MsgVpnDistributedCachesResponseModel} from '../model/MsgVpnDistributedCachesResponseModel';
import {SempMetaOnlyResponseModel} from '../model/SempMetaOnlyResponseModel';

/**
* DistributedCache service.
* @module api/DistributedCacheApi
* @version 2.36
*/
export class DistributedCacheApi {

    /**
    * Constructs a new DistributedCacheApi. 
    * @alias module:api/DistributedCacheApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get a Distributed Cache object.
     * Get a Distributed Cache object.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheWithHttpInfo(msgVpnName, cacheName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCache");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCache");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName
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
      let returnType = MsgVpnDistributedCacheResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Distributed Cache object.
     * Get a Distributed Cache object.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheResponseModel}
     */
    getMsgVpnDistributedCache(msgVpnName, cacheName, opts) {
      return this.getMsgVpnDistributedCacheWithHttpInfo(msgVpnName, cacheName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cache Cluster object.
     * Get a Cache Cluster object.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterWithHttpInfo(msgVpnName, cacheName, clusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheCluster");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheCluster");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheCluster");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName
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
      let returnType = MsgVpnDistributedCacheClusterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cache Cluster object.
     * Get a Cache Cluster object.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterResponseModel}
     */
    getMsgVpnDistributedCacheCluster(msgVpnName, cacheName, clusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterWithHttpInfo(msgVpnName, cacheName, clusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Home Cache Cluster object.
     * Get a Home Cache Cluster object.  A Home Cache Cluster is a Cache Cluster that is the \&quot;definitive\&quot; Cache Cluster for a given topic in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} homeClusterName The name of the remote Home Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterWithHttpInfo(msgVpnName, cacheName, clusterName, homeClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeCluster");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeCluster");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeCluster");
      }
      // verify the required parameter 'homeClusterName' is set
      if (homeClusterName === undefined || homeClusterName === null) {
        throw new Error("Missing the required parameter 'homeClusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeCluster");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'homeClusterName': homeClusterName
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
      let returnType = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/globalCachingHomeClusters/{homeClusterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Home Cache Cluster object.
     * Get a Home Cache Cluster object.  A Home Cache Cluster is a Cache Cluster that is the \&quot;definitive\&quot; Cache Cluster for a given topic in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} homeClusterName The name of the remote Home Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel}
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeCluster(msgVpnName, cacheName, clusterName, homeClusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterWithHttpInfo(msgVpnName, cacheName, clusterName, homeClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Topic Prefix object.
     * Get a Topic Prefix object.  A Topic Prefix is a prefix for a global topic that is available from the containing Home Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x| topicPrefix|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} homeClusterName The name of the remote Home Cache Cluster.
     * @param {String} topicPrefix A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/&gt;) is implied at the end of the prefix.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixWithHttpInfo(msgVpnName, cacheName, clusterName, homeClusterName, topicPrefix, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix");
      }
      // verify the required parameter 'homeClusterName' is set
      if (homeClusterName === undefined || homeClusterName === null) {
        throw new Error("Missing the required parameter 'homeClusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix");
      }
      // verify the required parameter 'topicPrefix' is set
      if (topicPrefix === undefined || topicPrefix === null) {
        throw new Error("Missing the required parameter 'topicPrefix' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'homeClusterName': homeClusterName,'topicPrefix': topicPrefix
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
      let returnType = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/globalCachingHomeClusters/{homeClusterName}/topicPrefixes/{topicPrefix}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic Prefix object.
     * Get a Topic Prefix object.  A Topic Prefix is a prefix for a global topic that is available from the containing Home Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x| topicPrefix|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} homeClusterName The name of the remote Home Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} topicPrefix A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/&gt;) is implied at the end of the prefix.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel}
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefix(msgVpnName, cacheName, clusterName, homeClusterName, topicPrefix, opts) {
      return this.getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixWithHttpInfo(msgVpnName, cacheName, clusterName, homeClusterName, topicPrefix, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic Prefix objects.
     * Get a list of Topic Prefix objects.  A Topic Prefix is a prefix for a global topic that is available from the containing Home Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x| topicPrefix|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} homeClusterName The name of the remote Home Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesWithHttpInfo(msgVpnName, cacheName, clusterName, homeClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixes");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixes");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixes");
      }
      // verify the required parameter 'homeClusterName' is set
      if (homeClusterName === undefined || homeClusterName === null) {
        throw new Error("Missing the required parameter 'homeClusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixes");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'homeClusterName': homeClusterName
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
      let returnType = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/globalCachingHomeClusters/{homeClusterName}/topicPrefixes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic Prefix objects.
     * Get a list of Topic Prefix objects.  A Topic Prefix is a prefix for a global topic that is available from the containing Home Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x| topicPrefix|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} homeClusterName The name of the remote Home Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel}
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixes(msgVpnName, cacheName, clusterName, homeClusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesWithHttpInfo(msgVpnName, cacheName, clusterName, homeClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Home Cache Cluster objects.
     * Get a list of Home Cache Cluster objects.  A Home Cache Cluster is a Cache Cluster that is the \&quot;definitive\&quot; Cache Cluster for a given topic in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClustersWithHttpInfo(msgVpnName, cacheName, clusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusters");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusters");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterGlobalCachingHomeClusters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName
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
      let returnType = MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/globalCachingHomeClusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Home Cache Cluster objects.
     * Get a list of Home Cache Cluster objects.  A Home Cache Cluster is a Cache Cluster that is the \&quot;definitive\&quot; Cache Cluster for a given topic in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel}
     */
    getMsgVpnDistributedCacheClusterGlobalCachingHomeClusters(msgVpnName, cacheName, clusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterGlobalCachingHomeClustersWithHttpInfo(msgVpnName, cacheName, clusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Cache Instance object.
     * Get a Cache Instance object.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| counter.msgCount||x counter.msgPeakCount||x counter.requestQueueDepthCount||x counter.requestQueueDepthPeakCount||x counter.topicCount||x counter.topicPeakCount||x instanceName|x| msgVpnName|x| rate.averageDataRxBytePeakRate||x rate.averageDataRxByteRate||x rate.averageDataRxMsgPeakRate||x rate.averageDataRxMsgRate||x rate.averageDataTxMsgPeakRate||x rate.averageDataTxMsgRate||x rate.averageRequestRxPeakRate||x rate.averageRequestRxRate||x rate.dataRxBytePeakRate||x rate.dataRxByteRate||x rate.dataRxMsgPeakRate||x rate.dataRxMsgRate||x rate.dataTxMsgPeakRate||x rate.dataTxMsgRate||x rate.requestRxPeakRate||x rate.requestRxRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstanceWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstance");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstance");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstance");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling getMsgVpnDistributedCacheClusterInstance");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
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
      let returnType = MsgVpnDistributedCacheClusterInstanceResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Cache Instance object.
     * Get a Cache Instance object.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| counter.msgCount||x counter.msgPeakCount||x counter.requestQueueDepthCount||x counter.requestQueueDepthPeakCount||x counter.topicCount||x counter.topicPeakCount||x instanceName|x| msgVpnName|x| rate.averageDataRxBytePeakRate||x rate.averageDataRxByteRate||x rate.averageDataRxMsgPeakRate||x rate.averageDataRxMsgRate||x rate.averageDataTxMsgPeakRate||x rate.averageDataTxMsgRate||x rate.averageRequestRxPeakRate||x rate.averageRequestRxRate||x rate.dataRxBytePeakRate||x rate.dataRxByteRate||x rate.dataRxMsgPeakRate||x rate.dataRxMsgRate||x rate.dataTxMsgPeakRate||x rate.dataTxMsgRate||x rate.requestRxPeakRate||x rate.requestRxRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstance(msgVpnName, cacheName, clusterName, instanceName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstanceWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Home Cache Cluster object.
     * Get a Remote Home Cache Cluster object.  A Remote Home Cache Cluster is a Home Cache Cluster that the Cache Instance is communicating with in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @param {String} homeClusterName The name of the remote Home Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, homeClusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeCluster");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeCluster");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeCluster");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeCluster");
      }
      // verify the required parameter 'homeClusterName' is set
      if (homeClusterName === undefined || homeClusterName === null) {
        throw new Error("Missing the required parameter 'homeClusterName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeCluster");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName,'homeClusterName': homeClusterName
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
      let returnType = MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/remoteGlobalCachingHomeClusters/{homeClusterName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Home Cache Cluster object.
     * Get a Remote Home Cache Cluster object.  A Remote Home Cache Cluster is a Home Cache Cluster that the Cache Instance is communicating with in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @param {<&vendorExtensions.x-jsdoc-type>} homeClusterName The name of the remote Home Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeCluster(msgVpnName, cacheName, clusterName, instanceName, homeClusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, homeClusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Home Cache Cluster objects.
     * Get a list of Remote Home Cache Cluster objects.  A Remote Home Cache Cluster is a Home Cache Cluster that the Cache Instance is communicating with in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusters");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusters");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusters");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
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
      let returnType = MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/remoteGlobalCachingHomeClusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Home Cache Cluster objects.
     * Get a list of Remote Home Cache Cluster objects.  A Remote Home Cache Cluster is a Home Cache Cluster that the Cache Instance is communicating with in the context of the Global Caching feature.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| homeClusterName|x| instanceName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusters(msgVpnName, cacheName, clusterName, instanceName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Remote Topic object.
     * Get a Remote Topic object.  A Remote Topic is a topic for which the Cache Instance has cached messages.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @param {String} topic The value of the remote Topic.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteTopicWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, topic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopic");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopic");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopic");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopic");
      }
      // verify the required parameter 'topic' is set
      if (topic === undefined || topic === null) {
        throw new Error("Missing the required parameter 'topic' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopic");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName,'topic': topic
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
      let returnType = MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/remoteTopics/{topic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Remote Topic object.
     * Get a Remote Topic object.  A Remote Topic is a topic for which the Cache Instance has cached messages.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @param {<&vendorExtensions.x-jsdoc-type>} topic The value of the remote Topic.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteTopic(msgVpnName, cacheName, clusterName, instanceName, topic, opts) {
      return this.getMsgVpnDistributedCacheClusterInstanceRemoteTopicWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, topic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Remote Topic objects.
     * Get a list of Remote Topic objects.  A Remote Topic is a topic for which the Cache Instance has cached messages.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteTopicsWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopics");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopics");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopics");
      }
      // verify the required parameter 'instanceName' is set
      if (instanceName === undefined || instanceName === null) {
        throw new Error("Missing the required parameter 'instanceName' when calling getMsgVpnDistributedCacheClusterInstanceRemoteTopics");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'instanceName': instanceName
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
      let returnType = MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances/{instanceName}/remoteTopics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Remote Topic objects.
     * Get a list of Remote Topic objects.  A Remote Topic is a topic for which the Cache Instance has cached messages.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| instanceName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} instanceName The name of the Cache Instance.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstanceRemoteTopics(msgVpnName, cacheName, clusterName, instanceName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstanceRemoteTopicsWithHttpInfo(msgVpnName, cacheName, clusterName, instanceName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cache Instance objects.
     * Get a list of Cache Instance objects.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| counter.msgCount||x counter.msgPeakCount||x counter.requestQueueDepthCount||x counter.requestQueueDepthPeakCount||x counter.topicCount||x counter.topicPeakCount||x instanceName|x| msgVpnName|x| rate.averageDataRxBytePeakRate||x rate.averageDataRxByteRate||x rate.averageDataRxMsgPeakRate||x rate.averageDataRxMsgRate||x rate.averageDataTxMsgPeakRate||x rate.averageDataTxMsgRate||x rate.averageRequestRxPeakRate||x rate.averageRequestRxRate||x rate.dataRxBytePeakRate||x rate.dataRxByteRate||x rate.dataRxMsgPeakRate||x rate.dataRxMsgRate||x rate.dataTxMsgPeakRate||x rate.dataTxMsgRate||x rate.requestRxPeakRate||x rate.requestRxRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterInstancesResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterInstancesWithHttpInfo(msgVpnName, cacheName, clusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterInstances");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterInstances");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterInstances");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName
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
      let returnType = MsgVpnDistributedCacheClusterInstancesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/instances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cache Instance objects.
     * Get a list of Cache Instance objects.  A Cache Instance is a single Cache process that belongs to a single Cache Cluster. A Cache Instance object provisioned on the broker is used to disseminate configuration information to the Cache process. Cache Instances listen for and cache live data messages that match the topic subscriptions configured for their parent Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| counter.msgCount||x counter.msgPeakCount||x counter.requestQueueDepthCount||x counter.requestQueueDepthPeakCount||x counter.topicCount||x counter.topicPeakCount||x instanceName|x| msgVpnName|x| rate.averageDataRxBytePeakRate||x rate.averageDataRxByteRate||x rate.averageDataRxMsgPeakRate||x rate.averageDataRxMsgRate||x rate.averageDataTxMsgPeakRate||x rate.averageDataTxMsgRate||x rate.averageRequestRxPeakRate||x rate.averageRequestRxRate||x rate.dataRxBytePeakRate||x rate.dataRxByteRate||x rate.dataRxMsgPeakRate||x rate.dataRxMsgRate||x rate.dataTxMsgPeakRate||x rate.dataTxMsgRate||x rate.requestRxPeakRate||x rate.requestRxRate||x    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterInstancesResponseModel}
     */
    getMsgVpnDistributedCacheClusterInstances(msgVpnName, cacheName, clusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterInstancesWithHttpInfo(msgVpnName, cacheName, clusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Topic object.
     * Get a Topic object.  The Cache Instances that belong to the containing Cache Cluster will cache any messages published to topics that match a Topic Subscription.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {String} topic The value of the Topic in the form a/b/c.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterTopicResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterTopicWithHttpInfo(msgVpnName, cacheName, clusterName, topic, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterTopic");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterTopic");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterTopic");
      }
      // verify the required parameter 'topic' is set
      if (topic === undefined || topic === null) {
        throw new Error("Missing the required parameter 'topic' when calling getMsgVpnDistributedCacheClusterTopic");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName,'topic': topic
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
      let returnType = MsgVpnDistributedCacheClusterTopicResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/topics/{topic}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Topic object.
     * Get a Topic object.  The Cache Instances that belong to the containing Cache Cluster will cache any messages published to topics that match a Topic Subscription.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {<&vendorExtensions.x-jsdoc-type>} topic The value of the Topic in the form a/b/c.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterTopicResponseModel}
     */
    getMsgVpnDistributedCacheClusterTopic(msgVpnName, cacheName, clusterName, topic, opts) {
      return this.getMsgVpnDistributedCacheClusterTopicWithHttpInfo(msgVpnName, cacheName, clusterName, topic, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Topic objects.
     * Get a list of Topic objects.  The Cache Instances that belong to the containing Cache Cluster will cache any messages published to topics that match a Topic Subscription.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {String} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClusterTopicsResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClusterTopicsWithHttpInfo(msgVpnName, cacheName, clusterName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusterTopics");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusterTopics");
      }
      // verify the required parameter 'clusterName' is set
      if (clusterName === undefined || clusterName === null) {
        throw new Error("Missing the required parameter 'clusterName' when calling getMsgVpnDistributedCacheClusterTopics");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName,'clusterName': clusterName
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
      let returnType = MsgVpnDistributedCacheClusterTopicsResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters/{clusterName}/topics', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Topic objects.
     * Get a list of Topic objects.  The Cache Instances that belong to the containing Cache Cluster will cache any messages published to topics that match a Topic Subscription.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x| topic|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {<&vendorExtensions.x-jsdoc-type>} clusterName The name of the Cache Cluster.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClusterTopicsResponseModel}
     */
    getMsgVpnDistributedCacheClusterTopics(msgVpnName, cacheName, clusterName, opts) {
      return this.getMsgVpnDistributedCacheClusterTopicsWithHttpInfo(msgVpnName, cacheName, clusterName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Cache Cluster objects.
     * Get a list of Cache Cluster objects.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {String} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCacheClustersResponseModel} and HTTP response
     */
    getMsgVpnDistributedCacheClustersWithHttpInfo(msgVpnName, cacheName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCacheClusters");
      }
      // verify the required parameter 'cacheName' is set
      if (cacheName === undefined || cacheName === null) {
        throw new Error("Missing the required parameter 'cacheName' when calling getMsgVpnDistributedCacheClusters");
      }

      let pathParams = {
        'msgVpnName': msgVpnName,'cacheName': cacheName
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
      let returnType = MsgVpnDistributedCacheClustersResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches/{cacheName}/clusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Cache Cluster objects.
     * Get a list of Cache Cluster objects.  A Cache Cluster is a collection of one or more Cache Instances that subscribe to exactly the same topics. Cache Instances are grouped together in a Cache Cluster for the purpose of fault tolerance and load balancing. As published messages are received, the message broker message bus sends these live data messages to the Cache Instances in the Cache Cluster. This enables client cache requests to be served by any of Cache Instances in the Cache Cluster.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| clusterName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {<&vendorExtensions.x-jsdoc-type>} cacheName The name of the Distributed Cache.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCacheClustersResponseModel}
     */
    getMsgVpnDistributedCacheClusters(msgVpnName, cacheName, opts) {
      return this.getMsgVpnDistributedCacheClustersWithHttpInfo(msgVpnName, cacheName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of Distributed Cache objects.
     * Get a list of Distributed Cache objects.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {String} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MsgVpnDistributedCachesResponseModel} and HTTP response
     */
    getMsgVpnDistributedCachesWithHttpInfo(msgVpnName, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'msgVpnName' is set
      if (msgVpnName === undefined || msgVpnName === null) {
        throw new Error("Missing the required parameter 'msgVpnName' when calling getMsgVpnDistributedCaches");
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
      let returnType = MsgVpnDistributedCachesResponseModel;

      return this.apiClient.callApi(
        '/msgVpns/{msgVpnName}/distributedCaches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a list of Distributed Cache objects.
     * Get a list of Distributed Cache objects.  A Distributed Cache is a collection of one or more Cache Clusters that belong to the same Message VPN. Each Cache Cluster in a Distributed Cache is configured to subscribe to a different set of topics. This effectively divides up the configured topic space, to provide scaling to very large topic spaces or very high cached message throughput.   Attribute|Identifying|Deprecated :---|:---:|:---: cacheName|x| msgVpnName|x|    A SEMP client authorized with a minimum access scope/level of \&quot;vpn/read-only\&quot; is required to perform this operation.  The maximum number of objects that can be returned in a single page is 100.  This has been available since 2.11.
     * @param {<&vendorExtensions.x-jsdoc-type>} msgVpnName The name of the Message VPN.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count Limit the count of objects in the response. See the documentation for the &#x60;count&#x60; parameter. (default to <.>)
     * @param {String} opts.cursor The cursor, or position, for the next page of objects. See the documentation for the &#x60;cursor&#x60; parameter.
     * @param {Array.<String>} opts.where Include in the response only objects where certain conditions are true. See the the documentation for the &#x60;where&#x60; parameter.
     * @param {Array.<String>} opts.select Include in the response only selected attributes of the object, or exclude from the response selected attributes of the object. See the documentation for the &#x60;select&#x60; parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MsgVpnDistributedCachesResponseModel}
     */
    getMsgVpnDistributedCaches(msgVpnName, opts) {
      return this.getMsgVpnDistributedCachesWithHttpInfo(msgVpnName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }

}