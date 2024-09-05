import {ApiClient} from '../ApiClient';
import {MsgVpnQueueTxFlowCollectionsModel} from './MsgVpnQueueTxFlowCollectionsModel';
import {MsgVpnQueueTxFlowLinksModel} from './MsgVpnQueueTxFlowLinksModel';
import {MsgVpnQueueTxFlowModel} from './MsgVpnQueueTxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueTxFlowResponseModel model module.
 * @module model/MsgVpnQueueTxFlowResponseModel
 * @version 2.36
 */
export class MsgVpnQueueTxFlowResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueTxFlowResponseModel</code>.
   * @alias module:model/MsgVpnQueueTxFlowResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueTxFlowResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueTxFlowResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueTxFlowResponseModel} The populated <code>MsgVpnQueueTxFlowResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueTxFlowResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnQueueTxFlowCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnQueueTxFlowModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnQueueTxFlowLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueueTxFlowCollectionsModel} collections
 */
MsgVpnQueueTxFlowResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnQueueTxFlowModel} data
 */
MsgVpnQueueTxFlowResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnQueueTxFlowLinksModel} links
 */
MsgVpnQueueTxFlowResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueTxFlowResponseModel.prototype.meta = undefined;

