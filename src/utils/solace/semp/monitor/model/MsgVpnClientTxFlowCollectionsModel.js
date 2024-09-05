import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientTxFlowCollectionsModel model module.
 * @module model/MsgVpnClientTxFlowCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientTxFlowCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientTxFlowCollectionsModel</code>.
   * @alias module:model/MsgVpnClientTxFlowCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientTxFlowCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTxFlowCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTxFlowCollectionsModel} The populated <code>MsgVpnClientTxFlowCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTxFlowCollectionsModel();
    }
    return obj;
  }
}
