import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientTransactedSessionCollectionsModel model module.
 * @module model/MsgVpnClientTransactedSessionCollectionsModel
 * @version 2.36
 */
export class MsgVpnClientTransactedSessionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnClientTransactedSessionCollectionsModel</code>.
   * @alias module:model/MsgVpnClientTransactedSessionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientTransactedSessionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTransactedSessionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTransactedSessionCollectionsModel} The populated <code>MsgVpnClientTransactedSessionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTransactedSessionCollectionsModel();
    }
    return obj;
  }
}
