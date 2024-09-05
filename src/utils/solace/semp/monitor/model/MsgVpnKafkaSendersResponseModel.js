import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderCollectionsModel} from './MsgVpnKafkaSenderCollectionsModel';
import {MsgVpnKafkaSenderLinksModel} from './MsgVpnKafkaSenderLinksModel';
import {MsgVpnKafkaSenderModel} from './MsgVpnKafkaSenderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaSendersResponseModel model module.
 * @module model/MsgVpnKafkaSendersResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaSendersResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSendersResponseModel</code>.
   * @alias module:model/MsgVpnKafkaSendersResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaSendersResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSendersResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSendersResponseModel} The populated <code>MsgVpnKafkaSendersResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSendersResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnKafkaSenderCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnKafkaSenderModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnKafkaSenderLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderCollectionsModel>} collections
 */
MsgVpnKafkaSendersResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderModel>} data
 */
MsgVpnKafkaSendersResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderLinksModel>} links
 */
MsgVpnKafkaSendersResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaSendersResponseModel.prototype.meta = undefined;

