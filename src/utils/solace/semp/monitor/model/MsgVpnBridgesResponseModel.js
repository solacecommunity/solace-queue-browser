import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeCollectionsModel} from './MsgVpnBridgeCollectionsModel';
import {MsgVpnBridgeLinksModel} from './MsgVpnBridgeLinksModel';
import {MsgVpnBridgeModel} from './MsgVpnBridgeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgesResponseModel model module.
 * @module model/MsgVpnBridgesResponseModel
 * @version 2.36
 */
export class MsgVpnBridgesResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgesResponseModel</code>.
   * @alias module:model/MsgVpnBridgesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgesResponseModel} The populated <code>MsgVpnBridgesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnBridgeCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnBridgeModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnBridgeLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnBridgeCollectionsModel>} collections
 */
MsgVpnBridgesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeModel>} data
 */
MsgVpnBridgesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeLinksModel>} links
 */
MsgVpnBridgesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgesResponseModel.prototype.meta = undefined;

