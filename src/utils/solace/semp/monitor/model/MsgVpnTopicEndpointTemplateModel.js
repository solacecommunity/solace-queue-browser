import {ApiClient} from '../ApiClient';
import {EventThresholdModel} from './EventThresholdModel';

/**
 * The MsgVpnTopicEndpointTemplateModel model module.
 * @module model/MsgVpnTopicEndpointTemplateModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTemplateModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTemplateModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTemplateModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTemplateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTemplateModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTemplateModel} The populated <code>MsgVpnTopicEndpointTemplateModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTemplateModel();
      if (data.hasOwnProperty('accessType'))
        obj.accessType = ApiClient.convertToType(data['accessType'], 'String');
      if (data.hasOwnProperty('consumerAckPropagationEnabled'))
        obj.consumerAckPropagationEnabled = ApiClient.convertToType(data['consumerAckPropagationEnabled'], 'Boolean');
      if (data.hasOwnProperty('deadMsgQueue'))
        obj.deadMsgQueue = ApiClient.convertToType(data['deadMsgQueue'], 'String');
      if (data.hasOwnProperty('deliveryDelay'))
        obj.deliveryDelay = ApiClient.convertToType(data['deliveryDelay'], 'Number');
      if (data.hasOwnProperty('eventBindCountThreshold'))
        obj.eventBindCountThreshold = EventThresholdModel.constructFromObject(data['eventBindCountThreshold']);
      if (data.hasOwnProperty('eventMsgSpoolUsageThreshold'))
        obj.eventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['eventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('eventRejectLowPriorityMsgLimitThreshold'))
        obj.eventRejectLowPriorityMsgLimitThreshold = EventThresholdModel.constructFromObject(data['eventRejectLowPriorityMsgLimitThreshold']);
      if (data.hasOwnProperty('maxBindCount'))
        obj.maxBindCount = ApiClient.convertToType(data['maxBindCount'], 'Number');
      if (data.hasOwnProperty('maxDeliveredUnackedMsgsPerFlow'))
        obj.maxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['maxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('maxMsgSize'))
        obj.maxMsgSize = ApiClient.convertToType(data['maxMsgSize'], 'Number');
      if (data.hasOwnProperty('maxMsgSpoolUsage'))
        obj.maxMsgSpoolUsage = ApiClient.convertToType(data['maxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('maxRedeliveryCount'))
        obj.maxRedeliveryCount = ApiClient.convertToType(data['maxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('maxTtl'))
        obj.maxTtl = ApiClient.convertToType(data['maxTtl'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('permission'))
        obj.permission = ApiClient.convertToType(data['permission'], 'String');
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
      if (data.hasOwnProperty('respectMsgPriorityEnabled'))
        obj.respectMsgPriorityEnabled = ApiClient.convertToType(data['respectMsgPriorityEnabled'], 'Boolean');
      if (data.hasOwnProperty('respectTtlEnabled'))
        obj.respectTtlEnabled = ApiClient.convertToType(data['respectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('topicEndpointNameFilter'))
        obj.topicEndpointNameFilter = ApiClient.convertToType(data['topicEndpointNameFilter'], 'String');
      if (data.hasOwnProperty('topicEndpointTemplateName'))
        obj.topicEndpointTemplateName = ApiClient.convertToType(data['topicEndpointTemplateName'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>accessType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTopicEndpointTemplateModel.AccessTypeEnum = {
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
 * The access type for delivering messages to consumer flows. The allowed values and their meaning are:  <pre> \"exclusive\" - Exclusive delivery of messages to the first bound consumer flow. \"non-exclusive\" - Non-exclusive delivery of messages to bound consumer flows in a round-robin (if partition count is zero) or partitioned (if partition count is non-zero) fashion. </pre> 
 * @member {module:model/MsgVpnTopicEndpointTemplateModel.AccessTypeEnum} accessType
 */
MsgVpnTopicEndpointTemplateModel.prototype.accessType = undefined;

/**
 * Indicates whether the propagation of consumer acknowledgments (ACKs) received on the active replication Message VPN to the standby replication Message VPN is enabled.
 * @member {Boolean} consumerAckPropagationEnabled
 */
MsgVpnTopicEndpointTemplateModel.prototype.consumerAckPropagationEnabled = undefined;

/**
 * The name of the Dead Message Queue (DMQ).
 * @member {String} deadMsgQueue
 */
MsgVpnTopicEndpointTemplateModel.prototype.deadMsgQueue = undefined;

/**
 * The delay, in seconds, to apply to messages arriving on the Topic Endpoint before the messages are eligible for delivery. Available since 2.22.
 * @member {Number} deliveryDelay
 */
MsgVpnTopicEndpointTemplateModel.prototype.deliveryDelay = undefined;

/**
 * @member {module:model/EventThresholdModel} eventBindCountThreshold
 */
MsgVpnTopicEndpointTemplateModel.prototype.eventBindCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventMsgSpoolUsageThreshold
 */
MsgVpnTopicEndpointTemplateModel.prototype.eventMsgSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} eventRejectLowPriorityMsgLimitThreshold
 */
MsgVpnTopicEndpointTemplateModel.prototype.eventRejectLowPriorityMsgLimitThreshold = undefined;

/**
 * The maximum number of consumer flows that can bind.
 * @member {Number} maxBindCount
 */
MsgVpnTopicEndpointTemplateModel.prototype.maxBindCount = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow.
 * @member {Number} maxDeliveredUnackedMsgsPerFlow
 */
MsgVpnTopicEndpointTemplateModel.prototype.maxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The maximum message size allowed, in bytes (B).
 * @member {Number} maxMsgSize
 */
MsgVpnTopicEndpointTemplateModel.prototype.maxMsgSize = undefined;

