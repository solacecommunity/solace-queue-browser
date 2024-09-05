import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogCollectionsMsgsModel} from './MsgVpnReplayLogCollectionsMsgsModel';
import {MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel} from './MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel';

/**
 * The MsgVpnReplayLogCollectionsModel model module.
 * @module model/MsgVpnReplayLogCollectionsModel
 * @version 2.36
 */
export class MsgVpnReplayLogCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogCollectionsModel</code>.
   * @alias module:model/MsgVpnReplayLogCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogCollectionsModel} The populated <code>MsgVpnReplayLogCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogCollectionsModel();
      if (data.hasOwnProperty('msgs'))
        obj.msgs = MsgVpnReplayLogCollectionsMsgsModel.constructFromObject(data['msgs']);
      if (data.hasOwnProperty('topicFilterSubscriptions'))
        obj.topicFilterSubscriptions = MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel.constructFromObject(data['topicFilterSubscriptions']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnReplayLogCollectionsMsgsModel} msgs
 */
MsgVpnReplayLogCollectionsModel.prototype.msgs = undefined;

/**
 * @member {module:model/MsgVpnReplayLogCollectionsTopicFilterSubscriptionsModel} topicFilterSubscriptions
 */
MsgVpnReplayLogCollectionsModel.prototype.topicFilterSubscriptions = undefined;

