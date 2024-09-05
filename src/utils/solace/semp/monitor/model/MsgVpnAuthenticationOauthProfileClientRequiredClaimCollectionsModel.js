import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel} The populated <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel();
    }
    return obj;
  }
}
