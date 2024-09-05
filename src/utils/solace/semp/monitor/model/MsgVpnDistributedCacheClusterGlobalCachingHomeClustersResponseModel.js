import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel>} collections
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel>} data
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel>} links
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClustersResponseModel.prototype.meta = undefined;

