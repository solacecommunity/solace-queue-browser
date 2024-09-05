import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverRemoteBrokerModel model module.
 * @module model/MsgVpnKafkaReceiverRemoteBrokerModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverRemoteBrokerModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverRemoteBrokerModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverRemoteBrokerModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverRemoteBrokerModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverRemoteBrokerModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverRemoteBrokerModel} The populated <code>MsgVpnKafkaReceiverRemoteBrokerModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverRemoteBrokerModel();
      if (data.hasOwnProperty('averageLatency'))
        obj.averageLatency = ApiClient.convertToType(data['averageLatency'], 'Number');
      if (data.hasOwnProperty('connectCount'))
        obj.connectCount = ApiClient.convertToType(data['connectCount'], 'Number');
      if (data.hasOwnProperty('kafkaReceiverName'))
        obj.kafkaReceiverName = ApiClient.convertToType(data['kafkaReceiverName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('remoteBroker'))
        obj.remoteBroker = ApiClient.convertToType(data['remoteBroker'], 'String');
      if (data.hasOwnProperty('rxErrorCount'))
        obj.rxErrorCount = ApiClient.convertToType(data['rxErrorCount'], 'Number');
      if (data.hasOwnProperty('rxResponseByteCount'))
        obj.rxResponseByteCount = ApiClient.convertToType(data['rxResponseByteCount'], 'Number');
      if (data.hasOwnProperty('rxResponseCount'))
        obj.rxResponseCount = ApiClient.convertToType(data['rxResponseCount'], 'Number');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('txErrorCount'))
        obj.txErrorCount = ApiClient.convertToType(data['txErrorCount'], 'Number');
      if (data.hasOwnProperty('txRequestByteCount'))
        obj.txRequestByteCount = ApiClient.convertToType(data['txRequestByteCount'], 'Number');
      if (data.hasOwnProperty('txRequestCount'))
        obj.txRequestCount = ApiClient.convertToType(data['txRequestCount'], 'Number');
      if (data.hasOwnProperty('txRetryCount'))
        obj.txRetryCount = ApiClient.convertToType(data['txRetryCount'], 'Number');
    }
    return obj;
  }
}

/**
 * Average latency (in ms) for the remote broker.
 * @member {Number} averageLatency
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.averageLatency = undefined;

/**
 * Connect attempt count.
 * @member {Number} connectCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.connectCount = undefined;

/**
 * The name of the Kafka Receiver.
 * @member {String} kafkaReceiverName
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.kafkaReceiverName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.msgVpnName = undefined;

/**
 * The Kafka remote broker name.
 * @member {String} remoteBroker
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.remoteBroker = undefined;

/**
 * Received error count.
 * @member {Number} rxErrorCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.rxErrorCount = undefined;

/**
 * Received response byte count.
 * @member {Number} rxResponseByteCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.rxResponseByteCount = undefined;

/**
 * Received response count.
 * @member {Number} rxResponseCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.rxResponseCount = undefined;

/**
 * Remote broker state.
 * @member {String} state
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.state = undefined;

/**
 * Sent error count.
 * @member {Number} txErrorCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.txErrorCount = undefined;

/**
 * Sent request byte count.
 * @member {Number} txRequestByteCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.txRequestByteCount = undefined;

/**
 * Sent request count.
 * @member {Number} txRequestCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.txRequestCount = undefined;

/**
 * Sent request retry count.
 * @member {Number} txRetryCount
 */
MsgVpnKafkaReceiverRemoteBrokerModel.prototype.txRetryCount = undefined;

