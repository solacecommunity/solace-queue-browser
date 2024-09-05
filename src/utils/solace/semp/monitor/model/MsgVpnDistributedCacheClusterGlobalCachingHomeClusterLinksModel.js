import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel();
      if (data.hasOwnProperty('topicPrefixesUri'))
        obj.topicPrefixesUri = ApiClient.convertToType(data['topicPrefixesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Home Cache Cluster's collection of Topic Prefix objects.
 * @member {String} topicPrefixesUri
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel.prototype.topicPrefixesUri = undefined;

/**
 * The URI of this Home Cache Cluster object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel.prototype.uri = undefined;

