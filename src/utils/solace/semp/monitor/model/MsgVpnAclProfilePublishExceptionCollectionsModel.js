import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfilePublishExceptionCollectionsModel model module.
 * @module model/MsgVpnAclProfilePublishExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishExceptionCollectionsModel} The populated <code>MsgVpnAclProfilePublishExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishExceptionCollectionsModel();
    }
    return obj;
  }
}
