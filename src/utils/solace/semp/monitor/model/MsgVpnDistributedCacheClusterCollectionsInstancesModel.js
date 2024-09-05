import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterCollectionsInstancesModel model module.
 * @module model/MsgVpnDistributedCacheClusterCollectionsInstancesModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterCollectionsInstancesModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterCollectionsInstancesModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterCollectionsInstancesModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterCollectionsInstancesModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterCollectionsInstancesModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterCollectionsInstancesModel} The populated <code>MsgVpnDistributedCacheClusterCollectionsInstancesModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterCollectionsInstancesModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the instances collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheClusterCollectionsInstancesModel.prototype.count = undefined;

