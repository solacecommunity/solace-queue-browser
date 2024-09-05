import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeLocalSubscriptionLinksModel model module.
 * @module model/MsgVpnBridgeLocalSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnBridgeLocalSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnBridgeLocalSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnBridgeLocalSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeLocalSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeLocalSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeLocalSubscriptionLinksModel} The populated <code>MsgVpnBridgeLocalSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeLocalSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Bridge Local Subscriptions object.
 * @member {String} uri
 */
MsgVpnBridgeLocalSubscriptionLinksModel.prototype.uri = undefined;

