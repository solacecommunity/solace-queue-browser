import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionConsumerMsgCollectionsModel model module.
 * @module model/MsgVpnTransactionConsumerMsgCollectionsModel
 * @version 2.36
 */
export class MsgVpnTransactionConsumerMsgCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTransactionConsumerMsgCollectionsModel</code>.
   * @alias module:model/MsgVpnTransactionConsumerMsgCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionConsumerMsgCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionConsumerMsgCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionConsumerMsgCollectionsModel} The populated <code>MsgVpnTransactionConsumerMsgCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionConsumerMsgCollectionsModel();
    }
    return obj;
  }
}
