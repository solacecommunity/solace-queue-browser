import {ApiClient} from '../ApiClient';
import {MsgVpnQueueTxFlowCollectionsModel} from './MsgVpnQueueTxFlowCollectionsModel';
import {MsgVpnQueueTxFlowLinksModel} from './MsgVpnQueueTxFlowLinksModel';
import {MsgVpnQueueTxFlowModel} from './MsgVpnQueueTxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueTxFlowsResponseModel model module.
 * @module model/MsgVpnQueueTxFlowsResponseModel
 * @version 2.36
 */
export class MsgVpnQueueTxFlowsResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueTxFlowsResponseModel</code>.
   * @alias module:model/MsgVpnQueueTxFlowsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueTxFlowsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTxFlowsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTxFlowsResponseModel} The populated <code>MsgVpnQueueTxFlowsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTxFlowsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnQueueTxFlowCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnQueueTxFlowModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnQueueTxFlowLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnQueueTxFlowCollectionsModel>} collections
 */
MsgVpnQueueTxFlowsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueTxFlowModel>} data
 */
MsgVpnQueueTxFlowsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueTxFlowLinksModel>} links
 */
MsgVpnQueueTxFlowsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueTxFlowsResponseModel.prototype.meta = undefined;

