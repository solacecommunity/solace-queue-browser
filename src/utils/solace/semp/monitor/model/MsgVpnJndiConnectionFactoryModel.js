import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnJndiConnectionFactoryModel model module.
 * @module model/MsgVpnJndiConnectionFactoryModel
 * @version 2.36
 */
export class MsgVpnJndiConnectionFactoryModel {
  /**
   * Constructs a new <code>MsgVpnJndiConnectionFactoryModel</code>.
   * @alias module:model/MsgVpnJndiConnectionFactoryModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnJndiConnectionFactoryModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnJndiConnectionFactoryModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnJndiConnectionFactoryModel} The populated <code>MsgVpnJndiConnectionFactoryModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnJndiConnectionFactoryModel();
      if (data.hasOwnProperty('allowDuplicateClientIdEnabled'))
        obj.allowDuplicateClientIdEnabled = ApiClient.convertToType(data['allowDuplicateClientIdEnabled'], 'Boolean');
      if (data.hasOwnProperty('clientDescription'))
        obj.clientDescription = ApiClient.convertToType(data['clientDescription'], 'String');
      if (data.hasOwnProperty('clientId'))
        obj.clientId = ApiClient.convertToType(data['clientId'], 'String');
      if (data.hasOwnProperty('connectionFactoryName'))
        obj.connectionFactoryName = ApiClient.convertToType(data['connectionFactoryName'], 'String');
      if (data.hasOwnProperty('dtoReceiveOverrideEnabled'))
        obj.dtoReceiveOverrideEnabled = ApiClient.convertToType(data['dtoReceiveOverrideEnabled'], 'Boolean');
      if (data.hasOwnProperty('dtoReceiveSubscriberLocalPriority'))
        obj.dtoReceiveSubscriberLocalPriority = ApiClient.convertToType(data['dtoReceiveSubscriberLocalPriority'], 'Number');
      if (data.hasOwnProperty('dtoReceiveSubscriberNetworkPriority'))
        obj.dtoReceiveSubscriberNetworkPriority = ApiClient.convertToType(data['dtoReceiveSubscriberNetworkPriority'], 'Number');
      if (data.hasOwnProperty('dtoSendEnabled'))
        obj.dtoSendEnabled = ApiClient.convertToType(data['dtoSendEnabled'], 'Boolean');
      if (data.hasOwnProperty('dynamicEndpointCreateDurableEnabled'))
        obj.dynamicEndpointCreateDurableEnabled = ApiClient.convertToType(data['dynamicEndpointCreateDurableEnabled'], 'Boolean');
      if (data.hasOwnProperty('dynamicEndpointRespectTtlEnabled'))
        obj.dynamicEndpointRespectTtlEnabled = ApiClient.convertToType(data['dynamicEndpointRespectTtlEnabled'], 'Boolean');
      if (data.hasOwnProperty('guaranteedReceiveAckTimeout'))
        obj.guaranteedReceiveAckTimeout = ApiClient.convertToType(data['guaranteedReceiveAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveReconnectRetryCount'))
        obj.guaranteedReceiveReconnectRetryCount = ApiClient.convertToType(data['guaranteedReceiveReconnectRetryCount'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveReconnectRetryWait'))
        obj.guaranteedReceiveReconnectRetryWait = ApiClient.convertToType(data['guaranteedReceiveReconnectRetryWait'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveWindowSize'))
        obj.guaranteedReceiveWindowSize = ApiClient.convertToType(data['guaranteedReceiveWindowSize'], 'Number');
      if (data.hasOwnProperty('guaranteedReceiveWindowSizeAckThreshold'))
        obj.guaranteedReceiveWindowSizeAckThreshold = ApiClient.convertToType(data['guaranteedReceiveWindowSizeAckThreshold'], 'Number');
      if (data.hasOwnProperty('guaranteedSendAckTimeout'))
        obj.guaranteedSendAckTimeout = ApiClient.convertToType(data['guaranteedSendAckTimeout'], 'Number');
      if (data.hasOwnProperty('guaranteedSendWindowSize'))
        obj.guaranteedSendWindowSize = ApiClient.convertToType(data['guaranteedSendWindowSize'], 'Number');
      if (data.hasOwnProperty('messagingDefaultDeliveryMode'))
        obj.messagingDefaultDeliveryMode = ApiClient.convertToType(data['messagingDefaultDeliveryMode'], 'String');
      if (data.hasOwnProperty('messagingDefaultDmqEligibleEnabled'))
        obj.messagingDefaultDmqEligibleEnabled = ApiClient.convertToType(data['messagingDefaultDmqEligibleEnabled'], 'Boolean');
      if (data.hasOwnProperty('messagingDefaultElidingEligibleEnabled'))
        obj.messagingDefaultElidingEligibleEnabled = ApiClient.convertToType(data['messagingDefaultElidingEligibleEnabled'], 'Boolean');
      if (data.hasOwnProperty('messagingJmsxUserIdEnabled'))
        obj.messagingJmsxUserIdEnabled = ApiClient.convertToType(data['messagingJmsxUserIdEnabled'], 'Boolean');
      if (data.hasOwnProperty('messagingTextInXmlPayloadEnabled'))
        obj.messagingTextInXmlPayloadEnabled = ApiClient.convertToType(data['messagingTextInXmlPayloadEnabled'], 'Boolean');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('transportCompressionLevel'))
        obj.transportCompressionLevel = ApiClient.convertToType(data['transportCompressionLevel'], 'Number');
      if (data.hasOwnProperty('transportConnectRetryCount'))
        obj.transportConnectRetryCount = ApiClient.convertToType(data['transportConnectRetryCount'], 'Number');
      if (data.hasOwnProperty('transportConnectRetryPerHostCount'))
        obj.transportConnectRetryPerHostCount = ApiClient.convertToType(data['transportConnectRetryPerHostCount'], 'Number');
      if (data.hasOwnProperty('transportConnectTimeout'))
        obj.transportConnectTimeout = ApiClient.convertToType(data['transportConnectTimeout'], 'Number');
      if (data.hasOwnProperty('transportDirectTransportEnabled'))
        obj.transportDirectTransportEnabled = ApiClient.convertToType(data['transportDirectTransportEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportKeepaliveCount'))
        obj.transportKeepaliveCount = ApiClient.convertToType(data['transportKeepaliveCount'], 'Number');
      if (data.hasOwnProperty('transportKeepaliveEnabled'))
        obj.transportKeepaliveEnabled = ApiClient.convertToType(data['transportKeepaliveEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportKeepaliveInterval'))
        obj.transportKeepaliveInterval = ApiClient.convertToType(data['transportKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('transportMsgCallbackOnIoThreadEnabled'))
        obj.transportMsgCallbackOnIoThreadEnabled = ApiClient.convertToType(data['transportMsgCallbackOnIoThreadEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportOptimizeDirectEnabled'))
        obj.transportOptimizeDirectEnabled = ApiClient.convertToType(data['transportOptimizeDirectEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportPort'))
        obj.transportPort = ApiClient.convertToType(data['transportPort'], 'Number');
      if (data.hasOwnProperty('transportReadTimeout'))
        obj.transportReadTimeout = ApiClient.convertToType(data['transportReadTimeout'], 'Number');
      if (data.hasOwnProperty('transportReceiveBufferSize'))
        obj.transportReceiveBufferSize = ApiClient.convertToType(data['transportReceiveBufferSize'], 'Number');
      if (data.hasOwnProperty('transportReconnectRetryCount'))
        obj.transportReconnectRetryCount = ApiClient.convertToType(data['transportReconnectRetryCount'], 'Number');
      if (data.hasOwnProperty('transportReconnectRetryWait'))
        obj.transportReconnectRetryWait = ApiClient.convertToType(data['transportReconnectRetryWait'], 'Number');
      if (data.hasOwnProperty('transportSendBufferSize'))
        obj.transportSendBufferSize = ApiClient.convertToType(data['transportSendBufferSize'], 'Number');
      if (data.hasOwnProperty('transportTcpNoDelayEnabled'))
        obj.transportTcpNoDelayEnabled = ApiClient.convertToType(data['transportTcpNoDelayEnabled'], 'Boolean');
      if (data.hasOwnProperty('xaEnabled'))
        obj.xaEnabled = ApiClient.convertToType(data['xaEnabled'], 'Boolean');
    }
    return obj;
  }
}

/**
 * Indicates whether new JMS connections can use the same Client identifier (ID) as an existing connection.
 * @member {Boolean} allowDuplicateClientIdEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.allowDuplicateClientIdEnabled = undefined;

/**
 * The description of the Client.
 * @member {String} clientDescription
 */
MsgVpnJndiConnectionFactoryModel.prototype.clientDescription = undefined;

/**
 * The Client identifier (ID). If not specified, a unique value for it will be generated.
 * @member {String} clientId
 */
MsgVpnJndiConnectionFactoryModel.prototype.clientId = undefined;

/**
 * The name of the JMS Connection Factory.
 * @member {String} connectionFactoryName
 */
MsgVpnJndiConnectionFactoryModel.prototype.connectionFactoryName = undefined;

/**
 * Indicates whether overriding by the Subscriber (Consumer) of the deliver-to-one (DTO) property on messages is enabled. When enabled, the Subscriber can receive all DTO tagged messages.
 * @member {Boolean} dtoReceiveOverrideEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoReceiveOverrideEnabled = undefined;

/**
 * The priority for receiving deliver-to-one (DTO) messages by the Subscriber (Consumer) if the messages are published on the local broker that the Subscriber is directly connected to.
 * @member {Number} dtoReceiveSubscriberLocalPriority
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoReceiveSubscriberLocalPriority = undefined;

/**
 * The priority for receiving deliver-to-one (DTO) messages by the Subscriber (Consumer) if the messages are published on a remote broker.
 * @member {Number} dtoReceiveSubscriberNetworkPriority
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoReceiveSubscriberNetworkPriority = undefined;

/**
 * Indicates whether the deliver-to-one (DTO) property is enabled on messages sent by the Publisher (Producer).
 * @member {Boolean} dtoSendEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dtoSendEnabled = undefined;

/**
 * Indicates whether a durable endpoint will be dynamically created on the broker when the client calls \"Session.createDurableSubscriber()\" or \"Session.createQueue()\". The created endpoint respects the message time-to-live (TTL) according to the \"dynamicEndpointRespectTtlEnabled\" property.
 * @member {Boolean} dynamicEndpointCreateDurableEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dynamicEndpointCreateDurableEnabled = undefined;

/**
 * Indicates whether dynamically created durable and non-durable endpoints respect the message time-to-live (TTL) property.
 * @member {Boolean} dynamicEndpointRespectTtlEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.dynamicEndpointRespectTtlEnabled = undefined;

/**
 * The timeout for sending the acknowledgment (ACK) for guaranteed messages received by the Subscriber (Consumer), in milliseconds.
 * @member {Number} guaranteedReceiveAckTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveAckTimeout = undefined;

/**
 * The maximum number of attempts to reconnect to the host or list of hosts after the guaranteed  messaging connection has been lost. The value \"-1\" means to retry forever. Available since 2.14.
 * @member {Number} guaranteedReceiveReconnectRetryCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveReconnectRetryCount = undefined;

/**
 * The amount of time to wait before making another attempt to connect or reconnect to the host after the guaranteed messaging connection has been lost, in milliseconds. Available since 2.14.
 * @member {Number} guaranteedReceiveReconnectRetryWait
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveReconnectRetryWait = undefined;

/**
 * The size of the window for guaranteed messages received by the Subscriber (Consumer), in messages.
 * @member {Number} guaranteedReceiveWindowSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveWindowSize = undefined;

/**
 * The threshold for sending the acknowledgment (ACK) for guaranteed messages received by the Subscriber (Consumer) as a percentage of `guaranteedReceiveWindowSize`.
 * @member {Number} guaranteedReceiveWindowSizeAckThreshold
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedReceiveWindowSizeAckThreshold = undefined;

/**
 * The timeout for receiving the acknowledgment (ACK) for guaranteed messages sent by the Publisher (Producer), in milliseconds.
 * @member {Number} guaranteedSendAckTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedSendAckTimeout = undefined;

/**
 * The size of the window for non-persistent guaranteed messages sent by the Publisher (Producer), in messages. For persistent messages the window size is fixed at 1.
 * @member {Number} guaranteedSendWindowSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.guaranteedSendWindowSize = undefined;

/**
 * Allowed values for the <code>messagingDefaultDeliveryMode</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnJndiConnectionFactoryModel.MessagingDefaultDeliveryModeEnum = {
  /**
   * value: "persistent"
   * @const
   */
  persistent: "persistent",

