import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverTopicBindingModel model module.
 * @module model/MsgVpnKafkaReceiverTopicBindingModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverTopicBindingModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverTopicBindingModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverTopicBindingModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverTopicBindingModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverTopicBindingModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverTopicBindingModel} The populated <code>MsgVpnKafkaReceiverTopicBindingModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverTopicBindingModel();
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('initialOffset'))
        obj.initialOffset = ApiClient.convertToType(data['initialOffset'], 'String');
      if (data.hasOwnProperty('kafkaReceiverName'))
        obj.kafkaReceiverName = ApiClient.convertToType(data['kafkaReceiverName'], 'String');
      if (data.hasOwnProperty('localKey'))
        obj.localKey = ApiClient.convertToType(data['localKey'], 'String');
      if (data.hasOwnProperty('localTopic'))
        obj.localTopic = ApiClient.convertToType(data['localTopic'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('rejectedMsgCount'))
        obj.rejectedMsgCount = ApiClient.convertToType(data['rejectedMsgCount'], 'Number');
      if (data.hasOwnProperty('topicName'))
        obj.topicName = ApiClient.convertToType(data['topicName'], 'String');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * Enable or disable this topic binding of the Kafka Receiver.
 * @member {Boolean} enabled
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.enabled = undefined;

/**
 * Indicates why the Topic Binding is not operational.
 * @member {String} failureReason
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.failureReason = undefined;

/**
 * Allowed values for the <code>initialOffset</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverTopicBindingModel.InitialOffsetEnum = {
  /**
   * value: "beginning"
   * @const
   */
  beginning: "beginning",

  /**
   * value: "end"
   * @const
   */
  end: "end"
};
/**
 * The initial offset to consume from the Kafka Topic if no member of the group has consumed and committed any offset already, or if the last committed offset has been deleted. Offsets are unique per partition. The allowed values and their meaning are:  <pre> \"beginning\" - Start with the earliest offset available. \"end\" - Start with new offsets only. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverTopicBindingModel.InitialOffsetEnum} initialOffset
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.initialOffset = undefined;

/**
 * The name of the Kafka Receiver.
 * @member {String} kafkaReceiverName
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.kafkaReceiverName = undefined;

/**
 * The Substitution Expression used to generate the key for each message received from Kafka. This expression can include fields extracted from the metadata of each individual Kafka message as it is received from the Kafka Topic.  If empty, no key is included for each message as it is published into Solace.
 * @member {String} localKey
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.localKey = undefined;

/**
 * The Substitution Expression used to generate the Solace Topic for each message received from Kafka. This expression can include data extracted from the metadata of each individual Kafka message as it is received from the Kafka Topic.  If empty, the Topic Binding will not be operational.
 * @member {String} localTopic
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.localTopic = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.msgVpnName = undefined;

/**
 * Rejected message count. These messages were received from  Kafka but failed to be published to Solace.
 * @member {Number} rejectedMsgCount
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.rejectedMsgCount = undefined;

/**
 * The name of the Topic.
 * @member {String} topicName
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.topicName = undefined;

/**
 * Indicates whether the Topic Binding is operationally up.
 * @member {Boolean} up
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Topic Binding was up.
 * @member {Number} uptime
 */
MsgVpnKafkaReceiverTopicBindingModel.prototype.uptime = undefined;

