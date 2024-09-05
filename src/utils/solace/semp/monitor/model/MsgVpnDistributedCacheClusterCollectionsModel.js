import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel} from './MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel';
import {MsgVpnDistributedCacheClusterCollectionsInstancesModel} from './MsgVpnDistributedCacheClusterCollectionsInstancesModel';
import {MsgVpnDistributedCacheClusterCollectionsTopicsModel} from './MsgVpnDistributedCacheClusterCollectionsTopicsModel';

/**
 * The MsgVpnDistributedCacheClusterCollectionsModel model module.
 * @module model/MsgVpnDistributedCacheClusterCollectionsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterCollectionsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterCollectionsModel} The populated <code>MsgVpnDistributedCacheClusterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterCollectionsModel();
      if (data.hasOwnProperty('globalCachingHomeClusters'))
        obj.globalCachingHomeClusters = MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel.constructFromObject(data['globalCachingHomeClusters']);
      if (data.hasOwnProperty('instances'))
        obj.instances = MsgVpnDistributedCacheClusterCollectionsInstancesModel.constructFromObject(data['instances']);
      if (data.hasOwnProperty('topics'))
        obj.topics = MsgVpnDistributedCacheClusterCollectionsTopicsModel.constructFromObject(data['topics']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterCollectionsGlobalCachingHomeClustersModel} globalCachingHomeClusters
 */
MsgVpnDistributedCacheClusterCollectionsModel.prototype.globalCachingHomeClusters = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterCollectionsInstancesModel} instances
 */
MsgVpnDistributedCacheClusterCollectionsModel.prototype.instances = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterCollectionsTopicsModel} topics
 */
MsgVpnDistributedCacheClusterCollectionsModel.prototype.topics = undefined;

