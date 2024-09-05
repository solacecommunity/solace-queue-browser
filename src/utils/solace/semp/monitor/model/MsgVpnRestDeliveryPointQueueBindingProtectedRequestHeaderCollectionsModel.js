import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel model module.
 * @module model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel
 * @version 2.36
 */
export class MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel</code>.
   * @alias module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel} The populated <code>MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderCollectionsModel();
    }
    return obj;
  }
}
