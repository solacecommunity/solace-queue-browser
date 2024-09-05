import {ApiClient} from '../ApiClient';
import {MsgVpnClientUsernameCollectionsModel} from './MsgVpnClientUsernameCollectionsModel';
import {MsgVpnClientUsernameLinksModel} from './MsgVpnClientUsernameLinksModel';
import {MsgVpnClientUsernameModel} from './MsgVpnClientUsernameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientUsernameResponseModel model module.
 * @module model/MsgVpnClientUsernameResponseModel
 * @version 2.36
 */
export class MsgVpnClientUsernameResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameResponseModel</code>.
   * @alias module:model/MsgVpnClientUsernameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameResponseModel} The populated <code>MsgVpnClientUsernameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientUsernameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientUsernameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientUsernameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientUsernameCollectionsModel} collections
 */
MsgVpnClientUsernameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientUsernameModel} data
 */
MsgVpnClientUsernameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientUsernameLinksModel} links
 */
MsgVpnClientUsernameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientUsernameResponseModel.prototype.meta = undefined;

