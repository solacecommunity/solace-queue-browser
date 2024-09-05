import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfilePublishExceptionCollectionsModel} from './MsgVpnAclProfilePublishExceptionCollectionsModel';
import {MsgVpnAclProfilePublishExceptionLinksModel} from './MsgVpnAclProfilePublishExceptionLinksModel';
import {MsgVpnAclProfilePublishExceptionModel} from './MsgVpnAclProfilePublishExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfilePublishExceptionsResponseModel model module.
 * @module model/MsgVpnAclProfilePublishExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishExceptionsResponseModel} The populated <code>MsgVpnAclProfilePublishExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfilePublishExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfilePublishExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfilePublishExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfilePublishExceptionCollectionsModel>} collections
 */
MsgVpnAclProfilePublishExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfilePublishExceptionModel>} data
 */
MsgVpnAclProfilePublishExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfilePublishExceptionLinksModel>} links
 */
MsgVpnAclProfilePublishExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfilePublishExceptionsResponseModel.prototype.meta = undefined;

