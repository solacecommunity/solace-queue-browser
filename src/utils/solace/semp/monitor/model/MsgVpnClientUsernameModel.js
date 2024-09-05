import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnClientUsernameModel model module.
 * @module model/MsgVpnClientUsernameModel
 * @version 2.36
 */
export class MsgVpnClientUsernameModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameModel</code>.
   * @alias module:model/MsgVpnClientUsernameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameModel} The populated <code>MsgVpnClientUsernameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('clientUsername'))
        obj.clientUsername = ApiClient.convertToType(data['clientUsername'], 'String');
      if (data.hasOwnProperty('dynamic'))
        obj.dynamic = ApiClient.convertToType(data['dynamic'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedEndpointPermissionOverrideEnabled'))
        obj.guaranteedEndpointPermissionOverrideEnabled = ApiClient.convertToType(data['guaranteedEndpointPermissionOverrideEnabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('subscriptionManagerEnabled'))
        obj.subscriptionManagerEnabled = ApiClient.convertToType(data['subscriptionManagerEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The ACL Profile of the Client Username.
 * @member {String} aclProfileName
 */
MsgVpnClientUsernameModel.prototype.aclProfileName = undefined;

/**
 * The Client Profile of the Client Username.
 * @member {String} clientProfileName
 */
MsgVpnClientUsernameModel.prototype.clientProfileName = undefined;

/**
 * The name of the Client Username.
 * @member {String} clientUsername
 */
MsgVpnClientUsernameModel.prototype.clientUsername = undefined;

/**
 * Indicates whether the Client Username was dynamically created based on remote authorization data.
 * @member {Boolean} dynamic
 */
MsgVpnClientUsernameModel.prototype.dynamic = undefined;

/**
 * Indicates whether the Client Username is enabled.
 * @member {Boolean} enabled
 */
MsgVpnClientUsernameModel.prototype.enabled = undefined;

/**
 * Indicates whether the guaranteed endpoint permission override is enabled for the Client Username.
 * @member {Boolean} guaranteedEndpointPermissionOverrideEnabled
 */
MsgVpnClientUsernameModel.prototype.guaranteedEndpointPermissionOverrideEnabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientUsernameModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether the subscription management capability is enabled for the Client Username.
 * @member {Boolean} subscriptionManagerEnabled
 */
MsgVpnClientUsernameModel.prototype.subscriptionManagerEnabled = undefined;

