import {ApiClient} from '../ApiClient';
import {MsgVpnQueuePriorityCollectionsModel} from './MsgVpnQueuePriorityCollectionsModel';
import {MsgVpnQueuePriorityLinksModel} from './MsgVpnQueuePriorityLinksModel';
import {MsgVpnQueuePriorityModel} from './MsgVpnQueuePriorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueuePrioritiesResponseModel model module.
 * @module model/MsgVpnQueuePrioritiesResponseModel
 * @version 2.36
 */
export class MsgVpnQueuePrioritiesResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueuePrioritiesResponseModel</code>.
   * @alias module:model/MsgVpnQueuePrioritiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueuePrioritiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueuePrioritiesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueuePrioritiesResponseModel} The populated <code>MsgVpnQueuePrioritiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueuePrioritiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnQueuePriorityCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnQueuePriorityModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnQueuePriorityLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnQueuePriorityCollectionsModel>} collections
 */
MsgVpnQueuePrioritiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueuePriorityModel>} data
 */
MsgVpnQueuePrioritiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueuePriorityLinksModel>} links
 */
MsgVpnQueuePrioritiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueuePrioritiesResponseModel.prototype.meta = undefined;

