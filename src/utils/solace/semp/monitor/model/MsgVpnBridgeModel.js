import {ApiClient} from '../ApiClient';
import {MsgVpnBridgeCounterModel} from './MsgVpnBridgeCounterModel';
import {MsgVpnBridgeRateModel} from './MsgVpnBridgeRateModel';

/**
 * The MsgVpnBridgeModel model module.
 * @module model/MsgVpnBridgeModel
 * @version 2.36
 */
export class MsgVpnBridgeModel {
  /**
   * Constructs a new <code>MsgVpnBridgeModel</code>.
   * @alias module:model/MsgVpnBridgeModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnBridgeModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnBridgeModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnBridgeModel} The populated <code>MsgVpnBridgeModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnBridgeModel();
      if (data.hasOwnProperty('averageRxByteRate'))
        obj.averageRxByteRate = ApiClient.convertToType(data['averageRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxMsgRate'))
        obj.averageRxMsgRate = ApiClient.convertToType(data['averageRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageTxByteRate'))
        obj.averageTxByteRate = ApiClient.convertToType(data['averageTxByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxMsgRate'))
        obj.averageTxMsgRate = ApiClient.convertToType(data['averageTxMsgRate'], 'Number');
      if (data.hasOwnProperty('boundToQueue'))
        obj.boundToQueue = ApiClient.convertToType(data['boundToQueue'], 'Boolean');
      if (data.hasOwnProperty('bridgeName'))
        obj.bridgeName = ApiClient.convertToType(data['bridgeName'], 'String');
      if (data.hasOwnProperty('bridgeVirtualRouter'))
        obj.bridgeVirtualRouter = ApiClient.convertToType(data['bridgeVirtualRouter'], 'String');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('compressed'))
        obj.compressed = ApiClient.convertToType(data['compressed'], 'Boolean');
      if (data.hasOwnProperty('controlRxByteCount'))
        obj.controlRxByteCount = ApiClient.convertToType(data['controlRxByteCount'], 'Number');
      if (data.hasOwnProperty('controlRxMsgCount'))
        obj.controlRxMsgCount = ApiClient.convertToType(data['controlRxMsgCount'], 'Number');
      if (data.hasOwnProperty('controlTxByteCount'))
        obj.controlTxByteCount = ApiClient.convertToType(data['controlTxByteCount'], 'Number');
      if (data.hasOwnProperty('controlTxMsgCount'))
        obj.controlTxMsgCount = ApiClient.convertToType(data['controlTxMsgCount'], 'Number');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnBridgeCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('dataRxByteCount'))
        obj.dataRxByteCount = ApiClient.convertToType(data['dataRxByteCount'], 'Number');
      if (data.hasOwnProperty('dataRxMsgCount'))
        obj.dataRxMsgCount = ApiClient.convertToType(data['dataRxMsgCount'], 'Number');
      if (data.hasOwnProperty('dataTxByteCount'))
        obj.dataTxByteCount = ApiClient.convertToType(data['dataTxByteCount'], 'Number');
      if (data.hasOwnProperty('dataTxMsgCount'))
        obj.dataTxMsgCount = ApiClient.convertToType(data['dataTxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedRxMsgCount'))
        obj.discardedRxMsgCount = ApiClient.convertToType(data['discardedRxMsgCount'], 'Number');
      if (data.hasOwnProperty('discardedTxMsgCount'))
        obj.discardedTxMsgCount = ApiClient.convertToType(data['discardedTxMsgCount'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('encrypted'))
        obj.encrypted = ApiClient.convertToType(data['encrypted'], 'Boolean');
      if (data.hasOwnProperty('establisher'))
        obj.establisher = ApiClient.convertToType(data['establisher'], 'String');
      if (data.hasOwnProperty('inboundFailureReason'))
        obj.inboundFailureReason = ApiClient.convertToType(data['inboundFailureReason'], 'String');
      if (data.hasOwnProperty('inboundState'))
        obj.inboundState = ApiClient.convertToType(data['inboundState'], 'String');
      if (data.hasOwnProperty('lastTxMsgId'))
        obj.lastTxMsgId = ApiClient.convertToType(data['lastTxMsgId'], 'Number');
      if (data.hasOwnProperty('localInterface'))
        obj.localInterface = ApiClient.convertToType(data['localInterface'], 'String');
      if (data.hasOwnProperty('localQueueName'))
        obj.localQueueName = ApiClient.convertToType(data['localQueueName'], 'String');
      if (data.hasOwnProperty('loginRxMsgCount'))
        obj.loginRxMsgCount = ApiClient.convertToType(data['loginRxMsgCount'], 'Number');
      if (data.hasOwnProperty('loginTxMsgCount'))
        obj.loginTxMsgCount = ApiClient.convertToType(data['loginTxMsgCount'], 'Number');
      if (data.hasOwnProperty('maxTtl'))
        obj.maxTtl = ApiClient.convertToType(data['maxTtl'], 'Number');
      if (data.hasOwnProperty('msgSpoolRxMsgCount'))
        obj.msgSpoolRxMsgCount = ApiClient.convertToType(data['msgSpoolRxMsgCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('outboundState'))
        obj.outboundState = ApiClient.convertToType(data['outboundState'], 'String');
      if (data.hasOwnProperty('rate'))
        obj.rate = MsgVpnBridgeRateModel.constructFromObject(data['rate']);
      if (data.hasOwnProperty('remoteAddress'))
        obj.remoteAddress = ApiClient.convertToType(data['remoteAddress'], 'String');
      if (data.hasOwnProperty('remoteAuthenticationBasicClientUsername'))
        obj.remoteAuthenticationBasicClientUsername = ApiClient.convertToType(data['remoteAuthenticationBasicClientUsername'], 'String');
      if (data.hasOwnProperty('remoteAuthenticationClientCertConfigTime'))
        obj.remoteAuthenticationClientCertConfigTime = ApiClient.convertToType(data['remoteAuthenticationClientCertConfigTime'], 'Number');
      if (data.hasOwnProperty('remoteAuthenticationClientCertThumbprint'))
        obj.remoteAuthenticationClientCertThumbprint = ApiClient.convertToType(data['remoteAuthenticationClientCertThumbprint'], 'String');
      if (data.hasOwnProperty('remoteAuthenticationScheme'))
        obj.remoteAuthenticationScheme = ApiClient.convertToType(data['remoteAuthenticationScheme'], 'String');
      if (data.hasOwnProperty('remoteConnectionRetryCount'))
        obj.remoteConnectionRetryCount = ApiClient.convertToType(data['remoteConnectionRetryCount'], 'Number');
      if (data.hasOwnProperty('remoteConnectionRetryDelay'))
        obj.remoteConnectionRetryDelay = ApiClient.convertToType(data['remoteConnectionRetryDelay'], 'Number');
      if (data.hasOwnProperty('remoteDeliverToOnePriority'))
        obj.remoteDeliverToOnePriority = ApiClient.convertToType(data['remoteDeliverToOnePriority'], 'String');
      if (data.hasOwnProperty('remoteMsgVpnName'))
        obj.remoteMsgVpnName = ApiClient.convertToType(data['remoteMsgVpnName'], 'String');
      if (data.hasOwnProperty('remoteRouterName'))
        obj.remoteRouterName = ApiClient.convertToType(data['remoteRouterName'], 'String');
      if (data.hasOwnProperty('remoteTxFlowId'))
        obj.remoteTxFlowId = ApiClient.convertToType(data['remoteTxFlowId'], 'Number');
      if (data.hasOwnProperty('rxByteCount'))
        obj.rxByteCount = ApiClient.convertToType(data['rxByteCount'], 'Number');
      if (data.hasOwnProperty('rxByteRate'))
        obj.rxByteRate = ApiClient.convertToType(data['rxByteRate'], 'Number');
      if (data.hasOwnProperty('rxConnectionFailureCategory'))
        obj.rxConnectionFailureCategory = ApiClient.convertToType(data['rxConnectionFailureCategory'], 'String');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxMsgRate'))
        obj.rxMsgRate = ApiClient.convertToType(data['rxMsgRate'], 'Number');
      if (data.hasOwnProperty('tlsCipherSuiteList'))
        obj.tlsCipherSuiteList = ApiClient.convertToType(data['tlsCipherSuiteList'], 'String');
      if (data.hasOwnProperty('tlsDefaultCipherSuiteList'))
        obj.tlsDefaultCipherSuiteList = ApiClient.convertToType(data['tlsDefaultCipherSuiteList'], 'Boolean');
      if (data.hasOwnProperty('ttlExceededEventRaised'))
        obj.ttlExceededEventRaised = ApiClient.convertToType(data['ttlExceededEventRaised'], 'Boolean');
      if (data.hasOwnProperty('txByteCount'))
        obj.txByteCount = ApiClient.convertToType(data['txByteCount'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txMsgCount'))
        obj.txMsgCount = ApiClient.convertToType(data['txMsgCount'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * The one minute average of the message rate received from the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageRxByteRate
 */
MsgVpnBridgeModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the message rate received from the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageRxMsgRate
 */
MsgVpnBridgeModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} averageTxByteRate
 */
MsgVpnBridgeModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the message rate transmitted to the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} averageTxMsgRate
 */
MsgVpnBridgeModel.prototype.averageTxMsgRate = undefined;

/**
 * Indicates whether the Bridge is bound to the queue in the remote Message VPN.
 * @member {Boolean} boundToQueue
 */
MsgVpnBridgeModel.prototype.boundToQueue = undefined;

/**
 * The name of the Bridge.
 * @member {String} bridgeName
 */
MsgVpnBridgeModel.prototype.bridgeName = undefined;

/**
 * Allowed values for the <code>bridgeVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeModel.BridgeVirtualRouterEnum = {
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
 * @member {module:model/MsgVpnBridgeModel.BridgeVirtualRouterEnum} bridgeVirtualRouter
 */
MsgVpnBridgeModel.prototype.bridgeVirtualRouter = undefined;

/**
 * The name of the Client for the Bridge.
 * @member {String} clientName
 */
MsgVpnBridgeModel.prototype.clientName = undefined;

/**
 * Indicates whether messages transmitted over the Bridge are compressed.
 * @member {Boolean} compressed
 */
MsgVpnBridgeModel.prototype.compressed = undefined;

/**
 * The amount of client control messages received from the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} controlRxByteCount
 */
MsgVpnBridgeModel.prototype.controlRxByteCount = undefined;

