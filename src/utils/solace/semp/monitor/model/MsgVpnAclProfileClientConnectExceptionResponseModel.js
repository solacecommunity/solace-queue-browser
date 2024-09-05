import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileClientConnectExceptionCollectionsModel} from './MsgVpnAclProfileClientConnectExceptionCollectionsModel';
import {MsgVpnAclProfileClientConnectExceptionLinksModel} from './MsgVpnAclProfileClientConnectExceptionLinksModel';
import {MsgVpnAclProfileClientConnectExceptionModel} from './MsgVpnAclProfileClientConnectExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileClientConnectExceptionResponseModel model module.
 * @module model/MsgVpnAclProfileClientConnectExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileClientConnectExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileClientConnectExceptionResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileClientConnectExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileClientConnectExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileClientConnectExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileClientConnectExceptionResponseModel} The populated <code>MsgVpnAclProfileClientConnectExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileClientConnectExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfileClientConnectExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfileClientConnectExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfileClientConnectExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfileClientConnectExceptionCollectionsModel} collections
 */
MsgVpnAclProfileClientConnectExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfileClientConnectExceptionModel} data
 */
MsgVpnAclProfileClientConnectExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfileClientConnectExceptionLinksModel} links
 */
MsgVpnAclProfileClientConnectExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileClientConnectExceptionResponseModel.prototype.meta = undefined;

