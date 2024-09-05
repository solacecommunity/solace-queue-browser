import {ApiClient} from '../ApiClient';
import {MsgVpnAclProfilePublishExceptionCollectionsModel} from './MsgVpnAclProfilePublishExceptionCollectionsModel';
import {MsgVpnAclProfilePublishExceptionLinksModel} from './MsgVpnAclProfilePublishExceptionLinksModel';
import {MsgVpnAclProfilePublishExceptionModel} from './MsgVpnAclProfilePublishExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnAclProfilePublishExceptionResponseModel model module.
 * @module model/MsgVpnAclProfilePublishExceptionResponseModel
 * @version 2.36
 */
export class MsgVpnAclProfilePublishExceptionResponseModel {
  /**
   * Constructs a new <code>MsgVpnAclProfilePublishExceptionResponseModel</code>.
   * @alias module:model/MsgVpnAclProfilePublishExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnAclProfilePublishExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnAclProfilePublishExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnAclProfilePublishExceptionResponseModel} The populated <code>MsgVpnAclProfilePublishExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnAclProfilePublishExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnAclProfilePublishExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnAclProfilePublishExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnAclProfilePublishExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnAclProfilePublishExceptionCollectionsModel} collections
 */
MsgVpnAclProfilePublishExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnAclProfilePublishExceptionModel} data
 */
MsgVpnAclProfilePublishExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnAclProfilePublishExceptionLinksModel} links
 */
MsgVpnAclProfilePublishExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnAclProfilePublishExceptionResponseModel.prototype.meta = undefined;

