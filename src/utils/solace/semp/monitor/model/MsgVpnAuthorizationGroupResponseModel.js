import {ApiClient} from '../ApiClient';
import {MsgVpnAuthorizationGroupCollectionsModel} from './MsgVpnAuthorizationGroupCollectionsModel';
import {MsgVpnAuthorizationGroupLinksModel} from './MsgVpnAuthorizationGroupLinksModel';
import {MsgVpnAuthorizationGroupModel} from './MsgVpnAuthorizationGroupModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAuthorizationGroupResponseModel model module.
 * @module model/MsgVpnAuthorizationGroupResponseModel
 * @version 2.36
 */
export class MsgVpnAuthorizationGroupResponseModel {
  /**
   * Constructs a new <code>MsgVpnAuthorizationGroupResponseModel</code>.
   * @alias module:model/MsgVpnAuthorizationGroupResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAuthorizationGroupResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAuthorizationGroupResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAuthorizationGroupResponseModel} The populated <code>MsgVpnAuthorizationGroupResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAuthorizationGroupResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAuthorizationGroupCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAuthorizationGroupModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAuthorizationGroupLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAuthorizationGroupCollectionsModel} collections
 */
MsgVpnAuthorizationGroupResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAuthorizationGroupModel} data
 */
MsgVpnAuthorizationGroupResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAuthorizationGroupLinksModel} links
 */
MsgVpnAuthorizationGroupResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAuthorizationGroupResponseModel.prototype.meta = undefined;

