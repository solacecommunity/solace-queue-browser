import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel} from './MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionLinksModel} from './MsgVpnAclProfileSubscribeShareNameExceptionLinksModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionModel} from './MsgVpnAclProfileSubscribeShareNameExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel model module.
 * @module model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel} The populated <code>MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfileSubscribeShareNameExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfileSubscribeShareNameExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel>} collections
 */
MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel>} data
 */
MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel>} links
 */
MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileSubscribeShareNameExceptionsResponseModel.prototype.meta = undefined;

