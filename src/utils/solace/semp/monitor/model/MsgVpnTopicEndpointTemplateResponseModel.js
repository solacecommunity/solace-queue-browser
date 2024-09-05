import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointTemplateCollectionsModel} from './MsgVpnTopicEndpointTemplateCollectionsModel';
import {MsgVpnTopicEndpointTemplateLinksModel} from './MsgVpnTopicEndpointTemplateLinksModel';
import {MsgVpnTopicEndpointTemplateModel} from './MsgVpnTopicEndpointTemplateModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointTemplateResponseModel model module.
 * @module model/MsgVpnTopicEndpointTemplateResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTemplateResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTemplateResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTemplateResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTemplateResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTemplateResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTemplateResponseModel} The populated <code>MsgVpnTopicEndpointTemplateResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTemplateResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTopicEndpointTemplateCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTopicEndpointTemplateModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTopicEndpointTemplateLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTopicEndpointTemplateCollectionsModel} collections
 */
MsgVpnTopicEndpointTemplateResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointTemplateModel} data
 */
MsgVpnTopicEndpointTemplateResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointTemplateLinksModel} links
 */
MsgVpnTopicEndpointTemplateResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointTemplateResponseModel.prototype.meta = undefined;

