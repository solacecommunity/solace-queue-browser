import {ApiClient} from '../ApiClient';
import {MsgVpnQueueMsgCollectionsModel} from './MsgVpnQueueMsgCollectionsModel';
import {MsgVpnQueueMsgLinksModel} from './MsgVpnQueueMsgLinksModel';
import {MsgVpnQueueMsgModel} from './MsgVpnQueueMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueMsgsResponseModel model module.
 * @module model/MsgVpnQueueMsgsResponseModel
 * @version 2.36
 */
export class MsgVpnQueueMsgsResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueMsgsResponseModel</code>.
   * @alias module:model/MsgVpnQueueMsgsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueMsgsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueMsgsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueMsgsResponseModel} The populated <code>MsgVpnQueueMsgsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueMsgsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnQueueMsgCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnQueueMsgModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnQueueMsgLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnQueueMsgCollectionsModel>} collections
 */
MsgVpnQueueMsgsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueMsgModel>} data
 */
MsgVpnQueueMsgsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnQueueMsgLinksModel>} links
 */
MsgVpnQueueMsgsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueMsgsResponseModel.prototype.meta = undefined;

