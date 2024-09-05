import {ApiClient} from '../ApiClient';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The MsgVpnTopicEndpointModel model module.
 * @module model/MsgVpnTopicEndpointModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointModel</code>.
   * @alias module:model/MsgVpnTopicEndpointModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointModel} The populated <code>MsgVpnTopicEndpointModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointModel();
      if (data.hasOwnProperty('accessType'))
        obj.accessType = ApiClient.convertToType(data['accessType'], 'String');
      if (data.hasOwnProperty('alreadyBoundBindFailureCount'))
        obj.alreadyBoundBindFailureCount = ApiClient.convertToType(data['alreadyBoundBindFailureCount'], 'Number');
      if (data.hasOwnProperty('averageBindRequestRate'))
        obj.averageBindRequestRate = ApiClient.convertToType(data['averageBindRequestRate'], 'Number');
      if (data.hasOwnProperty('averageRxByteRate'))
        obj.averageRxByteRate = ApiClient.convertToType(data['averageRxByteRate'], 'Number');
      if (data.hasOwnProperty('averageRxMsgRate'))
        obj.averageRxMsgRate = ApiClient.convertToType(data['averageRxMsgRate'], 'Number');
      if (data.hasOwnProperty('averageTxByteRate'))
        obj.averageTxByteRate = ApiClient.convertToType(data['averageTxByteRate'], 'Number');
      if (data.hasOwnProperty('averageTxMsgRate'))
        obj.averageTxMsgRate = ApiClient.convertToType(data['averageTxMsgRate'], 'Number');
      if (data.hasOwnProperty('bindRequestCount'))
        obj.bindRequestCount = ApiClient.convertToType(data['bindRequestCount'], 'Number');
      if (data.hasOwnProperty('bindRequestRate'))
        obj.bindRequestRate = ApiClient.convertToType(data['bindRequestRate'], 'Number');
      if (data.hasOwnProperty('bindSuccessCount'))
        obj.bindSuccessCount = ApiClient.convertToType(data['bindSuccessCount'], 'Number');
      if (data.hasOwnProperty('bindTimeForwardingMode'))
        obj.bindTimeForwardingMode = ApiClient.convertToType(data['bindTimeForwardingMode'], 'String');
      if (data.hasOwnProperty('clientProfileDeniedDiscardedMsgCount'))
        obj.clientProfileDeniedDiscardedMsgCount = ApiClient.convertToType(data['clientProfileDeniedDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('consumerAckPropagationEnabled'))
        obj.consumerAckPropagationEnabled = ApiClient.convertToType(data['consumerAckPropagationEnabled'], 'Boolean');
      if (data.hasOwnProperty('createdByManagement'))
        obj.createdByManagement = ApiClient.convertToType(data['createdByManagement'], 'Boolean');
      if (data.hasOwnProperty('deadMsgQueue'))
        obj.deadMsgQueue = ApiClient.convertToType(data['deadMsgQueue'], 'String');
      if (data.hasOwnProperty('deletedMsgCount'))
        obj.deletedMsgCount = ApiClient.convertToType(data['deletedMsgCount'], 'Number');
      if (data.hasOwnProperty('deliveryCountEnabled'))
        obj.deliveryCountEnabled = ApiClient.convertToType(data['deliveryCountEnabled'], 'Boolean');
      if (data.hasOwnProperty('deliveryDelay'))
        obj.deliveryDelay = ApiClient.convertToType(data['deliveryDelay'], 'Number');
      if (data.hasOwnProperty('destinationGroupErrorDiscardedMsgCount'))
        obj.destinationGroupErrorDiscardedMsgCount = ApiClient.convertToType(data['destinationGroupErrorDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('destinationTopic'))
        obj.destinationTopic = ApiClient.convertToType(data['destinationTopic'], 'String');
      if (data.hasOwnProperty('disabledBindFailureCount'))
        obj.disabledBindFailureCount = ApiClient.convertToType(data['disabledBindFailureCount'], 'Number');
      if (data.hasOwnProperty('disabledDiscardedMsgCount'))
        obj.disabledDiscardedMsgCount = ApiClient.convertToType(data['disabledDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('durable'))
        obj.durable = ApiClient.convertToType(data['durable'], 'Boolean');
      if (data.hasOwnProperty('egressEnabled'))
        obj.egressEnabled = ApiClient.convertToType(data['egressEnabled'], 'Boolean');
      if (data.hasOwnProperty('eventBindCountThreshold'))
        obj.eventBindCountThreshold = EventThresholdModel.constructFromObject(data['eventBindCountThreshold']);
      if (data.hasOwnProperty('eventRejectLowPriorityMsgLimitThreshold'))
        obj.eventRejectLowPriorityMsgLimitThreshold = EventThresholdModel.constructFromObject(data['eventRejectLowPriorityMsgLimitThreshold']);
      if (data.hasOwnProperty('eventSpoolUsageThreshold'))
        obj.eventSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['eventSpoolUsageThreshold']);
      if (data.hasOwnProperty('highestAckedMsgId'))
        obj.highestAckedMsgId = ApiClient.convertToType(data['highestAckedMsgId'], 'Number');
      if (data.hasOwnProperty('highestMsgId'))
        obj.highestMsgId = ApiClient.convertToType(data['highestMsgId'], 'Number');
      if (data.hasOwnProperty('inProgressAckMsgCount'))
        obj.inProgressAckMsgCount = ApiClient.convertToType(data['inProgressAckMsgCount'], 'Number');
      if (data.hasOwnProperty('ingressEnabled'))
        obj.ingressEnabled = ApiClient.convertToType(data['ingressEnabled'], 'Boolean');
      if (data.hasOwnProperty('invalidSelectorBindFailureCount'))
        obj.invalidSelectorBindFailureCount = ApiClient.convertToType(data['invalidSelectorBindFailureCount'], 'Number');
      if (data.hasOwnProperty('lastReplayCompleteTime'))
        obj.lastReplayCompleteTime = ApiClient.convertToType(data['lastReplayCompleteTime'], 'Number');
      if (data.hasOwnProperty('lastReplayFailureReason'))
        obj.lastReplayFailureReason = ApiClient.convertToType(data['lastReplayFailureReason'], 'String');
      if (data.hasOwnProperty('lastReplayFailureTime'))
        obj.lastReplayFailureTime = ApiClient.convertToType(data['lastReplayFailureTime'], 'Number');
      if (data.hasOwnProperty('lastReplayStartTime'))
        obj.lastReplayStartTime = ApiClient.convertToType(data['lastReplayStartTime'], 'Number');
      if (data.hasOwnProperty('lastReplayedMsgTxTime'))
        obj.lastReplayedMsgTxTime = ApiClient.convertToType(data['lastReplayedMsgTxTime'], 'Number');
      if (data.hasOwnProperty('lastSelectorExaminedMsgId'))
        obj.lastSelectorExaminedMsgId = ApiClient.convertToType(data['lastSelectorExaminedMsgId'], 'Number');
      if (data.hasOwnProperty('lastSpooledMsgId'))
        obj.lastSpooledMsgId = ApiClient.convertToType(data['lastSpooledMsgId'], 'Number');
      if (data.hasOwnProperty('lowPriorityMsgCongestionDiscardedMsgCount'))
        obj.lowPriorityMsgCongestionDiscardedMsgCount = ApiClient.convertToType(data['lowPriorityMsgCongestionDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('lowPriorityMsgCongestionState'))
        obj.lowPriorityMsgCongestionState = ApiClient.convertToType(data['lowPriorityMsgCongestionState'], 'String');
      if (data.hasOwnProperty('lowestAckedMsgId'))
        obj.lowestAckedMsgId = ApiClient.convertToType(data['lowestAckedMsgId'], 'Number');
      if (data.hasOwnProperty('lowestMsgId'))
        obj.lowestMsgId = ApiClient.convertToType(data['lowestMsgId'], 'Number');
      if (data.hasOwnProperty('maxBindCount'))
        obj.maxBindCount = ApiClient.convertToType(data['maxBindCount'], 'Number');
      if (data.hasOwnProperty('maxBindCountExceededBindFailureCount'))
        obj.maxBindCountExceededBindFailureCount = ApiClient.convertToType(data['maxBindCountExceededBindFailureCount'], 'Number');
      if (data.hasOwnProperty('maxDeliveredUnackedMsgsPerFlow'))
        obj.maxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['maxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('maxEffectiveBindCount'))
        obj.maxEffectiveBindCount = ApiClient.convertToType(data['maxEffectiveBindCount'], 'Number');
      if (data.hasOwnProperty('maxMsgSize'))
        obj.maxMsgSize = ApiClient.convertToType(data['maxMsgSize'], 'Number');
      if (data.hasOwnProperty('maxMsgSizeExceededDiscardedMsgCount'))
        obj.maxMsgSizeExceededDiscardedMsgCount = ApiClient.convertToType(data['maxMsgSizeExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxMsgSpoolUsageExceededDiscardedMsgCount'))
        obj.maxMsgSpoolUsageExceededDiscardedMsgCount = ApiClient.convertToType(data['maxMsgSpoolUsageExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxRedeliveryCount'))
        obj.maxRedeliveryCount = ApiClient.convertToType(data['maxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('maxRedeliveryExceededDiscardedMsgCount'))
        obj.maxRedeliveryExceededDiscardedMsgCount = ApiClient.convertToType(data['maxRedeliveryExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxRedeliveryExceededToDmqFailedMsgCount'))
        obj.maxRedeliveryExceededToDmqFailedMsgCount = ApiClient.convertToType(data['maxRedeliveryExceededToDmqFailedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxRedeliveryExceededToDmqMsgCount'))
        obj.maxRedeliveryExceededToDmqMsgCount = ApiClient.convertToType(data['maxRedeliveryExceededToDmqMsgCount'], 'Number');
      if (data.hasOwnProperty('maxSpoolUsage'))
        obj.maxSpoolUsage = ApiClient.convertToType(data['maxSpoolUsage'], 'Number');
      if (data.hasOwnProperty('maxTtl'))
        obj.maxTtl = ApiClient.convertToType(data['maxTtl'], 'Number');
      if (data.hasOwnProperty('maxTtlExceededDiscardedMsgCount'))
        obj.maxTtlExceededDiscardedMsgCount = ApiClient.convertToType(data['maxTtlExceededDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxTtlExpiredDiscardedMsgCount'))
        obj.maxTtlExpiredDiscardedMsgCount = ApiClient.convertToType(data['maxTtlExpiredDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxTtlExpiredToDmqFailedMsgCount'))
        obj.maxTtlExpiredToDmqFailedMsgCount = ApiClient.convertToType(data['maxTtlExpiredToDmqFailedMsgCount'], 'Number');
      if (data.hasOwnProperty('maxTtlExpiredToDmqMsgCount'))
        obj.maxTtlExpiredToDmqMsgCount = ApiClient.convertToType(data['maxTtlExpiredToDmqMsgCount'], 'Number');
      if (data.hasOwnProperty('msgSpoolPeakUsage'))
        obj.msgSpoolPeakUsage = ApiClient.convertToType(data['msgSpoolPeakUsage'], 'Number');
      if (data.hasOwnProperty('msgSpoolUsage'))
        obj.msgSpoolUsage = ApiClient.convertToType(data['msgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('networkTopic'))
        obj.networkTopic = ApiClient.convertToType(data['networkTopic'], 'String');
      if (data.hasOwnProperty('noLocalDeliveryDiscardedMsgCount'))
        obj.noLocalDeliveryDiscardedMsgCount = ApiClient.convertToType(data['noLocalDeliveryDiscardedMsgCount'], 'Number');
      if (data.hasOwnProperty('otherBindFailureCount'))
        obj.otherBindFailureCount = ApiClient.convertToType(data['otherBindFailureCount'], 'Number');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('permission'))
        obj.permission = ApiClient.convertToType(data['permission'], 'String');
      if (data.hasOwnProperty('redeliveredMsgCount'))
        obj.redeliveredMsgCount = ApiClient.convertToType(data['redeliveredMsgCount'], 'Number');
      if (data.hasOwnProperty('redeliveryDelayEnabled'))
        obj.redeliveryDelayEnabled = ApiClient.convertToType(data['redeliveryDelayEnabled'], 'Boolean');
      if (data.hasOwnProperty('redeliveryDelayInitialInterval'))
        obj.redeliveryDelayInitialInterval = ApiClient.convertToType(data['redeliveryDelayInitialInterval'], 'Number');
      if (data.hasOwnProperty('redeliveryDelayMaxInterval'))
        obj.redeliveryDelayMaxInterval = ApiClient.convertToType(data['redeliveryDelayMaxInterval'], 'Number');
      if (data.hasOwnProperty('redeliveryDelayMultiplier'))
        obj.redeliveryDelayMultiplier = ApiClient.convertToType(data['redeliveryDelayMultiplier'], 'Number');
      if (data.hasOwnProperty('redeliveryEnabled'))
        obj.redeliveryEnabled = ApiClient.convertToType(data['redeliveryEnabled'], 'Boolean');
      if (data.hasOwnProperty('rejectLowPriorityMsgEnabled'))
        obj.rejectLowPriorityMsgEnabled = ApiClient.convertToType(data['rejectLowPriorityMsgEnabled'], 'Boolean');
      if (data.hasOwnProperty('rejectLowPriorityMsgLimit'))
        obj.rejectLowPriorityMsgLimit = ApiClient.convertToType(data['rejectLowPriorityMsgLimit'], 'Number');
      if (data.hasOwnProperty('rejectMsgToSenderOnDiscardBehavior'))
        obj.rejectMsgToSenderOnDiscardBehavior = ApiClient.convertToType(data['rejectMsgToSenderOnDiscardBehavior'], 'String');
      if (data.hasOwnProperty('replayFailureCount'))
        obj.replayFailureCount = ApiClient.convertToType(data['replayFailureCount'], 'Number');
      if (data.hasOwnProperty('replayStartCount'))
        obj.replayStartCount = ApiClient.convertToType(data['replayStartCount'], 'Number');
      if (data.hasOwnProperty('replayState'))
        obj.replayState = ApiClient.convertToType(data['replayState'], 'String');
      if (data.hasOwnProperty('replaySuccessCount'))
        obj.replaySuccessCount = ApiClient.convertToType(data['replaySuccessCount'], 'Number');
      if (data.hasOwnProperty('replayedAckedMsgCount'))
        obj.replayedAckedMsgCount = ApiClient.convertToType(data['replayedAckedMsgCount'], 'Number');
      if (data.hasOwnProperty('replayedTxMsgCount'))
        obj.replayedTxMsgCount = ApiClient.convertToType(data['replayedTxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationActiveAckPropTxMsgCount'))
        obj.replicationActiveAckPropTxMsgCount = ApiClient.convertToType(data['replicationActiveAckPropTxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyAckPropRxMsgCount'))
        obj.replicationStandbyAckPropRxMsgCount = ApiClient.convertToType(data['replicationStandbyAckPropRxMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyAckedByAckPropMsgCount'))
        obj.replicationStandbyAckedByAckPropMsgCount = ApiClient.convertToType(data['replicationStandbyAckedByAckPropMsgCount'], 'Number');
      if (data.hasOwnProperty('replicationStandbyRxMsgCount'))
        obj.replicationStandbyRxMsgCount = ApiClient.convertToType(data['replicationStandbyRxMsgCount'], 'Number');
      if (data.hasOwnProperty('respectMsgPriorityEnabled'))
        obj.respectMsgPriorityEnabled = ApiClient.convertToType(data['respectMsgPriorityEnabled'], 'Boolean');
      if (data.hasOwnProperty('respectTtlEnabled'))
        obj.respectTtlEnabled = ApiClient.convertToType(data['respectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('rxByteRate'))
        obj.rxByteRate = ApiClient.convertToType(data['rxByteRate'], 'Number');
      if (data.hasOwnProperty('rxMsgRate'))
        obj.rxMsgRate = ApiClient.convertToType(data['rxMsgRate'], 'Number');
      if (data.hasOwnProperty('rxSelector'))
        obj.rxSelector = ApiClient.convertToType(data['rxSelector'], 'Boolean');
      if (data.hasOwnProperty('selector'))
        obj.selector = ApiClient.convertToType(data['selector'], 'String');
      if (data.hasOwnProperty('selectorExaminedMsgCount'))
        obj.selectorExaminedMsgCount = ApiClient.convertToType(data['selectorExaminedMsgCount'], 'Number');
      if (data.hasOwnProperty('selectorMatchedMsgCount'))
        obj.selectorMatchedMsgCount = ApiClient.convertToType(data['selectorMatchedMsgCount'], 'Number');
      if (data.hasOwnProperty('selectorNotMatchedMsgCount'))
        obj.selectorNotMatchedMsgCount = ApiClient.convertToType(data['selectorNotMatchedMsgCount'], 'Number');
      if (data.hasOwnProperty('spooledByteCount'))
        obj.spooledByteCount = ApiClient.convertToType(data['spooledByteCount'], 'Number');
      if (data.hasOwnProperty('spooledMsgCount'))
        obj.spooledMsgCount = ApiClient.convertToType(data['spooledMsgCount'], 'Number');
      if (data.hasOwnProperty('topicEndpointName'))
        obj.topicEndpointName = ApiClient.convertToType(data['topicEndpointName'], 'String');
      if (data.hasOwnProperty('transportRetransmitMsgCount'))
        obj.transportRetransmitMsgCount = ApiClient.convertToType(data['transportRetransmitMsgCount'], 'Number');
      if (data.hasOwnProperty('txByteRate'))
        obj.txByteRate = ApiClient.convertToType(data['txByteRate'], 'Number');
      if (data.hasOwnProperty('txMsgRate'))
        obj.txMsgRate = ApiClient.convertToType(data['txMsgRate'], 'Number');
      if (data.hasOwnProperty('txUnackedMsgCount'))
        obj.txUnackedMsgCount = ApiClient.convertToType(data['txUnackedMsgCount'], 'Number');
      if (data.hasOwnProperty('virtualRouter'))
        obj.virtualRouter = ApiClient.convertToType(data['virtualRouter'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>accessType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTopicEndpointModel.AccessTypeEnum = {
  /**
   * value: "exclusive"
   * @const
   */
  exclusive: "exclusive",

  /**
   * value: "non-exclusive"
   * @const
   */
  nonExclusive: "non-exclusive"
};
/**
 * The access type for delivering messages to consumer flows bound to the Topic Endpoint. The allowed values and their meaning are:  <pre> \"exclusive\" - Exclusive delivery of messages to the first bound consumer flow. \"non-exclusive\" - Non-exclusive delivery of messages to bound consumer flows in a round-robin (if partition count is zero) or partitioned (if partition count is non-zero) fashion. </pre> 
 * @member {module:model/MsgVpnTopicEndpointModel.AccessTypeEnum} accessType
 */
MsgVpnTopicEndpointModel.prototype.accessType = undefined;

/**
 * The number of Topic Endpoint bind failures due to being already bound.
 * @member {Number} alreadyBoundBindFailureCount
 */
MsgVpnTopicEndpointModel.prototype.alreadyBoundBindFailureCount = undefined;

/**
 * The one minute average of the bind request rate received by the Topic Endpoint, in binds per second (binds/sec). Available since 2.25.
 * @member {Number} averageBindRequestRate
 */
MsgVpnTopicEndpointModel.prototype.averageBindRequestRate = undefined;

/**
 * The one minute average of the message rate received by the Topic Endpoint, in bytes per second (B/sec).
 * @member {Number} averageRxByteRate
 */
MsgVpnTopicEndpointModel.prototype.averageRxByteRate = undefined;

/**
 * The one minute average of the message rate received by the Topic Endpoint, in messages per second (msg/sec).
 * @member {Number} averageRxMsgRate
 */
MsgVpnTopicEndpointModel.prototype.averageRxMsgRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Topic Endpoint, in bytes per second (B/sec).
 * @member {Number} averageTxByteRate
 */
MsgVpnTopicEndpointModel.prototype.averageTxByteRate = undefined;

/**
 * The one minute average of the message rate transmitted by the Topic Endpoint, in messages per second (msg/sec).
 * @member {Number} averageTxMsgRate
 */
MsgVpnTopicEndpointModel.prototype.averageTxMsgRate = undefined;

/**
 * The number of consumer requests to bind to the Topic Endpoint.
 * @member {Number} bindRequestCount
 */
MsgVpnTopicEndpointModel.prototype.bindRequestCount = undefined;

/**
 * The current bind request rate received by the Topic Endpoint, in binds per second (binds/sec). Available since 2.25.
 * @member {Number} bindRequestRate
 */
MsgVpnTopicEndpointModel.prototype.bindRequestRate = undefined;

/**
 * The number of successful consumer requests to bind to the Topic Endpoint.
 * @member {Number} bindSuccessCount
 */
MsgVpnTopicEndpointModel.prototype.bindSuccessCount = undefined;

/**
 * The forwarding mode of the Topic Endpoint at bind time. The allowed values and their meaning are:  <pre> \"store-and-forward\" - Deliver messages using the guaranteed data path. \"cut-through\" - Deliver messages using the direct and guaranteed data paths for lower latency. </pre> 
 * @member {String} bindTimeForwardingMode
 */
MsgVpnTopicEndpointModel.prototype.bindTimeForwardingMode = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to being denied by the Client Profile.
 * @member {Number} clientProfileDeniedDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.clientProfileDeniedDiscardedMsgCount = undefined;

/**
 * Indicates whether the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN is enabled.
 * @member {Boolean} consumerAckPropagationEnabled
 */
MsgVpnTopicEndpointModel.prototype.consumerAckPropagationEnabled = undefined;

/**
 * Indicates whether the Topic Endpoint was created by a management API (CLI or SEMP).
 * @member {Boolean} createdByManagement
 */
MsgVpnTopicEndpointModel.prototype.createdByManagement = undefined;

/**
 * The name of the Dead Message Queue (DMQ) used by the Topic Endpoint.
 * @member {String} deadMsgQueue
 */
MsgVpnTopicEndpointModel.prototype.deadMsgQueue = undefined;

/**
 * The number of guaranteed messages deleted from the Topic Endpoint.
 * @member {Number} deletedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.deletedMsgCount = undefined;

/**
 * Enable or disable the ability for client applications to query the message delivery count of messages received from the Topic Endpoint. This is a controlled availability feature. Please contact support to find out if this feature is supported for your use case. Available since 2.19.
 * @member {Boolean} deliveryCountEnabled
 */
MsgVpnTopicEndpointModel.prototype.deliveryCountEnabled = undefined;

/**
 * The delay, in seconds, to apply to messages arriving on the Topic Endpoint before the messages are eligible for delivery. Available since 2.22.
 * @member {Number} deliveryDelay
 */
MsgVpnTopicEndpointModel.prototype.deliveryDelay = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to a destination group error.
 * @member {Number} destinationGroupErrorDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.destinationGroupErrorDiscardedMsgCount = undefined;

/**
 * The destination topic of the Topic Endpoint.
 * @member {String} destinationTopic
 */
MsgVpnTopicEndpointModel.prototype.destinationTopic = undefined;

/**
 * The number of Topic Endpoint bind failures due to being disabled.
 * @member {Number} disabledBindFailureCount
 */
MsgVpnTopicEndpointModel.prototype.disabledBindFailureCount = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to it being disabled.
 * @member {Number} disabledDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.disabledDiscardedMsgCount = undefined;

/**
 * Indicates whether the Topic Endpoint is durable and not temporary.
 * @member {Boolean} durable
 */
MsgVpnTopicEndpointModel.prototype.durable = undefined;

/**
 * Indicates whether the transmission of messages from the Topic Endpoint is enabled.
 * @member {Boolean} egressEnabled
 */
MsgVpnTopicEndpointModel.prototype.egressEnabled = undefined;

/**
 * @member {module:model/EventThresholdModel} eventBindCountThreshold
 */
MsgVpnTopicEndpointModel.prototype.eventBindCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventRejectLowPriorityMsgLimitThreshold
 */
MsgVpnTopicEndpointModel.prototype.eventRejectLowPriorityMsgLimitThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventSpoolUsageThreshold
 */
MsgVpnTopicEndpointModel.prototype.eventSpoolUsageThreshold = undefined;

/**
 * The highest identifier (ID) of guaranteed messages in the Topic Endpoint that were acknowledged.
 * @member {Number} highestAckedMsgId
 */
MsgVpnTopicEndpointModel.prototype.highestAckedMsgId = undefined;

/**
 * The highest identifier (ID) of guaranteed messages in the Topic Endpoint.
 * @member {Number} highestMsgId
 */
MsgVpnTopicEndpointModel.prototype.highestMsgId = undefined;

/**
 * The number of acknowledgment messages received by the Topic Endpoint that are in the process of updating and deleting associated guaranteed messages.
 * @member {Number} inProgressAckMsgCount
 */
MsgVpnTopicEndpointModel.prototype.inProgressAckMsgCount = undefined;

/**
 * Indicates whether the reception of messages to the Topic Endpoint is enabled.
 * @member {Boolean} ingressEnabled
 */
MsgVpnTopicEndpointModel.prototype.ingressEnabled = undefined;

/**
 * The number of Topic Endpoint bind failures due to an invalid selector.
 * @member {Number} invalidSelectorBindFailureCount
 */
MsgVpnTopicEndpointModel.prototype.invalidSelectorBindFailureCount = undefined;

/**
 * The timestamp of the last completed replay for the Topic Endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastReplayCompleteTime
 */
MsgVpnTopicEndpointModel.prototype.lastReplayCompleteTime = undefined;

/**
 * The reason for the last replay failure for the Topic Endpoint.
 * @member {String} lastReplayFailureReason
 */
MsgVpnTopicEndpointModel.prototype.lastReplayFailureReason = undefined;

/**
 * The timestamp of the last replay failure for the Topic Endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastReplayFailureTime
 */
MsgVpnTopicEndpointModel.prototype.lastReplayFailureTime = undefined;

/**
 * The timestamp of the last replay started for the Topic Endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastReplayStartTime
 */
MsgVpnTopicEndpointModel.prototype.lastReplayStartTime = undefined;

/**
 * The timestamp of the last replayed message transmitted by the Topic Endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} lastReplayedMsgTxTime
 */
MsgVpnTopicEndpointModel.prototype.lastReplayedMsgTxTime = undefined;

/**
 * The identifier (ID) of the last message examined by the Topic Endpoint selector.
 * @member {Number} lastSelectorExaminedMsgId
 */
MsgVpnTopicEndpointModel.prototype.lastSelectorExaminedMsgId = undefined;

/**
 * The identifier (ID) of the last guaranteed message spooled in the Topic Endpoint.
 * @member {Number} lastSpooledMsgId
 */
MsgVpnTopicEndpointModel.prototype.lastSpooledMsgId = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to low priority message congestion control.
 * @member {Number} lowPriorityMsgCongestionDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.lowPriorityMsgCongestionDiscardedMsgCount = undefined;

/**
 * The state of the low priority message congestion in the Topic Endpoint. The allowed values and their meaning are:  <pre> \"disabled\" - Messages are not being checked for priority. \"not-congested\" - Low priority messages are being stored and delivered. \"congested\" - Low priority messages are being discarded. </pre> 
 * @member {String} lowPriorityMsgCongestionState
 */
MsgVpnTopicEndpointModel.prototype.lowPriorityMsgCongestionState = undefined;

/**
 * The lowest identifier (ID) of guaranteed messages in the Topic Endpoint that were acknowledged.
 * @member {Number} lowestAckedMsgId
 */
MsgVpnTopicEndpointModel.prototype.lowestAckedMsgId = undefined;

/**
 * The lowest identifier (ID) of guaranteed messages in the Topic Endpoint.
 * @member {Number} lowestMsgId
 */
MsgVpnTopicEndpointModel.prototype.lowestMsgId = undefined;

/**
 * The maximum number of consumer flows that can bind to the Topic Endpoint.
 * @member {Number} maxBindCount
 */
MsgVpnTopicEndpointModel.prototype.maxBindCount = undefined;

/**
 * The number of Topic Endpoint bind failures due to the maximum bind count being exceeded.
 * @member {Number} maxBindCountExceededBindFailureCount
 */
MsgVpnTopicEndpointModel.prototype.maxBindCountExceededBindFailureCount = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow for the Topic Endpoint.
 * @member {Number} maxDeliveredUnackedMsgsPerFlow
 */
MsgVpnTopicEndpointModel.prototype.maxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The effective maximum number of consumer flows that can bind to the Topic Endpoint.
 * @member {Number} maxEffectiveBindCount
 */
MsgVpnTopicEndpointModel.prototype.maxEffectiveBindCount = undefined;

/**
 * The maximum message size allowed in the Topic Endpoint, in bytes (B).
 * @member {Number} maxMsgSize
 */
MsgVpnTopicEndpointModel.prototype.maxMsgSize = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum message size being exceeded.
 * @member {Number} maxMsgSizeExceededDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxMsgSizeExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum message spool usage being exceeded.
 * @member {Number} maxMsgSpoolUsageExceededDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxMsgSpoolUsageExceededDiscardedMsgCount = undefined;

/**
 * The maximum number of times the Topic Endpoint will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever.
 * @member {Number} maxRedeliveryCount
 */
MsgVpnTopicEndpointModel.prototype.maxRedeliveryCount = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum redelivery attempts being exceeded.
 * @member {Number} maxRedeliveryExceededDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxRedeliveryExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum redelivery attempts being exceeded and failing to move to the Dead Message Queue (DMQ).
 * @member {Number} maxRedeliveryExceededToDmqFailedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxRedeliveryExceededToDmqFailedMsgCount = undefined;

/**
 * The number of guaranteed messages moved to the Dead Message Queue (DMQ) by the Topic Endpoint due to the maximum redelivery attempts being exceeded.
 * @member {Number} maxRedeliveryExceededToDmqMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxRedeliveryExceededToDmqMsgCount = undefined;

/**
 * The maximum message spool usage allowed by the Topic Endpoint, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking.
 * @member {Number} maxSpoolUsage
 */
MsgVpnTopicEndpointModel.prototype.maxSpoolUsage = undefined;

/**
 * The maximum time in seconds a message can stay in the Topic Endpoint when `respectTtlEnabled` is `\"true\"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `maxTtl` configured for the Topic Endpoint, is exceeded. A value of 0 disables expiry.
 * @member {Number} maxTtl
 */
MsgVpnTopicEndpointModel.prototype.maxTtl = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum time-to-live (TTL) in hops being exceeded. The TTL hop count is incremented when the message crosses a bridge.
 * @member {Number} maxTtlExceededDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxTtlExceededDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum time-to-live (TTL) timestamp expiring.
 * @member {Number} maxTtlExpiredDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxTtlExpiredDiscardedMsgCount = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to the maximum time-to-live (TTL) timestamp expiring and failing to move to the Dead Message Queue (DMQ).
 * @member {Number} maxTtlExpiredToDmqFailedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxTtlExpiredToDmqFailedMsgCount = undefined;

/**
 * The number of guaranteed messages moved to the Dead Message Queue (DMQ) by the Topic Endpoint due to the maximum time-to-live (TTL) timestamp expiring.
 * @member {Number} maxTtlExpiredToDmqMsgCount
 */
MsgVpnTopicEndpointModel.prototype.maxTtlExpiredToDmqMsgCount = undefined;

/**
 * The message spool peak usage by the Topic Endpoint, in bytes (B).
 * @member {Number} msgSpoolPeakUsage
 */
MsgVpnTopicEndpointModel.prototype.msgSpoolPeakUsage = undefined;

/**
 * The message spool usage by the Topic Endpoint, in bytes (B).
 * @member {Number} msgSpoolUsage
 */
MsgVpnTopicEndpointModel.prototype.msgSpoolUsage = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTopicEndpointModel.prototype.msgVpnName = undefined;

/**
 * The name of the network topic for the Topic Endpoint.
 * @member {String} networkTopic
 */
MsgVpnTopicEndpointModel.prototype.networkTopic = undefined;

/**
 * The number of guaranteed messages discarded by the Topic Endpoint due to no local delivery being requested.
 * @member {Number} noLocalDeliveryDiscardedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.noLocalDeliveryDiscardedMsgCount = undefined;

/**
 * The number of Topic Endpoint bind failures due to other reasons.
 * @member {Number} otherBindFailureCount
 */
MsgVpnTopicEndpointModel.prototype.otherBindFailureCount = undefined;

/**
 * The Client Username that owns the Topic Endpoint and has permission equivalent to `\"delete\"`.
 * @member {String} owner
 */
MsgVpnTopicEndpointModel.prototype.owner = undefined;

/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTopicEndpointModel.PermissionEnum = {
  /**
   * value: "no-access"
   * @const
   */
  noAccess: "no-access",

  /**
   * value: "read-only"
   * @const
   */
  readOnly: "read-only",

  /**
   * value: "consume"
   * @const
   */
  consume: "consume",

  /**
   * value: "modify-topic"
   * @const
   */
  modifyTopic: "modify-topic",

  /**
   * value: "delete"
   * @const
   */
  _delete: "delete"
};
/**
 * The permission level for all consumers of the Topic Endpoint, excluding the owner. The allowed values and their meaning are:  <pre> \"no-access\" - Disallows all access. \"read-only\" - Read-only access to the messages. \"consume\" - Consume (read and remove) messages. \"modify-topic\" - Consume messages or modify the topic/selector. \"delete\" - Consume messages, modify the topic/selector or delete the Client created endpoint altogether. </pre> 
 * @member {module:model/MsgVpnTopicEndpointModel.PermissionEnum} permission
 */
MsgVpnTopicEndpointModel.prototype.permission = undefined;

/**
 * The number of guaranteed messages transmitted by the Topic Endpoint for redelivery.
 * @member {Number} redeliveredMsgCount
 */
MsgVpnTopicEndpointModel.prototype.redeliveredMsgCount = undefined;

/**
 * Enable or disable a message redelivery delay. When false, messages are redelivered as-soon-as-possible.  When true, messages are redelivered according to the initial, max and multiplier.  This should only be enabled when redelivery is enabled. Available since 2.33.
 * @member {Boolean} redeliveryDelayEnabled
 */
MsgVpnTopicEndpointModel.prototype.redeliveryDelayEnabled = undefined;

/**
 * The delay to be used between the first 2 redelivery attempts.  This value is in milliseconds. Available since 2.33.
 * @member {Number} redeliveryDelayInitialInterval
 */
MsgVpnTopicEndpointModel.prototype.redeliveryDelayInitialInterval = undefined;

/**
 * The maximum delay to be used between any 2 redelivery attempts.  This value is in milliseconds.  Due to technical limitations, some redelivery attempt delays may slightly exceed this value. Available since 2.33.
 * @member {Number} redeliveryDelayMaxInterval
 */
MsgVpnTopicEndpointModel.prototype.redeliveryDelayMaxInterval = undefined;

/**
 * The amount each delay interval is multiplied by after each failed delivery attempt.  This number is in a fixed-point decimal format in which you must divide by 100 to get the floating point value. For example, a value of 125 would cause the delay to be multiplied by 1.25. Available since 2.33.
 * @member {Number} redeliveryDelayMultiplier
 */
MsgVpnTopicEndpointModel.prototype.redeliveryDelayMultiplier = undefined;

/**
 * Enable or disable message redelivery. When enabled, the number of redelivery attempts is controlled by maxRedeliveryCount. When disabled, the message will never be delivered from the topic-endpoint more than once. Available since 2.18.
 * @member {Boolean} redeliveryEnabled
 */
MsgVpnTopicEndpointModel.prototype.redeliveryEnabled = undefined;

/**
 * Indicates whether the checking of low priority messages against the `rejectLowPriorityMsgLimit` is enabled.
 * @member {Boolean} rejectLowPriorityMsgEnabled
 */
MsgVpnTopicEndpointModel.prototype.rejectLowPriorityMsgEnabled = undefined;

/**
 * The number of messages of any priority in the Topic Endpoint above which low priority messages are not admitted but higher priority messages are allowed.
 * @member {Number} rejectLowPriorityMsgLimit
 */
MsgVpnTopicEndpointModel.prototype.rejectLowPriorityMsgLimit = undefined;

/**
 * Allowed values for the <code>rejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTopicEndpointModel.RejectMsgToSenderOnDiscardBehaviorEnum = {
  /**
   * value: "never"
   * @const
   */
  never: "never",

  /**
   * value: "when-topic-endpoint-enabled"
   * @const
   */
  whenTopicEndpointEnabled: "when-topic-endpoint-enabled",

  /**
   * value: "always"
   * @const
   */
  always: "always"
};
/**
 * Determines when to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. The allowed values and their meaning are:  <pre> \"never\" - Silently discard messages. \"when-topic-endpoint-enabled\" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled. \"always\" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled. </pre> 
 * @member {module:model/MsgVpnTopicEndpointModel.RejectMsgToSenderOnDiscardBehaviorEnum} rejectMsgToSenderOnDiscardBehavior
 */
MsgVpnTopicEndpointModel.prototype.rejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * The number of replays that failed for the Topic Endpoint.
 * @member {Number} replayFailureCount
 */
MsgVpnTopicEndpointModel.prototype.replayFailureCount = undefined;

/**
 * The number of replays started for the Topic Endpoint.
 * @member {Number} replayStartCount
 */
MsgVpnTopicEndpointModel.prototype.replayStartCount = undefined;

/**
 * The state of replay for the Topic Endpoint. The allowed values and their meaning are:  <pre> \"initializing\" - All messages are being deleted from the endpoint before replay starts. \"active\" - Subscription matching logged messages are being replayed to the endpoint. \"pending-complete\" - Replay is complete, but final accounting is in progress. \"complete\" - Replay and all related activities are complete. \"failed\" - Replay has failed and is waiting for an unbind response. </pre> 
 * @member {String} replayState
 */
MsgVpnTopicEndpointModel.prototype.replayState = undefined;

/**
 * The number of replays that succeeded for the Topic Endpoint.
 * @member {Number} replaySuccessCount
 */
MsgVpnTopicEndpointModel.prototype.replaySuccessCount = undefined;

/**
 * The number of replayed messages transmitted by the Topic Endpoint and acked by all consumers.
 * @member {Number} replayedAckedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.replayedAckedMsgCount = undefined;

/**
 * The number of replayed messages transmitted by the Topic Endpoint.
 * @member {Number} replayedTxMsgCount
 */
MsgVpnTopicEndpointModel.prototype.replayedTxMsgCount = undefined;

/**
 * The number of acknowledgment messages propagated by the Topic Endpoint to the replication standby remote Message VPN.
 * @member {Number} replicationActiveAckPropTxMsgCount
 */
MsgVpnTopicEndpointModel.prototype.replicationActiveAckPropTxMsgCount = undefined;

/**
 * The number of propagated acknowledgment messages received by the Topic Endpoint from the replication active remote Message VPN.
 * @member {Number} replicationStandbyAckPropRxMsgCount
 */
MsgVpnTopicEndpointModel.prototype.replicationStandbyAckPropRxMsgCount = undefined;

/**
 * The number of messages acknowledged in the Topic Endpoint by acknowledgment propagation from the replication active remote Message VPN.
 * @member {Number} replicationStandbyAckedByAckPropMsgCount
 */
MsgVpnTopicEndpointModel.prototype.replicationStandbyAckedByAckPropMsgCount = undefined;

/**
 * The number of messages received by the Topic Endpoint from the replication active remote Message VPN.
 * @member {Number} replicationStandbyRxMsgCount
 */
MsgVpnTopicEndpointModel.prototype.replicationStandbyRxMsgCount = undefined;

/**
 * Indicates whether message priorities are respected. When enabled, messages contained in the Topic Endpoint are delivered in priority order, from 9 (highest) to 0 (lowest).
 * @member {Boolean} respectMsgPriorityEnabled
 */
MsgVpnTopicEndpointModel.prototype.respectMsgPriorityEnabled = undefined;

/**
 * Indicates whether the time-to-live (TTL) for messages in the Topic Endpoint is respected. When enabled, expired messages are discarded or moved to the DMQ.
 * @member {Boolean} respectTtlEnabled
 */
MsgVpnTopicEndpointModel.prototype.respectTtlEnabled = undefined;

/**
 * The current message rate received by the Topic Endpoint, in bytes per second (B/sec).
 * @member {Number} rxByteRate
 */
MsgVpnTopicEndpointModel.prototype.rxByteRate = undefined;

/**
 * The current message rate received by the Topic Endpoint, in messages per second (msg/sec).
 * @member {Number} rxMsgRate
 */
MsgVpnTopicEndpointModel.prototype.rxMsgRate = undefined;

/**
 * Indicates whether the Topic Endpoint has a selector to filter received messages.
 * @member {Boolean} rxSelector
 */
MsgVpnTopicEndpointModel.prototype.rxSelector = undefined;

/**
 * The value of the receive selector for the Topic Endpoint.
 * @member {String} selector
 */
MsgVpnTopicEndpointModel.prototype.selector = undefined;

/**
 * The number of guaranteed messages examined by the Topic Endpoint selector.
 * @member {Number} selectorExaminedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.selectorExaminedMsgCount = undefined;

/**
 * The number of guaranteed messages for which the Topic Endpoint selector matched.
 * @member {Number} selectorMatchedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.selectorMatchedMsgCount = undefined;

/**
 * The number of guaranteed messages for which the Topic Endpoint selector did not match.
 * @member {Number} selectorNotMatchedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.selectorNotMatchedMsgCount = undefined;

/**
 * The amount of guaranteed messages that were spooled in the Topic Endpoint, in bytes (B).
 * @member {Number} spooledByteCount
 */
MsgVpnTopicEndpointModel.prototype.spooledByteCount = undefined;

/**
 * The number of guaranteed messages that were spooled in the Topic Endpoint.
 * @member {Number} spooledMsgCount
 */
MsgVpnTopicEndpointModel.prototype.spooledMsgCount = undefined;

/**
 * The name of the Topic Endpoint.
 * @member {String} topicEndpointName
 */
MsgVpnTopicEndpointModel.prototype.topicEndpointName = undefined;

/**
 * The number of guaranteed messages that were retransmitted by the Topic Endpoint at the transport layer as part of a single delivery attempt. Available since 2.18.
 * @member {Number} transportRetransmitMsgCount
 */
MsgVpnTopicEndpointModel.prototype.transportRetransmitMsgCount = undefined;

/**
 * The current message rate transmitted by the Topic Endpoint, in bytes per second (B/sec).
 * @member {Number} txByteRate
 */
MsgVpnTopicEndpointModel.prototype.txByteRate = undefined;

/**
 * The current message rate transmitted by the Topic Endpoint, in messages per second (msg/sec).
 * @member {Number} txMsgRate
 */
MsgVpnTopicEndpointModel.prototype.txMsgRate = undefined;

/**
 * The number of guaranteed messages in the Topic Endpoint that have been transmitted but not acknowledged by all consumers.
 * @member {Number} txUnackedMsgCount
 */
MsgVpnTopicEndpointModel.prototype.txUnackedMsgCount = undefined;

/**
 * The virtual router used by the Topic Endpoint. The allowed values and their meaning are:  <pre> \"primary\" - The endpoint belongs to the primary virtual router. \"backup\" - The endpoint belongs to the backup virtual router. </pre>  Deprecated since 2.31. This attribute has been deprecated. When Guaranteed Messaging is active, this value is always the virtual router for which Guaranteed Messaging is enabled. Otherwise, this value should be ignored.
 * @member {String} virtualRouter
 */
MsgVpnTopicEndpointModel.prototype.virtualRouter = undefined;

