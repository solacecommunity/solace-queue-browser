import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogTopicFilterSubscriptionLinksModel model module.
 * @module model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel
 * @version 2.36
 */
export class MsgVpnReplayLogTopicFilterSubscriptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogTopicFilterSubscriptionLinksModel</code>.
   * @alias module:model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogTopicFilterSubscriptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogTopicFilterSubscriptionLinksModel} The populated <code>MsgVpnReplayLogTopicFilterSubscriptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogTopicFilterSubscriptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Topic Filter Subscription object.
 * @member {String} uri
 */
MsgVpnReplayLogTopicFilterSubscriptionLinksModel.prototype.uri = undefined;

