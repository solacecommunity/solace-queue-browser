import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointTxFlowCollectionsModel} from './MsgVpnTopicEndpointTxFlowCollectionsModel';
import {MsgVpnTopicEndpointTxFlowLinksModel} from './MsgVpnTopicEndpointTxFlowLinksModel';
import {MsgVpnTopicEndpointTxFlowModel} from './MsgVpnTopicEndpointTxFlowModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointTxFlowsResponseModel model module.
 * @module model/MsgVpnTopicEndpointTxFlowsResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTxFlowsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTxFlowsResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTxFlowsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTxFlowsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTxFlowsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTxFlowsResponseModel} The populated <code>MsgVpnTopicEndpointTxFlowsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTxFlowsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTopicEndpointTxFlowCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTopicEndpointTxFlowModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTopicEndpointTxFlowLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointTxFlowCollectionsModel>} collections
 */
MsgVpnTopicEndpointTxFlowsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointTxFlowModel>} data
 */
MsgVpnTopicEndpointTxFlowsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointTxFlowLinksModel>} links
 */
MsgVpnTopicEndpointTxFlowsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointTxFlowsResponseModel.prototype.meta = undefined;

