import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeExceptionLinksModel model module.
 * @module model/MsgVpnAclProfileSubscribeExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeExceptionLinksModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeExceptionLinksModel} The populated <code>MsgVpnAclProfileSubscribeExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeExceptionLinksModel();
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
MsgVpnAclProfileSubscribeExceptionLinksModel.prototype.uri = undefined;

