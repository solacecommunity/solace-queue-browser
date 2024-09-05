import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel();
    }
    return obj;
  }
}
