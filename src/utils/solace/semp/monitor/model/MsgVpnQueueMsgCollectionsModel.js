import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueMsgCollectionsModel model module.
 * @module model/MsgVpnQueueMsgCollectionsModel
 * @version 2.36
 */
export class MsgVpnQueueMsgCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnQueueMsgCollectionsModel</code>.
   * @alias module:model/MsgVpnQueueMsgCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueMsgCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueMsgCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueMsgCollectionsModel} The populated <code>MsgVpnQueueMsgCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueMsgCollectionsModel();
    }
    return obj;
  }
}
