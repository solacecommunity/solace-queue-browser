import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterModel} data
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterLinksModel} links
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterResponseModel.prototype.meta = undefined;

