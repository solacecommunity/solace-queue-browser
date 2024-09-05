import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel} from './MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel} from './MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel} from './MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterModel} data
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterLinksModel} links
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterInstanceRemoteGlobalCachingHomeClusterResponseModel.prototype.meta = undefined;

