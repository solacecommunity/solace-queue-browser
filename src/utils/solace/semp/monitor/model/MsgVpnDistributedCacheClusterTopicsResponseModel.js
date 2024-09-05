import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterTopicCollectionsModel} from './MsgVpnDistributedCacheClusterTopicCollectionsModel';
import {MsgVpnDistributedCacheClusterTopicLinksModel} from './MsgVpnDistributedCacheClusterTopicLinksModel';
import {MsgVpnDistributedCacheClusterTopicModel} from './MsgVpnDistributedCacheClusterTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterTopicsResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterTopicsResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterTopicsResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterTopicsResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterTopicsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterTopicsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterTopicsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterTopicsResponseModel} The populated <code>MsgVpnDistributedCacheClusterTopicsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterTopicsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterTopicCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterTopicModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterTopicLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterTopicCollectionsModel>} collections
 */
MsgVpnDistributedCacheClusterTopicsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterTopicModel>} data
 */
MsgVpnDistributedCacheClusterTopicsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterTopicLinksModel>} links
 */
MsgVpnDistributedCacheClusterTopicsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterTopicsResponseModel.prototype.meta = undefined;

