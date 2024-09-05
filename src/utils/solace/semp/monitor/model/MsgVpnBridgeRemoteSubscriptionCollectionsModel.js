import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRemoteSubscriptionCollectionsModel model module.
 * @module model/MsgVpnBridgeRemoteSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteSubscriptionCollectionsModel} The populated <code>MsgVpnBridgeRemoteSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteSubscriptionCollectionsModel();
    }
    return obj;
  }
}
