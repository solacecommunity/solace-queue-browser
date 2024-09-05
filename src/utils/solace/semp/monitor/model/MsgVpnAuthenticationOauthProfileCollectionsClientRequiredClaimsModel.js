import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel} The populated <code>MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
    }
    return obj;
  }
}

/**
 * The total number of objects in the clientRequiredClaims collection.
 * @member {Number} count
 */
MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel.prototype.count = undefined;

