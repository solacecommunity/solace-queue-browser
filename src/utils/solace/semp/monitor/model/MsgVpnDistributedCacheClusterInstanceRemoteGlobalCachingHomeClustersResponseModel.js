import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel} from './MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel} from './MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel} from './MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel>} collections
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel>} data
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel>} links
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClustersResponseModel.prototype.meta = undefined;

