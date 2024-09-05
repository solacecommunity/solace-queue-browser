import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel} The populated <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel();
    }
    return obj;
  }
}
