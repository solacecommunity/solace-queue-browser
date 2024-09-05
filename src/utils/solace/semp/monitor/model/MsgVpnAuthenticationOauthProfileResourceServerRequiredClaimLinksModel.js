import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel} The populated <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel();
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * The URI of this Required Claim object.
 * @member {String} uri
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel.prototype.uri = undefined;

