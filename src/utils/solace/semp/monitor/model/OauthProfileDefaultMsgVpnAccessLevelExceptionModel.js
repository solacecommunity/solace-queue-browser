import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileDefaultMsgVpnAccessLevelExceptionModel model module.
 * @module model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel
 * @version 2.36
 */
export class OauthProfileDefaultMsgVpnAccessLevelExceptionModel {
  /**
   * Constructs a new <code>OauthProfileDefaultMsgVpnAccessLevelExceptionModel</code>.
   * @alias module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileDefaultMsgVpnAccessLevelExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel} The populated <code>OauthProfileDefaultMsgVpnAccessLevelExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileDefaultMsgVpnAccessLevelExceptionModel();
      if (data.hasOwnProperty('accessLevel'))
        obj.accessLevel = ApiClient.convertToType(data['accessLevel'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>accessLevel</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionModel.AccessLevelEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "read-only"
   * @const
   */
  readOnly: "read-only",

  /**
   * value: "read-write"
   * @const
   */
  readWrite: "read-write"
};
/**
 * The message VPN access level. The allowed values and their meaning are:  <pre> \"none\" - User has no access to a Message VPN. \"read-only\" - User has read-only access to a Message VPN. \"read-write\" - User has read-write access to most Message VPN settings. </pre> 
 * @member {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel.AccessLevelEnum} accessLevel
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionModel.prototype.accessLevel = undefined;

/**
 * The name of the message VPN.
 * @member {String} msgVpnName
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionModel.prototype.oauthProfileName = undefined;