/**
 * The maximum message spool usage allowed, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking.
 * @member {Number} maxMsgSpoolUsage
 */
MsgVpnTopicEndpointTemplateModel.prototype.maxMsgSpoolUsage = undefined;

/**
 * The maximum number of message redelivery attempts that will occur prior to the message being discarded or moved to the DMQ. A value of 0 means to retry forever.
 * @member {Number} maxRedeliveryCount
 */
MsgVpnTopicEndpointTemplateModel.prototype.maxRedeliveryCount = undefined;

/**
 * The maximum time in seconds a message can stay in the Topic Endpoint when `respectTtlEnabled` is `\"true\"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `maxTtl` configured for the Topic Endpoint, is exceeded. A value of 0 disables expiry.
 * @member {Number} maxTtl
 */
MsgVpnTopicEndpointTemplateModel.prototype.maxTtl = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTopicEndpointTemplateModel.prototype.msgVpnName = undefined;

/**
 * Allowed values for the <code>permission</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTopicEndpointTemplateModel.PermissionEnum = {
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
 * The permission level for all consumers, excluding the owner. The allowed values and their meaning are:  <pre> \"no-access\" - Disallows all access. \"read-only\" - Read-only access to the messages. \"consume\" - Consume (read and remove) messages. \"modify-topic\" - Consume messages or modify the topic/selector. \"delete\" - Consume messages, modify the topic/selector or delete the Client created endpoint altogether. </pre> 
 * @member {module:model/MsgVpnTopicEndpointTemplateModel.PermissionEnum} permission
 */
MsgVpnTopicEndpointTemplateModel.prototype.permission = undefined;

/**
 * Enable or disable a message redelivery delay. When false, messages are redelivered as-soon-as-possible.  When true, messages are redelivered according to the initial, max and multiplier.  This should only be enabled when redelivery is enabled. Available since 2.33.
 * @member {Boolean} redeliveryDelayEnabled
 */
MsgVpnTopicEndpointTemplateModel.prototype.redeliveryDelayEnabled = undefined;

/**
 * The delay to be used between the first 2 redelivery attempts.  This value is in milliseconds. Available since 2.33.
 * @member {Number} redeliveryDelayInitialInterval
 */
MsgVpnTopicEndpointTemplateModel.prototype.redeliveryDelayInitialInterval = undefined;

/**
 * The maximum delay to be used between any 2 redelivery attempts.  This value is in milliseconds.  Due to technical limitations, some redelivery attempt delays may slightly exceed this value. Available since 2.33.
 * @member {Number} redeliveryDelayMaxInterval
 */
MsgVpnTopicEndpointTemplateModel.prototype.redeliveryDelayMaxInterval = undefined;

/**
 * The amount each delay interval is multiplied by after each failed delivery attempt.  This number is in a fixed-point decimal format in which you must divide by 100 to get the floating point value. For example, a value of 125 would cause the delay to be multiplied by 1.25. Available since 2.33.
 * @member {Number} redeliveryDelayMultiplier
 */
MsgVpnTopicEndpointTemplateModel.prototype.redeliveryDelayMultiplier = undefined;

/**
 * Enable or disable message redelivery. When enabled, the number of redelivery attempts is controlled by maxRedeliveryCount. When disabled, the message will never be delivered from the topic-endpoint more than once. Available since 2.18.
 * @member {Boolean} redeliveryEnabled
 */
MsgVpnTopicEndpointTemplateModel.prototype.redeliveryEnabled = undefined;

/**
 * Indicates whether the checking of low priority messages against the `rejectLowPriorityMsgLimit` is enabled.
 * @member {Boolean} rejectLowPriorityMsgEnabled
 */
MsgVpnTopicEndpointTemplateModel.prototype.rejectLowPriorityMsgEnabled = undefined;

/**
 * The number of messages that are permitted before low priority messages are rejected.
 * @member {Number} rejectLowPriorityMsgLimit
 */
MsgVpnTopicEndpointTemplateModel.prototype.rejectLowPriorityMsgLimit = undefined;

/**
 * Allowed values for the <code>rejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnTopicEndpointTemplateModel.RejectMsgToSenderOnDiscardBehaviorEnum = {
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
 * @member {module:model/MsgVpnTopicEndpointTemplateModel.RejectMsgToSenderOnDiscardBehaviorEnum} rejectMsgToSenderOnDiscardBehavior
 */
MsgVpnTopicEndpointTemplateModel.prototype.rejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * Indicates whether message priorities are respected. When enabled, messages are delivered in priority order, from 9 (highest) to 0 (lowest).
 * @member {Boolean} respectMsgPriorityEnabled
 */
MsgVpnTopicEndpointTemplateModel.prototype.respectMsgPriorityEnabled = undefined;

/**
 * Indicates whether the time-to-live (TTL) for messages is respected. When enabled, expired messages are discarded or moved to the DMQ.
 * @member {Boolean} respectTtlEnabled
 */
MsgVpnTopicEndpointTemplateModel.prototype.respectTtlEnabled = undefined;

/**
 * A pattern used to determine which Topic Endpoints use settings from this Template. Two different wildcards can be used in the pattern: * and >. Similar to topic filters or subscription patterns, a > matches anything (but only when used at the end), and a * matches zero or more characters but never a slash (/). A > is only a wildcard when  used at the end, after a /. A * is only allowed at the end, after a slash (/).
 * @member {String} topicEndpointNameFilter
 */
MsgVpnTopicEndpointTemplateModel.prototype.topicEndpointNameFilter = undefined;

/**
 * The name of the Topic Endpoint Template.
 * @member {String} topicEndpointTemplateName
 */
MsgVpnTopicEndpointTemplateModel.prototype.topicEndpointTemplateName = undefined;

