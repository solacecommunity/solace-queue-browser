import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnDistributedCacheClusterInstanceLinksModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceLinksModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceLinksModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceLinksModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceLinksModel} The populated <code>MsgVpnDistributedCacheClusterInstanceLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceLinksModel();
      if (data.hasOwnProperty('remoteGlobalCachingHomeClustersUri'))
        obj.remoteGlobalCachingHomeClustersUri = ApiClient.convertToType(data['remoteGlobalCachingHomeClustersUri'], 'String');
      if (data.hasOwnProperty('remoteTopicsUri'))
        obj.remoteTopicsUri = ApiClient.convertToType(data['remoteTopicsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Cache Instance's collection of Remote Home Cache Cluster objects.
 * @member {String} remoteGlobalCachingHomeClustersUri
 */
MsgVpnDistributedCacheClusterInstanceLinksModel.prototype.remoteGlobalCachingHomeClustersUri = undefined;

/**
 * The URI of this Cache Instance's collection of Remote Topic objects.
 * @member {String} remoteTopicsUri
 */
MsgVpnDistributedCacheClusterInstanceLinksModel.prototype.remoteTopicsUri = undefined;

/**
 * The URI of this Cache Instance object.
 * @member {String} uri
 */
MsgVpnDistributedCacheClusterInstanceLinksModel.prototype.uri = undefined;

