import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel} from './MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionLinksModel} from './MsgVpnAclProfileSubscribeShareNameExceptionLinksModel';
import {MsgVpnAclProfileSubscribeShareNameExceptionModel} from './MsgVpnAclProfileSubscribeShareNameExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileSubscribeShareNameExceptionResponseModel model module.
 * @module model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeShareNameExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeShareNameExceptionResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeShareNameExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeShareNameExceptionResponseModel} The populated <code>MsgVpnAclProfileSubscribeShareNameExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeShareNameExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfileSubscribeShareNameExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfileSubscribeShareNameExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfileSubscribeShareNameExceptionCollectionsModel} collections
 */
MsgVpnAclProfileSubscribeShareNameExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfileSubscribeShareNameExceptionModel} data
 */
MsgVpnAclProfileSubscribeShareNameExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfileSubscribeShareNameExceptionLinksModel} links
 */
MsgVpnAclProfileSubscribeShareNameExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileSubscribeShareNameExceptionResponseModel.prototype.meta = undefined;

