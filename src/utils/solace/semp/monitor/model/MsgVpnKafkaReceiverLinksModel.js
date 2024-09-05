import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverLinksModel model module.
 * @module model/MsgVpnKafkaReceiverLinksModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverLinksModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverLinksModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverLinksModel} The populated <code>MsgVpnKafkaReceiverLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverLinksModel();
      if (data.hasOwnProperty('remoteBrokersUri'))
        obj.remoteBrokersUri = ApiClient.convertToType(data['remoteBrokersUri'], 'String');
      if (data.hasOwnProperty('topicBindingsUri'))
        obj.topicBindingsUri = ApiClient.convertToType(data['topicBindingsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Kafka Receiver's collection of Remote Kafka Brokers objects.
 * @member {String} remoteBrokersUri
 */
MsgVpnKafkaReceiverLinksModel.prototype.remoteBrokersUri = undefined;

/**
 * The URI of this Kafka Receiver's collection of Topic Binding objects.
 * @member {String} topicBindingsUri
 */
MsgVpnKafkaReceiverLinksModel.prototype.topicBindingsUri = undefined;

/**
 * The URI of this Kafka Receiver object.
 * @member {String} uri
 */
MsgVpnKafkaReceiverLinksModel.prototype.uri = undefined;

