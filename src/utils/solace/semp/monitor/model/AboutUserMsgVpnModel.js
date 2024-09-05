import {ApiClient} from '../ApiClient';

/**
 * The AboutUserMsgVpnModel model module.
 * @module model/AboutUserMsgVpnModel
 * @version 2.36
 */
export class AboutUserMsgVpnModel {
  /**
   * Constructs a new <code>AboutUserMsgVpnModel</code>.
   * @alias module:model/AboutUserMsgVpnModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AboutUserMsgVpnModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AboutUserMsgVpnModel} obj Optional instance to populate.
   * @return {module:model/AboutUserMsgVpnModel} The populated <code>AboutUserMsgVpnModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AboutUserMsgVpnModel();
      if (data.hasOwnProperty('accessLevel'))
        obj.accessLevel = ApiClient.convertToType(data['accessLevel'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>accessLevel</code> property.
 * @enum {String}
 * @readonly
 */
AboutUserMsgVpnModel.AccessLevelEnum = {
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
 * The Message VPN access level of the User. The allowed values and their meaning are:  <pre> \"none\" - No access. \"read-only\" - Read only access. \"read-write\" - Read and write access. </pre> 
 * @member {module:model/AboutUserMsgVpnModel.AccessLevelEnum} accessLevel
 */
AboutUserMsgVpnModel.prototype.accessLevel = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
AboutUserMsgVpnModel.prototype.msgVpnName = undefined;

