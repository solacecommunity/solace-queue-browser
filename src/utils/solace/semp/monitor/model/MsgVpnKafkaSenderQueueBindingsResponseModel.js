import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderQueueBindingCollectionsModel} from './MsgVpnKafkaSenderQueueBindingCollectionsModel';
import {MsgVpnKafkaSenderQueueBindingLinksModel} from './MsgVpnKafkaSenderQueueBindingLinksModel';
import {MsgVpnKafkaSenderQueueBindingModel} from './MsgVpnKafkaSenderQueueBindingModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaSenderQueueBindingsResponseModel model module.
 * @module model/MsgVpnKafkaSenderQueueBindingsResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderQueueBindingsResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderQueueBindingsResponseModel</code>.
   * @alias module:model/MsgVpnKafkaSenderQueueBindingsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderQueueBindingsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderQueueBindingsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderQueueBindingsResponseModel} The populated <code>MsgVpnKafkaSenderQueueBindingsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderQueueBindingsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnKafkaSenderQueueBindingCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnKafkaSenderQueueBindingModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnKafkaSenderQueueBindingLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderQueueBindingCollectionsModel>} collections
 */
MsgVpnKafkaSenderQueueBindingsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderQueueBindingModel>} data
 */
MsgVpnKafkaSenderQueueBindingsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnKafkaSenderQueueBindingLinksModel>} links
 */
MsgVpnKafkaSenderQueueBindingsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaSenderQueueBindingsResponseModel.prototype.meta = undefined;

