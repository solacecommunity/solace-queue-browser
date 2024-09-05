import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel} The populated <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel();
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('oauthProfileName'))
        obj.oauthProfileName = ApiClient.convertToType(data['oauthProfileName'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredClaimName'))
        obj.resourceServerRequiredClaimName = ApiClient.convertToType(data['resourceServerRequiredClaimName'], 'String');
      if (data.hasOwnProperty('resourceServerRequiredClaimValue'))
        obj.resourceServerRequiredClaimValue = ApiClient.convertToType(data['resourceServerRequiredClaimValue'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel.prototype.msgVpnName = undefined;

/**
 * The name of the OAuth profile.
 * @member {String} oauthProfileName
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel.prototype.oauthProfileName = undefined;

/**
 * The name of the access token claim to verify.
 * @member {String} resourceServerRequiredClaimName
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel.prototype.resourceServerRequiredClaimName = undefined;

/**
 * The required claim value.
 * @member {String} resourceServerRequiredClaimValue
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel.prototype.resourceServerRequiredClaimValue = undefined;

