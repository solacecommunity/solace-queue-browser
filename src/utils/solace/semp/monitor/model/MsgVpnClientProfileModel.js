import {ApiClient} from '../ApiClient';
import {EventThresholdByPercentModel} from './EventThresholdByPercentModel';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The MsgVpnClientProfileModel model module.
 * @module model/MsgVpnClientProfileModel
 * @version 2.36
 */
export class MsgVpnClientProfileModel {
  /**
   * Constructs a new <code>MsgVpnClientProfileModel</code>.
   * @alias module:model/MsgVpnClientProfileModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnClientProfileModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnClientProfileModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnClientProfileModel} The populated <code>MsgVpnClientProfileModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnClientProfileModel();
      if (data.hasOwnProperty('allowBridgeConnectionsEnabled'))
        obj.allowBridgeConnectionsEnabled = ApiClient.convertToType(data['allowBridgeConnectionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowCutThroughForwardingEnabled'))
        obj.allowCutThroughForwardingEnabled = ApiClient.convertToType(data['allowCutThroughForwardingEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowGuaranteedEndpointCreateDurability'))
        obj.allowGuaranteedEndpointCreateDurability = ApiClient.convertToType(data['allowGuaranteedEndpointCreateDurability'], 'String');
      if (data.hasOwnProperty('allowGuaranteedEndpointCreateEnabled'))
        obj.allowGuaranteedEndpointCreateEnabled = ApiClient.convertToType(data['allowGuaranteedEndpointCreateEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowGuaranteedMsgReceiveEnabled'))
        obj.allowGuaranteedMsgReceiveEnabled = ApiClient.convertToType(data['allowGuaranteedMsgReceiveEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowGuaranteedMsgSendEnabled'))
        obj.allowGuaranteedMsgSendEnabled = ApiClient.convertToType(data['allowGuaranteedMsgSendEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowSharedSubscriptionsEnabled'))
        obj.allowSharedSubscriptionsEnabled = ApiClient.convertToType(data['allowSharedSubscriptionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('allowTransactedSessionsEnabled'))
        obj.allowTransactedSessionsEnabled = ApiClient.convertToType(data['allowTransactedSessionsEnabled'], 'Boolean');
      if (data.hasOwnProperty('apiQueueManagementCopyFromOnCreateName'))
        obj.apiQueueManagementCopyFromOnCreateName = ApiClient.convertToType(data['apiQueueManagementCopyFromOnCreateName'], 'String');
      if (data.hasOwnProperty('apiQueueManagementCopyFromOnCreateTemplateName'))
        obj.apiQueueManagementCopyFromOnCreateTemplateName = ApiClient.convertToType(data['apiQueueManagementCopyFromOnCreateTemplateName'], 'String');
      if (data.hasOwnProperty('apiTopicEndpointManagementCopyFromOnCreateName'))
        obj.apiTopicEndpointManagementCopyFromOnCreateName = ApiClient.convertToType(data['apiTopicEndpointManagementCopyFromOnCreateName'], 'String');
      if (data.hasOwnProperty('apiTopicEndpointManagementCopyFromOnCreateTemplateName'))
        obj.apiTopicEndpointManagementCopyFromOnCreateTemplateName = ApiClient.convertToType(data['apiTopicEndpointManagementCopyFromOnCreateTemplateName'], 'String');
      if (data.hasOwnProperty('clientProfileName'))
        obj.clientProfileName = ApiClient.convertToType(data['clientProfileName'], 'String');
      if (data.hasOwnProperty('compressionEnabled'))
        obj.compressionEnabled = ApiClient.convertToType(data['compressionEnabled'], 'Boolean');
      if (data.hasOwnProperty('elidingDelay'))
        obj.elidingDelay = ApiClient.convertToType(data['elidingDelay'], 'Number');
      if (data.hasOwnProperty('elidingEnabled'))
        obj.elidingEnabled = ApiClient.convertToType(data['elidingEnabled'], 'Boolean');
      if (data.hasOwnProperty('elidingMaxTopicCount'))
        obj.elidingMaxTopicCount = ApiClient.convertToType(data['elidingMaxTopicCount'], 'Number');
      if (data.hasOwnProperty('eventClientProvisionedEndpointSpoolUsageThreshold'))
        obj.eventClientProvisionedEndpointSpoolUsageThreshold = EventThresholdByPercentModel.constructFromObject(data['eventClientProvisionedEndpointSpoolUsageThreshold']);
      if (data.hasOwnProperty('eventConnectionCountPerClientUsernameThreshold'))
        obj.eventConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventEgressFlowCountThreshold'))
        obj.eventEgressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventEgressFlowCountThreshold']);
      if (data.hasOwnProperty('eventEndpointCountPerClientUsernameThreshold'))
        obj.eventEndpointCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventEndpointCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventIngressFlowCountThreshold'))
        obj.eventIngressFlowCountThreshold = EventThresholdModel.constructFromObject(data['eventIngressFlowCountThreshold']);
      if (data.hasOwnProperty('eventServiceSmfConnectionCountPerClientUsernameThreshold'))
        obj.eventServiceSmfConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventServiceSmfConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventServiceWebConnectionCountPerClientUsernameThreshold'))
        obj.eventServiceWebConnectionCountPerClientUsernameThreshold = EventThresholdModel.constructFromObject(data['eventServiceWebConnectionCountPerClientUsernameThreshold']);
      if (data.hasOwnProperty('eventSubscriptionCountThreshold'))
        obj.eventSubscriptionCountThreshold = EventThresholdModel.constructFromObject(data['eventSubscriptionCountThreshold']);
      if (data.hasOwnProperty('eventTransactedSessionCountThreshold'))
        obj.eventTransactedSessionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactedSessionCountThreshold']);
      if (data.hasOwnProperty('eventTransactionCountThreshold'))
        obj.eventTransactionCountThreshold = EventThresholdModel.constructFromObject(data['eventTransactionCountThreshold']);
      if (data.hasOwnProperty('maxConnectionCountPerClientUsername'))
        obj.maxConnectionCountPerClientUsername = ApiClient.convertToType(data['maxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('maxEffectiveEndpointCount'))
        obj.maxEffectiveEndpointCount = ApiClient.convertToType(data['maxEffectiveEndpointCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveRxFlowCount'))
        obj.maxEffectiveRxFlowCount = ApiClient.convertToType(data['maxEffectiveRxFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveSubscriptionCount'))
        obj.maxEffectiveSubscriptionCount = ApiClient.convertToType(data['maxEffectiveSubscriptionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveTransactedSessionCount'))
        obj.maxEffectiveTransactedSessionCount = ApiClient.convertToType(data['maxEffectiveTransactedSessionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveTransactionCount'))
        obj.maxEffectiveTransactionCount = ApiClient.convertToType(data['maxEffectiveTransactionCount'], 'Number');
      if (data.hasOwnProperty('maxEffectiveTxFlowCount'))
        obj.maxEffectiveTxFlowCount = ApiClient.convertToType(data['maxEffectiveTxFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEgressFlowCount'))
        obj.maxEgressFlowCount = ApiClient.convertToType(data['maxEgressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxEndpointCountPerClientUsername'))
        obj.maxEndpointCountPerClientUsername = ApiClient.convertToType(data['maxEndpointCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('maxIngressFlowCount'))
        obj.maxIngressFlowCount = ApiClient.convertToType(data['maxIngressFlowCount'], 'Number');
      if (data.hasOwnProperty('maxMsgsPerTransaction'))
        obj.maxMsgsPerTransaction = ApiClient.convertToType(data['maxMsgsPerTransaction'], 'Number');
      if (data.hasOwnProperty('maxSubscriptionCount'))
        obj.maxSubscriptionCount = ApiClient.convertToType(data['maxSubscriptionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactedSessionCount'))
        obj.maxTransactedSessionCount = ApiClient.convertToType(data['maxTransactedSessionCount'], 'Number');
      if (data.hasOwnProperty('maxTransactionCount'))
        obj.maxTransactionCount = ApiClient.convertToType(data['maxTransactionCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('queueControl1MaxDepth'))
        obj.queueControl1MaxDepth = ApiClient.convertToType(data['queueControl1MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueControl1MinMsgBurst'))
        obj.queueControl1MinMsgBurst = ApiClient.convertToType(data['queueControl1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueDirect1MaxDepth'))
        obj.queueDirect1MaxDepth = ApiClient.convertToType(data['queueDirect1MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueDirect1MinMsgBurst'))
        obj.queueDirect1MinMsgBurst = ApiClient.convertToType(data['queueDirect1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueDirect2MaxDepth'))
        obj.queueDirect2MaxDepth = ApiClient.convertToType(data['queueDirect2MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueDirect2MinMsgBurst'))
        obj.queueDirect2MinMsgBurst = ApiClient.convertToType(data['queueDirect2MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueDirect3MaxDepth'))
        obj.queueDirect3MaxDepth = ApiClient.convertToType(data['queueDirect3MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueDirect3MinMsgBurst'))
        obj.queueDirect3MinMsgBurst = ApiClient.convertToType(data['queueDirect3MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('queueGuaranteed1MaxDepth'))
        obj.queueGuaranteed1MaxDepth = ApiClient.convertToType(data['queueGuaranteed1MaxDepth'], 'Number');
      if (data.hasOwnProperty('queueGuaranteed1MinMsgBurst'))
        obj.queueGuaranteed1MinMsgBurst = ApiClient.convertToType(data['queueGuaranteed1MinMsgBurst'], 'Number');
      if (data.hasOwnProperty('rejectMsgToSenderOnNoSubscriptionMatchEnabled'))
        obj.rejectMsgToSenderOnNoSubscriptionMatchEnabled = ApiClient.convertToType(data['rejectMsgToSenderOnNoSubscriptionMatchEnabled'], 'Boolean');
      if (data.hasOwnProperty('replicationAllowClientConnectWhenStandbyEnabled'))
        obj.replicationAllowClientConnectWhenStandbyEnabled = ApiClient.convertToType(data['replicationAllowClientConnectWhenStandbyEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceMinKeepaliveTimeout'))
        obj.serviceMinKeepaliveTimeout = ApiClient.convertToType(data['serviceMinKeepaliveTimeout'], 'Number');
      if (data.hasOwnProperty('serviceSmfMaxConnectionCountPerClientUsername'))
        obj.serviceSmfMaxConnectionCountPerClientUsername = ApiClient.convertToType(data['serviceSmfMaxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('serviceSmfMinKeepaliveEnabled'))
        obj.serviceSmfMinKeepaliveEnabled = ApiClient.convertToType(data['serviceSmfMinKeepaliveEnabled'], 'Boolean');
      if (data.hasOwnProperty('serviceWebInactiveTimeout'))
        obj.serviceWebInactiveTimeout = ApiClient.convertToType(data['serviceWebInactiveTimeout'], 'Number');
      if (data.hasOwnProperty('serviceWebMaxConnectionCountPerClientUsername'))
        obj.serviceWebMaxConnectionCountPerClientUsername = ApiClient.convertToType(data['serviceWebMaxConnectionCountPerClientUsername'], 'Number');
      if (data.hasOwnProperty('serviceWebMaxPayload'))
        obj.serviceWebMaxPayload = ApiClient.convertToType(data['serviceWebMaxPayload'], 'Number');
      if (data.hasOwnProperty('tcpCongestionWindowSize'))
        obj.tcpCongestionWindowSize = ApiClient.convertToType(data['tcpCongestionWindowSize'], 'Number');
      if (data.hasOwnProperty('tcpKeepaliveCount'))
        obj.tcpKeepaliveCount = ApiClient.convertToType(data['tcpKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('tcpKeepaliveIdleTime'))
        obj.tcpKeepaliveIdleTime = ApiClient.convertToType(data['tcpKeepaliveIdleTime'], 'Number');
      if (data.hasOwnProperty('tcpKeepaliveInterval'))
        obj.tcpKeepaliveInterval = ApiClient.convertToType(data['tcpKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('tcpMaxSegmentSize'))
        obj.tcpMaxSegmentSize = ApiClient.convertToType(data['tcpMaxSegmentSize'], 'Number');
      if (data.hasOwnProperty('tcpMaxWindowSize'))
        obj.tcpMaxWindowSize = ApiClient.convertToType(data['tcpMaxWindowSize'], 'Number');
      if (data.hasOwnProperty('tlsAllowDowngradeToPlainTextEnabled'))
        obj.tlsAllowDowngradeToPlainTextEnabled = ApiClient.convertToType(data['tlsAllowDowngradeToPlainTextEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether Bridge clients using the Client Profile are allowed to connect.
 * @member {Boolean} allowBridgeConnectionsEnabled
 */
MsgVpnClientProfileModel.prototype.allowBridgeConnectionsEnabled = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to bind to endpoints with the cut-through forwarding delivery mode. Deprecated since 2.22. This attribute has been deprecated. Please visit the Solace Product Lifecycle Policy web page for details on deprecated features.
 * @member {Boolean} allowCutThroughForwardingEnabled
 */
MsgVpnClientProfileModel.prototype.allowCutThroughForwardingEnabled = undefined;

/**
 * Allowed values for the <code>allowGuaranteedEndpointCreateDurability</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnClientProfileModel.AllowGuaranteedEndpointCreateDurabilityEnum = {
  /**
   * value: "all"
   * @const
   */
  all: "all",

