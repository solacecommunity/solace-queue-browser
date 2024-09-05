import {ApiClient} from '../ApiClient';
import {EventThresholdModel} from './EventThresholdModel';
import {MsgVpnMqttSessionCounterModel} from './MsgVpnMqttSessionCounterModel';

/**
 * The MsgVpnMqttSessionModel model module.
 * @module model/MsgVpnMqttSessionModel
 * @version 2.36
 */
export class MsgVpnMqttSessionModel {
  /**
   * Constructs a new <code>MsgVpnMqttSessionModel</code>.
   * @alias module:model/MsgVpnMqttSessionModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnMqttSessionModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnMqttSessionModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnMqttSessionModel} The populated <code>MsgVpnMqttSessionModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnMqttSessionModel();
      if (data.hasOwnProperty('clean'))
        obj.clean = ApiClient.convertToType(data['clean'], 'Boolean');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('counter'))
        obj.counter = MsgVpnMqttSessionCounterModel.constructFromObject(data['counter']);
      if (data.hasOwnProperty('createdByManagement'))
        obj.createdByManagement = ApiClient.convertToType(data['createdByManagement'], 'Boolean');
      if (data.hasOwnProperty('durable'))
        obj.durable = ApiClient.convertToType(data['durable'], 'Boolean');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('expiryTime'))
        obj.expiryTime = ApiClient.convertToType(data['expiryTime'], 'Number');
      if (data.hasOwnProperty('maxPacketSize'))
        obj.maxPacketSize = ApiClient.convertToType(data['maxPacketSize'], 'Number');
      if (data.hasOwnProperty('mqttConnackErrorTxCount'))
        obj.mqttConnackErrorTxCount = ApiClient.convertToType(data['mqttConnackErrorTxCount'], 'Number');
      if (data.hasOwnProperty('mqttConnackTxCount'))
        obj.mqttConnackTxCount = ApiClient.convertToType(data['mqttConnackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttConnectRxCount'))
        obj.mqttConnectRxCount = ApiClient.convertToType(data['mqttConnectRxCount'], 'Number');
      if (data.hasOwnProperty('mqttDisconnectRxCount'))
        obj.mqttDisconnectRxCount = ApiClient.convertToType(data['mqttDisconnectRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPingreqRxCount'))
        obj.mqttPingreqRxCount = ApiClient.convertToType(data['mqttPingreqRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPingrespTxCount'))
        obj.mqttPingrespTxCount = ApiClient.convertToType(data['mqttPingrespTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubackRxCount'))
        obj.mqttPubackRxCount = ApiClient.convertToType(data['mqttPubackRxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubackTxCount'))
        obj.mqttPubackTxCount = ApiClient.convertToType(data['mqttPubackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubcompTxCount'))
        obj.mqttPubcompTxCount = ApiClient.convertToType(data['mqttPubcompTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos0RxCount'))
        obj.mqttPublishQos0RxCount = ApiClient.convertToType(data['mqttPublishQos0RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos0TxCount'))
        obj.mqttPublishQos0TxCount = ApiClient.convertToType(data['mqttPublishQos0TxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos1RxCount'))
        obj.mqttPublishQos1RxCount = ApiClient.convertToType(data['mqttPublishQos1RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos1TxCount'))
        obj.mqttPublishQos1TxCount = ApiClient.convertToType(data['mqttPublishQos1TxCount'], 'Number');
      if (data.hasOwnProperty('mqttPublishQos2RxCount'))
        obj.mqttPublishQos2RxCount = ApiClient.convertToType(data['mqttPublishQos2RxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubrecTxCount'))
        obj.mqttPubrecTxCount = ApiClient.convertToType(data['mqttPubrecTxCount'], 'Number');
      if (data.hasOwnProperty('mqttPubrelRxCount'))
        obj.mqttPubrelRxCount = ApiClient.convertToType(data['mqttPubrelRxCount'], 'Number');
      if (data.hasOwnProperty('mqttSessionClientId'))
        obj.mqttSessionClientId = ApiClient.convertToType(data['mqttSessionClientId'], 'String');
      if (data.hasOwnProperty('mqttSessionVirtualRouter'))
        obj.mqttSessionVirtualRouter = ApiClient.convertToType(data['mqttSessionVirtualRouter'], 'String');
      if (data.hasOwnProperty('mqttSubackErrorTxCount'))
        obj.mqttSubackErrorTxCount = ApiClient.convertToType(data['mqttSubackErrorTxCount'], 'Number');
      if (data.hasOwnProperty('mqttSubackTxCount'))
        obj.mqttSubackTxCount = ApiClient.convertToType(data['mqttSubackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttSubscribeRxCount'))
        obj.mqttSubscribeRxCount = ApiClient.convertToType(data['mqttSubscribeRxCount'], 'Number');
      if (data.hasOwnProperty('mqttUnsubackTxCount'))
        obj.mqttUnsubackTxCount = ApiClient.convertToType(data['mqttUnsubackTxCount'], 'Number');
      if (data.hasOwnProperty('mqttUnsubscribeRxCount'))
        obj.mqttUnsubscribeRxCount = ApiClient.convertToType(data['mqttUnsubscribeRxCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('owner'))
        obj.owner = ApiClient.convertToType(data['owner'], 'String');
      if (data.hasOwnProperty('queueConsumerAckPropagationEnabled'))
        obj.queueConsumerAckPropagationEnabled = ApiClient.convertToType(data['queueConsumerAckPropagationEnabled'], 'Boolean');
      if (data.hasOwnProperty('queueDeadMsgQueue'))
        obj.queueDeadMsgQueue = ApiClient.convertToType(data['queueDeadMsgQueue'], 'String');
      if (data.hasOwnProperty('queueEventBindCountThreshold'))
        obj.queueEventBindCountThreshold = EventThresholdModel.constructFromObject(data['queueEventBindCountThreshold']);
      if (data.hasOwnProperty('queueEventMsgSpoolUsageThreshold'))
        obj.queueEventMsgSpoolUsageThreshold = EventThresholdModel.constructFromObject(data['queueEventMsgSpoolUsageThreshold']);
      if (data.hasOwnProperty('queueEventRejectLowPriorityMsgLimitThreshold'))
        obj.queueEventRejectLowPriorityMsgLimitThreshold = EventThresholdModel.constructFromObject(data['queueEventRejectLowPriorityMsgLimitThreshold']);
      if (data.hasOwnProperty('queueMaxBindCount'))
        obj.queueMaxBindCount = ApiClient.convertToType(data['queueMaxBindCount'], 'Number');
      if (data.hasOwnProperty('queueMaxDeliveredUnackedMsgsPerFlow'))
        obj.queueMaxDeliveredUnackedMsgsPerFlow = ApiClient.convertToType(data['queueMaxDeliveredUnackedMsgsPerFlow'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSize'))
        obj.queueMaxMsgSize = ApiClient.convertToType(data['queueMaxMsgSize'], 'Number');
      if (data.hasOwnProperty('queueMaxMsgSpoolUsage'))
        obj.queueMaxMsgSpoolUsage = ApiClient.convertToType(data['queueMaxMsgSpoolUsage'], 'Number');
      if (data.hasOwnProperty('queueMaxRedeliveryCount'))
        obj.queueMaxRedeliveryCount = ApiClient.convertToType(data['queueMaxRedeliveryCount'], 'Number');
      if (data.hasOwnProperty('queueMaxTtl'))
        obj.queueMaxTtl = ApiClient.convertToType(data['queueMaxTtl'], 'Number');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('queueRejectLowPriorityMsgEnabled'))
        obj.queueRejectLowPriorityMsgEnabled = ApiClient.convertToType(data['queueRejectLowPriorityMsgEnabled'], 'Boolean');
      if (data.hasOwnProperty('queueRejectLowPriorityMsgLimit'))
        obj.queueRejectLowPriorityMsgLimit = ApiClient.convertToType(data['queueRejectLowPriorityMsgLimit'], 'Number');
      if (data.hasOwnProperty('queueRejectMsgToSenderOnDiscardBehavior'))
        obj.queueRejectMsgToSenderOnDiscardBehavior = ApiClient.convertToType(data['queueRejectMsgToSenderOnDiscardBehavior'], 'String');
      if (data.hasOwnProperty('queueRespectTtlEnabled'))
        obj.queueRespectTtlEnabled = ApiClient.convertToType(data['queueRespectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('rxMax'))
        obj.rxMax = ApiClient.convertToType(data['rxMax'], 'Number');
      if (data.hasOwnProperty('will'))
        obj.will = ApiClient.convertToType(data['will'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether the Client requested a clean (newly created) MQTT Session when connecting. If not clean (already existing), then previously stored messages for QoS 1 subscriptions are delivered.
 * @member {Boolean} clean
 */
MsgVpnMqttSessionModel.prototype.clean = undefined;

/**
 * The name of the MQTT Session Client.
 * @member {String} clientName
 */
MsgVpnMqttSessionModel.prototype.clientName = undefined;

/**
 * @member {module:model/MsgVpnMqttSessionCounterModel} counter
 */
MsgVpnMqttSessionModel.prototype.counter = undefined;

/**
 * Indicates whether the MQTT Session was created by a Management API.
 * @member {Boolean} createdByManagement
 */
MsgVpnMqttSessionModel.prototype.createdByManagement = undefined;

/**
 * Indicates whether the MQTT Session is durable. Disconnected durable MQTT Sessions are deleted when their expiry time is reached. Disconnected non-durable MQTT Sessions are deleted immediately. Available since 2.21.
 * @member {Boolean} durable
 */
MsgVpnMqttSessionModel.prototype.durable = undefined;

/**
 * Indicates whether the MQTT Session is enabled.
 * @member {Boolean} enabled
 */
MsgVpnMqttSessionModel.prototype.enabled = undefined;

/**
 * The timestamp of when the disconnected MQTT session expires and is deleted. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time). A value of 0 indicates that the session is either connected, or will never expire. Available since 2.21.
 * @member {Number} expiryTime
 */
MsgVpnMqttSessionModel.prototype.expiryTime = undefined;

/**
 * The maximum size of a packet, including all headers and payload, that the Client has signaled it is willing to accept. A value of zero indicates no limit. Note that there are other broker settings which may further limit packet size. Available since 2.21.
 * @member {Number} maxPacketSize
 */
MsgVpnMqttSessionModel.prototype.maxPacketSize = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) refused response packets transmitted to the Client. Available since 2.13.
 * @member {Number} mqttConnackErrorTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttConnackErrorTxCount = undefined;

