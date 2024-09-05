import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnQueueTxFlowCollectionsModel model module.
 * @module model/MsgVpnQueueTxFlowCollectionsModel
 * @version 2.36
 */
export class MsgVpnQueueTxFlowCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnQueueTxFlowCollectionsModel</code>.
   * @alias module:model/MsgVpnQueueTxFlowCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnQueueTxFlowCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTxFlowCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTxFlowCollectionsModel} The populated <code>MsgVpnQueueTxFlowCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTxFlowCollectionsModel();
    }
    return obj;
  }
}
