import {ApiClient} from '../ApiClient';
import {MsgVpnQueuePriorityCollectionsModel} from './MsgVpnQueuePriorityCollectionsModel';
import {MsgVpnQueuePriorityLinksModel} from './MsgVpnQueuePriorityLinksModel';
import {MsgVpnQueuePriorityModel} from './MsgVpnQueuePriorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueuePriorityResponseModel model module.
 * @module model/MsgVpnQueuePriorityResponseModel
 * @version 2.36
 */
export class MsgVpnQueuePriorityResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueuePriorityResponseModel</code>.
   * @alias module:model/MsgVpnQueuePriorityResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueuePriorityResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueuePriorityResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueuePriorityResponseModel} The populated <code>MsgVpnQueuePriorityResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueuePriorityResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnQueuePriorityCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnQueuePriorityModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnQueuePriorityLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueuePriorityCollectionsModel} collections
 */
MsgVpnQueuePriorityResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnQueuePriorityModel} data
 */
MsgVpnQueuePriorityResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnQueuePriorityLinksModel} links
 */
MsgVpnQueuePriorityResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueuePriorityResponseModel.prototype.meta = undefined;

