import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnMqttSessionSubscriptionLinksModel model module.
 * @module model/MsgVpnMqttSessionSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnMqttSessionSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnMqttSessionSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionSubscriptionLinksModel} The populated <code>MsgVpnMqttSessionSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Subscription object.
 * @member {String} uri
 */
MsgVpnMqttSessionSubscriptionLinksModel.prototype.uri = undefined;

