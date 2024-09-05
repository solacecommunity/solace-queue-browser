import {ApiClient} from '../ApiClient';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The MsgVpnTelemetryProfileModel model module.
 * @module model/MsgVpnTelemetryProfileModel
 * @version 2.36
 */
export class MsgVpnTelemetryProfileModel {
  /**
   * Constructs a new <code>MsgVpnTelemetryProfileModel</code>.
   * @alias module:model/MsgVpnTelemetryProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTelemetryProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTelemetryProfileModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTelemetryProfileModel} The populated <code>MsgVpnTelemetryProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTelemetryProfileModel();
      if (data.hasOwnProperty('aclProfileName'))
        obj.aclProfileName = ApiClient.convertToType(data['aclProfileName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueEventBindCountThreshold'))
        obj.queueEventBindCountThreshold = EventThresholdModel.constructFromObject(data['queueEventBindCountThreshold']);
      if (data.hasOwnProperty('queueEventMsgSpoolUsageThreshold'))
        obj.queueEventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['queueEventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('queueMaxBindCount'))
        obj.queueMaxBindCount = ApiClient.convertToType(data['queueMaxBindCount'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSpoolUsage'))
        obj.queueMaxMsgSpoolUsage = ApiClient.convertToType(data['queueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('receiverAclConnectDefaultAction'))
        obj.receiverAclConnectDefaultAction = ApiClient.convertToType(data['receiverAclConnectDefaultAction'], 'String');
      if (data.hasOwnProperty('receiverEnabled'))
        obj.receiverEnabled = ApiClient.convertToType(data['receiverEnabled'], 'Boolean');
      if (data.hasOwnProperty('receiverEventConnectionCountPerClientUsernameThreshold'))
        obj.receiverEventConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['receiverEventConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('receiverMaxConnectionCountPerClientUsername'))
        obj.receiverMaxConnectionCountPerClientUsername = ApiClient.convertToType(data['receiverMaxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('receiverTcpCongestionWindowSize'))
        obj.receiverTcpCongestionWindowSize = ApiClient.convertToType(data['receiverTcpCongestionWindowSize'], 'Number');
      if (data.hasOwnProperty('receiverTcpKeepaliveCount'))
        obj.receiverTcpKeepaliveCount = ApiClient.convertToType(data['receiverTcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('receiverTcpKeepaliveIdleTime'))
        obj.receiverTcpKeepaliveIdleTime = ApiClient.convertToType(data['receiverTcpKeepaliveIdleTime'], 'Number');
      if (data.hasOwnProperty('receiverTcpKeepaliveInterval'))
        obj.receiverTcpKeepaliveInterval = ApiClient.convertToType(data['receiverTcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('receiverTcpMaxSegmentSize'))
        obj.receiverTcpMaxSegmentSize = ApiClient.convertToType(data['receiverTcpMaxSegmentSize'], 'Number');
      if (data.hasOwnProperty('receiverTcpMaxWindowSize'))
        obj.receiverTcpMaxWindowSize = ApiClient.convertToType(data['receiverTcpMaxWindowSize'], 'Number');
      if (data.hasOwnProperty('telemetryProfileName'))
        obj.telemetryProfileName = ApiClient.convertToType(data['telemetryProfileName'], 'String');
      if (data.hasOwnProperty('traceEnabled'))
        obj.traceEnabled = ApiClient.convertToType(data['traceEnabled'], 'Boolean');
      if (data.hasOwnProperty('traceSendSpanGenerationEnabled'))
        obj.traceSendSpanGenerationEnabled = ApiClient.convertToType(data['traceSendSpanGenerationEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The name of the Telemetry Profile ACL Profile.
 * @member {String} aclProfileName
 */
MsgVpnTelemetryProfileModel.prototype.aclProfileName = undefined;

/**
 * The name of the Telemetry Profile Client Profile.
 * @member {String} clientProfileName
 */
MsgVpnTelemetryProfileModel.prototype.clientProfileName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTelemetryProfileModel.prototype.msgVpnName = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventBindCountThreshold
 */
MsgVpnTelemetryProfileModel.prototype.queueEventBindCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventMsgSpoolUsageThreshold
 */
MsgVpnTelemetryProfileModel.prototype.queueEventMsgSpoolUsageThreshold = undefined;

/**
 * The maximum number of consumer flows that can bind to the Queue.
 * @member {Number} queueMaxBindCount
 */
MsgVpnTelemetryProfileModel.prototype.queueMaxBindCount = undefined;

/**
 * The maximum message spool usage allowed by the Queue, in megabytes (MB).
 * @member {Number} queueMaxMsgSpoolUsage
 */
MsgVpnTelemetryProfileModel.prototype.queueMaxMsgSpoolUsage = undefined;

/**
 * The name of the Telemetry Profile Queue.
 * @member {String} queueName
 */
MsgVpnTelemetryProfileModel.prototype.queueName = undefined;

/**
 * Allowed values for the <code>receiverAclConnectDefaultAction</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTelemetryProfileModel.ReceiverAclConnectDefaultActionEnum = {
  /**
   * value: "allow"
   * @const
   */
  allow: "allow",

