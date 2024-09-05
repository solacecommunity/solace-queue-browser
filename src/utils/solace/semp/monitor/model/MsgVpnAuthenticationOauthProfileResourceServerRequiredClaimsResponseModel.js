import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel} from './MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel} from './MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel} from './MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel} The populated <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel>} collections
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel>} data
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel>} links
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimsResponseModel.prototype.meta = undefined;

