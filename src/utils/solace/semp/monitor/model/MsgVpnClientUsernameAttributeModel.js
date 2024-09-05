import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientUsernameAttributeModel model module.
 * @module model/MsgVpnClientUsernameAttributeModel
 * @version 2.36
 */
export class MsgVpnClientUsernameAttributeModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameAttributeModel</code>.
   * @alias module:model/MsgVpnClientUsernameAttributeModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameAttributeModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameAttributeModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameAttributeModel} The populated <code>MsgVpnClientUsernameAttributeModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameAttributeModel();
      if (data.hasOwnProperty('attributeName'))
        obj.attributeName = ApiClient.convertToType(data['attributeName'], 'String');
      if (data.hasOwnProperty('attributeValue'))
        obj.attributeValue = ApiClient.convertToType(data['attributeValue'], 'String');
      if (data.hasOwnProperty('clientUsername'))
        obj.clientUsername = ApiClient.convertToType(data['clientUsername'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Attribute.
 * @member {String} attributeName
 */
MsgVpnClientUsernameAttributeModel.prototype.attributeName = undefined;

/**
 * The value of the Attribute.
 * @member {String} attributeValue
 */
MsgVpnClientUsernameAttributeModel.prototype.attributeValue = undefined;

/**
 * The name of the Client Username.
 * @member {String} clientUsername
 */
MsgVpnClientUsernameAttributeModel.prototype.clientUsername = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientUsernameAttributeModel.prototype.msgVpnName = undefined;

