import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileSubscribeShareNameExceptionLinksModel model module.
 * @module model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeShareNameExceptionLinksModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeShareNameExceptionLinksModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeShareNameExceptionLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel} The populated <code>MsgVpnAclProfileSubscribeShareNameExceptionLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeShareNameExceptionLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Subscribe Share Name Exception object.
 * @member {String} uri
 */
MsgVpnAclProfileSubscribeShareNameExceptionLinksModel.prototype.uri = undefined;

