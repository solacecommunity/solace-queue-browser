import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceCollectionsModel} from './MsgVpnDistributedCacheClusterInstanceCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceLinksModel} from './MsgVpnDistributedCacheClusterInstanceLinksModel';
import {MsgVpnDistributedCacheClusterInstanceModel} from './MsgVpnDistributedCacheClusterInstanceModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterInstancesResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstancesResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstancesResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstancesResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstancesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstancesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstancesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstancesResponseModel} The populated <code>MsgVpnDistributedCacheClusterInstancesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstancesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterInstanceCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterInstanceModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterInstanceLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceCollectionsModel>} collections
 */
MsgVpnDistributedCacheClusterInstancesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceModel>} data
 */
MsgVpnDistributedCacheClusterInstancesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceLinksModel>} links
 */
MsgVpnDistributedCacheClusterInstancesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterInstancesResponseModel.prototype.meta = undefined;