/**
 * The number of MQTT connect acknowledgment (CONNACK) accepted response packets transmitted to the Client. Available since 2.13.
 * @member {Number} mqttConnackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttConnackTxCount = undefined;

/**
 * The number of MQTT connect (CONNECT) request packets received from the Client. Available since 2.13.
 * @member {Number} mqttConnectRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttConnectRxCount = undefined;

/**
 * The number of MQTT disconnect (DISCONNECT) request packets received from the Client. Available since 2.13.
 * @member {Number} mqttDisconnectRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttDisconnectRxCount = undefined;

/**
 * The number of MQTT ping request (PINGREQ) packets received from the Client. Available since 2.23.
 * @member {Number} mqttPingreqRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPingreqRxCount = undefined;

/**
 * The number of MQTT ping response (PINGRESP) packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttPingrespTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPingrespTxCount = undefined;

/**
 * The number of MQTT publish acknowledgment (PUBACK) response packets received from the Client. Available since 2.23.
 * @member {Number} mqttPubackRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubackRxCount = undefined;

/**
 * The number of MQTT publish acknowledgment (PUBACK) response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttPubackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubackTxCount = undefined;

/**
 * The number of MQTT publish complete (PUBCOMP) packets transmitted to the Client in response to a PUBREL packet. These packets are the fourth and final packet of a QoS 2 protocol exchange. Available since 2.13.
 * @member {Number} mqttPubcompTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubcompTxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 0 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos0RxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos0RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 0 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos0TxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos0TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 1 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos1RxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos1RxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets transmitted to the Client for QoS 1 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos1TxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos1TxCount = undefined;

/**
 * The number of MQTT publish message (PUBLISH) request packets received from the Client for QoS 2 message delivery. Available since 2.13.
 * @member {Number} mqttPublishQos2RxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPublishQos2RxCount = undefined;

/**
 * The number of MQTT publish received (PUBREC) packets transmitted to the Client in response to a PUBLISH packet with QoS 2. These packets are the second packet of a QoS 2 protocol exchange. Available since 2.13.
 * @member {Number} mqttPubrecTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubrecTxCount = undefined;

/**
 * The number of MQTT publish release (PUBREL) packets received from the Client in response to a PUBREC packet. These packets are the third packet of a QoS 2 protocol exchange. Available since 2.13.
 * @member {Number} mqttPubrelRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttPubrelRxCount = undefined;

/**
 * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
 * @member {String} mqttSessionClientId
 */
