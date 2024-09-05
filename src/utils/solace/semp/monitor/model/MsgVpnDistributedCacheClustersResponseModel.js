import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterCollectionsModel} from './MsgVpnDistributedCacheClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterLinksModel} from './MsgVpnDistributedCacheClusterLinksModel';
import {MsgVpnDistributedCacheClusterModel} from './MsgVpnDistributedCacheClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClustersResponseModel model module.
 * @module model/MsgVpnDistributedCacheClustersResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClustersResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClustersResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClustersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClustersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClustersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClustersResponseModel} The populated <code>MsgVpnDistributedCacheClustersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClustersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterCollectionsModel>} collections
 */
MsgVpnDistributedCacheClustersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterModel>} data
 */
MsgVpnDistributedCacheClustersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterLinksModel>} links
 */
MsgVpnDistributedCacheClustersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClustersResponseModel.prototype.meta = undefined;

