import {ApiClient} from '../ApiClient';
import {MsgVpnClientRxFlowCollectionsModel} from './MsgVpnClientRxFlowCollectionsModel';
import {MsgVpnClientRxFlowLinksModel} from './MsgVpnClientRxFlowLinksModel';
import {MsgVpnClientRxFlowModel} from './MsgVpnClientRxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnClientRxFlowResponseModel model module.
 * @module model/MsgVpnClientRxFlowResponseModel
 * @version 2.36
 */
export class MsgVpnClientRxFlowResponseModel {
  /**
   * Constructs a new <code>MsgVpnClientRxFlowResponseModel</code>.
   * @alias module:model/MsgVpnClientRxFlowResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnClientRxFlowResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientRxFlowResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientRxFlowResponseModel} The populated <code>MsgVpnClientRxFlowResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientRxFlowResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnClientRxFlowCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnClientRxFlowModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnClientRxFlowLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnClientRxFlowCollectionsModel} collections
 */
MsgVpnClientRxFlowResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnClientRxFlowModel} data
 */
MsgVpnClientRxFlowResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnClientRxFlowLinksModel} links
 */
MsgVpnClientRxFlowResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnClientRxFlowResponseModel.prototype.meta = undefined;

