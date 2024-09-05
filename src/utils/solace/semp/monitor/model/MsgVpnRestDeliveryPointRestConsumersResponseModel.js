import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointRestConsumerCollectionsModel} from './MsgVpnRestDeliveryPointRestConsumerCollectionsModel';
import {MsgVpnRestDeliveryPointRestConsumerLinksModel} from './MsgVpnRestDeliveryPointRestConsumerLinksModel';
import {MsgVpnRestDeliveryPointRestConsumerModel} from './MsgVpnRestDeliveryPointRestConsumerModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnRestDeliveryPointRestConsumersResponseModel model module.
 * @module model/MsgVpnRestDeliveryPointRestConsumersResponseModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointRestConsumersResponseModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointRestConsumersResponseModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointRestConsumersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointRestConsumersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointRestConsumersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointRestConsumersResponseModel} The populated <code>MsgVpnRestDeliveryPointRestConsumersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointRestConsumersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnRestDeliveryPointRestConsumerCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnRestDeliveryPointRestConsumerModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnRestDeliveryPointRestConsumerLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerCollectionsModel>} collections
 */
MsgVpnRestDeliveryPointRestConsumersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerModel>} data
 */
MsgVpnRestDeliveryPointRestConsumersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnRestDeliveryPointRestConsumerLinksModel>} links
 */
MsgVpnRestDeliveryPointRestConsumersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnRestDeliveryPointRestConsumersResponseModel.prototype.meta = undefined;

