import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel();
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('homeClusterName'))
        obj.homeClusterName = ApiClient.convertToType(data['homeClusterName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('topicPrefix'))
        obj.topicPrefix = ApiClient.convertToType(data['topicPrefix'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Distributed Cache.
 * @member {String} cacheName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel.prototype.cacheName = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel.prototype.clusterName = undefined;

/**
 * The name of the remote Home Cache Cluster.
 * @member {String} homeClusterName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel.prototype.homeClusterName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel.prototype.msgVpnName = undefined;

/**
 * A topic prefix for global topics available from the remote Home Cache Cluster. A wildcard (/>) is implied at the end of the prefix.
 * @member {String} topicPrefix
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel.prototype.topicPrefix = undefined;

