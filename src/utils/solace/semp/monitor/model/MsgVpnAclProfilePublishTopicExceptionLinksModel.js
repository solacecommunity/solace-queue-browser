import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfilePublishTopicExceptionLinksModel model module.
 * @module model/MsgVpnAclProfilePublishTopicExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishTopicExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishTopicExceptionLinksModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishTopicExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishTopicExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishTopicExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishTopicExceptionLinksModel} The populated <code>MsgVpnAclProfilePublishTopicExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishTopicExceptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Publish Topic Exception object.
 * @member {String} uri
 */
MsgVpnAclProfilePublishTopicExceptionLinksModel.prototype.uri = undefined;

