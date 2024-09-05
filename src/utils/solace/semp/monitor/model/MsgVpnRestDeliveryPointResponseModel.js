import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointCollectionsModel} from './MsgVpnRestDeliveryPointCollectionsModel';
import {MsgVpnRestDeliveryPointLinksModel} from './MsgVpnRestDeliveryPointLinksModel';
import {MsgVpnRestDeliveryPointModel} from './MsgVpnRestDeliveryPointModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointResponseModel} The populated <code>MsgVpnRestDeliveryPointResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnRestDeliveryPointCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnRestDeliveryPointModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnRestDeliveryPointLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointCollectionsModel} collections
 */
MsgVpnRestDeliveryPointResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointModel} data
 */
MsgVpnRestDeliveryPointResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointLinksModel} links
 */
MsgVpnRestDeliveryPointResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointResponseModel.prototype.meta = undefined;

