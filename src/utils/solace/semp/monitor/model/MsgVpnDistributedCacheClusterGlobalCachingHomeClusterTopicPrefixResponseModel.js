import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel} collections
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel} data
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel} links
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixResponseModel.prototype.meta = undefined;

