import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProviderCollectionsModel} from './MsgVpnAuthenticationOauthProviderCollectionsModel';
import {MsgVpnAuthenticationOauthProviderLinksModel} from './MsgVpnAuthenticationOauthProviderLinksModel';
import {MsgVpnAuthenticationOauthProviderModel} from './MsgVpnAuthenticationOauthProviderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProvidersResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProvidersResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProvidersResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProvidersResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProvidersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProvidersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProvidersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProvidersResponseModel} The populated <code>MsgVpnAuthenticationOauthProvidersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProvidersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAuthenticationOauthProviderCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAuthenticationOauthProviderModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAuthenticationOauthProviderLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProviderCollectionsModel>} collections
 */
MsgVpnAuthenticationOauthProvidersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProviderModel>} data
 */
MsgVpnAuthenticationOauthProvidersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthenticationOauthProviderLinksModel>} links
 */
MsgVpnAuthenticationOauthProvidersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProvidersResponseModel.prototype.meta = undefined;