  /**
   * value: "durable"
   * @const
   */
  durable: "durable",

  /**
   * value: "non-durable"
   * @const
   */
  nonDurable: "non-durable"
};
/**
 * Indicates whether clients using the Client Profile are allowed to create durable and/or non-durable topic endpoints or queues. The allowed values and their meaning are:  <pre> \"all\" - Client can create any type of endpoint. \"durable\" - Client can create only durable endpoints. \"non-durable\" - Client can create only non-durable endpoints. </pre>  Available since 2.14.
 * @member {module:model/MsgVpnClientProfileModel.AllowGuaranteedEndpointCreateDurabilityEnum} allowGuaranteedEndpointCreateDurability
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedEndpointCreateDurability = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to create topic endpoints or queues.
 * @member {Boolean} allowGuaranteedEndpointCreateEnabled
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedEndpointCreateEnabled = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to receive guaranteed messages.
 * @member {Boolean} allowGuaranteedMsgReceiveEnabled
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedMsgReceiveEnabled = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to send guaranteed messages.
 * @member {Boolean} allowGuaranteedMsgSendEnabled
 */
MsgVpnClientProfileModel.prototype.allowGuaranteedMsgSendEnabled = undefined;

/**
 * Indicates whether shared subscriptions are allowed. Changing this setting does not affect existing subscriptions.
 * @member {Boolean} allowSharedSubscriptionsEnabled
 */
