import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheCollectionsModel} from './MsgVpnDistributedCacheCollectionsModel';
import {MsgVpnDistributedCacheLinksModel} from './MsgVpnDistributedCacheLinksModel';
import {MsgVpnDistributedCacheModel} from './MsgVpnDistributedCacheModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCachesResponseModel model module.
 * @module model/MsgVpnDistributedCachesResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCachesResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCachesResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCachesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCachesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCachesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCachesResponseModel} The populated <code>MsgVpnDistributedCachesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCachesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDistributedCacheCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDistributedCacheModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDistributedCacheLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheCollectionsModel>} collections
 */
MsgVpnDistributedCachesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheModel>} data
 */
MsgVpnDistributedCachesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDistributedCacheLinksModel>} links
 */
MsgVpnDistributedCachesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCachesResponseModel.prototype.meta = undefined;

