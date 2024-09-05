import {ApiClient} from '../ApiClient';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The DmrClusterLinkModel model module.
 * @module model/DmrClusterLinkModel
 * @version 2.36
 */
export class DmrClusterLinkModel {
  /**
   * Constructs a new <code>DmrClusterLinkModel</code>.
   * @alias module:model/DmrClusterLinkModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DmrClusterLinkModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DmrClusterLinkModel} obj Optional instance to populate.
   * @return {module:model/DmrClusterLinkModel} The populated <code>DmrClusterLinkModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DmrClusterLinkModel();
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('authenticationSchemeSecure'))
        obj.authenticationSchemeSecure = ApiClient.convertToType(data['authenticationSchemeSecure'], 'Boolean');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('clientProfileQueueControl1MaxDepth'))
        obj.clientProfileQueueControl1MaxDepth = ApiClient.convertToType(data['clientProfileQueueControl1MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueControl1MinMsgBurst'))
        obj.clientProfileQueueControl1MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueControl1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect1MaxDepth'))
        obj.clientProfileQueueDirect1MaxDepth = ApiClient.convertToType(data['clientProfileQueueDirect1MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect1MinMsgBurst'))
        obj.clientProfileQueueDirect1MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueDirect1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect2MaxDepth'))
        obj.clientProfileQueueDirect2MaxDepth = ApiClient.convertToType(data['clientProfileQueueDirect2MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect2MinMsgBurst'))
        obj.clientProfileQueueDirect2MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueDirect2MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect3MaxDepth'))
        obj.clientProfileQueueDirect3MaxDepth = ApiClient.convertToType(data['clientProfileQueueDirect3MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueDirect3MinMsgBurst'))
        obj.clientProfileQueueDirect3MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueDirect3MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueGuaranteed1MaxDepth'))
        obj.clientProfileQueueGuaranteed1MaxDepth = ApiClient.convertToType(data['clientProfileQueueGuaranteed1MaxDepth'], 'Number');
      if (data.hasOwnProperty('clientProfileQueueGuaranteed1MinMsgBurst'))
        obj.clientProfileQueueGuaranteed1MinMsgBurst = ApiClient.convertToType(data['clientProfileQueueGuaranteed1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpCongestionWindowSize'))
        obj.clientProfileTcpCongestionWindowSize = ApiClient.convertToType(data['clientProfileTcpCongestionWindowSize'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpKeepaliveCount'))
        obj.clientProfileTcpKeepaliveCount = ApiClient.convertToType(data['clientProfileTcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpKeepaliveIdleTime'))
        obj.clientProfileTcpKeepaliveIdleTime = ApiClient.convertToType(data['clientProfileTcpKeepaliveIdleTime'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpKeepaliveInterval'))
        obj.clientProfileTcpKeepaliveInterval = ApiClient.convertToType(data['clientProfileTcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpMaxSegmentSize'))
        obj.clientProfileTcpMaxSegmentSize = ApiClient.convertToType(data['clientProfileTcpMaxSegmentSize'], 'Number');
      if (data.hasOwnProperty('clientProfileTcpMaxWindowSize'))
        obj.clientProfileTcpMaxWindowSize = ApiClient.convertToType(data['clientProfileTcpMaxWindowSize'], 'Number');
      if (data.hasOwnProperty('dmrClusterName'))
        obj.dmrClusterName = ApiClient.convertToType(data['dmrClusterName'], 'String');
      if (data.hasOwnProperty('egressFlowWindowSize'))
        obj.egressFlowWindowSize = ApiClient.convertToType(data['egressFlowWindowSize'], 'Number');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('initiator'))
        obj.initiator = ApiClient.convertToType(data['initiator'], 'String');
      if (data.hasOwnProperty('queueDeadMsgQueue'))
        obj.queueDeadMsgQueue = ApiClient.convertToType(data['queueDeadMsgQueue'], 'String');
      if (data.hasOwnProperty('queueEventSpoolUsageThreshold'))
        obj.queueEventSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['queueEventSpoolUsageThreshold']);
      if (data.hasOwnProperty('queueMaxDeliveredUnackedMsgsPerFlow'))
        obj.queueMaxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['queueMaxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSpoolUsage'))
        obj.queueMaxMsgSpoolUsage = ApiClient.convertToType(data['queueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('queueMaxRedeliveryCount'))
        obj.queueMaxRedeliveryCount = ApiClient.convertToType(data['queueMaxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('queueMaxTtl'))
        obj.queueMaxTtl = ApiClient.convertToType(data['queueMaxTtl'], 'Number');
      if (data.hasOwnProperty('queueRejectMsgToSenderOnDiscardBehavior'))
        obj.queueRejectMsgToSenderOnDiscardBehavior = ApiClient.convertToType(data['queueRejectMsgToSenderOnDiscardBehavior'], 'String');
      if (data.hasOwnProperty('queueRespectTtlEnabled'))
        obj.queueRespectTtlEnabled = ApiClient.convertToType(data['queueRespectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('remoteClusterName'))
        obj.remoteClusterName = ApiClient.convertToType(data['remoteClusterName'], 'String');
      if (data.hasOwnProperty('remoteNodeName'))
        obj.remoteNodeName = ApiClient.convertToType(data['remoteNodeName'], 'String');
      if (data.hasOwnProperty('span'))
        obj.span = ApiClient.convertToType(data['span'], 'String');
      if (data.hasOwnProperty('transportCompressedEnabled'))
        obj.transportCompressedEnabled = ApiClient.convertToType(data['transportCompressedEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportTlsEnabled'))
        obj.transportTlsEnabled = ApiClient.convertToType(data['transportTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.AuthenticationSchemeEnum = {
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
 * The authentication scheme to be used by the Link which initiates connections to the remote node. The allowed values and their meaning are:  <pre> \"basic\" - Basic Authentication Scheme (via username and password). \"client-certificate\" - Client Certificate Authentication Scheme (via certificate file or content). </pre> 
 * @member {module:model/DmrClusterLinkModel.AuthenticationSchemeEnum} authenticationScheme
 */
DmrClusterLinkModel.prototype.authenticationScheme = undefined;

/**
 * Indicates whether certificate matching rules are used. Available since 2.28.
 * @member {Boolean} authenticationSchemeSecure
 */
DmrClusterLinkModel.prototype.authenticationSchemeSecure = undefined;

/**
 * The name of the Client Profile used by the Link.
 * @member {String} clientProfileName
 */
DmrClusterLinkModel.prototype.clientProfileName = undefined;

/**
 * The maximum depth of the \"Control 1\" (C-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueControl1MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueControl1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Control 1\" (C-1) priority queue, regardless of the `clientProfileQueueControl1MaxDepth` value.
 * @member {Number} clientProfileQueueControl1MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueControl1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 1\" (D-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueDirect1MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 1\" (D-1) priority queue, regardless of the `clientProfileQueueDirect1MaxDepth` value.
 * @member {Number} clientProfileQueueDirect1MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 2\" (D-2) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueDirect2MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect2MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 2\" (D-2) priority queue, regardless of the `clientProfileQueueDirect2MaxDepth` value.
 * @member {Number} clientProfileQueueDirect2MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect2MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 3\" (D-3) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueDirect3MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect3MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 3\" (D-3) priority queue, regardless of the `clientProfileQueueDirect3MaxDepth` value.
 * @member {Number} clientProfileQueueDirect3MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueDirect3MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Guaranteed 1\" (G-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} clientProfileQueueGuaranteed1MaxDepth
 */
DmrClusterLinkModel.prototype.clientProfileQueueGuaranteed1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Guaranteed 1\" (G-3) priority queue, regardless of the `clientProfileQueueGuaranteed1MaxDepth` value.
 * @member {Number} clientProfileQueueGuaranteed1MinMsgBurst
 */
DmrClusterLinkModel.prototype.clientProfileQueueGuaranteed1MinMsgBurst = undefined;

/**
 * The TCP initial congestion window size, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
 * @member {Number} clientProfileTcpCongestionWindowSize
 */
DmrClusterLinkModel.prototype.clientProfileTcpCongestionWindowSize = undefined;

/**
 * The number of TCP keepalive retransmissions to be carried out before declaring that the remote end is not available.
 * @member {Number} clientProfileTcpKeepaliveCount
 */
DmrClusterLinkModel.prototype.clientProfileTcpKeepaliveCount = undefined;

/**
 * The amount of time a connection must remain idle before TCP begins sending keepalive probes, in seconds.
 * @member {Number} clientProfileTcpKeepaliveIdleTime
 */
DmrClusterLinkModel.prototype.clientProfileTcpKeepaliveIdleTime = undefined;

/**
 * The amount of time between TCP keepalive retransmissions when no acknowledgment is received, in seconds.
 * @member {Number} clientProfileTcpKeepaliveInterval
 */
DmrClusterLinkModel.prototype.clientProfileTcpKeepaliveInterval = undefined;

/**
 * The TCP maximum segment size, in bytes. Changes are applied to all existing connections.
 * @member {Number} clientProfileTcpMaxSegmentSize
 */
DmrClusterLinkModel.prototype.clientProfileTcpMaxSegmentSize = undefined;

/**
 * The TCP maximum window size, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
 * @member {Number} clientProfileTcpMaxWindowSize
 */
DmrClusterLinkModel.prototype.clientProfileTcpMaxWindowSize = undefined;

/**
 * The name of the Cluster.
 * @member {String} dmrClusterName
 */
DmrClusterLinkModel.prototype.dmrClusterName = undefined;

/**
 * The number of outstanding guaranteed messages that can be sent over the Link before acknowledgment is received by the sender.
 * @member {Number} egressFlowWindowSize
 */
DmrClusterLinkModel.prototype.egressFlowWindowSize = undefined;

/**
 * Indicates whether the Link is enabled. When disabled, subscription sets of this and the remote node are not kept up-to-date, and messages are not exchanged with the remote node. Published guaranteed messages will be queued up for future delivery based on current subscription sets.
 * @member {Boolean} enabled
 */
DmrClusterLinkModel.prototype.enabled = undefined;

/**
 * The failure reason for the Link being down.
 * @member {String} failureReason
 */
DmrClusterLinkModel.prototype.failureReason = undefined;

/**
 * Allowed values for the <code>initiator</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.InitiatorEnum = {
  /**
   * value: "lexical"
   * @const
   */
  lexical: "lexical",