  /**
   * value: "disallow"
   * @const
   */
  disallow: "disallow"
};
/**
 * The default action to take when a receiver client connects to the broker. The allowed values and their meaning are:  <pre> \"allow\" - Allow client connection unless an exception is found for it. \"disallow\" - Disallow client connection unless an exception is found for it. </pre> 
 * @member {module:model/MsgVpnTelemetryProfileModel.ReceiverAclConnectDefaultActionEnum} receiverAclConnectDefaultAction
 */
MsgVpnTelemetryProfileModel.prototype.receiverAclConnectDefaultAction = undefined;

/**
 * Enable or disable the ability for receiver clients to consume from the #telemetry queue.
 * @member {Boolean} receiverEnabled
 */
MsgVpnTelemetryProfileModel.prototype.receiverEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} receiverEventConnectionCountPerClientUsernameThreshold
 */
MsgVpnTelemetryProfileModel.prototype.receiverEventConnectionCountPerClientUsernameThreshold = undefined;

/**
 * The maximum number of receiver connections per Client Username.
 * @member {Number} receiverMaxConnectionCountPerClientUsername
 */
MsgVpnTelemetryProfileModel.prototype.receiverMaxConnectionCountPerClientUsername = undefined;

/**
 * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
 * @member {Number} receiverTcpCongestionWindowSize
 */
MsgVpnTelemetryProfileModel.prototype.receiverTcpCongestionWindowSize = undefined;

/**
 * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available.
 * @member {Number} receiverTcpKeepaliveCount
 */
MsgVpnTelemetryProfileModel.prototype.receiverTcpKeepaliveCount = undefined;

/**
 * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds.
 * @member {Number} receiverTcpKeepaliveIdleTime
 */
MsgVpnTelemetryProfileModel.prototype.receiverTcpKeepaliveIdleTime = undefined;

/**
 * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds.
 * @member {Number} receiverTcpKeepaliveInterval
 */
MsgVpnTelemetryProfileModel.prototype.receiverTcpKeepaliveInterval = undefined;

/**
 * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections.
 * @member {Number} receiverTcpMaxSegmentSize
 */
MsgVpnTelemetryProfileModel.prototype.receiverTcpMaxSegmentSize = undefined;

/**
 * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
 * @member {Number} receiverTcpMaxWindowSize
 */
MsgVpnTelemetryProfileModel.prototype.receiverTcpMaxWindowSize = undefined;

/**
 * The name of the Telemetry Profile.
 * @member {String} telemetryProfileName
 */
MsgVpnTelemetryProfileModel.prototype.telemetryProfileName = undefined;

/**
 * Enable or disable generation of all trace span data messages. When enabled, the state of configured trace filters control which messages get traced. When disabled, trace span data messages are never generated, regardless of the state of trace filters.
 * @member {Boolean} traceEnabled
 */
MsgVpnTelemetryProfileModel.prototype.traceEnabled = undefined;

/**
 * Enable or disable generation of send spans. For the most complete view of broker message processing, this should be enabled. If the information provided by send spans are not needed, send spans can be disabled to reduce the performance impact of tracing. Available since 2.36.
 * @member {Boolean} traceSendSpanGenerationEnabled
 */
MsgVpnTelemetryProfileModel.prototype.traceSendSpanGenerationEnabled = undefined;