/**
 * The number of client control messages received from the Bridge. Available since 2.13.
 * @member {Number} controlRxMsgCount
 */
MsgVpnBridgeModel.prototype.controlRxMsgCount = undefined;

/**
 * The amount of client control messages transmitted to the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} controlTxByteCount
 */
MsgVpnBridgeModel.prototype.controlTxByteCount = undefined;

/**
 * The number of client control messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} controlTxMsgCount
 */
MsgVpnBridgeModel.prototype.controlTxMsgCount = undefined;

/**
 * @member {module:model/MsgVpnBridgeCounterModel} counter
 */
MsgVpnBridgeModel.prototype.counter = undefined;

/**
 * The amount of client data messages received from the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} dataRxByteCount
 */
MsgVpnBridgeModel.prototype.dataRxByteCount = undefined;

/**
 * The number of client data messages received from the Bridge. Available since 2.13.
 * @member {Number} dataRxMsgCount
 */
MsgVpnBridgeModel.prototype.dataRxMsgCount = undefined;

/**
 * The amount of client data messages transmitted to the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} dataTxByteCount
 */
MsgVpnBridgeModel.prototype.dataTxByteCount = undefined;

/**
 * The number of client data messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} dataTxMsgCount
 */
MsgVpnBridgeModel.prototype.dataTxMsgCount = undefined;

