import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnBridgeRemoteMsgVpnModel model module.
 * @module model/MsgVpnBridgeRemoteMsgVpnModel
 * @version 2.36
 */
export class MsgVpnBridgeRemoteMsgVpnModel {
  /**
   * Constructs a new <code>MsgVpnBridgeRemoteMsgVpnModel</code>.
   * @alias module:model/MsgVpnBridgeRemoteMsgVpnModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeRemoteMsgVpnModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeRemoteMsgVpnModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeRemoteMsgVpnModel} The populated <code>MsgVpnBridgeRemoteMsgVpnModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeRemoteMsgVpnModel();
      if (data.hasOwnProperty('boundToQueue'))
        obj.boundToQueue = ApiClient.convertToType(data['boundToQueue'], 'Boolean');
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('bridgeVirtualRouter'))
        obj.bridgeVirtualRouter = ApiClient.convertToType(data['bridgeVirtualRouter'], 'String');
      if (data.hasOwnProperty('clientUsername'))
        obj.clientUsername = ApiClient.convertToType(data['clientUsername'], 'String');
      if (data.hasOwnProperty('compressedDataEnabled'))
        obj.compressedDataEnabled = ApiClient.convertToType(data['compressedDataEnabled'], 'Boolean');
      if (data.hasOwnProperty('connectOrder'))
        obj.connectOrder = ApiClient.convertToType(data['connectOrder'], 'Number');
      if (data.hasOwnProperty('egressFlowWindowSize'))
        obj.egressFlowWindowSize = ApiClient.convertToType(data['egressFlowWindowSize'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('lastConnectionFailureReason'))
        obj.lastConnectionFailureReason = ApiClient.convertToType(data['lastConnectionFailureReason'], 'String');
      if (data.hasOwnProperty('lastQueueBindFailureReason'))
        obj.lastQueueBindFailureReason = ApiClient.convertToType(data['lastQueueBindFailureReason'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueBinding'))
        obj.queueBinding = ApiClient.convertToType(data['queueBinding'], 'String');
      if (data.hasOwnProperty('queueBoundUptime'))
        obj.queueBoundUptime = ApiClient.convertToType(data['queueBoundUptime'], 'Number');
      if (data.hasOwnProperty('remoteMsgVpnInterface'))
        obj.remoteMsgVpnInterface = ApiClient.convertToType(data['remoteMsgVpnInterface'], 'String');
      if (data.hasOwnProperty('remoteMsgVpnLocation'))
        obj.remoteMsgVpnLocation = ApiClient.convertToType(data['remoteMsgVpnLocation'], 'String');
      if (data.hasOwnProperty('remoteMsgVpnName'))
        obj.remoteMsgVpnName = ApiClient.convertToType(data['remoteMsgVpnName'], 'String');
      if (data.hasOwnProperty('tlsEnabled'))
        obj.tlsEnabled = ApiClient.convertToType(data['tlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('unidirectionalClientProfile'))
        obj.unidirectionalClientProfile = ApiClient.convertToType(data['unidirectionalClientProfile'], 'String');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether the Bridge is bound to the queue in the remote Message VPN.
 * @member {Boolean} boundToQueue
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.boundToQueue = undefined;

/**
 * The name of the Bridge.
 * @member {String} bridgeName
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.bridgeName = undefined;

/**
 * Allowed values for the <code>bridgeVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeRemoteMsgVpnModel.BridgeVirtualRouterEnum = {
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
 * @member {module:model/MsgVpnBridgeRemoteMsgVpnModel.BridgeVirtualRouterEnum} bridgeVirtualRouter
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.bridgeVirtualRouter = undefined;

/**
 * The Client Username the Bridge uses to login to the remote Message VPN. This per remote Message VPN value overrides the value provided for the Bridge overall.
 * @member {String} clientUsername
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.clientUsername = undefined;

/**
 * Indicates whether data compression is enabled for the remote Message VPN connection.
 * @member {Boolean} compressedDataEnabled
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.compressedDataEnabled = undefined;

/**
 * The preference given to incoming connections from remote Message VPN hosts, from 1 (highest priority) to 4 (lowest priority).
 * @member {Number} connectOrder
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.connectOrder = undefined;

/**
 * The number of outstanding guaranteed messages that can be transmitted over the remote Message VPN connection before an acknowledgment is received.
 * @member {Number} egressFlowWindowSize
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.egressFlowWindowSize = undefined;

/**
 * Indicates whether the remote Message VPN is enabled.
 * @member {Boolean} enabled
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.enabled = undefined;

/**
 * The reason for the last connection failure to the remote Message VPN.
 * @member {String} lastConnectionFailureReason
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.lastConnectionFailureReason = undefined;

/**
 * The reason for the last queue bind failure in the remote Message VPN.
 * @member {String} lastQueueBindFailureReason
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.lastQueueBindFailureReason = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.msgVpnName = undefined;

/**
 * The queue binding of the Bridge in the remote Message VPN.
 * @member {String} queueBinding
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.queueBinding = undefined;

/**
 * The amount of time in seconds since the queue was bound in the remote Message VPN.
 * @member {Number} queueBoundUptime
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.queueBoundUptime = undefined;

/**
 * The physical interface on the local Message VPN host for connecting to the remote Message VPN. By default, an interface is chosen automatically (recommended), but if specified, `remoteMsgVpnLocation` must not be a virtual router name.
 * @member {String} remoteMsgVpnInterface
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.remoteMsgVpnInterface = undefined;

/**
 * The location of the remote Message VPN as either an FQDN with port, IP address with port, or virtual router name (starting with \"v:\").
 * @member {String} remoteMsgVpnLocation
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.remoteMsgVpnLocation = undefined;

/**
 * The name of the remote Message VPN.
 * @member {String} remoteMsgVpnName
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.remoteMsgVpnName = undefined;

/**
 * Indicates whether encryption (TLS) is enabled for the remote Message VPN connection.
 * @member {Boolean} tlsEnabled
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.tlsEnabled = undefined;

/**
 * The Client Profile for the unidirectional Bridge of the remote Message VPN. The Client Profile must exist in the local Message VPN, and it is used only for the TCP parameters. Note that the default client profile has a TCP maximum window size of 2 MB.
 * @member {String} unidirectionalClientProfile
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.unidirectionalClientProfile = undefined;

/**
 * Indicates whether the connection to the remote Message VPN is up.
 * @member {Boolean} up
 */
MsgVpnBridgeRemoteMsgVpnModel.prototype.up = undefined;

