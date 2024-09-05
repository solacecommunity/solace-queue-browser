import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel} from './MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel} from './MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel';
import {MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel} from './MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel} The populated <code>MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimCollectionsModel} collections
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimModel} data
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimLinksModel} links
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProfileResourceServerRequiredClaimResponseModel.prototype.meta = undefined;

