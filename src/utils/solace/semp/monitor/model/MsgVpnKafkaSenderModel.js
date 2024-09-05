import {ApiClient} from '../ApiClient';

/**
 * The MsgVpnKafkaSenderModel model module.
 * @module model/MsgVpnKafkaSenderModel
 * @version 2.36
 */
export class MsgVpnKafkaSenderModel {
  /**
   * Constructs a new <code>MsgVpnKafkaSenderModel</code>.
   * @alias module:model/MsgVpnKafkaSenderModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MsgVpnKafkaSenderModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MsgVpnKafkaSenderModel} obj Optional instance to populate.
   * @return {module:model/MsgVpnKafkaSenderModel} The populated <code>MsgVpnKafkaSenderModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MsgVpnKafkaSenderModel();
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
      if (data.hasOwnProperty('batchMaxMsgCount'))
        obj.batchMaxMsgCount = ApiClient.convertToType(data['batchMaxMsgCount'], 'Number');
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
      if (data.hasOwnProperty('idempotenceEnabled'))
        obj.idempotenceEnabled = ApiClient.convertToType(data['idempotenceEnabled'], 'Boolean');
      if (data.hasOwnProperty('kafkaSenderName'))
        obj.kafkaSenderName = ApiClient.convertToType(data['kafkaSenderName'], 'String');
      if (data.hasOwnProperty('msgVpnName'))
        obj.msgVpnName = ApiClient.convertToType(data['msgVpnName'], 'String');
      if (data.hasOwnProperty('rxMsgByteCount'))
        obj.rxMsgByteCount = ApiClient.convertToType(data['rxMsgByteCount'], 'Number');
      if (data.hasOwnProperty('rxMsgCount'))
        obj.rxMsgCount = ApiClient.convertToType(data['rxMsgCount'], 'Number');
      if (data.hasOwnProperty('rxRequestByteCount'))
        obj.rxRequestByteCount = ApiClient.convertToType(data['rxRequestByteCount'], 'Number');
      if (data.hasOwnProperty('rxRequestCount'))
        obj.rxRequestCount = ApiClient.convertToType(data['rxRequestCount'], 'Number');
      if (data.hasOwnProperty('transportCompressionEnabled'))
        obj.transportCompressionEnabled = ApiClient.convertToType(data['transportCompressionEnabled'], 'Boolean');
      if (data.hasOwnProperty('transportCompressionLevel'))
        obj.transportCompressionLevel = ApiClient.convertToType(data['transportCompressionLevel'], 'Number');
      if (data.hasOwnProperty('transportCompressionType'))
        obj.transportCompressionType = ApiClient.convertToType(data['transportCompressionType'], 'String');
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
 * The username the Kafka Sender uses to login to the remote Kafka broker.
 * @member {String} authenticationBasicUsername
 */
MsgVpnKafkaSenderModel.prototype.authenticationBasicUsername = undefined;

/**
 * The timestamp of when the client-certificate was configured. This value represents the number of seconds since 1970-01-01 00:00:00 UTC (Unix time).
 * @member {Number} authenticationClientCertConfigTime
 */
MsgVpnKafkaSenderModel.prototype.authenticationClientCertConfigTime = undefined;

/**
 * The thumbprint of the client-certificate.
 * @member {String} authenticationClientCertThumbprint
 */
MsgVpnKafkaSenderModel.prototype.authenticationClientCertThumbprint = undefined;

/**
 * The OAuth client ID.
 * @member {String} authenticationOauthClientId
 */
MsgVpnKafkaSenderModel.prototype.authenticationOauthClientId = undefined;

/**
 * The OAuth scope.
 * @member {String} authenticationOauthClientScope
 */
MsgVpnKafkaSenderModel.prototype.authenticationOauthClientScope = undefined;

/**
 * The OAuth token endpoint URL that the Kafka Sender will use to request a token for login to the Kafka broker. Must begin with \"https\".
 * @member {String} authenticationOauthClientTokenEndpoint
 */
MsgVpnKafkaSenderModel.prototype.authenticationOauthClientTokenEndpoint = undefined;

/**
 * Allowed values for the <code>authenticationScheme</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaSenderModel.AuthenticationSchemeEnum = {
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
 * The authentication scheme for the Kafka Sender. The allowed values and their meaning are:  <pre> \"none\" - Anonymous Authentication. \"basic\" - Basic Authentication. \"scram\" - Salted Challenge Response Authentication. \"client-certificate\" - Client Certificate Authentication. \"oauth-client\" - Oauth Authentication. </pre> 
 * @member {module:model/MsgVpnKafkaSenderModel.AuthenticationSchemeEnum} authenticationScheme
 */
MsgVpnKafkaSenderModel.prototype.authenticationScheme = undefined;

/**
 * Allowed values for the <code>authenticationScramHash</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaSenderModel.AuthenticationScramHashEnum = {
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
 * @member {module:model/MsgVpnKafkaSenderModel.AuthenticationScramHashEnum} authenticationScramHash
 */
MsgVpnKafkaSenderModel.prototype.authenticationScramHash = undefined;

/**
 * The username the Kafka Sender uses to login to the remote Kafka broker.
 * @member {String} authenticationScramUsername
 */
MsgVpnKafkaSenderModel.prototype.authenticationScramUsername = undefined;

/**
 * Delay (in ms) to wait to accumulate a batch of messages to send. Batching is done for all Senders on a per-partition basis.
 * @member {Number} batchDelay
 */
MsgVpnKafkaSenderModel.prototype.batchDelay = undefined;

/**
 * Maximum number of messages sent in a single batch. Batching is done for all Senders on a per-partition basis.
 * @member {Number} batchMaxMsgCount
 */
MsgVpnKafkaSenderModel.prototype.batchMaxMsgCount = undefined;

/**
 * Maximum size of a message batch, in bytes (B). Batching is done for all Senders on a per-partition basis.
 * @member {Number} batchMaxSize
 */
MsgVpnKafkaSenderModel.prototype.batchMaxSize = undefined;

/**
 * Comma separated list of addresses (and optional ports) of brokers in the Kafka Cluster from which the state of the entire Kafka Cluster can be learned. If a port is not provided with an address it will default to 9092.
 * @member {String} bootstrapAddressList
 */
MsgVpnKafkaSenderModel.prototype.bootstrapAddressList = undefined;

/**
 * The name of the Client for the Kafka Sender.
 * @member {String} clientName
 */
MsgVpnKafkaSenderModel.prototype.clientName = undefined;

/**
 * Enable or disable the Kafka Sender.
 * @member {Boolean} enabled
 */
MsgVpnKafkaSenderModel.prototype.enabled = undefined;

/**
 * Indicates why the Kafka Sender is not operational.
 * @member {String} failureReason
 */
MsgVpnKafkaSenderModel.prototype.failureReason = undefined;

/**
 * Enable or disable idempotence for the Kafka Sender. Idempotence guarantees in order at-least-once message delivery to the remote Kafka Topic, at the expense of performance.
 * @member {Boolean} idempotenceEnabled
 */
MsgVpnKafkaSenderModel.prototype.idempotenceEnabled = undefined;

/**
 * The name of the Kafka Sender.
 * @member {String} kafkaSenderName
 */
MsgVpnKafkaSenderModel.prototype.kafkaSenderName = undefined;

/**
 * The name of the Message VPN.
 * @member {String} msgVpnName
 */
MsgVpnKafkaSenderModel.prototype.msgVpnName = undefined;

/**
 * Received message byte count.
 * @member {Number} rxMsgByteCount
 */
MsgVpnKafkaSenderModel.prototype.rxMsgByteCount = undefined;

/**
 * Received message count.
 * @member {Number} rxMsgCount
 */
MsgVpnKafkaSenderModel.prototype.rxMsgCount = undefined;

/**
 * Received request byte count.
 * @member {Number} rxRequestByteCount
 */
MsgVpnKafkaSenderModel.prototype.rxRequestByteCount = undefined;

/**
 * Received request count.
 * @member {Number} rxRequestCount
 */
MsgVpnKafkaSenderModel.prototype.rxRequestCount = undefined;

/**
 * Enable or disable compression for the Kafka Sender.
 * @member {Boolean} transportCompressionEnabled
 */
MsgVpnKafkaSenderModel.prototype.transportCompressionEnabled = undefined;

/**
 * Compression level. The valid range is dependent on the compression type.
 * @member {Number} transportCompressionLevel
 */
MsgVpnKafkaSenderModel.prototype.transportCompressionLevel = undefined;

/**
 * Allowed values for the <code>transportCompressionType</code> property.
 * @enum {String}
 * @readonly
 */
MsgVpnKafkaSenderModel.TransportCompressionTypeEnum = {
  /**
   * value: "gzip"
   * @const
   */
  gzip: "gzip",

  /**
   * value: "snappy"
   * @const
   */
  snappy: "snappy",

  /**
   * value: "lz4"
   * @const
   */
  lz4: "lz4",

  /**
   * value: "zstd"
   * @const
   */
  zstd: "zstd"
};
/**
 * Compression type. Only relevant if compression is enabled. The allowed values and their meaning are:  <pre> \"gzip\" - GZIP Compression. \"snappy\" - Snappy Compression. \"lz4\" - LZ4 Compression. \"zstd\" - Zstandard Compression. </pre> 
 * @member {module:model/MsgVpnKafkaSenderModel.TransportCompressionTypeEnum} transportCompressionType
 */
MsgVpnKafkaSenderModel.prototype.transportCompressionType = undefined;

/**
 * Enable or disable encryption (TLS) for the Kafka Sender.
 * @member {Boolean} transportTlsEnabled
 */
MsgVpnKafkaSenderModel.prototype.transportTlsEnabled = undefined;

/**
 * Sent message byte count.
 * @member {Number} txMsgByteCount
 */
MsgVpnKafkaSenderModel.prototype.txMsgByteCount = undefined;

/**
 * Sent message count.
 * @member {Number} txMsgCount
 */
MsgVpnKafkaSenderModel.prototype.txMsgCount = undefined;

/**
 * Sent request byte count.
 * @member {Number} txRequestByteCount
 */
MsgVpnKafkaSenderModel.prototype.txRequestByteCount = undefined;

/**
 * Sent request count.
 * @member {Number} txRequestCount
 */
MsgVpnKafkaSenderModel.prototype.txRequestCount = undefined;

/**
 * Indicates whether the Kafka Sender is operationally up.
 * @member {Boolean} up
 */
MsgVpnKafkaSenderModel.prototype.up = undefined;

/**
 * The amount of time in seconds since the Kafka Sender was up.
 * @member {Number} uptime
 */
MsgVpnKafkaSenderModel.prototype.uptime = undefined;

