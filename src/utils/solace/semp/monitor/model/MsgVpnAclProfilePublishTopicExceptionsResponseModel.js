import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfilePublishTopicExceptionCollectionsModel} from './MsgVpnAclProfilePublishTopicExceptionCollectionsModel';
import {MsgVpnAclProfilePublishTopicExceptionLinksModel} from './MsgVpnAclProfilePublishTopicExceptionLinksModel';
import {MsgVpnAclProfilePublishTopicExceptionModel} from './MsgVpnAclProfilePublishTopicExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfilePublishTopicExceptionsResponseModel model module.
 * @module model/MsgVpnAclProfilePublishTopicExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishTopicExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishTopicExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishTopicExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishTopicExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishTopicExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishTopicExceptionsResponseModel} The populated <code>MsgVpnAclProfilePublishTopicExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishTopicExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfilePublishTopicExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfilePublishTopicExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfilePublishTopicExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel>} collections
 */
MsgVpnAclProfilePublishTopicExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfilePublishTopicExceptionModel>} data
 */
MsgVpnAclProfilePublishTopicExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfilePublishTopicExceptionLinksModel>} links
 */
MsgVpnAclProfilePublishTopicExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfilePublishTopicExceptionsResponseModel.prototype.meta = undefined;

