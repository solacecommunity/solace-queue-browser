import {ApiClient} from '../ApiClient';

/**
 * The OauthProfileAccessLevelGroupModel model module.
 * @module model/OauthProfileAccessLevelGroupModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupModel} The populated <code>OauthProfileAccessLevelGroupModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupModel();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('globalAccessLevel'))
        obj.globalAccessLevel = ApiClient.convertToType(data['globalAccessLevel'], 'String');
      if (data.hasOwnProperty('groupName'))
        obj.groupName = ApiClient.convertToType(data['groupName'], 'String');
      if (data.hasOwnProperty('msgVpnAccessLevel'))
        obj.msgVpnAccessLevel = ApiClient.convertToType(data['msgVpnAccessLevel'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * A description for the group.
 * @member {String} description
 */
OauthProfileAccessLevelGroupModel.prototype.description = undefined;

/**
 * Allowed values for the <code>globalAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileAccessLevelGroupModel.GlobalAccessLevelEnum = {
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
  readWrite: "read-write",

  /**
   * value: "admin"
   * @const
   */
  admin: "admin"
};
/**
 * The global access level for this group. The allowed values and their meaning are:  <pre> \"none\" - User has no access to global data. \"read-only\" - User has read-only access to global data. \"read-write\" - User has read-write access to most global data. \"admin\" - User has read-write access to all global data. </pre> 
 * @member {module:model/OauthProfileAccessLevelGroupModel.GlobalAccessLevelEnum} globalAccessLevel
 */
OauthProfileAccessLevelGroupModel.prototype.globalAccessLevel = undefined;

/**
 * The name of the group.
 * @member {String} groupName
 */
OauthProfileAccessLevelGroupModel.prototype.groupName = undefined;

/**
 * Allowed values for the <code>msgVpnAccessLevel</code> property.
 * @enum {String}
 * @readonly
 */
OauthProfileAccessLevelGroupModel.MsgVpnAccessLevelEnum = {
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
 * The default message VPN access level for this group. The allowed values and their meaning are:  <pre> \"none\" - User has no access to a Message VPN. \"read-only\" - User has read-only access to a Message VPN. \"read-write\" - User has read-write access to most Message VPN settings. </pre> 
 * @member {module:model/OauthProfileAccessLevelGroupModel.MsgVpnAccessLevelEnum} msgVpnAccessLevel
 */
OauthProfileAccessLevelGroupModel.prototype.msgVpnAccessLevel = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
OauthProfileAccessLevelGroupModel.prototype.oauthProfileName = undefined;

