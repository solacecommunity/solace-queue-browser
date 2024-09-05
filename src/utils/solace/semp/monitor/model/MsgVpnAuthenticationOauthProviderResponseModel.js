import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProviderCollectionsModel} from './MsgVpnAuthenticationOauthProviderCollectionsModel';
import {MsgVpnAuthenticationOauthProviderLinksModel} from './MsgVpnAuthenticationOauthProviderLinksModel';
import {MsgVpnAuthenticationOauthProviderModel} from './MsgVpnAuthenticationOauthProviderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProviderResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProviderResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProviderResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProviderResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProviderResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProviderResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProviderResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProviderResponseModel} The populated <code>MsgVpnAuthenticationOauthProviderResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProviderResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAuthenticationOauthProviderCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAuthenticationOauthProviderModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAuthenticationOauthProviderLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAuthenticationOauthProviderCollectionsModel} collections
 */
MsgVpnAuthenticationOauthProviderResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProviderModel} data
 */
MsgVpnAuthenticationOauthProviderResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProviderLinksModel} links
 */
MsgVpnAuthenticationOauthProviderResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProviderResponseModel.prototype.meta = undefined;

