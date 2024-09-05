import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaReceiverModel model module.
 * @module model/MsgVpnKafkaReceiverModel
 * @version 2.36
 */
export class MsgVpnKafkaReceiverModel {
  /**
   * Constructs a new <code>MsgVpnKafkaReceiverModel</code>.
   * @alias module:model/MsgVpnKafkaReceiverModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaReceiverModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaReceiverModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaReceiverModel} The populated <code>MsgVpnKafkaReceiverModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaReceiverModel();
      if (data.hasOwnProperty('authenticationBasicUsername'))
        obj.authenticationBasicUsername = ApiClient.convertToType(data['authenticationBasicUsername'], 'String');
      if (data.hasOwnProperty('authenticationClientCertConfigTime'))
        obj.authenticationClientCertConfigTime = ApiClient.convertToType(data['authenticationClientCertConfigTime'], 'Number');
      if (data.hasOwnProperty('authenticationClientCertThumbprint'))
        obj.authenticationClientCertThumbprint = ApiClient.convertToType(data['authenticationClientCertThumbprint'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientId'))
        obj.authenticationOauthClientId = ApiClient.convertToType(data['authenticationOauthClientId'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientScope'))
        obj.authenticationOauthClientScope = ApiClient.convertToType(data['authenticationOauthClientScope'], 'String');
      if (data.hasOwnProperty('authenticationOauthClientTokenEndpoint'))
        obj.authenticationOauthClientTokenEndpoint = ApiClient.convertToType(data['authenticationOauthClientTokenEndpoint'], 'String');
      if (data.hasOwnProperty('authenticationScheme'))
        obj.authenticationScheme = ApiClient.convertToType(data['authenticationScheme'], 'String');
      if (data.hasOwnProperty('authenticationScramHash'))
        obj.authenticationScramHash = ApiClient.convertToType(data['authenticationScramHash'], 'String');
      if (data.hasOwnProperty('authenticationScramUsername'))
        obj.authenticationScramUsername = ApiClient.convertToType(data['authenticationScramUsername'], 'String');
      if (data.hasOwnProperty('batchDelay'))
        obj.batchDelay = ApiClient.convertToType(data['batchDelay'], 'Number');
      if (data.hasOwnProperty('batchMaxSize'))
        obj.batchMaxSize = ApiClient.convertToType(data['batchMaxSize'], 'Number');
      if (data.hasOwnProperty('bootstrapAddressList'))
        obj.bootstrapAddressList = ApiClient.convertToType(data['bootstrapAddressList'], 'String');
      if (data.hasOwnProperty('clientName'))
        obj.clientName = ApiClient.convertToType(data['clientName'], 'String');
      if (data.hasOwnProperty('enabled'))
        obj.enabled = ApiClient.convertToType(data['enabled'], 'Boolean');
      if (data.hasOwnProperty('failureReason'))
        obj.failureReason = ApiClient.convertToType(data['failureReason'], 'String');
      if (data.hasOwnProperty('groupId'))
        obj.groupId = ApiClient.convertToType(data['groupId'], 'String');
      if (data.hasOwnProperty('groupKeepaliveInterval'))
        obj.groupKeepaliveInterval = ApiClient.convertToType(data['groupKeepaliveInterval'], 'Number');
      if (data.hasOwnProperty('groupKeepaliveTimeout'))
        obj.groupKeepaliveTimeout = ApiClient.convertToType(data['groupKeepaliveTimeout'], 'Number');
      if (data.hasOwnProperty('groupMembershipType'))
        obj.groupMembershipType = ApiClient.convertToType(data['groupMembershipType'], 'String');
      if (data.hasOwnProperty('groupPartitionSchemeList'))
        obj.groupPartitionSchemeList = ApiClient.convertToType(data['groupPartitionSchemeList'], 'String');
      if (data.hasOwnProperty('kafkaReceiverName'))
        obj.kafkaReceiverName = ApiClient.convertToType(data['kafkaReceiverName'], 'String');
      if (data.hasOwnProperty('metadataTopicExcludeList'))
        obj.metadataTopicExcludeList = ApiClient.convertToType(data['metadataTopicExcludeList'], 'String');
      if (data.hasOwnProperty('metadataTopicRefreshInterval'))
        obj.metadataTopicRefreshInterval = ApiClient.convertToType(data['metadataTopicRefreshInterval'], 'Number');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('rejectedMsgCount'))
        obj.rejectedMsgCount = ApiClient.convertToType(data['rejectedMsgCount'], 'Number');
      if (data.hasOwnProperty('rxMsgByteCount'))
        obj.rxMsgByteCount = ApiClient.convertToType(data['rxMsgByteCount'], 'Number');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxRequestByteCount'))
        obj.rxRequestByteCount = ApiClient.convertToType(data['rxRequestByteCount'], 'Number');
      if (data.hasOwnProperty('rxRequestCount'))
        obj.rxRequestCount = ApiClient.convertToType(data['rxRequestCount'], 'Number');
      if (data.hasOwnProperty('transportTlsEnabled'))
        obj.transportTlsEnabled = ApiClient.convertToType(data['transportTlsEnabled'], 'Boolean');
      if (data.hasOwnProperty('txMsgByteCount'))
        obj.txMsgByteCount = ApiClient.convertToType(data['txMsgByteCount'], 'Number');
      if (data.hasOwnProperty('txMsgCount'))
        obj.txMsgCount = ApiClient.convertToType(data['txMsgCount'], 'Number');
      if (data.hasOwnProperty('txRequestByteCount'))
        obj.txRequestByteCount = ApiClient.convertToType(data['txRequestByteCount'], 'Number');
      if (data.hasOwnProperty('txRequestCount'))
        obj.txRequestCount = ApiClient.convertToType(data['txRequestCount'], 'Number');
      if (data.hasOwnProperty('up'))
        obj.up = ApiClient.convertToType(data['up'], 'Boolean');
      if (data.hasOwnProperty('uptime'))
        obj.uptime = ApiClient.convertToType(data['uptime'], 'Number');
    }
    return obj;
  }
}

/**
 * The username the Kafka Receiver uses to login to the remote Kafka broker.
 * @member {String} authenticationBasicUsername
 */
MsgVpnKafkaReceiverModel.prototype.authenticationBasicUsername = undefined;

/**
 * The timestamp of when the client-certificate was configured. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} authenticationClientCertConfigTime
 */
MsgVpnKafkaReceiverModel.prototype.authenticationClientCertConfigTime = undefined;

/**
 * The thumbprint of the client-certificate.
 * @member {String} authenticationClientCertThumbprint
 */
MsgVpnKafkaReceiverModel.prototype.authenticationClientCertThumbprint = undefined;

/**
 * The OAuth client ID.
 * @member {String} authenticationOauthClientId
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientId = undefined;

/**
 * The OAuth scope.
 * @member {String} authenticationOauthClientScope
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientScope = undefined;

/**
 * The OAuth token endpoint URL that the Kafka Receiver will use to request a token for login to the Kafka broker. Must begin with \"https\".
 * @member {String} authenticationOauthClientTokenEndpoint
 */
MsgVpnKafkaReceiverModel.prototype.authenticationOauthClientTokenEndpoint = undefined;

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverModel.AuthenticationSchemeEnum = {
  /**
   * value: "none"
   * @const
   */
  none: "none",

  /**
   * value: "basic"
   * @const
   */
  basic: "basic",

  /**
   * value: "scram"
   * @const
   */
  scram: "scram",

  /**
   * value: "client-certificate"
   * @const
   */
  clientCertificate: "client-certificate",

  /**
   * value: "oauth-client"
   * @const
   */
  oauthClient: "oauth-client"
};
/**
 * The authentication scheme for the Kafka Receiver. The allowed values and their meaning are:  <pre> \"none\" - Anonymous Authentication. \"basic\" - Basic Authentication. \"scram\" - Salted Challenge Response Authentication. \"client-certificate\" - Client Certificate Authentication. \"oauth-client\" - Oauth Authentication. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverModel.AuthenticationSchemeEnum} authenticationScheme
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScheme = undefined;

/**
 * Allowed values for the <code>authenticationScramHash</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverModel.AuthenticationScramHashEnum = {
  /**
   * value: "sha-256"
   * @const
   */
  _256: "sha-256",

