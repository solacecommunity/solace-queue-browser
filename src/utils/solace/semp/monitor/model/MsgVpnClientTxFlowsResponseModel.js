import {ApiClient} from '../ApiClient';
import {MsgVpnClientTxFlowCollectionsModel} from './MsgVpnClientTxFlowCollectionsModel';
import {MsgVpnClientTxFlowLinksModel} from './MsgVpnClientTxFlowLinksModel';
import {MsgVpnClientTxFlowModel} from './MsgVpnClientTxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientTxFlowsResponseModel model module.
 * @module model/MsgVpnClientTxFlowsResponseModel
 * @version 2.36
 */
export class MsgVpnClientTxFlowsResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientTxFlowsResponseModel</code>.
   * @alias module:model/MsgVpnClientTxFlowsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientTxFlowsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientTxFlowsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientTxFlowsResponseModel} The populated <code>MsgVpnClientTxFlowsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientTxFlowsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientTxFlowCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientTxFlowModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientTxFlowLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientTxFlowCollectionsModel>} collections
 */
MsgVpnClientTxFlowsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientTxFlowModel>} data
 */
MsgVpnClientTxFlowsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientTxFlowLinksModel>} links
 */
MsgVpnClientTxFlowsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientTxFlowsResponseModel.prototype.meta = undefined;

