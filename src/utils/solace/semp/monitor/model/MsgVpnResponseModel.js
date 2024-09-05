import {ApiClient} from '../ApiClient';
import {MsgVpnCollectionsModel} from './MsgVpnCollectionsModel';
import {MsgVpnLinksModel} from './MsgVpnLinksModel';
import {MsgVpnModel} from './MsgVpnModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnResponseModel model module.
 * @module model/MsgVpnResponseModel
 * @version 2.36
 */
export class MsgVpnResponseModel {
  /**
   * Constructs a new <code>MsgVpnResponseModel</code>.
   * @alias module:model/MsgVpnResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnResponseModel} The populated <code>MsgVpnResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnCollectionsModel} collections
 */
MsgVpnResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnModel} data
 */
MsgVpnResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnLinksModel} links
 */
MsgVpnResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnResponseModel.prototype.meta = undefined;

