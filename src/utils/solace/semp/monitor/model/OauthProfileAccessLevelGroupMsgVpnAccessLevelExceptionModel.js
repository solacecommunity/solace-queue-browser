import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel model module.
 * @module model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} The populated <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel();
      if (data.hasOwnProperty('accessLevel'))
        obj.accessLevel = ApiClient.convertToType(data['accessLevel'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
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
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.AccessLevelEnum = {
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
 * @member {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.AccessLevelEnum} accessLevel
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.prototype.accessLevel = undefined;

/**
 * The name of the group.
 * @member {String} groupName
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.prototype.groupName = undefined;

/**
 * The name of the message VPN.
 * @member {String} msgVpnName
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.prototype.oauthProfileName = undefined;

