import {ApiClient} from '../ApiClient';
import {MsgVpnClientRxFlowCollectionsModel} from './MsgVpnClientRxFlowCollectionsModel';
import {MsgVpnClientRxFlowLinksModel} from './MsgVpnClientRxFlowLinksModel';
import {MsgVpnClientRxFlowModel} from './MsgVpnClientRxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientRxFlowsResponseModel model module.
 * @module model/MsgVpnClientRxFlowsResponseModel
 * @version 2.36
 */
export class MsgVpnClientRxFlowsResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientRxFlowsResponseModel</code>.
   * @alias module:model/MsgVpnClientRxFlowsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientRxFlowsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientRxFlowsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientRxFlowsResponseModel} The populated <code>MsgVpnClientRxFlowsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientRxFlowsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnClientRxFlowCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnClientRxFlowModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnClientRxFlowLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnClientRxFlowCollectionsModel>} collections
 */
MsgVpnClientRxFlowsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientRxFlowModel>} data
 */
MsgVpnClientRxFlowsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnClientRxFlowLinksModel>} links
 */
MsgVpnClientRxFlowsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientRxFlowsResponseModel.prototype.meta = undefined;

