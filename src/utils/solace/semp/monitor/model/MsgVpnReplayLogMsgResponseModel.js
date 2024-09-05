import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogMsgCollectionsModel} from './MsgVpnReplayLogMsgCollectionsModel';
import {MsgVpnReplayLogMsgLinksModel} from './MsgVpnReplayLogMsgLinksModel';
import {MsgVpnReplayLogMsgModel} from './MsgVpnReplayLogMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplayLogMsgResponseModel model module.
 * @module model/MsgVpnReplayLogMsgResponseModel
 * @version 2.36
 */
export class MsgVpnReplayLogMsgResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogMsgResponseModel</code>.
   * @alias module:model/MsgVpnReplayLogMsgResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplayLogMsgResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogMsgResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogMsgResponseModel} The populated <code>MsgVpnReplayLogMsgResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogMsgResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnReplayLogMsgCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnReplayLogMsgModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnReplayLogMsgLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnReplayLogMsgCollectionsModel} collections
 */
MsgVpnReplayLogMsgResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnReplayLogMsgModel} data
 */
MsgVpnReplayLogMsgResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnReplayLogMsgLinksModel} links
 */
MsgVpnReplayLogMsgResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplayLogMsgResponseModel.prototype.meta = undefined;

