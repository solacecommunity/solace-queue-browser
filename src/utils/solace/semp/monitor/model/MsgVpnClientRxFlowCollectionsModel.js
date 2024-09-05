import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientRxFlowCollectionsModel model module.
 * @module model/MsgVpnClientRxFlowCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientRxFlowCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientRxFlowCollectionsModel</code>.
   * @alias module:model/MsgVpnClientRxFlowCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientRxFlowCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientRxFlowCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientRxFlowCollectionsModel} The populated <code>MsgVpnClientRxFlowCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientRxFlowCollectionsModel();
    }
    return obj;
  }
}
