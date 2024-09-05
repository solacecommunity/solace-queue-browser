import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Remote Topic object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel.prototype.uri = undefined;

