import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRemoteSubscriptionLinksModel model module.
 * @module model/MsgVpnBridgeRemoteSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteSubscriptionLinksModel} The populated <code>MsgVpnBridgeRemoteSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Remote Subscription object.
 * @member {String} uri
 */
MsgVpnBridgeRemoteSubscriptionLinksModel.prototype.uri = undefined;

