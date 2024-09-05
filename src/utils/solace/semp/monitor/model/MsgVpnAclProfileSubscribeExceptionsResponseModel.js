import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileSubscribeExceptionCollectionsModel} from './MsgVpnAclProfileSubscribeExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeExceptionLinksModel} from './MsgVpnAclProfileSubscribeExceptionLinksModel';
import {MsgVpnAclProfileSubscribeExceptionModel} from './MsgVpnAclProfileSubscribeExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileSubscribeExceptionsResponseModel model module.
 * @module model/MsgVpnAclProfileSubscribeExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeExceptionsResponseModel} The populated <code>MsgVpnAclProfileSubscribeExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfileSubscribeExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfileSubscribeExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfileSubscribeExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeExceptionCollectionsModel>} collections
 */
MsgVpnAclProfileSubscribeExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeExceptionModel>} data
 */
MsgVpnAclProfileSubscribeExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeExceptionLinksModel>} links
 */
MsgVpnAclProfileSubscribeExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileSubscribeExceptionsResponseModel.prototype.meta = undefined;