  /**
   * value: "sha-512"
   * @const
   */
  _512: "sha-512"
};
/**
 * The hash used for SCRAM authentication. The allowed values and their meaning are:  <pre> \"sha-256\" - SHA-2 256 bits. \"sha-512\" - SHA-2 512 bits. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverModel.AuthenticationScramHashEnum} authenticationScramHash
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScramHash = undefined;

/**
 * The username the Kafka Receiver uses to login to the remote Kafka broker.
 * @member {String} authenticationScramUsername
 */
MsgVpnKafkaReceiverModel.prototype.authenticationScramUsername = undefined;

/**
 * Delay (in ms) to wait to accumulate a batch of messages to receive. Batching is done on a per-partition basis.
 * @member {Number} batchDelay
 */
MsgVpnKafkaReceiverModel.prototype.batchDelay = undefined;

/**
 * Maximum size of a message batch, in bytes (B). Batching is done on a per-partition basis.
 * @member {Number} batchMaxSize
 */
MsgVpnKafkaReceiverModel.prototype.batchMaxSize = undefined;

/**
 * Comma separated list of addresses (and optional ports) of brokers in the Kafka Cluster from which the state of the entire Kafka Cluster can be learned. If a port is not provided with an address it will default to 9092.
 * @member {String} bootstrapAddressList
 */
MsgVpnKafkaReceiverModel.prototype.bootstrapAddressList = undefined;

/**
 * The name of the Client for the Kafka Receiver.
 * @member {String} clientName
 */
MsgVpnKafkaReceiverModel.prototype.clientName = undefined;

/**
 * Enable or disable the Kafka Receiver.
 * @member {Boolean} enabled
 */
