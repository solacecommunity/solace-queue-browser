import {ApiClient} from '../ApiClient';
import {MsgVpnMqttSessionCollectionsModel} from './MsgVpnMqttSessionCollectionsModel';
import {MsgVpnMqttSessionLinksModel} from './MsgVpnMqttSessionLinksModel';
import {MsgVpnMqttSessionModel} from './MsgVpnMqttSessionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnMqttSessionsResponseModel model module.
 * @module model/MsgVpnMqttSessionsResponseModel
 * @version 2.36
 */
export class MsgVpnMqttSessionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionsResponseModel</code>.
   * @alias module:model/MsgVpnMqttSessionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionsResponseModel} The populated <code>MsgVpnMqttSessionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnMqttSessionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnMqttSessionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnMqttSessionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnMqttSessionCollectionsModel>} collections
 */
MsgVpnMqttSessionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnMqttSessionModel>} data
 */
MsgVpnMqttSessionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnMqttSessionLinksModel>} links
 */
MsgVpnMqttSessionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnMqttSessionsResponseModel.prototype.meta = undefined;

