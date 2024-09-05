import {ApiClient} from '../ApiClient';
import {MsgVpnClientUsernameCollectionsModel} from './MsgVpnClientUsernameCollectionsModel';
import {MsgVpnClientUsernameLinksModel} from './MsgVpnClientUsernameLinksModel';
import {MsgVpnClientUsernameModel} from './MsgVpnClientUsernameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientUsernamesResponseModel model module.
 * @module model/MsgVpnClientUsernamesResponseModel
 * @version 2.36
 */
export class MsgVpnClientUsernamesResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernamesResponseModel</code>.
   * @alias module:model/MsgVpnClientUsernamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientUsernamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernamesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernamesResponseModel} The populated <code>MsgVpnClientUsernamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientUsernameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientUsernameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientUsernameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientUsernameCollectionsModel>} collections
 */
MsgVpnClientUsernamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientUsernameModel>} data
 */
MsgVpnClientUsernamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientUsernameLinksModel>} links
 */
MsgVpnClientUsernamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientUsernamesResponseModel.prototype.meta = undefined;

