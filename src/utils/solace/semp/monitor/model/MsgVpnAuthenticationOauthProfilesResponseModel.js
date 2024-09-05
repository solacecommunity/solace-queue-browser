import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileCollectionsModel} from './MsgVpnAuthenticationOauthProfileCollectionsModel';
import {MsgVpnAuthenticationOauthProfileLinksModel} from './MsgVpnAuthenticationOauthProfileLinksModel';
import {MsgVpnAuthenticationOauthProfileModel} from './MsgVpnAuthenticationOauthProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProfilesResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProfilesResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfilesResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfilesResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfilesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfilesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfilesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfilesResponseModel} The populated <code>MsgVpnAuthenticationOauthProfilesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfilesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAuthenticationOauthProfileCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAuthenticationOauthProfileModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAuthenticationOauthProfileLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileCollectionsModel>} collections
 */
MsgVpnAuthenticationOauthProfilesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileModel>} data
 */
MsgVpnAuthenticationOauthProfilesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProfileLinksModel>} links
 */
MsgVpnAuthenticationOauthProfilesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProfilesResponseModel.prototype.meta = undefined;

