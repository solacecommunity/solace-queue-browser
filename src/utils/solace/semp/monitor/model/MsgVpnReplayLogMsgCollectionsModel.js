import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnReplayLogMsgCollectionsModel model module.
 * @module model/MsgVpnReplayLogMsgCollectionsModel
 * @version 2.36
 */
export class MsgVpnReplayLogMsgCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogMsgCollectionsModel</code>.
   * @alias module:model/MsgVpnReplayLogMsgCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnReplayLogMsgCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogMsgCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogMsgCollectionsModel} The populated <code>MsgVpnReplayLogMsgCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogMsgCollectionsModel();
    }
    return obj;
  }
}
