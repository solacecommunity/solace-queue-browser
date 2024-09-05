import {ApiClient} from '../ApiClient';
import {MsgVpnDistributedCacheCollectionsModel} from './MsgVpnDistributedCacheCollectionsModel';
import {MsgVpnDistributedCacheLinksModel} from './MsgVpnDistributedCacheLinksModel';
import {MsgVpnDistributedCacheModel} from './MsgVpnDistributedCacheModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDistributedCacheResponseModel model module.
 * @module model/MsgVpnDistributedCacheResponseModel
 * @version 2.36
 */
export class MsgVpnDistributedCacheResponseModel {
  /**
   * Constructs a new <code>MsgVpnDistributedCacheResponseModel</code>.
   * @alias module:model/MsgVpnDistributedCacheResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDistributedCacheResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDistributedCacheResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDistributedCacheResponseModel} The populated <code>MsgVpnDistributedCacheResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDistributedCacheResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDistributedCacheCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDistributedCacheModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDistributedCacheLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDistributedCacheCollectionsModel} collections
 */
MsgVpnDistributedCacheResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheModel} data
 */
MsgVpnDistributedCacheResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDistributedCacheLinksModel} links
 */
MsgVpnDistributedCacheResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDistributedCacheResponseModel.prototype.meta = undefined;

