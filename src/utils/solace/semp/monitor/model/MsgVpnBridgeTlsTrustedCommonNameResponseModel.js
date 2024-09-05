import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeTlsTrustedCommonNameCollectionsModel} from './MsgVpnBridgeTlsTrustedCommonNameCollectionsModel';
import {MsgVpnBridgeTlsTrustedCommonNameLinksModel} from './MsgVpnBridgeTlsTrustedCommonNameLinksModel';
import {MsgVpnBridgeTlsTrustedCommonNameModel} from './MsgVpnBridgeTlsTrustedCommonNameModel';
import {SempMetaModel} from './SempMetaModel';

/**
 * The MsgVpnBridgeTlsTrustedCommonNameResponseModel model module.
 * @module model/MsgVpnBridgeTlsTrustedCommonNameResponseModel
 * @version 2.36
 */
export class MsgVpnBridgeTlsTrustedCommonNameResponseModel {
  /**
   * Constructs a new <code>MsgVpnBridgeTlsTrustedCommonNameResponseModel</code>.
   * @alias module:model/MsgVpnBridgeTlsTrustedCommonNameResponseModel
   * @class
   * @param meta {module:model/SempMetaModel} 
   */
  constructor(meta) {
    this.meta = meta;
  }

  /**
   * Constructs a <code>MsgVpnBridgeTlsTrustedCommonNameResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeTlsTrustedCommonNameResponseModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeTlsTrustedCommonNameResponseModel} The populated <code>MsgVpnBridgeTlsTrustedCommonNameResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeTlsTrustedCommonNameResponseModel();
      if (data.hasOwnProperty('collections'))
        obj.collections = MsgVpnBridgeTlsTrustedCommonNameCollectionsModel.constructFromObject(data['collections']);
      if (data.hasOwnProperty('data'))
        obj.data = MsgVpnBridgeTlsTrustedCommonNameModel.constructFromObject(data['data']);
      if (data.hasOwnProperty('links'))
        obj.links = MsgVpnBridgeTlsTrustedCommonNameLinksModel.constructFromObject(data['links']);
      if (data.hasOwnProperty('meta'))
        obj.meta = SempMetaModel.constructFromObject(data['meta']);
    }
    return obj;
  }
}

/**
 * @member {module:model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel} collections
 */
MsgVpnBridgeTlsTrustedCommonNameResponseModel.prototype.collections = undefined;

/**
 * @member {module:model/MsgVpnBridgeTlsTrustedCommonNameModel} data
 */
MsgVpnBridgeTlsTrustedCommonNameResponseModel.prototype.data = undefined;

/**
 * @member {module:model/MsgVpnBridgeTlsTrustedCommonNameLinksModel} links
 */
MsgVpnBridgeTlsTrustedCommonNameResponseModel.prototype.links = undefined;

/**
 * @member {module:model/SempMetaModel} meta
 */
MsgVpnBridgeTlsTrustedCommonNameResponseModel.prototype.meta = undefined;