MsgVpnClientProfileModel.prototype.allowSharedSubscriptionsEnabled = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to establish transacted sessions.
 * @member {Boolean} allowTransactedSessionsEnabled
 */
MsgVpnClientProfileModel.prototype.allowTransactedSessionsEnabled = undefined;

/**
 * The name of a queue to copy settings from when a new queue is created by a client using the Client Profile. The referenced queue must exist in the Message VPN. Deprecated since 2.14. This attribute has been replaced with `apiQueueManagementCopyFromOnCreateTemplateName`.
 * @member {String} apiQueueManagementCopyFromOnCreateName
 */
MsgVpnClientProfileModel.prototype.apiQueueManagementCopyFromOnCreateName = undefined;

/**
 * The name of a queue template to copy settings from when a new queue is created by a client using the Client Profile. If the referenced queue template does not exist, queue creation will fail when it tries to resolve this template. Available since 2.14.
 * @member {String} apiQueueManagementCopyFromOnCreateTemplateName
 */
MsgVpnClientProfileModel.prototype.apiQueueManagementCopyFromOnCreateTemplateName = undefined;

/**
 * The name of a topic endpoint to copy settings from when a new topic endpoint is created by a client using the Client Profile. The referenced topic endpoint must exist in the Message VPN. Deprecated since 2.14. This attribute has been replaced with `apiTopicEndpointManagementCopyFromOnCreateTemplateName`.
 * @member {String} apiTopicEndpointManagementCopyFromOnCreateName
 */
