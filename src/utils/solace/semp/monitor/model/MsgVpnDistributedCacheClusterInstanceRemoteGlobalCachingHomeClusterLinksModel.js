import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Remote Home Cache Cluster object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel.prototype.uri = undefined;

