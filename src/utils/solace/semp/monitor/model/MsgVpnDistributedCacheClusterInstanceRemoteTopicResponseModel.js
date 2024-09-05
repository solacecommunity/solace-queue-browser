import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel} from './MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel} from './MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel';
import {MsgVpnDistributedCacheClusterInstanceRemoteTopicModel} from './MsgVpnDistributedCacheClusterInstanceRemoteTopicModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel} The populated <code>MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterInstanceRemoteTopicModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicModel} data
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterInstanceRemoteTopicLinksModel} links
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterInstanceRemoteTopicResponseModel.prototype.meta = undefined;

