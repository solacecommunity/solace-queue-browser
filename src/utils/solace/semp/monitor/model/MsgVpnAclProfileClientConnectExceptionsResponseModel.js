import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileClientConnectExceptionCollectionsModel} from './MsgVpnAclProfileClientConnectExceptionCollectionsModel';
import {MsgVpnAclProfileClientConnectExceptionLinksModel} from './MsgVpnAclProfileClientConnectExceptionLinksModel';
import {MsgVpnAclProfileClientConnectExceptionModel} from './MsgVpnAclProfileClientConnectExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileClientConnectExceptionsResponseModel model module.
 * @module model/MsgVpnAclProfileClientConnectExceptionsResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileClientConnectExceptionsResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileClientConnectExceptionsResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileClientConnectExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileClientConnectExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileClientConnectExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileClientConnectExceptionsResponseModel} The populated <code>MsgVpnAclProfileClientConnectExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileClientConnectExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnAclProfileClientConnectExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnAclProfileClientConnectExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnAclProfileClientConnectExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnAclProfileClientConnectExceptionCollectionsModel>} collections
 */
MsgVpnAclProfileClientConnectExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileClientConnectExceptionModel>} data
 */
MsgVpnAclProfileClientConnectExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnAclProfileClientConnectExceptionLinksModel>} links
 */
MsgVpnAclProfileClientConnectExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileClientConnectExceptionsResponseModel.prototype.meta = undefined;

