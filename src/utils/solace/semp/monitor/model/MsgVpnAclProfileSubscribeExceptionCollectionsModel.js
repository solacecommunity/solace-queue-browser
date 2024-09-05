import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeExceptionCollectionsModel model module.
 * @module model/MsgVpnAclProfileSubscribeExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeExceptionCollectionsModel} The populated <code>MsgVpnAclProfileSubscribeExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeExceptionCollectionsModel();
    }
    return obj;
  }
}
