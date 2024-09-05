import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeLocalSubscriptionModel model module.
 * @module model/MsgVpnBridgeLocalSubscriptionModel
 * @version 2.36
 */
export class MsgVpnBridgeLocalSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnBridgeLocalSubscriptionModel</code>.
   * @alias module:model/MsgVpnBridgeLocalSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeLocalSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeLocalSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeLocalSubscriptionModel} The populated <code>MsgVpnBridgeLocalSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeLocalSubscriptionModel();
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('bridgeVirtualRouter'))
        obj.bridgeVirtualRouter = ApiClient.convertToType(data['bridgeVirtualRouter'], 'String');
      if (data.hasOwnProperty('dtoPriority'))
        obj.dtoPriority = ApiClient.convertToType(data['dtoPriority'], 'String');
      if (data.hasOwnProperty('localSubscriptionTopic'))
        obj.localSubscriptionTopic = ApiClient.convertToType(data['localSubscriptionTopic'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Bridge.
 * @member {String} bridgeName
 */
MsgVpnBridgeLocalSubscriptionModel.prototype.bridgeName = undefined;

/**
 * Allowed values for the <code>bridgeVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeLocalSubscriptionModel.BridgeVirtualRouterEnum = {
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
 * The virtual router of the Bridge. The allowed values and their meaning are:  <pre> \"primary\" - The Bridge is used for the primary virtual router. \"backup\" - The Bridge is used for the backup virtual router. \"auto\" - The Bridge is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre> 
 * @member {module:model/MsgVpnBridgeLocalSubscriptionModel.BridgeVirtualRouterEnum} bridgeVirtualRouter
 */
MsgVpnBridgeLocalSubscriptionModel.prototype.bridgeVirtualRouter = undefined;

/**
 * The priority of the Bridge local subscription topic for receiving deliver-to-one (DTO) messages. The allowed values and their meaning are:  <pre> \"p1\" - The 1st or highest priority. \"p2\" - The 2nd highest priority. \"p3\" - The 3rd highest priority. \"p4\" - The 4th highest priority. \"da\" - Ignore priority and deliver always. </pre> 
 * @member {String} dtoPriority
 */
MsgVpnBridgeLocalSubscriptionModel.prototype.dtoPriority = undefined;

/**
 * The topic of the Bridge local subscription.
 * @member {String} localSubscriptionTopic
 */
MsgVpnBridgeLocalSubscriptionModel.prototype.localSubscriptionTopic = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnBridgeLocalSubscriptionModel.prototype.msgVpnName = undefined;

