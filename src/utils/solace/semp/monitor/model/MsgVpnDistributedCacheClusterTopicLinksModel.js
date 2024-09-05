import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterTopicLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterTopicLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterTopicLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterTopicLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterTopicLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterTopicLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterTopicLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterTopicLinksModel} The populated <code>MsgVpnDistributedCacheClusterTopicLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterTopicLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterTopicLinksModel.prototype.uri = undefined;

