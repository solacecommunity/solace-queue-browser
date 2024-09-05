import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointCollectionsModel} from './MsgVpnTopicEndpointCollectionsModel';
import {MsgVpnTopicEndpointLinksModel} from './MsgVpnTopicEndpointLinksModel';
import {MsgVpnTopicEndpointModel} from './MsgVpnTopicEndpointModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointResponseModel model module.
 * @module model/MsgVpnTopicEndpointResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointResponseModel} The populated <code>MsgVpnTopicEndpointResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTopicEndpointCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTopicEndpointModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTopicEndpointLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTopicEndpointCollectionsModel} collections
 */
MsgVpnTopicEndpointResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointModel} data
 */
MsgVpnTopicEndpointResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointLinksModel} links
 */
MsgVpnTopicEndpointResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointResponseModel.prototype.meta = undefined;

