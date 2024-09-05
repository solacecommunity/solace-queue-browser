import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel} from './MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel} from './MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimModel} from './MsgVpnAuthenticationOauthProfileClientRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel} The populated <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAuthenticationOauthProfileClientRequiredClaimModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel>} collections
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel>} data
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel>} links
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimsResponseModel.prototype.meta = undefined;

