import {ApiClient} from '../ApiClient';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel} from './OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel} from './OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionModel} from './OauthProfileDefaultMsgVpnAccessLevelExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel model module.
 * @module model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel
 * @version 2.36
 */
export class OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel {
  /**
   * Constructs a new <code>OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel</code>.
   * @alias module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel} The populated <code>OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = OauthProfileDefaultMsgVpnAccessLevelExceptionModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel} collections
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel} data
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel.prototype.data = undefined;

/**
 * @member {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel} links
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionResponseModel.prototype.meta = undefined;

