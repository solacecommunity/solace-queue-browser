import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel} from './MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeTopicExceptionLinksModel} from './MsgVpnAclProfileSubscribeTopicExceptionLinksModel';
import {MsgVpnAclProfileSubscribeTopicExceptionModel} from './MsgVpnAclProfileSubscribeTopicExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileSubscribeTopicExceptionResponseModel model module.
 * @module model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeTopicExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeTopicExceptionResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeTopicExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeTopicExceptionResponseModel} The populated <code>MsgVpnAclProfileSubscribeTopicExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeTopicExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfileSubscribeTopicExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfileSubscribeTopicExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel} collections
 */
MsgVpnAclProfileSubscribeTopicExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfileSubscribeTopicExceptionModel} data
 */
MsgVpnAclProfileSubscribeTopicExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel} links
 */
MsgVpnAclProfileSubscribeTopicExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileSubscribeTopicExceptionResponseModel.prototype.meta = undefined;

