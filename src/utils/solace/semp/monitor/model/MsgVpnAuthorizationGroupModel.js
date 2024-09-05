import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthorizationGroupModel model module.
 * @module model/MsgVpnAuthorizationGroupModel
 * @version 2.36
 */
export class MsgVpnAuthorizationGroupModel {
  /**
   * Constructs a new <code>MsgVpnAuthorizationGroupModel</code>.
   * @alias module:model/MsgVpnAuthorizationGroupModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthorizationGroupModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthorizationGroupModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthorizationGroupModel} The populated <code>MsgVpnAuthorizationGroupModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthorizationGroupModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('authorizationGroupName'))
        obj.authorizationGroupName = ApiClient.convertToType(data['authorizationGroupName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * The ACL Profile of the Authorization Group.
 * @member {String} aclProfileName
 */
MsgVpnAuthorizationGroupModel.prototype.aclProfileName = undefined;

/**
 * The name of the Authorization Group. For LDAP groups, special care is needed if the group name contains special characters such as '#', '+', ';', '=' as the value of the group name returned from the LDAP server might prepend those characters with '\\'. For example a group name called 'test#,lab,com' will be returned from the LDAP server as 'test\\#,lab,com'.
 * @member {String} authorizationGroupName
 */
MsgVpnAuthorizationGroupModel.prototype.authorizationGroupName = undefined;

/**
 * The Client Profile of the Authorization Group.
 * @member {String} clientProfileName
 */
MsgVpnAuthorizationGroupModel.prototype.clientProfileName = undefined;

/**
 * Indicates whether the Authorization Group is enabled.
 * @member {Boolean} enabled
 */
MsgVpnAuthorizationGroupModel.prototype.enabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAuthorizationGroupModel.prototype.msgVpnName = undefined;

