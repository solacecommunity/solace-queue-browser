import {ApiClient} from '../ApiClient';
import {MsgVpnClientProfileCollectionsModel} from './MsgVpnClientProfileCollectionsModel';
import {MsgVpnClientProfileLinksModel} from './MsgVpnClientProfileLinksModel';
import {MsgVpnClientProfileModel} from './MsgVpnClientProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientProfilesResponseModel model module.
 * @module model/MsgVpnClientProfilesResponseModel
 * @version 2.36
 */
export class MsgVpnClientProfilesResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientProfilesResponseModel</code>.
   * @alias module:model/MsgVpnClientProfilesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientProfilesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientProfilesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientProfilesResponseModel} The populated <code>MsgVpnClientProfilesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientProfilesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientProfileCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientProfileModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientProfileLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientProfileCollectionsModel>} collections
 */
MsgVpnClientProfilesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientProfileModel>} data
 */
MsgVpnClientProfilesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientProfileLinksModel>} links
 */
MsgVpnClientProfilesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientProfilesResponseModel.prototype.meta = undefined;

