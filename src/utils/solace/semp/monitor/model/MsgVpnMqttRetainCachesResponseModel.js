import {ApiClient} from '../ApiClient';
import {MsgVpnMqttRetainCacheCollectionsModel} from './MsgVpnMqttRetainCacheCollectionsModel';
import {MsgVpnMqttRetainCacheLinksModel} from './MsgVpnMqttRetainCacheLinksModel';
import {MsgVpnMqttRetainCacheModel} from './MsgVpnMqttRetainCacheModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnMqttRetainCachesResponseModel model module.
 * @module model/MsgVpnMqttRetainCachesResponseModel
 * @version 2.36
 */
export class MsgVpnMqttRetainCachesResponseModel {
  /**
   * Constructs a new <code>MsgVpnMqttRetainCachesResponseModel</code>.
   * @alias module:model/MsgVpnMqttRetainCachesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnMqttRetainCachesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttRetainCachesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttRetainCachesResponseModel} The populated <code>MsgVpnMqttRetainCachesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttRetainCachesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnMqttRetainCacheCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnMqttRetainCacheModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnMqttRetainCacheLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnMqttRetainCacheCollectionsModel>} collections
 */
MsgVpnMqttRetainCachesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnMqttRetainCacheModel>} data
 */
MsgVpnMqttRetainCachesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnMqttRetainCacheLinksModel>} links
 */
MsgVpnMqttRetainCachesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnMqttRetainCachesResponseModel.prototype.meta = undefined;

