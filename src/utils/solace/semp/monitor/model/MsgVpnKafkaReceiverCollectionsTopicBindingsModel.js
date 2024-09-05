import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverCollectionsTopicBindingsModel model module.
 * @module model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverCollectionsTopicBindingsModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverCollectionsTopicBindingsModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverCollectionsTopicBindingsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverCollectionsTopicBindingsModel} The populated <code>MsgVpnKafkaReceiverCollectionsTopicBindingsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverCollectionsTopicBindingsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topicBindings collection.
 * @member {Number} count
 */
MsgVpnKafkaReceiverCollectionsTopicBindingsModel.prototype.count = undefined;

