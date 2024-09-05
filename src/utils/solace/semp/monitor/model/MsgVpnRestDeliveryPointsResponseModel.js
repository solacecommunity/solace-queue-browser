import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointCollectionsModel} from './MsgVpnRestDeliveryPointCollectionsModel';
import {MsgVpnRestDeliveryPointLinksModel} from './MsgVpnRestDeliveryPointLinksModel';
import {MsgVpnRestDeliveryPointModel} from './MsgVpnRestDeliveryPointModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointsResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointsResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointsResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointsResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointsResponseModel} The populated <code>MsgVpnRestDeliveryPointsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointModel>} data
 */
MsgVpnRestDeliveryPointsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointLinksModel>} links
 */
MsgVpnRestDeliveryPointsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointsResponseModel.prototype.meta = undefined;

