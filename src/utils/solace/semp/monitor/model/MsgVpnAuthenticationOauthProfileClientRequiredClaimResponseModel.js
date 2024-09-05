import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel} from './MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel} from './MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel';
import {MsgVpnAuthenticationOauthProfileClientRequiredClaimModel} from './MsgVpnAuthenticationOauthProfileClientRequiredClaimModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel} The populated <code>MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAuthenticationOauthProfileClientRequiredClaimModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimCollectionsModel} collections
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimModel} data
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileClientRequiredClaimLinksModel} links
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProfileClientRequiredClaimResponseModel.prototype.meta = undefined;

