import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueSubscriptionCollectionsModel model module.
 * @module model/MsgVpnQueueSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnQueueSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnQueueSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnQueueSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueSubscriptionCollectionsModel} The populated <code>MsgVpnQueueSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueSubscriptionCollectionsModel();
    }
    return obj;
  }
}
