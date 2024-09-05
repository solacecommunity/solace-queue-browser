import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheCollectionsClustersModel model module.
 * @module model/MsgVpnDistributedCacheCollectionsClustersModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheCollectionsClustersModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheCollectionsClustersModel</code>.
   * @alias module:model/MsgVpnDistributedCacheCollectionsClustersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheCollectionsClustersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheCollectionsClustersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheCollectionsClustersModel} The populated <code>MsgVpnDistributedCacheCollectionsClustersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheCollectionsClustersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clusters collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheCollectionsClustersModel.prototype.count = undefined;

