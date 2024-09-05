import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttSessionSubscriptionCollectionsModel model module.
 * @module model/MsgVpnMqttSessionSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnMqttSessionSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnMqttSessionSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionSubscriptionCollectionsModel} The populated <code>MsgVpnMqttSessionSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionSubscriptionCollectionsModel();
    }
    return obj;
  }
}
