import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointCollectionsRestConsumersModel model module.
 * @module model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointCollectionsRestConsumersModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointCollectionsRestConsumersModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointCollectionsRestConsumersModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel} The populated <code>MsgVpnRestDeliveryPointCollectionsRestConsumersModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointCollectionsRestConsumersModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the restConsumers collection.
 * @member {Number} count
 */
MsgVpnRestDeliveryPointCollectionsRestConsumersModel.prototype.count = undefined;

