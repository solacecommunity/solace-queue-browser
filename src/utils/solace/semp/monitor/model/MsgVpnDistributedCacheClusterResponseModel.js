import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterCollectionsModel} from './MsgVpnDistributedCacheClusterCollectionsModel';
import {MsgVpnDistributedCacheClusterLinksModel} from './MsgVpnDistributedCacheClusterLinksModel';
import {MsgVpnDistributedCacheClusterModel} from './MsgVpnDistributedCacheClusterModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterResponseModel} The populated <code>MsgVpnDistributedCacheClusterResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterModel} data
 */
MsgVpnDistributedCacheClusterResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterLinksModel} links
 */
MsgVpnDistributedCacheClusterResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterResponseModel.prototype.meta = undefined;

