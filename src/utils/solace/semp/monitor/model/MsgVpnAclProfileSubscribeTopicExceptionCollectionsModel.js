import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel model module.
 * @module model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel} The populated <code>MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel();
    }
    return obj;
  }
}
