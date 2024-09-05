import {ApiClient} from '../ApiClient';
import {MsgVpnClientTxFlowCollectionsModel} from './MsgVpnClientTxFlowCollectionsModel';
import {MsgVpnClientTxFlowLinksModel} from './MsgVpnClientTxFlowLinksModel';
import {MsgVpnClientTxFlowModel} from './MsgVpnClientTxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientTxFlowResponseModel model module.
 * @module model/MsgVpnClientTxFlowResponseModel
 * @version 2.36
 */
export class MsgVpnClientTxFlowResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientTxFlowResponseModel</code>.
   * @alias module:model/MsgVpnClientTxFlowResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientTxFlowResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTxFlowResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTxFlowResponseModel} The populated <code>MsgVpnClientTxFlowResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTxFlowResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientTxFlowCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientTxFlowModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientTxFlowLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientTxFlowCollectionsModel} collections
 */
MsgVpnClientTxFlowResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientTxFlowModel} data
 */
MsgVpnClientTxFlowResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientTxFlowLinksModel} links
 */
MsgVpnClientTxFlowResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientTxFlowResponseModel.prototype.meta = undefined;

