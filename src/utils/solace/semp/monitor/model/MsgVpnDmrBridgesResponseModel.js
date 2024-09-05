import {ApiClient} from '../ApiClient';
import {MsgVpnDmrBridgeCollectionsModel} from './MsgVpnDmrBridgeCollectionsModel';
import {MsgVpnDmrBridgeLinksModel} from './MsgVpnDmrBridgeLinksModel';
import {MsgVpnDmrBridgeModel} from './MsgVpnDmrBridgeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDmrBridgesResponseModel model module.
 * @module model/MsgVpnDmrBridgesResponseModel
 * @version 2.36
 */
export class MsgVpnDmrBridgesResponseModel {
  /**
   * Constructs a new <code>MsgVpnDmrBridgesResponseModel</code>.
   * @alias module:model/MsgVpnDmrBridgesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDmrBridgesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDmrBridgesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDmrBridgesResponseModel} The populated <code>MsgVpnDmrBridgesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDmrBridgesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnDmrBridgeCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnDmrBridgeModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnDmrBridgeLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnDmrBridgeCollectionsModel>} collections
 */
MsgVpnDmrBridgesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnDmrBridgeModel>} data
 */
MsgVpnDmrBridgesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnDmrBridgeLinksModel>} links
 */
MsgVpnDmrBridgesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDmrBridgesResponseModel.prototype.meta = undefined;

