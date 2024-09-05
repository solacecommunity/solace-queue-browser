import {ApiClient} from '../ApiClient';
import {MsgVpnClientUsernameAttributeCollectionsModel} from './MsgVpnClientUsernameAttributeCollectionsModel';
import {MsgVpnClientUsernameAttributeLinksModel} from './MsgVpnClientUsernameAttributeLinksModel';
import {MsgVpnClientUsernameAttributeModel} from './MsgVpnClientUsernameAttributeModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientUsernameAttributesResponseModel model module.
 * @module model/MsgVpnClientUsernameAttributesResponseModel
 * @version 2.36
 */
export class MsgVpnClientUsernameAttributesResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientUsernameAttributesResponseModel</code>.
   * @alias module:model/MsgVpnClientUsernameAttributesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientUsernameAttributesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientUsernameAttributesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientUsernameAttributesResponseModel} The populated <code>MsgVpnClientUsernameAttributesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientUsernameAttributesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientUsernameAttributeCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientUsernameAttributeModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientUsernameAttributeLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientUsernameAttributeCollectionsModel>} collections
 */
MsgVpnClientUsernameAttributesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientUsernameAttributeModel>} data
 */
MsgVpnClientUsernameAttributesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientUsernameAttributeLinksModel>} links
 */
MsgVpnClientUsernameAttributesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientUsernameAttributesResponseModel.prototype.meta = undefined;

