import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointTxFlowCollectionsModel} from './MsgVpnTopicEndpointTxFlowCollectionsModel';
import {MsgVpnTopicEndpointTxFlowLinksModel} from './MsgVpnTopicEndpointTxFlowLinksModel';
import {MsgVpnTopicEndpointTxFlowModel} from './MsgVpnTopicEndpointTxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointTxFlowResponseModel model module.
 * @module model/MsgVpnTopicEndpointTxFlowResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTxFlowResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTxFlowResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTxFlowResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTxFlowResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTxFlowResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTxFlowResponseModel} The populated <code>MsgVpnTopicEndpointTxFlowResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTxFlowResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTopicEndpointTxFlowCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTopicEndpointTxFlowModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTopicEndpointTxFlowLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTopicEndpointTxFlowCollectionsModel} collections
 */
MsgVpnTopicEndpointTxFlowResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointTxFlowModel} data
 */
MsgVpnTopicEndpointTxFlowResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointTxFlowLinksModel} links
 */
MsgVpnTopicEndpointTxFlowResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointTxFlowResponseModel.prototype.meta = undefined;