MsgVpnClientProfileModel.prototype.apiTopicEndpointManagementCopyFromOnCreateName = undefined;

/**
 * The name of a topic endpoint template to copy settings from when a new topic endpoint is created by a client using the Client Profile. If the referenced topic endpoint template does not exist, topic endpoint creation will fail when it tries to resolve this template. Available since 2.14.
 * @member {String} apiTopicEndpointManagementCopyFromOnCreateTemplateName
 */
MsgVpnClientProfileModel.prototype.apiTopicEndpointManagementCopyFromOnCreateTemplateName = undefined;

/**
 * The name of the Client Profile.
 * @member {String} clientProfileName
 */
MsgVpnClientProfileModel.prototype.clientProfileName = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to use compression.
 * @member {Boolean} compressionEnabled
 */
MsgVpnClientProfileModel.prototype.compressionEnabled = undefined;

/**
 * The amount of time to delay the delivery of messages to clients using the Client Profile after the initial message has been delivered (the eliding delay interval), in milliseconds. A value of 0 means there is no delay in delivering messages to clients.
 * @member {Number} elidingDelay
 */
MsgVpnClientProfileModel.prototype.elidingDelay = undefined;

/**
 * Indicates whether message eliding is enabled for clients using the Client Profile.
 * @member {Boolean} elidingEnabled
 */
