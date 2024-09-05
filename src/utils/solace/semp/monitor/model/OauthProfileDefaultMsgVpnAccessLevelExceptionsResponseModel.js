import {ApiClient} from '../ApiClient';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel} from './OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel} from './OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel';
import {OauthProfileDefaultMsgVpnAccessLevelExceptionModel} from './OauthProfileDefaultMsgVpnAccessLevelExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel model module.
 * @module model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel
 * @version 2.36
 */
export class OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel {
  /**
   * Constructs a new <code>OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel</code>.
   * @alias module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel} The populated <code>OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileDefaultMsgVpnAccessLevelExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionCollectionsModel>} collections
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionModel>} data
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileDefaultMsgVpnAccessLevelExceptionLinksModel>} links
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileDefaultMsgVpnAccessLevelExceptionsResponseModel.prototype.meta = undefined;

