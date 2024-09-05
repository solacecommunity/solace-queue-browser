import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogMsgCollectionsModel} from './MsgVpnReplayLogMsgCollectionsModel';
import {MsgVpnReplayLogMsgLinksModel} from './MsgVpnReplayLogMsgLinksModel';
import {MsgVpnReplayLogMsgModel} from './MsgVpnReplayLogMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplayLogMsgsResponseModel model module.
 * @module model/MsgVpnReplayLogMsgsResponseModel
 * @version 2.36
 */
export class MsgVpnReplayLogMsgsResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogMsgsResponseModel</code>.
   * @alias module:model/MsgVpnReplayLogMsgsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplayLogMsgsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogMsgsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogMsgsResponseModel} The populated <code>MsgVpnReplayLogMsgsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogMsgsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnReplayLogMsgCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnReplayLogMsgModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnReplayLogMsgLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnReplayLogMsgCollectionsModel>} collections
 */
MsgVpnReplayLogMsgsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplayLogMsgModel>} data
 */
MsgVpnReplayLogMsgsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplayLogMsgLinksModel>} links
 */
MsgVpnReplayLogMsgsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplayLogMsgsResponseModel.prototype.meta = undefined;

