import {ApiClient} from '../ApiClient';
import {MsgVpnAuthorizationGroupCollectionsModel} from './MsgVpnAuthorizationGroupCollectionsModel';
import {MsgVpnAuthorizationGroupLinksModel} from './MsgVpnAuthorizationGroupLinksModel';
import {MsgVpnAuthorizationGroupModel} from './MsgVpnAuthorizationGroupModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthorizationGroupsResponseModel model module.
 * @module model/MsgVpnAuthorizationGroupsResponseModel
 * @version 2.36
 */
export class MsgVpnAuthorizationGroupsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthorizationGroupsResponseModel</code>.
   * @alias module:model/MsgVpnAuthorizationGroupsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthorizationGroupsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthorizationGroupsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthorizationGroupsResponseModel} The populated <code>MsgVpnAuthorizationGroupsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthorizationGroupsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAuthorizationGroupCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAuthorizationGroupModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAuthorizationGroupLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAuthorizationGroupCollectionsModel>} collections
 */
MsgVpnAuthorizationGroupsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthorizationGroupModel>} data
 */
MsgVpnAuthorizationGroupsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAuthorizationGroupLinksModel>} links
 */
MsgVpnAuthorizationGroupsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthorizationGroupsResponseModel.prototype.meta = undefined;

