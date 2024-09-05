import {ApiClient} from '../ApiClient';
import {MsgVpnAuthenticationOauthProfileCollectionsModel} from './MsgVpnAuthenticationOauthProfileCollectionsModel';
import {MsgVpnAuthenticationOauthProfileLinksModel} from './MsgVpnAuthenticationOauthProfileLinksModel';
import {MsgVpnAuthenticationOauthProfileModel} from './MsgVpnAuthenticationOauthProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthenticationOauthProfileResponseModel model module.
 * @module model/MsgVpnAuthenticationOauthProfileResponseModel
 * @version 2.36
 */
export class MsgVpnAuthenticationOauthProfileResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthenticationOauthProfileResponseModel</code>.
   * @alias module:model/MsgVpnAuthenticationOauthProfileResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthenticationOauthProfileResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthenticationOauthProfileResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthenticationOauthProfileResponseModel} The populated <code>MsgVpnAuthenticationOauthProfileResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthenticationOauthProfileResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAuthenticationOauthProfileCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAuthenticationOauthProfileModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAuthenticationOauthProfileLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileCollectionsModel} collections
 */
MsgVpnAuthenticationOauthProfileResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileModel} data
 */
MsgVpnAuthenticationOauthProfileResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAuthenticationOauthProfileLinksModel} links
 */
MsgVpnAuthenticationOauthProfileResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthenticationOauthProfileResponseModel.prototype.meta = undefined;

