import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel model module.
 * @module model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel</code>.
   * @alias module:model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel} The populated <code>MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogTopicFilterSubscriptionCollectionsModel();
    }
    return obj;
  }
}
