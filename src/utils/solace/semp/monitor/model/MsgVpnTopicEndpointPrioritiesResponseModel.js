import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointPriorityCollectionsModel} from './MsgVpnTopicEndpointPriorityCollectionsModel';
import {MsgVpnTopicEndpointPriorityLinksModel} from './MsgVpnTopicEndpointPriorityLinksModel';
import {MsgVpnTopicEndpointPriorityModel} from './MsgVpnTopicEndpointPriorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointPrioritiesResponseModel model module.
 * @module model/MsgVpnTopicEndpointPrioritiesResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointPrioritiesResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointPrioritiesResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointPrioritiesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointPrioritiesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointPrioritiesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointPrioritiesResponseModel} The populated <code>MsgVpnTopicEndpointPrioritiesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointPrioritiesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTopicEndpointPriorityCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTopicEndpointPriorityModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTopicEndpointPriorityLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointPriorityCollectionsModel>} collections
 */
MsgVpnTopicEndpointPrioritiesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointPriorityModel>} data
 */
MsgVpnTopicEndpointPrioritiesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointPriorityLinksModel>} links
 */
MsgVpnTopicEndpointPrioritiesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointPrioritiesResponseModel.prototype.meta = undefined;

