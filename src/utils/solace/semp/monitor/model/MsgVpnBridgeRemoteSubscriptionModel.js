import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRemoteSubscriptionModel model module.
 * @module model/MsgVpnBridgeRemoteSubscriptionModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteSubscriptionModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteSubscriptionModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteSubscriptionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteSubscriptionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteSubscriptionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteSubscriptionModel} The populated <code>MsgVpnBridgeRemoteSubscriptionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteSubscriptionModel();
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('bridgeVirtualRouter'))
        obj.bridgeVirtualRouter = ApiClient.convertToType(data['bridgeVirtualRouter'], 'String');
      if (data.hasOwnProperty('deliverAlwaysEnabled'))
        obj.deliverAlwaysEnabled = ApiClient.convertToType(data['deliverAlwaysEnabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('remoteSubscriptionTopic'))
        obj.remoteSubscriptionTopic = ApiClient.convertToType(data['remoteSubscriptionTopic'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the Bridge.
 * @member {String} bridgeName
 */
MsgVpnBridgeRemoteSubscriptionModel.prototype.bridgeName = undefined;

/**
 * Allowed values for the <code>bridgeVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeRemoteSubscriptionModel.BridgeVirtualRouterEnum = {
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
 * @member {module:model/MsgVpnBridgeRemoteSubscriptionModel.BridgeVirtualRouterEnum} bridgeVirtualRouter
 */
MsgVpnBridgeRemoteSubscriptionModel.prototype.bridgeVirtualRouter = undefined;

/**
 * Indicates whether deliver-always is enabled for the Bridge remote subscription topic instead of a deliver-to-one remote priority. A given topic for the Bridge may be deliver-to-one or deliver-always but not both.
 * @member {Boolean} deliverAlwaysEnabled
 */
MsgVpnBridgeRemoteSubscriptionModel.prototype.deliverAlwaysEnabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnBridgeRemoteSubscriptionModel.prototype.msgVpnName = undefined;

/**
 * The topic of the Bridge remote subscription.
 * @member {String} remoteSubscriptionTopic
 */
MsgVpnBridgeRemoteSubscriptionModel.prototype.remoteSubscriptionTopic = undefined;

