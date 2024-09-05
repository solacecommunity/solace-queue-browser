import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel} from './MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeTopicExceptionLinksModel} from './MsgVpnAclProfileSubscribeTopicExceptionLinksModel';
import {MsgVpnAclProfileSubscribeTopicExceptionModel} from './MsgVpnAclProfileSubscribeTopicExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileSubscribeTopicExceptionsResponseModel model module.
 * @module model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeTopicExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeTopicExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeTopicExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeTopicExceptionsResponseModel} The populated <code>MsgVpnAclProfileSubscribeTopicExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeTopicExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfileSubscribeTopicExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfileSubscribeTopicExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeTopicExceptionCollectionsModel>} collections
 */
MsgVpnAclProfileSubscribeTopicExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeTopicExceptionModel>} data
 */
MsgVpnAclProfileSubscribeTopicExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeTopicExceptionLinksModel>} links
 */
MsgVpnAclProfileSubscribeTopicExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileSubscribeTopicExceptionsResponseModel.prototype.meta = undefined;