  /**
   * value: "local"
   * @const
   */
  local: "local",

  /**
   * value: "remote"
   * @const
   */
  remote: "remote"
};
/**
 * The initiator of the Link's TCP connections. The allowed values and their meaning are:  <pre> \"lexical\" - The \"higher\" node-name initiates. \"local\" - The local node initiates. \"remote\" - The remote node initiates. </pre> 
 * @member {module:model/DmrClusterLinkModel.InitiatorEnum} initiator
 */
DmrClusterLinkModel.prototype.initiator = undefined;

/**
 * The name of the Dead Message Queue (DMQ) used by the Queue for discarded messages.
 * @member {String} queueDeadMsgQueue
 */
DmrClusterLinkModel.prototype.queueDeadMsgQueue = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventSpoolUsageThreshold
 */
DmrClusterLinkModel.prototype.queueEventSpoolUsageThreshold = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow for the Queue.
 * @member {Number} queueMaxDeliveredUnackedMsgsPerFlow
 */
DmrClusterLinkModel.prototype.queueMaxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The maximum message spool usage by the Queue (quota), in megabytes (MB).
 * @member {Number} queueMaxMsgSpoolUsage
 */
DmrClusterLinkModel.prototype.queueMaxMsgSpoolUsage = undefined;

/**
 * The maximum number of times the Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
 * @member {Number} queueMaxRedeliveryCount
 */
