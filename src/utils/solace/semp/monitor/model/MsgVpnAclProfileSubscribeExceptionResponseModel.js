import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfileSubscribeExceptionCollectionsModel} from './MsgVpnAclProfileSubscribeExceptionCollectionsModel';
import {MsgVpnAclProfileSubscribeExceptionLinksModel} from './MsgVpnAclProfileSubscribeExceptionLinksModel';
import {MsgVpnAclProfileSubscribeExceptionModel} from './MsgVpnAclProfileSubscribeExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfileSubscribeExceptionResponseModel model module.
 * @module model/MsgVpnAclProfileSubscribeExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfileSubscribeExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfileSubscribeExceptionResponseModel</code>.
   * @alias module:model/MsgVpnAclProfileSubscribeExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfileSubscribeExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfileSubscribeExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfileSubscribeExceptionResponseModel} The populated <code>MsgVpnAclProfileSubscribeExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfileSubscribeExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfileSubscribeExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfileSubscribeExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfileSubscribeExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfileSubscribeExceptionCollectionsModel} collections
 */
MsgVpnAclProfileSubscribeExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfileSubscribeExceptionModel} data
 */
MsgVpnAclProfileSubscribeExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfileSubscribeExceptionLinksModel} links
 */
MsgVpnAclProfileSubscribeExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfileSubscribeExceptionResponseModel.prototype.meta = undefined;

