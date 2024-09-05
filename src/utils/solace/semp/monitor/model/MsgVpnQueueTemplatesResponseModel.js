import {ApiClient} from '../ApiClient';
import {MsgVpnQueueTemplateCollectionsModel} from './MsgVpnQueueTemplateCollectionsModel';
import {MsgVpnQueueTemplateLinksModel} from './MsgVpnQueueTemplateLinksModel';
import {MsgVpnQueueTemplateModel} from './MsgVpnQueueTemplateModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueTemplatesResponseModel model module.
 * @module model/MsgVpnQueueTemplatesResponseModel
 * @version 2.36
 */
export class MsgVpnQueueTemplatesResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueTemplatesResponseModel</code>.
   * @alias module:model/MsgVpnQueueTemplatesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueTemplatesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTemplatesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTemplatesResponseModel} The populated <code>MsgVpnQueueTemplatesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTemplatesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnQueueTemplateCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnQueueTemplateModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnQueueTemplateLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnQueueTemplateCollectionsModel>} collections
 */
MsgVpnQueueTemplatesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueTemplateModel>} data
 */
MsgVpnQueueTemplatesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueTemplateLinksModel>} links
 */
MsgVpnQueueTemplatesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueTemplatesResponseModel.prototype.meta = undefined;

