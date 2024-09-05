import {ApiClient} from '../ApiClient';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel} from './OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel} from './OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} from './OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel model module.
 * @module model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel} The populated <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel} collections
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} data
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel} links
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionResponseModel.prototype.meta = undefined;

