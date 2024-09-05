import {ApiClient} from '../ApiClient';
import {MsgVpnCollectionsModel} from './MsgVpnCollectionsModel';
import {MsgVpnLinksModel} from './MsgVpnLinksModel';
import {MsgVpnModel} from './MsgVpnModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnsResponseModel model module.
 * @module model/MsgVpnsResponseModel
 * @version 2.36
 */
export class MsgVpnsResponseModel {
  /**
   * Constructs a new <code>MsgVpnsResponseModel</code>.
   * @alias module:model/MsgVpnsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnsResponseModel} The populated <code>MsgVpnsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnCollectionsModel>} collections
 */
MsgVpnsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnModel>} data
 */
MsgVpnsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnLinksModel>} links
 */
MsgVpnsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnsResponseModel.prototype.meta = undefined;