MsgVpnClientProfileModel.prototype.elidingEnabled = undefined;

/**
 * The maximum number of topics tracked for message eliding per client connection using the Client Profile.
 * @member {Number} elidingMaxTopicCount
 */
MsgVpnClientProfileModel.prototype.elidingMaxTopicCount = undefined;

/**
 * @member {module:model/EventThresholdByPercentModel} eventClientProvisionedEndpointSpoolUsageThreshold
 */
MsgVpnClientProfileModel.prototype.eventClientProvisionedEndpointSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventConnectionCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventConnectionCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEgressFlowCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventEgressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventEndpointCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventEndpointCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventIngressFlowCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventIngressFlowCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceSmfConnectionCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventServiceSmfConnectionCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventServiceWebConnectionCountPerClientUsernameThreshold
 */
MsgVpnClientProfileModel.prototype.eventServiceWebConnectionCountPerClientUsernameThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventSubscriptionCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventSubscriptionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactedSessionCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventTransactedSessionCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventTransactionCountThreshold
 */
MsgVpnClientProfileModel.prototype.eventTransactionCountThreshold = undefined;

/**
 * The maximum number of client connections per Client Username using the Client Profile.
 * @member {Number} maxConnectionCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.maxConnectionCountPerClientUsername = undefined;

/**
 * The effective maximum number of queues and topic endpoints per Client Username using the Client Profile.
 * @member {Number} maxEffectiveEndpointCount
 */
MsgVpnClientProfileModel.prototype.maxEffectiveEndpointCount = undefined;

/**
 * The effective maximum number of receive flows per client using the Client Profile.
 * @member {Number} maxEffectiveRxFlowCount
 */
MsgVpnClientProfileModel.prototype.maxEffectiveRxFlowCount = undefined;

/**
 * The effective maximum number of subscriptions per client using the Client Profile.
 * @member {Number} maxEffectiveSubscriptionCount
 */
MsgVpnClientProfileModel.prototype.maxEffectiveSubscriptionCount = undefined;

/**
 * The effective maximum number of transacted sessions per client using the Client Profile.
 * @member {Number} maxEffectiveTransactedSessionCount
 */
MsgVpnClientProfileModel.prototype.maxEffectiveTransactedSessionCount = undefined;

/**
 * The effective maximum number of transactions per client using the Client Profile.
 * @member {Number} maxEffectiveTransactionCount
 */
MsgVpnClientProfileModel.prototype.maxEffectiveTransactionCount = undefined;

/**
 * The effective maximum number of transmit flows per client using the Client Profile.
 * @member {Number} maxEffectiveTxFlowCount
 */
