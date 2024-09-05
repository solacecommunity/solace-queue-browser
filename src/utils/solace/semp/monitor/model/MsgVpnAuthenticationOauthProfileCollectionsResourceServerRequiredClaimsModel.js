import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel} The populated <code>MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the resourceServerRequiredClaims collection.
 * @member {Number} count
 */
MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel.prototype.count = undefined;

