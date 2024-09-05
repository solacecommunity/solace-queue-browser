import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel} from './MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel} from './MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicModel} from './MsgVpnDistributedCacheClusterInstanceRemoteTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterInstanceRemoteTopicModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel>} collections
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel>} data
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel>} links
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicsResponseModel.prototype.meta = undefined;

