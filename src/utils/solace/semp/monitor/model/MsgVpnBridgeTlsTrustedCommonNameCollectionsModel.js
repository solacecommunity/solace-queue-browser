import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeTlsTrustedCommonNameCollectionsModel model module.
 * @module model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel
 * @version 2.36
 */
export class MsgVpnBridgeTlsTrustedCommonNameCollectionsModel {
  /**
   * Constructs a new <code>MsgVpnBridgeTlsTrustedCommonNameCollectionsModel</code>.
   * @alias module:model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeTlsTrustedCommonNameCollectionsModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeTlsTrustedCommonNameCollectionsModel} The populated <code>MsgVpnBridgeTlsTrustedCommonNameCollectionsModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeTlsTrustedCommonNameCollectionsModel();
    }
    return obj;
  }
}
