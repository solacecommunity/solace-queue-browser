import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel';
import {MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel} from './MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel model module.
 * @module model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel} The populated <code>MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixCollectionsModel>} collections
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixModel>} data
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixLinksModel>} links
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheClusterGlobalCachingHomeClusterTopicPrefixesResponseModel.prototype.meta = undefined;

