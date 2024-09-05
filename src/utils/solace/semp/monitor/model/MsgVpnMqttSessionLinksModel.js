import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttSessionLinksModel model module.
 * @module model/MsgVpnMqttSessionLinksModel
 * @version 2.36
 */
export class MsgVpnMqttSessionLinksModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionLinksModel</code>.
   * @alias module:model/MsgVpnMqttSessionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionLinksModel} The populated <code>MsgVpnMqttSessionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionLinksModel();
      if (data.hasOwnProperty('subscriptionsUri'))
        obj.subscriptionsUri = ApiClient.convertToType(data['subscriptionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this MQTT Session's collection of Subscription objects.
 * @member {String} subscriptionsUri
 */
MsgVpnMqttSessionLinksModel.prototype.subscriptionsUri = undefined;

/**
 * The URI of this MQTT Session object.
 * @member {String} uri
 */
MsgVpnMqttSessionLinksModel.prototype.uri = undefined;

