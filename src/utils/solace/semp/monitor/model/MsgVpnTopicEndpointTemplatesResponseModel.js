import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointTemplateCollectionsModel} from './MsgVpnTopicEndpointTemplateCollectionsModel';
import {MsgVpnTopicEndpointTemplateLinksModel} from './MsgVpnTopicEndpointTemplateLinksModel';
import {MsgVpnTopicEndpointTemplateModel} from './MsgVpnTopicEndpointTemplateModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointTemplatesResponseModel model module.
 * @module model/MsgVpnTopicEndpointTemplatesResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTemplatesResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTemplatesResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTemplatesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTemplatesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTemplatesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTemplatesResponseModel} The populated <code>MsgVpnTopicEndpointTemplatesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTemplatesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTopicEndpointTemplateCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTopicEndpointTemplateModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTopicEndpointTemplateLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointTemplateCollectionsModel>} collections
 */
MsgVpnTopicEndpointTemplatesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointTemplateModel>} data
 */
MsgVpnTopicEndpointTemplatesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointTemplateLinksModel>} links
 */
MsgVpnTopicEndpointTemplatesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointTemplatesResponseModel.prototype.meta = undefined;

