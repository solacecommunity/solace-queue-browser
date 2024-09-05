import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientUsernameLinksModel model module.
 * @module model/MsgVpnClientUsernameLinksModel
 * @version 2.36
 */
export class MsgVpnClientUsernameLinksModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameLinksModel</code>.
   * @alias module:model/MsgVpnClientUsernameLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameLinksModel} The populated <code>MsgVpnClientUsernameLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameLinksModel();
      if (data.hasOwnProperty('attributesUri'))
        obj.attributesUri = ApiClient.convertToType(data['attributesUri'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Client Username's collection of Client Username Attribute objects. Available since 2.27.
 * @member {String} attributesUri
 */
MsgVpnClientUsernameLinksModel.prototype.attributesUri = undefined;

/**
 * The URI of this Client Username object.
 * @member {String} uri
 */
MsgVpnClientUsernameLinksModel.prototype.uri = undefined;

