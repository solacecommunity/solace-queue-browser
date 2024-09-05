import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointPriorityCollectionsModel} from './MsgVpnTopicEndpointPriorityCollectionsModel';
import {MsgVpnTopicEndpointPriorityLinksModel} from './MsgVpnTopicEndpointPriorityLinksModel';
import {MsgVpnTopicEndpointPriorityModel} from './MsgVpnTopicEndpointPriorityModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointPriorityResponseModel model module.
 * @module model/MsgVpnTopicEndpointPriorityResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointPriorityResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointPriorityResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointPriorityResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointPriorityResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointPriorityResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointPriorityResponseModel} The populated <code>MsgVpnTopicEndpointPriorityResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointPriorityResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTopicEndpointPriorityCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTopicEndpointPriorityModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTopicEndpointPriorityLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTopicEndpointPriorityCollectionsModel} collections
 */
MsgVpnTopicEndpointPriorityResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointPriorityModel} data
 */
MsgVpnTopicEndpointPriorityResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointPriorityLinksModel} links
 */
MsgVpnTopicEndpointPriorityResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointPriorityResponseModel.prototype.meta = undefined;

