import {ApiClient} from '../ApiClient';
import {MsgVpnDmrBridgeCollectionsModel} from './MsgVpnDmrBridgeCollectionsModel';
import {MsgVpnDmrBridgeLinksModel} from './MsgVpnDmrBridgeLinksModel';
import {MsgVpnDmrBridgeModel} from './MsgVpnDmrBridgeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnDmrBridgeResponseModel model module.
 * @module model/MsgVpnDmrBridgeResponseModel
 * @version 2.36
 */
export class MsgVpnDmrBridgeResponseModel {
  /**
   * Constructs a new <code>MsgVpnDmrBridgeResponseModel</code>.
   * @alias module:model/MsgVpnDmrBridgeResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnDmrBridgeResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnDmrBridgeResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnDmrBridgeResponseModel} The populated <code>MsgVpnDmrBridgeResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnDmrBridgeResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnDmrBridgeCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnDmrBridgeModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnDmrBridgeLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnDmrBridgeCollectionsModel} collections
 */
MsgVpnDmrBridgeResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnDmrBridgeModel} data
 */
MsgVpnDmrBridgeResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnDmrBridgeLinksModel} links
 */
MsgVpnDmrBridgeResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnDmrBridgeResponseModel.prototype.meta = undefined;

