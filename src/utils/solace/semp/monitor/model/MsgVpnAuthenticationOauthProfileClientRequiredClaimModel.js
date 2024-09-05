import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileClientRequiredClaimModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileClientRequiredClaimModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel} The populated <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileClientRequiredClaimModel();
      if (data.hasOwnProperty('clientRequiredClaimName'))
        obj.clientRequiredClaimName = ApiClient.convertToType(data['clientRequiredClaimName'], 'String');
      if (data.hasOwnProperty('clientRequiredClaimValue'))
        obj.clientRequiredClaimValue = ApiClient.convertToType(data['clientRequiredClaimValue'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the ID token claim to verify.
 * @member {String} clientRequiredClaimName
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimModel.prototype.clientRequiredClaimName = undefined;

/**
 * The required claim value.
 * @member {String} clientRequiredClaimValue
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimModel.prototype.clientRequiredClaimValue = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimModel.prototype.oauthProfileName = undefined;