/**
 * The number of messages discarded during reception from the Bridge. Available since 2.13.
 * @member {Number} discardedRxMsgCount
 */
MsgVpnBridgeModel.prototype.discardedRxMsgCount = undefined;

/**
 * The number of messages discarded during transmission to the Bridge. Available since 2.13.
 * @member {Number} discardedTxMsgCount
 */
MsgVpnBridgeModel.prototype.discardedTxMsgCount = undefined;

/**
 * Indicates whether the Bridge is enabled.
 * @member {Boolean} enabled
 */
MsgVpnBridgeModel.prototype.enabled = undefined;

/**
 * Indicates whether messages transmitted over the Bridge are encrypted with TLS.
 * @member {Boolean} encrypted
 */
MsgVpnBridgeModel.prototype.encrypted = undefined;

/**
 * The establisher of the Bridge connection. The allowed values and their meaning are:  <pre> \"local\" - The Bridge connection was established by the local Message VPN. \"remote\" - The Bridge connection was established by the remote Message VPN. </pre> 
 * @member {String} establisher
 */
MsgVpnBridgeModel.prototype.establisher = undefined;

/**
 * The reason for the inbound connection failure from the Bridge. If there is no failure reason, an empty string (\"\") is returned.
 * @member {String} inboundFailureReason
 */
MsgVpnBridgeModel.prototype.inboundFailureReason = undefined;

/**
 * The state of the inbound connection from the Bridge. The allowed values and their meaning are:  <pre> \"init\" - The bridge is down but is initializing. \"disabled\" - The bridge is down. It has been disabled by configuration. \"prepare-wait-to-connect\" - The bridge is down. It is waiting to connect to the remote broker. \"prepare-fetching-dns\" - The bridge is down. The domain name of the remote broker is being resolved. \"not-ready-connecting\" - The bridge is down. It is in the process of connecting to the remote broker. \"not-ready-handshaking\" - The bridge is down. It has connected to the remote broker, and is in the process of negotiating with it. \"not-ready-wait-next\" - The bridge is down. It has failed to connect to a remote broker, and is waiting for the configured remote retry delay to expire before retrying. \"not-ready-wait-reuse\" - The bridge is down. It established its own connection to  the remote broker, but determined instead that it should use a pre-existing connection established from that remote broker. It is waiting for its own connection to close before reusing the existing connection. \"not-ready-wait-bridge-version-mismatch\" - The bridge is down. The connection failed to connect due to the remote broker presenting an unexpected version. \"not-ready-wait-cleanup\" - The bridge is down. Its connection has closed and is in the process of being cleaned up. \"ready-subscribing\" - The bridge is up and is attracting traffic. It is in the process of adding configured subscriptions to the  remote broker. \"ready-in-sync\" - The bridge is up and is attracting traffic. All configured subscriptions have been added to the remote broker. \"stalled\" - The bridge is down. Inbound guaranteed messages are not flowing. Administrative actions may be required to clear this state. \"not-applicable\" - The connection is not relevant in the inbound direction. </pre> 
 * @member {String} inboundState
 */
MsgVpnBridgeModel.prototype.inboundState = undefined;

/**
 * The ID of the last message transmitted to the Bridge.
 * @member {Number} lastTxMsgId
 */
MsgVpnBridgeModel.prototype.lastTxMsgId = undefined;

/**
 * The physical interface on the local Message VPN host for connecting to the remote Message VPN.
 * @member {String} localInterface
 */
MsgVpnBridgeModel.prototype.localInterface = undefined;

/**
 * The name of the local queue for the Bridge.
 * @member {String} localQueueName
 */
MsgVpnBridgeModel.prototype.localQueueName = undefined;

