import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderQueueBindingModel model module.
 * @module model/MsgVpnKafkaSenderQueueBindingModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderQueueBindingModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderQueueBindingModel</code>.
   * @alias module:model/MsgVpnKafkaSenderQueueBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderQueueBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderQueueBindingModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderQueueBindingModel} The populated <code>MsgVpnKafkaSenderQueueBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderQueueBindingModel();
      if (data.hasOwnProperty('ackMode'))
        obj.ackMode = ApiClient.convertToType(data['ackMode'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('kafkaSenderName'))
        obj.kafkaSenderName = ApiClient.convertToType(data['kafkaSenderName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('outstandingAckTime'))
        obj.outstandingAckTime = ApiClient.convertToType(data['outstandingAckTime'], 'Number');
      if (data.hasOwnProperty('partitionConsistentHash'))
        obj.partitionConsistentHash = ApiClient.convertToType(data['partitionConsistentHash'], 'String');
      if (data.hasOwnProperty('partitionExplicitNumber'))
        obj.partitionExplicitNumber = ApiClient.convertToType(data['partitionExplicitNumber'], 'Number');
      if (data.hasOwnProperty('partitionRandomFallbackEnabled'))
        obj.partitionRandomFallbackEnabled = ApiClient.convertToType(data['partitionRandomFallbackEnabled'], 'Boolean');
      if (data.hasOwnProperty('partitionScheme'))
        obj.partitionScheme = ApiClient.convertToType(data['partitionScheme'], 'String');
      if (data.hasOwnProperty('queueName'))
        obj.queueName = ApiClient.convertToType(data['queueName'], 'String');
      if (data.hasOwnProperty('remoteKey'))
        obj.remoteKey = ApiClient.convertToType(data['remoteKey'], 'String');
      if (data.hasOwnProperty('remoteTopic'))
        obj.remoteTopic = ApiClient.convertToType(data['remoteTopic'], 'String');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>ackMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaSenderQueueBindingModel.AckModeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "one"
   * @const
   */
  one: "one",

  /**
   * value: "all"
   * @const
   */
  all: "all"
};
/**
 * The number of acks required from the remote Kafka Broker. When \"none\" messages are delivered at-most-once. When \"one\" or \"all\" messages are delivered at-least-once but may be reordered. This is overridden to \"all\" for an idempotent Kafka Sender. The allowed values and their meaning are:  <pre> \"none\" - No Acks. \"one\" - Leader Ack Only. \"all\" - All Replica Acks. </pre> 
 * @member {module:model/MsgVpnKafkaSenderQueueBindingModel.AckModeEnum} ackMode
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.ackMode = undefined;

/**
 * Enable or disable this queue binding of the Kafka Sender.
 * @member {Boolean} enabled
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.enabled = undefined;

/**
 * Indicates why the Queue Binding is not operational.
 * @member {String} failureReason
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.failureReason = undefined;

/**
 * The name of the Kafka Sender.
 * @member {String} kafkaSenderName
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.kafkaSenderName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.msgVpnName = undefined;

/**
 * Indicates how long (in ms) the Queue Binding has been waiting for an ack from the Kafka Cluster for its last publish.
 * @member {Number} outstandingAckTime
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.outstandingAckTime = undefined;

/**
 * Allowed values for the <code>partitionConsistentHash</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaSenderQueueBindingModel.PartitionConsistentHashEnum = {
  /**
   * value: "crc"
   * @const
   */
  crc: "crc",

  /**
   * value: "murmur2"
   * @const
   */
  murmur2: "murmur2",

  /**
   * value: "fnv1a"
   * @const
   */
  fnv1a: "fnv1a"
};
/**
 * The hash algorithm to use for consistent partition selection. The allowed values and their meaning are:  <pre> \"crc\" - CRC Hash. \"murmur2\" - Murmer2 Hash. \"fnv1a\" - Fowler-Noll-Vo 1a Hash. </pre> 
 * @member {module:model/MsgVpnKafkaSenderQueueBindingModel.PartitionConsistentHashEnum} partitionConsistentHash
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.partitionConsistentHash = undefined;

/**
 * The partition number to use for explicit partition selection.
 * @member {Number} partitionExplicitNumber
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.partitionExplicitNumber = undefined;

/**
 * Enable or disable fallback to the random partition selection scheme when the consistent partition scheme is being used but no partition key is available for the message. When enabled a random partition will be selected for each unkeyed messages, otherwise some partition will be selected for groups of unkeyed messages.
 * @member {Boolean} partitionRandomFallbackEnabled
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.partitionRandomFallbackEnabled = undefined;

/**
 * Allowed values for the <code>partitionScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaSenderQueueBindingModel.PartitionSchemeEnum = {
  /**
   * value: "consistent"
   * @const
   */
  consistent: "consistent",

  /**
   * value: "explicit"
   * @const
   */
  explicit: "explicit",

  /**
   * value: "random"
   * @const
   */
  random: "random"
};
/**
 * The partitioning scheme used to select a partition of the topic on the Kafka cluster to send messages to. The allowed values and their meaning are:  <pre> \"consistent\" - Select a consistent partition for each key value. A hash of the key will be used to select the partition number. \"explicit\" - Select an explicit partition independent of key value. \"random\" - Select a random partition independent of key value. </pre> 
 * @member {module:model/MsgVpnKafkaSenderQueueBindingModel.PartitionSchemeEnum} partitionScheme
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.partitionScheme = undefined;

/**
 * The name of the Queue.
 * @member {String} queueName
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.queueName = undefined;

/**
 * The Substitution Expression used to generate the key for each message sent to Kafka. This expression can include fields extracted from the metadata of each individual Solace message as it is taken from the Solace Queue.  If empty, no key is included for each message as it is published into Kafka.
 * @member {String} remoteKey
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.remoteKey = undefined;

/**
 * The Kafka Topic on the Kafka Cluster to send each message taken from the Solace Queue to.  If empty, the Queue Binding will not be operational.
 * @member {String} remoteTopic
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.remoteTopic = undefined;

/**
 * Indicates whether the Queue Binding is operationally up.
 * @member {Boolean} up
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Queue Binding was up.
 * @member {Number} uptime
 */
MsgVpnKafkaSenderQueueBindingModel.prototype.uptime = undefined;

