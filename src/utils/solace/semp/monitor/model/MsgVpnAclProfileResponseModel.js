import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileCollectionsModel} from './MsgVpnAclProfileCollectionsModel';
import {MsgVpnAclProfileLinksModel} from './MsgVpnAclProfileLinksModel';
import {MsgVpnAclProfileModel} from './MsgVpnAclProfileModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileResponseModel model module.
 * @module model/MsgVpnAclProfileResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileResponseModel} The populated <code>MsgVpnAclProfileResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfileCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfileModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfileLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfileCollectionsModel} collections
 */
MsgVpnAclProfileResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfileModel} data
 */
MsgVpnAclProfileResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfileLinksModel} links
 */
MsgVpnAclProfileResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileResponseModel.prototype.meta = undefined;

