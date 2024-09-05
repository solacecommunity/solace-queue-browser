import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientUsernameAttributeLinksModel model module.
 * @module model/MsgVpnClientUsernameAttributeLinksModel
 * @version 2.36
 */
export class MsgVpnClientUsernameAttributeLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameAttributeLinksModel</code>.
   * @alias module:model/MsgVpnClientUsernameAttributeLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameAttributeLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameAttributeLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameAttributeLinksModel} The populated <code>MsgVpnClientUsernameAttributeLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameAttributeLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Username Attribute object.
 * @member {String} uri
 */
MsgVpnClientUsernameAttributeLinksModel.prototype.uri = undefined;

