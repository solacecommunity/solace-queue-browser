import {ApiClient} from '../ApiClient';
import {MsgVpnRestDeliveryPointCollectionsQueueBindingsModel} from './MsgVpnRestDeliveryPointCollectionsQueueBindingsModel';
import {MsgVpnRestDeliveryPointCollectionsRestConsumersModel} from './MsgVpnRestDeliveryPointCollectionsRestConsumersModel';

/**
 * The MsgVpnRestDeliveryPointCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointCollectionsModel} The populated <code>MsgVpnRestDeliveryPointCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointCollectionsModel();
      if (data.hasOwnProperty('queueBindings'))
        obj.queueBindings = MsgVpnRestDeliveryPointCollectionsQueueBindingsModel.constructFromObject(data['queueBindings']);
      if (data.hasOwnProperty('restConsumers'))
        obj.restConsumers = MsgVpnRestDeliveryPointCollectionsRestConsumersModel.constructFromObject(data['restConsumers']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnRestDeliveryPointCollectionsQueueBindingsModel} queueBindings
 */
MsgVpnRestDeliveryPointCollectionsModel.prototype.queueBindings = undefined;

/**
 * @member {module:model/MsgVpnRestDeliveryPointCollectionsRestConsumersModel} restConsumers
 */
MsgVpnRestDeliveryPointCollectionsModel.prototype.restConsumers = undefined;