DmrClusterLinkModel.prototype.queueMaxRedeliveryCount = undefined;

/**
 * The maximum time in seconds a message can stay in the Queue when `queueRespectTtlEnabled` is `true`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `queueMaxTtl` configured for the Queue, is exceeded. A value of 0 disables expiry.
 * @member {Number} queueMaxTtl
 */
DmrClusterLinkModel.prototype.queueMaxTtl = undefined;

/**
 * Allowed values for the <code>queueRejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum = {
  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-queue-enabled"
   * @const
   */
  whenQueueEnabled: "when-queue-enabled",

  /**
   * value: "always"
   * @const
   */
  always: "always"
};
/**
 * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. The allowed values and their meaning are:  <pre> \"never\" - Silently discard messages. \"when-queue-enabled\" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled. \"always\" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled. </pre> 
 * @member {module:model/DmrClusterLinkModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum} queueRejectMsgToSenderOnDiscardBehavior
 */
DmrClusterLinkModel.prototype.queueRejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * Indicates whether the the time-to-live (TTL) for messages in the Queue is respected. When enabled, expired messages are discarded or moved to the DMQ.
 * @member {Boolean} queueRespectTtlEnabled
 */
DmrClusterLinkModel.prototype.queueRespectTtlEnabled = undefined;

/**
 * The cluster name of the remote node. Available since 2.17.
 * @member {String} remoteClusterName
 */
DmrClusterLinkModel.prototype.remoteClusterName = undefined;

/**
 * The name of the node at the remote end of the Link.
 * @member {String} remoteNodeName
 */
DmrClusterLinkModel.prototype.remoteNodeName = undefined;

/**
 * Allowed values for the <code>span</code> property.
 * @enum {String}
 * @readonly
 */
DmrClusterLinkModel.SpanEnum = {
  /**
   * value: "internal"
   * @const
   */
  internal: "internal",

  /**
   * value: "external"
   * @const
   */
  external: "external"
};
/**
 * The span of the Link, either internal or external. Internal Links connect nodes within the same Cluster. External Links connect nodes within different Clusters. The allowed values and their meaning are:  <pre> \"internal\" - Link to same cluster. \"external\" - Link to other cluster. </pre> 
 * @member {module:model/DmrClusterLinkModel.SpanEnum} span
 */
DmrClusterLinkModel.prototype.span = undefined;

/**
 * Indicates whether compression is enabled on the Link.
 * @member {Boolean} transportCompressedEnabled
 */
DmrClusterLinkModel.prototype.transportCompressedEnabled = undefined;

/**
 * Indicates whether encryption (TLS) is enabled on the Link.
 * @member {Boolean} transportTlsEnabled
 */
DmrClusterLinkModel.prototype.transportTlsEnabled = undefined;

/**
 * Indicates whether the Link is operationally up.
 * @member {Boolean} up
 */
DmrClusterLinkModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Link was up.
 * @member {Number} uptime
 */
DmrClusterLinkModel.prototype.uptime = undefined;

