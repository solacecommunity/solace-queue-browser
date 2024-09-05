import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverRemoteBrokerLinksModel model module.
 * @module model/MsgVpnKafkaReceiverRemoteBrokerLinksModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverRemoteBrokerLinksModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverRemoteBrokerLinksModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverRemoteBrokerLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverRemoteBrokerLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverRemoteBrokerLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverRemoteBrokerLinksModel} The populated <code>MsgVpnKafkaReceiverRemoteBrokerLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverRemoteBrokerLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Remote Kafka Brokers object.
 * @member {String} uri
 */
MsgVpnKafkaReceiverRemoteBrokerLinksModel.prototype.uri = undefined;

