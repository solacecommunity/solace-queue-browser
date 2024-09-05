import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterCollectionsTopicsModel model module.
 * @module model/MsgVpnDistributedCacheClusterCollectionsTopicsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterCollectionsTopicsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterCollectionsTopicsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterCollectionsTopicsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterCollectionsTopicsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterCollectionsTopicsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterCollectionsTopicsModel} The populated <code>MsgVpnDistributedCacheClusterCollectionsTopicsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterCollectionsTopicsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topics collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheClusterCollectionsTopicsModel.prototype.count = undefined;