MsgVpnClientProfileModel.prototype.maxEffectiveTxFlowCount = undefined;

/**
 * The maximum number of transmit flows that can be created by one client using the Client Profile.
 * @member {Number} maxEgressFlowCount
 */
MsgVpnClientProfileModel.prototype.maxEgressFlowCount = undefined;

/**
 * The maximum number of queues and topic endpoints that can be created by clients with the same Client Username using the Client Profile.
 * @member {Number} maxEndpointCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.maxEndpointCountPerClientUsername = undefined;

/**
 * The maximum number of receive flows that can be created by one client using the Client Profile.
 * @member {Number} maxIngressFlowCount
 */
MsgVpnClientProfileModel.prototype.maxIngressFlowCount = undefined;

/**
 * The maximum number of publisher and consumer messages combined that is allowed within a transaction for each client associated with this client-profile. Exceeding this limit will result in a transaction prepare or commit failure. Changing this value during operation will not affect existing sessions. It is only validated at transaction creation time. Large transactions consume more resources and are more likely to require retrieving messages from the ADB or from disk to process the transaction prepare or commit requests. The transaction processing rate may diminish if a large number of messages must be retrieved from the ADB or from disk. Care should be taken to not use excessively large transactions needlessly to avoid exceeding resource limits and to avoid reducing the overall broker performance. Available since 2.20.
 * @member {Number} maxMsgsPerTransaction
 */
MsgVpnClientProfileModel.prototype.maxMsgsPerTransaction = undefined;

/**
 * The maximum number of subscriptions per client using the Client Profile. This limit is not enforced when a client adds a subscription to an endpoint, except for MQTT QoS 1 subscriptions. In addition, this limit is not enforced when a subscription is added using a management interface, such as CLI or SEMP.
 * @member {Number} maxSubscriptionCount
 */
MsgVpnClientProfileModel.prototype.maxSubscriptionCount = undefined;

/**
 * The maximum number of transacted sessions that can be created by one client using the Client Profile.
 * @member {Number} maxTransactedSessionCount
 */
MsgVpnClientProfileModel.prototype.maxTransactedSessionCount = undefined;

/**
 * The maximum number of transactions that can be created by one client using the Client Profile.
 * @member {Number} maxTransactionCount
 */
MsgVpnClientProfileModel.prototype.maxTransactionCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnClientProfileModel.prototype.msgVpnName = undefined;

/**
 * The maximum depth of the \"Control 1\" (C-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} queueControl1MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueControl1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Control 1\" (C-1) priority queue, regardless of the `queueControl1MaxDepth` value.
 * @member {Number} queueControl1MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueControl1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 1\" (D-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} queueDirect1MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueDirect1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 1\" (D-1) priority queue, regardless of the `queueDirect1MaxDepth` value.
 * @member {Number} queueDirect1MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueDirect1MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 2\" (D-2) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} queueDirect2MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueDirect2MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 2\" (D-2) priority queue, regardless of the `queueDirect2MaxDepth` value.
 * @member {Number} queueDirect2MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueDirect2MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Direct 3\" (D-3) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} queueDirect3MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueDirect3MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Direct 3\" (D-3) priority queue, regardless of the `queueDirect3MaxDepth` value.
 * @member {Number} queueDirect3MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueDirect3MinMsgBurst = undefined;

/**
 * The maximum depth of the \"Guaranteed 1\" (G-1) priority queue, in work units. Each work unit is 2048 bytes of message data.
 * @member {Number} queueGuaranteed1MaxDepth
 */
MsgVpnClientProfileModel.prototype.queueGuaranteed1MaxDepth = undefined;

/**
 * The number of messages that are always allowed entry into the \"Guaranteed 1\" (G-3) priority queue, regardless of the `queueGuaranteed1MaxDepth` value.
 * @member {Number} queueGuaranteed1MinMsgBurst
 */
MsgVpnClientProfileModel.prototype.queueGuaranteed1MinMsgBurst = undefined;

/**
 * Indicates whether to send a negative acknowledgment (NACK) to a client using the Client Profile when discarding a guaranteed message due to no matching subscription found.
 * @member {Boolean} rejectMsgToSenderOnNoSubscriptionMatchEnabled
 */
