import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfilePublishTopicExceptionCollectionsModel model module.
 * @module model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishTopicExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishTopicExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishTopicExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel} The populated <code>MsgVpnAclProfilePublishTopicExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishTopicExceptionCollectionsModel();
    }
    return obj;
  }
}
