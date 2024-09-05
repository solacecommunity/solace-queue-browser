import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel model module.
 * @module model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel
 * @version 2.36
 */
export class MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel</code>.
   * @alias module:model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel} The populated <code>MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the topicFilterSubscriptions collection. Available since 2.27.
 * @member {Number} count
 */
MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel.prototype.count = undefined;

