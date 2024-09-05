import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel} from './MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel';
import {MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel} from './MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel';

/**
 * The MsgVpnAuthenticationOauthProfileCollectionsModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileCollectionsModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileCollectionsModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileCollectionsModel} The populated <code>MsgVpnAuthenticationOauthProfileCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileCollectionsModel();
      if (data.hasOwnProperty('clientRequiredClaims'))
        obj.clientRequiredClaims = MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel.constructFromObject(data['clientRequiredClaims']);
      if (data.hasOwnProperty('resourceServerRequiredClaims'))
        obj.resourceServerRequiredClaims = MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel.constructFromObject(data['resourceServerRequiredClaims']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileCollectionsClientRequiredClaimsModel} clientRequiredClaims
 */
MsgVpnAuthenticationOauthProfileCollectionsModel.prototype.clientRequiredClaims = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileCollectionsResourceServerRequiredClaimsModel} resourceServerRequiredClaims
 */
MsgVpnAuthenticationOauthProfileCollectionsModel.prototype.resourceServerRequiredClaims = undefined;

