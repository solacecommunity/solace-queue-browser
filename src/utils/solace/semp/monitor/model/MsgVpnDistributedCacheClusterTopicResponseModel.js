import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterTopicCollectionsModel} from './MsgVpnDistributedCacheClusterTopicCollectionsModel';
import {MsgVpnDistributedCacheClusterTopicLinksModel} from './MsgVpnDistributedCacheClusterTopicLinksModel';
import {MsgVpnDistributedCacheClusterTopicModel} from './MsgVpnDistributedCacheClusterTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterTopicResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterTopicResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterTopicResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterTopicResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterTopicResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterTopicResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterTopicResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterTopicResponseModel} The populated <code>MsgVpnDistributedCacheClusterTopicResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterTopicResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterTopicCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterTopicModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterTopicLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterTopicCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterTopicResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterTopicModel} data
 */
MsgVpnDistributedCacheClusterTopicResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterTopicLinksModel} links
 */
MsgVpnDistributedCacheClusterTopicResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterTopicResponseModel.prototype.meta = undefined;

