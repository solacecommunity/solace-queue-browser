import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAclProfileClientConnectExceptionModel model module.
 * @module model/MsgVpnAclProfileClientConnectExceptionModel
 * @version 2.36
 */
export class MsgVpnAclProfileClientConnectExceptionModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileClientConnectExceptionModel</code>.
   * @alias module:model/MsgVpnAclProfileClientConnectExceptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAclProfileClientConnectExceptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileClientConnectExceptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileClientConnectExceptionModel} The populated <code>MsgVpnAclProfileClientConnectExceptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileClientConnectExceptionModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('clientConnectExceptionAddress'))
        obj.clientConnectExceptionAddress = ApiClient.convertToType(data['clientConnectExceptionAddress'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ACL Profile.
 * @member {String} aclProfileName
 */
MsgVpnAclProfileClientConnectExceptionModel.prototype.aclProfileName = undefined;

/**
 * The IP address/netmask of the client connect exception in canonical CIDR form.
 * @member {String} clientConnectExceptionAddress
 */
MsgVpnAclProfileClientConnectExceptionModel.prototype.clientConnectExceptionAddress = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAclProfileClientConnectExceptionModel.prototype.msgVpnName = undefined;

