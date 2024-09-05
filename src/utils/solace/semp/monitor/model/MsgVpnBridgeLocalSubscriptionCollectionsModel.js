import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeLocalSubscriptionCollectionsModel model module.
 * @module model/MsgVpnBridgeLocalSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnBridgeLocalSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeLocalSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnBridgeLocalSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeLocalSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeLocalSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeLocalSubscriptionCollectionsModel} The populated <code>MsgVpnBridgeLocalSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeLocalSubscriptionCollectionsModel();
    }
    return obj;
  }
}
