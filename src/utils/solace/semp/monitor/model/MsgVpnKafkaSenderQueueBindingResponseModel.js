import {ApiClient} from '../ApiClient';
import {MsgVpnKafkaSenderQueueBindingCollectionsModel} from './MsgVpnKafkaSenderQueueBindingCollectionsModel';
import {MsgVpnKafkaSenderQueueBindingLinksModel} from './MsgVpnKafkaSenderQueueBindingLinksModel';
import {MsgVpnKafkaSenderQueueBindingModel} from './MsgVpnKafkaSenderQueueBindingModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnKafkaSenderQueueBindingResponseModel model module.
 * @module model/MsgVpnKafkaSenderQueueBindingResponseModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderQueueBindingResponseModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderQueueBindingResponseModel</code>.
   * @alias module:model/MsgVpnKafkaSenderQueueBindingResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderQueueBindingResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderQueueBindingResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderQueueBindingResponseModel} The populated <code>MsgVpnKafkaSenderQueueBindingResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderQueueBindingResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnKafkaSenderQueueBindingCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnKafkaSenderQueueBindingModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnKafkaSenderQueueBindingLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnKafkaSenderQueueBindingCollectionsModel} collections
 */
MsgVpnKafkaSenderQueueBindingResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderQueueBindingModel} data
 */
MsgVpnKafkaSenderQueueBindingResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnKafkaSenderQueueBindingLinksModel} links
 */
MsgVpnKafkaSenderQueueBindingResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnKafkaSenderQueueBindingResponseModel.prototype.meta = undefined;

