import {ApiClient} from '../ApiClient';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel} from './OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel} from './OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel';
import {OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel} from './OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel model module.
 * @module model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel
 * @version 2.36
 */
export class OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel {
  /**
   * Constructs a new <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel</code>.
   * @alias module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} obj Optional instance to populate.
   * @return {module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel} The populated <code>OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionCollectionsModel>} collections
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionModel>} data
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionLinksModel>} links
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
OauthProfileAccessLevelGroupMsgVpnAccessLevelExceptionsResponseModel.prototype.meta = undefined;

