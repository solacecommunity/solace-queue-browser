import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderCollectionsModel} from './MsgVpnKafkaSenderCollectionsModel';
import {MsgVpnKafkaSenderLinksModel} from './MsgVpnKafkaSenderLinksModel';
import {MsgVpnKafkaSenderModel} from './MsgVpnKafkaSenderModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaSenderResponseModel model module.
 * @module model/MsgVpnKafkaSenderResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderResponseModel</code>.
   * @alias module:model/MsgVpnKafkaSenderResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderResponseModel} The populated <code>MsgVpnKafkaSenderResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnKafkaSenderCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnKafkaSenderModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnKafkaSenderLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaSenderCollectionsModel} collections
 */
MsgVpnKafkaSenderResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderModel} data
 */
MsgVpnKafkaSenderResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderLinksModel} links
 */
MsgVpnKafkaSenderResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaSenderResponseModel.prototype.meta = undefined;

