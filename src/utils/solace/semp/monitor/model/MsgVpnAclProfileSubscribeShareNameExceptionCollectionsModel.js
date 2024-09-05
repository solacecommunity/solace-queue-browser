import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel model module.
 * @module model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel} The populated <code>MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel();
    }
    return obj;
  }
}