/**
 * The number of login request messages received from the Bridge. Available since 2.13.
 * @member {Number} loginRxMsgCount
 */
MsgVpnBridgeModel.prototype.loginRxMsgCount = undefined;

/**
 * The number of login response messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} loginTxMsgCount
 */
MsgVpnBridgeModel.prototype.loginTxMsgCount = undefined;

/**
 * The maximum time-to-live (TTL) in hops. Messages are discarded if their TTL exceeds this value.
 * @member {Number} maxTtl
 */
MsgVpnBridgeModel.prototype.maxTtl = undefined;

/**
 * The number of guaranteed messages received from the Bridge. Available since 2.13.
 * @member {Number} msgSpoolRxMsgCount
 */
MsgVpnBridgeModel.prototype.msgSpoolRxMsgCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnBridgeModel.prototype.msgVpnName = undefined;

/**
 * The state of the outbound connection to the Bridge. The allowed values and their meaning are:  <pre> \"ready\" - The bridge is up and is delivering traffic. \"not-applicable\" - The connection is not relevant in the outbound direction. </pre> 
 * @member {String} outboundState
 */
MsgVpnBridgeModel.prototype.outboundState = undefined;

/**
 * @member {module:model/MsgVpnBridgeRateModel} rate
 */
MsgVpnBridgeModel.prototype.rate = undefined;

/**
 * The FQDN or IP address of the remote Message VPN.
 * @member {String} remoteAddress
 */
MsgVpnBridgeModel.prototype.remoteAddress = undefined;

/**
 * The Client Username the Bridge uses to login to the remote Message VPN.
 * @member {String} remoteAuthenticationBasicClientUsername
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationBasicClientUsername = undefined;

/**
 * The timestamp of when the client-certificate was configured. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). Available since 2.28.
 * @member {Number} remoteAuthenticationClientCertConfigTime
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationClientCertConfigTime = undefined;

/**
 * The thumbprint of the client-certificate. Available since 2.28.
 * @member {String} remoteAuthenticationClientCertThumbprint
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationClientCertThumbprint = undefined;

/**
 * Allowed values for the <code>remoteAuthenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeModel.RemoteAuthenticationSchemeEnum = {
  /**
   * value: "basic"
   * @const
   */
  basic: "basic",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate"
};
/**
 * The authentication scheme for the remote Message VPN. The allowed values and their meaning are:  <pre> \"basic\" - Basic Authentication Scheme (via username and password). \"client-certificate\" - Client Certificate Authentication Scheme (via certificate file or content). </pre> 
 * @member {module:model/MsgVpnBridgeModel.RemoteAuthenticationSchemeEnum} remoteAuthenticationScheme
 */
MsgVpnBridgeModel.prototype.remoteAuthenticationScheme = undefined;

/**
 * The maximum number of retry attempts to establish a connection to the remote Message VPN. A value of 0 means to retry forever.
 * @member {Number} remoteConnectionRetryCount
 */
MsgVpnBridgeModel.prototype.remoteConnectionRetryCount = undefined;

/**
 * The number of seconds the broker waits for the bridge connection to be established before attempting a new connection.
 * @member {Number} remoteConnectionRetryDelay
 */
MsgVpnBridgeModel.prototype.remoteConnectionRetryDelay = undefined;

/**
 * Allowed values for the <code>remoteDeliverToOnePriority</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnBridgeModel.RemoteDeliverToOnePriorityEnum = {
  /**
   * value: "p1"
   * @const
   */
  p1: "p1",

  /**
   * value: "p2"
   * @const
   */
  p2: "p2",

  /**
   * value: "p3"
   * @const
   */
  p3: "p3",

  /**
   * value: "p4"
   * @const
   */
  p4: "p4",

  /**
   * value: "da"
   * @const
   */
  da: "da"
};
/**
 * The priority for deliver-to-one (DTO) messages transmitted from the remote Message VPN. The allowed values and their meaning are:  <pre> \"p1\" - The 1st or highest priority. \"p2\" - The 2nd highest priority. \"p3\" - The 3rd highest priority. \"p4\" - The 4th highest priority. \"da\" - Ignore priority and deliver always. </pre> 
 * @member {module:model/MsgVpnBridgeModel.RemoteDeliverToOnePriorityEnum} remoteDeliverToOnePriority
 */
