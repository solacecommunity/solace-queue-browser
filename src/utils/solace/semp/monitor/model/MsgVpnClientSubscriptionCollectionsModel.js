import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientSubscriptionCollectionsModel model module.
 * @module model/MsgVpnClientSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnClientSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientSubscriptionCollectionsModel} The populated <code>MsgVpnClientSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientSubscriptionCollectionsModel();
    }
    return obj;
  }
}
