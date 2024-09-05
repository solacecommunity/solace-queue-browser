import {ApiClient} from '../ApiClient';
import {MsgVpnReplayLogCollectionsModel} from './MsgVpnReplayLogCollectionsModel';
import {MsgVpnReplayLogLinksModel} from './MsgVpnReplayLogLinksModel';
import {MsgVpnReplayLogModel} from './MsgVpnReplayLogModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnReplayLogResponseModel model module.
 * @module model/MsgVpnReplayLogResponseModel
 * @version 2.36
 */
export class MsgVpnReplayLogResponseModel {
  /**
   * Constructs a new <code>MsgVpnReplayLogResponseModel</code>.
   * @alias module:model/MsgVpnReplayLogResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnReplayLogResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnReplayLogResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnReplayLogResponseModel} The populated <code>MsgVpnReplayLogResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnReplayLogResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnReplayLogCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnReplayLogModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnReplayLogLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnReplayLogCollectionsModel} collections
 */
MsgVpnReplayLogResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnReplayLogModel} data
 */
MsgVpnReplayLogResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnReplayLogLinksModel} links
 */
MsgVpnReplayLogResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnReplayLogResponseModel.prototype.meta = undefined;

