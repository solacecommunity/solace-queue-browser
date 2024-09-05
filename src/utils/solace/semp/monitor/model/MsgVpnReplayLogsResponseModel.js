import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogCollectionsModel} from './MsgVpnReplayLogCollectionsModel';
import {MsgVpnReplayLogLinksModel} from './MsgVpnReplayLogLinksModel';
import {MsgVpnReplayLogModel} from './MsgVpnReplayLogModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplayLogsResponseModel model module.
 * @module model/MsgVpnReplayLogsResponseModel
 * @version 2.36
 */
export class MsgVpnReplayLogsResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogsResponseModel</code>.
   * @alias module:model/MsgVpnReplayLogsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplayLogsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogsResponseModel} The populated <code>MsgVpnReplayLogsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnReplayLogCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnReplayLogModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnReplayLogLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnReplayLogCollectionsModel>} collections
 */
MsgVpnReplayLogsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplayLogModel>} data
 */
MsgVpnReplayLogsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnReplayLogLinksModel>} links
 */
MsgVpnReplayLogsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplayLogsResponseModel.prototype.meta = undefined;

