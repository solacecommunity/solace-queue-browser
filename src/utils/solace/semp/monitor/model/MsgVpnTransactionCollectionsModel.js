import {ApiClient} from '../ApiClient';
import {MsgVpnTransactionCollectionsConsumerMsgsModel} from './MsgVpnTransactionCollectionsConsumerMsgsModel';
import {MsgVpnTransactionCollectionsPublisherMsgsModel} from './MsgVpnTransactionCollectionsPublisherMsgsModel';

/**
 * The MsgVpnTransactionCollectionsModel model module.
 * @module model/MsgVpnTransactionCollectionsModel
 * @version 2.36
 */
export class MsgVpnTransactionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTransactionCollectionsModel</code>.
   * @alias module:model/MsgVpnTransactionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionCollectionsModel} The populated <code>MsgVpnTransactionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionCollectionsModel();
      if (data.hasOwnProperty('consumerMsgs'))
        obj.consumerMsgs = MsgVpnTransactionCollectionsConsumerMsgsModel.constructFromObject(data['consumerMsgs']);
      if (data.hasOwnProperty('publisherMsgs'))
        obj.publisherMsgs = MsgVpnTransactionCollectionsPublisherMsgsModel.constructFromObject(data['publisherMsgs']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTransactionCollectionsConsumerMsgsModel} consumerMsgs
 */
MsgVpnTransactionCollectionsModel.prototype.consumerMsgs = undefined;

/**
 * @member {module:model/MsgVpnTransactionCollectionsPublisherMsgsModel} publisherMsgs
 */
MsgVpnTransactionCollectionsModel.prototype.publisherMsgs = undefined;

