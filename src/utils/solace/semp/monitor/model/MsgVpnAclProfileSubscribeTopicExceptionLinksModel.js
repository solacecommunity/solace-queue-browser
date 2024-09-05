import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeTopicExceptionLinksModel model module.
 * @module model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeTopicExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeTopicExceptionLinksModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeTopicExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel} The populated <code>MsgVpnAclProfileSubscribeTopicExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeTopicExceptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Subscribe Topic Exception object.
 * @member {String} uri
 */
MsgVpnAclProfileSubscribeTopicExceptionLinksModel.prototype.uri = undefined;

