import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverTopicBindingCollectionsModel model module.
 * @module model/MsgVpnKafkaReceiverTopicBindingCollectionsModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverTopicBindingCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverTopicBindingCollectionsModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverTopicBindingCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverTopicBindingCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverTopicBindingCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverTopicBindingCollectionsModel} The populated <code>MsgVpnKafkaReceiverTopicBindingCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverTopicBindingCollectionsModel();
    }
    return obj;
  }
}