MsgVpnMqttSessionModel.prototype.mqttSessionClientId = undefined;

/**
 * Allowed values for the <code>mqttSessionVirtualRouter</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnMqttSessionModel.MqttSessionVirtualRouterEnum = {
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
 * The virtual router of the MQTT Session. The allowed values and their meaning are:  <pre> \"primary\" - The MQTT Session belongs to the primary virtual router. \"backup\" - The MQTT Session belongs to the backup virtual router. \"auto\" - The MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role. </pre> 
 * @member {module:model/MsgVpnMqttSessionModel.MqttSessionVirtualRouterEnum} mqttSessionVirtualRouter
 */
MsgVpnMqttSessionModel.prototype.mqttSessionVirtualRouter = undefined;

/**
 * The number of MQTT subscribe acknowledgment (SUBACK) failure response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttSubackErrorTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttSubackErrorTxCount = undefined;

/**
 * The number of MQTT subscribe acknowledgment (SUBACK) response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttSubackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttSubackTxCount = undefined;

/**
 * The number of MQTT subscribe (SUBSCRIBE) request packets received from the Client to create one or more topic subscriptions. Available since 2.23.
 * @member {Number} mqttSubscribeRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttSubscribeRxCount = undefined;

/**
 * The number of MQTT unsubscribe acknowledgment (UNSUBACK) response packets transmitted to the Client. Available since 2.23.
 * @member {Number} mqttUnsubackTxCount
 */
