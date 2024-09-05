import {ApiClient} from '../ApiClient';
import {MsgVpnClientUsernameAttributeCollectionsModel} from './MsgVpnClientUsernameAttributeCollectionsModel';
import {MsgVpnClientUsernameAttributeLinksModel} from './MsgVpnClientUsernameAttributeLinksModel';
import {MsgVpnClientUsernameAttributeModel} from './MsgVpnClientUsernameAttributeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientUsernameAttributeResponseModel model module.
 * @module model/MsgVpnClientUsernameAttributeResponseModel
 * @version 2.36
 */
export class MsgVpnClientUsernameAttributeResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameAttributeResponseModel</code>.
   * @alias module:model/MsgVpnClientUsernameAttributeResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameAttributeResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameAttributeResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameAttributeResponseModel} The populated <code>MsgVpnClientUsernameAttributeResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameAttributeResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientUsernameAttributeCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientUsernameAttributeModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientUsernameAttributeLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientUsernameAttributeCollectionsModel} collections
 */
MsgVpnClientUsernameAttributeResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientUsernameAttributeModel} data
 */
MsgVpnClientUsernameAttributeResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientUsernameAttributeLinksModel} links
 */
MsgVpnClientUsernameAttributeResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientUsernameAttributeResponseModel.prototype.meta = undefined;

