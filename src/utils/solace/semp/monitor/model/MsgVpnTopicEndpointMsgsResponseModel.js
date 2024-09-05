import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointMsgCollectionsModel} from './MsgVpnTopicEndpointMsgCollectionsModel';
import {MsgVpnTopicEndpointMsgLinksModel} from './MsgVpnTopicEndpointMsgLinksModel';
import {MsgVpnTopicEndpointMsgModel} from './MsgVpnTopicEndpointMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointMsgsResponseModel model module.
 * @module model/MsgVpnTopicEndpointMsgsResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointMsgsResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointMsgsResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointMsgsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointMsgsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointMsgsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointMsgsResponseModel} The populated <code>MsgVpnTopicEndpointMsgsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointMsgsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnTopicEndpointMsgCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnTopicEndpointMsgModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnTopicEndpointMsgLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointMsgCollectionsModel>} collections
 */
MsgVpnTopicEndpointMsgsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointMsgModel>} data
 */
MsgVpnTopicEndpointMsgsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnTopicEndpointMsgLinksModel>} links
 */
MsgVpnTopicEndpointMsgsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointMsgsResponseModel.prototype.meta = undefined;

