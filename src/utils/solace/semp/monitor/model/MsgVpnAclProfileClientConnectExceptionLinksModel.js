import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileClientConnectExceptionLinksModel model module.
 * @module model/MsgVpnAclProfileClientConnectExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfileClientConnectExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileClientConnectExceptionLinksModel</code>.
   * @alias module:model/MsgVpnAclProfileClientConnectExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileClientConnectExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileClientConnectExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileClientConnectExceptionLinksModel} The populated <code>MsgVpnAclProfileClientConnectExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileClientConnectExceptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Connect Exception object.
 * @member {String} uri
 */
MsgVpnAclProfileClientConnectExceptionLinksModel.prototype.uri = undefined;

