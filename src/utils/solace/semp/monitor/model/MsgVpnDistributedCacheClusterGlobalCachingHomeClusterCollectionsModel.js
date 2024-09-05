import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel();
      if (data.hasOwnProperty('topicPrefixes'))
        obj.topicPrefixes = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel.constructFromObject(data['topicPrefixes']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel} topicPrefixes
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel.prototype.topicPrefixes = undefined;