MsgVpnMqttSessionModel.prototype.mqttUnsubackTxCount = undefined;

/**
 * The number of MQTT unsubscribe (UNSUBSCRIBE) request packets received from the Client to remove one or more topic subscriptions. Available since 2.23.
 * @member {Number} mqttUnsubscribeRxCount
 */
MsgVpnMqttSessionModel.prototype.mqttUnsubscribeRxCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnMqttSessionModel.prototype.msgVpnName = undefined;

/**
 * The Client Username which owns the MQTT Session.
 * @member {String} owner
 */
MsgVpnMqttSessionModel.prototype.owner = undefined;

/**
 * Indicates whether consumer acknowledgments (ACKs) received on the active replication Message VPN are propagated to the standby replication Message VPN. Available since 2.14.
 * @member {Boolean} queueConsumerAckPropagationEnabled
 */
MsgVpnMqttSessionModel.prototype.queueConsumerAckPropagationEnabled = undefined;

/**
 * The name of the Dead Message Queue (DMQ) used by the MQTT Session Queue. Available since 2.14.
 * @member {String} queueDeadMsgQueue
 */
MsgVpnMqttSessionModel.prototype.queueDeadMsgQueue = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventBindCountThreshold
 */
MsgVpnMqttSessionModel.prototype.queueEventBindCountThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventMsgSpoolUsageThreshold
 */
MsgVpnMqttSessionModel.prototype.queueEventMsgSpoolUsageThreshold = undefined;

/**
 * @member {module:model/EventThresholdModel} queueEventRejectLowPriorityMsgLimitThreshold
 */
MsgVpnMqttSessionModel.prototype.queueEventRejectLowPriorityMsgLimitThreshold = undefined;

/**
 * The maximum number of consumer flows that can bind to the MQTT Session Queue. Available since 2.14.
 * @member {Number} queueMaxBindCount
 */
MsgVpnMqttSessionModel.prototype.queueMaxBindCount = undefined;

/**
 * The maximum number of messages delivered but not acknowledged per flow for the MQTT Session Queue. Available since 2.14.
 * @member {Number} queueMaxDeliveredUnackedMsgsPerFlow
 */
