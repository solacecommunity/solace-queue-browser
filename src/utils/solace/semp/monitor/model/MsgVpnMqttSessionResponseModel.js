import {ApiClient} from '../ApiClient';
import {MsgVpnMqttSessionCollectionsModel} from './MsgVpnMqttSessionCollectionsModel';
import {MsgVpnMqttSessionLinksModel} from './MsgVpnMqttSessionLinksModel';
import {MsgVpnMqttSessionModel} from './MsgVpnMqttSessionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnMqttSessionResponseModel model module.
 * @module model/MsgVpnMqttSessionResponseModel
 * @version 2.36
 */
export class MsgVpnMqttSessionResponseModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionResponseModel</code>.
   * @alias module:model/MsgVpnMqttSessionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionResponseModel} The populated <code>MsgVpnMqttSessionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnMqttSessionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnMqttSessionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnMqttSessionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnMqttSessionCollectionsModel} collections
 */
MsgVpnMqttSessionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnMqttSessionModel} data
 */
MsgVpnMqttSessionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnMqttSessionLinksModel} links
 */
MsgVpnMqttSessionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnMqttSessionResponseModel.prototype.meta = undefined;

