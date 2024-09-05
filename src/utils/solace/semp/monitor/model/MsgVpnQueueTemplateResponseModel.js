import {ApiClient} from '../ApiClient';
import {MsgVpnQueueTemplateCollectionsModel} from './MsgVpnQueueTemplateCollectionsModel';
import {MsgVpnQueueTemplateLinksModel} from './MsgVpnQueueTemplateLinksModel';
import {MsgVpnQueueTemplateModel} from './MsgVpnQueueTemplateModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueTemplateResponseModel model module.
 * @module model/MsgVpnQueueTemplateResponseModel
 * @version 2.36
 */
export class MsgVpnQueueTemplateResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueTemplateResponseModel</code>.
   * @alias module:model/MsgVpnQueueTemplateResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueTemplateResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTemplateResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTemplateResponseModel} The populated <code>MsgVpnQueueTemplateResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTemplateResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnQueueTemplateCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnQueueTemplateModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnQueueTemplateLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueueTemplateCollectionsModel} collections
 */
MsgVpnQueueTemplateResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnQueueTemplateModel} data
 */
MsgVpnQueueTemplateResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnQueueTemplateLinksModel} links
 */
MsgVpnQueueTemplateResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueTemplateResponseModel.prototype.meta = undefined;

