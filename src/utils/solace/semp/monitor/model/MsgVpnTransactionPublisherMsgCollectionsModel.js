import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTransactionPublisherMsgCollectionsModel model module.
 * @module model/MsgVpnTransactionPublisherMsgCollectionsModel
 * @version 2.36
 */
export class MsgVpnTransactionPublisherMsgCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnTransactionPublisherMsgCollectionsModel</code>.
   * @alias module:model/MsgVpnTransactionPublisherMsgCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTransactionPublisherMsgCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTransactionPublisherMsgCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTransactionPublisherMsgCollectionsModel} The populated <code>MsgVpnTransactionPublisherMsgCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTransactionPublisherMsgCollectionsModel();
    }
    return obj;
  }
}
