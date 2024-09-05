import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderLinksModel model module.
 * @module model/MsgVpnKafkaSenderLinksModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderLinksModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderLinksModel</code>.
   * @alias module:model/MsgVpnKafkaSenderLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderLinksModel} The populated <code>MsgVpnKafkaSenderLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderLinksModel();
      if (data.hasOwnProperty('queueBindingsUri'))
        obj.queueBindingsUri = ApiClient.convertToType(data['queueBindingsUri'], 'String');
      if (data.hasOwnProperty('remoteBrokersUri'))
        obj.remoteBrokersUri = ApiClient.convertToType(data['remoteBrokersUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Kafka Sender's collection of Queue Binding objects.
 * @member {String} queueBindingsUri
 */
MsgVpnKafkaSenderLinksModel.prototype.queueBindingsUri = undefined;

/**
 * The URI of this Kafka Sender's collection of Remote Kafka Brokers objects.
 * @member {String} remoteBrokersUri
 */
MsgVpnKafkaSenderLinksModel.prototype.remoteBrokersUri = undefined;

/**
 * The URI of this Kafka Sender object.
 * @member {String} uri
 */
MsgVpnKafkaSenderLinksModel.prototype.uri = undefined;

