import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterLinksModel} The populated <code>MsgVpnDistributedCacheClusterLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterLinksModel();
      if (data.hasOwnProperty('globalCachingHomeClustersUri'))
        obj.globalCachingHomeClustersUri = ApiClient.convertToType(data['globalCachingHomeClustersUri'], 'String');
      if (data.hasOwnProperty('instancesUri'))
        obj.instancesUri = ApiClient.convertToType(data['instancesUri'], 'String');
      if (data.hasOwnProperty('topicsUri'))
        obj.topicsUri = ApiClient.convertToType(data['topicsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Cache Cluster's collection of Home Cache Cluster objects.
 * @member {String} globalCachingHomeClustersUri
 */
MsgVpnDistributedCacheClusterLinksModel.prototype.globalCachingHomeClustersUri = undefined;

/**
 * The URI of this Cache Cluster's collection of Cache Instance objects.
 * @member {String} instancesUri
 */
MsgVpnDistributedCacheClusterLinksModel.prototype.instancesUri = undefined;

/**
 * The URI of this Cache Cluster's collection of Topic objects.
 * @member {String} topicsUri
 */
MsgVpnDistributedCacheClusterLinksModel.prototype.topicsUri = undefined;

/**
 * The URI of this Cache Cluster object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterLinksModel.prototype.uri = undefined;

