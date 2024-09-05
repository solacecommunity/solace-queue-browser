import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointCollectionsModel} from './MsgVpnTopicEndpointCollectionsModel';
import {MsgVpnTopicEndpointLinksModel} from './MsgVpnTopicEndpointLinksModel';
import {MsgVpnTopicEndpointModel} from './MsgVpnTopicEndpointModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointsResponseModel model module.
 * @module model/MsgVpnTopicEndpointsResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointsResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointsResponseModel} The populated <code>MsgVpnTopicEndpointsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTopicEndpointCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTopicEndpointModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTopicEndpointLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointCollectionsModel>} collections
 */
MsgVpnTopicEndpointsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointModel>} data
 */
MsgVpnTopicEndpointsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointLinksModel>} links
 */
MsgVpnTopicEndpointsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointsResponseModel.prototype.meta = undefined;

