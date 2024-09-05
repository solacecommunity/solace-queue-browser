import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel();
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('cacheRequestForwardedCount'))
        obj.cacheRequestForwardedCount = ApiClient.convertToType(data['cacheRequestForwardedCount'], 'Number');
      if (data.hasOwnProperty('cacheRequestRxCount'))
        obj.cacheRequestRxCount = ApiClient.convertToType(data['cacheRequestRxCount'], 'Number');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('heartbeatRxCount'))
        obj.heartbeatRxCount = ApiClient.convertToType(data['heartbeatRxCount'], 'Number');
      if (data.hasOwnProperty('heartbeatUp'))
        obj.heartbeatUp = ApiClient.convertToType(data['heartbeatUp'], 'Boolean');
      if (data.hasOwnProperty('homeClusterName'))
        obj.homeClusterName = ApiClient.convertToType(data['homeClusterName'], 'String');
      if (data.hasOwnProperty('instanceName'))
        obj.instanceName = ApiClient.convertToType(data['instanceName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Distributed Cache.
 * @member {String} cacheName
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.cacheName = undefined;

/**
 * The number of cache requests forwarded to the remote Home Cache Cluster.
 * @member {Number} cacheRequestForwardedCount
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.cacheRequestForwardedCount = undefined;

/**
 * The number of cache requests received from the remote Home Cache Cluster.
 * @member {Number} cacheRequestRxCount
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.cacheRequestRxCount = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.clusterName = undefined;

/**
 * The number of heartbeat messages received from the remote Home Cache Cluster.
 * @member {Number} heartbeatRxCount
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.heartbeatRxCount = undefined;

/**
 * Indicates whether the operational state of the heartbeat with the remote Home Cache Cluster is up.
 * @member {Boolean} heartbeatUp
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.heartbeatUp = undefined;

/**
 * The name of the remote Home Cache Cluster.
 * @member {String} homeClusterName
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.homeClusterName = undefined;

/**
 * The name of the Cache Instance.
 * @member {String} instanceName
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.instanceName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.prototype.msgVpnName = undefined;

