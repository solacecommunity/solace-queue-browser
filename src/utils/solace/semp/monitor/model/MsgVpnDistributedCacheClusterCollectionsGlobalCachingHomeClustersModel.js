import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel model module.
 * @module model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel} The populated <code>MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the globalCachingHomeClusters collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel.prototype.count = undefined;

