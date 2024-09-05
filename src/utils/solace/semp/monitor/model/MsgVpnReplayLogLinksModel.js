import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogLinksModel model module.
 * @module model/MsgVpnReplayLogLinksModel
 * @version 2.36
 */
export class MsgVpnReplayLogLinksModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogLinksModel</code>.
   * @alias module:model/MsgVpnReplayLogLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogLinksModel} The populated <code>MsgVpnReplayLogLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogLinksModel();
      if (data.hasOwnProperty('msgsUri'))
        obj.msgsUri = ApiClient.convertToType(data['msgsUri'], 'String');
      if (data.hasOwnProperty('topicFilterSubscriptionsUri'))
        obj.topicFilterSubscriptionsUri = ApiClient.convertToType(data['topicFilterSubscriptionsUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Replay Log's collection of Message objects.
 * @member {String} msgsUri
 */
MsgVpnReplayLogLinksModel.prototype.msgsUri = undefined;

/**
 * The URI of this Replay Log's collection of Topic Filter Subscription objects. Available since 2.27.
 * @member {String} topicFilterSubscriptionsUri
 */
MsgVpnReplayLogLinksModel.prototype.topicFilterSubscriptionsUri = undefined;

/**
 * The URI of this Replay Log object.
 * @member {String} uri
 */
MsgVpnReplayLogLinksModel.prototype.uri = undefined;

