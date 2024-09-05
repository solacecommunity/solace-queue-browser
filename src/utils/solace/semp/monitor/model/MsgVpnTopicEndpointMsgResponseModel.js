import {ApiClient} from '../ApiClient';
import {MsgVpnTopicEndpointMsgCollectionsModel} from './MsgVpnTopicEndpointMsgCollectionsModel';
import {MsgVpnTopicEndpointMsgLinksModel} from './MsgVpnTopicEndpointMsgLinksModel';
import {MsgVpnTopicEndpointMsgModel} from './MsgVpnTopicEndpointMsgModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnTopicEndpointMsgResponseModel model module.
 * @module model/MsgVpnTopicEndpointMsgResponseModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointMsgResponseModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointMsgResponseModel</code>.
   * @alias module:model/MsgVpnTopicEndpointMsgResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointMsgResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointMsgResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointMsgResponseModel} The populated <code>MsgVpnTopicEndpointMsgResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointMsgResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnTopicEndpointMsgCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnTopicEndpointMsgModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnTopicEndpointMsgLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnTopicEndpointMsgCollectionsModel} collections
 */
MsgVpnTopicEndpointMsgResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointMsgModel} data
 */
MsgVpnTopicEndpointMsgResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnTopicEndpointMsgLinksModel} links
 */
MsgVpnTopicEndpointMsgResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnTopicEndpointMsgResponseModel.prototype.meta = undefined;

