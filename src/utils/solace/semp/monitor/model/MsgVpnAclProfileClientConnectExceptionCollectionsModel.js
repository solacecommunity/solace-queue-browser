import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileClientConnectExceptionCollectionsModel model module.
 * @module model/MsgVpnAclProfileClientConnectExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileClientConnectExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileClientConnectExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfileClientConnectExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileClientConnectExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileClientConnectExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileClientConnectExceptionCollectionsModel} The populated <code>MsgVpnAclProfileClientConnectExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileClientConnectExceptionCollectionsModel();
    }
    return obj;
  }
}
