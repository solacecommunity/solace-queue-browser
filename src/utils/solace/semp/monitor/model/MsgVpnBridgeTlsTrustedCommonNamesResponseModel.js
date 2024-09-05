import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeTlsTrustedCommonNameCollectionsModel} from './MsgVpnBridgeTlsTrustedCommonNameCollectionsModel';
import {MsgVpnBridgeTlsTrustedCommonNameLinksModel} from './MsgVpnBridgeTlsTrustedCommonNameLinksModel';
import {MsgVpnBridgeTlsTrustedCommonNameModel} from './MsgVpnBridgeTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeTlsTrustedCommonNamesResponseModel model module.
 * @module model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeTlsTrustedCommonNamesResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeTlsTrustedCommonNamesResponseModel</code>.
   * @alias module:model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeTlsTrustedCommonNamesResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeTlsTrustedCommonNamesResponseModel} The populated <code>MsgVpnBridgeTlsTrustedCommonNamesResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeTlsTrustedCommonNamesResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = ApiClient.convertToType(data['collections'], [MsgVpnBridgeTlsTrustedCommonNameCollectionsModel]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [MsgVpnBridgeTlsTrustedCommonNameModel]);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], [MsgVpnBridgeTlsTrustedCommonNameLinksModel]);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel>} collections
 */
MsgVpnBridgeTlsTrustedCommonNamesResponseModel.prototype.collections = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeTlsTrustedCommonNameModel>} data
 */
MsgVpnBridgeTlsTrustedCommonNamesResponseModel.prototype.data = undefined;

/**
 * @member {Array.<module:model/MsgVpnBridgeTlsTrustedCommonNameLinksModel>} links
 */
MsgVpnBridgeTlsTrustedCommonNamesResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeTlsTrustedCommonNamesResponseModel.prototype.meta = undefined;

