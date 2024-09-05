import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileCollectionsModel} from './MsgVpnAclProfileCollectionsModel';
import {MsgVpnAclProfileLinksModel} from './MsgVpnAclProfileLinksModel';
import {MsgVpnAclProfileModel} from './MsgVpnAclProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfilesResponseModel model module.
 * @module model/MsgVpnAclProfilesResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfilesResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilesResponseModel</code>.
   * @alias module:model/MsgVpnAclProfilesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfilesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilesResponseModel} The populated <code>MsgVpnAclProfilesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfileCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfileModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfileLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfileCollectionsModel>} collections
 */
MsgVpnAclProfilesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileModel>} data
 */
MsgVpnAclProfilesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileLinksModel>} links
 */
MsgVpnAclProfilesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfilesResponseModel.prototype.meta = undefined;

