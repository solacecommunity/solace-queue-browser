import {ApiClient} from '../ApiClient';
import {MsgVpnClientCollectionsModel} from './MsgVpnClientCollectionsModel';
import {MsgVpnClientLinksModel} from './MsgVpnClientLinksModel';
import {MsgVpnClientModel} from './MsgVpnClientModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientResponseModel model module.
 * @module model/MsgVpnClientResponseModel
 * @version 2.36
 */
export class MsgVpnClientResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientResponseModel</code>.
   * @alias module:model/MsgVpnClientResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientResponseModel} The populated <code>MsgVpnClientResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientCollectionsModel} collections
 */
MsgVpnClientResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientModel} data
 */
MsgVpnClientResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientLinksModel} links
 */
MsgVpnClientResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientResponseModel.prototype.meta = undefined;