MsgVpnClientProfileModel.prototype.rejectMsgToSenderOnNoSubscriptionMatchEnabled = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to connect to the Message VPN when its replication state is standby.
 * @member {Boolean} replicationAllowClientConnectWhenStandbyEnabled
 */
MsgVpnClientProfileModel.prototype.replicationAllowClientConnectWhenStandbyEnabled = undefined;

/**
 * The minimum client keepalive timeout which will be enforced for client connections. Available since 2.19.
 * @member {Number} serviceMinKeepaliveTimeout
 */
MsgVpnClientProfileModel.prototype.serviceMinKeepaliveTimeout = undefined;

/**
 * The maximum number of SMF client connections per Client Username using the Client Profile.
 * @member {Number} serviceSmfMaxConnectionCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.serviceSmfMaxConnectionCountPerClientUsername = undefined;

/**
 * Enable or disable the enforcement of a minimum keepalive timeout for SMF clients. Available since 2.19.
 * @member {Boolean} serviceSmfMinKeepaliveEnabled
 */
MsgVpnClientProfileModel.prototype.serviceSmfMinKeepaliveEnabled = undefined;

/**
 * The timeout for inactive Web Transport client sessions using the Client Profile, in seconds.
 * @member {Number} serviceWebInactiveTimeout
 */
MsgVpnClientProfileModel.prototype.serviceWebInactiveTimeout = undefined;

/**
 * The maximum number of Web Transport client connections per Client Username using the Client Profile.
 * @member {Number} serviceWebMaxConnectionCountPerClientUsername
 */
MsgVpnClientProfileModel.prototype.serviceWebMaxConnectionCountPerClientUsername = undefined;

/**
 * The maximum Web Transport payload size before fragmentation occurs for clients using the Client Profile, in bytes. The size of the header is not included.
 * @member {Number} serviceWebMaxPayload
 */
MsgVpnClientProfileModel.prototype.serviceWebMaxPayload = undefined;

/**
 * The TCP initial congestion window size for clients using the Client Profile, in multiples of the TCP Maximum Segment Size (MSS). Changing the value from its default of 2 results in non-compliance with RFC 2581. Contact support before changing this value.
 * @member {Number} tcpCongestionWindowSize
 */
MsgVpnClientProfileModel.prototype.tcpCongestionWindowSize = undefined;

/**
 * The number of TCP keepalive retransmissions to a client using the Client Profile before declaring that it is not available.
 * @member {Number} tcpKeepaliveCount
 */
MsgVpnClientProfileModel.prototype.tcpKeepaliveCount = undefined;

/**
 * The amount of time a client connection using the Client Profile must remain idle before TCP begins sending keepalive probes, in seconds.
 * @member {Number} tcpKeepaliveIdleTime
 */
MsgVpnClientProfileModel.prototype.tcpKeepaliveIdleTime = undefined;

/**
 * The amount of time between TCP keepalive retransmissions to a client using the Client Profile when no acknowledgment is received, in seconds.
 * @member {Number} tcpKeepaliveInterval
 */
MsgVpnClientProfileModel.prototype.tcpKeepaliveInterval = undefined;

/**
 * The TCP maximum segment size for clients using the Client Profile, in bytes. Changes are applied to all existing connections.
 * @member {Number} tcpMaxSegmentSize
 */
MsgVpnClientProfileModel.prototype.tcpMaxSegmentSize = undefined;

/**
 * The TCP maximum window size for clients using the Client Profile, in kilobytes. Changes are applied to all existing connections. This setting is ignored on the software broker.
 * @member {Number} tcpMaxWindowSize
 */
MsgVpnClientProfileModel.prototype.tcpMaxWindowSize = undefined;

/**
 * Indicates whether clients using the Client Profile are allowed to downgrade an encrypted connection to plain text.
 * @member {Boolean} tlsAllowDowngradeToPlainTextEnabled
 */
MsgVpnClientProfileModel.prototype.tlsAllowDowngradeToPlainTextEnabled = undefined;

