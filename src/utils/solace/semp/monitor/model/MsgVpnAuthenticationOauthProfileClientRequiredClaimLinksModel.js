import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel} The populated <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel();
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
MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel.prototype.uri = undefined;

