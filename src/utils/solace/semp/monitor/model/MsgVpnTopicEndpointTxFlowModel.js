import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnTopicEndpointTxFlowModel model module.
 * @module model/MsgVpnTopicEndpointTxFlowModel
 * @version 2.36
 */
export class MsgVpnTopicEndpointTxFlowModel {
  /**
   * Constructs a new <code>MsgVpnTopicEndpointTxFlowModel</code>.
   * @alias module:model/MsgVpnTopicEndpointTxFlowModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnTopicEndpointTxFlowModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnTopicEndpointTxFlowModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnTopicEndpointTxFlowModel} The populated <code>MsgVpnTopicEndpointTxFlowModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnTopicEndpointTxFlowModel();
      if (data.hasOwnProperty('ackedMsgCount'))
        obj.ackedMsgCount = ApiClient.convertToType(data['ackedMsgCount'], 'Number');
      if (data.hasOwnProperty('activityState'))
        obj.activityState = ApiClient.convertToType(data['activityState'], 'String');
      if (data.hasOwnProperty('bindTime'))
        obj.bindTime = ApiClient.convertToType(data['bindTime'], 'Number');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('consumerRedeliveryRequestAllowed'))
        obj.consumerRedeliveryRequestAllowed = ApiClient.convertToType(data['consumerRedeliveryRequestAllowed'], 'Boolean');
      if (data.hasOwnProperty('cutThroughAckedMsgCount'))
        obj.cutThroughAckedMsgCount = ApiClient.convertToType(data['cutThroughAckedMsgCount'], 'Number');
      if (data.hasOwnProperty('deliveryState'))
        obj.deliveryState = ApiClient.convertToType(data['deliveryState'], 'String');
      if (data.hasOwnProperty('flowId'))
        obj.flowId = ApiClient.convertToType(data['flowId'], 'Number');
      if (data.hasOwnProperty('highestAckPendingMsgId'))
        obj.highestAckPendingMsgId = ApiClient.convertToType(data['highestAckPendingMsgId'], 'Number');
      if (data.hasOwnProperty('lastAckedMsgId'))
        obj.lastAckedMsgId = ApiClient.convertToType(data['lastAckedMsgId'], 'Number');
      if (data.hasOwnProperty('lowestAckPendingMsgId'))
        obj.lowestAckPendingMsgId = ApiClient.convertToType(data['lowestAckPendingMsgId'], 'Number');
      if (data.hasOwnProperty('maxUnackedMsgsExceededMsgCount'))
        obj.maxUnackedMsgsExceededMsgCount = ApiClient.convertToType(data['maxUnackedMsgsExceededMsgCount'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('noLocalDelivery'))
        obj.noLocalDelivery = ApiClient.convertToType(data['noLocalDelivery'], 'Boolean');
      if (data.hasOwnProperty('redeliveredMsgCount'))
        obj.redeliveredMsgCount = ApiClient.convertToType(data['redeliveredMsgCount'], 'Number');
      if (data.hasOwnProperty('redeliveryRequestCount'))
        obj.redeliveryRequestCount = ApiClient.convertToType(data['redeliveryRequestCount'], 'Number');
      if (data.hasOwnProperty('sessionName'))
        obj.sessionName = ApiClient.convertToType(data['sessionName'], 'String');
      if (data.hasOwnProperty('storeAndForwardAckedMsgCount'))
        obj.storeAndForwardAckedMsgCount = ApiClient.convertToType(data['storeAndForwardAckedMsgCount'], 'Number');
      if (data.hasOwnProperty('topicEndpointName'))
        obj.topicEndpointName = ApiClient.convertToType(data['topicEndpointName'], 'String');
      if (data.hasOwnProperty('transportRetransmitMsgCount'))
        obj.transportRetransmitMsgCount = ApiClient.convertToType(data['transportRetransmitMsgCount'], 'Number');
      if (data.hasOwnProperty('unackedMsgCount'))
        obj.unackedMsgCount = ApiClient.convertToType(data['unackedMsgCount'], 'Number');
      if (data.hasOwnProperty('usedWindowSize'))
        obj.usedWindowSize = ApiClient.convertToType(data['usedWindowSize'], 'Number');
      if (data.hasOwnProperty('windowClosedCount'))
        obj.windowClosedCount = ApiClient.convertToType(data['windowClosedCount'], 'Number');
      if (data.hasOwnProperty('windowSize'))
        obj.windowSize = ApiClient.convertToType(data['windowSize'], 'Number');
    }
    return obj;
  }
}

/**
 * The number of guaranteed messages delivered and acknowledged by the consumer.
 * @member {Number} ackedMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.ackedMsgCount = undefined;

/**
 * The activity state of the Flow. The allowed values and their meaning are:  <pre> \"active-browser\" - The Flow is active as a browser. \"active-consumer\" - The Flow is active as a consumer. \"inactive\" - The Flow is inactive. </pre> 
 * @member {String} activityState
 */
MsgVpnTopicEndpointTxFlowModel.prototype.activityState = undefined;

/**
 * The timestamp of when the Flow bound to the Topic Endpoint. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} bindTime
 */
MsgVpnTopicEndpointTxFlowModel.prototype.bindTime = undefined;

/**
 * The name of the Client.
 * @member {String} clientName
 */
MsgVpnTopicEndpointTxFlowModel.prototype.clientName = undefined;

/**
 * Indicates whether redelivery requests can be received as negative acknowledgments (NACKs) from the consumer. Applicable only to REST consumers.
 * @member {Boolean} consumerRedeliveryRequestAllowed
 */
MsgVpnTopicEndpointTxFlowModel.prototype.consumerRedeliveryRequestAllowed = undefined;

/**
 * The number of guaranteed messages that used cut-through delivery and are acknowledged by the consumer.
 * @member {Number} cutThroughAckedMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.cutThroughAckedMsgCount = undefined;

/**
 * The delivery state of the Flow. The allowed values and their meaning are:  <pre> \"closed\" - The Flow is unbound. \"opened\" - The Flow is bound but inactive. \"unbinding\" - The Flow received an unbind request. \"handshaking\" - The Flow is handshaking to become active. \"deliver-cut-through\" - The Flow is streaming messages using direct+guaranteed delivery. \"deliver-from-input-stream\" - The Flow is streaming messages using guaranteed delivery. \"deliver-from-memory\" - The Flow throttled causing message delivery from memory (RAM). \"deliver-from-spool\" - The Flow stalled causing message delivery from spool (ADB or disk). </pre> 
 * @member {String} deliveryState
 */
MsgVpnTopicEndpointTxFlowModel.prototype.deliveryState = undefined;

/**
 * The identifier (ID) of the Flow.
 * @member {Number} flowId
 */
MsgVpnTopicEndpointTxFlowModel.prototype.flowId = undefined;

/**
 * The highest identifier (ID) of message transmitted and waiting for acknowledgment.
 * @member {Number} highestAckPendingMsgId
 */
MsgVpnTopicEndpointTxFlowModel.prototype.highestAckPendingMsgId = undefined;

/**
 * The identifier (ID) of the last message transmitted and acknowledged by the consumer.
 * @member {Number} lastAckedMsgId
 */
MsgVpnTopicEndpointTxFlowModel.prototype.lastAckedMsgId = undefined;

/**
 * The lowest identifier (ID) of message transmitted and waiting for acknowledgment.
 * @member {Number} lowestAckPendingMsgId
 */
MsgVpnTopicEndpointTxFlowModel.prototype.lowestAckPendingMsgId = undefined;

/**
 * The number of guaranteed messages that exceeded the maximum number of delivered unacknowledged messages.
 * @member {Number} maxUnackedMsgsExceededMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.maxUnackedMsgsExceededMsgCount = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnTopicEndpointTxFlowModel.prototype.msgVpnName = undefined;

/**
 * Indicates whether not to deliver messages to a consumer that published them.
 * @member {Boolean} noLocalDelivery
 */
MsgVpnTopicEndpointTxFlowModel.prototype.noLocalDelivery = undefined;

/**
 * The number of guaranteed messages that were redelivered.
 * @member {Number} redeliveredMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.redeliveredMsgCount = undefined;

/**
 * The number of consumer requests via negative acknowledgments (NACKs) to redeliver guaranteed messages.
 * @member {Number} redeliveryRequestCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.redeliveryRequestCount = undefined;

/**
 * The name of the Transacted Session for the Flow.
 * @member {String} sessionName
 */
MsgVpnTopicEndpointTxFlowModel.prototype.sessionName = undefined;

/**
 * The number of guaranteed messages that used store and forward delivery and are acknowledged by the consumer.
 * @member {Number} storeAndForwardAckedMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.storeAndForwardAckedMsgCount = undefined;

/**
 * The name of the Topic Endpoint.
 * @member {String} topicEndpointName
 */
MsgVpnTopicEndpointTxFlowModel.prototype.topicEndpointName = undefined;

/**
 * The number of guaranteed messages that were retransmitted at the transport layer as part of a single delivery attempt. Available since 2.18.
 * @member {Number} transportRetransmitMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.transportRetransmitMsgCount = undefined;

/**
 * The number of guaranteed messages delivered but not yet acknowledged by the consumer.
 * @member {Number} unackedMsgCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.unackedMsgCount = undefined;

/**
 * The number of guaranteed messages using the available window size.
 * @member {Number} usedWindowSize
 */
MsgVpnTopicEndpointTxFlowModel.prototype.usedWindowSize = undefined;

/**
 * The number of times the window for guaranteed messages was filled and closed before an acknowledgment was received.
 * @member {Number} windowClosedCount
 */
MsgVpnTopicEndpointTxFlowModel.prototype.windowClosedCount = undefined;

/**
 * The number of outstanding guaranteed messages that can be transmitted over the Flow before an acknowledgment is received.
 * @member {Number} windowSize
 */
MsgVpnTopicEndpointTxFlowModel.prototype.windowSize = undefined;

