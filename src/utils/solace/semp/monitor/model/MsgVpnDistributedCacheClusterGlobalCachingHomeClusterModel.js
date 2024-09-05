import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel();
      if (data.hasOwnProperty('cacheName'))
        obj.cacheName = ApiClient.convertToType(data['cacheName'], 'String');
      if (data.hasOwnProperty('clusterName'))
        obj.clusterName = ApiClient.convertToType(data['clusterName'], 'String');
      if (data.hasOwnProperty('homeClusterName'))
        obj.homeClusterName = ApiClient.convertToType(data['homeClusterName'], 'String');
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
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel.prototype.cacheName = undefined;

/**
 * The name of the Cache Cluster.
 * @member {String} clusterName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel.prototype.clusterName = undefined;

/**
 * The name of the remote Home Cache Cluster.
 * @member {String} homeClusterName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel.prototype.homeClusterName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel.prototype.msgVpnName = undefined;

