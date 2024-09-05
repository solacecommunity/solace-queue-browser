import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfilePublishExceptionLinksModel model module.
 * @module model/MsgVpnAclProfilePublishExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishExceptionLinksModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishExceptionLinksModel} The populated <code>MsgVpnAclProfilePublishExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishExceptionLinksModel();
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
MsgVpnAclProfilePublishExceptionLinksModel.prototype.uri = undefined;

