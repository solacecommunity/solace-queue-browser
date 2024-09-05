import {ApiClient} from '../ApiClient';
import {MsgVpnQueueMsgCollectionsModel} from './MsgVpnQueueMsgCollectionsModel';
import {MsgVpnQueueMsgLinksModel} from './MsgVpnQueueMsgLinksModel';
import {MsgVpnQueueMsgModel} from './MsgVpnQueueMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnQueueMsgResponseModel model module.
 * @module model/MsgVpnQueueMsgResponseModel
 * @version 2.36
 */
export class MsgVpnQueueMsgResponseModel {
  /**
   * Constructs a new <code>MsgVpnQueueMsgResponseModel</code>.
   * @alias module:model/MsgVpnQueueMsgResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnQueueMsgResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnQueueMsgResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnQueueMsgResponseModel} The populated <code>MsgVpnQueueMsgResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnQueueMsgResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnQueueMsgCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnQueueMsgModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnQueueMsgLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnQueueMsgCollectionsModel} collections
 */
MsgVpnQueueMsgResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnQueueMsgModel} data
 */
MsgVpnQueueMsgResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnQueueMsgLinksModel} links
 */
MsgVpnQueueMsgResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnQueueMsgResponseModel.prototype.meta = undefined;

