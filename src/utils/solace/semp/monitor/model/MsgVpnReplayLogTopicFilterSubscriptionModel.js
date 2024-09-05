import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogTopicFilterSubscriptionModel model module.
 * @module model/MsgVpnReplayLogTopicFilterSubscriptionModel
 * @version 2.36
 */
export class MsgVpnReplayLogTopicFilterSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogTopicFilterSubscriptionModel</code>.
   * @alias module:model/MsgVpnReplayLogTopicFilterSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogTopicFilterSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogTopicFilterSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogTopicFilterSubscriptionModel} The populated <code>MsgVpnReplayLogTopicFilterSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogTopicFilterSubscriptionModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('replayLogName'))
        obj.replayLogName = ApiClient.convertToType(data['replayLogName'], 'String');
      if (data.hasOwnProperty('topicFilterSubscription'))
        obj.topicFilterSubscription = ApiClient.convertToType(data['topicFilterSubscription'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnReplayLogTopicFilterSubscriptionModel.prototype.msgVpnName = undefined;

/**
 * The name of the Replay Log.
 * @member {String} replayLogName
 */
MsgVpnReplayLogTopicFilterSubscriptionModel.prototype.replayLogName = undefined;

/**
 * The topic of the Subscription.
 * @member {String} topicFilterSubscription
 */
MsgVpnReplayLogTopicFilterSubscriptionModel.prototype.topicFilterSubscription = undefined;