  /**
   * value: "non-persistent"
   * @const
   */
  nonPersistent: "non-persistent"
};
/**
 * The default delivery mode for messages sent by the Publisher (Producer). The allowed values and their meaning are:  <pre> \"persistent\" - The broker spools messages (persists in the Message Spool) as part of the send operation. \"non-persistent\" - The broker does not spool messages (does not persist in the Message Spool) as part of the send operation. </pre> 
 * @member {module:model/MsgVpnJndiConnectionFactoryModel.MessagingDefaultDeliveryModeEnum} messagingDefaultDeliveryMode
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingDefaultDeliveryMode = undefined;

/**
 * Indicates whether messages sent by the Publisher (Producer) are Dead Message Queue (DMQ) eligible by default.
 * @member {Boolean} messagingDefaultDmqEligibleEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingDefaultDmqEligibleEnabled = undefined;

/**
 * Indicates whether messages sent by the Publisher (Producer) are Eliding eligible by default.
 * @member {Boolean} messagingDefaultElidingEligibleEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingDefaultElidingEligibleEnabled = undefined;

/**
 * Indicates whether to include (add or replace) the JMSXUserID property in messages sent by the Publisher (Producer).
 * @member {Boolean} messagingJmsxUserIdEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingJmsxUserIdEnabled = undefined;

/**
 * Indicates whether encoding of JMS text messages in Publisher (Producer) messages is as XML payload. When disabled, JMS text messages are encoded as a binary attachment.
 * @member {Boolean} messagingTextInXmlPayloadEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.messagingTextInXmlPayloadEnabled = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnJndiConnectionFactoryModel.prototype.msgVpnName = undefined;

/**
 * The ZLIB compression level for the connection to the broker. The value \"0\" means no compression, and the value \"-1\" means the compression level is specified in the JNDI Properties file.
 * @member {Number} transportCompressionLevel
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportCompressionLevel = undefined;

/**
 * The maximum number of retry attempts to establish an initial connection to the host or list of hosts. The value \"0\" means a single attempt (no retries), and the value \"-1\" means to retry forever.
 * @member {Number} transportConnectRetryCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportConnectRetryCount = undefined;

/**
 * The maximum number of retry attempts to establish an initial connection to each host on the list of hosts. The value \"0\" means a single attempt (no retries), and the value \"-1\" means to retry forever.
 * @member {Number} transportConnectRetryPerHostCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportConnectRetryPerHostCount = undefined;

/**
 * The timeout for establishing an initial connection to the broker, in milliseconds.
 * @member {Number} transportConnectTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportConnectTimeout = undefined;

/**
 * Indicates whether usage of the Direct Transport mode for sending non-persistent messages is enabled. When disabled, the Guaranteed Transport mode is used.
 * @member {Boolean} transportDirectTransportEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportDirectTransportEnabled = undefined;

/**
 * The maximum number of consecutive application-level keepalive messages sent without the broker response before the connection to the broker is closed.
 * @member {Number} transportKeepaliveCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportKeepaliveCount = undefined;

/**
 * Indicates whether application-level keepalive messages are used to maintain a connection with the broker.
 * @member {Boolean} transportKeepaliveEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportKeepaliveEnabled = undefined;

/**
 * The interval between application-level keepalive messages, in milliseconds.
 * @member {Number} transportKeepaliveInterval
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportKeepaliveInterval = undefined;

/**
 * Indicates whether delivery of asynchronous messages is done directly from the I/O thread.
 * @member {Boolean} transportMsgCallbackOnIoThreadEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportMsgCallbackOnIoThreadEnabled = undefined;

/**
 * Indicates whether optimization for the Direct Transport delivery mode is enabled. If enabled, the client application is limited to one Publisher (Producer) and one non-durable Subscriber (Consumer).
 * @member {Boolean} transportOptimizeDirectEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportOptimizeDirectEnabled = undefined;

/**
 * The connection port number on the broker for SMF clients. The value \"-1\" means the port is specified in the JNDI Properties file.
 * @member {Number} transportPort
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportPort = undefined;

/**
 * The timeout for reading a reply from the broker, in milliseconds.
 * @member {Number} transportReadTimeout
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReadTimeout = undefined;

/**
 * The size of the receive socket buffer, in bytes. It corresponds to the SO_RCVBUF socket option.
 * @member {Number} transportReceiveBufferSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReceiveBufferSize = undefined;

/**
 * The maximum number of attempts to reconnect to the host or list of hosts after the connection has been lost. The value \"-1\" means to retry forever.
 * @member {Number} transportReconnectRetryCount
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReconnectRetryCount = undefined;

/**
 * The amount of time before making another attempt to connect or reconnect to the host after the connection has been lost, in milliseconds.
 * @member {Number} transportReconnectRetryWait
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportReconnectRetryWait = undefined;

/**
 * The size of the send socket buffer, in bytes. It corresponds to the SO_SNDBUF socket option.
 * @member {Number} transportSendBufferSize
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportSendBufferSize = undefined;

/**
 * Indicates whether the TCP_NODELAY option is enabled, which disables Nagle's algorithm for TCP/IP congestion control (RFC 896).
 * @member {Boolean} transportTcpNoDelayEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.transportTcpNoDelayEnabled = undefined;

/**
 * Indicates whether this is an XA Connection Factory. When enabled, the Connection Factory can be cast to \"XAConnectionFactory\", \"XAQueueConnectionFactory\" or \"XATopicConnectionFactory\".
 * @member {Boolean} xaEnabled
 */
MsgVpnJndiConnectionFactoryModel.prototype.xaEnabled = undefined;

