import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfilePublishTopicExceptionCollectionsModel} from './MsgVpnAclProfilePublishTopicExceptionCollectionsModel';
import {MsgVpnAclProfilePublishTopicExceptionLinksModel} from './MsgVpnAclProfilePublishTopicExceptionLinksModel';
import {MsgVpnAclProfilePublishTopicExceptionModel} from './MsgVpnAclProfilePublishTopicExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfilePublishTopicExceptionResponseModel model module.
 * @module model/MsgVpnAclProfilePublishTopicExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishTopicExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishTopicExceptionResponseModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishTopicExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishTopicExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishTopicExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishTopicExceptionResponseModel} The populated <code>MsgVpnAclProfilePublishTopicExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishTopicExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfilePublishTopicExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfilePublishTopicExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfilePublishTopicExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfilePublishTopicExceptionCollectionsModel} collections
 */
MsgVpnAclProfilePublishTopicExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfilePublishTopicExceptionModel} data
 */
MsgVpnAclProfilePublishTopicExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfilePublishTopicExceptionLinksModel} links
 */
MsgVpnAclProfilePublishTopicExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfilePublishTopicExceptionResponseModel.prototype.meta = undefined;

