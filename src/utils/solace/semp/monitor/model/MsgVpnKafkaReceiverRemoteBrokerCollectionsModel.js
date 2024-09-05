import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverRemoteBrokerCollectionsModel model module.
 * @module model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverRemoteBrokerCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverRemoteBrokerCollectionsModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverRemoteBrokerCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverRemoteBrokerCollectionsModel} The populated <code>MsgVpnKafkaReceiverRemoteBrokerCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverRemoteBrokerCollectionsModel();
    }
    return obj;
  }
}
