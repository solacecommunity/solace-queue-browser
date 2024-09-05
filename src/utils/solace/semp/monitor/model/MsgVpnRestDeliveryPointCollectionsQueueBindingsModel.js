import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointCollectionsQueueBindingsModel model module.
 * @module model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointCollectionsQueueBindingsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointCollectionsQueueBindingsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointCollectionsQueueBindingsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel} The populated <code>MsgVpnRestDeliveryPointCollectionsQueueBindingsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointCollectionsQueueBindingsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the queueBindings collection.
 * @member {Number} count
 */
MsgVpnRestDeliveryPointCollectionsQueueBindingsModel.prototype.count = undefined;