MsgVpnBridgeModel.prototype.remoteDeliverToOnePriority = undefined;

/**
 * The name of the remote Message VPN.
 * @member {String} remoteMsgVpnName
 */
MsgVpnBridgeModel.prototype.remoteMsgVpnName = undefined;

/**
 * The name of the remote broker.
 * @member {String} remoteRouterName
 */
MsgVpnBridgeModel.prototype.remoteRouterName = undefined;

/**
 * The ID of the transmit flow for the connected remote Message VPN.
 * @member {Number} remoteTxFlowId
 */
MsgVpnBridgeModel.prototype.remoteTxFlowId = undefined;

/**
 * The amount of messages received from the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} rxByteCount
 */
MsgVpnBridgeModel.prototype.rxByteCount = undefined;

/**
 * The current message rate received from the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} rxByteRate
 */
MsgVpnBridgeModel.prototype.rxByteRate = undefined;

/**
 * The category of the inbound connection failure from the Bridge. The allowed values and their meaning are:  <pre> \"no-failure\" - There is no bridge failure. \"local-configuration-problem\" - The bridge failure is a local configuration problem. \"local-operational-state-problem\" - The bridge failure is an operational state problem. </pre>  Available since 2.18.
 * @member {String} rxConnectionFailureCategory
 */
MsgVpnBridgeModel.prototype.rxConnectionFailureCategory = undefined;

/**
 * The number of messages received from the Bridge. Available since 2.13.
 * @member {Number} rxMsgCount
 */
MsgVpnBridgeModel.prototype.rxMsgCount = undefined;

/**
 * The current message rate received from the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} rxMsgRate
 */
MsgVpnBridgeModel.prototype.rxMsgRate = undefined;

/**
 * The colon-separated list of cipher suites supported for TLS connections to the remote Message VPN. The value \"default\" implies all supported suites ordered from most secure to least secure.
 * @member {String} tlsCipherSuiteList
 */
MsgVpnBridgeModel.prototype.tlsCipherSuiteList = undefined;

/**
 * Indicates whether the Bridge is configured to use the default cipher-suite list.
 * @member {Boolean} tlsDefaultCipherSuiteList
 */
MsgVpnBridgeModel.prototype.tlsDefaultCipherSuiteList = undefined;

/**
 * Indicates whether the TTL (hops) exceeded event has been raised.
 * @member {Boolean} ttlExceededEventRaised
 */
MsgVpnBridgeModel.prototype.ttlExceededEventRaised = undefined;

/**
 * The amount of messages transmitted to the Bridge, in bytes (B). Available since 2.13.
 * @member {Number} txByteCount
 */
MsgVpnBridgeModel.prototype.txByteCount = undefined;

/**
 * The current message rate transmitted to the Bridge, in bytes per second (B/sec). Available since 2.13.
 * @member {Number} txByteRate
 */
MsgVpnBridgeModel.prototype.txByteRate = undefined;

/**
 * The number of messages transmitted to the Bridge. Available since 2.13.
 * @member {Number} txMsgCount
 */
MsgVpnBridgeModel.prototype.txMsgCount = undefined;

/**
 * The current message rate transmitted to the Bridge, in messages per second (msg/sec). Available since 2.13.
 * @member {Number} txMsgRate
 */
MsgVpnBridgeModel.prototype.txMsgRate = undefined;

/**
 * The amount of time in seconds since the Bridge connected to the remote Message VPN.
 * @member {Number} uptime
 */
MsgVpnBridgeModel.prototype.uptime = undefined;

