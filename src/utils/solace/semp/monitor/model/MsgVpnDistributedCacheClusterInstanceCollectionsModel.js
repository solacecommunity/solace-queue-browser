import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel} from './MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel';
import {MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel} from './MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceCollectionsModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceCollectionsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceCollectionsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsModel} The populated <code>MsgVpnDistributedCacheClusterInstanceCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceCollectionsModel();
      if (data.hasOwnProperty('remoteGlobalCachingHomeClusters'))
        obj.remoteGlobalCachingHomeClusters = MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel.constructFromObject(data['remoteGlobalCachingHomeClusters']);
      if (data.hasOwnProperty('remoteTopics'))
        obj.remoteTopics = MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel.constructFromObject(data['remoteTopics']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteGlobalCachingHomeClustersModel} remoteGlobalCachingHomeClusters
 */
MsgVpnDistributedCacheClusterInstanceCollectionsModel.prototype.remoteGlobalCachingHomeClusters = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel} remoteTopics
 */
MsgVpnDistributedCacheClusterInstanceCollectionsModel.prototype.remoteTopics = undefined;

