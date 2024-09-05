import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderRemoteBrokerLinksModel model module.
 * @module model/MsgVpnKafkaSenderRemoteBrokerLinksModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderRemoteBrokerLinksModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderRemoteBrokerLinksModel</code>.
   * @alias module:model/MsgVpnKafkaSenderRemoteBrokerLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderRemoteBrokerLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderRemoteBrokerLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderRemoteBrokerLinksModel} The populated <code>MsgVpnKafkaSenderRemoteBrokerLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderRemoteBrokerLinksModel();
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
MsgVpnKafkaSenderRemoteBrokerLinksModel.prototype.uri = undefined;

