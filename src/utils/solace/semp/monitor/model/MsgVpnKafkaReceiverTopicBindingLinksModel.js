import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverTopicBindingLinksModel model module.
 * @module model/MsgVpnKafkaReceiverTopicBindingLinksModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverTopicBindingLinksModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverTopicBindingLinksModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverTopicBindingLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverTopicBindingLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverTopicBindingLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverTopicBindingLinksModel} The populated <code>MsgVpnKafkaReceiverTopicBindingLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverTopicBindingLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Binding object.
 * @member {String} uri
 */
MsgVpnKafkaReceiverTopicBindingLinksModel.prototype.uri = undefined;

