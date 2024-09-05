import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceCollectionsModel} from './MsgVpnDistributedCacheClusterInstanceCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceLinksModel} from './MsgVpnDistributedCacheClusterInstanceLinksModel';
import {MsgVpnDistributedCacheClusterInstanceModel} from './MsgVpnDistributedCacheClusterInstanceModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceResponseModel} The populated <code>MsgVpnDistributedCacheClusterInstanceResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterInstanceCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterInstanceModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterInstanceLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterInstanceResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceModel} data
 */
MsgVpnDistributedCacheClusterInstanceResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceLinksModel} links
 */
MsgVpnDistributedCacheClusterInstanceResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterInstanceResponseModel.prototype.meta = undefined;

