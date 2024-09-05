import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheCollectionsClustersModel} from './MsgVpnDistributedCacheCollectionsClustersModel';

/**
 * The MsgVpnDistributedCacheCollectionsModel model module.
 * @module model/MsgVpnDistributedCacheCollectionsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheCollectionsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheCollectionsModel} The populated <code>MsgVpnDistributedCacheCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheCollectionsModel();
      if (data.hasOwnProperty('clusters'))
        obj.clusters = MsgVpnDistributedCacheCollectionsClustersModel.constructFromObject(data['clusters']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheCollectionsClustersModel} clusters
 */
MsgVpnDistributedCacheCollectionsModel.prototype.clusters = undefined;

