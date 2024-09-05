import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeTlsTrustedCommonNameModel model module.
 * @module model/MsgVpnBridgeTlsTrustedCommonNameModel
 * @version 2.36
 */
export class MsgVpnBridgeTlsTrustedCommonNameModel {
  /**
   * Constructs a new <code>MsgVpnBridgeTlsTrustedCommonNameModel</code>.
   * @alias module:model/MsgVpnBridgeTlsTrustedCommonNameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeTlsTrustedCommonNameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeTlsTrustedCommonNameModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeTlsTrustedCommonNameModel} The populated <code>MsgVpnBridgeTlsTrustedCommonNameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeTlsTrustedCommonNameModel();
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('bridgeVirtualRouter'))
        obj.bridgeVirtualRouter = ApiClient.convertToType(data['bridgeVirtualRouter'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('tlsTrustedCommonName'))
        obj.tlsTrustedCommonName = ApiClient.convertToType(data['tlsTrustedCommonName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Bridge. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} bridgeName
 */
MsgVpnBridgeTlsTrustedCommonNameModel.prototype.bridgeName = undefined;

/**
 * Allowed values for the <code>bridgeVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeTlsTrustedCommonNameModel.BridgeVirtualRouterEnum = {
  /**
   * value: "primary"
   * @const
   */
  primary: "primary",

  /**
   * value: "backup"
   * @const
   */
  backup: "backup",

  /**
   * value: "auto"
   * @const
   */
  auto: "auto"
};
/**
 * The virtual router of the Bridge. The allowed values and their meaning are:  <pre> \"primary\" - The Bridge is used for the primary virtual router. \"backup\" - The Bridge is used for the backup virtual router. \"auto\" - The Bridge is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre>  Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {module:model/MsgVpnBridgeTlsTrustedCommonNameModel.BridgeVirtualRouterEnum} bridgeVirtualRouter
 */
MsgVpnBridgeTlsTrustedCommonNameModel.prototype.bridgeVirtualRouter = undefined;

/**
 * The name of the Message VPN. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} msgVpnName
 */
MsgVpnBridgeTlsTrustedCommonNameModel.prototype.msgVpnName = undefined;

/**
 * The expected trusted common name of the remote certificate. Deprecated since 2.18. Common Name validation has been replaced by Server Certificate Name validation.
 * @member {String} tlsTrustedCommonName
 */
MsgVpnBridgeTlsTrustedCommonNameModel.prototype.tlsTrustedCommonName = undefined;

