import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeCollectionsModel} from './MsgVpnBridgeCollectionsModel';
import {MsgVpnBridgeLinksModel} from './MsgVpnBridgeLinksModel';
import {MsgVpnBridgeModel} from './MsgVpnBridgeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeResponseModel model module.
 * @module model/MsgVpnBridgeResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeResponseModel</code>.
   * @alias module:model/MsgVpnBridgeResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeResponseModel} The populated <code>MsgVpnBridgeResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnBridgeCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnBridgeModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnBridgeLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnBridgeCollectionsModel} collections
 */
MsgVpnBridgeResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnBridgeModel} data
 */
MsgVpnBridgeResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnBridgeLinksModel} links
 */
MsgVpnBridgeResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeResponseModel.prototype.meta = undefined;

