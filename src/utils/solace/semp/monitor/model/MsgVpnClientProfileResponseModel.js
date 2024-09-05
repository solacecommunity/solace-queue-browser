import {ApiClient} from '../ApiClient';
import {MsgVpnClientProfileCollectionsModel} from './MsgVpnClientProfileCollectionsModel';
import {MsgVpnClientProfileLinksModel} from './MsgVpnClientProfileLinksModel';
import {MsgVpnClientProfileModel} from './MsgVpnClientProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientProfileResponseModel model module.
 * @module model/MsgVpnClientProfileResponseModel
 * @version 2.36
 */
export class MsgVpnClientProfileResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientProfileResponseModel</code>.
   * @alias module:model/MsgVpnClientProfileResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientProfileResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientProfileResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientProfileResponseModel} The populated <code>MsgVpnClientProfileResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientProfileResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientProfileCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientProfileModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientProfileLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientProfileCollectionsModel} collections
 */
MsgVpnClientProfileResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientProfileModel} data
 */
MsgVpnClientProfileResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientProfileLinksModel} links
 */
MsgVpnClientProfileResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientProfileResponseModel.prototype.meta = undefined;

