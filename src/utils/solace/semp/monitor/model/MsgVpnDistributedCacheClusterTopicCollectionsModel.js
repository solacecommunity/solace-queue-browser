import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterTopicCollectionsModel model module.
 * @module model/MsgVpnDistributedCacheClusterTopicCollectionsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterTopicCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterTopicCollectionsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterTopicCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterTopicCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterTopicCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterTopicCollectionsModel} The populated <code>MsgVpnDistributedCacheClusterTopicCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterTopicCollectionsModel();
    }
    return obj;
  }
}