MsgVpnKafkaReceiverModel.prototype.enabled = undefined;

/**
 * Indicates why the Kafka Receiver is not operational.
 * @member {String} failureReason
 */
MsgVpnKafkaReceiverModel.prototype.failureReason = undefined;

/**
 * The id of the Kafka consumer group for the Receiver.
 * @member {String} groupId
 */
MsgVpnKafkaReceiverModel.prototype.groupId = undefined;

/**
 * The time between sending keepalives to the group.
 * @member {Number} groupKeepaliveInterval
 */
MsgVpnKafkaReceiverModel.prototype.groupKeepaliveInterval = undefined;

/**
 * The time until unresponsive group members are removed, triggering a partition rebalance across other members of the group.
 * @member {Number} groupKeepaliveTimeout
 */
MsgVpnKafkaReceiverModel.prototype.groupKeepaliveTimeout = undefined;

/**
 * Allowed values for the <code>groupMembershipType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaReceiverModel.GroupMembershipTypeEnum = {
  /**
   * value: "dynamic"
   * @const
   */
  dynamic: "dynamic",

  /**
   * value: "static"
   * @const
   */
  _static: "static"
};
/**
 * The membership type of the Kafka consumer group for the Receiver. Static members can leave and rejoin the group (within groupKeepaliveTimeout) without prompting a group rebalance. The allowed values and their meaning are:  <pre> \"dynamic\" - Dynamic Membership. \"static\" - Static Membership. </pre> 
 * @member {module:model/MsgVpnKafkaReceiverModel.GroupMembershipTypeEnum} groupMembershipType
 */
MsgVpnKafkaReceiverModel.prototype.groupMembershipType = undefined;

/**
 * The ordered, comma-separated list of schemes used for partition assignment of the consumer group for this Receiver. Both Eager (\"range\", \"roundrobin\") and Cooperative (\"cooperative-sticky\") schemes are supported. The elected group leader will choose the first common strategy provided by all members of the group. Eager and Cooperative schemes must not be mixed. For more information on these schemes, see Kafka documentation.
 * @member {String} groupPartitionSchemeList
 */
MsgVpnKafkaReceiverModel.prototype.groupPartitionSchemeList = undefined;

/**
 * The name of the Kafka Receiver.
 * @member {String} kafkaReceiverName
 */
MsgVpnKafkaReceiverModel.prototype.kafkaReceiverName = undefined;

/**
 * A comma-separated list of regular expressions. Any matching topic names will be ignored in broker metadata.
 * @member {String} metadataTopicExcludeList
 */
MsgVpnKafkaReceiverModel.prototype.metadataTopicExcludeList = undefined;

/**
 * The time between refreshes of topic metadata from the Kafka Cluster.
 * @member {Number} metadataTopicRefreshInterval
 */
MsgVpnKafkaReceiverModel.prototype.metadataTopicRefreshInterval = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnKafkaReceiverModel.prototype.msgVpnName = undefined;

/**
 * Rejected message count. These messages were received from  Kafka but failed to be published to Solace.
 * @member {Number} rejectedMsgCount
 */
MsgVpnKafkaReceiverModel.prototype.rejectedMsgCount = undefined;

/**
 * Received message byte count.
 * @member {Number} rxMsgByteCount
 */
MsgVpnKafkaReceiverModel.prototype.rxMsgByteCount = undefined;

/**
 * Received message count.
 * @member {Number} rxMsgCount
 */
MsgVpnKafkaReceiverModel.prototype.rxMsgCount = undefined;

/**
 * Received request byte count.
 * @member {Number} rxRequestByteCount
 */
MsgVpnKafkaReceiverModel.prototype.rxRequestByteCount = undefined;

/**
 * Received request count.
 * @member {Number} rxRequestCount
 */
MsgVpnKafkaReceiverModel.prototype.rxRequestCount = undefined;

/**
 * Enable or disable encryption (TLS) for the Kafka Receiver.
 * @member {Boolean} transportTlsEnabled
 */
MsgVpnKafkaReceiverModel.prototype.transportTlsEnabled = undefined;

/**
 * Sent message byte count.
 * @member {Number} txMsgByteCount
 */
MsgVpnKafkaReceiverModel.prototype.txMsgByteCount = undefined;

/**
 * Sent message count.
 * @member {Number} txMsgCount
 */
MsgVpnKafkaReceiverModel.prototype.txMsgCount = undefined;

/**
 * Sent request byte count.
 * @member {Number} txRequestByteCount
 */
MsgVpnKafkaReceiverModel.prototype.txRequestByteCount = undefined;

/**
 * Sent request count.
 * @member {Number} txRequestCount
 */
MsgVpnKafkaReceiverModel.prototype.txRequestCount = undefined;

/**
 * Indicates whether the Kafka Receiver is operationally up.
 * @member {Boolean} up
 */
MsgVpnKafkaReceiverModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Kafka Receiver was up.
 * @member {Number} uptime
 */
MsgVpnKafkaReceiverModel.prototype.uptime = undefined;

