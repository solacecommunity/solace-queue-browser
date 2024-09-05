import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingRequestHeaderCollectionsModel();
    }
    return obj;
  }
}
