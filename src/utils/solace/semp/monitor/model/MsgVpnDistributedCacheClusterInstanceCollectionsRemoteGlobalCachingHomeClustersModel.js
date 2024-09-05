import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel} The populated <code>MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the remoteGlobalCachingHomeClusters collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel.prototype.count = undefined;