MsgVpnMqttSessionModel.prototype.queueMaxDeliveredUnackedMsgsPerFlow = undefined;

/**
 * The maximum message size allowed in the MQTT Session Queue, in bytes (B). Available since 2.14.
 * @member {Number} queueMaxMsgSize
 */
MsgVpnMqttSessionModel.prototype.queueMaxMsgSize = undefined;

/**
 * The maximum message spool usage allowed by the MQTT Session Queue, in megabytes (MB). A value of 0 only allows spooling of the last message received and disables quota checking. Available since 2.14.
 * @member {Number} queueMaxMsgSpoolUsage
 */
MsgVpnMqttSessionModel.prototype.queueMaxMsgSpoolUsage = undefined;

/**
 * The maximum number of times the MQTT Session Queue will attempt redelivery of a message prior to it being discarded or moved to the DMQ. A value of 0 means to retry forever. Available since 2.14.
 * @member {Number} queueMaxRedeliveryCount
 */
MsgVpnMqttSessionModel.prototype.queueMaxRedeliveryCount = undefined;

/**
 * The maximum time in seconds a message can stay in the MQTT Session Queue when `queueRespectTtlEnabled` is `\"true\"`. A message expires when the lesser of the sender assigned time-to-live (TTL) in the message and the `queueMaxTtl` configured for the MQTT Session Queue, is exceeded. A value of 0 disables expiry. Available since 2.14.
 * @member {Number} queueMaxTtl
 */
MsgVpnMqttSessionModel.prototype.queueMaxTtl = undefined;

/**
 * The name of the MQTT Session Queue.
 * @member {String} queueName
 */
MsgVpnMqttSessionModel.prototype.queueName = undefined;

/**
 * Indicates whether to return negative acknowledgments (NACKs) to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. Available since 2.14.
 * @member {Boolean} queueRejectLowPriorityMsgEnabled
 */
MsgVpnMqttSessionModel.prototype.queueRejectLowPriorityMsgEnabled = undefined;

/**
 * The number of messages of any priority in the MQTT Session Queue above which low priority messages are not admitted but higher priority messages are allowed. Available since 2.14.
 * @member {Number} queueRejectLowPriorityMsgLimit
 */
MsgVpnMqttSessionModel.prototype.queueRejectLowPriorityMsgLimit = undefined;

/**
 * Allowed values for the <code>queueRejectMsgToSenderOnDiscardBehavior</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnMqttSessionModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum = {
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
 * Indicates whether negative acknowledgments (NACKs) are returned to sending clients on message discards. Note that NACKs cause the message to not be delivered to any destination and Transacted Session commits to fail. The allowed values and their meaning are:  <pre> \"never\" - Silently discard messages. \"when-queue-enabled\" - NACK each message discard back to the client, except messages that are discarded because an endpoint is administratively disabled. \"always\" - NACK each message discard back to the client, including messages that are discarded because an endpoint is administratively disabled. </pre>  Available since 2.14.
 * @member {module:model/MsgVpnMqttSessionModel.QueueRejectMsgToSenderOnDiscardBehaviorEnum} queueRejectMsgToSenderOnDiscardBehavior
 */
MsgVpnMqttSessionModel.prototype.queueRejectMsgToSenderOnDiscardBehavior = undefined;

/**
 * Indicates whether the time-to-live (TTL) for messages in the MQTT Session Queue is respected. When enabled, expired messages are discarded or moved to the DMQ. Available since 2.14.
 * @member {Boolean} queueRespectTtlEnabled
 */
MsgVpnMqttSessionModel.prototype.queueRespectTtlEnabled = undefined;

/**
 * The maximum number of outstanding QoS1 and QoS2 messages that the Client has signaled it is willing to accept. Note that there are other broker settings which may further limit the number of outstanding messages. Available since 2.21.
 * @member {Number} rxMax
 */
MsgVpnMqttSessionModel.prototype.rxMax = undefined;

/**
 * Indicates whether the MQTT Session has the Will message specified by the Client. The Will message is published if the Client disconnects without sending the MQTT DISCONNECT packet.
 * @member {Boolean} will
 */
MsgVpnMqttSessionModel.prototype.will = undefined;

