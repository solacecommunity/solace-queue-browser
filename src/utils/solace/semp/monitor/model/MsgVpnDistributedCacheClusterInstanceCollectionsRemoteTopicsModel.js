import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel} The populated <code>MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the remoteTopics collection.
 * @member {Number} count
 */
MsgVpnDistributedCacheClusterInstanceCollectionsRemoteTopicsModel.prototype.count = undefined;

