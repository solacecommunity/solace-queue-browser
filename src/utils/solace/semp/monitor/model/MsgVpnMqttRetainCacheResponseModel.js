import {ApiClient} from '../ApiClient';
import {MsgVpnMqttRetainCacheCollectionsModel} from './MsgVpnMqttRetainCacheCollectionsModel';
import {MsgVpnMqttRetainCacheLinksModel} from './MsgVpnMqttRetainCacheLinksModel';
import {MsgVpnMqttRetainCacheModel} from './MsgVpnMqttRetainCacheModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnMqttRetainCacheResponseModel model module.
 * @module model/MsgVpnMqttRetainCacheResponseModel
 * @version 2.36
 */
export class MsgVpnMqttRetainCacheResponseModel {
  /**
   * Constructs a new <code>MsgVpnMqttRetainCacheResponseModel</code>.
   * @alias module:model/MsgVpnMqttRetainCacheResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnMqttRetainCacheResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttRetainCacheResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttRetainCacheResponseModel} The populated <code>MsgVpnMqttRetainCacheResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttRetainCacheResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnMqttRetainCacheCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnMqttRetainCacheModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnMqttRetainCacheLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnMqttRetainCacheCollectionsModel} collections
 */
MsgVpnMqttRetainCacheResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnMqttRetainCacheModel} data
 */
MsgVpnMqttRetainCacheResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnMqttRetainCacheLinksModel} links
 */
MsgVpnMqttRetainCacheResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnMqttRetainCacheResponseModel.prototype.meta = undefined;

