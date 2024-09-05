import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topicPrefixes collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsTopicPrefixesModel.prototype.count = undefined;

