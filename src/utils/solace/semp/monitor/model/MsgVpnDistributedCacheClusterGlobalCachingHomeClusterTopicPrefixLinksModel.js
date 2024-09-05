import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Prefix object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel.prototype.uri = undefined;

