import {ApiClient} from '../ApiClient';
import {MsgVpnClientCollectionsModel} from './MsgVpnClientCollectionsModel';
import {MsgVpnClientLinksModel} from './MsgVpnClientLinksModel';
import {MsgVpnClientModel} from './MsgVpnClientModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientsResponseModel model module.
 * @module model/MsgVpnClientsResponseModel
 * @version 2.36
 */
export class MsgVpnClientsResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientsResponseModel</code>.
   * @alias module:model/MsgVpnClientsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientsResponseModel} The populated <code>MsgVpnClientsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientCollectionsModel>} collections
 */
MsgVpnClientsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientModel>} data
 */
MsgVpnClientsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientLinksModel>} links
 */
MsgVpnClientsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientsResponseModel.prototype.meta = undefined;

